import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const articles = [
  {
    id: 1,
    title: "The Future of Multi-Agent AI Systems in Commerce",
    excerpt: "Exploring how coordinated AI agents are revolutionizing personalized shopping experiences and transforming e-commerce platforms.",
    date: "December 2024",
    readTime: "8 min read",
    tags: ["Multi-Agent AI", "E-commerce", "Product Strategy"],
    featured: true
  },
  {
    id: 2,
    title: "Building AI Products: Lessons from 10+ Years",
    excerpt: "Key insights and practical frameworks for product managers navigating the AI landscape, from ideation to scale.",
    date: "November 2024",
    readTime: "12 min read",
    tags: ["Product Management", "AI Strategy", "Leadership"],
    featured: true
  },
  {
    id: 3,
    title: "Risk Scoring at Scale: API Integration Patterns",
    excerpt: "Technical deep-dive into building robust risk assessment modules with 20+ API integrations for enterprise platforms.",
    date: "October 2024",
    readTime: "10 min read",
    tags: ["API Design", "Enterprise SaaS", "Risk Management"],
    featured: false
  },
  {
    id: 4,
    title: "Generative AI ROI: A Product Manager's Guide",
    excerpt: "Quantifying business impact and measuring success metrics for generative AI implementations in enterprise settings.",
    date: "September 2024",
    readTime: "7 min read",
    tags: ["Generative AI", "ROI Analysis", "Business Strategy"],
    featured: false
  }
];

const Articles = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 glass"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-6 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="gap-2 hover:bg-primary/10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Button>
          <h1 className="text-xl font-serif font-bold">Articles</h1>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-16 lg:px-24">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-6">
              Thoughts on AI,{" "}
              <span className="text-gradient">Product & Innovation</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights from building AI-powered products at scale, managing multi-agent systems, 
              and driving innovation across supply chain and life sciences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="px-6 md:px-16 lg:px-24 pb-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12"
          >
            <h3 className="text-3xl font-serif mb-8">Featured Articles</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {articles.filter(a => a.featured).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="h-full hover-lift cursor-pointer group overflow-hidden border-primary/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <CardHeader className="relative space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h4 className="text-2xl md:text-3xl font-serif leading-tight group-hover:text-primary transition-colors">
                        {article.title}
                      </h4>
                    </CardHeader>
                    <CardContent className="relative space-y-4">
                      <p className="text-muted-foreground leading-relaxed">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Articles */}
      <section className="px-6 md:px-16 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="text-3xl font-serif mb-8">Recent Articles</h3>
            <div className="space-y-6">
              {articles.filter(a => !a.featured).map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                >
                  <Card className="hover-lift cursor-pointer group border-primary/10">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1 space-y-3">
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, idx) => (
                              <Badge 
                                key={idx} 
                                variant="outline"
                                className="text-xs"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <h4 className="text-xl font-serif group-hover:text-primary transition-colors">
                            {article.title}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {article.excerpt}
                          </p>
                        </div>
                        <div className="flex md:flex-col items-start md:items-end gap-2 text-sm text-muted-foreground min-w-fit">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
