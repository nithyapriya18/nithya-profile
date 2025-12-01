import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Multi-Agent AI Commerce Platform",
    description: "Architected multi-agent orchestration system at Opura AI coordinating 5+ specialized AI agents for personalized shopping experiences",
    tags: ["Multi-Agent AI", "LLM Integration", "Product Strategy", "Agentic Workflows"],
    impact: "Early-stage SaaS platform with team of 8+ interns"
  },
  {
    title: "Supply Chain Intelligence Platform",
    description: "Led supplier data security enhancements serving 500K+ global users at Resilinc with risk scoring modules and 20+ API integrations",
    tags: ["Enterprise SaaS", "Risk Management", "API Integration", "Data Security"],
    impact: "25% increase in customer satisfaction, 20% operational efficiency gain"
  },
  {
    title: "Generative AI Content Management",
    description: "Launched AI-powered content management solutions at Novartis reducing manual effort by 50% and costs by 25%",
    tags: ["Generative AI", "Cost Optimization", "Process Automation"],
    impact: "$6.4M savings, 30% improved data privacy"
  },
  {
    title: "Predictive Analytics for Clinical Trials",
    description: "Developed XGBoost predictive model optimizing clinical trial timelines with 85% accuracy",
    tags: ["Machine Learning", "Healthcare AI", "Predictive Modeling"],
    impact: "Accelerated time-to-market for pharmaceutical products"
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <div className="text-center space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h2 className="text-5xl md:text-6xl font-serif text-foreground mb-4">
                Featured Projects
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.8 }}
              >
                <Card className="h-full glass hover-lift group cursor-pointer border-0 shadow-card overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <CardHeader className="relative space-y-4 pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl md:text-3xl font-serif leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <ArrowUpRight className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="relative space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-0 hover:bg-primary/20 transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-border/50">
                      <p className="text-sm font-medium text-accent">
                        {project.impact}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
