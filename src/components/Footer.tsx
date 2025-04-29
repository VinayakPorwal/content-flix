
import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-agency-dark mb-3">
              Let's Create Something <span className="text-agency-orange">Amazing</span> Together
            </h2>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-8">
              <a href="tel:+918368607268" className="text-agency-orange hover:text-gray-800 text-base sm:text-lg font-semibold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 8368607268
              </a>
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                <a href="mailto:rashid@contentfinix.com" className="text-agency-orange hover:text-gray-800 text-base sm:text-lg font-semibold flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  rashid@contentfinix.com
                </a>
                <span className="hidden sm:inline text-gray-400">|</span>
                <a href="mailto:rashidmukhtar205@gmail.com" className="text-agency-orange hover:text-gray-800 text-base sm:text-lg font-semibold">
                  rashidmukhtar205@gmail.com
                </a>
              </div>
            </div>
    <footer className="bg-white py-6 border-t border-gray-200">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-4 lg:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <a href="/" className="flex items-center">
              <img src="/logowithname.png" alt="Content Finix" className="h-6 sm:h-8 w-auto" />
            </a>
            <p className="text-gray-600 text-xs sm:text-sm w-full sm:w-[80%] lg:w-full">
              Premium content marketing and video production agency
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 mt-3 sm:mt-0">
            <div className="flex items-center gap-4 sm:gap-6 font-medium underline">
              <a href="/terms-of-use" className="text-gray-500 hover:text-agency-orange text-xs sm:text-sm">Terms</a>
              <a href="/privacy-policy" className="text-gray-500 hover:text-agency-orange text-xs sm:text-sm">Privacy</a>
            </div>
            <p className="text-gray-500 text-xs sm:text-sm font-medium">
              © {new Date().getFullYear()} Content Finix
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};

export default Footer;
