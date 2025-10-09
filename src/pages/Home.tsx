import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Award, Briefcase, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  const stats = [
    { value: "6+", label: "Years Experience", icon: Briefcase },
    { value: "10+", label: "Products Shipped", icon: TrendingUp },
    { value: "2", label: "AWS Certifications", icon: Award },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-6 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Product Manager
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Hello, I'm
              <br />
              <span className="text-primary">Prem Joshi</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg">
              I'm a <span className="font-semibold text-foreground">Product Manager</span> specializing in{" "}
              <span className="font-semibold text-foreground">Cloud & ML</span> solutions.
              I strive to build impactful products that drive measurable business outcomes
              through data-driven decision making and user-centric design.
            </p>

            <div className="flex gap-4">
              <Link to="/contact">
                <Button size="lg" className="rounded-full">
                  Let's Connect
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="rounded-full">
                  View Portfolio
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-transparent rounded-3xl"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
                alt="Professional headshot"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Preview */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering measurable impact through strategic product management
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Cloud Security Platform",
              description: "Automated compliance monitoring for AWS infrastructure",
              impact: "40% reduction in security incidents",
              tags: ["AWS", "Security", "Automation"],
            },
            {
              title: "ML Model Pipeline",
              description: "End-to-end ML deployment infrastructure",
              impact: "3x faster model deployment",
              tags: ["ML", "Python", "DevOps"],
            },
            {
              title: "Analytics Dashboard",
              description: "Real-time business intelligence platform",
              impact: "$2M annual cost savings",
              tags: ["Analytics", "React", "AWS"],
            },
          ].map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Briefcase className="w-12 h-12 text-primary opacity-50" />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-green-600">{project.impact}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-secondary text-secondary-foreground px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/portfolio">
            <Button size="lg" variant="outline" className="rounded-full">
              View All Projects
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
