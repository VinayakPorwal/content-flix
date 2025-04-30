import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BookCall: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let script: HTMLScriptElement | null = null;
    let timeoutId: NodeJS.Timeout;

    const initializeCalendly = () => {
      const calendlyContainer = document.getElementById('calendly-container');
      if (calendlyContainer && window.Calendly) {
        calendlyContainer.innerHTML = '';
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/rashidmukhtar205/discoverycall',
          parentElement: calendlyContainer,
          prefill: {},
          utm: {}
        });
        setIsLoading(false);
      }
    };

    // Create and append Calendly script
    script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      // Give some time for the Calendly object to be fully initialized
      timeoutId = setTimeout(initializeCalendly, 1000);
    };
    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (script && document.body.contains(script)) {
        document.body.removeChild(script);
      }
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#FBF5F1] relative smooth-scroll overflow-hidden">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="fixed top-4 left-4 z-20 flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-shadow border border-agency-orange/20"
      >
        <ArrowLeft className="w-5 h-5 text-agency-orange" />
        <span className="text-agency-dark">Back</span>
      </button>

      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(250 84 33)" strokeWidth="0.5" />
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

      <div className="relative z-10 flex flex-col items-center w-full h-full">
        <div className="absolute top-1/2 text-center left-1/2 -translate-x-1/2 bg-white/90 px-4 py-2 rounded-lg shadow-sm text-sm text-agency-dark z-10">
          <div className="animate-spin rounded-full h-5 w-5 border-2 border-agency-orange border-t-transparent mr-2 inline-block align-middle" />
          <p className="text-agency-dark mt-2">Widget is loading, please wait...</p>
        </div>
        {/* Logo Section */}
        <img
          src="/logowithname.png"
          alt="Content Flix Logo"
          className="h-12 w-auto fixed left-1/2 hidden md:block top-4 -translate-x-1/2 mx-auto z-20"
        />

        {/* Custom Calendly Container */}
        <div className="w-full h-screen pt-16 px-4 md:p-0">
          <div
            id="calendly-container"
            className="w-full h-full bg-transparent md:bg-transparent rounded-2xl md:rounded-none overflow-hidden z-50 relative"
            style={{
              minWidth: '290px',
              zIndex: 100,
              height: '100vh'
            }}
          />


        </div>
      </div>
    </div>
  );
};

export default BookCall;
