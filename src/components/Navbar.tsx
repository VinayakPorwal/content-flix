import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBookCall = () => {
    document.getElementById('calendly-container')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-transparent lg:bg-white/60 lg:backdrop-blur-md lg:shadow-sm py-4 lg:w-[85%] mx-auto rounded-xl mt-2' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo - visible on both mobile and desktop */}
        <a href="#" className="flex items-center">
          <span className="font-bold text-2xl text-agency-dark">
            <img src="/logo.png" alt="Content Finix" className="h-8 lg:h-12" />
          </span>
          <span className="ml-2 text-agency-dark text-xl lg:text-2xl font-semibold hidden sm:block">
            Content<span className="text-agency-orange">Finix</span> 
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-agency-dark hover:text-agency-orange transition-colors font-medium">Services</a>
          <a href="#process" className="text-agency-dark hover:text-agency-orange transition-colors font-medium">Process</a>
          <a href="#results" className="text-agency-dark hover:text-agency-orange transition-colors font-medium">Results</a>
          <a href="#testimonials" className="text-agency-dark hover:text-agency-orange transition-colors font-medium">Testimonials</a>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="sm" className="relative bg-agency-orange hover:bg-agency-orange/90 text-white font-medium"
            onClick={handleBookCall}
            >
              Book Call
              <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
                1
              </div>
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-agency-dark p-2 backdrop-blur-md bg-white/60 rounded-full"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-50 bg-white/95 backdrop-blur-sm transform transition-all duration-300 ease-in-out pt-20 lg:hidden",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="container flex flex-col space-y-8 p-6">
          {/* Close button in top right corner */}
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-agency-dark p-2"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          
          <a 
            href="#services" 
            className="text-2xl font-semibold text-agency-dark hover:text-agency-orange transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#process" 
            className="text-2xl font-semibold text-agency-dark hover:text-agency-orange transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Process
          </a>
          <a 
            href="#results" 
            className="text-2xl font-semibold text-agency-dark hover:text-agency-orange transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Results
          </a>
          <a 
            href="#testimonials" 
            className="text-2xl font-semibold text-agency-dark hover:text-agency-orange transition-colors py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <div className="relative mt-4">
            <Button 
              size="lg" 
              className="w-full bg-agency-orange hover:bg-agency-orange/90 text-white font-medium py-6 text-lg"
              onClick={() => {
                setMobileMenuOpen(false);
                window.open('https://calendly.com/rashidmukhtar205/discoverycall', '_blank');
              }}
            >
              Book Call
            </Button>
            <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              1
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
