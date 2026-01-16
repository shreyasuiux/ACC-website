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
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';
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
function HeroSection({ onGetStartedClick }: { onGetStartedClick?: () => void }) {
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

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex justify-center mb-16 md:mb-20"
        >
          <motion.button
            onClick={onGetStartedClick}
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-6 md:px-8 py-3 md:py-4 rounded-full bg-white text-black font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] overflow-hidden transition-all duration-300"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Platform
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
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

// Section 2: Why Agent Studio
function WhyAgentStudio() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [tappedCard, setTappedCard] = useState<number | null>(null);

  const cards = [
    {
      icon: Layers,
      title: "Unified AI Control Plane",
      description: "Centralized orchestration for all your AI agents with single-pane-of-glass visibility and management.",
      category: "ORCHESTRATION",
      image: "https://images.unsplash.com/photo-1706006996181-97c3feac30d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMG9yY2hlc3RyYXRpb24lMjBjb250cm9sJTIwc3lzdGVtfGVufDF8fHx8MTY4MjA0NzE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Zero-trust architecture with end-to-end encryption, role-based access, and compliance-ready frameworks.",
      category: "SECURITY",
      image: "https://images.unsplash.com/photo-1722405375190-8d0b2a765840?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc2VjdXJpdHklMjBuZXR3b3JrfGVufDF8fHx8MTc2ODIwOTYxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      icon: Zap,
      title: "Production-Ready Scale",
      description: "Auto-scaling infrastructure that handles millions of agent interactions with guaranteed uptime.",
      category: "SCALABILITY",
      image: "https://images.unsplash.com/photo-1730382624709-81e52dd294d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMHByb2dyZXNzJTIwY2hhcnR8ZW58MXx8fHwxNjgyMDkzNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  // Handle mobile tap - toggle card
  const handleCardTap = (index: number) => {
    setTappedCard(tappedCard === index ? null : index);
  };

  return (
    <section className="relative py-32 bg-black">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[48px] text-white mb-4">
            Why Agent Studio
          </h2>
          <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/60 max-w-2xl mx-auto">
            The enterprise platform built for AI-first organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isHovered = hoveredCard === index;
            const isTapped = tappedCard === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                onTap={() => handleCardTap(index)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl h-[500px] md:h-[400px]"
              >
                {/* Background Image with zoom and blur on hover */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img 
                    src={card.image} 
                    alt={card.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                </div>

                {/* Purple overlay */}
                <div className="absolute inset-0 bg-purple-900 opacity-30" />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(-47.516deg, rgba(0, 0, 0, 0) 1.7008%, rgba(2, 1, 3, 0.6) 52.798%)" }} />

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Category badge at top left */}
                  <div className="flex justify-start">
                    <span className="px-3 py-1.5 bg-purple-500/90 rounded-full font-['Montserrat',sans-serif] text-[10px] font-semibold tracking-[0.12em] uppercase text-white backdrop-blur-sm">
                      {card.category}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div>
                    <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] text-white mb-3 leading-[1.3]">
                      {card.title}
                    </h3>

                    {/* Description slides in from left */}
                    <motion.div
                      initial={{ x: -320, opacity: 0 }}
                      animate={isHovered || isTapped ? { x: 0, opacity: 1 } : { x: -320, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                      <p className="font-['Montserrat',sans-serif] text-[14px] text-gray-300 leading-[1.6]">
                        {card.description}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Section 3: Core Platform Highlights
function CorePlatformHighlights() {
  const capabilities = [
    {
      icon: Network,
      title: "AI Agent Orchestration",
      items: [
        "Multi-agent coordination",
        "Dynamic task routing",
        "Context sharing & memory",
        "Real-time collaboration",
      ],
    },
    {
      icon: Brain,
      title: "Multi-Model & Tool Support",
      items: [
        "GPT-4, Claude, Gemini support",
        "Custom model integration",
        "Tool library ecosystem",
        "RAG & vector databases",
      ],
    },
    {
      icon: GitBranch,
      title: "Workflow Automation",
      items: [
        "Visual workflow builder",
        "Conditional logic & branching",
        "Error handling & retry",
        "Scheduled executions",
      ],
    },
    {
      icon: Layers,
      title: "Enterprise Integrations",
      items: [
        "CRM & ERP connectors",
        "API & webhook support",
        "Database connectivity",
        "Cloud storage integration",
      ],
    },
    {
      icon: Eye,
      title: "Observability & Governance",
      items: [
        "Real-time monitoring",
        "Audit logs & compliance",
        "Cost tracking & optimization",
        "Performance analytics",
      ],
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[48px] text-white mb-4">
            Core Platform Highlights
          </h2>
          <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/60 max-w-2xl mx-auto">
            Everything you need to build production-grade AI agents
          </p>
        </motion.div>

        <div className="space-y-6">
          {capabilities.map((capability, capIndex) => (
            <motion.div
              key={capIndex}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: capIndex * 0.1 }}
              className="relative p-8 rounded-[24px] bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-500 group"
            >
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Left: Icon + Title */}
                <div className="flex items-center gap-4 md:w-1/3">
                  <div className="p-3 rounded-[12px] bg-gradient-to-br from-purple-500 to-blue-500 group-hover:scale-110 transition-transform duration-300">
                    <capability.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] text-white">
                    {capability.title}
                  </h3>
                </div>

                {/* Right: Animated Checklist */}
                <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {capability.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.5 }}
                      transition={{ duration: 0.4, delay: capIndex * 0.1 + itemIndex * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/70">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Progress indicator */}
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1, delay: capIndex * 0.1 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 4: Agent Studio Architecture
function ArchitectureSection() {
  const [hoveredLayer, setHoveredLayer] = useState<number | null>(null);

  const layers = [
    {
      name: "User Interface Layer",
      color: "from-purple-500 to-purple-600",
      components: ["Web Console", "API Gateway", "CLI Tools"],
    },
    {
      name: "Orchestration Layer",
      color: "from-purple-500 to-purple-600",
      components: ["Agent Manager", "Task Scheduler", "State Machine"],
    },
    {
      name: "Knowledge & Context Layer",
      color: "from-purple-500 to-purple-600",
      components: ["Vector DB", "Knowledge Base", "Memory Store"],
    },
    {
      name: "Integration & Tools Layer",
      color: "from-purple-500 to-purple-600",
      components: ["API Connectors", "Tool Registry", "Data Sources"],
    },
    {
      name: "Governance & Security Layer",
      color: "from-purple-500 to-purple-600",
      components: ["Auth & RBAC", "Audit Logs", "Compliance"],
    },
    {
      name: "Infrastructure & Runtime Layer",
      color: "from-purple-500 to-purple-600",
      components: ["Container Runtime", "Auto-Scaling", "Load Balancer"],
    },
  ];

  return (
    <section className="relative py-32 bg-black">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[48px] text-white mb-4">
            Agent Studio Architecture
          </h2>
          <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/60 max-w-2xl mx-auto">
            Enterprise-grade layered architecture for maximum flexibility and security
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Layers */}
          <div className="space-y-4">
            {layers.map((layer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredLayer(index)}
                onMouseLeave={() => setHoveredLayer(null)}
                className="relative cursor-pointer"
              >
                <div
                  className={`relative p-6 rounded-[20px] border-2 transition-all duration-500 overflow-hidden ${
                    hoveredLayer === index
                      ? "border-white/30 bg-white/[0.08]"
                      : "border-white/[0.08] bg-white/[0.03]"
                  }`}
                >
                  {/* Gradient background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${layer.color} opacity-0 transition-opacity duration-500 ${
                      hoveredLayer === index ? "opacity-10" : ""
                    }`}
                  />

                  {/* Layer name */}
                  <div className="relative z-10 flex items-center justify-between mb-4">
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] text-white">
                      {layer.name}
                    </h3>
                    <div className={`w-12 h-1 rounded-full bg-gradient-to-r ${layer.color}`} />
                  </div>

                  {/* Components (animated in on hover) */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{
                      opacity: hoveredLayer === index ? 1 : 0,
                      height: hoveredLayer === index ? "auto" : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 overflow-hidden"
                  >
                    <div className="flex flex-wrap gap-2 pt-2">
                      {layer.components.map((component, cIndex) => (
                        <motion.div
                          key={cIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{
                            opacity: hoveredLayer === index ? 1 : 0,
                            scale: hoveredLayer === index ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.2, delay: cIndex * 0.05 }}
                          className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20"
                        >
                          <span className="font-['Montserrat:Regular',sans-serif] text-[12px] text-white/80">
                            {component}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Glow effect */}
                  {hoveredLayer === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className={`absolute inset-0 bg-gradient-to-r ${layer.color} blur-2xl opacity-20`}
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 5: Industry Solutions
function IndustrySolutions() {
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  const industries = [
    {
      name: "BFSI",
      category: "FINANCIAL SERVICES",
      useCase: "Automated loan processing, fraud detection, customer service agents",
      image: "https://images.unsplash.com/photo-1665656653092-684fdd316aca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwdGVjaG5vbG9neSUyMGRpZ2l0YWwlMjBiYW5raW5nfGVufDF8fHx8MTc2ODIwOTYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Insurance",
      category: "INSURANCE",
      useCase: "Claims automation, policy recommendations, risk assessment",
      image: "https://images.unsplash.com/photo-1707779491435-000c45820db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjB0ZWNobm9sb2d5JTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY4MjA5NjE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Manufacturing",
      category: "MANUFACTURING",
      useCase: "Supply chain optimization, predictive maintenance, quality control",
      image: "https://images.unsplash.com/photo-1765897569589-effcccec14d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW51ZmFjdHVyaW5nJTIwZGV2ZWxvcG1lbnQlMjBpbmR1c3RyeXxlbnwxfHx8fDE2ODIwOTQ1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Retail",
      category: "RETAIL",
      useCase: "Personalized shopping assistants, inventory management, demand forecasting",
      image: "https://images.unsplash.com/photo-1761599385665-a49e6a239518?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjB0ZWNobm9sb2d5JTIwZGV2ZWxvcG1lbnR8ZW58MXx8fHwxNjgyMDk0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Healthcare",
      category: "HEALTHCARE",
      useCase: "Patient care coordination, diagnostic support, appointment scheduling",
      image: "https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwdGVjaG5vbG9neSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTY4MjA5NDUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
    {
      name: "Technology",
      category: "TECHNOLOGY",
      useCase: "DevOps automation, customer support, code generation assistance",
      image: "https://images.unsplash.com/photo-1763568258752-fe55f4ab7267?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE2ODIwOTQ1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-blue-950/10 to-black">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[48px] text-white mb-4">
            Industry Solutions
          </h2>
          <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/60 max-w-2xl mx-auto">
            Tailored AI agent solutions for every sector
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => {
            const isHovered = hoveredIndustry === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndustry(index)}
                onHoverEnd={() => setHoveredIndustry(null)}
                className="relative group cursor-pointer overflow-hidden rounded-[16px] h-[420px]"
              >
                {/* Background Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <motion.img 
                    src={industry.image} 
                    alt={industry.name}
                    className="absolute h-full w-full object-cover"
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />
                </div>

                {/* Dark gradient overlay - from bottom to top */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/20" />

                {/* Content */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Top: Category chip */}
                  <div className="flex justify-start">
                    <span className="px-4 py-2 bg-purple-500 rounded-full font-['Montserrat',sans-serif] text-[11px] font-semibold tracking-[0.08em] uppercase text-white">
                      {industry.category}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div>
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[22px] text-white mb-3 leading-[1.3]">
                      {industry.name}
                    </h3>

                    {/* Description - always visible */}
                    <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/80 leading-[1.5]">
                      {industry.useCase}
                    </p>
                  </div>
                </div>

                {/* Subtle border */}
                <div className="absolute inset-0 rounded-[16px] border border-white/[0.08] pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Section 6: Deployment Flexibility
function DeploymentFlexibility({ onGetStartedClick }: { onGetStartedClick?: () => void }) {
  const [activeDeployment, setActiveDeployment] = useState<number | null>(null);

  const deployments = [
    { 
      icon: Cloud, 
      name: "Public Cloud", 
      description: "Deploy on AWS, Azure, or GCP with auto-scaling and global reach",
      gradient: "from-purple-500 to-purple-600",
      features: ["Auto-scaling", "Global CDN", "99.9% SLA"]
    },
    { 
      icon: Lock, 
      name: "Private Cloud", 
      description: "Dedicated infrastructure with complete data isolation and control",
      gradient: "from-purple-500 to-purple-600",
      features: ["Data isolation", "Custom policies", "Dedicated resources"]
    },
    { 
      icon: Network, 
      name: "Hybrid", 
      description: "Seamlessly bridge on-premise and cloud environments",
      gradient: "from-purple-500 to-purple-600",
      features: ["Cloud-on-prem sync", "Unified control", "Flexible workloads"]
    },
    { 
      icon: Server, 
      name: "On-Premise", 
      description: "Full control with deployment in your own data centers",
      gradient: "from-purple-500 to-purple-600",
      features: ["Air-gapped support", "Hardware control", "Zero cloud dependency"]
    },
    { 
      icon: Layers, 
      name: "Multi-Cloud", 
      description: "Distribute workloads across multiple cloud providers",
      gradient: "from-purple-500 to-purple-600",
      features: ["Vendor flexibility", "Risk mitigation", "Optimized costs"]
    },
  ];

  return (
    <section className="relative py-32 bg-black">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[48px] text-white mb-4">
            Deployment Flexibility
          </h2>
          <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/60 max-w-2xl mx-auto">
            Deploy anywhere, maintain control everywhere
          </p>
        </motion.div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deployments.map((deployment, index) => {
            const Icon = deployment.icon;
            const isHovered = activeDeployment === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setActiveDeployment(index)}
                onHoverEnd={() => setActiveDeployment(null)}
                className="relative group cursor-pointer"
              >
                <div className="relative h-full p-8 rounded-[24px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Gradient background glow */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${deployment.gradient} opacity-0`}
                    animate={isHovered ? { opacity: 0.1 } : { opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  />

                  {/* Icon */}
                  <div className="relative mb-6">
                    <motion.div
                      className={`inline-flex p-4 rounded-[16px] bg-gradient-to-br ${deployment.gradient}`}
                      animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                    </motion.div>
                    
                    {/* Icon glow */}
                    <motion.div
                      className={`absolute top-0 left-0 w-16 h-16 rounded-full bg-gradient-to-br ${deployment.gradient} blur-xl`}
                      animate={isHovered ? { opacity: 0.4, scale: 1.5 } : { opacity: 0, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="relative font-['Montserrat:Bold',sans-serif] text-[24px] text-white mb-3 leading-[1.2]">
                    {deployment.name}
                  </h3>

                  {/* Description */}
                  <p className="relative font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 leading-[1.6] mb-6">
                    {deployment.description}
                  </p>

                  {/* Features list - shows on hover */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={isHovered ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden"
                  >
                    <div className="space-y-2 pt-4 border-t border-white/10">
                      {deployment.features.map((feature, fIndex) => (
                        <motion.div
                          key={fIndex}
                          initial={{ opacity: 0, x: -10 }}
                          animate={isHovered ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                          transition={{ duration: 0.2, delay: fIndex * 0.05 }}
                          className="flex items-center gap-2"
                        >
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${deployment.gradient}`} />
                          <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/80">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Bottom accent line */}
                  <motion.div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${deployment.gradient}`}
                    initial={{ scaleX: 0 }}
                    animate={isHovered ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom info banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 p-6 rounded-[20px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="font-['Montserrat:Bold',sans-serif] text-[18px] text-white mb-1">
                Need a custom deployment strategy?
              </h4>
              <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60">
                Our team can help you design the perfect infrastructure setup
              </p>
            </div>
            <motion.button
              onClick={onGetStartedClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-white text-black font-['Montserrat:Bold',sans-serif] text-[14px] transition-all duration-300 whitespace-nowrap"
            >
              Consult with Experts
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Section 7: Implementation Roadmap
function ImplementationRoadmap() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  const stages = [
    {
      name: "Foundation",
      phase: "Weeks 1-4",
      tasks: ["Platform setup", "Team onboarding", "Initial configuration", "Security hardening"],
    },
    {
      name: "Integration",
      phase: "Weeks 5-8",
      tasks: ["System connections", "Data pipeline setup", "Tool integration", "Testing & validation"],
    },
    {
      name: "Production",
      phase: "Weeks 9-12",
      tasks: ["Agent deployment", "Monitoring setup", "Performance tuning", "Go-live support"],
    },
  ];

  return (
    <section className="relative py-32 bg-gradient-to-b from-black via-purple-950/10 to-black">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[40px] md:text-[48px] text-white mb-4">
            Implementation Roadmap
          </h2>
          <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/60 max-w-2xl mx-auto">
            From planning to production in 12 weeks
          </p>
        </motion.div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative max-w-6xl mx-auto">
          {/* Timeline base line */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-white/10">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          {/* Stages */}
          <div className="relative grid grid-cols-3 gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                onMouseEnter={() => setActiveStage(index)}
                onMouseLeave={() => setActiveStage(null)}
                className="relative"
              >
                {/* Vertical connector line from timeline to card */}
                <div className="absolute left-1/2 top-20 w-0.5 h-12 bg-gradient-to-b from-purple-500 to-transparent -translate-x-1/2" />

                {/* Stage number circle on timeline */}
                <motion.div
                  className="absolute left-1/2 top-[72px] -translate-x-1/2 -translate-y-1/2 z-10"
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                >
                  <div className="relative">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center border-4 border-black transition-all duration-500 ${
                      activeStage === index ? "scale-110 shadow-[0_0_30px_rgba(168,85,247,0.6)]" : "shadow-[0_0_20px_rgba(168,85,247,0.3)]"
                    }`}>
                      <span className="font-['Montserrat:Bold',sans-serif] text-[24px] text-white">
                        {index + 1}
                      </span>
                    </div>
                    
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-purple-400"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                    />
                  </div>
                </motion.div>

                {/* Stage card */}
                <div className="pt-32">
                  <motion.div
                    className={`relative p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.03] border transition-all duration-500 ${
                      activeStage === index 
                        ? "border-purple-500/50 bg-purple-500/5" 
                        : "border-white/[0.08]"
                    }`}
                    whileHover={{ y: -8 }}
                  >
                    {/* Glow effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-[24px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: activeStage === index ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10">
                      {/* Stage name */}
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[28px] text-white mb-2">
                        {stage.name}
                      </h3>
                      
                      {/* Phase timeline */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6">
                        <div className="w-2 h-2 rounded-full bg-purple-400" />
                        <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-purple-300">
                          {stage.phase}
                        </span>
                      </div>

                      {/* Tasks */}
                      <div className="space-y-3">
                        {stage.tasks.map((task, taskIndex) => (
                          <motion.div
                            key={taskIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.3 + taskIndex * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/70 leading-[1.6]">
                              {task}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom accent line */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-b-[24px]"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: activeStage === index ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                      style={{ transformOrigin: "left" }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline */}
        <div className="lg:hidden relative max-w-2xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10">
            <motion.div
              className="w-full bg-gradient-to-b from-purple-500 via-purple-400 to-purple-500"
              initial={{ height: "0%" }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </div>

          {/* Stages */}
          <div className="space-y-16 relative">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative pl-24"
              >
                {/* Stage number circle */}
                <motion.div
                  className="absolute left-0 top-8"
                  whileInView={{ scale: [0, 1.3, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center border-4 border-black shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                      <span className="font-['Montserrat:Bold',sans-serif] text-[24px] text-white">
                        {index + 1}
                      </span>
                    </div>
                    
                    {/* Pulse effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-purple-400"
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.4 }}
                    />
                  </div>
                </motion.div>

                {/* Horizontal connector from circle to card */}
                <div className="absolute left-16 top-[60px] w-8 h-0.5 bg-gradient-to-r from-purple-500 to-transparent" />

                {/* Stage card */}
                <motion.div
                  className="relative p-6 rounded-[20px] bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/[0.08] hover:border-purple-500/50 transition-all duration-500"
                  whileInView={{ x: [20, 0] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                >
                  {/* Stage name */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-white mb-2">
                    {stage.name}
                  </h3>
                  
                  {/* Phase timeline */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 mb-4">
                    <div className="w-2 h-2 rounded-full bg-purple-400" />
                    <span className="font-['Montserrat:Bold',sans-serif] text-[12px] text-purple-300">
                      {stage.phase}
                    </span>
                  </div>

                  {/* Tasks */}
                  <div className="space-y-2.5">
                    {stage.tasks.map((task, taskIndex) => (
                      <motion.div
                        key={taskIndex}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.2 + taskIndex * 0.1 }}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/70 leading-[1.6]">
                          {task}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-b-[20px]"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.2 + 0.4 }}
                    style={{ transformOrigin: "left" }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Section 8: Support & Resources
function SupportResources() {
  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides, API references, and best practices",
    },
    {
      icon: Headphones,
      title: "Integration Support",
      description: "Expert assistance for seamless platform integration",
    },
    {
      icon: BarChart3,
      title: "SLA & Monitoring",
      description: "99.9% uptime guarantee with 24/7 system monitoring",
    },
    {
      icon: Settings,
      title: "Managed Services",
      description: "End-to-end platform management by our expert team",
    },
  ];

  return (
    <section className="relative py-32 bg-black">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      <div className="max-w-7xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[48px] text-white mb-4">
            Support & Resources
          </h2>
          <p className="font-['Montserrat:Regular',sans-serif] text-[16px] text-white/60 max-w-2xl mx-auto">
            We're with you every step of the way
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="relative p-6 rounded-[20px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-purple-500/30 transition-all duration-500 h-full overflow-hidden">
                {/* Glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Icon */}
                <div className="relative mb-4">
                  <div className="inline-flex p-3 rounded-[14px] bg-gradient-to-br from-purple-500 to-blue-500 group-hover:scale-110 transition-transform duration-300">
                    <resource.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  {/* Icon glow */}
                  <motion.div
                    className="absolute top-0 left-0 w-12 h-12 rounded-full bg-purple-500 opacity-0 group-hover:opacity-20 blur-xl"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>

                {/* Content */}
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] text-white mb-3">
                  {resource.title}
                </h3>
                <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/60 leading-[1.6]">
                  {resource.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Section 9: Final CTA
function FinalCTA({ onGetStartedClick }: { onGetStartedClick?: () => void }) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />
      {/* Purple-black gradient band */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#0a0a0f] to-[#0a0a0f]" />

      {/* Animated glow waves */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-['Montserrat',sans-serif] font-bold text-[44px] md:text-[56px] leading-[1.15] text-[#f0f0f2] mb-6">
            Ready to accelerate your{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              AI journey?
            </span>
          </h2>
          <p className="font-['Montserrat',sans-serif] text-[17px] text-gray-400 mb-12 max-w-[640px] mx-auto leading-[1.7]">
            Let's discuss how we can help you build, deploy, and scale intelligent AI agents across your enterprise.
          </p>

          <div className="flex justify-center">
            <motion.button
              onClick={onGetStartedClick}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start your AI journey
                <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Main Component
export function AgentStudioPage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick, onGetStartedClick }: { 
  onClose: () => void;
  onServiceClick: (serviceTitle: string) => void;
  onAIClick: () => void;
  onProductClick: (productTitle: string) => void;
  onGrowWithUsClick: () => void;
  onWhoWeAreItemClick: (item: string) => void;
  onLogoClick?: () => void;
  onGetStartedClick?: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[1100] overflow-y-auto bg-black">
      {/* Navigation Header */}
      <div className="relative z-[1200]">
        <Nav 
          onServiceClick={onServiceClick} 
          onAIClick={onAIClick} 
          onProductClick={onProductClick} 
          onGrowWithUsClick={onGrowWithUsClick} 
          onWhoWeAreItemClick={onWhoWeAreItemClick}
          onLogoClick={onLogoClick}
        />
      </div>

      <div className="w-full bg-black pt-[92px]">
        <HeroSection onGetStartedClick={onGetStartedClick} />
        <WhyAgentStudio />
        <CorePlatformHighlights />
        <ArchitectureSection />
        <IndustrySolutions />
        <DeploymentFlexibility onGetStartedClick={onGetStartedClick} />
        <ImplementationRoadmap />
        <SupportResources />
        <FinalCTA onGetStartedClick={onGetStartedClick} />
      </div>
      
      <Footer />
    </div>
  );
}