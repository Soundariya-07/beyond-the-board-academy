
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/50 to-background opacity-80"></div>
      <div className="absolute inset-0 chess-pattern-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <p className="text-primary text-sm font-medium">Our Programs</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Elevate Your Chess Skills</h2>
          <p className="text-muted-foreground text-lg">
            Choose from our carefully crafted programs designed for players of all levels.
            Learn from the best coaches and join a global community of chess enthusiasts.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Beginner Program */}
          <div className="relative rounded-xl overflow-hidden group h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-secondary/60"></div>
            <div className="absolute inset-0 opacity-5 chess-pattern-bg"></div>
            
            <div className="relative p-8 h-full border border-border rounded-xl transition-transform duration-500 group-hover:scale-[0.98] flex flex-col">
              <div className="mb-6">
                <div className="p-3 inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1560174971-407daa7a6e2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Beginner Chess" 
                    className="w-16 h-16 object-cover rounded-lg border border-border"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">Beginner</h3>
              <p className="text-muted-foreground mb-6">
                Perfect for those who are new to chess. Learn the fundamentals of the game, piece movements, and basic strategies.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Basic piece movements</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Simple checkmates</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Opening principles</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 button-effect">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Intermediate 1 Program */}
          <div className="relative rounded-xl overflow-hidden group h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-secondary/60"></div>
            <div className="absolute inset-0 opacity-5 chess-pattern-bg"></div>
            
            <div className="relative p-8 h-full border border-border rounded-xl transition-transform duration-500 group-hover:scale-[0.98] flex flex-col">
              <div className="mb-6">
                <div className="p-3 inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1528819622765-d6bcf132f793?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Intermediate 1 Chess" 
                    className="w-16 h-16 object-cover rounded-lg border border-border"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">Intermediate 1</h3>
              <p className="text-muted-foreground mb-6">
                Building on fundamentals, this program teaches tactical patterns, planning, and middle game concepts.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Basic tactics</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Positional concepts</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Endgame fundamentals</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 button-effect">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Intermediate 2 Program */}
          <div className="relative rounded-xl overflow-hidden group h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-secondary/60"></div>
            <div className="absolute inset-0 opacity-5 chess-pattern-bg"></div>
            
            <div className="relative p-8 h-full border border-border rounded-xl transition-transform duration-500 group-hover:scale-[0.98] flex flex-col">
              <div className="mb-6">
                <div className="p-3 inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Intermediate 2 Chess" 
                    className="w-16 h-16 object-cover rounded-lg border border-border"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">Intermediate 2</h3>
              <p className="text-muted-foreground mb-6">
                For improving players, focusing on deeper strategic understanding, complex tactics, and specific openings.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Advanced tactics</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Opening repertoire</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Strategic planning</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 button-effect">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Advanced Program */}
          <div className="relative rounded-xl overflow-hidden group h-full flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-br from-card/80 to-secondary/60"></div>
            <div className="absolute inset-0 opacity-5 chess-pattern-bg"></div>
            
            <div className="relative p-8 h-full border border-border rounded-xl transition-transform duration-500 group-hover:scale-[0.98] flex flex-col">
              <div className="mb-6">
                <div className="p-3 inline-block">
                  <img 
                    src="https://images.unsplash.com/photo-1614538287231-2779e0e4f8ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Advanced Chess" 
                    className="w-16 h-16 object-cover rounded-lg border border-border"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">Advanced</h3>
              <p className="text-muted-foreground mb-6">
                Elite training for serious competitors, covering sophisticated strategies, deep analysis, and tournament preparation.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Critical positions</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Complex endgames</p>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                    <span className="text-primary text-xs">✓</span>
                  </div>
                  <p className="text-foreground/90">Tournament preparation</p>
                </div>
              </div>
              
              <div className="mt-auto">
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 button-effect">
                  Learn More <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
