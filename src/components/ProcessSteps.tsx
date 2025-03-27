
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { Sparkles, Camera, Film, Presentation, BarChart3, TrendingUp, Video, ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import data from "../data/data.json"

interface StepCardProps {
  number: number;
  title: string;
  description: string;
  index: number;
  progress: number;
}

const StepCard: React.FC<StepCardProps> = ({ number, title, description, index, progress }) => {
  const isActive = progress >= index / 7;
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "process-card bg-white p-5 sm:p-6 md:p-8 rounded-2xl border border-agency-orange/20 min-h-[180px] md:min-h-[250px]",
        "transition-all duration-800 ease-out",
        "sticky md:sticky",
        isActive ? "opacity-100" : "opacity-50 md:translate-y-[100px]"
      )}
      style={{
        top: `${index*10 + 120}px`,
        zIndex: index
      }}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-agency-orange flex items-center justify-center">
          <span className="text-lg sm:text-xl md:text-2xl font-bold text-white">{number}</span>
        </div>
        <div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-agency-dark mb-2 md:mb-4">{title}</h3>
          <p className="text-gray-600 text-xs sm:text-sm md:text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ProcessSteps: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  const [progressValue, setProgressValue] = useState(0);
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange(value => {
      setProgressValue(value);
    });
    
    return () => unsubscribe();
  }, [scrollYProgress]);
  
  const floatingIconVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut"
      }
    }
  };
  const handleBookCall = () => {
    document.getElementById('calendly-container')?.scrollIntoView({ behavior: 'smooth' });
  }


  return (
    <section id="process" className="process-section bg-transparent" ref={sectionRef}>
      <div className="container-custom py-12 md:py-24 lg:py-32 relative">
        {/* Floating icons - hidden on smaller screens */}
        <motion.div 
          className="hidden md:block absolute left-[40%] top-[5%] text-agency-orange/30"
          variants={floatingIconVariants}
          animate="animate"
        >
          <Camera size={60} />
        </motion.div>
        
        <motion.div 
          className="hidden md:block absolute right-[15%] top-[30%] text-agency-orange/20"
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Film size={80} />
        </motion.div>
        
        <motion.div 
          className="hidden md:block absolute right-[10%] bottom-[25%] text-agency-orange/30"
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <Video size={70} />
        </motion.div>
        <motion.div 
          className="hidden md:block absolute left-[40%] bottom-[2%] text-agency-orange/30"
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <Presentation size={70} />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
          <motion.div 
            ref={textRef} 
            className="w-full md:w-1/3 md:sticky md:top-32 self-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedSection animation="fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 sm:px-5 sm:py-2 mb-4 border border-agency-orange/20 shadow-sm">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-agency-orange" />
                <span className="text-agency-dark font-medium text-xs sm:text-sm">Our 5-Step Process</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} animation="fade-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-agency-dark mb-3 md:mb-6" dangerouslySetInnerHTML={{ __html: data.process.title.replace('text-agency-gold', 'text-agency-orange') }}></h2>
            </AnimatedSection>
            
            <AnimatedSection delay={300} animation="fade-up">
              <p className="text-sm sm:text-base md:text-lg text-gray-600" dangerouslySetInnerHTML={{ __html: data.process.subtitle.replace('text-agency-gold', 'text-agency-orange') }}></p>
            </AnimatedSection>

            <AnimatedSection delay={400} animation="fade-up">
              <div className="mt-4 md:mt-8">
                <motion.button
                  className="bg-agency-orange hover:bg-agency-orange/90 text-white font-medium px-4 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 text-xs sm:text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBookCall}
                >
                  <span>Book a Strategy Call</span>
                  <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                </motion.button>
              </div>
            </AnimatedSection>
          </motion.div>
          
          <div className="w-full md:w-2/3 space-y-3 md:space-y-0">
            {data.process.steps.map((step, index) => (
              <StepCard
                key={index}
                number={step.number}
                title={step.title}
                description={step.description}
                index={index}
                progress={progressValue}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
