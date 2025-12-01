import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Github, Mail, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import profileImage from "@/assets/nithya-profile.png";

const Hero = () => {
  const navigate = useNavigate();
  
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden"
    >
      {/* Ambient gradient backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8 order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-4"
            >
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-sm font-medium text-primary">AI Product Leader</span>
              </div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif leading-tight tracking-tight">
                Nithyapriya
                <br />
                <span className="text-gradient">Veeraraghavan</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl"
            >
              10+ years driving AI-powered innovation across{" "}
              <span className="text-foreground font-medium">supply chain</span>,{" "}
              <span className="text-foreground font-medium">life sciences</span>, and{" "}
              <span className="text-foreground font-medium">conversational commerce</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground group px-8 h-14 text-base rounded-2xl shadow-soft hover:shadow-card transition-all"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 px-8 h-14 text-base rounded-2xl"
                onClick={() => navigate("/articles")}
              >
                Read Articles
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex gap-4 pt-6"
            >
              <a 
                href="https://linkedin.com/in/npv" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-2xl glass hover:bg-primary/10 transition-all group"
              >
                <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="https://github.com/nithyapriya18" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-2xl glass hover:bg-primary/10 transition-all group"
              >
                <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
              <a 
                href="mailto:nithya.v@outlook.com"
                className="p-3 rounded-2xl glass hover:bg-primary/10 transition-all group"
              >
                <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 rounded-[3rem] transform rotate-3 blur-2xl" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-elegant">
                <img 
                  src={profileImage} 
                  alt="Nithyapriya Veeraraghavan"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
