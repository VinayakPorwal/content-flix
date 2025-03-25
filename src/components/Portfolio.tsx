import React, { useState, useCallback, useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Sparkles } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import data from '../data/data.json';
import YouTube from 'react-youtube';

const Portfolio: React.FC = () => {
  const { badge, title, subtitle, shorts, long_videos } = data.portfolio;
  const [loadedVideos, setLoadedVideos] = useState<Record<string, boolean>>({});
  const shortsContainerRef = useRef<HTMLDivElement>(null);
  const longVideosContainerRef = useRef<HTMLDivElement>(null);

  const getYoutubeId = useCallback((url: string) => {
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
  }, []);

  const observeElements = useCallback(() => {
    const options = {
      root: null,
      rootMargin: '200px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('data-video-id');
        if (id && entry.isIntersecting && !loadedVideos[id]) {
          setLoadedVideos(prev => ({
            ...prev,
            [id]: true
          }));
        }
      });
    }, options);

    document.querySelectorAll('.video-container').forEach(el => {
      observer.observe(el);
    });

    return observer;
  }, [loadedVideos]);

  useEffect(() => {
    const observer = observeElements();
    return () => observer.disconnect();
  }, [observeElements]);

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

        <div ref={shortsContainerRef} className="w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
          <div className="flex gap-8 px-8 pt-10 pb-4 overflow-x-auto scrollbar-hide">
            {shorts.map((item, index) => {
              const videoId = getYoutubeId(item.url);
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-none w-[250px] sm:w-[280px] md:w-[300px] border rounded-xl border-agency-orange/70"
                >
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-agency-orange/10 h-[400px] sm:h-[480px] md:h-[534px]">
                    <AspectRatio ratio={9 / 16}>
                      <div 
                        className="video-container w-full h-full" 
                        data-video-id={`shorts-${videoId}`}
                      >
                        {loadedVideos[`shorts-${videoId}`] ? (
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${videoId}?modestbranding=1&rel=0`}
                            title={item.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full rounded-xl"
                            loading="eager"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
                            <div className="text-agency-orange/70">
                              <Sparkles className="w-10 h-10 mx-auto mb-2" />
                              <p className="text-sm text-center">Loading content...</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </AspectRatio>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div ref={longVideosContainerRef} className="w-full mt-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_80px,_black_calc(100%-80px),transparent_100%)]">
          <div className="flex gap-8 px-8 pb-4 overflow-x-auto scrollbar-hide">
            {long_videos.map((item, index) => {
              const videoId = getYoutubeId(item.url);
              return (
                <div
                  key={`${item.id}-${index}`}
                  className="flex-none w-[280px] sm:w-[340px] md:w-[404px] border rounded-xl bg-agency-orange/20 p-2"
                >
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-agency-orange/10">
                    <AspectRatio ratio={16 / 9}>
                      <div 
                        className="video-container w-full h-full" 
                        data-video-id={`long-${videoId}`}
                      >
                        {loadedVideos[`long-${videoId}`] ? (
                          <YouTube
                            videoId={videoId}
                            className="w-full h-full"
                            opts={youtubeOpts}
                            loading="eager"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded-xl">
                            <div className="text-agency-orange/70">
                              <Sparkles className="w-10 h-10 mx-auto mb-2" />
                              <p className="text-sm text-center">Loading content...</p>
                            </div>
                          </div>
                        )}
                      </div>
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
