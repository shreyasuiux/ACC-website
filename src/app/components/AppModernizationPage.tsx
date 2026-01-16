import React from "react";
import { motion } from "motion/react";
import {
  RefreshCw,
  Code,
  Database,
  Boxes,
  CloudCog,
  Settings,
  TrendingUp,
  CheckCircle2,
  FileCode,
  Layers,
  Zap,
  Shield,
  Target,
  ArrowRight,
  Gauge,
  Users,
  Award,
  Clock
} from "lucide-react";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { GradientCTAButton } from "./GradientCTAButton";
import { Footer } from "./Footer";
import { CTASection } from "./CTASection";

interface AppModernizationPageProps {
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

export function AppModernizationPage({
  onClose,
  onServiceClick,
  onAIClick,
  onProductClick,
  onGrowWithUsClick,
  onWhoWeAreItemClick,
  onLogoClick,
  onGetStartedClick
}: AppModernizationPageProps) {

  // Modernization Services
  const modernizationServices = [
    {
      title: "Platform Re-platforming",
      icon: RefreshCw,
      description: "Migrate applications to modern cloud platforms with enhanced scalability and performance.",
      color: "purple"
    },
    {
      title: ".NET to Java Migration",
      icon: Code,
      description: "Seamless migration from .NET framework to Java ecosystem with minimal business disruption.",
      color: "purple"
    },
    {
      title: "Oracle to PostgreSQL",
      icon: Database,
      description: "Database modernization from Oracle to PostgreSQL for cost optimization and flexibility.",
      color: "purple"
    },
    {
      title: "Monolith to Microservices",
      icon: Boxes,
      description: "Break down monolithic applications into scalable, maintainable microservices architecture.",
      color: "purple"
    },
    {
      title: "Cloud-Native Refactoring",
      icon: CloudCog,
      description: "Transform legacy applications to leverage cloud-native capabilities and services.",
      color: "purple"
    },
    {
      title: "Legacy System Modernization",
      icon: Settings,
      description: "Modernize legacy systems while maintaining data integrity and business continuity.",
      color: "purple"
    }
  ];

  // Transformation Benefits
  const transformationBenefits = [
    "Improved Performance & Scalability",
    "Reduced Infrastructure Costs",
    "Enhanced Security & Compliance",
    "Better Developer Productivity",
    "Faster Time-to-Market",
    "Increased System Reliability"
  ];

  // Why Modernize Benefits
  const whyModernizeBenefits = [
    {
      title: "Legacy Challenges",
      description: "High operational costs, Security vulnerabilities, and limited scalability"
    },
    {
      title: "Cloud-native architecture",
      description: "Improved security, and streamlined frameworks"
    },
    {
      title: "Business Impact",
      description: "Cost reduction, increased agility, and competitive advantage"
    }
  ];

  // Modernization Process Steps
  const modernizationProcess = [
    {
      title: "Assessment & Planning",
      icon: FileCode,
      description: "Comprehensive analysis of existing applications and create a clear, realistic modernization roadmap"
    },
    {
      title: "Architecture Design",
      icon: Layers,
      description: "Define modern architecture patterns and technology stack based on your needs"
    },
    {
      title: "Migration & Development",
      icon: Code,
      description: "Execute phased migration with continuous testing and validation"
    },
    {
      title: "Testing & Optimization",
      icon: Zap,
      description: "Rigorous testing for performance optimization and quality assurance"
    },
    {
      title: "Deployment & Support",
      icon: Target,
      description: "Smooth production deployment with ongoing support and continuous improvement"
    }
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
      </div>

      {/* Hero Section */}
      <section className="relative pt-[140px] md:pt-[180px] pb-[80px] md:pb-[120px] overflow-hidden bg-gradient-to-b from-purple-900/20 via-purple-900/10 to-transparent">
        <ParticleField />
        <MeshGradient />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6"
            >
              <RefreshCw className="w-4 h-4 text-purple-400" />
              <span className="font-['Montserrat',sans-serif] text-purple-400 text-[13px] font-medium tracking-wide">
                Application Modernization
              </span>
            </motion.div>

            <h1 className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] text-white mb-6">
              Transform Legacy Applications
            </h1>
            
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[17px] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-10 max-w-3xl mx-auto">
              Transform legacy applications into agile, scalable, and cloud-native solutions that drive business growth and innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Modernization Services */}
      <section className="py-[80px] md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-white mb-6 leading-[1.2]">
              Modernization Services
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.7]">
              Comprehensive application modernization services to transform your legacy systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {modernizationServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[20px] p-6 md:p-8 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
              >
                {/* Icon */}
                <div className={`w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${
                  service.color === 'purple' ? 'from-purple-500/20 to-violet-500/10 border-purple-500/30' :
                  'from-pink-500/20 to-purple-500/10 border-pink-500/30'
                } border flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <service.icon className={`w-7 h-7 md:w-8 md:h-8 ${
                    service.color === 'purple' ? 'text-purple-400' :
                    'text-pink-400'
                  }`} />
                </div>

                {/* Title */}
                <h3 className="font-['Montserrat',sans-serif] font-bold text-[18px] md:text-[19px] text-white mb-4 leading-[1.3]">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.65]">
                  {service.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-[20px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: '0 0 40px rgba(139, 92, 246, 0.15), inset 0 0 60px rgba(139, 92, 246, 0.05)'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transformation Benefits */}
      <section className="py-[80px] md:py-[120px] bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {/* Left Column - Transformation Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-white mb-4 leading-[1.2]">
                Transformation Benefits
              </h2>
              <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-[rgba(255,255,255,0.7)] mb-8 leading-[1.7]">
                Modernize your legacy applications to improve performance, reduce costs, and accelerate innovation.
              </p>

              <div className="space-y-4">
                {transformationBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/30 to-violet-500/20 border border-purple-500/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-purple-400" />
                    </div>
                    <span className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-white leading-[1.6]">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Why Modernize */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[28px] text-white mb-8 leading-[1.2]">
                Why Modernize?
              </h3>

              <div className="space-y-6">
                {whyModernizeBenefits.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[16px] p-5 md:p-6 hover:border-purple-500/30 transition-all duration-300"
                  >
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[17px] text-purple-400 mb-2">
                      {item.title}
                    </h4>
                    <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Modernization Process */}
      <section className="py-[80px] md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-white mb-6 leading-[1.2]">
              Our Modernization Process
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.7]">
              Proven methodology for successful application modernization with minimal business disruption
            </p>
          </motion.div>

          {/* Process Steps - Desktop: Horizontal, Mobile: Vertical */}
          <div className="relative">
            {/* Connection Line - Desktop only */}
            <div className="hidden lg:block absolute top-[32px] left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500/20 via-purple-500/40 to-purple-500/20" style={{ top: '32px' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-4">
              {modernizationProcess.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Step Card */}
                  <div className="relative z-10 text-center">
                    {/* Icon Circle */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-16 h-16 mx-auto mb-5 rounded-full bg-gradient-to-br from-purple-600 to-violet-600 border-4 border-[#0a0a0f] flex items-center justify-center shadow-lg shadow-purple-500/30"
                    >
                      <step.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    {/* Step Number Badge */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-6 h-6 rounded-full bg-purple-500 border-2 border-[#0a0a0f] flex items-center justify-center">
                      <span className="font-['Montserrat',sans-serif] text-[11px] font-bold text-white">
                        {index + 1}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-['Montserrat',sans-serif] font-bold text-[16px] md:text-[17px] text-white mb-3 leading-[1.3]">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="font-['Montserrat',sans-serif] text-[12px] md:text-[13px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Modernize Your Applications?"
        description="Transform your legacy systems with our proven modernization approach. Let's discuss how we can help accelerate your digital transformation."
        primaryButtonText="Get Started"
        variant="dark"
        onPrimaryClick={onGetStartedClick}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}