import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Cloud,
  Database,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Globe,
  HardDrive
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

// Partner Categories
const categories = [
  { id: 'all', label: 'All Partners', icon: Globe, count: 22 },
  { id: 'security', label: 'Security', icon: Shield, count: 4 },
  { id: 'database', label: 'Database & Data', icon: Database, count: 7 },
  { id: 'cloud', label: 'Cloud & Infrastructure', icon: Cloud, count: 6 },
  { id: 'monitoring', label: 'Monitoring & Analytics', icon: BarChart3, count: 4 },
  { id: 'backup', label: 'Backup & Recovery', icon: HardDrive, count: 1 },
];

// Technology Partners Data
const technologyPartners = [
  { 
    name: 'Amazon Web Services',
    logo: 'AWS',
    category: 'cloud',
    badge: 'Advanced Tier Partner',
    badgeColor: 'bg-orange-500',
    description: 'Premier AWS Advanced Tier Partner with proven expertise in cloud migration, infrastructure optimization, and enterprise-scale deployments.',
    competencies: [
      {
        title: 'Migration Competency',
        description: 'Certified expertise in large-scale cloud migrations'
      },
      {
        title: 'DevOps Competency',
        description: 'Advanced automation and CI/CD capabilities'
      }
    ],
    achievements: [
      { text: 'AWS Advanced Tier Status' },
      { text: 'Migration Services Competency' },
      { text: '100+ Successful Migrations' },
      { text: 'Certified Solution Architects' },
    ],
  },
];

// Icon-only partners (exactly 16 from screenshot)
const iconOnlyPartners = [
  { name: 'Palo Alto Networks', logo: 'https://logo.clearbit.com/paloaltonetworks.com', category: 'security' },
  { name: 'CrowdStrike', logo: 'https://logo.clearbit.com/crowdstrike.com', category: 'security' },
  { name: 'Thales', logo: 'https://logo.clearbit.com/thalesgroup.com', category: 'security' },
  { name: 'Oracle', logo: 'https://logo.clearbit.com/oracle.com', category: 'database' },
  { name: 'MongoDB', logo: 'https://logo.clearbit.com/mongodb.com', category: 'database' },
  { name: 'PostgreSQL', logo: 'https://logo.clearbit.com/postgresql.org', category: 'database' },
  { name: 'CockroachDB', logo: 'https://logo.clearbit.com/cockroachlabs.com', category: 'database' },
  { name: 'Redis', logo: 'https://logo.clearbit.com/redis.com', category: 'database' },
  { name: 'Couchbase', logo: 'https://logo.clearbit.com/couchbase.com', category: 'database' },
  { name: 'Neo4j', logo: 'https://logo.clearbit.com/neo4j.com', category: 'database' },
  { name: 'New Relic', logo: 'https://logo.clearbit.com/newrelic.com', category: 'monitoring' },
  { name: 'Vunet', logo: 'https://logo.clearbit.com/vunetsystems.com', category: 'monitoring' },
  { name: 'Cloudera', logo: 'https://logo.clearbit.com/cloudera.com', category: 'cloud' },
  { name: 'Veeam', logo: 'https://logo.clearbit.com/veeam.com', category: 'backup' },
  { name: 'Dynatrace', logo: 'https://logo.clearbit.com/dynatrace.com', category: 'monitoring' },
  { name: 'Fortinet', logo: 'https://logo.clearbit.com/fortinet.com', category: 'security' },
];

// Platform Capabilities Data
const platformCapabilities = [
  {
    id: 'oracle',
    label: 'Oracle',
    name: 'Oracle',
    subtitle: 'Enterprise Database',
    description: 'Enterprise-grade database management and cloud applications with comprehensive features and reliability.',
    specializations: ['Enterprise Database', 'Cloud Applications', 'Data Warehousing'],
    benefits: ['Enterprise reliability', 'Comprehensive features'],
  },
  {
    id: 'jio-cloud',
    label: 'Jio Cloud',
    name: 'Jio Cloud',
    subtitle: 'Regional Cloud',
    description: "India's premier cloud platform offering comprehensive digital infrastructure with data sovereignty, regulatory compliance, and enterprise-grade security. Provides localized cloud services with global standards and cost-effective solutions tailored for Indian businesses.",
    specializations: ['Regional Cloud Services', 'Data Sovereignty', 'Digital Infrastructure'],
    benefits: ['Complete data sovereignty with Indian data centers', 'Regulatory compliance for local laws'],
  },
  {
    id: 'nutanix',
    label: 'Nutanix',
    name: 'Nutanix',
    subtitle: 'Hyperconverged Infrastructure',
    description: 'Hybrid cloud platform providing simplified operations, scalability, and comprehensive infrastructure solutions.',
    specializations: ['Hyperconverged Infrastructure', 'Hybrid Cloud', 'Simplified Operations'],
    benefits: ['Simplified operations', 'Hybrid cloud flexibility'],
  },
  {
    id: 'vmware',
    label: 'VMware',
    name: 'VMware',
    subtitle: 'Virtualization Platform',
    description: 'Industry-leading virtualization and cloud infrastructure platform with proven technology and ecosystem.',
    specializations: ['Virtualization', 'Cloud Infrastructure', 'Digital Workspace'],
    benefits: ['Proven technology', 'Comprehensive portfolio'],
  },
  {
    id: 'red-hat',
    label: 'Red Hat',
    name: 'Red Hat',
    subtitle: 'Open Source Platform',
    description: 'World\'s leading provider of enterprise open source solutions, delivering robust Linux platforms, advanced container technologies, and comprehensive automation tools. Enables organizations to build, deploy, and manage applications across hybrid and multi-cloud environments with enterprise-grade support and security.',
    specializations: ['Enterprise Linux (RHEL)', 'OpenShift Container Platform', 'Ansible Automation'],
    benefits: ['Industry-leading open source innovation', 'Enterprise-grade support and security'],
  },
  {
    id: 'speedata',
    label: 'Speedata',
    name: 'Speedata',
    subtitle: 'Data Processing',
    description: 'Advanced high-performance data processing platform specializing in ultra-low latency solutions and real-time analytics. Delivers cutting-edge hardware acceleration and specialized processing capabilities for mission-critical applications requiring microsecond-level response times and massive data throughput.',
    specializations: ['Ultra-Low Latency Processing', 'Hardware Acceleration', 'Real-time Analytics'],
    benefits: ['Microsecond-level latency performance', 'Massive data throughput capabilities'],
  },
];

