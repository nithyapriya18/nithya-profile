import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Head of Product",
    company: "Opura AI",
    period: "Sept 2025 - Present",
    highlights: [
      "Architected multi-agent orchestration (MAO) system coordinating 5+ specialized AI agents",
      "Led product development from ideation to wireframing with engineering on agentic workflows",
      "Managed team of 8+ interns, establishing agile processes for early-stage SaaS platform",
      "Drove go-to-market initiatives including pitch decks and investor outreach"
    ]
  },
  {
    title: "Senior Product Manager",
    company: "Resilinc",
    period: "Jun 2024 - Sept 2025",
    highlights: [
      "Led supplier data security enhancements for 500K+ global users",
      "Delivered 3+ products end-to-end, boosting customer satisfaction by 25%",
      "Built risk scoring modules with 20+ API integrations, increasing efficiency by 20%"
    ]
  },
  {
    title: "Senior Specialist - Products",
    company: "Novartis",
    period: "Nov 2020 - Jun 2024",
    highlights: [
      "Launched generative AI solutions reducing manual effort by 50% and costs by 25%",
      "Led agile team delivering 4 validated AI/ML concepts per quarter with 75% adoption",
      "Developed NLP data redaction tool delivering $6.4M savings"
    ]
  },
  {
    title: "Data Scientist",
    company: "Novartis",
    period: "Jun 2018 - Oct 2020",
    highlights: [
      "Built Dash Plotly dashboard for financial spend anomaly detection",
      "Developed XGBoost predictive model with 85% accuracy for clinical trials",
      "Created R-Shiny text mining app for document complexity analysis"
    ]
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-6xl mx-auto">
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
                Experience
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
            </motion.div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                className="relative"
              >
                <div className="glass rounded-3xl p-8 md:p-12 hover-lift group">
                  <div className="flex items-start gap-6">
                    <div className="hidden md:flex p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Briefcase className="w-7 h-7 text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                        <div>
                          <h3 className="text-2xl md:text-3xl font-serif text-foreground">
                            {exp.title}
                          </h3>
                          <p className="text-lg md:text-xl text-primary font-medium mt-1">
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full w-fit">
                          {exp.period}
                        </span>
                      </div>
                      
                      <ul className="space-y-3 pt-4">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-foreground/80 leading-relaxed">
                            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
