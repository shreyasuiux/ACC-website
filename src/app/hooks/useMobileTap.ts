import { useState, useCallback, useEffect } from 'react';

/**
 * useMobileTap Hook
 * 
 * Converts hover interactions to tap/click interactions on mobile devices.
 * Provides a tap-active class that can be toggled on tap for persistent states.
 * 
 * Usage:
 * const { isTapped, handleTap, tapProps } = useMobileTap();
 * 
 * <div {...tapProps} className={`group ${isTapped ? 'tap-active' : ''}`}>
 *   Content with hover effects
 * </div>
 */

interface UseMobileTapOptions {
  /**
   * Duration to keep tap-active state (ms)
   * Default: 2000 (2 seconds)
   * Set to 0 for toggle behavior (tap to activate, tap again to deactivate)
   */
  duration?: number;
  
  /**
   * Whether to use toggle behavior instead of timer
   * Default: false
   */
  toggle?: boolean;
  
  /**
   * Callback when tap state changes
   */
  onTapChange?: (isTapped: boolean) => void;
}

export function useMobileTap(options: UseMobileTapOptions = {}) {
  const { duration = 2000, toggle = false, onTapChange } = options;
  const [isTapped, setIsTapped] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle tap/click
  const handleTap = useCallback(() => {
    if (!isMobile) return; // Only on mobile
    
    if (toggle) {
      // Toggle behavior
      setIsTapped(prev => {
        const newState = !prev;
        onTapChange?.(newState);
        return newState;
      });
    } else {
      // Timer behavior
      setIsTapped(true);
      onTapChange?.(true);
      
      if (duration > 0) {
        setTimeout(() => {
          setIsTapped(false);
          onTapChange?.(false);
        }, duration);
      }
    }
  }, [isMobile, toggle, duration, onTapChange]);

  // Props to spread onto element
  const tapProps = {
    onClick: handleTap,
    onTouchStart: handleTap,
  };

  return {
    isTapped,
    isMobile,
    handleTap,
    tapProps,
    setIsTapped,
  };
}

/**
 * useMobileTapGroup Hook
 * 
 * Manages tap state for a group of items where only one can be active at a time.
 * Perfect for card grids, tabs, or any exclusive selection scenario.
 * 
 * Usage:
 * const { tappedIndex, getTapProps } = useMobileTapGroup();
 * 
 * items.map((item, index) => (
 *   <div 
 *     {...getTapProps(index)} 
 *     className={tappedIndex === index ? 'tap-active' : ''}
 *   >
 *     {item.content}
 *   </div>
 * ))
 */

interface UseMobileTapGroupOptions {
  /**
   * Initial tapped index
   */
  initialIndex?: number | null;
  
  /**
   * Duration to keep item tapped (ms)
   * Default: 2000
   * Set to 0 for persistent until another item is tapped
   */
  duration?: number;
  
  /**
   * Callback when tapped item changes
   */
  onTapChange?: (index: number | null) => void;
}

export function useMobileTapGroup(options: UseMobileTapGroupOptions = {}) {
  const { initialIndex = null, duration = 2000, onTapChange } = options;
  const [tappedIndex, setTappedIndex] = useState<number | null>(initialIndex);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle tap for specific index
  const handleTapIndex = useCallback((index: number) => {
    if (!isMobile) return; // Only on mobile
    
    // If same index is tapped, untap it
    if (tappedIndex === index && duration === 0) {
      setTappedIndex(null);
      onTapChange?.(null);
      return;
    }
    
    setTappedIndex(index);
    onTapChange?.(index);
    
    // Auto-untap after duration
    if (duration > 0) {
      setTimeout(() => {
        setTappedIndex(null);
        onTapChange?.(null);
      }, duration);
    }
  }, [isMobile, tappedIndex, duration, onTapChange]);

  // Get tap props for a specific index
  const getTapProps = useCallback((index: number) => ({
    onClick: () => handleTapIndex(index),
    onTouchStart: () => handleTapIndex(index),
  }), [handleTapIndex]);

  return {
    tappedIndex,
    isMobile,
    setTappedIndex,
    getTapProps,
  };
}

/**
 * Helper function to check if device is mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768;
}

/**
 * Helper function to add mobile tap class
 */
export function getMobileTapClass(isTapped: boolean, baseClass: string = ''): string {
  return `${baseClass} ${isTapped ? 'tap-active' : ''}`.trim();
}
