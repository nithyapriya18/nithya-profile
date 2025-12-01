import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Figma, Github, Plus } from "lucide-react";

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("design");

  return (
    <section id="portfolio" className="section-padding">
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
                Portfolio
              </h2>
              <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full" />
            </motion.div>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 glass h-14 p-1">
              <TabsTrigger 
                value="design" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl text-base font-medium transition-all"
              >
                Design Work
              </TabsTrigger>
              <TabsTrigger 
                value="code" 
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-xl text-base font-medium transition-all"
              >
                Code Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="design" className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {[...Array(6)].map((_, index) => (
                  <Card key={index} className="hover-lift border-2 border-dashed border-primary/30 glass overflow-hidden">
                    <CardContent className="flex flex-col items-center justify-center h-72 space-y-5">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Figma className="w-10 h-10 text-primary" />
                      </div>
                      <div className="text-center space-y-2">
                        <Plus className="w-6 h-6 mx-auto text-primary" />
                        <p className="text-muted-foreground font-medium">Add Design</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="code" className="mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {[...Array(4)].map((_, index) => (
                  <Card key={index} className="hover-lift border-2 border-dashed border-primary/30 glass overflow-hidden">
                    <CardContent className="flex flex-col items-center justify-center h-72 space-y-5">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Github className="w-10 h-10 text-primary" />
                      </div>
                      <div className="text-center space-y-2">
                        <Plus className="w-6 h-6 mx-auto text-primary" />
                        <p className="text-muted-foreground font-medium">Add Repository</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
