import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import data from '../data/data.json';
import { useIsMobile } from '@/hooks/use-mobile';

const Portfolio: React.FC = () => {
  const controls = useAnimation();
  const { badge, title, subtitle, ctaButton, items } = data.portfolio;
  const isMobile = useIsMobile();
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const scrollingRef = useRef<HTMLDivElement>(null);
  const [setWidth, setSetWidth] = useState(0);
  // Adjust speed (pixels per second) to control the smoothness
  const speed = 50;

  // Measure the width of one set of items (half of the scrolling container)
  useEffect(() => {
    if (scrollingRef.current) {
      const totalWidth = scrollingRef.current.scrollWidth;
      setSetWidth(totalWidth / 2);
    }
  }, [items]);

  // Control the infinite scroll animation. When paused, the current x position is preserved.
  useEffect(() => {
    if (!isMobile && !isVideoPlaying && !isHovering && setWidth) {
      controls.start({
        x: -setWidth,
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: setWidth / speed,
          ease: 'linear',
        },
      });
    } else {
      controls.stop();
    }
  }, [controls, isMobile, isVideoPlaying, isHovering, setWidth]);

  // Note: onPlay/onPause on iframes might not work as expected.
  // For accurate detection of play events on YouTube shorts,
  // consider using the YouTube Iframe API.
  const getYoutubeId = (url: string) => {
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === 'youtube.com' || urlObj.hostname === 'www.youtube.com') {
        if (urlObj.pathname.includes('/shorts/')) {
          return urlObj.pathname.split('/shorts/')[1];
        }
        return urlObj.searchParams.get('v');
      } else if (urlObj.hostname === 'youtu.be') {
        return urlObj.pathname.slice(1);
      }
      return null;
    } catch {
      return null;
    }
  };

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
            <h2
              className="text-agency-dark mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
              dangerouslySetInnerHTML={{ __html: title.replace('text-agency-gold', 'text-agency-orange') }}
            />
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
              {subtitle}
            </p>
          </AnimatedSection>
        </div>

        {/* Horizontal Infinite Scroll */}
        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.div
            ref={scrollingRef}
            className="flex gap-3 sm:gap-6 pt-6 pb-6"
            animate={controls}
            initial={{ x: 0 }}
          >
            {/* First Set */}
            {items.map((item) => (
              <div key={item.id} className={`flex-none w-[250px] sm:w-[280px] md:w-[300px] border rounded-xl border-agency-orange/70 ${isVideoPlaying ? 'p-2' : 'p-0'}`}>
                <motion.div
                  className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-agency-orange/10 h-[400px] sm:h-[480px] md:h-[534px]"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <AspectRatio ratio={9 / 16}>
                    <iframe
                      src={`https://www.youtube.com/embed/${getYoutubeId(item.url)}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-xl"
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                    />
                  </AspectRatio>
                </motion.div>
              </div>
            ))}

            {/* Duplicate Set for Seamless Loop */}
            {items.map((item) => (
              <div key={`dup-${item.id}`} className={`flex-none w-[250px] sm:w-[280px] md:w-[300px] border rounded-xl border-agency-orange/70 ${isVideoPlaying ? 'p-2' : 'p-0'}`}>
                <motion.div
                  className="relative rounded-lg sm:rounded-2xl overflow-hidden shadow-xl border border-agency-orange/20 h-[400px] sm:h-[480px] md:h-[534px]"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <AspectRatio ratio={9 / 16}>
                    <iframe
                      src={`https://www.youtube.com/embed/${getYoutubeId(item.url)}`}
                      title={item.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full rounded-xl"
                      onPlay={() => setIsVideoPlaying(true)}
                      onPause={() => setIsVideoPlaying(false)}
                    />
                  </AspectRatio>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <AnimatedSection delay={600} className="mt-8 sm:mt-12 text-center">
          <Button
            variant="outline"
            className="border-agency-orange bg-white hover:text-agency-orange/80 text-agency-orange hover:bg-agency-orange/10 px-6 sm:px-8 py-2 rounded-full text-sm sm:text-base"
            onClick={() => window.open('https://www.youtube.com/@YourChannel', '_blank')}
          >
            {ctaButton.text}
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Portfolio;
