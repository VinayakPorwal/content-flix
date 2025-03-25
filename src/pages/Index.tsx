
import React, { useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { AnimatePresence } from 'framer-motion';
import data from '../data/data.json';

// Lazy load components that are not immediately visible
const Services = lazy(() => import('../components/Services'));
const Portfolio = lazy(() => import('../components/Portfolio'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const CallToAction = lazy(() => import('../components/CallToAction'));
const Footer = lazy(() => import('../components/Footer'));
const ProcessSteps = lazy(() => import('../components/ProcessSteps'));
const WhoThisIsFor = lazy(() => import('../components/WhoThisIsFor'));
const WhyUs = lazy(() => import('@/components/WhyUs'));
const CaseStudies = lazy(() => import('@/components/CaseStudies'));
const ClientResults = lazy(() => import('@/components/ClientResults')); 
// Simple loading component
const SectionLoading = () => (
  <div className="w-full py-16 flex items-center justify-center">
    <div className="animate-pulse bg-agency-orange/10 h-32 w-full max-w-3xl rounded-xl"></div>
  </div>
);

const Index = () => {
  const isInitialRender = useRef(true);
  
  const handleScroll = useCallback(() => {
    // Optimize by using requestAnimationFrame to limit DOM operations
    requestAnimationFrame(() => {
      const parallaxElements = document.querySelectorAll('.parallax-element');
      const scrollY = window.scrollY;
      
      parallaxElements.forEach((element) => {
        const elementTop = (element as HTMLElement).getBoundingClientRect().top + scrollY;
        const offsetY = (scrollY - elementTop) * 0.1;
        
        if (element.classList.contains('scroll-up')) {
          (element as HTMLElement).style.transform = `translateY(${-offsetY}px)`;
        } else if (element.classList.contains('scroll-down')) {
          (element as HTMLElement).style.transform = `translateY(${offsetY}px)`;
        }
      });

      // Batch DOM operations for reveal elements
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      const windowHeight = window.innerHeight;
      const elementVisible = 150;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
          if (!element.classList.contains('active')) {
            element.classList.add('active');
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    // Add passive option to optimize scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Only run initial check on first render
    if (isInitialRender.current) {
      handleScroll();
      isInitialRender.current = false;
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-white relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="dotPattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="#F97316" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
        
        {/* Optimized Background Gradient Circles */}
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
        
        <Suspense fallback={<SectionLoading />}>
          <WhoThisIsFor />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <WhyUs />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Services />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <ProcessSteps />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Portfolio />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <ClientResults />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Testimonials />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <CallToAction />
        </Suspense>
        
        {/* <Suspense fallback={<SectionLoading />}>
          <CaseStudies />
        </Suspense> */}
        
        <Suspense fallback={<SectionLoading />}>
          <Footer />
        </Suspense>
      </div>
    </AnimatePresence>
  );
};

export default Index;
