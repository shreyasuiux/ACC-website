import React from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

// Animated particle background component
const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Mesh gradient background
const MeshGradient = () => {
  return (
    <div className="absolute inset-0 opacity-40">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-violet-900/20" />
      <div className="absolute inset-0 bg-gradient-to-tl from-fuchsia-900/10 via-transparent to-purple-900/10" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 30% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  variant?: "gradient" | "dark";
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  highlightText?: string; // Text to highlight with gradient
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  variant = "dark",
  onPrimaryClick,
  onSecondaryClick,
  highlightText,
}: CTASectionProps) {
  const isGradient = variant === "gradient";

  // Split title if highlightText is provided
  const renderTitle = () => {
    if (highlightText && title.includes(highlightText)) {
      const parts = title.split(highlightText);
      return (
        <>
          {parts[0]}
          <span className="bg-gradient-to-r from-[#A855F7] via-[#C026D3] to-[#EC4899] bg-clip-text text-transparent">
            {highlightText}
          </span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <section
      className={`py-[80px] md:py-[120px] relative overflow-hidden ${
        isGradient
          ? "bg-gradient-to-b from-[#1a0f2e] via-[#0f0a1a] to-black"
          : "bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"
      }`}
    >
      {!isGradient && (
        <>
          <ParticleField />
          <MeshGradient />
        </>
      )}

      <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-white mb-6 leading-[1.2]">
            {renderTitle()}
          </h2>
          <p
            className={`font-['Montserrat',sans-serif] text-[15px] md:text-[16px] lg:text-[17px] mb-10 max-w-3xl mx-auto leading-[1.7] ${
              isGradient ? "text-white/90" : "text-[rgba(255,255,255,0.7)]"
            }`}
          >
            {description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={onPrimaryClick}
              className="px-8 md:px-10 py-4 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[15px] hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
            >
              {primaryButtonText}
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
}