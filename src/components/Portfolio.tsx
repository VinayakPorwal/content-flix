import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const portfolio = [
  {
    id: 1,
    title: "Brand Story Film - Oceanic Beauty",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1576073719676-aa95576db207?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "2:45"
  },
  {
    id: 2,
    title: "Social Campaign - Tech Innovations",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "1:32"
  },
  {
    id: 3,
    title: "Product Launch - Quantum Devices",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "3:10"
  },
  {
    id: 4,
    title: "Branded Content Series - Lifestyle Fit",
    category: "Video Production",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "4:05"
  },
  {
    id: 5,
    title: "E-commerce Video Ads - Fashion Forward",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1522335579687-9c718c5184d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "0:45"
  },
  {
    id: 6,
    title: "Brand Redesign - Modern Finance",
    category: "Strategy",
    image: "https://images.unsplash.com/photo-1585184394271-4c0a47dc59c9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    duration: "2:18"
  }
];

const Portfolio: React.FC = () => {
  const controls = useAnimation();
  return (
    <section id="portfolio" className="section-spacing bg-transparent relative overflow-hidden">
    {/* <section id="portfolio" className="section-spacing bg-gradient-to-br from-black to-gray-900 relative overflow-hidden"> */}
      {/* Background Elements */}
      {/* <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-agency-gold/5 blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-agency-gold/5 blur-[100px]" /> */}

      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-agency-dark/40 dark-glass px-5 py-2 mb-4 border border-agency-gold/20">
              <Sparkles className="h-4 w-4 text-agency-gold" />
              <span className="text-white font-medium text-sm">Our Work</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-white mb-6">Featured <span className="text-agency-gold">Projects</span></h2>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-white/80 text-lg mb-8">
              Explore our latest projects and see how we've helped brands transform their digital presence through strategic content.
            </p>
          </AnimatedSection>
        </div>

        {/* Horizontal Infinite Scroll */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 pt-6"
            animate={controls}
            initial={{ x: 0 }}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() =>
              controls.start({
                x: -1920,
                transition: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              })
            }
          >

            {/* First Set */}
            {portfolio.map((item) => (
              <div key={item.id} className="flex-none w-[300px]">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-lg border border-agency-gold/10 h-[534px]"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <AspectRatio ratio={9 / 16}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </AspectRatio>

                  {/* Video controls overlay */}
                  <div className="absolute inset-0 flex flex-col">
                    <div className="flex-1 flex items-start justify-end p-4">
                      <div className="bg-black/70 rounded-full px-3 py-1 text-xs text-white/90">
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-agency-gold flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="h-8 w-8 text-black" fill="black" />
                      </motion.div>
                    </div>

                    <div className="bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                      <span className="text-agency-gold font-medium text-sm block mb-2">{item.category}</span>
                      <h3 className="text-white font-bold text-xl">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {portfolio.map((item) => (
              <div key={`dup-${item.id}`} className="flex-none w-[300px]">
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-lg border border-agency-gold/10 h-[534px]"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <AspectRatio ratio={9 / 16}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </AspectRatio>

                  <div className="absolute inset-0 flex flex-col">
                    <div className="flex-1 flex items-start justify-end p-4">
                      <div className="bg-black/70 rounded-full px-3 py-1 text-xs text-white/90">
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-agency-gold flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="h-8 w-8 text-black" fill="black" />
                      </motion.div>
                    </div>

                    <div className="bg-gradient-to-t from-black via-black/70 to-transparent p-6">
                      <span className="text-agency-gold font-medium text-sm block mb-2">{item.category}</span>
                      <h3 className="text-white font-bold text-xl">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <AnimatedSection delay={600} className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-agency-gold bg-agency-dark hover:text-agency-gold/80 text-agency-gold hover:bg-agency-gold/10 px-8 rounded-full"
          >
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Portfolio;
