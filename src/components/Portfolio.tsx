import React, { useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Sparkles } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import data from '../data/data.json';
import YouTube from 'react-youtube';

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
    width: "100%",
    height: "100%",
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0,
      fs: 1,
      host: 'https://www.youtube-nocookie.com',
      loading: 'eager'
    }
  };

  useEffect(() => {
    const autoScroll = (element: HTMLDivElement, speed: number) => {
      let scrollAmount = 0;
      const slideTimer = setInterval(() => {
        element.scrollLeft += 1;
        scrollAmount += 1;
        
        // When we reach the end, instantly jump back to start
        if (element.scrollLeft >= (element.scrollWidth / 2)) {
          element.scrollLeft = 0;
          scrollAmount = 0;
        }
        
        // If we're at the start and scrolling backwards, jump to end
        if (element.scrollLeft <= 0 && scrollAmount < 0) {
          element.scrollLeft = element.scrollWidth / 2;
          scrollAmount = element.scrollWidth / 2;
        }
      }, speed);

      return slideTimer;
    };

    let shortsTimer: NodeJS.Timeout | null = null;
    let longVideosTimer: NodeJS.Timeout | null = null;

    if (shortsRef.current) {
      shortsTimer = autoScroll(shortsRef.current, 50);
      
      shortsRef.current.addEventListener('mouseenter', () => {
        if (shortsTimer) clearInterval(shortsTimer);
      });
      
      shortsRef.current.addEventListener('mouseleave', () => {
        if (shortsTimer) clearInterval(shortsTimer);
        shortsTimer = autoScroll(shortsRef.current!, 50);
      });
    }

    if (longVideosRef.current) {
      longVideosTimer = autoScroll(longVideosRef.current, 50);
      
      longVideosRef.current.addEventListener('mouseenter', () => {
        if (longVideosTimer) clearInterval(longVideosTimer);
      });
      
      longVideosRef.current.addEventListener('mouseleave', () => {
        if (longVideosTimer) clearInterval(longVideosTimer);
        longVideosTimer = autoScroll(longVideosRef.current!, 50);
      });
    }

    return () => {
      if (shortsTimer) clearInterval(shortsTimer);
      if (longVideosTimer) clearInterval(longVideosTimer);
    };
  }, []);

  return (
    <section id="portfolio" className="section-spacing relative overflow-hidden">
      <div className="relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 sm:px-5 py-1.5 sm:py-2 mb-4 border border-agency-orange/20 shadow-sm">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-agency-orange" />
            <span className="text-agency-dark font-medium text-xs sm:text-sm">{badge}</span>
          </div>

          <h2
            className="text-agency-dark mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
            dangerouslySetInnerHTML={{ __html: title }}
          />

          <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8">
            {subtitle}
          </p>
        </div>

        <div className="w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
          <div 
            ref={shortsRef}
            className="flex gap-8 px-8 pt-10 pb-4 overflow-x-auto scrollbar-hide"
          >
            {[...shorts, ...shorts].map((item, index) => {
              const videoId = getYoutubeId(item.url);
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-none w-[250px] sm:w-[280px] md:w-[300px] border rounded-xl border-agency-orange/70 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-agency-orange/10 h-[400px] sm:h-[480px] md:h-[534px]">
                    <AspectRatio ratio={9 / 16}>
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0`}
                        title={item.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full rounded-xl"
                        loading="eager"
                      />
                    </AspectRatio>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full mt-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
          <div 
            ref={longVideosRef}
            className="flex gap-8 px-8 pb-4 overflow-x-auto scrollbar-hide"
          >
            {[...long_videos, ...long_videos].map((item, index) => {
              const videoId = getYoutubeId(item.url);
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-none w-[280px] sm:w-[340px] md:w-[404px] border rounded-xl bg-agency-orange/20 p-2 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-agency-orange/10">
                    <AspectRatio ratio={16 / 9}>
                      <YouTube
                        videoId={videoId}
                        className="w-full h-full"
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