// Partnership Advantages Data
const advantages = [
  {
    icon: Award,
    title: 'Certified Expertise',
    description: 'Deep technical certifications and proven competencies across all partner technologies.',
  },
  {
    icon: Zap,
    title: 'Rapid Innovation',
    description: 'Access to latest technologies and early adoption of cutting-edge solutions.',
  },
  {
    icon: Users,
    title: 'Joint Support',
    description: 'Combined support from ACC and partner teams for comprehensive solution delivery.',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Track record of successful implementations and measurable business outcomes.',
  },
];

export default function PartnersPage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick, onGetStartedClick }: { 
  onClose?: () => void;
  onServiceClick?: (serviceTitle: string) => void;
  onAIClick?: (aiPageTitle: string) => void;
  onProductClick?: (productTitle: string) => void;
  onGrowWithUsClick?: () => void;
  onWhoWeAreItemClick?: (item: string) => void;
  onLogoClick?: () => void;
  onGetStartedClick?: () => void;
}) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredPartners = activeCategory === 'all' 
    ? technologyPartners 
    : technologyPartners.filter(p => p.category === activeCategory);

  // AWS is the featured partner (shown as full card)
  const featuredPartner = technologyPartners[0]; // AWS
  
  // Filter icon partners based on category
  const filteredIconPartners = activeCategory === 'all' 
    ? iconOnlyPartners 
    : iconOnlyPartners.filter(p => p.category === activeCategory);

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
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-[16px] md:px-[40px] lg:px-[80px] py-[80px]">
          {/* Deep charcoal background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a15] via-[#0a0a0f] to-[#0a0a0f]" />

          {/* Animated mesh + particles */}
          <MeshGradient />
          <ParticleField />

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

          <div className="relative max-w-[1280px] mx-auto w-full z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Hero Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-block mb-6">
                  <div className="px-6 py-3 rounded-full bg-purple-500/15 border border-purple-400/40 backdrop-blur-sm">
                    <span className="font-['Montserrat:Bold',sans-serif] text-[11px] md:text-[12px] text-purple-300 uppercase tracking-[0.15em]">
                      OUR ECOSYSTEM
                    </span>
                  </div>
                </div>

                <h1 className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] mb-6 text-white">
                  Technology Partners{" "}
                  <span className="bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#7c3aed] bg-clip-text text-transparent">
                    Ecosystem
                  </span>
                </h1>

                <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] mb-8">
                  Collaborating with industry leaders to deliver comprehensive cloud solutions. Our extensive partner ecosystem ensures best-in-class technology integration and innovation.
                </p>

                <button 
                  onClick={onGetStartedClick}
                  className="group px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg"
                >
                  <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-black">
                    Explore Solutions
                  </span>
                  <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>

              {/* Right: Stats Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { value: '21+', label: 'Technology Partners' },
                  { value: '100+', label: 'Joint implementations' },
                  { value: '99.9%', label: 'Solution Reliability' },
                  { value: '24/7', label: 'Partner Support' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    className="p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                  >
                    <div className="font-['Montserrat:ExtraBold',sans-serif] text-[32px] md:text-[40px] text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="font-['Montserrat:Medium',sans-serif] text-[13px] text-white/50 leading-[1.4]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Category Filter Section */}
        <section className="relative py-[40px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent z-10"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />

          <div className="relative max-w-[1280px] mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                const isActive = activeCategory === category.id;
                
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`group px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? 'bg-purple-600 border-purple-500 shadow-lg shadow-purple-500/30'
                        : 'bg-white/5 border-white/10 hover:border-purple-500/50 hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-white/60'}`} />
                    <span className={`font-['Montserrat:SemiBold',sans-serif] text-[14px] ${
                      isActive ? 'text-white' : 'text-white/60'
                    }`}>
                      {category.label}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Partners Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Featured Partner
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                Our premier technology partnership delivering comprehensive cloud solutions
              </p>
            </motion.div>

            {/* AWS Featured Partner Card - Only show if category is 'all' or 'cloud' */}
            {(activeCategory === 'all' || activeCategory === 'cloud') && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="group p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/50 backdrop-blur-sm transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Partner Info */}
                  <div className="flex-1">
                    {/* Logo and Badge */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 rounded-[12px] bg-white/10 border border-white/20 flex items-center justify-center">
                          <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-white">
                            {featuredPartner.logo}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[22px] text-white leading-[1.2]">
                            {featuredPartner.name}
                          </h3>
                          <div className={`inline-block mt-2 px-3 py-1 rounded-full ${featuredPartner.badgeColor}`}>
                            <span className="font-['Montserrat:SemiBold',sans-serif] text-[11px] text-white uppercase tracking-wider">
                              {featuredPartner.badge}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/70 leading-[1.6] mb-6">
                      {featuredPartner.description}
                    </p>

                    {/* Competencies - Two boxes side by side */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {featuredPartner.competencies && featuredPartner.competencies.map((comp, idx) => (
                        <div key={idx} className="p-4 rounded-[12px] bg-white/5 border border-white/10">
                          <h4 className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-white mb-2">
                            {comp.title}
                          </h4>
                          <p className="font-['Montserrat:Regular',sans-serif] text-[12px] text-white/60 leading-[1.5]">
                            {comp.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Key Achievements */}
                  {featuredPartner.achievements && featuredPartner.achievements.length > 0 && (
                    <div className="lg:w-[320px]">
                      <div className="p-6 rounded-[16px] bg-white/5 border border-white/10 h-full">
                        <h4 className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-purple-400 mb-4 uppercase tracking-wider">
                          Key Achievements
                        </h4>
                        <div className="space-y-3">
                          {featuredPartner.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                              <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/70 leading-[1.5]">
                                {achievement.text}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* All Partners Section (Icon-only) */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] text-white mb-4 leading-[1.2]">
                All Partners
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                Comprehensive partner ecosystem for comprehensive technology solutions
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {filteredIconPartners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="p-6 rounded-[16px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.05] flex items-center justify-center text-center min-h-[100px]"
                >
                  <span className="font-['Montserrat:SemiBold',sans-serif] text-[13px] text-white/90 leading-[1.3]">
                    {partner.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Capabilities Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent z-10"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Platform Capabilities
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                Enterprise-grade platforms and infrastructure solutions for comprehensive cloud transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformCapabilities.map((platform, index) => (
                <motion.div
                  key={platform.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02] flex flex-col"
                >
                  {/* Header with label */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 rounded-md bg-white/10 border border-white/20">
                      <span className="font-['Montserrat:SemiBold',sans-serif] text-[11px] text-white/70">
                        {platform.label}
                      </span>
                    </div>
                  </div>

                  {/* Title and Subtitle */}
                  <div className="mb-4">
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[22px] text-white leading-[1.2] mb-1">
                      {platform.name}
                    </h3>
                    <p className="font-['Montserrat:SemiBold',sans-serif] text-[13px] text-purple-400">
                      {platform.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/60 leading-[1.6] mb-6">
                    {platform.description}
                  </p>

                  {/* Specializations */}
                  <div className="mb-6">
                    <h4 className="font-['Montserrat:Bold',sans-serif] text-[13px] text-white mb-3">
                      Specializations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {platform.specializations.map((spec, idx) => (
                        <div 
                          key={idx}
                          className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
                        >
                          <span className="font-['Montserrat:Medium',sans-serif] text-[11px] text-white/80">
                            {spec}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Benefits */}
                  <div className="mt-auto">
                    <h4 className="font-['Montserrat:Bold',sans-serif] text-[13px] text-white mb-3">
                      Key Benefits
                    </h4>
                    <div className="space-y-2">
                      {platform.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span className="font-['Montserrat:Regular',sans-serif] text-[12px] text-white/70 leading-[1.5]">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Advantages Section */}
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
                Partnership Advantages
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                Our strategic partnerships deliver exceptional value and innovation for every business need
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advantages.map((advantage, index) => {
                const Icon = advantage.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.05]"
                  >
                    <div className="w-14 h-14 bg-purple-600/20 border border-purple-500/30 rounded-[16px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-3 leading-[1.2]">
                      {advantage.title}
                    </h3>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 leading-[1.6]">
                      {advantage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
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
                Ready to Leverage Our{" "}
                <span className="text-purple-500">Partner Ecosystem</span>?
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] mb-8">
                Discover how our technology partnerships can accelerate your digital transformation journey.
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
      <div className="relative z-[1200]">
        <Footer />
      </div>
    </div>
  );
}