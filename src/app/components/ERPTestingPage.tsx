import React from "react";
import { motion } from "motion/react";
import {
  Settings,
  Cloud,
  Zap,
  Network,
  TestTube,
  Database,
  CheckCircle,
  Code,
  Shield,
  Layers,
  GitBranch,
  FileCode,
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Award
} from "lucide-react";
import { heroImage } from "../../assets/images";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { Footer } from "./Footer";

interface ERPTestingPageProps {
  onClose: () => void;
  onServiceClick: (serviceTitle: string) => void;
  onAIClick: () => void;
  onProductClick: (productName: string) => void;
  onGrowWithUsClick: (section: string) => void;
  onWhoWeAreItemClick: (itemTitle: string) => void;
  onLogoClick: () => void;
  onGetStartedClick?: () => void;
}

export function ERPTestingPage({
  onClose,
  onServiceClick,
  onAIClick,
  onProductClick,
  onGrowWithUsClick,
  onWhoWeAreItemClick,
  onLogoClick,
  onGetStartedClick
}: ERPTestingPageProps) {
  const [activeTab, setActiveTab] = React.useState<'erp' | 'testing'>('erp');

  return (
    <div className="fixed inset-0 z-[1100] bg-[#0a0a0f] overflow-y-auto text-white">
      {/* Navigation */}
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
        {/* Background Gradient Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6">
                <span className="font-['Montserrat',sans-serif] text-[12px] md:text-[13px] text-purple-300 font-semibold tracking-wide">
                  ERP & Testing Services
                </span>
              </div>

              <h1 className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[48px] leading-[1.1] mb-6">
                Enterprise ERP Implementation & Comprehensive Testing Solutions
              </h1>

              <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-8">
                Transform your business with strategic ERP implementation and ensure quality through comprehensive testing services. From digital transformation to performance optimization, we deliver end-to-end solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={onGetStartedClick}
                  className="group px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
                >
                  Get ERP Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* Right Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-purple-500/10 to-violet-600/5 border border-purple-500/20 rounded-[24px] p-8 md:p-10 backdrop-blur-sm">
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-purple-400/50">
                    <path d="M10 18C10 12.477 14.477 8 20 8V12C16.686 12 14 14.686 14 18V20H20V32H8V18H10ZM30 18C30 12.477 34.477 8 40 8V12C36.686 12 34 14.686 34 18V20H40V32H28V18H30Z" fill="currentColor" opacity="0.3"/>
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] text-white leading-[1.7] mb-8">
                  ACC's expertise in PeopleSoft support helped us ensure seamless operations for one of our key clients. Their proactive monitoring, quick issue resolution, and reliable 24×7 model gave us the confidence to deliver uninterrupted services.
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/30 to-violet-500/20 border border-purple-400/30 flex items-center justify-center">
                    <Users className="w-6 h-6 text-purple-300" />
                  </div>
                  <div>
                    <div className="font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] text-white">
                      Delivery Head
                    </div>
                    <div className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-purple-300">
                      Leading IT Services Company
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive ERP & Testing Solutions */}
      <section className="py-[80px] md:py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[36px] mb-4">
              Comprehensive ERP & Testing Solutions
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] max-w-[800px] mx-auto leading-[1.7] mb-8">
              From strategic ERP implementation to comprehensive testing services, we provide end-to-end solutions that drive digital transformation and ensure system reliability.
            </p>

            {/* Tab Buttons */}
            <div className="flex justify-center gap-4 mb-16">
              <button
                onClick={() => setActiveTab('erp')}
                className={`px-6 py-3 rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'erp'
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10'
                }`}
              >
                <Settings className="w-4 h-4" />
                ERP Services
              </button>
              <button
                onClick={() => setActiveTab('testing')}
                className={`px-6 py-3 rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'testing'
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10'
                }`}
              >
                <TestTube className="w-4 h-4" />
                Testing Services
              </button>
            </div>
          </motion.div>

          {/* Tab Content */}
          {activeTab === 'erp' ? (
            // ERP Implementation & Modernization
            <motion.div
              key="erp"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[24px] p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-[12px] bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Settings className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-[22px] md:text-[24px] mb-2">
                    ERP Implementation & Modernization
                  </h3>
                  <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.6]">
                    Comprehensive ERP solutions that embrace digital transformation, modernize business processes, and drive organizational growth through strategic implementation and optimization.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                {/* Key Features */}
                <div>
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[17px] mb-6">
                    Key Features
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Implementation and Global Rollout',
                      'Modernizing Business Processes',
                      'Upgrade and Migration Services',
                      'Support and Maintenance',
                      'Cloud Migration and Optimization',
                      'Integration Services',
                      'Agile Implementation Methodology',
                      'Post-Implementation Flexibility'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.8)] leading-[1.6]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Implementation Approach */}
                <div>
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[17px] mb-6">
                    Implementation Approach
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Lean Implementation Team',
                      'Inclusive Implementation Approach',
                      'Prioritizing Business Needs',
                      'Mitigating Implementation Risks',
                      'Controlling Implementation Costs',
                      'Driving Business Growth & Adaptability'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Zap className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.8)] leading-[1.6]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits & Platforms */}
                <div>
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[17px] mb-6">
                    Key Benefits
                  </h4>
                  <div className="space-y-3 mb-8">
                    {[
                      'Digital Transformation',
                      'Process Modernization',
                      'Cost Control',
                      'Business Growth'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.8)] leading-[1.6]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[17px] mb-4">
                    Supported Platforms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['SAP', 'Oracle ERP', 'Microsoft Dynamics', 'Workday', 'NetSuite', 'Salesforce'].map((platform, idx) => (
                      <div key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md">
                        <span className="font-['Montserrat',sans-serif] text-[12px] text-white/80 font-medium">
                          {platform}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            // Comprehensive Testing Services
            <motion.div
              key="testing"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[24px] p-8 md:p-10"
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-14 h-14 rounded-[12px] bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <TestTube className="w-7 h-7 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-[22px] md:text-[24px] mb-2">
                    Comprehensive Testing Services
                  </h3>
                  <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.6]">
                    End-to-end testing solutions ensuring quality, reliability, and performance across all business applications and systems with specialized focus on ERP and enterprise platforms.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                {/* Key Features */}
                <div>
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[17px] mb-6">
                    Key Features
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Functional & E2E Business Process Testing',
                      'Integration & Middleware Testing',
                      'Data Migration & Reconciliation Testing',
                      'Non-Functional (NFR) Testing',
                      'Performance and Load Testing',
                      'Security and Compliance Testing',
                      'Automated Testing Framework',
                      'Continuous Testing Integration'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.8)] leading-[1.6]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testing Types */}
                <div>
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[17px] mb-6">
                    Testing Types
                  </h4>
                  <div className="space-y-3">
                    {[
                      'Functional Testing',
                      'Integration Testing',
                      'Performance Testing',
                      'Security Testing',
                      'Data Validation',
                      'User Acceptance Testing',
                      'Regression Testing',
                      'API Testing'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Zap className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.8)] leading-[1.6]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Benefits & Technologies */}
                <div>
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[17px] mb-6">
                    Key Benefits
                  </h4>
                  <div className="space-y-3 mb-8">
                    {[
                      'Quality Assurance',
                      'Risk Mitigation',
                      'Performance Optimization',
                      'Compliance Validation'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                        <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.8)] leading-[1.6]">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>

                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[17px] mb-4">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Selenium', 'TestComplete', 'LoadRunner', 'JMeter', 'Postman', 'Cypress'].map((tech, idx) => (
                      <div key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-md">
                        <span className="font-['Montserrat',sans-serif] text-[12px] text-white/80 font-medium">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Complete Service Offerings */}
      <section className="py-[80px] md:py-[120px] relative">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[36px] mb-4">
              Complete Service Offerings
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] max-w-[800px] mx-auto leading-[1.7]">
              Complete range of ERP and testing services designed to support end-to-end digital transformation journey. From implementation to optimization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Settings,
                title: "ERP Implementation",
                description: "End-to-end ERP implementation with global rollout capabilities and process modernization",
                badge: "IMPLEMENTATION",
                image: "https://images.unsplash.com/flagged/photo-1553267252-d100936057c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwYnVzaW5lc3MlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzY5MzUyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: Cloud,
                title: "Cloud Migration",
                description: "Seamless migration of ERP systems to cloud platforms with optimization and integration",
                badge: "CLOUD",
                image: "https://images.unsplash.com/photo-1744868562210-fffb7fa882d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGNvbXB1dGluZyUyMHNlcnZlcnxlbnwxfHx8fDE3Njc1OTk4ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: Zap,
                title: "System Upgrades",
                description: "Comprehensive ERP upgrades and modernization with minimal business disruption",
                badge: "UPGRADES",
                image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMGNvZGUlMjBzY3JlZW58ZW58MXx8fHwxNzY3NjE5NDY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: Network,
                title: "Integration Services",
                description: "Complex system integration and middleware solutions for enterprise connectivity",
                badge: "INTEGRATION",
                image: "https://images.unsplash.com/photo-1749006590475-4592a5dbf99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwY29ubmVjdGlvbiUyMGludGVncmF0aW9ufGVufDF8fHx8MTc2NzYxNDAwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: TestTube,
                title: "Testing Services",
                description: "Comprehensive testing including functional, integration, and performance validation",
                badge: "TESTING",
                image: "https://images.unsplash.com/photo-1754039985001-ccafee437736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGlja3klMjBub3RlcyUyMHBsYW5uaW5nJTIwd29ya2Zsb3d8ZW58MXx8fHwxNzY3NjkzNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: Database,
                title: "Data Migration",
                description: "Secure data migration and reconciliation with quality assurance and validation",
                badge: "DATA MIGRATION",
                image: "https://images.unsplash.com/photo-1746014601552-4ed3d01da7e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBwaG9uZSUyMGRhdGF8ZW58MXx8fHwxNzY3NjkzNDM3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[20px] overflow-hidden group hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Image with Badge Overlay */}
                <div className="relative h-[220px] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60" />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="px-3 py-1.5 bg-purple-600 rounded-full backdrop-blur-sm">
                      <span className="font-['Montserrat',sans-serif] text-[11px] text-white font-bold tracking-wide">
                        {service.badge}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-[10px] bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-purple-400" />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose ACC for ERP & Testing */}
      <section className="py-[80px] md:py-[120px] relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent" />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[36px] mb-4">
              Why Choose ACC for ERP & Testing?
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] max-w-[800px] mx-auto leading-[1.7]">
              Our proven methodology and comprehensive approach ensure successful ERP implementations and reliable testing outcomes.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Target,
                title: "Strategic Implementation",
                description: "Comprehensive approach to ERP implementation focusing on business transformation and process optimization."
              },
              {
                icon: Zap,
                title: "Agile Methodology",
                description: "Lean implementation teams using agile methodologies for faster delivery and reduced risks."
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description: "Rigorous testing protocols ensuring system reliability, performance, and compliance standards."
              },
              {
                icon: Award,
                title: "Inclusive Approach",
                description: "Collaborative implementation involving all stakeholders for maximum adoption and success."
              }
            ].map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[20px] p-6 md:p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Icon - left aligned */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center mb-6">
                  <benefit.icon className="w-8 h-8 text-purple-400" />
                </div>

                {/* Title - left aligned */}
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-3">
                  {benefit.title}
                </h3>

                {/* Description - left aligned */}
                <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[80px] md:py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0a0a0f] to-[#0a0a0f]" />
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: "radial-gradient(ellipse at left, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
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
        </div>

        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[36px] mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] max-w-[700px] mx-auto leading-[1.7] mb-10">
              Let's discuss how our ERP implementation and testing solutions will drive your digital transformation
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={onGetStartedClick}
                className="group px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
              >
                Start Project Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}