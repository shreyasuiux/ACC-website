import React from 'react';

/**
 * Layout Wrapper Component
 * PURPOSE: Fix width and centering issues WITHOUT changing visual design
 * 
 * RULES:
 * - Desktop frame: 1440px max-width
 * - Content container: 1200px centered
 * - Preserves all existing visual styles
 */

interface LayoutWrapperProps {
  children: React.ReactNode;
  maxWidth?: '1440px' | '1200px' | 'full';
  className?: string;
}

export function LayoutWrapper({ children, maxWidth = '1440px', className = '' }: LayoutWrapperProps) {
  const widthClass = maxWidth === 'full' ? 'w-full' : `w-full max-w-[${maxWidth}]`;
  
  return (
    <div className={`${widthClass} mx-auto ${className}`}>
      {children}
    </div>
  );
}

/**
 * Content Container
 * 1200px max-width, centered, with responsive padding
 */
export function ContentContainer({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-0 ${className}`}>
      {children}
    </div>
  );
}

/**
 * Section Wrapper
 * Normalizes vertical spacing without changing visual density
 */
export function SectionWrapper({ 
  children, 
  spacing = 'normal',
  className = '' 
}: { 
  children: React.ReactNode; 
  spacing?: 'compact' | 'normal' | 'large';
  className?: string;
}) {
  const spacingClasses = {
    compact: 'py-10 md:py-16',  // 40px mobile, 64px desktop
    normal: 'py-12 md:py-20',   // 48px mobile, 80px desktop  
    large: 'py-16 md:py-24',    // 64px mobile, 96px desktop
  };
  
  return (
    <div className={`${spacingClasses[spacing]} ${className}`}>
      {children}
    </div>
  );
}
