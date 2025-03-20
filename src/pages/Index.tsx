
import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';
import ProcessSteps from '../components/ProcessSteps';
import PricingPlans from '../components/PricingPlans';
import { AnimatePresence } from 'framer-motion';
import data from '../data/data.json';

const Index = () => {
  
  useEffect(() => {
    // Enable smooth scrolling with parallax effect
    const handleScroll = () => {
      const parallaxElements = document.querySelectorAll('.parallax-element');
      parallaxElements.forEach((element) => {
        const scrollY = window.scrollY;
        const elementTop = (element as HTMLElement).getBoundingClientRect().top + scrollY;
        const offsetY = (scrollY - elementTop) * 0.1;
        
        if (element.classList.contains('scroll-up')) {
          (element as HTMLElement).style.transform = `translateY(${-offsetY}px)`;
        } else if (element.classList.contains('scroll-down')) {
          (element as HTMLElement).style.transform = `translateY(${offsetY}px)`;
        }
      });

      // Reveal elements on scroll
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check for elements in viewport
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-white relative overflow-x-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#F97316" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
        
        {/* Background Gradient Circles */}
        <div 
          className="parallax-element fixed top-1/4 -left-20 w-96 h-96 rounded-full bg-agency-orange/5 blur-3xl"
        />
        <div 
          className="parallax-element fixed top-1/3 right-0 w-96 h-96 rounded-full bg-agency-gold/5 blur-3xl"
        />
        <div 
          className="parallax-element fixed -bottom-20 left-1/3 w-80 h-80 rounded-full bg-agency-cream/20 blur-3xl"
        />
        
        <Navbar />
        <Hero />
        <ProcessSteps />
        <Services />
        <Portfolio />
        <PricingPlans />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default Index;
