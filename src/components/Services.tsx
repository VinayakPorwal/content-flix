import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Sparkles, Youtube, Instagram, Target, Video, PenTool, BarChart, Edit, Upload, Layout, Image, Lightbulb } from 'lucide-react';
import data from '../data/data.json';

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
    default:
      return null;
  }
};

const ServiceCard = ({ title, description, videoSrc, thumbnailSrc, aspectClass, icon, rotate, index }) => (
  <div className={`${rotate}`}>
    <AnimatedSection
      delay={100 * index}
      className={`rounded-xl p-4 transition-all duration-300`}
    >
      <motion.div className="rounded-lg overflow-hidden mb-4" whileHover={{ scale: 1.05 }}>
        <div className="relative w-full h-full group rounded-xl border border-agency-orange/20 bg-white/90 backdrop-blur-sm hover:border-agency-gold/40 transition-all duration-300 glow-on-hover">
          <video
            src={videoSrc}
            className={`w-full h-full object-cover rounded-xl ${icon==="Instagram" ? "aspect-[9/16]" : aspectClass}`}
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 rounded-xl bg-white/40 backdrop-blur-sm">
            <div className="w-1/3 h-1/3 object-cover text-agency-orange opacity-70">
              {typeof icon === 'string' ? getIconComponent(icon) : icon}
            </div>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center bg-gray-100/80 opacity-0 transition-opacity duration-300 rounded-xl"
            style={{ opacity: 0 }}
          >
            <div className="w-8 h-8 border-4 border-agency-orange border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </motion.div>
      <h3 className="text-xl font-bold text-agency-dark mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </AnimatedSection>
  </div>
);

const Services = () => {
  const { badge, title, subtitle } = data.services;
  const items = [
    {
      title: 'Content Strategy',
      description: 'Custom content strategy tailored to your niche & goals',
      videoSrc: '/videos/strategy.mp4',
      thumbnailSrc: '/images/strategy.jpg',
      aspectClass: 'aspect-video',
      icon: 'Strategy',
      rotate: '-rotate-12',
    },
    {
      title: 'Video Editing',
      description: 'Premium, fast-paced editing that stops the scroll',
      videoSrc: '/videos/editing.mp4', 
      thumbnailSrc: '/images/editing.jpg',
      aspectClass: 'aspect-video',
      icon: 'Video',
      rotate: 'rotate-0',
    },
    {
      title: 'Thumbnails',
      description: 'High-CTR thumbnails designed for maximum visibility',
      videoSrc: '/videos/thumbnails.mp4',
      thumbnailSrc: '/images/thumbnails.jpg',
      aspectClass: 'aspect-video', 
      icon: 'Thumbnails',
      rotate: 'rotate-12',
    },
    {
      title: 'Analytics',
      description: 'Data-driven insights to optimize your content strategy',
      videoSrc: '/videos/analytics.mp4',
      thumbnailSrc: '/images/analytics.jpg',
      aspectClass: 'aspect-video',
      icon: 'Analytics', 
      rotate: '-rotate-12',
    },
    {
      title: 'Content Ideas',
      description: 'Trending topics and proven content frameworks',
      videoSrc: '/videos/ideas.mp4',
      thumbnailSrc: '/images/ideas.jpg',
      aspectClass: 'aspect-video',
      icon: 'Idea',
      rotate: 'rotate-0',
    },
    {
      title: 'Management',
      description: 'Full posting & management across all platforms',
      videoSrc: '/videos/management.mp4',
      thumbnailSrc: '/images/management.jpg',
      aspectClass: 'aspect-video',
      icon: 'Management',
      rotate: 'rotate-12',
    },
  ];


  return (
    <section id="services" className="section-spacing relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 shadow-sm px-5 py-2 mb-4 border border-agency-gold/20">
              <Sparkles className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">Services</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-6 text-3xl md:text-4xl lg:text-5xl font-bold">
              You Shoot. We Handle The Rest.
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-gray-600 text-lg">
              Focus on creating while we handle your growth & management. Our comprehensive system takes care of everything you need to succeed.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:grid-cols-3 gap-12 w-[90%] mx-auto">
          {items.map((service, index) => (
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
