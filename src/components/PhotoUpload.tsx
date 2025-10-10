import { useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Upload, X } from "lucide-react";
import cameraIcon from "@/assets/camera-roast-icon.png";

interface PhotoUploadProps {
  onPhotoSelected: (photo: File) => void;
}

export const PhotoUpload = ({ onPhotoSelected }: PhotoUploadProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  // Hidden inputs for reliable file selection across browsers/iframes
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const cameraInputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = useCallback(
    (files: FileList | null) => {
      if (files && files[0]) {
        const file = files[0];
        if (file.type.startsWith("image/")) {
          const url = URL.createObjectURL(file);
          setPreview(url);
          onPhotoSelected(file);
        }
      }
    },
    [onPhotoSelected],
  );

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
      handleFiles(e.dataTransfer.files);
    },
    [handleFiles],
  );

  const clearPreview = () => {
    setPreview(null);
  };

  const triggerFileInput = () => fileInputRef.current?.click();
  const triggerCamera = () => cameraInputRef.current?.click();

  if (preview) {
    return (
      <Card className="relative overflow-hidden animate-roast-reveal">
        <CardContent className="p-0">
          <img src={preview} alt="Fridge preview" className="w-full h-64 object-cover" />
          <Button variant="destructive" size="icon" className="absolute top-2 right-2" onClick={clearPreview}>
            <X className="h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card
      className={`border-2 border-dashed transition-all duration-300 ${dragActive ? "border-primary bg-primary/5 shadow-roast" : "border-muted-foreground/25 hover:border-primary/50"}`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <CardContent className="flex flex-col items-center justify-center p-8 text-center">
        {/* Hidden inputs for robust uploads */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
        <input
          ref={cameraInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        <img src={cameraIcon} alt="Camera" className="w-16 h-16 mb-4 opacity-80" />
        <h3 className="text-lg font-semibold mb-2">Ready to get roasted?</h3>
        <p className="text-muted-foreground mb-6">
          Take a photo of your fridge and prepare for some honest feedback about your food choices.
        </p>
        <div className="flex gap-3 flex-wrap justify-center">
          <Button variant="hero" onClick={triggerCamera} className="gap-2">
            <Camera className="h-5 w-5" />
            Open Camera
          </Button>
          <Button variant="roast" onClick={triggerFileInput} className="gap-2">
            <Upload className="h-5 w-5" />
            Upload Photo
          </Button>
        </div>
        <p className="text-xs text-muted-foreground mt-4">Or drag and drop an image here</p>
      </CardContent>
    </Card>
  );
};
