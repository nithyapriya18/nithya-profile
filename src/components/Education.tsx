import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Post Graduate Programme in Management",
    specialization: "Operations & Data Analytics",
    institution: "Great Lakes Institute of Management",
    period: "2017 - 2018"
  },
  {
    degree: "B.E. Industrial Engineering and Management",
    institution: "Visvesvaraya Technological University",
    period: "2010 - 2014"
  }
];

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="section-padding bg-gradient-to-b from-muted/20 to-background">
      <div className="max-w-5xl mx-auto">
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
                Education
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.8 }}
                className="glass rounded-3xl p-10 hover-lift group"
              >
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-xl font-serif text-foreground leading-tight group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <p className="text-sm font-medium text-accent">
                        {edu.specialization}
                      </p>
                    )}
                    <p className="text-base text-muted-foreground">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
                      {edu.period}
                    </p>
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

export default Education;
