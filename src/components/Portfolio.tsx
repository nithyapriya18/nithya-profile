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
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-foreground">
              Portfolio
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-card">
              <TabsTrigger value="design" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Design Work
              </TabsTrigger>
              <TabsTrigger value="code" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Code Projects
              </TabsTrigger>
            </TabsList>

            <TabsContent value="design" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-3 gap-6"
              >
                {[...Array(6)].map((_, index) => (
                  <Card key={index} className="hover-lift border-dashed border-2 border-primary/30 bg-card/50">
                    <CardContent className="flex flex-col items-center justify-center h-64 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Figma className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-center">
                        <Plus className="w-5 h-5 inline-block mb-1" />
                        <br />
                        Add Design
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="code" className="mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {[...Array(4)].map((_, index) => (
                  <Card key={index} className="hover-lift border-dashed border-2 border-primary/30 bg-card/50">
                    <CardContent className="flex flex-col items-center justify-center h-64 space-y-4">
                      <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                        <Github className="w-8 h-8 text-primary" />
                      </div>
                      <p className="text-muted-foreground text-center">
                        <Plus className="w-5 h-5 inline-block mb-1" />
                        <br />
                        Add Repository
                      </p>
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
