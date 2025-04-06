
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Volume2, Sparkles } from 'lucide-react';
import data from '../data/data.json';
import AnimatedSection from './AnimatedSection';
import { Button } from './ui/button';
import SectionBadge from './SectionBadge';
import { useIsMobile } from '@/hooks/use-mobile';

const ClientCard = ({ client, index, onClick }) => {
  const isMobile = useIsMobile();
  
  return (
    <div onClick={onClick} className="cursor-pointer">
      <AnimatedSection
        delay={100 * index}
        className="rounded-xl p-2 sm:p-4 transition-all duration-300"
      >
        <div
          className={`
            bg-blue-900
            rounded-2xl
            relative
            shadow-2xl
            transform
            transition-transform
            duration-300
            border-4 sm:border-8 border-agency-dark
          `}
          style={{
            width: client.hw.w,
            height: client.hw.h,
            rotate: isMobile ? "0deg" : `${client.rotate}deg`,
          }}
        >
          {/* Top "speaker/volume" icon */}
          <div className="absolute top-2 right-2 text-white">
            <Volume2 className="w-4 h-4 sm:w-6 sm:h-6 opacity-90" />
          </div>
          {/* Content */}
          <img src={client.image} alt={client.name} className="w-full h-full object-cover rounded-xl" />
        </div>
      </AnimatedSection>
    </div>
  );
};

const ClientResults = () => {
  const { title, clients } = data.clientResults;
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <section id="results" className="section-spacing relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-16">
          <AnimatedSection>
            <SectionBadge text="Client Results" />
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl" 
              dangerouslySetInnerHTML={{ __html: title.replace('text-agency-gold', 'text-agency-orange') }} 
            />
          </AnimatedSection>
        </div>

        <div className={`flex flex-col ${isMobile ? 'gap-6' : 'md:flex-row'} items-center justify-center gap-4 md:gap-8`}>
          {clients.slice(0, 3).map((client, index) => (
            <ClientCard
              key={index}
              client={client}
              index={index}
              onClick={() => navigate(`/case-studies/`)}
            />
          ))}
        </div>

        <AnimatedSection delay={600} className="mt-8 sm:mt-12 text-center">
          <Button
            variant="outline"
            className="border-agency-orange bg-white hover:text-agency-orange/80 text-agency-orange hover:bg-agency-orange/10 px-6 sm:px-8 py-2 rounded-full text-sm sm:text-base"
            onClick={() => window.open('https://volnovaportfolio.my.canva.site/case-studies', '_blank')}
          >
            View All Case Studies
            <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ClientResults;
