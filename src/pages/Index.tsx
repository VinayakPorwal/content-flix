
import React, { lazy, Suspense } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import { AnimatePresence } from 'framer-motion';
// Import Portfolio directly since it's used without lazy loading
import Portfolio from '../components/Portfolio';
import ClientReviews from '@/components/ClientReviews';

// Lazy load components that are not immediately visible
const Services = lazy(() => import('../components/Services'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const CallToAction = lazy(() => import('../components/CallToAction'));
const Footer = lazy(() => import('../components/Footer'));
const ProcessSteps = lazy(() => import('../components/ProcessSteps'));
const WhoThisIsFor = lazy(() => import('../components/WhoThisIsFor'));
const WhyUs = lazy(() => import('@/components/WhyUs'));
const NewServiceSection = lazy(() => import('../components/NewServiceSection'));
const ClientResults = lazy(() => import('../components/ClientResults')); 

// Simple loading component
const SectionLoading = () => (
  <div className="w-full py-8 sm:py-16 flex items-center justify-center">
    <div className="animate-pulse bg-agency-orange/10 h-20 sm:h-32 w-full max-w-xl sm:max-w-3xl rounded-xl"></div>
  </div>
);

const Index = () => {
  return (
    <AnimatePresence mode="wait">
      <div className="min-h-screen bg-[#FBF5F1] relative smooth-scroll">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <defs>
              <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(250 84 33)" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#gridPattern)" />
          </svg>
        </div>
        
        <Navbar />
        <Hero />
        
        <Suspense fallback={<SectionLoading />}>
          <WhoThisIsFor />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <WhyUs />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <NewServiceSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <ProcessSteps />
        </Suspense>
        
        <Suspense fallback={<SectionLoading />}>
          <Portfolio />
        </Suspense>

        <Suspense fallback={<SectionLoading />}>
          <ClientReviews />
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
        
        <Suspense fallback={<SectionLoading />}>
          <Footer />
        </Suspense>
      </div>
    </AnimatePresence>
  );
};

export default Index;
