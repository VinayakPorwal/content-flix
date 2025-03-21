
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { Play, ArrowRight, Sparkles, Calendar, Camera, Film, VideoIcon, Video, PlayCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import data from '../data/data.json';

const Hero: React.FC = () => {

  // Floating icons animation
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
    <section
      className="relative overflow-hidden pt-24 pb-30 md:pt-36"
    >
      {/* Floating icons */}
      <motion.div
        className="absolute left-[5%] top-[25%] text-agency-orange/50"
        variants={floatingIconVariants}
        animate="animate"
      >
        <Camera className='-rotate-12 w-[40px] h-[40px] md:w-[60px] md:h-[60px]' />
      </motion.div>

      <motion.div
        className="absolute right-[12%] top-[10%] text-agency-orange/40"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <TrendingUp className='w-[45px] h-[45px] md:w-[70px] md:h-[70px]' />
      </motion.div>
      <motion.div
        className="absolute right-[10%] top-[40%] text-agency-gold/40"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Film className='rotate-12 w-[50px] h-[50px] md:w-[80px] md:h-[80px]' />
      </motion.div>

      <motion.div
        className="absolute left-[15%] bottom-[40%] text-agency-orange/40"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <VideoIcon className='w-[45px] h-[45px] md:w-[70px] md:h-[70px]' />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in">
            {/* <div className="inline-flex items-center gap-2 rounded-full bg-white shadow-sm px-5 py-2 mb-6 border border-agency-orange/20">
              <Sparkles className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">{data.hero.badge}</span>
            </div> */}
            <h1 className='text-agency-orange text-3xl md:text-5xl font-bold mb-4 relative'>
              <img src="/logowithname.png" alt="Content Finix" className="lg:h-24 h-16 relative" />
            </h1>

          </AnimatedSection>

          <AnimatedSection delay={200} animation="fade-up">
            <div className="font-bold text-agency-dark mb-6 text-3xl md:text-5xl space-y-4">
              <span className="text-agency-orange/90 tracking-wide">
                {`No More `} 
                 <span className='text-agency-dark line- text-3xl md:text-5xl'>‘Playing the Game’</span>
              </span>
                <br className="hidden md:block mb-2" />
              <span className="text-agency-orange text-4xl md:text-6xl tracking-wider"> Start Owning It</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} animation="fade-up">
            <p className="text-md md:text-xl text-gray-600 max-w-2xl" dangerouslySetInnerHTML={{ __html: data.hero.subtitle }} />


          </AnimatedSection>
          <AnimatedSection delay={500} animation="fade-up" className="w-full max-w-5xl mx-auto mt-10">
            {/* Book a Call Button below VSL */}
            <motion.div
              className="flex justify-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-agency-orange hover:bg-agency-orange/90 text-white font-medium px-8 rounded-full h-14 flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Book a Free Strategy Call
              </Button>
            </motion.div>

            {/* VSL Section */}
            <div className="vsl-container bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-agency-orange/20 mb-16">
              <div className="relative w-full h-0 pb-[56.25%] bg-gray-100 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-agency-dark text-center flex flex-col items-center">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-agency-orange/30 flex items-center justify-center mb-5 glass"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <Play className="h-10 w-10 text-agency-dark" />
                    </motion.div>
                    <p className="text-xl font-medium">Watch Our Video Sales Letter</p>
                    <p className="text-sm text-gray-500 mt-2">Discover how we transform brands</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
