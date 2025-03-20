import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import data from '../data/data.json';
// Removed import for yet-another-react-lightbox
// import 'yet-another-react-lightbox/styles.css';

const Portfolio: React.FC = () => {
  const controls = useAnimation();
  const { badge, title, subtitle, ctaButton, items } = data.portfolio;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  return (
    <section id="portfolio" className="section-spacing relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 mb-4 border border-agency-orange/20 shadow-sm">
              <Sparkles className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">{badge}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-6" dangerouslySetInnerHTML={{ __html: title.replace('text-agency-gold', 'text-agency-orange') }} />
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-gray-600 text-lg mb-8">
              {subtitle}
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
            {items.map((item, index) => (
              <div key={item.id} className="flex-none w-[300px]" onClick={() => openLightbox(index)}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-lg border border-agency-orange/10 h-[534px]"
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
                      <div className="bg-white/70 rounded-full px-3 py-1 text-xs text-agency-dark">
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-agency-orange flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="h-8 w-8 text-white" fill="white" />
                      </motion.div>
                    </div>

                    <div className="bg-gradient-to-t from-white via-white/70 to-transparent p-6">
                      <span className="text-agency-orange font-medium text-sm block mb-2">{item.category}</span>
                      <h3 className="text-agency-dark font-bold text-xl">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {items.map((item, index) => (
              <div key={`dup-${item.id}`} className="flex-none w-[300px]" onClick={() => openLightbox(index)}>
                <motion.div
                  className="relative rounded-2xl overflow-hidden shadow-lg border border-agency-orange/10 h-[534px]"
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
                      <div className="bg-white/70 rounded-full px-3 py-1 text-xs text-agency-dark">
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 rounded-full bg-agency-orange flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="h-8 w-8 text-white" fill="white" />
                      </motion.div>
                    </div>

                    <div className="bg-gradient-to-t from-white via-white/70 to-transparent p-6">
                      <span className="text-agency-orange font-medium text-sm block mb-2">{item.category}</span>
                      <h3 className="text-agency-dark font-bold text-xl">{item.title}</h3>
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
            className="border-agency-orange bg-white hover:text-agency-orange/80 text-agency-orange hover:bg-agency-orange/10 px-8 rounded-full"
            onClick={() => openLightbox(0)}
          >
            {ctaButton.text}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </AnimatedSection>
      </div>

      {/* Removed Lightbox component */}
    </section>
  );
};

export default Portfolio;
