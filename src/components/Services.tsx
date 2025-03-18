import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Sparkles, Video, Youtube, Instagram, Target } from 'lucide-react';


const ServiceCard = ({ title, description, videoSrc, thumbnailSrc, aspectClass, icon, rotate, index }) => (
  <div className={`${rotate}`}>
  <AnimatedSection
    delay={100 * index}
    className={`rounded-xl p-4 transition-all duration-300  ${aspectClass}`}
  >
    <motion.div className="rounded-lg overflow-hidden mb-4" whileHover={{ scale: 1.05 }}>
      <div className="relative w-full h-full group rounded-xl border border-agency-gold/20 bg-black/20 backdrop-blur-sm hover:border-agency-gold/40 transition-all duration-300 glow-on-hover">
        <video
          src={videoSrc}
          className={`w-full h-full object-cover rounded-xl ${aspectClass}`}
          loop
          muted
          playsInline
          // onMouseEnter={(e) => {
          //   const video = e.target as HTMLVideoElement;
          //   video.play();
          // }}
          // onMouseLeave={(e) => {
          //   const video = e.target as HTMLVideoElement;
          //   video.pause();
          //   video.currentTime = 0;
          // }}
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 rounded-xl bg-black/40 backdrop-blur-sm">
          {/* <img
            src={thumbnailSrc}
            alt={title}
            className={`w-full h-full object-cover ${aspectClass}`}
          /> */}

          <div className="w-1/3 h-1/3 object-cover text-agency-gold opacity-50" >
            {icon}
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity duration-300 rounded-xl" 
             style={{opacity: 0}}>
          <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"/>
        </div>
      </div>
    </motion.div>
    <h3 className="text-xl font-bold text-white mb-2 text-center">{title}</h3>
    <p className="text-white/70 text-center">{description}</p>
  </AnimatedSection>
  </div>
);

const Services = () => {
  const services = [
    {
      title: "YouTube/Long Form Videos",
      description: "High-quality long-form content to engage and inform viewers.",
      videoSrc: "/videos/youtube-preview.mp4",
      thumbnailSrc: "./og-image.png",
      aspectClass: "aspect-video",
      icon: <Youtube className="w-full h-full" />,
      rotate: "-rotate-12"
    },
    {
      title: "Reels/Shorts",
      description: "Eye-catching short videos designed for social media platforms.",
      videoSrc: "/videos/reels-preview.mp4",
      thumbnailSrc: "./og-image.png",
      aspectClass: "aspect-[9/16]",
      icon: <Instagram className="w-full h-full" />,
      rotate: "rotate-0"
    },
    {
      title: "Content Strategy",
      description: "Strategic planning for content that resonates with your audience.",
      videoSrc: "/videos/content-strategy-preview.mp4",
      thumbnailSrc: "./og-image.png",
      aspectClass: "aspect-square",
      icon: <Target className="w-full h-full" />,
      rotate: "rotate-12"
    }
  ];


  return (
    <section id="services" className="bg-transparent section-spacing relative overflow-hidden">
    {/* <section id="services" className="bg-gradient-to-br from-black to-gray-900 section-spacing relative overflow-hidden"> */}
      {/* Background gradients */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-agency-gold/5 blur-[100px]"></div> */}
      {/* <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-agency-gold/5 blur-[100px]"></div> */}

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-agency-dark/40 dark-glass px-5 py-2 mb-4 border border-agency-gold/20">
              <Sparkles className="h-4 w-4 text-agency-gold" />
              <span className="text-white font-medium text-sm">Our Services</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-white mb-6">Premium Content <span className="text-agency-gold">Services</span></h2>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-white/80 text-lg">
              We offer a comprehensive range of content creation and marketing services to help your business stand out and connect with your audience.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:grid-cols-3 gap-8  w-[90%] mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              videoSrc={service.videoSrc}
              thumbnailSrc={service.thumbnailSrc}
              aspectClass={service.aspectClass}
              icon={service.icon}
              rotate={service.rotate}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
