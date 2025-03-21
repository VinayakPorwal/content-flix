
import React, { useState, useEffect, useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { cn } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Quote, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director, TechNova",
    content: "Working with this agency transformed our content strategy completely. Their video production team captured our brand's essence perfectly, and we saw a 45% increase in engagement within just two months.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, GrowthLabs",
    content: "Their strategic approach to content marketing helped us reach our target audience with precision. The quality of their video content is unmatched, and their team's creativity continues to impress us with each project.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Brand Manager, Horizon Retail",
    content: "From concept to execution, their team delivered exceptional content that aligned perfectly with our brand vision. The ROI on our video marketing campaigns has been remarkable, and we're excited to continue our partnership.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      goToNext();
    }, 6000);

    return () => clearInterval(autoSlide);
  }, [currentIndex, isAnimating]);

  return (
    <section id="testimonials" className="section-spacing relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 mb-4 border border-agency-orange/20 shadow-sm">
              <Sparkles className="h-4 w-4 text-agency-orange" />
              <span className="text-agency-dark font-medium text-sm">Testimonials</span>
            </div>
          </AnimatedSection>
          
          <AnimatedSection delay={200}>
            <h2 className="text-agency-dark mb-6">What Our <span className="text-agency-orange">Clients Say</span></h2>
          </AnimatedSection>
          
          <AnimatedSection delay={300}>
            <p className="text-gray-600 text-lg">
              Don't just take our word for it. Here's what our clients have to say about our work and the results we've delivered.
            </p>
          </AnimatedSection>
        </div>
        
        <div ref={testimonialsRef} className="relative max-w-4xl mx-auto px-4">
          <div 
            className="overflow-hidden"
            style={{ minHeight: '360px', marginBottom: '40px' }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute w-full transition-all duration-500 ease-in-out bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-agency-orange/20",
                  index === currentIndex 
                    ? "opacity-100 translate-x-0" 
                    : index < currentIndex 
                      ? "opacity-0 -translate-x-full" 
                      : "opacity-0 translate-x-full"
                )}
              >
                <Quote size={48} className="text-agency-orange/30 mb-6" />
                <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-agency-orange/30"
                  />
                  <div>
                    <h4 className="text-agency-dark font-semibold">{testimonial.name}</h4>
                    <p className="text-agency-orange/70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex items-center gap-3 mt-0 justify-center">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex 
                    ? "bg-agency-orange w-12" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <Button 
            onClick={goToPrev}
            className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-white text-agency-orange hover:bg-gray-100 border border-agency-orange/30"
            aria-label="Previous testimonial"
          >
            <ArrowLeft size={20} />
          </Button>
          
          <Button 
            onClick={goToNext}
            className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 rounded-full w-12 h-12 p-0 bg-white text-agency-orange hover:bg-gray-100 border border-agency-orange/30"
            aria-label="Next testimonial"
          >
            <ArrowRight size={20} />
          </Button>
        </div>
      </div>
      
      {/* Add a white fade effect behind the bottom of the section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
    </section>
  );
};

export default Testimonials;
