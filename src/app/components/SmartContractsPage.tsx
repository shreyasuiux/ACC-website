import React from 'react';
import { motion } from 'motion/react';
import { 
  FileCode,
  CheckCircle,
  ArrowRight,
  Shield,
  Zap,
  Users,
  Globe,
  Lock,
  TrendingUp,
  Clock,
  DollarSign,
  FileCheck,
  Settings,
  Code,
  GitBranch,
  Target,
  BarChart3,
  Workflow,
  Eye
} from 'lucide-react';
import { Footer } from './Footer';
import { Nav } from '../../imports/Desktop72';
import { useState } from 'react';

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
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => {
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
        alt={feature.title}
        className="w-full h-full object-cover"
        style={{ 
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover'
        }}
        src={feature.image}
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
          <feature.icon className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Title */}
      <h3 className="absolute left-[24px] top-[96px] font-['Montserrat:Bold',sans-serif] text-[20px] text-white w-[calc(100%-48px)] z-10 leading-[1.3]">
        {feature.title}
      </h3>

      {/* Description - slides in on hover */}
      <motion.div
        className="absolute left-[24px] top-[160px] w-[calc(100%-48px)] z-10"
        initial={{ x: 320, opacity: 0 }}
        animate={isHovered ? { x: 0, opacity: 1 } : { x: 320, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/90 leading-[1.6]">
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default function SmartContractsPage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick, onGetStartedClick }: { 
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
      </div>

      <div className="w-full bg-black pt-[92px]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-[16px] md:px-[40px] lg:px-[80px] py-[80px] md:py-[120px]">
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

          <div className="relative max-w-[1000px] mx-auto w-full text-center z-10">
            {/* Blockchain Solutions Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-8"
            >
              <div className="px-6 py-3 rounded-full bg-purple-500/15 border border-purple-400/40 backdrop-blur-sm">
                <span className="font-['Montserrat:Bold',sans-serif] text-[11px] md:text-[12px] text-purple-300 uppercase tracking-[0.15em]">
                  BLOCKCHAIN SOLUTIONS
                </span>
              </div>
            </motion.div>

            {/* Title - matching reference layout */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-['Montserrat:SemiBold',sans-serif] text-[42px] md:text-[56px] lg:text-[72px] leading-[1.1] mb-6 text-white"
            >
              Automated Digital <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#7c3aed] bg-clip-text text-transparent">
                Agreements
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Montserrat:Medium',sans-serif] text-[15px] md:text-[17px] text-white/60 leading-[1.7] mb-10 max-w-[780px] mx-auto"
            >
              Transform your business processes with secure, transparent, and self-executing smart contracts that eliminate intermediaries and automate complex agreements.
            </motion.p>
          </div>
        </section>

        {/* Smart Contract Features Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent z-10"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
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
                Smart Contract Features
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Powerful features for building the future of digital agreements
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'Security First',
                  description: 'Built-in security protocols and audit trails ensure your contracts are tamper-proof and transparent.',
                  image: 'https://images.unsplash.com/photo-1754039984985-ef607d80113a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RlJTIwc2VjdXJpdHklMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjgyMTAzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                },
                {
                  icon: Zap,
                  title: 'Automated Execution',
                  description: 'Self-executing contracts with terms directly written into code, eliminating intermediaries.',
                  image: 'https://images.unsplash.com/photo-1604403428907-673e7f4cd341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwY29kZSUyMGV4ZWN1dGlvbnxlbnwxfHx8fDE3NjgyMTAzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                },
                {
                  icon: FileCheck,
                  title: 'Immutable Records',
                  description: 'Once deployed, smart contracts cannot be altered, ensuring trust and reliability.',
                  image: 'https://images.unsplash.com/photo-1660836814985-8523a0d713b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwaW1tdXRhYmxlJTIwbGVkZ2VyfGVufDF8fHx8MTc2ODIxMDM1MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                },
                {
                  icon: Globe,
                  title: 'Global Accessibility',
                  description: 'Deploy contracts on multiple blockchain networks for worldwide accessibility.',
                  image: 'https://images.unsplash.com/photo-1684610527413-66eec7828690?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBuZXR3b3JrJTIwYmxvY2tjaGFpbnxlbnwxfHx8fDE3NjgyMTAzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                },
                {
                  icon: Code,
                  title: 'Custom Development',
                  description: 'Tailored smart contract solutions built to meet your specific business requirements.',
                  image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nfGVufDF8fHx8MTc2ODEzMTU5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                },
                {
                  icon: Users,
                  title: 'Multi-Party Agreements',
                  description: 'Support for complex multi-party contracts with automated dispute resolution.',
                  image: 'https://images.unsplash.com/photo-1601509876296-aba16d4c10a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODE4MDA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
                }
              ].map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Industry Use Cases Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent z-10"
            style={{ boxShadow: '0 0 10px rgba(168, 85, 247, 0.5)' }}
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
                Industry Use Cases
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Smart contracts are revolutionizing industries by automating complex processes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Supply Chain Management',
                  description: 'Track products from origin to consumer with transparent, immutable records.',
                  features: [
                    'Product authenticity',
                    'Reduced fraud',
                    'Automated payments'
                  ]
                },
                {
                  title: 'Financial Services',
                  description: 'Automate lending, insurance claims, and payment processing with smart contracts.',
                  features: [
                    'Faster settlements',
                    'Reduced costs',
                    'Transparent processes'
                  ]
                },
                {
                  title: 'Real Estate',
                  description: 'Streamline property transactions with automated escrow and title transfers.',
                  features: [
                    'Reduced paperwork',
                    'Faster closings',
                    'Lower fees'
                  ]
                },
                {
                  title: 'Healthcare',
                  description: 'Secure patient data sharing and automated insurance claim processing.',
                  features: [
                    'Data privacy',
                    'Automated claims',
                    'Audit trails'
                  ]
                }
              ].map((useCase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
                >
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[24px] text-white mb-3 leading-[1.2]">
                    {useCase.title}
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 mb-6 leading-[1.6]">
                    {useCase.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {useCase.features.map((feature, idx) => (
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

        {/* Why Choose Smart Contracts Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent z-10"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-6 leading-[1.2]">
                  Why Choose Smart Contracts?
                </h2>
                <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/70 leading-[1.7] mb-8">
                  Smart contracts offer unprecedented automation, security, and efficiency for your business processes.
                </p>

                <div className="space-y-4">
                  {[
                    'Eliminate intermediaries and reduce costs',
                    'Automate complex business processes',
                    'Ensure transparency and trust',
                    'Reduce processing time from days to minutes',
                    'Minimize human error and disputes',
                    'Enable 24/7 automated operations'
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                      <span className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/80 leading-[1.6]">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Stats */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {[
                  {
                    value: '95%',
                    label: 'Cost Reduction',
                    icon: DollarSign
                  },
                  {
                    value: '10x',
                    label: 'Faster Processing',
                    icon: Zap
                  },
                  {
                    value: '99.9%',
                    label: 'Accuracy Rate',
                    icon: Target
                  }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="p-6 rounded-[24px] bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/30 text-center"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-[12px] flex items-center justify-center mb-4 mx-auto">
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/70">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Development Process Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent z-10"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
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
                Development Process
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                Our systematic approach to building robust smart contracts
              </p>
            </motion.div>

            {/* Process Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: '01',
                  icon: Target,
                  title: 'Requirements Analysis',
                  description: 'Define business logic and contract specifications'
                },
                {
                  step: '02',
                  icon: Code,
                  title: 'Smart Contract Development',
                  description: 'Code development using Solidity or other platforms'
                },
                {
                  step: '03',
                  icon: Shield,
                  title: 'Security Auditing',
                  description: 'Comprehensive security testing and vulnerability assessment'
                },
                {
                  step: '04',
                  icon: Workflow,
                  title: 'Deployment & Monitoring',
                  description: 'Launch on blockchain with ongoing monitoring'
                }
              ].map((process, idx) => {
                const Icon = process.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group relative p-8 bg-gradient-to-br from-purple-950/30 to-black/50 border border-purple-500/20 hover:border-purple-400/40 rounded-2xl transition-all duration-300"
                  >
                    <div className="text-purple-500/30 font-['Montserrat:Bold',sans-serif] text-[48px] leading-none mb-4">
                      {process.step}
                    </div>
                    <Icon className="w-8 h-8 text-purple-400 mb-4" />
                    <h3 className="font-['Montserrat:SemiBold',sans-serif] text-[18px] text-white mb-3 leading-[1.3]">
                      {process.title}
                    </h3>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 leading-[1.6]">
                      {process.description}
                    </p>
                  </motion.div>
                );
              })}
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
                Ready to Automate Your <span className="text-purple-500">Agreements</span>?
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] mb-8">
                Transform your business processes with secure, transparent smart contracts. Let's discuss how we can help you implement automated digital agreements.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onGetStartedClick}
                  className="group px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-black">
                    Get Started Today
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