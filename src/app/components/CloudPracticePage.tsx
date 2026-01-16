import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Cloud,
  Shield,
  Target,
  CircleCheck,
  ArrowRight,
  Lock,
  Gauge,
  Users,
  X,
  Layers,
  Code,
  GitBranch,
  Monitor,
  RefreshCw,
  Award,
  Zap,
  TrendingUp,
  Database,
  Linkedin,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";

interface CloudPracticePageProps {
  onClose: () => void;
  onServiceClick: (serviceTitle: string) => void;
  onAIClick: () => void;
  onProductClick: (productTitle: string) => void;
  onGrowWithUsClick: () => void;
  onWhoWeAreItemClick: (item: string) => void;
  onLogoClick?: () => void;
  onGetStartedClick?: () => void;
}

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

export function CloudPracticePage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick, onGetStartedClick }: CloudPracticePageProps) {
  const [selectedIndustry, setSelectedIndustry] = useState(0);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const industries = [
    {
      name: "BFSI / FinTech",
      solution: "Secure, compliant cloud infrastructure for real-time payment processing and core banking systems",
      capability: "Multi-cloud governance with AI-driven security & compliance automation",
      outcome: "99.99% uptime with PCI DSS & SOC 2 compliance",
    },
    {
      name: "Healthcare",
      solution: "HIPAA-compliant cloud platforms enabling secure patient data management and telehealth",
      capability: "Healthcare-grade cloud architecture with end-to-end encryption",
      outcome: "HIPAA certified infrastructure with 40% reduced operational costs",
    },
    {
      name: "Manufacturing",
      solution: "IoT-enabled smart factory solutions on scalable cloud infrastructure for predictive maintenance",
      capability: "Edge-to-cloud manufacturing platforms with real-time analytics",
      outcome: "30% efficiency gain with predictive maintenance capabilities",
    },
    {
      name: "Retail & E-commerce",
      solution: "Omnichannel commerce platforms with AI-powered personalization and dynamic scaling",
      capability: "Cloud-native commerce ecosystems with global CDN integration",
      outcome: "2x faster checkout with 99.9% peak season availability",
    },
    {
      name: "Media & Platforms",
      solution: "Global content delivery and streaming infrastructure with adaptive bitrate streaming",
      capability: "Cloud-scale media processing with automated transcoding pipelines",
      outcome: "Global CDN with 99.9% availability and dynamic scaling",
    },
    {
      name: "Education",
      solution: "Scalable learning management systems with secure exam delivery and collaborative tools",
      capability: "Cloud-native education platforms with auto-scaling capabilities",
      outcome: "10x concurrent user capacity with 50% cost reduction",
    },
  ];

  const pillars = [
    {
      icon: Target,
      title: "End-to-End Cloud Adoption",
      description: "From strategy to scale, with governance built in",
      impact: "Accelerated migration timelines",
    },
    {
      icon: Users,
      title: "Holistic Operating Model",
      description: "People, process, and technology aligned",
      impact: "Seamless organizational transformation",
    },
    {
      icon: Shield,
      title: "Security & Compliance by Design",
      description: "Zero-trust, compliant, enterprise-ready",
      impact: "Risk mitigation at every layer",
    },
    {
      icon: Gauge,
      title: "Cost, Performance & Agility Optimization",
      description: "Optimized for scale and speed",
      impact: "Measurable ROI and efficiency gains",
    },
  ];

  const services = [
    {
      title: "Cloud Strategy & Architecture",
      description: "End-to-end cloud strategy, roadmap planning, and architecture design for scalable enterprise systems",
      icon: Layers,
    },
    {
      title: "Cloud Security & Compliance",
      description: "Zero-trust security frameworks, compliance automation, and enterprise-grade governance solutions",
      icon: Shield,
    },
    {
      title: "Application Migration & Modernization",
      description: "Seamless cloud migration with minimal downtime and modern cloud-native application transformation",
      icon: RefreshCw,
    },
    {
      title: "DevOps & Automation",
      description: "CI/CD pipeline automation, infrastructure as code, and DevSecOps integration for rapid delivery",
      icon: GitBranch,
    },
    {
      title: "Managed Cloud Operations",
      description: "24/7 cloud monitoring, optimization, and managed services with SLA-backed performance guarantees",
      icon: Monitor,
    },
    {
      title: "Cloud-Native Engineering",
      description: "Microservices architecture, containerization, and serverless solutions for modern applications",
      icon: Code,
    },
  ];

  const differentiators = [
    {
      icon: Award,
      title: "AWS-Certified Cloud & AI Expertise",
      proof: "Deep partnership with leading cloud platforms",
    },
    {
      icon: TrendingUp,
      title: "Proven Execution Frameworks & IP",
      proof: "Accelerators built from 100+ enterprise engagements",
    },
    {
      icon: Monitor,
      title: "Scalable Managed Cloud Operations",
      proof: "24/7 operations with SLA-backed commitments",
    },
    {
      icon: Lock,
      title: "Enterprise Security & Governance Focus",
      proof: "ISO 27001, SOC 2, and industry compliance",
    },
  ];

  const benefits = [
    "Reduced infrastructure & operational costs",
    "Faster time-to-market",
    "Improved security & compliance posture",
    "Scalable, future-ready cloud foundations",
    "Continuous optimization & performance gains",
  ];

  // PillarCard component
  const PillarCard = ({ pillar, index }: { pillar: any; index: number }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative group cursor-pointer rounded-xl overflow-hidden"
        style={{ height: '424px' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image - fills entire card */}
        <motion.img
          alt={pillar.title}
          className="w-full h-full object-cover"
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
          src={pillar.image}
          animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />

        {/* Purple overlay - same as homepage */}
        <div className="absolute inset-0 bg-purple-900 opacity-30 rounded-xl" />
        
        {/* Gradient overlay - same as homepage */}
        <div 
          className="absolute inset-0 rounded-xl" 
          style={{ backgroundImage: "linear-gradient(-47.516deg, rgba(0, 0, 0, 0) 1.7008%, rgba(2, 1, 3, 0.6) 52.798%)" }} 
        />

        {/* Badge */}
        <div className="absolute bg-[#a020f0] content-stretch flex items-center justify-center left-[16px] px-[20px] py-[10px] rounded-[24px] top-[14px] z-10">
          <p className="font-['Montserrat',sans-serif] font-semibold leading-[1.5] not-italic text-[12px] text-nowrap text-white uppercase">
            {pillar.badge}
          </p>
        </div>

        {/* Title */}
        <p className="absolute capitalize font-['Montserrat',sans-serif] font-bold leading-[1.5] left-[16px] not-italic text-[20px] text-white top-[64px] w-[calc(100%-32px)] z-10">
          {pillar.title}
        </p>

        {/* Description - slides in on hover */}
        <motion.div
          className="absolute left-[16px] top-[140px] w-[calc(100%-32px)] z-10"
          initial={{ x: 320, opacity: 0 }}
          animate={isHovered ? { x: 0, opacity: 1 } : { x: 320, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <p className="capitalize font-['Montserrat',sans-serif] font-medium leading-[1.5] not-italic text-[14px] text-white mb-3">
            {pillar.description}
          </p>
          <p className="font-['Montserrat',sans-serif] font-medium leading-[1.5] not-italic text-[12px] text-purple-300">
            {pillar.impact}
          </p>
        </motion.div>
      </motion.div>
    );
  };

  // ServiceCard component for Core Services section (Icon-based style)
  const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const Icon = service.icon;
    const [isHovered, setIsHovered] = useState(false);

    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.05 }}
        className="relative group cursor-pointer h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          className="p-10 rounded-2xl border h-full relative overflow-hidden"
          style={{ background: 'rgba(15, 10, 21, 0.8)' }}
          animate={{
            borderColor: isHovered ? 'rgba(168, 85, 247, 0.4)' : 'rgba(255, 255, 255, 0.08)',
          }}
          transition={{ duration: 0.3 }}
        >
          {/* Gradient Overlay - animates opacity instead of background */}
          <motion.div
            className="absolute inset-0 rounded-2xl pointer-events-none"
            style={{ 
              background: 'linear-gradient(135deg, rgba(88, 28, 135, 0.4) 0%, rgba(88, 28, 135, 0.2) 50%, rgba(88, 28, 135, 0.4) 100%)'
            }}
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Icon Container */}
          <motion.div 
            className="mb-8"
            animate={{
              scale: isHovered ? 1.05 : 1,
              y: isHovered ? -4 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="inline-flex p-5 rounded-2xl bg-purple-500/10 border border-purple-500/20">
              <Icon className="w-10 h-10 text-purple-400" strokeWidth={1.5} />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h3 
            className="font-['Montserrat',sans-serif] font-semibold text-[20px] text-white mb-4 leading-[1.3]"
            animate={{
              x: isHovered ? 4 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.h3>

          {/* Description */}
          <motion.p 
            className="font-['Montserrat',sans-serif] text-[14px] leading-[1.7] text-gray-500"
            animate={{
              color: isHovered ? '#D1D5DB' : '#6B7280',
            }}
            transition={{ duration: 0.3 }}
          >
            {service.description}
          </motion.p>
        </motion.div>
      </motion.div>
    );
  };

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

      {/* Section 1: Hero - Cloud Practice (Energy Version) */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[92px]">{/* Added pt-[92px] for nav height */}
        {/* Deep charcoal background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a15] via-[#0a0a0f] to-[#0a0a0f]" />

        {/* Animated mesh + particles */}
        <MeshGradient />
        <ParticleField />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Ambient glow orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(217, 70, 239, 0.12) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 py-24 w-full z-10">
          <div className="text-center max-w-[900px] mx-auto">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                Cloud Practice
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Montserrat:SemiBold',sans-serif] text-[40px] md:text-[72px] lg:text-[84px] leading-[1.05] mb-8"
            >
              <span className="text-[#f0f0f2]">Accelerating</span>
              <br />
              <span className="text-[#f0f0f2]">intelligent </span>
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                cloud
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
                transformation
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-['Montserrat',sans-serif] text-[18px] leading-[1.7] text-gray-400 max-w-[680px] mx-auto mb-12"
            >
              Modernizing, securing, and scaling cloud platforms with AI-driven intelligence.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Section 2: Why ACC's Cloud (Interactive Pillars) */}
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
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 70%)",
          }}
          animate={{
            opacity: [0.3, 0.5, 0.3],
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
            className="text-center mb-20"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-purple-400 mb-4">
              Our Approach
            </p>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[40px] md:text-[52px] leading-[1.15] text-[#f0f0f2]">
              Why ACC's Cloud
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "End-to-End Cloud Adoption",
                description: "From strategy to scale, with governance built in",
                impact: "Accelerated migration timelines",
                badge: "CLOUD ADOPTION",
                image: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHRlY2hub2xvZ3klMjBzZXJ2ZXJzfGVufDF8fHx8MTc2ODIwMjg4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Holistic Operating Model",
                description: "People, process, and technology aligned",
                impact: "Seamless organizational transformation",
                badge: "OPERATING MODEL",
                image: "https://images.unsplash.com/photo-1739298061740-5ed03045b280?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NjgxMTIxNzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Security & Compliance by Design",
                description: "Zero-trust, compliant, enterprise-ready",
                impact: "Risk mitigation at every layer",
                badge: "SECURITY",
                image: "https://images.unsplash.com/photo-1667372283496-893f0b1e7c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMHNlY3VyaXR5JTIwZGF0YSUyMHByb3RlY3Rpb258ZW58MXx8fHwxNjgyMDM5MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
              {
                title: "Cost, Performance & Agility Optimization",
                description: "Optimized for scale and speed",
                impact: "Measurable ROI and efficiency gains",
                badge: "OPTIMIZATION",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMGFuYWx5dGljcyUyMG9wdGltaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjgyMDI4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
              },
            ].map((pillar, index) => (
              <PillarCard key={index} pillar={pillar} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Core Cloud Services (New Home Screen Style) */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
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
              Core Services
            </p>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[40px] md:text-[52px] leading-[1.15] text-[#f0f0f2]">
              Comprehensive Cloud Capabilities
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Industry Focus & Use Cases (Dynamic) */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a15] to-[#0a0a0f]" />

        {/* Ambient glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
          }}
        />

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
              Tailored Solutions
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Industry selector */}
            <div className="space-y-3">
              {industries.map((industry, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedIndustry(index)}
                  className={`w-full text-left p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 ${
                    selectedIndustry === index
                      ? "bg-purple-500/10 border-purple-500/40 text-[#f0f0f2] shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                      : "bg-white/[0.02] border-white/10 text-gray-500 hover:bg-white/[0.04] hover:border-white/20 hover:text-gray-400"
                  }`}
                  whileHover={{ x: selectedIndustry === index ? 0 : 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="font-['Montserrat',sans-serif] font-semibold text-[16px]">
                    {industry.name}
                  </p>
                </motion.button>
              ))}
            </div>

            {/* Right: Use case preview with animated data flow */}
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative p-10 bg-gradient-to-br from-purple-500/[0.08] to-fuchsia-500/[0.04] rounded-2xl border border-purple-500/20 backdrop-blur-sm overflow-hidden"
            >
              {/* Animated data flow lines */}
              <div className="absolute inset-0 opacity-30">
                <svg className="w-full h-full">
                  {[...Array(5)].map((_, i) => (
                    <motion.line
                      key={i}
                      x1="0"
                      y1={`${20 + i * 20}%`}
                      x2="100%"
                      y2={`${20 + i * 20}%`}
                      stroke="rgba(139, 92, 246, 0.3)"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{
                        duration: 2,
                        delay: i * 0.1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}
                </svg>
              </div>

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-purple-400 mb-4 uppercase tracking-wider">
                    Representative Solution
                  </h3>
                  <p className="font-['Montserrat',sans-serif] text-[17px] text-[#f0f0f2] leading-[1.65]">
                    {industries[selectedIndustry].solution}
                  </p>
                </div>

                <div className="mb-8 pt-8 border-t border-white/10">
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-purple-400 mb-3 uppercase tracking-wider">
                    Cloud Capability Used
                  </h4>
                  <p className="font-['Montserrat',sans-serif] text-[15px] text-gray-400 leading-[1.6]">
                    {industries[selectedIndustry].capability}
                  </p>
                </div>

                <div className="pt-8 border-t border-white/10">
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-purple-400 mb-3 uppercase tracking-wider">
                    Business Outcome
                  </h4>
                  <div className="flex items-start gap-3">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <CircleCheck className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                    </motion.div>
                    <p className="font-['Montserrat',sans-serif] text-[15px] text-[#f0f0f2] leading-[1.6]">
                      {industries[selectedIndustry].outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 5: What Sets ACC Apart (Trust + Energy) */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
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
              Differentiation
            </p>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[40px] md:text-[52px] leading-[1.15] text-[#f0f0f2]">
              What Sets ACC Apart
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Animated connecting lines (AI logic paths) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 0 }}>
              {differentiators.map((_, i) => {
                if (i < differentiators.length - 1) {
                  return (
                    <motion.line
                      key={i}
                      x1={`${(i % 4) * 25 + 12.5}%`}
                      y1="50%"
                      x2={`${((i + 1) % 4) * 25 + 12.5}%`}
                      y2="50%"
                      stroke="rgba(139, 92, 246, 0.2)"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        ease: "easeInOut",
                      }}
                    />
                  );
                }
                return null;
              })}
            </svg>

            {differentiators.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <motion.div
                    className="relative p-8 bg-gradient-to-b from-white/[0.03] to-white/[0.01] rounded-2xl border border-white/10 backdrop-blur-sm h-full"
                    whileHover={{
                      y: -4,
                      boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Gentle glow on hover */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl bg-purple-500/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    <div className="relative z-10">
                      <div className="mb-6">
                        <div className="inline-flex p-3 rounded-xl bg-purple-500/10 border border-purple-500/20">
                          <Icon className="w-7 h-7 text-purple-400" strokeWidth={1.5} />
                        </div>
                      </div>

                      <h3 className="font-['Montserrat',sans-serif] font-semibold text-[17px] text-[#f0f0f2] mb-3 leading-[1.35]">
                        {item.title}
                      </h3>

                      <p className="font-['Montserrat',sans-serif] text-[13px] text-gray-500 leading-[1.6]">
                        {item.proof}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 6: Client Benefits (Outcome Pulse) */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a15] to-[#0a0a0f]" />

        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-purple-400 mb-4">
              Outcome-Focused
            </p>
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[40px] md:text-[52px] leading-[1.15] text-[#f0f0f2]">
              Client Benefits
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="relative flex items-start gap-4 p-6 bg-gradient-to-br from-white/[0.04] to-white/[0.01] rounded-xl border backdrop-blur-sm overflow-hidden"
                  style={{
                    borderColor: "rgba(255, 255, 255, 0.1)",
                  }}
                  whileHover={{
                    scale: 1.02,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Energy react on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent"
                    initial={{ opacity: 0, x: "-100%" }}
                    whileHover={{ opacity: 1, x: "0%" }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative z-10 flex items-start gap-4">
                    {/* Pulse indicator */}
                    <div className="relative flex-shrink-0">
                      <div className="w-2 h-2 bg-purple-400 rounded-full" />
                      <motion.div
                        className="absolute inset-0 bg-purple-400 rounded-full"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.8, 0, 0.8],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                      />
                    </div>

                    <p className="font-['Montserrat',sans-serif] text-[16px] text-[#f0f0f2] leading-[1.5]">
                      {benefit}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Final CTA (Accenture-Style Power Moment) */}
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
                cloud journey?
              </span>
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[17px] text-gray-400 mb-12 max-w-[640px] mx-auto leading-[1.7]">
              Let's discuss how we can help you modernize, secure, and scale your cloud infrastructure.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] overflow-hidden transition-all duration-300"
                onClick={onGetStartedClick}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Start your cloud journey
                  <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform" />
                </span>
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