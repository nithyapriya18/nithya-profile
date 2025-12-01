import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-card space-y-6"
          >
            <p className="text-lg leading-relaxed text-foreground">
              Experienced Product Manager with{" "}
              <span className="font-semibold text-primary">10+ years</span>{" "}
              driving AI-powered innovation across supply chain, life sciences, and conversational commerce. 
              Skilled in multi-agent AI systems, end-to-end product strategy, and launching platforms serving{" "}
              <span className="font-semibold text-primary">500K+ users</span>.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-lg font-medium text-secondary">
                Certified Scrum Master with technical depth in Python, Figma, and data-driven decision making
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
