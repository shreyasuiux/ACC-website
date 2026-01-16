import React from 'react';
import { Award } from 'lucide-react';
import { motion, useInView } from 'motion/react';

interface AwardCard {
  title: string;
  subtitle: string;
  organization: string;
}

const awards: AwardCard[] = [
  {
    title: 'Excellence Award',
    subtitle: 'Industry Leadership 2025',
    organization: 'Tech Innovation Summit'
  },
  {
    title: 'Innovation Leader',
    subtitle: 'Best AI Platform 2025',
    organization: 'Global Tech Awards'
  },
  {
    title: 'Best Workplace',
    subtitle: 'Top Employer 2025',
    organization: 'Fortune Magazine'
  },
  {
    title: 'Customer Choice',
    subtitle: 'Highest Satisfaction 2025',
    organization: 'Gartner Peer Insights'
  }
];

export function AwardsSection() {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div ref={ref} className="relative shrink-0 w-full max-w-[1103px] mx-auto px-4">
      {/* Heading with fade-in animation */}
      <motion.div 
        className="flex justify-center items-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="font-['Montserrat',sans-serif] font-semibold text-[48px] sm:text-[56px] lg:text-[64px] text-white leading-[1.2] tracking-[-2px]">
          Recognition and awards
        </h2>
      </motion.div>

      {/* Awards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-[900px] mx-auto">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              scale: 1
            } : { 
              opacity: 0, 
              y: 40,
              scale: 0.9
            }}
            transition={{ 
              duration: 0.5,
              delay: index * 0.1,
              ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{ 
              scale: 1.03,
              rotateY: 2,
              rotateX: 2,
              transition: { duration: 0.3 }
            }}
            className="group relative p-8 rounded-[24px] bg-gradient-to-br from-purple-600/90 via-purple-600/80 to-purple-700/90 backdrop-blur-sm hover:from-purple-500/90 hover:via-purple-600/90 hover:to-purple-700/90 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 cursor-pointer overflow-hidden"
            style={{ 
              transformStyle: 'preserve-3d',
              perspective: 1000
            }}
          >
            {/* Animated shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              style={{ skewX: -20 }}
            />

            {/* Trophy Icon with rotation on hover */}
            <div 
              className="mb-6 relative z-10"
            >
              <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Award className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
            </div>

            {/* Award Title */}
            <h3 
              className="font-['Montserrat',sans-serif] font-semibold text-[28px] text-white leading-[1.2] mb-4 relative z-10"
            >
              {award.title}
            </h3>

            {/* Subtitle */}
            <p className="font-['Montserrat',sans-serif] font-medium text-[16px] text-white/90 leading-[1.4] mb-2 relative z-10">
              {award.subtitle}
            </p>

            {/* Organization */}
            <p className="font-['Montserrat',sans-serif] text-[14px] text-white/70 leading-[1.4] relative z-10">
              {award.organization}
            </p>

            {/* Subtle border with glow effect on hover */}
            <motion.div 
              aria-hidden="true" 
              className="absolute inset-0 border border-white/10 rounded-[24px] pointer-events-none"
              whileHover={{ 
                borderColor: 'rgba(255, 255, 255, 0.3)',
                boxShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Gradient orb background animation */}
            <motion.div
              className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-purple-400/20 blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}