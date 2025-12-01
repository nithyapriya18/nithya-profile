import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50 py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left space-y-3">
            <h3 className="text-3xl font-serif text-foreground">Nithyapriya Veeraraghavan</h3>
            <p className="text-muted-foreground">Lead Product Manager | AI Innovation & Multi-Agent Systems</p>
          </div>

          <div className="flex gap-4">
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
            <a 
              href="mailto:nithya.v@outlook.com"
              className="p-4 rounded-2xl glass hover:bg-primary/10 flex items-center justify-center transition-all hover-lift group"
            >
              <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Nithyapriya Veeraraghavan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
