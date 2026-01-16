/**
 * useScrollPerformance Hook
 * 
 * Optimizes scroll performance on mobile devices by:
 * 1. Adding "scrolling" class during scroll (to disable heavy effects)
 * 2. Throttling scroll events using requestAnimationFrame
 * 3. Preventing pointer events during scroll
 * 
 * Usage: Simply call useScrollPerformance() in your main component
 */

import { useEffect } from 'react';

export function useScrollPerformance() {
  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let ticking = false;

    const handleScrollStart = () => {
      // Add scrolling class to body for CSS optimizations
      document.body.classList.add('scrolling');
    };

    const handleScrollEnd = () => {
      // Remove scrolling class after scroll ends
      document.body.classList.remove('scrolling');
    };

    const handleScroll = () => {
      // Throttle using requestAnimationFrame
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScrollStart();
          ticking = false;
        });
        ticking = true;
      }

      // Clear existing timeout
      clearTimeout(scrollTimeout);

      // Set new timeout to detect scroll end
      scrollTimeout = setTimeout(() => {
        handleScrollEnd();
      }, 150);
    };

    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('touchmove', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
      clearTimeout(scrollTimeout);
      document.body.classList.remove('scrolling');
    };
  }, []);
}

/**
 * useReduceMotionOnMobile Hook
 * 
 * Automatically reduces animation complexity on mobile devices
 * for better performance
 */
export function useReduceMotionOnMobile() {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    const isSlowDevice = navigator.hardwareConcurrency ? navigator.hardwareConcurrency < 4 : false;

    if (isMobile || isSlowDevice) {
      // Add class to reduce motion
      document.documentElement.classList.add('reduce-motion-mobile');
    }

    return () => {
      document.documentElement.classList.remove('reduce-motion-mobile');
    };
  }, []);
}

/**
 * useIntersectionOptimization Hook
 * 
 * Optimizes intersection observer for better performance
 * by using larger margins and reduced frequency
 */
export function useIntersectionOptimization() {
  useEffect(() => {
    // Set CSS variable for intersection observer margin
    document.documentElement.style.setProperty(
      '--intersection-margin',
      '100px' // Load elements 100px before they enter viewport
    );
  }, []);
}
