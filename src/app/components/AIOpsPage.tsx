import React from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle,
  Brain,
  Cpu,
  Zap,
  TrendingUp,
  Activity,
  BarChart3,
  Shield,
  AlertTriangle,
  Eye,
  Settings,
  Workflow,
  Bot,
  Database,
  Cloud,
  Lock,
  GitBranch,
  Clock
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

export default function AIOpsPage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick, onGetStartedClick }: { 
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
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden px-[16px] md:px-[40px] lg:px-[80px] py-[80px]">
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

          <div className="relative max-w-[900px] mx-auto w-full text-center z-10">
            {/* Cloud Practice Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-6 md:mb-8"
            >
              <div className="px-6 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                <span className="font-['Montserrat:SemiBold',sans-serif] text-[11px] md:text-[12px] text-purple-300 uppercase tracking-[0.1em]">
                  AI PLATFORM
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[48px] lg:text-[64px] leading-[1.1] mb-6 text-white"
            >
              AI Ops Platform
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/70 leading-[1.7] max-w-[700px] mx-auto px-4"
            >
              Transform your AWS operations with AI-powered monitoring, proactive incident detection, and intelligent automation. Minimize human intervention while maximizing operational efficiency.
            </motion.p>
          </div>
        </section>

        {/* AI-Enhanced AWS Operations Section */}
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
                AI-Enhanced AWS Operations
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7] max-w-[900px] mx-auto">
                When you migrate your workloads to AWS, you can take advantage of various AWS monitoring services that are enhanced with AI and machine learning (ML) capabilities. Although traditional monitoring through Amazon CloudWatch events, alarms, and AWS Config Rules provides foundational insights, the integration of ML techniques elevates operational intelligence to new levels.


              </p>
            </motion.div>
          </div>
        </section>

        {/* The Convergence of AI and IT Operations Section */}
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
                The Convergence of AI and IT Operations
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7] max-w-[900px] mx-auto">
                Amazon CloudWatch investigations represents the convergence of AI and IT operations, designed to minimize human intervention in operational processes. Amazon DevOps Guru provides proactive incident detection and recommendations to help prevent potential issues before they impact your systems.
                <br /><br />
                Amazon CloudWatch anomaly detection uses ML algorithms to analyze historical metric patterns to detect unusual behavior in your AWS resources.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: BarChart3,
                  title: 'ML Analytics',
                  description: 'Advanced pattern recognition'
                },
                {
                  icon: AlertTriangle,
                  title: 'Proactive Alerts',
                  description: 'Prevent issues before impact'
                },
                {
                  icon: Zap,
                  title: 'Automation',
                  description: 'Minimal human intervention'
                },
                {
                  icon: TrendingUp,
                  title: 'Optimization',
                  description: 'Continuous improvement'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-6 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
                >
                  {/* Icon - left aligned */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-[12px] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Title - left aligned */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-2 leading-[1.4]">
                    {item.title}
                  </h3>
                  {/* Description - left aligned */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/70 leading-[1.7]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Three Key Dimensions Section */}
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
                Three Key Dimensions
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                AI operations (AIOps) services enhance operational capabilities through three key dimensions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: BarChart3,
                  title: 'Service Quality Improvements',
                  subtitle: '',
                  description: 'Advanced metric correlation and pattern analysis with automated alerting systems',
                  features: [
                    'Advanced metric correlation and pattern analysis',
                    'Automated alerting and notification system implementation',
                    'Seamless integration with incident management systems'
                  ]
                },
                {
                  icon: Zap,
                  title: 'Proactive Operations',
                  subtitle: '',
                  description: 'ML-driven anomaly detection with continuous performance monitoring',
                  features: [
                    'ML-driven anomaly detection',
                    'Continuous performance metric tracking and trending',
                    'Real-time monitoring and alerting'
                  ]
                },
                {
                  icon: Shield,
                  title: 'Enhanced Operational Insights',
                  subtitle: '',
                  description: 'Comprehensive resource analysis with automated issue detection',
                  features: [
                    'Resource performance analysis',
                    'Application behavior tracking',
                    'Automated issue detection and classification'
                  ]
                }
              ].map((dimension, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-[16px] flex items-center justify-center mb-4">
                    <dimension.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[24px] text-white mb-3 leading-[1.2]">
                    {dimension.title}
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 mb-6 leading-[1.6]">
                    {dimension.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {dimension.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/70 leading-[1.6]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AWS Services Integration Section */}
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
                AWS Services Integration
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Seamlessly integrate with core AWS services enhanced with AI and ML capabilities
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: Cloud,
                  title: 'Amazon CloudWatch',
                  description: 'Enhanced monitoring with AI-powered investigations and anomaly detection',
                  tags: ['Metric Analysis', 'Automated Alerting', 'Historical Pattern Recognition']
                },
                {
                  icon: Brain,
                  title: 'Amazon DevOps Guru',
                  description: 'Proactive incident detection with ML-powered recommendations',
                  tags: ['Incident Prevention', 'Performance Insights', 'Automated Recommendations']
                },
                {
                  icon: Settings,
                  title: 'AWS Config',
                  description: 'Configuration monitoring and compliance tracking with intelligent rules',
                  tags: ['Configuration Tracking', 'Compliance Monitoring', 'Change Detection']
                },
                {
                  icon: GitBranch,
                  title: 'AWS CloudFormation',
                  description: 'Infrastructure as Code with intelligent deployment patterns',
                  tags: ['Template Management', 'Stack Monitoring', 'Drift Detection']
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300 text-center"
                >
                  {/* Icon - centered */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-[12px] flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Title - centered */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-3 leading-[1.4]">
                    {service.title}
                  </h3>
                  
                  {/* Description - centered */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/70 leading-[1.7] mb-6">
                    {service.description}
                  </p>
                  
                  {/* Tags - centered */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white/[0.05] border border-white/10 rounded-full font-['Montserrat:Medium',sans-serif] text-[12px] text-white/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Transform Your Operations Section */}
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
                Transform Your Operations
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Achieve measurable improvements in operational efficiency and service reliability
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Clock,
                  title: 'Reduced MTTR',
                  description: 'Minimize mean time to resolution through AI-powered root cause analysis'
                },
                {
                  icon: TrendingUp,
                  title: 'Proactive Operations',
                  description: 'Move from reactive to proactive operations management with predictive insights'
                },
                {
                  icon: Shield,
                  title: 'Enhanced Reliability',
                  description: 'Improve overall service reliability through data-driven operational practices'
                },
                {
                  icon: Zap,
                  title: 'Operational Efficiency',
                  description: 'Achieve more efficient operations with reduced human intervention'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-6 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
                >
                  {/* Icon - left aligned */}
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-[12px] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  {/* Title - left aligned */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-2 leading-[1.4]">
                    {item.title}
                  </h3>
                  {/* Description - left aligned */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/70 leading-[1.7]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advanced Technical Capabilities Section */}
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
                Advanced Technical Capabilities
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Our AIOps platform leverages cutting-edge AI and ML technologies to provide comprehensive operational intelligence and automation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                'Advanced metric correlation and pattern analysis',
                'ML-driven anomaly detection algorithms',
                'Continuous performance metric tracking',
                'Real-time monitoring and alerting systems',
                'Automated incident management integration',
                'Resource performance optimization',
                'Application behavior analytics',
                'Predictive failure analysis',
                'Intelligent alert correlation',
                'Automated remediation workflows'
              ].map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                  className="flex items-start gap-3 p-5 rounded-[16px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                >
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <span className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/80 leading-[1.6]">
                    {capability}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Approach Section */}
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
                Implementation Approach
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Settings,
                  title: 'Assessment & Planning',
                  description: 'Analyze current operations and identify optimization opportunities'
                },
                {
                  icon: Workflow,
                  title: 'AI/ML Integration',
                  description: 'Deploy advanced analytics and machine learning models'
                },
                {
                  icon: TrendingUp,
                  title: 'Automation & Optimization',
                  description: 'Implement automated workflows and continuous improvement'
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                      <span className="font-['Montserrat:Bold',sans-serif] text-[18px] text-white">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-3 leading-[1.4]">
                    {step.title}
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/70 leading-[1.7]">
                    {step.description}
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
          <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-black to-black" />
          
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative max-w-[900px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-6 leading-[1.2]">
                Ready to accelerate your <span className="text-purple-500">cloud journey</span>?
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] mb-8">
                Move from reactive to proactive operations management with our AI-powered platform. Achieve more efficient operations and improved service reliability.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onGetStartedClick}
                  className="group px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-black">
                    Start your cloud journey
                  </span>
                  <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="relative z-[1200]">
        <Footer />
      </div>
    </div>
  );
}