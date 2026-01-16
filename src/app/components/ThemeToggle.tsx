import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-[44px] h-[33.5px] rounded-full border flex items-center justify-center transition-all cursor-pointer group"
      style={{
        backgroundColor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.9)',
        borderColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(139,31,214,0.2)',
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-purple-300 group-hover:text-purple-200" strokeWidth={2} />
          ) : (
            <Moon className="w-5 h-5 text-purple-600 group-hover:text-purple-700" strokeWidth={2} />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Glow effect on hover */}
      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
        style={{
          boxShadow: isDark 
            ? '0 0 20px rgba(192, 132, 252, 0.3)' 
            : '0 0 15px rgba(139, 31, 214, 0.2)',
        }}
      />
    </motion.button>
  );
}