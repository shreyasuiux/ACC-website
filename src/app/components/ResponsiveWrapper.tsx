import React from 'react';

/**
 * Responsive Wrapper Component
 * PURPOSE: Fix mobile responsiveness WITHOUT changing desktop visual design
 * 
 * RULES:
 * - Preserves desktop layout exactly as-is
 * - Converts to stacked mobile layout
 * - No visual design changes
 * - No color/typography changes
 */

interface ResponsiveWrapperProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Responsive Grid Wrapper
 * Desktop: Preserves absolute positioning
 * Mobile: Converts to stacked flex layout
 */
export function ResponsiveGrid({ children, className = '' }: ResponsiveWrapperProps) {
  return (
    <>
      {/* Desktop: Original layout */}
      <div className={`hidden md:block ${className}`}>
        {children}
      </div>
      
      {/* Mobile: Stacked layout */}
      <div className="md:hidden flex flex-col gap-6 px-4">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return (
              <div className="relative w-full">
                {React.cloneElement(child as React.ReactElement<any>, {
                  className: `${(child as any).props.className || ''} !relative !left-auto !top-auto !w-full !ml-0 !mt-0`,
                })}
              </div>
            );
          }
          return child;
        })}
      </div>
    </>
  );
}

/**
 * Responsive Text Wrapper
 * Removes nowrap on mobile to prevent overflow
 */
export function ResponsiveText({ children, className = '' }: ResponsiveWrapperProps) {
  return (
    <div className={`md:text-nowrap ${className}`}>
      {children}
    </div>
  );
}

/**
 * Responsive Button Wrapper
 * Full-width on mobile, preserves size on desktop
 */
export function ResponsiveButton({ children, className = '' }: ResponsiveWrapperProps) {
  return (
    <div className={`w-full md:w-auto ${className}`}>
      {children}
    </div>
  );
}
