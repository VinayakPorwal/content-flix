import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
import { Sparkles, Youtube, Instagram, Target, Video, PenTool, BarChart, Edit, Upload, Layout, Image, Lightbulb, VideoIcon, File } from 'lucide-react';
import data from '../data/data.json';
import AnimatedSection from './AnimatedSection';
import SectionBadge from './SectionBadge';

// Helper function to get the correct icon component
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Youtube':
      return <Youtube className="w-full h-full" />;
    case 'Instagram':
      return <Instagram className="w-full h-full" />;
    case 'Video':
      return <Video className="w-full h-full" />;
    case 'Strategy':
      return <PenTool className="w-full h-full" />;
    case 'Analytics':
      return <BarChart className="w-full h-full" />;
    case 'Editing':
      return <Edit className="w-full h-full" />;
    case 'Management':
      return <Upload className="w-full h-full" />;
    case 'Thumbnails':
      return <Image className="w-full h-full" />;
    case 'Idea':
      return <Lightbulb className="w-full h-full" />;
    case 'Script':
      return <File className="w-full h-full" />;
    default:
      return null;
  }
};

const ThreeDotsTimeline = () => {
  const containerRef = useRef(null);
  const pathRefs = [useRef(null), useRef(null), useRef(null)];
  const dotRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scrollOptions = {
        trigger: containerRef.current,
        start: "center bottom",
        end: "+=650",
        scrub: 0.5,
      };

      const motionSettings = {
        scrollTrigger: scrollOptions,
        ease: "power2.inOut",
        duration: 2,
      };

      // Only animate on desktop
      if (window.innerWidth >= 640) {
        dotRefs.forEach((dotRef, i) => {
          gsap.to(dotRef.current, {
            ...motionSettings,
            delay: i * 0.05,
            motionPath: {
              path: pathRefs[i].current,
              align: pathRefs[i].current,
              alignOrigin: [0.5, 0.5],
              autoRotate: true
            }
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={containerRef}
      className="relative bg-gradient-to-b from-black to-gray-900 text-white flex flex-col items-center px-4 py-16"
    >
      <div className="relative w-full max-w-6xl">
        <div className="text-center max-w-3xl mx-auto pb-12 sm:pb-24">
          <AnimatedSection>
            <SectionBadge text="Services" />
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-white mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold">
              You Shoot. We Handle The Rest.
            </h2>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <p className="text-gray-400 text-base sm:text-lg">
              Focus on creating while we handle your growth & management. Our comprehensive system takes care of everything you need to succeed.
            </p>
          </AnimatedSection>
        </div>
        
        {/* SVG Timeline - Only visible on desktop */}
        <div className="hidden sm:block">
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none md:mt-0"
            viewBox="0 0 1000 600"
            fill="none"
          >
            <path
              ref={pathRefs[0]}
              d="M 500,50 L 500,150 Q 500,150 150,150 L 150,350"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="3"
            />
            <path
              ref={pathRefs[1]}
              d="M 500,50 L 500,350"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="3"
            />
            <path
              ref={pathRefs[2]}
              d="M 500,50 L 500,150 Q 500,150 850,150 L 850,350"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="3"
            />

            {dotRefs.map((ref, i) => (
              <circle
                key={i}
                ref={ref}
                r="6"
                fill="#FF4500"
                cx="500"
                cy="50"
                style={{ filter: "drop-shadow(0 0 20px rgba(255,69,0,0.9)) drop-shadow(0 0 40px rgba(255,69,0,0.8)) drop-shadow(0 0 60px rgba(255,69,0,0.6))", zIndex: 20 }}
              />
            ))}
          </svg>
          
          <AnimatedSection className="z-10 w-24 h-24 absolute top-0 left-1/2 -translate-x-1/2">
            <VideoIcon className="w-24 h-24 absolute top-60 -left-8 text-agency-orange" stroke="rgb(250 84 33)" strokeWidth="1" />
          </AnimatedSection>
        </div>

        {/* Service Cards */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-8 w-full ${window.innerWidth >= 640 ? 'mt-[300px]' : 'mt-0'}`}>
          {data.services.items.map((service, i) => (
            <div key={i} className="transform hover:-translate-y-2 transition-all duration-300">
              <div className="bg-agency-dark/40 backdrop-blur border border-gray-500/50 rounded-xl p-8 text-center shadow-xl hover:shadow-2xl hover:border-agency-orange/30">
                <div className="w-10 h-10 sm:w-1/4 sm:h-1/4 object-cover text-agency-orange opacity-70 mx-auto">
                  {typeof service.icon === 'string' ? getIconComponent(service.icon) : service.icon}
                </div>
                <h3 className="text-md sm:text-2xl font-bold my-4 text-[#E6E6E7]">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-xs sm:text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeDotsTimeline;
