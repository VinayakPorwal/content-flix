import React, { useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, VideoIcon, TrendingUp, Target, Sparkles, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import data from '../data/data.json';

const CallToAction: React.FC = () => {
  
  // Floating icons animation variants
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

  const { ctaButton, steps } = data.callToAction;

  return (
    <section id="contact" className="mb-6 relative overflow-hidden">
      {/* Floating icons */}
      <motion.div
        className="absolute right-[55%] top-[10%] text-agency-orange/20"
        variants={floatingIconVariants}
        animate="animate"
      >
        <VideoIcon size={60} />
      </motion.div>

      <motion.div
        className="absolute left-[10%] bottom-[10%] text-agency-orange/20"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <TrendingUp size={50} />
      </motion.div>

      <motion.div
        className="absolute right-[10%] bottom-[30%] text-agency-orange/20"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <Target size={70} />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 mb-4 border border-agency-orange/20 shadow-sm">
              <Sparkles className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">Book a Call</span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-6">Still Haven't booked?
              <span className="text-agency-orange"> Oh!</span></h2>
          </AnimatedSection>

          <AnimatedSection delay={300}>
            <p className="text-gray-600 text-md md:text-lg">
              Book a call with us to discuss how we can help you transform your content.
            </p>
          </AnimatedSection>
        </div>
         {/* CTA Button */}
         <AnimatedSection delay={400} className="text-center mb-10">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-agency-orange hover:bg-agency-orange/90 text-white px-12 rounded-full h-14 text-lg font-medium"
                >
                  {ctaButton.text}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </AnimatedSection>

        <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-agency-orange/20 p-6 md:p-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Title */}
            <AnimatedSection className="text-center mb-8 md:mb-16">
              <h2 className="text-xl md:text-4xl font-bold text-agency-dark flex items-center justify-center gap-3">
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Settings className="h-8 w-8 text-agency-orange" />
                </motion.div>
                What Will Happen Next?
              </h2>
            </AnimatedSection>

            {/* Horizontal Timeline */}
            <AnimatedSection delay={200} className="relative mb-8 md:mb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className="relative"
                  >
                    <div className="absolute lg:-top-10 top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full border-2 border-agency-orange flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 1 }}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-agency-orange font-bold text-2xl"
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                    <div className="pt-20 bg-gray-50/80 p-4 md:p-6 rounded-lg border border-agency-orange/10 h-full">
                      <h3 className="text-agency-orange text-lg font-medium mb-2">{step.title}</h3>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
