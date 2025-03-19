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
  const isActive = progress >= index / 6;
  const cardRef = useRef<HTMLDivElement>(null);
  
  return (
    <div 
      ref={cardRef}
      className={cn(
        "process-card bg-black p-10 rounded-2xl border border-agency-gold/20 min-h-[250px]",
        "transition-all duration-800 ease-out",
        "sticky",
        // isActive ? "opacity-100" : "opacity-0 translate-y-[500px]"
      )}
      style={{
        top: `${index*10 + 200}px`, // Adjust this value to control spacing between cards
        zIndex: index
      }}
    >
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-agency-gold/30 flex items-center justify-center glass">
          <span className="text-2xl font-bold text-white">{number}</span>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
          <p className="text-white/80 text-lg">{description}</p>
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
    {/* <section id="process" className="process-section bg-gradient-to-br from-black to-gray-900" ref={sectionRef}> */}
      <div className="container-custom py-32 relative">
        {/* Floating icons */}
        <motion.div 
          className="absolute left-[40%] top-[5%] text-agency-gold/30"
          variants={floatingIconVariants}
          animate="animate"
        >
          <Camera size={60} />
        </motion.div>
        
        <motion.div 
          className="absolute right-[15%] top-[30%] text-agency-gold/20"
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Film size={80} />
        </motion.div>
        
        <motion.div 
          className="absolute right-[10%] bottom-[25%] text-agency-gold/30"
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <Video size={70} />
        </motion.div>
        <motion.div 
          className="absolute left-[40%] bottom-[2%] text-agency-gold/30"
          variants={floatingIconVariants}
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <Presentation size={70} />
        </motion.div>

        <div className="flex flex-col md:flex-row gap-10 items-start">
          <motion.div 
            ref={textRef} 
            className="md:w-1/3 sticky top-32 self-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatedSection animation="fade-in">
              <div className="inline-flex items-center gap-2 rounded-full bg-agency-dark/40 dark-glass px-5 py-2 mb-4 border border-agency-gold/20">
                <Sparkles className="h-4 w-4 text-agency-gold" />
                <span className="text-white font-medium text-sm">Our 5-Step Process</span>
              </div>
            </AnimatedSection>
            
            <AnimatedSection delay={200} animation="fade-up">
              <h2 className="text-white mb-6" dangerouslySetInnerHTML={{ __html: data.process.title }}></h2>
            </AnimatedSection>
            
            <AnimatedSection delay={300} animation="fade-up">
              <p className="text-white/80 text-lg" dangerouslySetInnerHTML={{ __html: data.process.subtitle }}></p>
            </AnimatedSection>

            <AnimatedSection delay={400} animation="fade-up">
              <div className="mt-8">
                <motion.button
                  className="bg-agency-gold hover:bg-agency-gold/90 text-black font-medium px-6 py-3 rounded-full flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <BarChart3 className="h-5 w-5" />
                  <span>Book a Strategy Call</span>
                </motion.button>
              </div>
            </AnimatedSection>
          </motion.div>
          
          <div className="md:w-2/3">
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
