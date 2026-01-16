import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

/**
 * Hero Card Component
 * PURPOSE: Clearly separated info card for hero section
 * MOBILE: Full-width card at bottom with clear separation
 * DESKTOP: Right-aligned card with original design
 */

interface HeroCardProps {
  isVisible: boolean;
  isMobile?: boolean;
}

export function HeroCard({ isVisible, isMobile = false }: HeroCardProps) {
  if (isMobile) {
    return (
      <motion.div
        className="w-full"
        initial={{ y: 30, opacity: 0 }}
        animate={isVisible ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: isVisible ? 1.3 : 0 }}
      >
        <div className="bg-gradient-to-br from-purple-600/25 via-purple-700/20 to-blue-600/25 border border-white/25 rounded-2xl p-6 backdrop-blur-lg shadow-2xl">
          {/* Purple accent line */}
          <div className="mb-4">
            <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-purple-400 via-purple-500 to-blue-500 shadow-lg shadow-purple-500/50" />
          </div>

          {/* Heading */}
          <h3 className="text-lg font-bold text-white mb-3 leading-tight">
            AI-powered transformation, enabled by cloud.
          </h3>

          {/* Description */}
          <p className="text-sm text-white/90 leading-relaxed mb-5">
            We integrate ethical, people centered AI into every service and operation using cloud as the foundation to drive transformation, inspire confidence, and deliver lasting value for clients and communities.
          </p>

          {/* CTA Link */}
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-all hover:gap-3 group"
          >
            <span>See what we do</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.div>
    );
  }

  // Desktop version would use the original Container3 design
  return null;
}

/**
 * Mobile Hero Title Component
 * PURPOSE: Stacked title with proper spacing
 */

interface HeroTitleMobileProps {
  isVisible: boolean;
}

export function HeroTitleMobile({ isVisible }: HeroTitleMobileProps) {
  const words = ['Secure.', 'Cloud.', 'Intelligence.'];

  return (
    <div className="space-y-1">
      {words.map((word, index) => (
        <motion.h1
          key={word}
          className="text-[42px] font-bold text-white uppercase leading-none tracking-tight"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
          initial={{ x: -50, opacity: 0 }}
          animate={isVisible ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: isVisible ? 0.2 + index * 0.3 : 0,
          }}
        >
          {word}
        </motion.h1>
      ))}
    </div>
  );
}

/**
 * Hero Section Container
 * PURPOSE: Wrapper to manage title and card layout
 */

interface HeroSectionContainerProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroSectionContainer({ children, className = '' }: HeroSectionContainerProps) {
  return (
    <div className={`flex flex-col justify-between h-full p-4 pb-6 ${className}`}>
      {children}
    </div>
  );
}