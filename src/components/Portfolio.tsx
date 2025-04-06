
import React, { useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import data from '../data/data.json';
import YouTube from 'react-youtube';
import SectionBadge from './SectionBadge';

const Portfolio: React.FC = () => {
  const { badge, title, subtitle, shorts, long_videos } = data.portfolio;
  const shortsRef = useRef<HTMLDivElement>(null);
  const longVideosRef = useRef<HTMLDivElement>(null);

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

  const youtubeOpts = {
    width: '100%',
    height: '100%',
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      fs: 1,
      host: 'https://www.youtube-nocookie.com',
      loading: 'eager',
    },
  };

  // --- SMOOTH SCROLL LOGIC ---
  const smoothScroll = (element: HTMLDivElement, speed = 0.5) => {
    let frameId: number;
    let currentScroll = element.scrollLeft;
    let isStopped = false;

    const scrollFrame = () => {
      if (isStopped) return;

      currentScroll += speed;
      element.scrollLeft = currentScroll;

      // Reset to start when we reach the midpoint
      if (element.scrollLeft >= element.scrollWidth / 2) {
        currentScroll = 0;
      }

      frameId = requestAnimationFrame(scrollFrame);
    };

    frameId = requestAnimationFrame(scrollFrame);

    // Return a cleanup function that stops the loop
    return () => {
      isStopped = true;
      cancelAnimationFrame(frameId);
    };
  };

  useEffect(() => {
    let shortsCleanup: (() => void) | null = null;
    let longVideosCleanup: (() => void) | null = null;

    // Initialize smooth scrolling for Shorts
    if (shortsRef.current) {
      const el = shortsRef.current;
      shortsCleanup = smoothScroll(el, 0.5);

      // Stop on hover
      el.addEventListener('mouseenter', () => {
        if (shortsCleanup) {
          shortsCleanup();
          shortsCleanup = null;
        }
      });

      // Resume on mouse leave
      el.addEventListener('mouseleave', () => {
        if (!shortsCleanup) {
          shortsCleanup = smoothScroll(el, 0.5);
        }
      });
    }

    // Initialize smooth scrolling for Long Videos
    if (longVideosRef.current) {
      const el = longVideosRef.current;
      longVideosCleanup = smoothScroll(el, 0.5);

      // Stop on hover
      el.addEventListener('mouseenter', () => {
        if (longVideosCleanup) {
          longVideosCleanup();
          longVideosCleanup = null;
        }
      });

      // Resume on mouse leave
      el.addEventListener('mouseleave', () => {
        if (!longVideosCleanup) {
          longVideosCleanup = smoothScroll(el, 0.5);
        }
      });
    }

    // Cleanup
    return () => {
      if (shortsCleanup) shortsCleanup();
      if (longVideosCleanup) longVideosCleanup();
    };
  }, []);

  return (
    <section id="portfolio" className="section-spacing relative overflow-hidden">
      <div className="relative z-10">
        {/* Heading & Subtitle */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16 px-4">
          <SectionBadge text={badge} />

          <h2
            className="text-agency-dark mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8">
            {subtitle}
          </p>
        </div>

        {/* Shorts Section */}
        <AnimatedSection delay={200}>
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-agency-dark mx-auto text-center"
            dangerouslySetInnerHTML={{
              __html:
                '<span class="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Short Videos</span>',
            }}
          />
        </AnimatedSection>

        <div className="w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
          <div
            ref={shortsRef}
            className="flex gap-4 sm:gap-8 px-4 sm:px-8 pt-6 sm:pt-10 pb-2 sm:pb-4 overflow-x-auto scrollbar-hide"
          >
            {[...shorts, ...shorts].map((item, index) => {
              const videoId = getYoutubeId(item.url);
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-none w-[180px] sm:w-[250px] md:w-[280px] lg:w-[300px] border rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <AspectRatio ratio={9 / 16}>
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-xl border-2 sm:border-4 border-agency-dark hover:border-agency-orange"
                        loading="eager"
                      />
                    </AspectRatio>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Long Videos Section */}
        <AnimatedSection delay={200}>
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-agency-dark mt-6 sm:mt-10 mx-auto text-center"
            dangerouslySetInnerHTML={{
              __html:
                '<span class="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Long Videos</span>',
            }}
          />
        </AnimatedSection>

        <div className="w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_40px,_black_calc(100%-40px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
          <div
            ref={longVideosRef}
            className="flex gap-4 sm:gap-8 px-4 sm:px-8 pb-2 sm:pb-4 pt-6 sm:pt-10 overflow-x-auto scrollbar-hide"
          >
            {[...long_videos, ...long_videos].map((item, index) => {
              const videoId = getYoutubeId(item.url);
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-none w-[220px] sm:w-[280px] md:w-[340px] lg:w-[404px] border rounded-xl p-1 sm:p-2 transition-transform duration-300 hover:scale-105"
                >
                  <div className="relative rounded-xl overflow-hidden">
                    <AspectRatio ratio={16 / 9}>
                      <YouTube
                        videoId={videoId || ''}
                        className="w-full h-full border-2 sm:border-4 border-agency-dark hover:border-agency-orange"
                        opts={youtubeOpts}
                        loading="eager"
                      />
                    </AspectRatio>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
