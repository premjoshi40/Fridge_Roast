import { useState } from "react";
import { PhotoUpload } from "@/components/PhotoUpload";
import { RoastResults } from "@/components/RoastResults"; 
import { Card, CardContent } from "@/components/ui/card";
import fridgeHero from "@/assets/fridge-hero.jpg";

const Index = () => {
  const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);

  const handlePhotosSelected = (photos: File[]) => {
    setSelectedPhotos(photos);
  };

  const handleReset = () => {
    setSelectedPhotos([]);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-roast">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={fridgeHero}
            alt="Fridge contents"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 animate-roast-reveal">
            🥗 Fridge Analyzer 📊
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto">
            Get honest, actionable feedback on your refrigerator organization
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Upload 3+ photos of your fridge from different angles for a comprehensive analysis. 
            We'll help you optimize storage, reduce waste, and maintain food freshness.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {selectedPhotos.length === 0 ? (
            <div className="space-y-8">
              <PhotoUpload onPhotosSelected={handlePhotosSelected} />
              
              {/* How It Works */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                      <div className="text-4xl">📸</div>
                      <h3 className="font-semibold">1. Upload 3+ Photos</h3>
                      <p className="text-sm text-muted-foreground">
                        Take multiple angles of your fridge for best results.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl">🤖</div>
                      <h3 className="font-semibold">2. AI Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Our AI analyzes organization, freshness, and storage.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl">✅</div>
                      <h3 className="font-semibold">3. Get Feedback</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive actionable insights to improve your fridge.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <RoastResults photos={selectedPhotos} onReset={handleReset} />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">
            <span className="font-semibold text-primary">Fridge Analyzer</span> - Helping you maintain a healthier, more organized fridge.
          </p>
          <p className="text-sm">
            Made with 💚 to help reduce food waste and improve food storage.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
