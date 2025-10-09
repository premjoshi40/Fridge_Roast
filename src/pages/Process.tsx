import { Card } from "@/components/ui/card";
import { Lightbulb, Users, Target, Rocket, LineChart, RefreshCw } from "lucide-react";

export default function Process() {
  const steps = [
    {
      icon: Lightbulb,
      title: "Discovery & Research",
      description: "Understanding user needs, market opportunities, and business goals through research and data analysis",
      activities: [
        "User interviews & surveys",
        "Market research & competitive analysis",
        "Stakeholder alignment sessions",
        "Data analysis & insights gathering"
      ],
      color: "from-blue-500/20 to-blue-500/5",
      iconBg: "bg-blue-500/10 text-blue-500"
    },
    {
      icon: Users,
      title: "Problem Definition",
      description: "Clearly defining the problem space and validating assumptions with stakeholders",
      activities: [
        "Problem statement creation",
        "User persona development",
        "Pain point identification",
        "Success metrics definition"
      ],
      color: "from-purple-500/20 to-purple-500/5",
      iconBg: "bg-purple-500/10 text-purple-500"
    },
    {
      icon: Target,
      title: "Strategy & Prioritization",
      description: "Creating product strategy, roadmap, and prioritizing features based on impact and effort",
      activities: [
        "Product roadmap creation",
        "Feature prioritization (RICE, ICE)",
        "Technical feasibility assessment",
        "Resource planning"
      ],
      color: "from-green-500/20 to-green-500/5",
      iconBg: "bg-green-500/10 text-green-500"
    },
    {
      icon: Rocket,
      title: "Execution & Delivery",
      description: "Working with cross-functional teams to build, test, and ship the product",
      activities: [
        "Sprint planning & execution",
        "Daily standups & check-ins",
        "UAT & quality assurance",
        "Go-to-market planning"
      ],
      color: "from-orange-500/20 to-orange-500/5",
      iconBg: "bg-orange-500/10 text-orange-500"
    },
    {
      icon: LineChart,
      title: "Launch & Measurement",
      description: "Launching the product and measuring success against defined KPIs",
      activities: [
        "Product launch execution",
        "KPI tracking & monitoring",
        "User feedback collection",
        "Performance analysis"
      ],
      color: "from-pink-500/20 to-pink-500/5",
      iconBg: "bg-pink-500/10 text-pink-500"
    },
    {
      icon: RefreshCw,
      title: "Iteration & Optimization",
      description: "Continuously improving the product based on data, feedback, and learnings",
      activities: [
        "A/B testing & experimentation",
        "Feature optimization",
        "Technical debt management",
        "Continuous discovery"
      ],
      color: "from-teal-500/20 to-teal-500/5",
      iconBg: "bg-teal-500/10 text-teal-500"
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Product Process</h1>
          <p className="text-lg text-muted-foreground">
            A systematic approach to building products that deliver measurable value
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
                )}

                <Card className={`p-8 hover:shadow-xl transition-all bg-gradient-to-br ${step.color}`}>
                  <div className="flex items-start gap-6">
                    {/* Step Number & Icon */}
                    <div className="flex flex-col items-center gap-4 shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-primary-foreground font-bold text-2xl">
                        {index + 1}
                      </div>
                      <div className={`w-14 h-14 rounded-xl ${step.iconBg} flex items-center justify-center`}>
                        <step.icon className="w-7 h-7" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground mb-6">{step.description}</p>

                      {/* Activities */}
                      <div className="grid md:grid-cols-2 gap-3">
                        {step.activities.map((activity, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm bg-card/50 backdrop-blur-sm p-3 rounded-lg"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            <span>{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Key Principles */}
        <div className="max-w-4xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Key Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Data-Driven",
                description: "Every decision backed by metrics and user feedback"
              },
              {
                title: "User-Centric",
                description: "Always starting with user needs and pain points"
              },
              {
                title: "Iterative",
                description: "Continuous improvement through rapid experimentation"
              }
            ].map((principle, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-all animate-fade-in"
                style={{ animationDelay: `${(index + steps.length) * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-2">{principle.title}</h3>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
