import { useState } from "react";
import { PhotoUpload } from "@/components/PhotoUpload";
import { RoastResults } from "@/components/RoastResults"; 
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sparkles, Refrigerator, Brain } from "lucide-react";
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
      <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background z-10" />
          <img 
            src={fridgeHero}
            alt="Fridge contents"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative container mx-auto px-4 py-20 md:py-28 text-center z-20">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <span className="text-sm font-semibold text-primary">AI-Powered Analysis</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            <span className="flex items-center justify-center gap-3 md:gap-4 bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              <Refrigerator className="w-12 h-12 md:w-16 md:h-16 text-primary" /> 
              Fridge Analyzer 
              <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-accent" />
            </span>
          </h1>
          
          <p className="text-xl md:text-3xl font-semibold text-foreground mb-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Get honest, actionable feedback on your refrigerator organization
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
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
      <footer className="relative border-t bg-gradient-to-br from-muted/30 via-muted/50 to-muted/30 py-12 mt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle opacity-50" />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
              <div className="text-center md:text-left space-y-3">
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Fridge Analyzer
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Helping you maintain a healthier, more organized fridge through AI-powered insights.
                </p>
              </div>
              
              <TooltipProvider>
                <Tooltip delayDuration={200}>
                  <TooltipTrigger asChild>
                    <Card className="hover-scale cursor-help border-primary/20 bg-card/50 backdrop-blur-sm">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Brain className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold">How it works?</p>
                            <p className="text-xs text-muted-foreground">Hover to learn more</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent className="max-w-xs p-4" side="left">
                    <p className="text-xs leading-relaxed">
                      Uses advanced computer vision and AI models to analyze multiple angles of your refrigerator. 
                      The system processes images through pattern recognition algorithms to identify food items, 
                      storage practices, and organization patterns, then generates actionable insights.
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            
            <div className="border-t border-border/50 pt-6 flex justify-center items-center text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                Made with <span className="text-lg animate-pulse">💚</span> to help reduce food waste
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
