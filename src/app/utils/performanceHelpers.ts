/**
 * Performance Helper Utilities
 * 
 * Collection of utility functions to improve performance
 * without changing UI appearance
 */

/**
 * Debounce function for event handlers
 * Reduces frequency of expensive operations
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function using requestAnimationFrame
 * For scroll and resize handlers
 */
export function throttleRAF<T extends (...args: any[]) => any>(
  func: T
): (...args: Parameters<T>) => void {
  let ticking = false;

  return function executedFunction(...args: Parameters<T>) {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        func(...args);
        ticking = false;
      });
      ticking = true;
    }
  };
}

/**
 * Check if device is mobile
 */
export function isMobileDevice(): boolean {
  return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
}

/**
 * Check if device is low-end
 */
export function isLowEndDevice(): boolean {
  // Check hardware concurrency (CPU cores)
  const cores = navigator.hardwareConcurrency || 2;
  
  // Check device memory (if available)
  const memory = (navigator as any).deviceMemory || 4;
  
  return cores < 4 || memory < 4;
}

/**
 * Preload image for better performance
 */
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Lazy load images using Intersection Observer
 */
export function setupLazyLoading() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const src = img.dataset.src;
            
            if (src) {
              img.src = src;
              img.removeAttribute('data-src');
              observer.unobserve(img);
            }
          }
        });
      },
      {
        rootMargin: '50px', // Load 50px before entering viewport
      }
    );

    // Observe all images with data-src attribute
    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Enable CSS containment for better performance
 */
export function enableCSSContainment(selector: string) {
  const elements = document.querySelectorAll(selector);
  elements.forEach(el => {
    (el as HTMLElement).style.contain = 'layout paint';
  });
}

/**
 * Optimize animations for mobile
 */
export function optimizeAnimations() {
  if (isMobileDevice() || isLowEndDevice()) {
    // Reduce animation duration
    document.documentElement.style.setProperty('--animation-duration', '0.2s');
    
    // Disable complex animations
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 768px) {
        * {
          animation-duration: 0.2s !important;
          transition-duration: 0.2s !important;
        }
      }
    `;
    document.head.appendChild(style);
  }
}

/**
 * Force hardware acceleration on element
 */
export function forceHardwareAcceleration(element: HTMLElement) {
  element.style.transform = 'translateZ(0)';
  element.style.willChange = 'transform';
  element.style.backfaceVisibility = 'hidden';
}

/**
 * Cleanup hardware acceleration
 */
export function cleanupHardwareAcceleration(element: HTMLElement) {
  element.style.willChange = 'auto';
}

/**
 * Batch DOM reads and writes
 */
export class DOMBatcher {
  private readCallbacks: Array<() => void> = [];
  private writeCallbacks: Array<() => void> = [];
  private scheduled = false;

  read(callback: () => void) {
    this.readCallbacks.push(callback);
    this.schedule();
  }

  write(callback: () => void) {
    this.writeCallbacks.push(callback);
    this.schedule();
  }

  private schedule() {
    if (!this.scheduled) {
      this.scheduled = true;
      requestAnimationFrame(() => this.flush());
    }
  }

  private flush() {
    // Execute all reads first
    this.readCallbacks.forEach(cb => cb());
    this.readCallbacks = [];

    // Then execute all writes
    this.writeCallbacks.forEach(cb => cb());
    this.writeCallbacks = [];

    this.scheduled = false;
  }
}

/**
 * Memoization helper for expensive computations
 */
export function memoize<T extends (...args: any[]) => any>(
  func: T
): T {
  const cache = new Map();

  return ((...args: Parameters<T>) => {
    const key = JSON.stringify(args);
    
    if (cache.has(key)) {
      return cache.get(key);
    }

    const result = func(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

/**
 * Monitor performance metrics
 */
export function monitorPerformance() {
  if ('PerformanceObserver' in window) {
    // Monitor long tasks
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.duration > 50) {
          console.warn('Long task detected:', entry.duration, 'ms');
        }
      }
    });

    observer.observe({ entryTypes: ['longtask'] });
  }
}
