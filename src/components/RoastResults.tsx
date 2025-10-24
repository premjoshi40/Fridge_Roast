import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RotateCcw, Share2, Trophy, AlertTriangle, CheckCircle, Info } from "lucide-react";

interface RoastResultsProps {
  photos: File[];
  onReset: () => void;
}

interface FeedbackData {
  score: number;
  summary: string;
  findings: Array<{
    category: string;
    status: 'needs-improvement' | 'good' | 'excellent';
    message: string;
  }>;
  recommendations: string[];
}

export const RoastResults = ({ photos, onReset }: RoastResultsProps) => {
  const [results, setResults] = useState<FeedbackData | null>(null);
  const [loading, setLoading] = useState(true);

  // Mock AI analysis - in a real app this would call an AI service
  const analyzePhotos = async (photos: File[]): Promise<FeedbackData> => {
    // Simulate API call delay (longer for multiple photos)
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockResults: FeedbackData[] = [
      {
        score: 5,
        summary: "Your refrigerator has potential but needs better organization and maintenance. Based on the ${photos.length} photos analyzed, several areas need attention to improve food safety and reduce waste.",
        findings: [
          { category: "Organization", status: "needs-improvement", message: "Items are scattered without a clear system. Group similar items together for easier access." },
          { category: "Temperature Zones", status: "good", message: "You're using different shelves appropriately, but could optimize placement for better freshness." },
          { category: "Food Freshness", status: "needs-improvement", message: "Several items appear to be past their prime. Regular rotation is needed." },
          { category: "Storage Containers", status: "good", message: "Good use of containers in some areas, but inconsistent throughout." }
        ],
        recommendations: [
          "Implement the FIFO method (First In, First Out) to rotate older items to the front",
          "Use clear, airtight containers to extend food freshness and visibility",
          "Clean shelves weekly and check expiration dates during cleaning",
          "Store raw meat on bottom shelf to prevent cross-contamination"
        ]
      },
      {
        score: 7,
        summary: "Good refrigerator management overall! Your ${photos.length} photos show a well-maintained fridge with room for minor improvements.",
        findings: [
          { category: "Organization", status: "good", message: "Clear categorization of items. Vegetables, dairy, and proteins are well separated." },
          { category: "Temperature Zones", status: "excellent", message: "Excellent use of appropriate zones. Dairy in the door, vegetables in crisper drawers." },
          { category: "Food Freshness", status: "good", message: "Most items appear fresh. A few items could use attention but overall very good." },
          { category: "Storage Containers", status: "excellent", message: "Consistent use of proper storage containers maintains freshness effectively." }
        ],
        recommendations: [
          "Consider adding date labels to opened items for better tracking",
          "The few items in the back corners need better visibility",
          "Continue your current practices - they're working well",
          "Share your organization system with friends who need help!"
        ]
      },
      {
        score: 9,
        summary: "Outstanding refrigerator management! Your ${photos.length} photos showcase an exemplary approach to food storage and organization.",
        findings: [
          { category: "Organization", status: "excellent", message: "Professional-level organization. Every item has its place with clear categorization." },
          { category: "Temperature Zones", status: "excellent", message: "Perfect understanding of temperature zones. Items placed for optimal preservation." },
          { category: "Food Freshness", status: "excellent", message: "All items appear fresh and properly stored. Clear rotation system in place." },
          { category: "Storage Containers", status: "excellent", message: "Uniform, high-quality containers with proper sealing. Labels clearly visible." }
        ],
        recommendations: [
          "Your system is exemplary - maintain these excellent practices",
          "Consider documenting your system to help others improve",
          "Monitor humidity levels in crisper drawers for even better results",
          "You're already doing everything right - keep it up!"
        ]
      }
    ];

    return mockResults[Math.floor(Math.random() * mockResults.length)];
  };

  useEffect(() => {
    analyzePhotos(photos).then(results => {
      setResults(results);
      setLoading(false);
    });
  }, [photos]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'needs-improvement': return <AlertTriangle className="h-4 w-4 text-destructive" />;
      case 'good': return <Info className="h-4 w-4 text-accent-foreground" />;
      case 'excellent': return <CheckCircle className="h-4 w-4 text-primary" />;
      default: return null;
    }
  };

  const shareResults = () => {
    if (navigator.share && results) {
      navigator.share({
        title: 'My Fridge Analysis Results',
        text: `I got a ${results.score}/10 fridge organization score! Check out my analysis.`,
        url: window.location.href
      });
    }
  };

  if (loading) {
    return (
      <Card className="animate-pulse">
        <CardContent className="flex flex-col items-center justify-center p-8">
          <div className="animate-pulse-glow w-16 h-16 bg-gradient-roast rounded-full mb-4"></div>
          <h3 className="text-lg font-semibold mb-2">Analyzing your {photos.length} photos...</h3>
          <p className="text-muted-foreground text-center">
            Our AI is examining organization, freshness, and storage practices across all angles. This comprehensive analysis will take a moment... 📊
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
            {results.summary}
          </p>
        </CardContent>
      </Card>

      {/* Findings */}
      <Card>
        <CardHeader>
          <CardTitle>Analysis Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {results.findings.map((finding, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
              {getStatusIcon(finding.status)}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">{finding.category}</span>
                  <Badge 
                    variant={
                      finding.status === 'needs-improvement' ? 'destructive' :
                      finding.status === 'good' ? 'secondary' : 'default'
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

      {/* Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle>Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {results.recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary font-bold">•</span>
                <span className="text-sm">{recommendation}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-3 justify-center flex-wrap">
        <Button variant="fresh" onClick={onReset} className="gap-2">
          <RotateCcw className="h-4 w-4" />
          Analyze Another Fridge
        </Button>
        <Button variant="outline" onClick={shareResults} className="gap-2">
          <Share2 className="h-4 w-4" />
          Share Results
        </Button>
      </div>
    </div>
  );
};