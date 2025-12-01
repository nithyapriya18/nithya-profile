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
    <section id="skills" className="section-padding">
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
              Skills & Expertise
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                className="bg-card rounded-xl p-6 shadow-card hover-lift text-center space-y-4"
              >
                <div className="w-16 h-16 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif text-foreground">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground">
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
