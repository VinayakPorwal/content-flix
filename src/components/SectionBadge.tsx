
import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionBadgeProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

const SectionBadge: React.FC<SectionBadgeProps> = ({ 
  text, 
  icon = <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-agency-orange" />,
  className = ""
}) => {
  return (
    <div className={`inline-flex items-center gap-2 rounded-full bg-white/90 shadow-sm px-3 py-1.5 sm:px-5 sm:py-2 mb-4 border border-agency-gold/20 ${className}`}>
      {icon}
      <span className="text-agency-dark font-medium text-xs sm:text-sm">{text}</span>
    </div>
  );
};

export default SectionBadge;
