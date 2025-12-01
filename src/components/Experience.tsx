import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
    <section id="experience" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col md:gap-8`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10" />

                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : "md:text-left"} ml-16 md:ml-0`}>
                    <div className="bg-card rounded-xl p-6 shadow-card hover-lift">
                      <h3 className="text-2xl font-serif text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-medium mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.period}
                      </p>
                      <ul className={`space-y-2 text-sm ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-foreground/80 leading-relaxed">
                            • {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
