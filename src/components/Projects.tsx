import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover-lift border-primary/20 bg-card">
                  <CardHeader>
                    <CardTitle className="text-2xl font-serif text-foreground">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-relaxed mt-4">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <Badge 
                          key={idx} 
                          variant="secondary"
                          className="bg-primary/10 text-primary border-primary/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="pt-4 border-t border-border">
                      <p className="text-sm font-medium text-secondary">
                        Impact: {project.impact}
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
