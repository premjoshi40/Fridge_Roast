import { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Upload, X, Image as ImageIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PhotoUploadProps {
  onPhotosSelected: (photos: File[]) => void;
}

export const PhotoUpload = ({ onPhotosSelected }: PhotoUploadProps) => {
  const [photos, setPhotos] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const { toast } = useToast();
  
  const MIN_PHOTOS = 3;

  // Hidden inputs for reliable file selection across browsers/iframes
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);

  const handleFilesSelect = useCallback((files: FileList | File[]) => {
    const fileArray = Array.from(files);
    const imageFiles = fileArray.filter(file => file.type.startsWith('image/'));
    
    if (imageFiles.length === 0) {
      toast({
        title: "Invalid file type",
        description: "Please select image files",
        variant: "destructive",
      });
      return;
    }

    const newPhotos = [...photos, ...imageFiles];
    const newPreviews = [...previews];
    
    imageFiles.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews.push(reader.result as string);
        if (newPreviews.length === newPhotos.length) {
          setPreviews(newPreviews);
        }
      };
      reader.readAsDataURL(file);
    });
    
    setPhotos(newPhotos);
  }, [photos, previews, toast]);

  const removePhoto = (index: number) => {
    const newPhotos = photos.filter((_, i) => i !== index);
    const newPreviews = previews.filter((_, i) => i !== index);
    setPhotos(newPhotos);
    setPreviews(newPreviews);
  };

  const handleAnalyze = () => {
    if (photos.length < MIN_PHOTOS) {
      toast({
        title: "More photos needed",
        description: `Please upload at least ${MIN_PHOTOS} photos for accurate analysis`,
        variant: "destructive",
      });
      return;
    }
    onPhotosSelected(photos);
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      const files = e.dataTransfer.files;
      if (files.length > 0) handleFilesSelect(files);
    },
    [handleFilesSelect],
  );

  const triggerFileInput = () => fileInputRef.current?.click();
  const triggerCamera = () => cameraInputRef.current?.click();

  return (
    <Card
      className={`border-2 border-dashed transition-all duration-300 ${dragActive ? "border-primary bg-primary/5 shadow-roast" : "border-muted-foreground/25 hover:border-primary/50"}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div className="p-4 bg-primary/10 rounded-full">
              <ImageIcon className="h-12 w-12 text-primary" />
            </div>
          </div>
          
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-2">Upload Fridge Photos</h3>
            <p className="text-sm text-muted-foreground mb-2">
              Upload at least {MIN_PHOTOS} photos from different angles
            </p>
            <p className="text-xs text-muted-foreground">
              Currently uploaded: {photos.length} photo{photos.length !== 1 ? 's' : ''}
            </p>
          </div>

          {previews.length > 0 && (
            <div className="grid grid-cols-3 gap-3 max-w-md mx-auto">
              {previews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img
                    src={preview}
                    alt={`Fridge ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => removePhoto(index)}
                    className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-3 justify-center flex-wrap">
            <Button
              variant="hero"
              onClick={triggerCamera}
              className="gap-2"
            >
              <Camera className="h-4 w-4" />
              Take Photo
            </Button>

            <Button
              variant="roast"
              onClick={triggerFileInput}
              className="gap-2"
            >
              <Upload className="h-4 w-4" />
              Add Photos
            </Button>

            {photos.length > 0 && (
              <Button
                variant={photos.length >= MIN_PHOTOS ? "default" : "outline"}
                onClick={handleAnalyze}
                className="gap-2"
              >
                Analyze {photos.length >= MIN_PHOTOS ? `(${photos.length} photos)` : `(Need ${MIN_PHOTOS - photos.length} more)`}
              </Button>
            )}
          </div>

          {/* Hidden inputs for robust uploads */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={(e) => {
              const files = e.target.files;
              if (files && files.length > 0) handleFilesSelect(files);
            }}
          />
          
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            className="hidden"
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFilesSelect([file]);
            }}
          />

          <p className="text-xs text-muted-foreground text-center mt-2">
            Or drag and drop images here
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
