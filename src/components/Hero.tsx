
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
      className="relative overflow-hidden pt-32 pb-30 md:pt-36 bg-transparent"
      // className="relative overflow-hidden pt-32 pb-40 md:pt-36 md:pb-60 bg-gradient-to-br from-black to-gray-900"
   
    >
      {/* Background Elements */}
      {/* <div 
        ref={circleOneRef} 
        className="parallax-element absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-agency-gold/10 blur-3xl"
      />
      <div 
        ref={circleTwoRef} 
        className="parallax-element absolute top-1/3 right-0 w-96 h-96 rounded-full bg-agency-gold/10 blur-3xl"
      />
      <div 
        ref={circleThreeRef} 
        className="parallax-element absolute -bottom-20 left-1/3 w-80 h-80 rounded-full bg-agency-gold/10 blur-3xl"
      /> */}

      {/* Floating icons */}
      <motion.div 
        className="absolute left-[5%] top-[25%] text-agency-gold/30"
        variants={floatingIconVariants}
        animate="animate"
      >
        <Camera size={60} className='-rotate-12' />
      </motion.div>
      
      <motion.div 
        className="absolute right-[12%] top-[10%] text-agency-gold/25"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <TrendingUp size={70}   />
      </motion.div>
      <motion.div 
        className="absolute right-[10%] top-[40%] text-agency-gold/20"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <Film size={80} className='rotate-12' />
      </motion.div>
      
      <motion.div 
        className="absolute left-[15%] bottom-[40%] text-agency-gold/25"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <VideoIcon size={70} />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-agency-dark/40 dark-glass px-5 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-agency-gold" />
              <span className="text-white font-medium text-sm">Premium Content Creation Agency</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="fade-up">
            <h1 className="font-bold text-white mb-6">
              <span className="text-agency-gold">C<PlayCircle className="inline-block" color="white" size={40} />ntent </span>that Converts &<br className="hidden md:block" />
              Brands that <span className="text-agency-gold">Stand Out</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={400} animation="fade-up">
            <p className="text-lg md:text-xl text-white/80   max-w-2xl">
              {data.hero.subtitle}
            </p>
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
                className="bg-agency-gold hover:bg-agency-gold/90 text-black font-medium px-8 rounded-full h-14 flex items-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Book a Free Strategy Call
              </Button>
            </motion.div>
         

          {/* <AnimatedSection delay={600} animation="fade-up" className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-agency-gold hover:bg-agency-gold/90 text-black font-medium px-8 rounded-full h-14">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-6 rounded-full h-14 glass">
                <Play className="mr-2 h-5 w-5" />
                Watch Showreel
              </Button>
            </motion.div>
          </AnimatedSection> */}
          
          {/* <AnimatedSection delay={800} animation="fade-up" className="mt-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
              {['Disney', 'Netflix', 'Spotify', 'Amazon'].map((brand, index) => (
                <div key={index} className="flex justify-center items-center">
                  <p className="text-xl font-bold text-white/60">{brand}</p>
                </div>
              ))}
            </div>
          </AnimatedSection> */}

          {/* VSL Section */}
         
            <div className="vsl-container bg-agency-dark/40 dark-glass rounded-2xl p-4">
              <div className="relative w-full h-0 pb-[56.25%] bg-black/80 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center flex flex-col items-center">
                    <motion.div 
                      className="w-20 h-20 rounded-full bg-agency-gold/30 flex items-center justify-center mb-5 glass"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                    >
                      <Play className="h-10 w-10 text-white" />
                    </motion.div>
                    <p className="text-xl font-medium">Watch Our Video Sales Letter</p>
                    <p className="text-sm text-white/60 mt-2">Discover how we transform brands</p>
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
