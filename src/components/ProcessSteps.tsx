
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { Sparkles, Camera, Film, Presentation, BarChart3, TrendingUp, Video } from 'lucide-react';
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
        "process-card bg-white p-5 sm:p-8 md:p-10 rounded-2xl border border-agency-orange/20 min-h-[200px] md:min-h-[250px]",
        "transition-all duration-800 ease-out",
        "md:sticky",
        isActive ? "opacity-100" : "opacity-50 md:translate-y-[100px]"
      )}
      style={{
        top: `${index*10 + 200}px`,
        zIndex: index
      }}
    >
      <div className="flex items-start gap-3 sm:gap-6">
        <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-agency-orange/30 flex items-center justify-center glass">
          <span className="text-xl sm:text-2xl font-bold text-agency-dark">{number}</span>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-agency-dark mb-2 md:mb-4">{title}</h3>
          <p className="text-gray-600 text-sm md:text-lg">{description}</p>
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

  return (
    <section id="process" className="process-section bg-transparent" ref={sectionRef}>
      <div className="container-custom py-16 md:py-32 relative">
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

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <motion.div 
            ref={textRef} 
            className="w-full md:w-1/3 md:sticky md:top-32 self-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedSection animation="fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 mb-4 border border-agency-orange/20 shadow-sm">
                <Sparkles className="h-4 w-4 text-agency-orange" />
                <span className="text-agency-dark font-medium text-sm">Our 5-Step Process</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} animation="fade-up">
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-agency-dark mb-4 md:mb-6" dangerouslySetInnerHTML={{ __html: data.process.title.replace('text-agency-gold', 'text-agency-orange') }}></h2>
            </AnimatedSection>
            
            <AnimatedSection delay={300} animation="fade-up">
              <p className="text-base md:text-lg text-gray-600" dangerouslySetInnerHTML={{ __html: data.process.subtitle.replace('text-agency-gold', 'text-agency-orange') }}></p>
            </AnimatedSection>

            <AnimatedSection delay={400} animation="fade-up">
              <div className="mt-6 md:mt-8">
                <motion.button
                  className="bg-agency-orange hover:bg-agency-orange/90 text-white font-medium px-5 py-2 md:px-6 md:py-3 rounded-full flex items-center gap-2 text-sm md:text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BarChart3 className="h-4 w-4 md:h-5 md:w-5" />
                  <span>Book a Strategy Call</span>
                </motion.button>
              </div>
            </AnimatedSection>
          </motion.div>
          
          <div className="w-full md:w-2/3 space-y-4 md:space-y-0">
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
