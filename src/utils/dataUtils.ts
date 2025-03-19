
import React from 'react';
import { Calendar, BarChart3, Users, Briefcase, Youtube, Instagram, Target, ArrowRight, Play } from 'lucide-react';

/**
 * Get the icon component based on the icon name
 */
export const getIconComponent = (iconName: string, className = "w-full h-full") => {
  switch (iconName) {
    case 'Calendar':
      return <Calendar className={className} />;
    case 'BarChart3':
      return <BarChart3 className={className} />;
    case 'Users':
      return <Users className={className} />;
    case 'Briefcase':
      return <Briefcase className={className} />;
    case 'Youtube':
      return <Youtube className={className} />;
    case 'Instagram':
      return <Instagram className={className} />;
    case 'Target':
      return <Target className={className} />;
    case 'ArrowRight':
      return <ArrowRight className={className} />;
    case 'Play':
      return <Play className={className} />;
    default:
      return null;
  }
};

/**
 * Parse rich text from data that may contain HTML
 * Use with dangerouslySetInnerHTML
 */
export const parseRichText = (text: string) => {
  if (!text) return '';
  return text;
};

/**
 * Get the current year (for copyright notices)
 */
export const getCurrentYear = () => {
  return new Date().getFullYear();
};

/**
 * Replace placeholders in a string
 * e.g. replacePlaceholders("Copyright {year}", { year: 2023 })
 */
export const replacePlaceholders = (text: string, replacements: Record<string, any>) => {
  return Object.entries(replacements).reduce((result, [key, value]) => {
    return result.replace(new RegExp(`{${key}}`, 'g'), value.toString());
  }, text);
};
