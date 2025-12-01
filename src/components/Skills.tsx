import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Wrench, Users } from "lucide-react";

const skillCategories = [
  {
    icon: Brain,
    title: "AI & Product",
    skills: ["Multi-Agent AI", "Conversational AI", "AI Roadmaps", "Product Management"]
  },
  {
    icon: Code,
    title: "Technical",
    skills: ["Python Programming", "Predictive Modeling", "Data-Driven Decision Making"]
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["Figma", "Power BI", "Balsamiq", "Dash Plotly"]
  },
  {
    icon: Users,
    title: "Leadership",
    skills: ["Agile Scrum Certified", "Stakeholder Management", "Cross-functional Leadership"]
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-background to-muted/20">
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
                Skills & Expertise
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.8 }}
                className="glass rounded-3xl p-8 hover-lift text-center space-y-6 group"
              >
                <div className="inline-flex p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform">
                  <category.icon className="w-9 h-9 text-primary" />
                </div>
                <h3 className="text-2xl font-serif text-foreground group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground leading-relaxed">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
