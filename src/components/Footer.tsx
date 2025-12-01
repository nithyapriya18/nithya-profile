import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-2">Nithyapriya Veeraraghavan</h3>
            <p className="text-sm opacity-80">Lead Product Manager | AI Innovation</p>
          </div>

          <div className="flex gap-4">
            <a 
              href="https://linkedin.com/in/npv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/nithyapriya18" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:nithya.v@outlook.com"
              className="w-10 h-10 rounded-full bg-secondary-foreground/10 hover:bg-secondary-foreground/20 flex items-center justify-center transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-secondary-foreground/20 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Nithyapriya Veeraraghavan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
