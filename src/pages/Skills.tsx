import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cloud, Database, Brain, Code, Users, LineChart } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: Cloud,
      category: "Cloud & Infrastructure",
      skills: ["AWS (S3, Lambda, EC2, RDS)", "CloudFormation", "Terraform", "Docker", "Kubernetes"],
      color: "text-blue-500",
    },
    {
      icon: Brain,
      category: "Machine Learning",
      skills: ["SageMaker", "Model Deployment", "MLOps", "Data Pipelines", "Feature Engineering"],
      color: "text-purple-500",
    },
    {
      icon: Database,
      category: "Data & Analytics",
      skills: ["SQL", "Python", "Data Modeling", "ETL Pipelines", "BigQuery"],
      color: "text-green-500",
    },
    {
      icon: Code,
      category: "Technical Stack",
      skills: ["Python", "JavaScript", "React", "APIs", "Git"],
      color: "text-orange-500",
    },
    {
      icon: Users,
      category: "Product Management",
      skills: ["Product Strategy", "Roadmap Planning", "Stakeholder Management", "Agile/Scrum", "User Research"],
      color: "text-pink-500",
    },
    {
      icon: LineChart,
      category: "Analytics & Metrics",
      skills: ["KPI Definition", "A/B Testing", "Data Analysis", "Mixpanel", "Google Analytics"],
      color: "text-teal-500",
    },
  ];

  const tools = [
    "Jira", "Confluence", "Figma", "Miro", "Notion", "Slack",
    "AWS Console", "GitHub", "Postman", "Tableau", "Looker", "DataDog"
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Skills & Expertise</h1>
          <p className="text-lg text-muted-foreground">
            A comprehensive toolkit for building and scaling successful products
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center ${category.color}`}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold">{category.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <Badge key={i} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-center">Tools & Platforms</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {tools.map((tool, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Competency Levels */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Core Competencies</h2>
          <div className="space-y-6">
            {[
              { skill: "Product Strategy & Vision", level: 95 },
              { skill: "Technical Architecture", level: 90 },
              { skill: "Cloud Infrastructure (AWS)", level: 88 },
              { skill: "Data-Driven Decision Making", level: 92 },
              { skill: "Stakeholder Management", level: 94 },
              { skill: "ML Product Development", level: 85 },
            ].map((item, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{item.skill}</span>
                  <span className="text-muted-foreground">{item.level}%</span>
                </div>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-primary/70 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
