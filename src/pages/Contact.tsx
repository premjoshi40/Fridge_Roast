import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      description: "prem.joshi@example.com",
      link: "mailto:prem.joshi@example.com",
      color: "text-blue-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with me professionally",
      link: "https://linkedin.com",
      color: "text-blue-600"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out my technical work",
      link: "https://github.com",
      color: "text-gray-700"
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      description: "Book a 30-minute chat",
      link: "#",
      color: "text-purple-500"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Interested in working together? Let's connect and discuss opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Methods */}
          <div className="space-y-6 animate-fade-in">
            <div>
              <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
              <p className="text-muted-foreground mb-6">
                I'm always open to discussing product management opportunities, consulting projects,
                or just chatting about cloud and ML.
              </p>
            </div>

            <div className="grid gap-4">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all cursor-pointer group"
                  onClick={() => window.open(method.link, '_blank')}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-lg bg-secondary flex items-center justify-center ${method.color} group-hover:scale-110 transition-transform`}>
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{method.title}</h3>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Availability */}
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent">
              <h3 className="font-semibold mb-2">Current Availability</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Open to consulting projects and full-time opportunities starting Q1 2026
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium">Available for calls</span>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Name</label>
                <Input
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell me more about your project or inquiry..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
}
