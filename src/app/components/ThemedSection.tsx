import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface ThemedSectionProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Wrapper component that applies theme-aware background and text colors
 */
export function ThemedSection({ children, className = '', style = {} }: ThemedSectionProps) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const themeStyles: React.CSSProperties = {
    backgroundColor: isDark ? 'transparent' : 'var(--theme-bg-primary)',
    color: isDark ? '#ffffff' : 'var(--theme-text-primary)',
    ...style,
  };

  return (
    <div className={className} style={themeStyles}>
      {children}
    </div>
  );
}

/**
 * Hook to get theme-aware text colors for inline styles
 */
export function useThemeColors() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return {
    isDark,
    textPrimary: isDark ? '#ffffff' : '#1a1a1f',
    textSecondary: isDark ? 'rgba(255, 255, 255, 0.6)' : 'rgba(26, 26, 31, 0.7)',
    textTertiary: isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(26, 26, 31, 0.5)',
    bgPrimary: isDark ? '#0a0a0f' : '#ffffff',
    bgSecondary: isDark ? '#0f0a15' : '#f8f7fa',
    border: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.12)',
  };
}
