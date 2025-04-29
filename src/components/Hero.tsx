import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import AnimatedSection from './AnimatedSection';
import { Play, ArrowRight, Sparkles, Calendar, Camera, Film, VideoIcon, Video, PlayCircle, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import data from '../data/data.json';

const Hero: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

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

  const handleBookCall = () => {
    document.getElementById('calendly-container')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <section
      className="relative overflow-hidden pt-16 pb-20 md:pt-36"
    >
      {/* Floating icons - Hidden on mobile */}
      <div className="hidden md:block">
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
      </div>

      <div className="container-custom relative z-10 px-4 md:px-0">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in">
            <h1 className='text-agency-orange text-3xl md:text-5xl font-bold mb-4 relative md:hidden block'>
              <img src="/logowithname.png" alt="Content Finix" className="h-12 w-auto" />
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="fade-up">
            <div className="font-bold text-agency-dark mb-6 text-2xl md:text-5xl space-y-2 md:space-y-4">
              <span className="bg-gradient-to-r from-agency-orange to-red-500 bg-clip-text text-transparent tracking-wide">
                {`No More `} 
                <span className='text-agency-dark text-2xl md:text-5xl'>'Playing the Game'</span>
              </span>
              <br className="hidden md:block mb-2" />
              <span className="bg-gradient-to-r from-agency-orange to-red-500 bg-clip-text text-transparent text-3xl md:text-6xl tracking-wider block mt-2 pb-2.5"> Start Owning It</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} animation="fade-up">
            <p className="text-sm md:text-xl text-gray-600 max-w-2xl px-4 md:px-0" dangerouslySetInnerHTML={{ __html: data.hero.subtitle }} />
          </AnimatedSection>

          <AnimatedSection delay={500} animation="fade-up" className="w-full max-w-5xl mx-auto mt-6 md:mt-10">
            {/* Book a Call Button below VSL */}
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-agency-orange hover:bg-agency-orange/90 text-white font-medium px-6 md:px-8 rounded-full h-12 md:h-14 flex items-center gap-2 text-sm md:text-base"
                onClick={handleBookCall}
              >
                <Calendar className="h-4 w-4 md:h-5 md:w-5" />
                Book a Free Strategy Call
              </Button>
            </motion.div>

            {/* VSL Section */}
            {/* <div className="vsl-container bg-agency-dark/90 backdrop-blur-sm rounded-xl md:rounded-2xl p-2 shadow-lg border border-agency-orange/20 mb-8 md:mb-16">
              <div className="relative w-full h-0 pb-[56.25%] bg-gray-100 rounded-lg md:rounded-xl overflow-hidden">
                {!selectedRole ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-6 p-4">
                    <h3 className="text-xl md:text-2xl font-bold text-agency-dark mb-2 md:mb-4">I am a...</h3>
                    <div className="flex flex-col md:flex-row gap-3 md:gap-4 w-full md:w-auto px-4">
                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="w-full md:w-auto"
                      >
                        <Button
                          onClick={() => setSelectedRole('business')}
                          className="w-full md:w-auto bg-agency-orange hover:bg-agency-orange/90 text-white px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-base md:text-lg hover:translate-y-[-4px] transition-transform duration-200"
                        >
                          Business Owner
                        </Button>
                      </motion.div>

                      <motion.div
                        animate={{
                          y: [0, -10, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 0.5
                        }}
                        className="w-full md:w-auto"
                      >
                        <Button
                          onClick={() => setSelectedRole('creator')}
                          className="w-full md:w-auto bg-agency-orange hover:bg-agency-orange/90 text-white px-4 md:px-8 py-3 md:py-4 rounded-lg md:rounded-xl text-base md:text-lg hover:translate-y-[-4px] transition-transform duration-200"
                        >
                          Content Creator
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="text-agency-dark text-center flex flex-col items-center">
                      <motion.div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-agency-orange/30 flex items-center justify-center mb-4 md:mb-5 glass cursor-pointer"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                        onClick={() => {
                          console.log(`Playing video for ${selectedRole}`);
                        }}
                      >
                        <Play className="h-8 w-8 md:h-10 md:w-10 text-agency-dark" />
                      </motion.div>
                      <p className="text-lg md:text-xl font-medium">Watch Our Video Sales Letter</p>
                      <p className="text-xs md:text-sm text-gray-500 mt-2">
                        {selectedRole === 'business' 
                          ? 'Learn how we help businesses scale through content' 
                          : 'Discover how we help creators grow their brand'}
                      </p>
                      <button 
                        className="mt-3 md:mt-4 text-agency-orange underline text-sm"
                        onClick={() => setSelectedRole(null)}
                      >
                        Change Selection
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div> */}
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Hero;
