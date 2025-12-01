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
    <section id="education" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Education
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                className="bg-card rounded-xl p-8 shadow-card hover-lift"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-serif text-foreground">
                      {edu.degree}
                    </h3>
                    {edu.specialization && (
                      <p className="text-sm text-primary font-medium">
                        {edu.specialization}
                      </p>
                    )}
                    <p className="text-base text-muted-foreground">
                      {edu.institution}
                    </p>
                    <p className="text-sm text-muted-foreground">
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
