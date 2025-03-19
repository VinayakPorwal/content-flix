
import React from 'react';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { Sparkles, Youtube, Instagram, Target } from 'lucide-react';
import data from '../data/data.json';

// Helper function to get the correct icon component
const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case 'Youtube':
      return <Youtube className="w-full h-full" />;
    case 'Instagram':
      return <Instagram className="w-full h-full" />;
    case 'Target':
      return <Target className="w-full h-full" />;
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
        <div className="relative w-full h-full group rounded-xl border border-agency-gold/20 bg-black/20 backdrop-blur-sm hover:border-agency-gold/40 transition-all duration-300 glow-on-hover">
          <video
            src={videoSrc}
            className={`w-full h-full object-cover rounded-xl ${icon!=="Instagram" ?  aspectClass : "aspect-[9/16]"}`}
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 rounded-xl bg-black/40 backdrop-blur-sm">
            <div className="w-1/3 h-1/3 object-cover text-agency-gold opacity-50">
              {typeof icon === 'string' ? getIconComponent(icon) : icon}
            </div>
          </div>
          <div
            className="absolute inset-0 flex items-center justify-center bg-gray-900/80 opacity-0 transition-opacity duration-300 rounded-xl"
            style={{ opacity: 0 }}
          >
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        </div>
      </motion.div>
      <h3 className="text-xl font-bold text-white mb-2 text-center">{title}</h3>
      <p className="text-white/70 text-center">{description}</p>
    </AnimatedSection>
  </div>
);

const Services = () => {
  const { badge, title, subtitle, items } = data.services;

  return (
    <section id="services" className="bg-transparent section-spacing relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-agency-dark/40 dark-glass px-5 py-2 mb-4 border border-agency-gold/20">
              <Sparkles className="h-4 w-4 text-agency-gold" />
              <span className="text-white font-medium text-sm">{badge}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-white mb-6" dangerouslySetInnerHTML={{ __html: title }} />
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-white/80 text-lg">
              {subtitle}
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
