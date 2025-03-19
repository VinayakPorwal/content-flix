
import React from 'react';
import { Calendar, BarChart3, Users, Briefcase, Youtube, Instagram, Target, ArrowRight, Play } from 'lucide-react';

/**
 * Get the icon component based on the icon name
 */
export const getIconComponent = (iconName: string, className = "w-full h-full") => {
  switch (iconName) {
    case 'Calendar':
      return React.createElement(Calendar, { className });
    case 'BarChart3':
      return React.createElement(BarChart3, { className });
    case 'Users':
      return React.createElement(Users, { className });
    case 'Briefcase':
      return React.createElement(Briefcase, { className });
    case 'Youtube':
      return React.createElement(Youtube, { className });
    case 'Instagram':
      return React.createElement(Instagram, { className });
    case 'Target':
      return React.createElement(Target, { className });
    case 'ArrowRight':
      return React.createElement(ArrowRight, { className });
    case 'Play':
      return React.createElement(Play, { className });
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
