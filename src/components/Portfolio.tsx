
import React, { useState, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import data from '../data/data.json';
import { useIsMobile } from '@/hooks/use-mobile';
// Removed import for yet-another-react-lightbox
// import 'yet-another-react-lightbox/styles.css';

const Portfolio: React.FC = () => {
  const controls = useAnimation();
  const { badge, title, subtitle, ctaButton, items } = data.portfolio;
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const isMobile = useIsMobile();

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Only start auto-scroll animation on non-mobile devices
    if (!isMobile) {
      controls.start({
        x: -1920,
        transition: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      });
    }
  }, [controls, isMobile]);

  return (
    <section id="portfolio" className="section-spacing relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 sm:px-5 py-1.5 sm:py-2 mb-4 border border-agency-orange/20 shadow-sm">
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-xs sm:text-sm">{badge}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" dangerouslySetInnerHTML={{ __html: title.replace('text-agency-gold', 'text-agency-orange') }} />
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
              {subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Horizontal Infinite Scroll */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-3 sm:gap-6 pt-6"
            animate={isMobile ? {} : controls}
            initial={{ x: 0 }}
            onMouseEnter={() => controls.stop()}
            onMouseLeave={() => {
              if (!isMobile) {
                controls.start({
                  x: -1920,
                  transition: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                });
              }
            }}
          >
            {/* First Set */}
            {items.map((item, index) => (
              <div key={item.id} className="flex-none w-[250px] sm:w-[280px] md:w-[300px]" onClick={() => openLightbox(index)}>
                <motion.div
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-agency-orange/10 h-[400px] sm:h-[480px] md:h-[534px]"
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
                    <div className="flex-1 flex items-start justify-end p-3 sm:p-4">
                      <div className="bg-white/70 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-agency-dark">
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-agency-orange flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="white" />
                      </motion.div>
                    </div>

                    <div className="bg-gradient-to-t from-white via-white/70 to-transparent p-4 sm:p-6">
                      <span className="text-agency-orange font-medium text-xs sm:text-sm block mb-1 sm:mb-2">{item.category}</span>
                      <h3 className="text-agency-dark font-bold text-base sm:text-xl">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {items.map((item, index) => (
              <div key={`dup-${item.id}`} className="flex-none w-[250px] sm:w-[280px] md:w-[300px]" onClick={() => openLightbox(index)}>
                <motion.div
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-agency-orange/10 h-[400px] sm:h-[480px] md:h-[534px]"
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
                    <div className="flex-1 flex items-start justify-end p-3 sm:p-4">
                      <div className="bg-white/70 rounded-full px-2 sm:px-3 py-0.5 sm:py-1 text-xs text-agency-dark">
                        <span>{item.duration}</span>
                      </div>
                    </div>

                    <div className="flex-1 flex items-center justify-center">
                      <motion.div
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-agency-orange flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="white" />
                      </motion.div>
                    </div>

                    <div className="bg-gradient-to-t from-white via-white/70 to-transparent p-4 sm:p-6">
                      <span className="text-agency-orange font-medium text-xs sm:text-sm block mb-1 sm:mb-2">{item.category}</span>
                      <h3 className="text-agency-dark font-bold text-base sm:text-xl">{item.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <AnimatedSection delay={600} className="mt-8 sm:mt-12 text-center">
          <Button
            variant="outline"
            className="border-agency-orange bg-white hover:text-agency-orange/80 text-agency-orange hover:bg-agency-orange/10 px-6 sm:px-8 py-2 rounded-full text-sm sm:text-base"
            onClick={() => openLightbox(0)}
          >
            {ctaButton.text}
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </AnimatedSection>
      </div>

      {/* Removed Lightbox component */}
    </section>
  );
};

export default Portfolio;
