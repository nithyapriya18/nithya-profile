import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
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
                Get In Touch
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
              <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
                Let's discuss how we can collaborate on AI-powered innovation
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="space-y-6">
                <div className="glass rounded-2xl p-6 hover-lift group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <a href="mailto:nithya.v@outlook.com" className="text-foreground hover:text-primary transition-colors font-medium">
                        nithya.v@outlook.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 hover-lift group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <a href="tel:+918897464355" className="text-foreground hover:text-primary transition-colors font-medium">
                        +91-8897464355
                      </a>
                    </div>
                  </div>
                </div>

                <div className="glass rounded-2xl p-6 hover-lift group">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="text-foreground font-medium">Bengaluru, Karnataka, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="text-lg font-serif text-foreground mb-4">
                  Connect with me
                </h4>
                <div className="flex gap-3">
                  <a 
                    href="https://linkedin.com/in/npv" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl glass hover:bg-primary/10 flex items-center justify-center transition-all hover-lift group"
                  >
                    <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                  <a 
                    href="https://github.com/nithyapriya18" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl glass hover:bg-primary/10 flex items-center justify-center transition-all hover-lift group"
                  >
                    <Github className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="glass rounded-3xl p-8 md:p-10 space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-3">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 h-12 rounded-xl focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 h-12 rounded-xl focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-3">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 rounded-xl resize-none focus:border-primary transition-colors"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-14 rounded-xl text-base font-medium group shadow-soft hover:shadow-card transition-all"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
