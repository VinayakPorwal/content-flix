
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Sparkles, X } from 'lucide-react';
import data from '../data/data.json';

const CaseStudyCard = ({ title, description, thumbnailSrc, index, onClick }) => (
  <div onClick={onClick} className="cursor-pointer">
    <AnimatedSection
      delay={100 * index}
      className={`rounded-xl p-4 transition-all duration-300`}
    >
      <motion.div className="rounded-lg overflow-hidden mb-4" whileHover={{ scale: 1.05 }}>
        <div className="relative w-full h-full group rounded-xl border border-agency-orange/20 bg-white/90 backdrop-blur-sm hover:border-agency-gold/40 transition-all duration-300 glow-on-hover">
          <img
            src={thumbnailSrc}
            className="w-full h-full object-cover rounded-xl"
            alt={title}
          />
          <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 rounded-xl bg-white/40 backdrop-blur-sm">
            <div className="w-1/3 h-1/3 object-cover text-agency-orange opacity-70">
              <Sparkles className="w-full h-full" />
            </div>
          </div>
        </div>
      </motion.div>
      <h3 className="text-xl font-bold text-agency-dark mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </AnimatedSection>
  </div>
);

const CaseStudies = () => {
  const { badge, title, subtitle, items } = data.caseStudies;
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const openModal = (caseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const closeModal = () => {
    setSelectedCaseStudy(null);
  };

  return (
    <section id="case-studies" className="section-spacing relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 shadow-sm px-5 py-2 mb-4 border border-agency-gold/20">
              <Sparkles className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">{badge}</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-6" dangerouslySetInnerHTML={{ __html: title.replace('text-agency-gold', 'text-agency-orange') }} />
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-gray-600 text-lg">
              {subtitle}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center lg:grid-cols-3 gap-12 w-[90%] mx-auto">
          {items.map((caseStudy, index) => (
            <CaseStudyCard
              key={index}
              title={caseStudy.title}
              description={caseStudy.description}
              thumbnailSrc={caseStudy.thumbnailSrc}
              index={index}
              onClick={() => openModal(caseStudy)}
            />
          ))}
        </div>
      </div>

      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative bg-white rounded-lg overflow-hidden w-full max-w-4xl p-8">
            <button
              className="absolute top-4 right-4 text-agency-dark hover:text-agency-orange"
              onClick={closeModal}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-agency-dark mb-4">{selectedCaseStudy.title}</h2>
            <p className="text-gray-600 mb-4">{selectedCaseStudy.description}</p>
            <div className="w-full h-0 pb-[56.25%] relative">
              <iframe
                src={selectedCaseStudy.videoSrc}
                className="absolute inset-0 w-full h-full rounded-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={selectedCaseStudy.title}
              ></iframe>
            </div>
          </div>
        </div>
      )}
      
      {/* Add a white fade effect for better transition to footer */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-0"></div>
    </section>
  );
};

export default CaseStudies;
