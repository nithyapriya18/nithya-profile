import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", section: true },
  { id: "about", label: "About", section: true },
  { id: "experience", label: "Experience", section: true },
  { id: "projects", label: "Projects", section: true },
  { id: "skills", label: "Skills", section: true },
  { id: "education", label: "Education", section: true },
  { id: "contact", label: "Contact", section: true },
  { id: "articles", label: "Articles", section: false, path: "/articles" }
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (location.pathname === "/") {
        const sections = navItems.filter(item => item.section).map(item => document.getElementById(item.id));
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section, index) => {
          if (section) {
            const top = section.offsetTop;
            const bottom = top + section.offsetHeight;
            if (scrollPosition >= top && scrollPosition < bottom) {
              setActiveSection(navItems.filter(item => item.section)[index].id);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.section) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else if (item.path) {
      navigate(item.path);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "glass shadow-soft" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24">
          <div className="flex items-center justify-between py-6">
            <button
              onClick={() => handleNavigation({ id: "home", label: "Home", section: true })}
              className="text-2xl font-serif font-bold text-foreground hover:text-primary transition-colors"
            >
              NPV
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item)}
                  className={`px-5 py-2 text-sm font-medium transition-all relative rounded-xl ${
                    activeSection === item.id && item.section
                      ? "text-primary"
                      : "text-foreground/70 hover:text-foreground hover:bg-primary/5"
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && item.section && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-primary/10 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl hover:bg-primary/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed inset-0 z-40 lg:hidden bg-background/95 backdrop-blur-xl pt-24 px-6"
        >
          <div className="space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item)}
                className={`w-full text-left px-6 py-4 text-lg font-medium rounded-2xl transition-all ${
                  activeSection === item.id && item.section
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/70 hover:bg-primary/5 hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navigation;
