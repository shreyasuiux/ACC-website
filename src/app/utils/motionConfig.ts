/**
 * Motion Configuration
 * 
 * Optimized animation configurations for better mobile performance
 */

import { isMobileDevice, isLowEndDevice } from './performanceHelpers';

/**
 * Get optimized animation duration based on device
 */
export function getAnimationDuration(defaultDuration: number = 0.5): number {
  if (isLowEndDevice()) {
    return 0.15; // Very fast on low-end devices
  }
  if (isMobileDevice()) {
    return 0.25; // Fast on mobile
  }
  return defaultDuration; // Normal on desktop
}

/**
 * Get optimized spring configuration
 */
export function getSpringConfig() {
  if (isLowEndDevice() || isMobileDevice()) {
    return {
      type: "tween" as const,
      duration: 0.2,
      ease: "easeOut" as const,
    };
  }
  
  return {
    type: "spring" as const,
    stiffness: 300,
    damping: 30,
  };
}

/**
 * Optimized fade-in animation
 */
export function getFadeInAnimation() {
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: getAnimationDuration(0.5),
      ease: "easeOut",
    },
  };
}

/**
 * Optimized slide-up animation
 */
export function getSlideUpAnimation(distance: number = 20) {
  const duration = getAnimationDuration(0.6);
  
  return {
    initial: { opacity: 0, y: distance },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration,
      ease: "easeOut",
    },
  };
}

/**
 * Optimized scale animation
 */
export function getScaleAnimation(from: number = 0.95, to: number = 1) {
  return {
    initial: { opacity: 0, scale: from },
    animate: { opacity: 1, scale: to },
    transition: {
      duration: getAnimationDuration(0.4),
      ease: "easeOut",
    },
  };
}

/**
 * Viewport animation configuration
 * Optimized for IntersectionObserver
 */
export function getViewportAnimation() {
  return {
    once: true, // Only animate once
    margin: isMobileDevice() ? "0px" : "-100px", // Smaller margin on mobile
    amount: isMobileDevice() ? 0.1 : 0.3, // Less strict on mobile
  };
}

/**
 * Disable animation if prefer-reduced-motion is set
 */
export function shouldReduceMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get transition configuration
 */
export function getTransition(customDuration?: number) {
  if (shouldReduceMotion()) {
    return {
      duration: 0.01,
    };
  }
  
  return {
    duration: getAnimationDuration(customDuration),
    ease: "easeOut" as const,
  };
}

/**
 * Optimized hover animation
 */
export function getHoverAnimation() {
  // Disable hover animations on mobile/touch devices
  if ('ontouchstart' in window) {
    return {};
  }
  
  return {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  };
}

/**
 * Stagger children animation
 */
export function getStaggerConfig(childrenCount: number = 10) {
  const baseStagger = isMobileDevice() ? 0.03 : 0.05;
  const maxStagger = isMobileDevice() ? 0.5 : 1;
  
  return {
    staggerChildren: Math.min(baseStagger, maxStagger / childrenCount),
    delayChildren: 0,
  };
}

/**
 * Scroll-triggered animation configuration
 */
export function getScrollAnimation() {
  return {
    initial: "hidden",
    whileInView: "visible",
    viewport: {
      once: true,
      margin: isMobileDevice() ? "-50px" : "-100px",
      amount: isMobileDevice() ? 0.1 : 0.2,
    },
    variants: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: getAnimationDuration(0.6),
          ease: "easeOut",
        },
      },
    },
  };
}

/**
 * Exit animation configuration
 */
export function getExitAnimation() {
  return {
    exit: {
      opacity: 0,
      transition: {
        duration: getAnimationDuration(0.3),
      },
    },
  };
}
