import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, DollarSign } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      title: "Cloud Security Automation Platform",
      description: "Led development of automated compliance monitoring system for AWS infrastructure, reducing security incidents and improving audit readiness.",
      impact: [
        { icon: TrendingUp, label: "40% reduction", detail: "in security incidents" },
        { icon: Users, label: "50+ teams", detail: "onboarded" },
        { icon: DollarSign, label: "$1.5M saved", detail: "annually" }
      ],
      role: "Senior Product Manager",
      duration: "12 months",
      tags: ["AWS", "Security", "Python", "Lambda"],
      outcomes: [
        "Automated 90% of manual compliance checks",
        "Reduced MTTR from 4 hours to 15 minutes",
        "Achieved SOC 2 Type II certification",
        "Scaled to 200+ AWS accounts"
      ],
      link: "#"
    },
    {
      title: "ML Model Deployment Pipeline",
      description: "Built end-to-end MLOps infrastructure enabling data scientists to deploy models to production in minutes instead of weeks.",
      impact: [
        { icon: TrendingUp, label: "3x faster", detail: "deployment time" },
        { icon: Users, label: "30+ DS", detail: "users" },
        { icon: DollarSign, label: "80% cost", detail: "reduction" }
      ],
      role: "Product Manager",
      duration: "9 months",
      tags: ["SageMaker", "MLOps", "Docker", "Kubernetes"],
      outcomes: [
        "Deployment time reduced from 3 weeks to 2 days",
        "99.9% model uptime achieved",
        "Enabled 50+ model deployments per month",
        "Built self-service platform"
      ],
      link: "#"
    },
    {
      title: "Real-Time Analytics Dashboard",
      description: "Created business intelligence platform providing real-time insights into product usage, customer behavior, and revenue metrics.",
      impact: [
        { icon: TrendingUp, label: "2x faster", detail: "insights" },
        { icon: Users, label: "200+ users", detail: "daily active" },
        { icon: DollarSign, label: "$2M saved", detail: "annually" }
      ],
      role: "Product Manager",
      duration: "8 months",
      tags: ["React", "AWS", "BigQuery", "Data Pipeline"],
      outcomes: [
        "Real-time data with < 5 min latency",
        "Custom dashboards for 10+ teams",
        "Automated 100+ manual reports",
        "Improved decision-making speed by 60%"
      ],
      link: "#"
    },
    {
      title: "API Gateway & Developer Platform",
      description: "Designed and launched unified API gateway enabling external developers to integrate with our platform securely and efficiently.",
      impact: [
        { icon: TrendingUp, label: "10x growth", detail: "API calls" },
        { icon: Users, label: "500+ devs", detail: "onboarded" },
        { icon: DollarSign, label: "$5M revenue", detail: "new stream" }
      ],
      role: "Senior Product Manager",
      duration: "15 months",
      tags: ["API Design", "AWS API Gateway", "Documentation"],
      outcomes: [
        "99.99% API uptime",
        "Rate limiting & security controls",
        "Interactive API documentation",
        "Self-service onboarding"
      ],
      link: "#"
    },
    {
      title: "Automated Evidence Collection System",
      description: "Automated compliance evidence gathering across 50+ security controls, reducing audit preparation time by 70%.",
      impact: [
        { icon: TrendingUp, label: "70% faster", detail: "audit prep" },
        { icon: Users, label: "15 teams", detail: "benefited" },
        { icon: DollarSign, label: "$800K saved", detail: "annually" }
      ],
      role: "Product Manager",
      duration: "6 months",
      tags: ["Python", "S3", "Lambda", "Automation"],
      outcomes: [
        "Automated evidence for 50+ controls",
        "Reduced audit prep from 6 weeks to 2 weeks",
        "99% evidence accuracy rate",
        "Continuous compliance monitoring"
      ],
      link: "#"
    },
    {
      title: "Customer Risk Scoring Engine",
      description: "ML-powered risk assessment system for customer onboarding, improving fraud detection while reducing false positives.",
      impact: [
        { icon: TrendingUp, label: "45% better", detail: "detection" },
        { icon: Users, label: "50K customers", detail: "scored daily" },
        { icon: DollarSign, label: "$3M fraud", detail: "prevented" }
      ],
      role: "Product Manager",
      duration: "10 months",
      tags: ["ML", "SageMaker", "Risk Analysis", "Python"],
      outcomes: [
        "Reduced false positives by 60%",
        "Real-time risk scoring (< 500ms)",
        "Prevented $3M+ in fraud",
        "Improved customer experience"
      ],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            Products and features that delivered measurable business impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-2xl transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Left: Main Info */}
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h2>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="font-medium">{project.role}</span>
                      <span>•</span>
                      <span>{project.duration}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <Badge key={i} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Key Outcomes */}
                  <div>
                    <h4 className="font-semibold mb-3">Key Outcomes</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {project.outcomes.map((outcome, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button variant="outline" size="sm" className="gap-2">
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </Button>
                </div>

                {/* Right: Impact Metrics */}
                <div className="space-y-4">
                  <h4 className="font-semibold mb-4">Impact Metrics</h4>
                  {project.impact.map((metric, i) => (
                    <Card key={i} className="p-4 bg-gradient-to-br from-primary/5 to-transparent">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                          <metric.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-bold text-lg">{metric.label}</div>
                          <div className="text-sm text-muted-foreground">{metric.detail}</div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Card className="p-8 max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-transparent">
            <h3 className="text-2xl font-bold mb-4">Interested in working together?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help drive impact for your product
            </p>
            <Button size="lg" className="rounded-full">
              Get in Touch
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
