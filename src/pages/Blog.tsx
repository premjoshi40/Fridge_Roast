import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Building ML Products: Lessons from the Trenches",
      excerpt: "Key insights on navigating the unique challenges of machine learning product development, from data quality to model monitoring.",
      date: "2025-09-15",
      readTime: "8 min read",
      category: "Machine Learning",
      tags: ["ML", "Product Management", "Best Practices"]
    },
    {
      title: "AWS Cost Optimization: A Product Manager's Guide",
      excerpt: "Practical strategies for reducing cloud costs while maintaining performance and reliability. Real-world examples from reducing spend by 40%.",
      date: "2025-08-22",
      readTime: "6 min read",
      category: "Cloud",
      tags: ["AWS", "Cost Optimization", "Cloud Architecture"]
    },
    {
      title: "The Art of Technical Product Management",
      excerpt: "How to bridge the gap between engineering and business stakeholders when building complex technical products.",
      date: "2025-07-10",
      readTime: "7 min read",
      category: "Product Management",
      tags: ["Product Management", "Leadership", "Technical"]
    },
    {
      title: "Data-Driven Product Decisions: Beyond Vanity Metrics",
      excerpt: "Moving past surface-level metrics to uncover the signals that actually matter for product success.",
      date: "2025-06-18",
      readTime: "5 min read",
      category: "Analytics",
      tags: ["Analytics", "Metrics", "Decision Making"]
    },
    {
      title: "Scaling SageMaker: Production ML at Scale",
      excerpt: "Architectural patterns and best practices for deploying and scaling machine learning models using AWS SageMaker.",
      date: "2025-05-05",
      readTime: "10 min read",
      category: "Machine Learning",
      tags: ["SageMaker", "ML", "AWS", "Architecture"]
    },
    {
      title: "Product Roadmapping for Technical Products",
      excerpt: "A framework for creating roadmaps that balance technical debt, feature development, and infrastructure investments.",
      date: "2025-04-12",
      readTime: "6 min read",
      category: "Product Management",
      tags: ["Roadmapping", "Strategy", "Planning"]
    }
  ];

  const categories = ["All", "Machine Learning", "Cloud", "Product Management", "Analytics"];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights on product management, cloud architecture, and machine learning
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category, index) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors px-4 py-2"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {posts.map((post, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all cursor-pointer group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Badge */}
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-secondary/50 text-secondary-foreground px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Read More Link */}
              <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4" />
              </div>
            </Card>
          ))}
        </div>

        {/* Newsletter CTA */}
        <Card className="mt-20 p-8 max-w-2xl mx-auto bg-gradient-to-br from-primary/10 to-transparent text-center">
          <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest insights on product management, cloud, and ML delivered to your inbox
          </p>
          <div className="flex gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-2 rounded-full border border-input bg-background"
            />
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}
