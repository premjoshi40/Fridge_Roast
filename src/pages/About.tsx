import { Card } from "@/components/ui/card";
import { Award, BookOpen, Code, Users, Briefcase } from "lucide-react";

export default function About() {
  const certifications = [
    { name: "AWS Certified Solutions Architect", year: "2024" },
    { name: "AWS Certified Developer", year: "2023" },
  ];

  const values = [
    {
      icon: Users,
      title: "User-Centric",
      description: "Building products that solve real user problems with measurable impact",
    },
    {
      icon: Code,
      title: "Technical Depth",
      description: "Deep understanding of cloud architecture and ML systems",
    },
    {
      icon: BookOpen,
      title: "Data-Driven",
      description: "Making decisions based on metrics, analytics, and user feedback",
    },
    {
      icon: Award,
      title: "Quality First",
      description: "Committed to excellence in every product delivered",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
          <p className="text-lg text-muted-foreground">
            Passionate about building products that make a difference
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-3xl font-bold">My Journey</h2>
            <p className="text-muted-foreground">
              With over 6 years of experience in product management, I've led cross-functional
              teams to deliver innovative solutions in cloud computing and machine learning.
            </p>
            <p className="text-muted-foreground">
              My background in technology gives me a unique advantage in bridging the gap
              between technical teams and business stakeholders, ensuring products are both
              technically sound and business-viable.
            </p>
            <p className="text-muted-foreground">
              I'm passionate about leveraging AWS cloud services and ML technologies to build
              scalable, efficient products that drive measurable business outcomes.
            </p>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                    <div>
                      <p className="font-medium">{cert.name}</p>
                      <p className="text-sm text-muted-foreground">Certified {cert.year}</p>
                    </div>
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {[
              {
                role: "Senior Product Manager",
                company: "Tech Corp",
                period: "2022 - Present",
                description: "Leading cloud and ML product initiatives, managing cross-functional teams of 15+",
              },
              {
                role: "Product Manager",
                company: "Innovation Labs",
                period: "2020 - 2022",
                description: "Launched 5+ successful products, driving $10M+ in revenue",
              },
              {
                role: "Associate Product Manager",
                company: "Startup Inc",
                period: "2019 - 2020",
                description: "Built MVP products from 0 to 1, achieving product-market fit",
              },
            ].map((exp, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-muted-foreground mb-2">
                      {exp.company} • {exp.period}
                    </p>
                    <p className="text-sm text-muted-foreground">{exp.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
