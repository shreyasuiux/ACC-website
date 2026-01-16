import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  Bot,
  Brain,
  Cpu,
  Sparkles,
  Zap,
  Shield,
  Database,
  GitBranch,
  Activity,
  TrendingUp,
  Target,
  Layers,
  Code2,
  Network,
  BarChart3,
  Workflow,
  ArrowRight,
  CheckCircle2,
  X,
  Linkedin,
  Instagram,
  Facebook,
  Youtube,
  MessageSquare,
  FileSearch,
  AlertCircle,
  Calendar
} from "lucide-react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

// Removed old interface - no longer needed with React Router

// Animated counter component
const AnimatedCounter = ({ target, suffix = "" }: { target: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

// Animated particle background component
const AIParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// AI Mesh gradient background
const AIMeshGradient = () => {
  return (
    <div className="absolute inset-0 opacity-50">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-violet-900/30" />
      <div className="absolute inset-0 bg-gradient-to-tl from-fuchsia-900/20 via-transparent to-purple-900/20" />
      <motion.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 40% 50%, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
        }}
        animate={{
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export function AIPage() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<"agents" | "studio" | "aiops">("agents");
  const [hoveredUseCase, setHoveredUseCase] = useState<number | null>(null);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const [tappedUseCase, setTappedUseCase] = useState<number | null>(null);
  const [tappedPillar, setTappedPillar] = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  // Check if we're on a child route (not the parent /ai)
  const isChildRoute = location.pathname !== "/ai";

  // If we're on a child route, render the Outlet
  if (isChildRoute) {
    return <Outlet />;
  }

  // Otherwise, render the AI overview page

  const ecosystemTabs = [
    { id: "agents" as const, label: "AI Agents", icon: Bot },
    { id: "studio" as const, label: "Agent Studio", icon: Cpu },
    { id: "aiops" as const, label: "AI Ops Platform", icon: Activity },
  ];

  const ecosystemContent = {
    agents: {
      title: "AI Agents",
      subtitle: "Intelligent Banking Automation",
      description: "Deploy autonomous AI agents powered by LLMs and ML to drive efficiency, compliance, and customer experience in BFSI.",
      metrics: [
        { value: 15, suffix: "+", label: "AI Agents Deployed" },
        { value: 99.9, suffix: "%", label: "Compliance Accuracy" },
        { value: 80, suffix: "%", label: "Processing Speed Increase" },
        { value: 95, suffix: "%", label: "Customer Satisfaction" },
      ],
    },
    studio: {
      title: "Agent Studio",
      subtitle: "Build & Deploy AI Agents",
      description: "Low-code platform to design, train, and deploy custom AI agents tailored to your business processes and workflows.",
      metrics: [
        { value: 50, suffix: "+", label: "Pre-Built Templates" },
        { value: 70, suffix: "%", label: "Faster Deployment" },
        { value: 100, suffix: "+", label: "Custom Workflows" },
        { value: 24, suffix: "/7", label: "Continuous Learning" },
      ],
    },
    aiops: {
      title: "AI Ops Platform",
      subtitle: "Intelligent Operations Management",
      description: "AI-driven platform for monitoring, predicting, and automating IT operations with real-time insights and automated remediation.",
      metrics: [
        { value: 90, suffix: "%", label: "Incident Reduction" },
        { value: 60, suffix: "%", label: "Faster Resolution" },
        { value: 99.99, suffix: "%", label: "Uptime Achieved" },
        { value: 85, suffix: "%", label: "Cost Savings" },
      ],
    },
  };

  const useCases = [
    {
      category: "Compliance & Risk Management",
      title: "Intelligent Compliance Agent",
      description: "Automated regulatory compliance monitoring and reporting with real-time risk assessment",
      tags: ["BFSI", "Regulatory", "Real-time"],
      icon: Shield,
      image: "https://images.unsplash.com/photo-1591492835122-79ae33cd19f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wbGlhbmNlJTIwcmlzayUyMGJ1c2luZXNzfGVufDF8fHx8MTc2ODIwMDQzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      category: "Customer Engagement",
      title: "Hyper-Personalized Client Concierge",
      description: "AI-powered customer service with personalized recommendations and 24/7 support",
      tags: ["CX", "Personalization", "24/7"],
      icon: MessageSquare,
      image: "https://images.unsplash.com/photo-1758519289705-cf9fda8a9a3a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODE5OTkyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      category: "Operations",
      title: "Digital Audit Lifecycle Agent",
      description: "End-to-end audit automation from planning to reporting with intelligent anomaly detection",
      tags: ["Audit", "Automation", "Analytics"],
      icon: FileSearch,
      image: "https://images.unsplash.com/photo-1753955900083-b62ee8d97805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdWRpdCUyMGRvY3VtZW50JTIwYW5hbHlzaXN8ZW58MXx8fHwxNzY4MjAwNDM4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      category: "Customer Engagement",
      title: "Real-Time Event Prospecting Agent",
      description: "Identify and engage prospects based on life events and behavioral triggers",
      tags: ["Sales", "Lead Gen", "Behavioral"],
      icon: Target,
      image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWxlcyUyMHByb3NwZWN0aW5nJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgyMDA0Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      category: "Operations",
      title: "System Log & Root Cause Analysis",
      description: "AI-driven log analysis to identify patterns, anomalies, and root causes automatically",
      tags: ["DevOps", "Monitoring", "AI Ops"],
      icon: AlertCircle,
      image: "https://images.unsplash.com/photo-1761141535640-c78744c4f369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeXN0ZW0lMjBtb25pdG9yaW5nJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2ODIwMDQzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      category: "Planning & Optimization",
      title: "Intelligent Meeting Scheduler",
      description: "Smart calendar management with AI-powered scheduling and conflict resolution",
      tags: ["Productivity", "Automation", "Smart"],
      icon: Calendar,
      image: "https://images.unsplash.com/photo-1765805912973-af8bb89c80d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxlbmRhciUyMHNjaGVkdWxpbmclMjBwcm9kdWN0aXZpdHl8ZW58MXx8fHwxNzY4MjAwNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  const valuePillars = [
    {
      icon: Zap,
      title: "Precision Automation",
      description: "99.9% accuracy in complex business processes with intelligent automation",
      category: "AUTOMATION",
      image: "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGF1dG9tYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODEyMTg0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Brain,
      title: "Real-Time Intelligence",
      description: "Instant insights from data with predictive analytics and ML models",
      category: "ANALYTICS",
      image: "https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2ODIwMDQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: Database,
      title: "Scalable AI Platforms",
      description: "Enterprise-grade infrastructure that grows with your business needs",
      category: "INFRASTRUCTURE",
      image: "https://images.unsplash.com/photo-1718630732291-3bc8de36b030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwc2NhbGluZ3xlbnwxfHx8fDE3NjgyMDA0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      icon: TrendingUp,
      title: "Continuous Learning Models",
      description: "Self-improving AI that adapts to your business and market changes",
      category: "MACHINE LEARNING",
      image: "https://images.unsplash.com/photo-1717501218504-81ed5eb52cd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWx8ZW58MXx8fHwxNzY4MjAwNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
  ];

  const industries = [
    {
      name: "Banking & Financial Services",
      icon: BarChart3,
      outcome: "80% faster loan processing with AI-driven credit scoring",
      solutions: ["Credit Risk AI", "Fraud Detection", "Customer Onboarding"],
    },
    {
      name: "Insurance",
      icon: Shield,
      outcome: "95% claims accuracy with automated underwriting",
      solutions: ["Claims Processing", "Risk Assessment", "Policy Management"],
    },
    {
      name: "Mutual Funds",
      icon: TrendingUp,
      outcome: "3x portfolio performance with AI-powered insights",
      solutions: ["Portfolio Optimization", "Market Analysis", "Client Advisory"],
    },
    {
      name: "Brokerage & Securities",
      icon: Activity,
      outcome: "Real-time trading insights with 99.9% uptime",
      solutions: ["Algorithmic Trading", "Market Surveillance", "Compliance"],
    },
  ];

  return (
    <div className="fixed inset-0 z-[1100] bg-[#0a0a0f] overflow-y-auto">
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
        <MobileNav 
          onServiceClick={onServiceClick} 
          onAIClick={onAIClick} 
          onProductClick={onProductClick} 
          onGrowWithUsClick={onGrowWithUsClick} 
          onWhoWeAreItemClick={onWhoWeAreItemClick}
          onLogoClick={onLogoClick}
        />
      </div>

      {/* Section 1: Hero - ACC AI Platform */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[92px]">{/* Added pt-[92px] for nav height */}
        {/* Deep charcoal background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a15] via-[#0a0a0f] to-[#0a0a0f]" />

        {/* Animated mesh + particles */}
        <AIMeshGradient />
        <AIParticleField />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Ambient glow orbs */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 py-24 w-full z-10">
          <div className="text-center max-w-[1000px] mx-auto">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                Comprehensive AI Solutions
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Montserrat:SemiBold',sans-serif] text-[56px] md:text-[72px] lg:text-[84px] leading-[1.05] mb-8"
            >
              <span className="text-[#f0f0f2]">ACC </span>
              <span className="text-[#C084FC]">AI</span>
              <span className="text-[#f0f0f2]"> Platform</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-['Montserrat',sans-serif] text-[18px] leading-[1.7] text-gray-400 max-w-[780px] mx-auto mb-12"
            >
              Transform your business with our end-to-end AI ecosystem — from intelligent agents to AI Ops and enterprise platforms.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 mb-20"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStartedClick}
                className="group relative px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your AI Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGrowWithUsClick}
                className="px-8 md:px-10 py-4 md:py-5 bg-white/5 border-2 border-white text-white rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Case Studies
              </motion.button>
            </motion.div>

            {/* Stats Bar */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8"
            >
              {[
                { value: 25, suffix: "+", label: "AI Solutions Deployed" },
                { value: 150, suffix: "+", label: "Enterprise Clients" },
                { value: 80, suffix: "%", label: "Process Automation" },
                { value: 300, suffix: "%", label: "ROI Improvement" },
              ].map((stat, index) => (
                <div key={index} className="relative p-6 bg-white/[0.02] rounded-xl border border-white/10 backdrop-blur-sm">
                  <div className="font-['Montserrat',sans-serif] font-bold text-[36px] bg-gradient-to-r from-purple-400 to-fuchsia-400 bg-clip-text text-transparent mb-2">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 & 3: Complete AI Ecosystem (Tab-based with AI Agents Focus) */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f0a15] to-[#0a0a0f]" />

        {/* Ambient light */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.1) 0%, transparent 70%)",
          }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-purple-400 mb-4">
              Complete AI Ecosystem
            </p>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[40px] md:text-[52px] leading-[1.15] text-[#f0f0f2]">
              Enterprise AI Solutions
            </h2>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex gap-2 p-2 bg-white/[0.02] rounded-xl border border-white/10 backdrop-blur-sm">
              {ecosystemTabs.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative px-6 py-3 rounded-xl font-['Montserrat',sans-serif] font-semibold text-[14px] transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-gray-300"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-purple-600 rounded-xl"
                        style={{ boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="relative p-10 md:p-14 bg-gradient-to-br from-purple-500/[0.08] to-fuchsia-500/[0.04] rounded-3xl border border-purple-500/20 backdrop-blur-sm overflow-hidden"
            >
              {/* Inner glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 via-transparent to-transparent opacity-50" />

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-[32px] md:text-[40px] text-[#f0f0f2] mb-3">
                    {ecosystemContent[activeTab].title}
                  </h3>
                  <p className="font-['Montserrat',sans-serif] text-[16px] text-purple-300 mb-6">
                    {ecosystemContent[activeTab].subtitle}
                  </p>
                  <p className="font-['Montserrat',sans-serif] text-[17px] text-gray-300 leading-[1.7] max-w-[800px]">
                    {ecosystemContent[activeTab].description}
                  </p>
                </div>

                {/* Animated divider */}
                <motion.div
                  className="h-px bg-gradient-to-r from-transparent via-purple-400/50 to-transparent mb-8"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />

                {/* Metrics Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {ecosystemContent[activeTab].metrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="relative p-5 bg-black/20 rounded-xl border border-purple-500/20 backdrop-blur-sm"
                    >
                      <div className="font-['Montserrat',sans-serif] font-bold text-[28px] text-purple-300 mb-1">
                        <AnimatedCounter target={metric.value} suffix={metric.suffix} />
                      </div>
                      <p className="font-['Montserrat',sans-serif] text-[12px] text-gray-400 leading-[1.4]">
                        {metric.label}
                      </p>
                      {/* Pulse icon */}
                      <motion.div
                        className="absolute top-3 right-3 w-2 h-2 bg-purple-400 rounded-full"
                        animate={{
                          scale: [1, 1.5, 1],
                          opacity: [1, 0.5, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Section 4: AI Capabilities - Intelligent Use Cases */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-[#0a0a0f]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-purple-400 mb-5">
              AI CAPABILITIES
            </p>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[36px] md:text-[48px] leading-[1.1] text-white">
              Intelligent Use Cases
            </h2>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {useCases.map((useCase, index) => {
              const Icon = useCase.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
                  className="group relative bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] rounded-[24px] overflow-hidden border border-white/[0.06] hover:border-purple-500/30 transition-all duration-500"
                >
                  {/* Image Container - Proper aspect ratio without cropping */}
                  <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-purple-900/10 to-black/20 overflow-hidden">
                    <motion.img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    {/* Gradient overlay for image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] via-transparent to-transparent opacity-60" />
                    
                    {/* Category Badge - Positioned on image */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-['Montserrat',sans-serif] text-[10px] font-bold tracking-[0.12em] uppercase text-white shadow-lg backdrop-blur-sm">
                        {useCase.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-7">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="inline-flex p-3 rounded-[14px] bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-400/20">
                        <Icon className="w-5 h-5 text-purple-300" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Montserrat',sans-serif] font-bold text-[20px] md:text-[22px] text-white leading-[1.3] mb-4">
                      {useCase.title}
                    </h3>

                    {/* Description */}
                    <p className="font-['Montserrat',sans-serif] text-[14px] text-gray-400 leading-[1.7] mb-5">
                      {useCase.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {useCase.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-['Montserrat',sans-serif] text-[11px] font-medium text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ x: 4 }}
                      className="group/btn inline-flex items-center gap-2 text-purple-400 font-['Montserrat',sans-serif] text-[13px] font-semibold hover:text-purple-300 transition-colors duration-300"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </motion.button>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.1) 0%, transparent 60%)",
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5: VALUE PILLARS - Why Choose ACC AI Solutions */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0a0f] to-[#0f0a15]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        {/* Subtle background effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/10 via-transparent to-transparent" />
        
        <div className="relative max-w-[1400px] mx-auto px-6 md:px-12 z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-purple-400 mb-5">
              VALUE PILLARS
            </p>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] text-white">
              Why Choose ACC AI Solutions
            </h2>
          </motion.div>

          {/* Cards Grid - 2x2 on desktop, stacked on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              {
                category: "AUTOMATION",
                title: "Precision Automation",
                description: "Achieve 99.9% accuracy in complex business processes with intelligent automation powered by advanced AI algorithms and machine learning models.",
                icon: Zap,
                image: "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGF1dG9tYXRpb24lMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2ODEyMTg0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                highlights: ["99.9% Accuracy", "Real-time Processing", "Scalable Workflows"]
              },
              {
                category: "ANALYTICS",
                title: "Real-Time Intelligence",
                description: "Transform raw data into actionable insights instantly with predictive analytics, ML models, and AI-driven decision support systems.",
                icon: Brain,
                image: "https://images.unsplash.com/photo-1642775196125-38a9eb496568?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwaW50ZWxsaWdlbmNlfGVufDF8fHx8MTc2ODIwMDQzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                highlights: ["Instant Insights", "Predictive Models", "Data-Driven Decisions"]
              },
              {
                category: "INFRASTRUCTURE",
                title: "Scalable AI Platforms",
                description: "Enterprise-grade cloud infrastructure designed to scale seamlessly with your business growth and evolving AI requirements.",
                icon: Database,
                image: "https://images.unsplash.com/photo-1718630732291-3bc8de36b030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwc2NhbGluZ3xlbnwxfHx8fDE3NjgyMDA0Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                highlights: ["Cloud-Native", "Auto-Scaling", "99.99% Uptime"]
              },
              {
                category: "MACHINE LEARNING",
                title: "Continuous Learning Models",
                description: "Self-improving AI systems that continuously adapt and evolve based on new data, market changes, and business requirements.",
                icon: TrendingUp,
                image: "https://images.unsplash.com/photo-1717501218504-81ed5eb52cd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWx8ZW58MXx8fHwxNzY4MjAwNDM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                highlights: ["Self-Improving", "Adaptive AI", "Smart Evolution"]
              }
            ].map((pillar, index) => {
              const Icon = pillar.icon;
              const isHovered = hoveredPillar === index;
              const isTapped = tappedPillar === index;
              const isActive = isHovered || isTapped;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredPillar(index)}
                  onHoverEnd={() => setHoveredPillar(null)}
                  onTapStart={() => setTappedPillar(index)}
                  onTap={() => {
                    setTappedPillar(tappedPillar === index ? null : index);
                  }}
                  className="group relative bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] rounded-[24px] overflow-hidden border border-white/[0.06] hover:border-purple-500/30 transition-all duration-500"
                >
                  {/* Image Container - 16:10 aspect ratio without cropping */}
                  <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-purple-900/10 to-black/20 overflow-hidden">
                    <motion.img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover"
                      animate={isActive ? { scale: 1.05 } : { scale: 1 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] via-[#1a1a24]/60 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-purple-600 to-purple-500 rounded-full font-['Montserrat',sans-serif] text-[10px] font-bold tracking-[0.12em] uppercase text-white shadow-lg backdrop-blur-sm">
                        {pillar.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="relative p-6 md:p-8">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="inline-flex p-3.5 rounded-[16px] bg-gradient-to-br from-purple-500/20 to-blue-500/10 border border-purple-400/20">
                        <Icon className="w-6 h-6 text-purple-300" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Montserrat',sans-serif] font-bold text-[22px] md:text-[24px] text-white leading-[1.3] mb-4">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-gray-400 leading-[1.7] mb-6">
                      {pillar.description}
                    </p>

                    {/* Highlights - Show on hover/tap */}
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={isActive ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden mb-6"
                    >
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                        {pillar.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/20 rounded-full font-['Montserrat',sans-serif] text-[11px] font-medium text-purple-300"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* CTA Button - Show on hover/tap */}
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
                      transition={{ duration: 0.3, ease: "easeOut", delay: isActive ? 0.1 : 0 }}
                    >
                      <button className="inline-flex items-center gap-2 text-purple-400 font-['Montserrat',sans-serif] text-[13px] font-semibold hover:text-purple-300 transition-colors duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </motion.div>
                  </div>

                  {/* Hover glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-[24px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
                    }}
                  />

                  {/* Subtle border effect on hover */}
                  <motion.div
                    className="absolute inset-0 rounded-[24px] pointer-events-none"
                    animate={isActive ? { 
                      boxShadow: "0 8px 32px rgba(139, 92, 246, 0.25)" 
                    } : { 
                      boxShadow: "0 0 0 rgba(139, 92, 246, 0)" 
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Industry-Specific AI Solutions */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0a0a0f]" />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-purple-400 mb-4">
              Industry Focus
            </p>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[40px] md:text-[52px] leading-[1.15] text-[#f0f0f2]">
              Industry-Specific AI Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              const isHovered = hoveredIndustry === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredIndustry(index)}
                  onHoverEnd={() => setHoveredIndustry(null)}
                  className="relative group cursor-pointer"
                >
                  <motion.div
                    className="relative p-10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-2xl border border-white/10 backdrop-blur-md overflow-hidden"
                    animate={{
                      scale: isHovered ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Purple glow on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent"
                      animate={{
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div className="inline-flex p-4 rounded-xl bg-purple-500/10 border border-purple-500/20">
                          <Icon className="w-8 h-8 text-purple-400" strokeWidth={1.5} />
                        </div>
                      </div>

                      <h3 className="font-['Montserrat',sans-serif] font-bold text-[24px] text-[#f0f0f2] mb-4 leading-[1.3]">
                        {industry.name}
                      </h3>

                      {/* Outcome preview - appears on hover */}
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                          opacity: isHovered ? 1 : 0,
                          height: isHovered ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="mb-5 pt-5 border-t border-white/10">
                          <div className="flex items-start gap-3 mb-4">
                            <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                            <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-300 leading-[1.6]">
                              {industry.outcome}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {industry.solutions.map((solution, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 text-[12px] font-['Montserrat',sans-serif] font-medium text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-xl"
                              >
                                {solution}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Purple-black gradient band */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#0a0a0f] to-[#0a0a0f]" />

        {/* Animated glow waves */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at top, rgba(139, 92, 246, 0.2) 0%, transparent 50%)",
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 8,
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
              Ready to transform with{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                AI?
              </span>
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[17px] text-gray-400 mb-12 max-w-[640px] mx-auto leading-[1.7]">
              Discover how ACC's AI solutions can revolutionize your operations and drive unprecedented growth.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStartedClick}
                className="group relative px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] overflow-hidden transition-all duration-300"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start Your AI Journey
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onGrowWithUsClick}
                className="px-8 md:px-10 py-4 md:py-5 bg-white/5 border-2 border-white text-white rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                View Case Studies
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-[#000000] border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-16">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Logo className="mb-4" fill="white" />
                <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-400 mt-3 leading-[1.6]">
                  Applied Cloud Computing - Your comprehensive solution provider for digital transformation.
                </p>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/company/applied-cloud-computing/posts/?feedView=all" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </a>
                <a 
                  href="https://www.instagram.com/appliedcloudcomputing/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </a>
                <a 
                  href="https://www.facebook.com/AppliedCloudComputing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </a>
                <a 
                  href="https://www.youtube.com/@appliedcloudcomputing" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/40 transition-all duration-300 group"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </a>
              </div>
            </div>

            {/* Services Column */}
            <div>
              <h4 className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Cloud Practice", value: "Cloud Practice" },
                  { name: "Digitalization", value: "Digital & Product Engineering" },
                  { name: "AI Agents", value: "AI Agents" },
                  { name: "Big Data", value: "Big Data" },
                  { name: "App Modernization", value: "App Modernization" },
                  { name: "Security", value: "Security" },
                  { name: "Database Management", value: "Database Management" },
                  { name: "ERP & Testing", value: "ERP & Testing" }
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="font-['Montserrat',sans-serif] text-[14px] text-gray-400 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        onServiceClick(item.value);
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Column */}
            <div>
              <h4 className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mb-6">
                Products
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Atlas API Manager", value: "Atlas API Manager" },
                  { name: "Agent Studio", value: "Agent Studio" },
                  { name: "Oflohm Video", value: "Ottohm Video" },
                  { name: "ITSM Ticketing", value: "ITSM Ticketing" },
                  { name: "AI Ops Platform", value: "AI Ops Platform" },
                  { name: "Smart Contracts", value: "Smart Contracts" }
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="font-['Montserrat',sans-serif] text-[14px] text-gray-400 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        onProductClick(item.value);
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h4 className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  "About Us",
                  "Our Team",
                  "Partners",
                  "Careers",
                  "News",
                  "Contact"
                ].map((item, i) => (
                  <li key={i}>
                    <a 
                      href="#" 
                      className="font-['Montserrat',sans-serif] text-[14px] text-gray-400 hover:text-purple-400 transition-colors duration-200 cursor-pointer"
                      onClick={(e) => {
                        e.preventDefault();
                        onWhoWeAreItemClick(item);
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office Locations Column */}
            <div>
              <h4 className="font-['Montserrat',sans-serif] font-semibold text-[15px] text-white mb-6">
                Office Locations
              </h4>
              
              <div className="space-y-6">
                <div>
                  <h5 className="font-['Montserrat',sans-serif] font-semibold text-[14px] text-purple-400 mb-2">
                    Mumbai (HQ)
                  </h5>
                  <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-400 leading-[1.6]">
                    201/202, New Era Business Park Road No. 33, Wagle Industrial Estate, Thane, 400604
                  </p>
                </div>

                <div>
                  <h5 className="font-['Montserrat',sans-serif] font-semibold text-[14px] text-purple-400 mb-2">
                    Mumbai
                  </h5>
                  <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-400 leading-[1.6]">
                    Unit 102, Rupa Solitaire, Millennium Business Park, Mahape, Navi Mumbai
                  </p>
                </div>

                <div>
                  <h5 className="font-['Montserrat',sans-serif] font-semibold text-[14px] text-purple-400 mb-2">
                    Pune
                  </h5>
                  <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-400 leading-[1.6]">
                    Office 305, White square, Hinjawadi, Wakad Rd, Pimpri-Chinchwad
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-500">
              © 2025 Applied Cloud Computing. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a 
                href="#" 
                className="font-['Montserrat',sans-serif] text-[13px] text-gray-500 hover:text-purple-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a 
                href="#" 
                className="font-['Montserrat',sans-serif] text-[13px] text-gray-500 hover:text-purple-400 transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a 
                href="#" 
                className="font-['Montserrat',sans-serif] text-[13px] text-gray-500 hover:text-purple-400 transition-colors duration-200"
              >
                Security & Compliance
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}