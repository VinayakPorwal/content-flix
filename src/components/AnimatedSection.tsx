
import React, { useEffect, useRef, useState, memo } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-up' | 'fade-in' | 'blur-in' | 'scale-in';
  threshold?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = memo(({
  children,
  className,
  delay = 0,
  animation = 'fade-up',
  threshold = 0.2,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Only create one observer instance
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Clear any existing timeout
            if (timeoutRef.current) {
              clearTimeout(timeoutRef.current);
            }
            
            // Set timeout with the specified delay
            timeoutRef.current = setTimeout(() => {
              setIsVisible(true);
              // Disconnect observer after animation triggered
              if (observerRef.current && sectionRef.current) {
                observerRef.current.unobserve(sectionRef.current);
              }
            }, delay);
          }
        },
        {
          threshold: threshold,
          rootMargin: '0px 0px -100px 0px',
        }
      );
    }

    // Start observing when component mounts
    if (sectionRef.current && observerRef.current) {
      observerRef.current.observe(sectionRef.current);
    }

    // Cleanup function
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (observerRef.current && sectionRef.current) {
        observerRef.current.unobserve(sectionRef.current);
        observerRef.current.disconnect();
      }
    };
  }, [delay, threshold]);

  const animationClass = {
    'fade-up': 'animate-fade-up',
    'fade-in': 'animate-fade-in',
    'blur-in': 'animate-blur-in',
    'scale-in': 'animate-scale-in',
  };

  return (
    <div
      ref={sectionRef}
      className={cn(className, isVisible ? animationClass[animation] : 'opacity-0')}
      style={{ 
        willChange: 'opacity, transform',
        transform: animation === 'fade-up' && !isVisible ? 'translateY(20px)' : undefined
      }}
    >
      {children}
    </div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
