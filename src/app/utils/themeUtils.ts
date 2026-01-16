/**
 * Theme Utility Functions
 * Provides helper functions for theme-aware styling
 */

export const getThemeStyles = (isDark: boolean) => ({
  // Backgrounds
  bgPrimary: isDark ? '#0a0a0f' : '#ffffff',
  bgSecondary: isDark ? '#0f0a15' : '#f8f7fa',
  bgTertiary: isDark ? 'rgba(15, 10, 21, 0.8)' : '#fafafa',
  bgFooter: isDark ? '#000000' : '#f3f2f5',
  bgCard: isDark ? 'rgba(15, 10, 21, 0.8)' : '#ffffff',
  
  // Text
  textPrimary: isDark ? '#f0f0f2' : '#1a1a1f',
  textSecondary: isDark ? '#9ca3af' : '#6b7280',
  textTertiary: isDark ? '#6b7280' : '#9ca3af',
  
  // Purple colors
  purplePrimary: isDark ? '#a020f0' : '#8b1fd6',
  purpleLight: isDark ? 'rgb(192, 132, 252)' : '#7c3aed',
  purpleDark: isDark ? 'rgb(168, 85, 247)' : '#6d28d9',
  purpleBg: isDark ? 'rgba(168, 85, 247, 0.1)' : 'rgba(139, 31, 214, 0.08)',
  
  // Borders
  border: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.12)',
  borderSubtle: isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)',
  
  // Shadows
  shadow: isDark ? '0 0 20px rgba(139, 92, 246, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.08)',
  
  // Overlay
  overlay: isDark ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)',
});

export const getThemeClass = (isDark: boolean, darkClass: string, lightClass: string) => {
  return isDark ? darkClass : lightClass;
};
