  import React from 'react';
  import AnimatedSection from './AnimatedSection';
  import { Button } from '@/components/ui/button';
  import { ArrowRight, Sparkles } from 'lucide-react';
  import { motion } from 'framer-motion';
  import { AspectRatio } from '@/components/ui/aspect-ratio';
  import data from '../data/data.json';
  import YouTube from 'react-youtube';

  const Portfolio: React.FC = () => {
    const { badge, title, subtitle, ctaButton, shorts, long_videos } = data.portfolio;

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
                dangerouslySetInnerHTML={{ __html: title }}
              />
            </AnimatedSection>

            <AnimatedSection delay={300}>
              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
                {subtitle}
              </p>
            </AnimatedSection>
          </div>

          {/* Shorts Section */}
          <div className="w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
            <div className="flex gap-8 px-8 pt-10 pb-4 overflow-x-auto scrollbar-hide">
              {[...shorts, ...shorts].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-none w-[250px] sm:w-[280px] md:w-[300px] border rounded-xl border-agency-orange/70"
                >
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
                      />
                    </AspectRatio>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Long Videos Section */}
          <div className="w-full mt-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
            <div className="flex gap-8 px-8 pb-4 overflow-x-auto scrollbar-hide">
              {[...long_videos, ...long_videos].map((item, index) => (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-none w-[280px] sm:w-[340px] md:w-[404px] border rounded-xl bg-agency-orange/20 p-2"
                >
                  <motion.div
                    className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-agency-orange/10"
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AspectRatio ratio={16 / 9}>
                      <YouTube
                        videoId={getYoutubeId(item.url)}
                        className="w-full h-full"
                        opts={{
                          width: "100%",
                          height: "100%",
                          playerVars: {
                            autoplay: 0,
                            controls: 1,
                            modestbranding: 1,
                            rel: 0
                          }
                        }}
                      />
                    </AspectRatio>
                  </motion.div>
                </div>
              ))}
            </div>
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
