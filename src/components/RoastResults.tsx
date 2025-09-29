import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, Share2, Trophy, AlertTriangle, CheckCircle } from "lucide-react";

interface RoastResultsProps {
  photo: File;
  onReset: () => void;
}

interface RoastData {
  score: number;
  roastMessage: string;
  findings: Array<{
    item: string;
    status: 'expired' | 'questionable' | 'fresh';
    message: string;
  }>;
  tips: string[];
}

export const RoastResults = ({ photo, onReset }: RoastResultsProps) => {
  const [results, setResults] = useState<RoastData | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock AI analysis - in a real app this would call an AI service
  const analyzePhoto = async (photo: File): Promise<RoastData> => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const mockResults: RoastData[] = [
      {
        score: 3,
        roastMessage: "Congratulations! Your fridge looks like a science experiment gone wrong. That expired yogurt has probably evolved its own ecosystem by now. 🧪",
        findings: [
          { item: "Greek Yogurt", status: "expired", message: "This yogurt expired when dinosaurs roamed the Earth" },
          { item: "Lettuce", status: "questionable", message: "More wilted than your motivation to cook" },
          { item: "Milk", status: "expired", message: "Chunky milk is not a feature, it's a warning" },
          { item: "Apples", status: "fresh", message: "Surprisingly still edible! Gold star for you" }
        ],
        tips: [
          "Check expiration dates occasionally (novel concept, I know)",
          "Vegetables don't improve with age like wine",
          "Consider meal planning before your next shopping spree"
        ]
      },
      {
        score: 7,
        roastMessage: "Not terrible, but that lonely takeout container in the corner is judging your life choices. At least you have some fresh stuff! 🥡",
        findings: [
          { item: "Leftover Pizza", status: "questionable", message: "Day 3 pizza hits different... in a bad way" },
          { item: "Fresh Carrots", status: "fresh", message: "Look at you being all healthy!" },
          { item: "Cheese", status: "fresh", message: "Quality dairy game strong" },
          { item: "Energy Drinks", status: "questionable", message: "Your liver called, it wants to have a word" }
        ],
        tips: [
          "Eat leftovers within 3 days, not 3 weeks",
          "Keep up the fresh veggie momentum!",
          "Maybe balance the energy drinks with actual food?"
        ]
      },
      {
        score: 9,
        roastMessage: "Wow, an actual responsible adult! Your fridge is so organized it makes Marie Kondo jealous. Show off. 🌟",
        findings: [
          { item: "Fresh Vegetables", status: "fresh", message: "Rainbow of nutrients, very impressive" },
          { item: "Organic Milk", status: "fresh", message: "Fancy and fresh, living your best life" },
          { item: "Meal Prep Containers", status: "fresh", message: "Prepared and organized? Witch!" },
          { item: "Fresh Herbs", status: "fresh", message: "Look at this culinary master over here" }
        ],
        tips: [
          "Keep being awesome!",
          "Maybe teach your friends your ways",
          "Consider starting a food blog, you're clearly qualified"
        ]
      }
    ];

    return mockResults[Math.floor(Math.random() * mockResults.length)];
  };

  useEffect(() => {
    analyzePhoto(photo).then(results => {
      setResults(results);
      setLoading(false);
    });
  }, [photo]);

  const getScoreColor = (score: number) => {
    if (score <= 4) return "destructive";
    if (score <= 7) return "warning";
    return "fresh";
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'expired': return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case 'questionable': return <AlertTriangle className="h-4 w-4 text-accent-foreground" />;
      case 'fresh': return <CheckCircle className="h-4 w-4 text-secondary" />;
      default: return null;
    }
  };

  const shareResults = () => {
    if (navigator.share && results) {
      navigator.share({
        title: 'My Fridge Got Roasted!',
        text: `I got a ${results.score}/10 fridge score: ${results.roastMessage}`,
        url: window.location.href
      });
    }
  };

  if (loading) {
    return (
      <Card className="animate-pulse">
        <CardContent className="flex flex-col items-center justify-center p-8">
          <div className="animate-pulse-glow w-16 h-16 bg-gradient-roast rounded-full mb-4"></div>
          <h3 className="text-lg font-semibold mb-2">Analyzing your fridge...</h3>
          <p className="text-muted-foreground text-center">
            Our AI is carefully examining your food choices and preparing some honest feedback. This might hurt a little... 🔥
          </p>
        </CardContent>
      </Card>
    );
  }

  if (!results) return null;

  return (
    <div className="space-y-6 animate-roast-reveal">
      {/* Score Card */}
      <Card className="bg-gradient-roast text-primary-foreground shadow-roast">
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Trophy className="h-8 w-8" />
            <span className="text-3xl font-bold">{results.score}/10</span>
          </div>
          <CardTitle className="text-xl">Your Fridge Score</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-lg leading-relaxed">
            {results.roastMessage}
          </p>
        </CardContent>
      </Card>

      {/* Findings */}
      <Card>
        <CardHeader>
          <CardTitle>What We Found</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {results.findings.map((finding, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              {getStatusIcon(finding.status)}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{finding.item}</span>
                  <Badge 
                    variant={
                      finding.status === 'expired' ? 'destructive' :
                      finding.status === 'questionable' ? 'secondary' : 'default'
                    }
                    className="text-xs"
                  >
                    {finding.status}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{finding.message}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Pro Tips (You Might Need These)</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {results.tips.map((tip, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm">{tip}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-center flex-wrap">
        <Button variant="fresh" onClick={onReset} className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Roast Another Fridge
        </Button>
        <Button variant="outline" onClick={shareResults} className="gap-2">
          <Share2 className="h-4 w-4" />
          Share My Shame
        </Button>
      </div>
    </div>
  );
};