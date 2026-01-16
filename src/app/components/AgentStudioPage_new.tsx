import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { 
  Bot, 
  Shield, 
  Zap, 
  Layers, 
  Network, 
  Brain, 
  Lock, 
  Cloud, 
  Server, 
  CheckCircle2, 
  ArrowRight, 
  FileCode, 
  Activity, 
  Database, 
  Eye, 
  Building2, 
  ShoppingCart, 
  Factory, 
  Heart, 
  DollarSign,
  GitBranch,
  Play,
  BookOpen,
  Headphones,
  BarChart3,
  Settings
} from 'lucide-react';
import { Footer } from './Footer';
import { Nav } from '../../imports/Desktop72';
import { Logo } from './Logo';

// Animated Counter Component
function AnimatedCounter({ end, duration = 2, suffix = "", prefix = "" }: { end: number; duration?: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animateCount = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        requestAnimationFrame(animateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animateCount);
  }, [isInView, end, duration]);

  return (
    <div ref={countRef} className="font-['Montserrat:Bold',sans-serif] text-[48px] leading-[1.1] text-white">
      {prefix}{count}{suffix}
    </div>
  );
}

// Floating Particles Background
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

// Section 1: Hero
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-blue-600/10 via-purple-600/5 to-transparent"
          animate={{
            opacity: [0.5, 0.3, 0.5],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <FloatingParticles />

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-32 text-center">
        {/* Logo/Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex mb-8"
        >
          <div className="p-6 rounded-[24px] bg-gradient-to-br from-purple-500 to-blue-500 shadow-[0_0_60px_rgba(168,85,247,0.4)]">
            <Bot className="w-16 h-16 text-white" strokeWidth={1.5} />
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Montserrat:Bold',sans-serif] text-[48px] md:text-[80px] leading-[1.1] text-white mb-6"
        >
          Reimagine Enterprise Intelligence
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            with Agent Studio
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-['Montserrat:Regular',sans-serif] text-[18px] text-white/70 max-w-3xl mx-auto mb-12 leading-[1.6]"
        >
          Build, orchestrate, and scale intelligent AI agents across enterprise workflows with security and control.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 justify-center mb-16 md:mb-20"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-white text-white font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] hover:bg-white/10 transition-all duration-300"
          >
            Schedule Demo
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto px-4"
        >
          {[
            { value: 500, suffix: "+", label: "AI Agents Built" },
            { value: 99.9, suffix: "%", label: "Reliability" },
            { value: 0, label: "Zero-Trust Security" },
            { value: 100, suffix: "%", label: "Multi-Cloud Ready" },
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 + (index * 0.1) }}
            >
              <div className="font-['Montserrat',sans-serif] font-bold text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] text-white mb-2">
                {stat.value === 0 ? "0" : stat.value}{stat.suffix || ""}
              </div>
              <p className="font-['Montserrat',sans-serif] text-[12px] md:text-[13px] text-white/60 leading-[1.4]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}

// ... (keeping all other sections the same, only replacing ImplementationRoadmap)

// Section 7: Implementation Roadmap - Futuristic Design
function ImplementationRoadmap() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const stages = [
    {
      name: "Foundation",
      phase: "Weeks 1-4",
      tasks: ["Platform setup", "Team onboarding", "Initial configuration", "Security hardening"],
      color: "from-purple-500 to-purple-600",
    },
    {
      name: "Integration",
      phase: "Weeks 5-8",
      tasks: ["System connections", "Data pipeline setup", "Tool integration", "Testing & validation"],
      color: "from-purple-400 to-blue-500",
    },
    {
      name: "Production",
      phase: "Weeks 9-12",
      tasks: ["Agent deployment", "Monitoring setup", "Performance tuning", "Go-live support"],
      color: "from-blue-500 to-cyan-400",
    },
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      {/* Futuristic Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6 backdrop-blur-sm"
          >
            <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="font-['Montserrat:Bold',sans-serif] text-[12px] text-purple-300 uppercase tracking-wider">
              12-Week Journey
            </span>
          </motion.div>
          
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[40px] md:text-[56px] text-white mb-4 leading-[1.1]">
            Implementation Roadmap
          </h2>
          <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/60 max-w-2xl mx-auto">
            Your transformation timeline from planning to production
          </p>
        </motion.div>

        {/* Desktop: Diagonal Stepped Layout with Energy Lines */}
        <div className="hidden lg:block relative">
          <div className="relative max-w-6xl mx-auto">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -100, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                onMouseEnter={() => setActiveStage(index)}
                onMouseLeave={() => setActiveStage(null)}
                className="relative mb-16 last:mb-0"
                style={{
                  marginLeft: `${index * 120}px`,
                }}
              >
                {/* Connecting Energy Line to Next Stage */}
                {index < stages.length - 1 && (
                  <div className="absolute left-1/2 top-full w-0.5 h-16 overflow-hidden">
                    <motion.div
                      className={`w-full h-full bg-gradient-to-b ${stage.color}`}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                      style={{ transformOrigin: "top" }}
                    />
                    
                    {/* Energy Pulse */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-purple-400 to-transparent"
                      animate={{ y: [0, 64, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                  </div>
                )}

                <div className="flex items-start gap-8">
                  {/* Hexagonal Node */}
                  <motion.div
                    className="relative flex-shrink-0"
                    whileInView={{ scale: [0, 1.2, 1], rotate: [0, 180, 0] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                  >
                    <div className="relative w-24 h-24">
                      {/* Hexagon Background */}
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <linearGradient id={`hex-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor={index === 0 ? "#a855f7" : index === 1 ? "#8b5cf6" : "#3b82f6"} />
                            <stop offset="100%" stopColor={index === 0 ? "#8b5cf6" : index === 1 ? "#3b82f6" : "#06b6d4"} />
                          </linearGradient>
                        </defs>
                        <polygon
                          points="50 1 95 25 95 75 50 99 5 75 5 25"
                          fill={`url(#hex-gradient-${index})`}
                          stroke={activeStage === index ? "#ffffff" : "#a855f7"}
                          strokeWidth="2"
                          className="transition-all duration-500"
                        />
                      </svg>

                      {/* Stage Number */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-['Montserrat:Bold',sans-serif] text-[28px] text-white">
                          {index + 1}
                        </span>
                      </div>

                      {/* Glowing Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${stage.color} opacity-40 blur-xl`}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.4, 0.6, 0.4],
                        }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />

                      {/* Orbiting Particles */}
                      {[0, 120, 240].map((angle, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white rounded-full"
                          style={{
                            left: '50%',
                            top: '50%',
                          }}
                          animate={{
                            x: [
                              Math.cos((angle * Math.PI) / 180) * 50,
                              Math.cos(((angle + 360) * Math.PI) / 180) * 50,
                            ],
                            y: [
                              Math.sin((angle * Math.PI) / 180) * 50,
                              Math.sin(((angle + 360) * Math.PI) / 180) * 50,
                            ],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "linear",
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                  </motion.div>

                  {/* Glass Morphism Card */}
                  <motion.div
                    className={`relative flex-1 p-8 rounded-[24px] backdrop-blur-xl border-2 transition-all duration-500 ${
                      activeStage === index
                        ? 'border-white/40 bg-white/10 shadow-[0_0_40px_rgba(168,85,247,0.3)]'
                        : 'border-white/10 bg-white/5'
                    }`}
                    whileHover={{ 
                      scale: 1.02, 
                      y: -8,
                      rotateY: 5,
                    }}
                    style={{
                      perspective: '1000px',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Holographic Shine Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-[24px] overflow-hidden opacity-0"
                      animate={{ opacity: activeStage === index ? 0.3 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className={`w-full h-full bg-gradient-to-r ${stage.color} opacity-30`}
                        animate={{
                          x: ['-100%', '100%'],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-purple-400 rounded-tl-[24px]" />
                    <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-purple-400 rounded-br-[24px]" />

                    <div className="relative z-10">
                      {/* Phase Badge */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${stage.color} bg-opacity-20 backdrop-blur-sm border border-white/20`}>
                          <span className="font-['Montserrat:Bold',sans-serif] text-[12px] text-white uppercase tracking-wider">
                            {stage.phase}
                          </span>
                        </div>
                        <motion.div
                          className="flex gap-1"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                        >
                          {[...Array(3)].map((_, i) => (
                            <motion.div
                              key={i}
                              className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${stage.color}`}
                              animate={{
                                opacity: [0.3, 1, 0.3],
                              }}
                              transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </motion.div>
                      </div>

                      {/* Stage Name */}
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[32px] text-white mb-6 leading-[1.2]">
                        {stage.name}
                      </h3>

                      {/* Tasks with Scan Line Effect */}
                      <div className="space-y-3 relative">
                        {stage.tasks.map((task, taskIndex) => (
                          <motion.div
                            key={taskIndex}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.3 + taskIndex * 0.1 }}
                            className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:border-purple-400/50 hover:bg-white/10 transition-all duration-300"
                          >
                            <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center flex-shrink-0`}>
                              <div className="w-2 h-2 bg-white rounded-full" />
                            </div>
                            <span className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/80 leading-[1.6]">
                              {task}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar at Bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 rounded-b-[24px] overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${stage.color}`}
                        initial={{ width: "0%" }}
                        animate={{ width: activeStage === index ? "100%" : "0%" }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: Vertical with Hexagonal Nodes */}
        <div className="lg:hidden relative max-w-2xl mx-auto">
          {/* Vertical Energy Line */}
          <div className="absolute left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400 opacity-30" />
          
          <motion.div
            className="absolute left-12 top-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-400"
            initial={{ height: "0%" }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 2 }}
          />

          <div className="space-y-12">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-32"
              >
                {/* Hexagonal Node */}
                <motion.div
                  className="absolute left-0 top-4"
                  whileInView={{ scale: [0, 1.2, 1], rotate: [0, 180, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                >
                  <div className="relative w-20 h-20">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <linearGradient id={`hex-mobile-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={index === 0 ? "#a855f7" : index === 1 ? "#8b5cf6" : "#3b82f6"} />
                          <stop offset="100%" stopColor={index === 0 ? "#8b5cf6" : index === 1 ? "#3b82f6" : "#06b6d4"} />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="50 1 95 25 95 75 50 99 5 75 5 25"
                        fill={`url(#hex-mobile-${index})`}
                        stroke="#a855f7"
                        strokeWidth="2"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-['Montserrat:Bold',sans-serif] text-[20px] text-white">
                        {index + 1}
                      </span>
                    </div>
                    <motion.div
                      className={`absolute inset-0 rounded-full bg-gradient-to-r ${stage.color} opacity-40 blur-xl`}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.4, 0.6, 0.4],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                </motion.div>

                {/* Energy Connector */}
                <div className="absolute left-20 top-[52px] w-12 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />

                {/* Glass Card */}
                <motion.div
                  className="relative p-6 rounded-[20px] backdrop-blur-xl bg-white/5 border-2 border-white/10"
                  whileInView={{ scale: [0.9, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {/* Corner Accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-purple-400 rounded-tl-[20px]" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-purple-400 rounded-br-[20px]" />

                  <div className="relative z-10">
                    {/* Phase Badge */}
                    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r ${stage.color} bg-opacity-20 border border-white/20 mb-3`}>
                      <span className="font-['Montserrat:Bold',sans-serif] text-[11px] text-white uppercase tracking-wider">
                        {stage.phase}
                      </span>
                    </div>

                    {/* Stage Name */}
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-white mb-4">
                      {stage.name}
                    </h3>

                    {/* Tasks */}
                    <div className="space-y-2.5">
                      {stage.tasks.map((task, taskIndex) => (
                        <motion.div
                          key={taskIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + taskIndex * 0.1 }}
                          className="flex items-start gap-2.5 p-2 rounded-lg bg-white/5 border border-white/10"
                        >
                          <div className={`mt-0.5 w-4 h-4 rounded-full bg-gradient-to-r ${stage.color} flex items-center justify-center flex-shrink-0`}>
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                          </div>
                          <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/80 leading-[1.6]">
                            {task}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/5 rounded-b-[20px] overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${stage.color}`}
                      initial={{ width: "0%" }}
                      whileInView={{ width: "100%" }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Export placeholder - actual implementation continues in original file
export { ImplementationRoadmap };
