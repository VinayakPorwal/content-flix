
import React, { useRef, useEffect } from 'react';
import AnimatedSection from './AnimatedSection';
import { Button } from '@/components/ui/button';
import { ArrowRight, VideoIcon, TrendingUp, Target, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const circleOneRef = useRef<HTMLDivElement>(null);
  const circleTwoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!parallaxRef.current) return;
      
      const container = parallaxRef.current;
      const rect = container.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const deltaX = (mouseX - centerX) / centerX;
      const deltaY = (mouseY - centerY) / centerY;
      
      if (circleOneRef.current) {
        circleOneRef.current.style.transform = `translate(${deltaX * -30}px, ${deltaY * -30}px)`;
      }
      
      if (circleTwoRef.current) {
        circleTwoRef.current.style.transform = `translate(${deltaX * 20}px, ${deltaY * 20}px)`;
      }
    };
    
    const container = parallaxRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

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

  return (
    <section id="contact" className="section-spacing bg-transparent relative overflow-hidden" ref={parallaxRef}>
    {/* <section id="contact" className="section-spacing bg-gradient-to-br from-black to-gray-900 relative overflow-hidden" ref={parallaxRef}> */}
      {/* Background Elements */}
      {/* <div 
        ref={circleOneRef} 
        className="parallax-element absolute top-1/3 -left-20 w-96 h-96 rounded-full bg-agency-gold/5 blur-[100px]"
      />
      <div 
        ref={circleTwoRef} 
        className="parallax-element absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-agency-gold/5 blur-[100px]"
      /> */}

      {/* Floating icons */}
      <motion.div 
        className="absolute right-[55%] top-[10%] text-agency-gold/20"
        variants={floatingIconVariants}
        animate="animate"
      >
        <VideoIcon size={60} />
      </motion.div>
      
      <motion.div 
        className="absolute left-[10%] bottom-[10%] text-agency-gold/20"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 1 }}
      >
        <TrendingUp size={50} />
      </motion.div>
      
      <motion.div 
        className="absolute right-[10%] bottom-[30%] text-agency-gold/20"
        variants={floatingIconVariants}
        animate="animate"
        transition={{ delay: 0.5 }}
      >
        <Target size={70} />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="dark-glass rounded-3xl shadow-xl overflow-hidden border border-agency-gold/20">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12 lg:p-16">
              {/* <AnimatedSection>
                <div className="inline-flex items-center rounded-full bg-agency-gold/10 px-4 py-1.5 mb-6 border border-agency-gold/20">
                  <span className="text-agency-gold font-medium text-sm">Get in Touch</span>
                </div>
              </AnimatedSection> */}
              <AnimatedSection animation="fade-in">
            <div className="inline-flex items-center gap-2 rounded-full bg-agency-dark/40 dark-glass px-5 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-agency-gold" />
              <span className="text-white font-medium text-sm">Get in Touch</span>
            </div>
          </AnimatedSection>
              
              <AnimatedSection delay={200}>
                <h2 className="text-white mb-6">Ready to <span className="text-agency-gold">Transform</span> Your Content?</h2>
              </AnimatedSection>
              
              <AnimatedSection delay={300}>
                <p className="text-white/80 text-lg mb-8">
                  Let's discuss how our content production and marketing services can help your business achieve its goals. Schedule a consultation with our team today.
                </p>
              </AnimatedSection>
              
              <AnimatedSection delay={400}>
                <Button 
                  size="lg" 
                  className="bg-agency-gold hover:bg-agency-gold/90 text-black px-8 rounded-full h-14"
                >
                  Schedule a Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </AnimatedSection>
            </div>
            
            <div className="bg-agency-dark h-full py-16 px-8 md:p-12 lg:p-16 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-agency-dark backdrop-blur-sm"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-agency-gold/10 to-transparent"></div>
              
              <div className="relative z-10 text-white">
                <AnimatedSection>
                  <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                </AnimatedSection>
                
                <AnimatedSection delay={200} className="space-y-6">
                  <div>
                    <p className="text-agency-gold/70 mb-1">Email</p>
                    <p className="text-lg">hello@agencyflow.com</p>
                  </div>
                  
                  <div>
                    <p className="text-agency-gold/70 mb-1">Phone</p>
                    <p className="text-lg">+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <p className="text-agency-gold/70 mb-1">Address</p>
                    <p className="text-lg">123 Creative St, Suite 100<br />New York, NY 10001</p>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
