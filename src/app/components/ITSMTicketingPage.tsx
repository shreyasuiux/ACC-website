import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle, 
  Cloud,
  Layers,
  Activity,
  FileText,
  Settings,
  Users,
  TrendingUp,
  Zap,
  Shield,
  GitBranch,
  Clock,
  AlertCircle,
  Wrench,
  Package,
  Headphones,
  ServerCog
} from 'lucide-react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';

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

// Feature Card component with image hover animation
const UseCaseCard = ({ useCase, index }: { useCase: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="relative group cursor-pointer rounded-[24px] overflow-hidden"
      style={{ height: '380px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image - fills entire card */}
      <motion.img
        alt={useCase.title}
        className="w-full h-full object-cover"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        src={useCase.image}
        animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      {/* Purple overlay */}
      <div className="absolute inset-0 bg-purple-900 opacity-30 rounded-[24px]" />
      
      {/* Gradient overlay */}
      <div 
        className="absolute inset-0 rounded-[24px]" 
        style={{ backgroundImage: "linear-gradient(-47.516deg, rgba(0, 0, 0, 0) 1.7008%, rgba(2, 1, 3, 0.6) 52.798%)" }} 
      />

      {/* Icon */}
      <div className="absolute left-[24px] top-[24px] z-10">
        <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-[16px] flex items-center justify-center">
          <useCase.icon className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Title */}
      <h3 className="absolute left-[24px] top-[96px] font-['Montserrat:Bold',sans-serif] text-[20px] text-white w-[calc(100%-48px)] z-10 leading-[1.3]">
        {useCase.title}
      </h3>

      {/* Description - slides in on hover */}
      <motion.div
        className="absolute left-[24px] top-[160px] w-[calc(100%-48px)] z-10"
        initial={{ x: 320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: 320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/90 leading-[1.6] mb-4">
          {useCase.description}
        </p>
      </motion.div>

      {/* Tags - visible by default at bottom */}
      <div className="absolute left-[24px] bottom-[24px] right-[24px] z-10 flex flex-wrap gap-2">
        {useCase.tags.map((tag: string, idx: number) => (
          <span
            key={idx}
            className="px-4 py-2 bg-purple-600/20 border border-purple-500/30 rounded-full font-['Montserrat:Medium',sans-serif] text-[12px] md:text-[13px] text-purple-300 backdrop-blur-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function ITSMTicketingPage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick, onGetStartedClick }: { 
  onClose?: () => void;
  onServiceClick?: (serviceTitle: string) => void;
  onAIClick?: (aiPageTitle: string) => void;
  onProductClick?: (productTitle: string) => void;
  onGrowWithUsClick?: () => void;
  onWhoWeAreItemClick?: (item: string) => void;
  onLogoClick?: () => void;
  onGetStartedClick?: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[1100] overflow-y-auto bg-black">
      {/* Navigation Header */}
      <div className="relative z-[1200]">
        <Nav 
          onServiceClick={onServiceClick || (() => {})} 
          onAIClick={onAIClick || (() => {})} 
          onProductClick={onProductClick || (() => {})} 
          onGrowWithUsClick={onGrowWithUsClick || (() => {})} 
          onWhoWeAreItemClick={onWhoWeAreItemClick || (() => {})}
          onLogoClick={onLogoClick}
        />
        <MobileNav 
          onServiceClick={onServiceClick || (() => {})} 
          onAIClick={onAIClick || (() => {})} 
          onProductClick={onProductClick || (() => {})} 
          onGrowWithUsClick={onGrowWithUsClick || (() => {})} 
          onWhoWeAreItemClick={onWhoWeAreItemClick || (() => {})}
          onLogoClick={onLogoClick}
        />
      </div>

      <div className="w-full bg-black pt-[92px]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-[16px] md:px-[40px] lg:px-[80px] py-[80px] overflow-hidden">
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

          <div className="relative max-w-[900px] mx-auto w-full z-10">
            <div className="text-center">
              {/* ITSM Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6 border border-white/10"
              >
                <span className="font-['Montserrat:Medium',sans-serif] text-[13px] text-white/90">
                  ITSM
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] mb-6 text-white"
              >
                Ticketing Tool
              </motion.h1>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-8 max-w-[700px] mx-auto"
              >
                <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/70 leading-[1.7] mb-3">
                  Cloud-based IT Service Management for Modern Operations.
                </p>
                <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/70 leading-[1.7]">
                  Automate ticket workflows, SLA tracking, and team collaboration in one unified platform.
                </p>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center"
              >
                <button 
                  onClick={onGetStartedClick}
                  className="group px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-black">
                    Request a Demo
                  </span>
                  <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>

              {/* Performance Metrics */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-[60px] md:mt-[80px] grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1000px] mx-auto"
              >
                {[
                  { metric: '99.9%', label: 'Uptime SLA' },
                  { metric: '<2min', label: 'Avg Response Time' },
                  { metric: '80%', label: 'Faster Resolution' },
                  { metric: '24/7', label: 'Support Coverage' }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="p-6 md:p-8 rounded-[20px] bg-white/[0.05] backdrop-blur-md border border-white/10 text-center"
                  >
                    <div className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] text-white mb-2 leading-[1.1]">
                      {item.metric}
                    </div>
                    <div className="font-['Montserrat:Regular',sans-serif] text-[12px] md:text-[14px] text-white/60">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Key Features
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7] max-w-[800px] mx-auto">
                Purpose-built cloud-native ITSM platform with enterprise-grade capabilities and intuitive user experience
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Cloud-Native Architecture',
                },
                {
                  title: 'Simple, OS-Like Ticketing',
                },
                {
                  title: 'Multi-Tenant Hosting',
                },
                {
                  title: 'End-to-End ITSM Workflows',
                },
                {
                  title: 'Self-Service Portal',
                },
                {
                  title: 'Automation & Integrations',
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300 text-center"
                >
                  <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[16px] md:text-[18px] text-white leading-[1.4]">
                    {feature.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Cloud-Native Architecture Detail Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-[800px] mb-12"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] text-white mb-4 leading-[1.2]">
                Cloud-Native Architecture
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Designed for scalability, flexibility, and performance—deploy in AWS, Azure, or private clouds with complete control.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Key Capabilities */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 backdrop-blur-sm"
              >
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-6">
                  Key Capabilities
                </h3>
                <ul className="space-y-4">
                  {[
                    'Multi-cloud deployment support',
                    'Auto-scaling infrastructure',
                    'Microservices architecture',
                    'Container-ready deployment',
                    'High availability design',
                    'Disaster recovery built-in'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/80 leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-8 rounded-[24px] bg-gradient-to-br from-purple-600/20 to-purple-900/20 border border-purple-500/30 backdrop-blur-sm"
              >
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-8">
                  Key Benefits
                </h3>
                <div className="space-y-8">
                  {[
                    { value: '99.9%', label: 'uptime' },
                    { value: 'Infinite', label: 'scalability' },
                    { value: 'Cloud', label: 'flexibility' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-baseline gap-3">
                      <div className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] text-purple-400 leading-[1.1]">
                        {item.value}
                      </div>
                      <div className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/70">
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* End-to-End ITSM Workflows Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                End-to-End ITSM Workflows
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7] max-w-[800px] mx-auto">
                Comprehensive workflow management from incident detection to resolution
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Incident Management */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
              >
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[24px] text-white mb-2 leading-[1.2]">
                  Incident Management
                </h3>
                <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-[#b3b3ba] leading-[1.6] mb-8">
                  Rapid incident detection, classification, and resolution
                </p>
                
                <div className="grid grid-cols-2 md:flex md:justify-between items-start gap-4 md:gap-3">
                  {[
                    { num: 1, label: 'Auto-detection' },
                    { num: 2, label: 'Smart routing' },
                    { num: 3, label: 'Escalation' },
                    { num: 4, label: 'Resolution' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center flex-1">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-3">
                        <span className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white">
                          {step.num}
                        </span>
                      </div>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[11px] md:text-[13px] text-white/80 leading-[1.4]">
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Problem Management */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
              >
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[24px] text-white mb-2 leading-[1.2]">
                  Problem Management
                </h3>
                <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-[#b3b3ba] leading-[1.6] mb-8">
                  Root cause analysis and permanent problem resolution
                </p>
                
                <div className="grid grid-cols-2 md:flex md:justify-between items-start gap-4 md:gap-3">
                  {[
                    { num: 1, label: 'Investigation' },
                    { num: 2, label: 'Analysis' },
                    { num: 3, label: 'Solution' },
                    { num: 4, label: 'Prevention' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center flex-1">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-3">
                        <span className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white">
                          {step.num}
                        </span>
                      </div>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[11px] md:text-[13px] text-white/80 leading-[1.4]">
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Change Management */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
              >
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[24px] text-white mb-2 leading-[1.2]">
                  Change Management
                </h3>
                <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-[#b3b3ba] leading-[1.6] mb-8">
                  Controlled change implementation with approval workflows
                </p>
                
                <div className="grid grid-cols-2 md:flex md:justify-between items-start gap-4 md:gap-3">
                  {[
                    { num: 1, label: 'Request' },
                    { num: 2, label: 'Approval' },
                    { num: 3, label: 'Implementation' },
                    { num: 4, label: 'Review' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center flex-1">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-3">
                        <span className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white">
                          {step.num}
                        </span>
                      </div>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[11px] md:text-[13px] text-white/80 leading-[1.4]">
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Service Requests */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
              >
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[24px] text-white mb-2 leading-[1.2]">
                  Service Requests
                </h3>
                <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-[#b3b3ba] leading-[1.6] mb-8">
                  Standardized service delivery with automated fulfillment
                </p>
                
                <div className="grid grid-cols-2 md:flex md:justify-between items-start gap-4 md:gap-3">
                  {[
                    { num: 1, label: 'Request' },
                    { num: 2, label: 'Validation' },
                    { num: 3, label: 'Fulfillment' },
                    { num: 4, label: 'Closure' }
                  ].map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center flex-1">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-3">
                        <span className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white">
                          {step.num}
                        </span>
                      </div>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[11px] md:text-[13px] text-white/80 leading-[1.4]">
                        {step.label}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Use Cases
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Versatile ITSM platform for diverse industry requirements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  title: 'Cloud Infrastructure Ticketing',
                  description: 'Manage cloud infrastructure incidents, changes, and service requests across AWS, Azure, and GCP environments.',
                  tags: ['Cloud Native', 'Multi-Cloud', 'Auto-Scaling'],
                  image: 'https://images.unsplash.com/photo-1667984390553-7f439e6ae401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwc2VydmVyfGVufDF8fHx8MTc2Nzk1NDU2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                  icon: Cloud
                },
                {
                  title: 'SPFX Service Management',
                  description: 'Streamline SharePoint Framework (SPFX) deployment, maintenance, and support ticketing for enterprise collaboration.',
                  tags: ['SharePoint', 'SPFX', 'Enterprise'],
                  image: 'https://images.unsplash.com/photo-1761818645915-260598d569a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyZXBvaW50JTIwY29sbGFib3JhdGlvbiUyMG9mZmljZXxlbnwxfHx8fDE3Njc5NTQ1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                  icon: Layers
                },
                {
                  title: 'Enterprise IT Helpdesk',
                  description: 'Complete IT support desk solution with automated workflows, SLA management, and knowledge base integration.',
                  tags: ['Help Desk', 'SLA Management', 'Automation'],
                  image: 'https://images.unsplash.com/photo-1653212883731-4d5bc66e0181?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJVCUyMGhlbHBkZXNrJTIwc3VwcG9ydHxlbnwxfHx8fDE3Njc5NTQ1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                  icon: Headphones
                },
                {
                  title: 'Managed Services Operations',
                  description: 'End-to-end ticketing for managed service providers with multi-tenant support and client portals.',
                  tags: ['MSP', 'Multi-Tenant', 'Client Portal'],
                  image: 'https://images.unsplash.com/photo-1605152276897-4f618f831968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW5hZ2VkJTIwc2VydmljZXMlMjBvcGVyYXRpb25zfGVufDF8fHx8MTc2Nzk1NDU2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                  icon: ServerCog
                }
              ].map((useCase, index) => (
                <UseCaseCard key={index} useCase={useCase} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Why ACC ITSM Tool Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Why ACC ITSM Tool?
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Next-generation ticketing solution with measurable business impact
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: '90% lighter',
                  subtitle: 'Lightweight Alternative',
                  description: 'Lightweight alternative to bulky ITSM suites without compromising functionality'
                },
                {
                  title: 'Multi-cloud',
                  subtitle: 'Cloud-First Design',
                  description: 'Cloud-first and client-hosted for flexibility and compliance requirements'
                },
                {
                  title: '10x faster',
                  subtitle: 'Faster Deployment',
                  description: 'Faster deployment and easier customization compared to legacy solutions'
                },
                {
                  title: '60% savings',
                  subtitle: 'Cost-Effective',
                  description: 'Cost-effective, scalable, and future-ready ITSM solution'
                },
                {
                  title: 'Bank-grade',
                  subtitle: 'Enterprise Security',
                  description: 'Enterprise-grade security with compliance and audit capabilities'
                },
                {
                  title: '95% adoption',
                  subtitle: 'User Adoption',
                  description: 'High user adoption rate due to intuitive OS-like interface'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300 text-center"
                >
                  <div className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[36px] text-purple-400 mb-2 leading-[1.1]">
                    {item.title}
                  </div>
                  <div className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-3">
                    {item.subtitle}
                  </div>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-[#b3b3ba] leading-[1.7]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Next-Generation ITSM Solution Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Next-Generation ITSM Solution
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Simple, cloud-native, and client-controlled—giving enterprises agility without complexity
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              {[
                {
                  title: 'Simple & Agile',
                  description: 'Lightweight alternative to complex legacy ITSM suites'
                },
                {
                  title: 'Cloud-Native',
                  description: 'Built for modern cloud infrastructure and operations'
                },
                {
                  title: 'Client-Controlled',
                  description: 'Full control over data, hosting, and customization'
                },
                {
                  title: 'Future-Ready',
                  description: 'Scalable architecture for growing business needs'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-3 leading-[1.4]">
                    {item.title}
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-[#b3b3ba] leading-[1.7]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          {/* Dark Background with Purple Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black" />

          <div className="relative max-w-[900px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-6 leading-[1.2]">
                Ready to Transform Your IT Operations?
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/70 leading-[1.7] mb-8">
                Experience the next-generation ITSM solution that combines simplicity, scalability, and complete control for modern IT operations.


              </p>

              <div className="flex justify-center">
                <button 
                  onClick={onGetStartedClick}
                  className="group px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-black">
                    Contact Sales
                  </span>
                  <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}