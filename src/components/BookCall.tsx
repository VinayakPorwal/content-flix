import React from 'react';
import { InlineWidget } from 'react-calendly';
import { motion } from 'framer-motion';

const BookCall: React.FC = () => {
  return (
    <div className="h-screen bg-[#FBF5F1] relative smooth-scroll">
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
      <div className="absolute inset-0 flex items-center justify-center z-[1] pointer-events-none overflow-hidden">
        <h1 className="text-[15vw] font-bold text-agency-orange/10 select-none whitespace-nowrap">
          CONTENT FINIX
        </h1>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo Section */}
      
          <img  
            src="/logowithname.png" // Replace with your actual logo path
            alt="Content Flix Logo"
            className="h-12 w-auto absolute left-1/2 hidden md:block top-4 -translate-x-1/2 mx-auto"
          />
       

        {/* Calendly Widget */}
        
          <InlineWidget
            url="https://calendly.com/rashidmukhtar205/discoverycall"
            styles={{
              height: '700px',
              width: '100%',
              padding: '0',
            }}
            pageSettings={{
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: 'rgb(250 84 33)',
              textColor: '#1a1a1a',
              backgroundColor: '#ffffff',
              hideGdprBanner: true,
            }}
          />
        
      </div>
    </div>
  );
};

export default BookCall;
