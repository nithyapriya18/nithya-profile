import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Users,
      stat: "500K+",
      label: "Users Served"
    },
    {
      icon: Zap,
      stat: "10+",
      label: "Years Experience"
    },
    {
      icon: Award,
      stat: "$6.4M",
      label: "Cost Savings Delivered"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-background to-muted/20">
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
                About Me
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="glass rounded-3xl p-12 md:p-16 space-y-8 shadow-elegant"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 font-light">
              Experienced Product Manager with{" "}
              <span className="font-semibold text-primary">10+ years</span>{" "}
              driving AI-powered innovation across supply chain, life sciences, and conversational commerce. 
              Specialized in{" "}
              <span className="font-semibold text-accent">multi-agent AI systems</span>,{" "}
              end-to-end product strategy, and launching platforms serving{" "}
              <span className="font-semibold text-primary">500K+ users</span>.
            </p>

            <div className="pt-8 border-t border-border/50">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-primary/10 flex-shrink-0">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  <span className="font-semibold text-foreground">Certified Scrum Master</span> with technical depth in 
                  Python, Figma, and data-driven decision making. Proven track record of delivering impactful AI solutions 
                  that drive measurable business outcomes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                className="text-center space-y-4 p-8 rounded-2xl glass hover-lift"
              >
                <div className="inline-flex p-4 rounded-2xl bg-primary/10">
                  <item.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="space-y-2">
                  <p className="text-4xl font-serif font-bold text-gradient">{item.stat}</p>
                  <p className="text-muted-foreground font-medium">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
