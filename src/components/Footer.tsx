import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6 border-t border-gray-200">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-6 lg:gap-0">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <a href="/" className="flex items-center">
              <img src="/logowithname.png" alt="Content Finix" className="h-8 w-full" />
            </a>
            <p className="text-gray-600 text-xs sm:text-sm w-[80%] lg:w-full">
              Premium content marketing and video production agency
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
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
  );
};

export default Footer;
