import React from "react";
import { motion } from "motion/react";
import { ArrowRight, LucideIcon } from "lucide-react";

interface GradientCTAButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  icon?: LucideIcon;
  showArrow?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function GradientCTAButton({ 
  children, 
  onClick, 
  icon: Icon,
  showArrow = true,
  className = "",
  size = "lg"
}: GradientCTAButtonProps) {
  
  const sizeClasses = {
    sm: "px-6 py-3 text-[13px]",
    md: "px-8 py-4 text-[14px]",
    lg: "px-10 py-5 text-[15px]"
  };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
      whileTap={{ scale: 0.95 }}
      className={`group ${sizeClasses[size]} bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${className}`}
    >
      {Icon && <Icon className="w-5 h-5" />}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
      )}
    </motion.button>
  );
}