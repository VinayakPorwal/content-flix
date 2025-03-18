
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

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md shadow-sm py-4 w-[90%] mx-auto rounded-xl mt-2' 
          : 'bg-transparent py-6'
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <a href="#" className="flex items-center">
          <span className="font-bold text-2xl text-white">Content<span className="text-agency-gold">Floww</span></span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#services" className="text-white hover:text-agency-gold transition-colors font-medium">Services</a>
          <a href="#pricing" className="text-white hover:text-agency-gold transition-colors font-medium">Pricing</a>
          <a href="#process" className="text-white hover:text-agency-gold transition-colors font-medium">Process</a>
          <a href="#testimonials" className="text-white hover:text-agency-gold transition-colors font-medium">Testimonials</a>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button size="sm" className="bg-agency-gold hover:bg-agency-gold/90 text-black font-medium">
              Book Call
            </Button>
          </motion.div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "fixed inset-0 z-40 bg-black transform transition-transform duration-300 ease-in-out pt-24 lg:hidden",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-[300px] w-[200px] mx-auto rounded-xl mt-2"
      )}>
        <div className="container flex flex-col space-y-6 p-6">
          <a 
            href="#services" 
            className="text-xl font-medium text-white hover:text-agency-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </a>
          <a 
            href="#pricing" 
            className="text-xl font-medium text-white hover:text-agency-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#process" 
            className="text-xl font-medium text-white hover:text-agency-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Process
          </a>
          <a 
            href="#testimonials" 
            className="text-xl font-medium text-white hover:text-agency-gold transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <Button 
            size="lg" 
            className="w-full bg-agency-gold hover:bg-agency-gold/90 text-black font-medium"
            onClick={() => setMobileMenuOpen(false)}
          >
           Book Call
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
