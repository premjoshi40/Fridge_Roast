import { useState } from "react";
import { PhotoUpload } from "@/components/PhotoUpload";
import { RoastResults } from "@/components/RoastResults"; 
import { Card, CardContent } from "@/components/ui/card";
import fridgeHero from "@/assets/fridge-hero.jpg";

const Index = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);

  const handlePhotoSelected = (photo: File) => {
    setSelectedPhoto(photo);
  };

  const handleReset = () => {
    setSelectedPhoto(null);
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
            🔥 Fridge Roaster 🔥
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 max-w-3xl mx-auto">
            The brutally honest app that calls out your expired groceries
          </p>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Take a photo of your fridge and get roasted harder than your forgotten vegetables. 
            Because someone needs to tell you the truth about that 3-week-old yogurt.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {!selectedPhoto ? (
            <div className="space-y-8">
              <PhotoUpload onPhotoSelected={handlePhotoSelected} />
              
              {/* How It Works */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4 text-center">How It Works</h2>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="space-y-2">
                      <div className="text-4xl">📸</div>
                      <h3 className="font-semibold">1. Snap Your Fridge</h3>
                      <p className="text-sm text-muted-foreground">
                        Take a photo of your fridge contents. Be brave.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl">🤖</div>
                      <h3 className="font-semibold">2. AI Analysis</h3>
                      <p className="text-sm text-muted-foreground">
                        Our AI judges your food choices without mercy.
                      </p>
                    </div>
                    <div className="space-y-2">
                      <div className="text-4xl">🔥</div>
                      <h3 className="font-semibold">3. Get Roasted</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive honest feedback and reduce food waste.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <RoastResults photo={selectedPhoto} onReset={handleReset} />
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/50 py-8 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p className="mb-2">
            <span className="font-semibold text-primary">Fridge Roaster</span> - Fighting food waste with humor, one roast at a time.
          </p>
          <p className="text-sm">
            Made with 🔥 and a lot of expired groceries for inspiration.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
