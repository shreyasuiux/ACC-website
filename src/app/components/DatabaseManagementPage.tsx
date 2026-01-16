import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Database,
  Shield,
  Zap,
  CheckCircle2,
  ArrowRight,
  Server,
  Lock,
  Activity,
  Settings,
  Cloud,
  BarChart3,
  Users,
  Award,
  TrendingUp,
  AlertCircle,
  FileText,
  Globe,
  Clock
} from "lucide-react";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { GradientCTAButton } from "./GradientCTAButton";
import { Footer } from "./Footer";
import { CTASection } from "./CTASection";

// Database Management Page Component
interface DatabaseManagementPageProps {
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

export function DatabaseManagementPage({
  onClose,
  onServiceClick,
  onAIClick,
  onProductClick,
  onGrowWithUsClick,
  onWhoWeAreItemClick,
  onLogoClick,
  onGetStartedClick
}: DatabaseManagementPageProps) {
  const [activeServiceTab, setActiveServiceTab] = useState("oracle");

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
        <ParticleField />
        <MeshGradient />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block mb-6"
              >
                <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-violet-500/20 border border-purple-500/30 rounded-full backdrop-blur-sm">
                  <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-purple-300 font-medium">
                    Database Management Services
                  </span>
                </div>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[48px] leading-[1.1] mb-6"
              >
                Expert Management of Critical Database Systems
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-8"
              >
                Comprehensive managed services for Oracle, Couchbase, Neo4j, and CockroachDB databases, ensuring optimal performance, security, and availability with enterprise-grade support and monitoring.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button 
                  onClick={onGetStartedClick}
                  className="group px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[14px] md:text-[15px] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Get Database Assessment
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>

            {/* Right Column - Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 rounded-[24px] p-8 md:p-10 backdrop-blur-sm relative"
            >
              {/* Quote Icon */}
              <div className="text-purple-400/40 mb-6">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor">
                  <path d="M9.333 14.667c1.84 0 3.334 1.493 3.334 3.333s-1.494 3.333-3.334 3.333S6 19.84 6 18c0-4.418 3.582-8 8-8v2.667c-2.946 0-5.333 2.387-5.333 5.333 0 .368.035.727.102 1.074a4.66 4.66 0 011.564-.407zm10.667 0c1.84 0 3.333 1.493 3.333 3.333S21.84 21.333 20 21.333 16.667 19.84 16.667 18c0-4.418 3.582-8 8-8v2.667c-2.946 0-5.334 2.387-5.334 5.333 0 .368.035.727.102 1.074a4.66 4.66 0 011.565-.407z"/>
                </svg>
              </div>

              <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-white leading-[1.8] mb-6">
                Migrating from Oracle to PostgreSQL with ACC was a game-changer for us. What we feared would be a complex, high-risk project turned into a seamless transition, thanks to their expertise and disciplined execution. ACC's team not only reduced our licensing and infrastructure costs significantly but also modernized our data environment for scalability and performance. Their hands-on approach, honesty, and never-give-up attitude gave us confidence at every stage. Today, we run business-critical workloads on PostgreSQL with complete reliability — and the credit goes to ACC for making this journey smooth, efficient, and future-ready.
              </p>

              <div className="font-['Montserrat',sans-serif] text-[13px] text-purple-300 font-medium">
                — Leading Indian Asset Management Company
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Database Management Section */}
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
              Comprehensive Database Management
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] max-w-[800px] mx-auto leading-[1.7]">
              From traditional Oracle databases to modern NoSQL Couchbase solutions, we provide expert management services that ensure your critical data systems operate at peak performance.
            </p>
          </motion.div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 relative z-10">
            {[
              { id: "oracle", label: "Oracle Services", icon: Database },
              { id: "couchbase", label: "Couchbase Services", icon: Database },
              { id: "neo4j", label: "Neo4j Services", icon: Database },
              { id: "cockroachdb", label: "CockroachDB Services", icon: Database }
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setActiveServiceTab(tab.id);
                }}
                className={`px-4 md:px-6 py-3 rounded-full font-['Montserrat',sans-serif] font-medium text-[13px] md:text-[14px] transition-all duration-300 flex items-center gap-2 cursor-pointer relative z-10 ${
                  activeServiceTab === tab.id
                    ? "bg-purple-600 text-white"
                    : "bg-white/[0.05] border border-white/10 text-white/70 hover:bg-white/[0.08]"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content with AnimatePresence */}
          <AnimatePresence mode="wait">
            {/* Oracle Managed Services Tab */}
            {activeServiceTab === "oracle" && (
              <motion.div
                key="oracle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[24px] p-6 md:p-10"
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Main Content - 9 columns */}
                <div className="lg:col-span-9">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat',sans-serif] font-bold text-[22px] md:text-[26px] text-white mb-2">
                        Oracle Managed Services
                      </h3>
                      <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                        Comprehensive managed services for Oracle databases, ensuring optimal performance, security, and availability with enterprise-grade support and monitoring.
                      </p>
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        "Oracle Database Administration (DBA) services",
                        "Performance tuning and optimization",
                        "Backup and disaster recovery management",
                        "Security hardening and compliance",
                        "Patch management and upgrades",
                        "High availability and clustering setup",
                        "24/7 monitoring and alerting",
                        "Capacity planning and scaling"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-4">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Oracle Database",
                        "Oracle RAC",
                        "Oracle Data Guard",
                        "Oracle GoldenGate",
                        "Oracle Enterprise Manager",
                        "RMAN"
                      ].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-300 font-['Montserrat',sans-serif] text-[11px] md:text-[12px] font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Performance Metrics:
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { value: "99.9%", label: "Database Uptime" },
                        { value: "40%", label: "Performance Improvement" },
                        { value: "35%", label: "Cost Reduction" },
                        { value: "<15min", label: "Response Time" }
                      ].map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-[16px] p-4 text-center"
                        >
                          <div className="font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[28px] text-purple-400 mb-1">
                            {metric.value}
                          </div>
                          <div className="font-['Montserrat',sans-serif] text-[11px] md:text-[12px] text-[rgba(255,255,255,0.6)]">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Common Use Cases */}
                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Common Use Cases:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        "Enterprise Resource Planning (ERP) systems",
                        "Customer Relationship Management (CRM)",
                        "Financial and banking applications",
                        "Supply chain management systems",
                        "Business intelligence and analytics",
                        "E-commerce platforms"
                      ].map((useCase, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)]">
                            {useCase}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar - Key Benefits - 3 columns */}
                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-[20px] p-6 sticky top-24">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Key Benefits:
                    </h4>
                    <div className="space-y-4">
                      {[
                        "99.9% Uptime SLA",
                        "24/7 Expert Support",
                        "Cost Optimization",
                        "Security Compliance"
                      ].map((benefit, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-r from-purple-500/15 to-violet-500/10 border border-purple-500/30 rounded-[12px] px-4 py-3 text-center"
                        >
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

            {/* Couchbase Managed Services Tab */}
            {activeServiceTab === "couchbase" && (
              <motion.div
                key="couchbase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[24px] p-6 md:p-10"
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-9">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat',sans-serif] font-bold text-[22px] md:text-[26px] text-white mb-2">
                        Couchbase Managed Services
                      </h3>
                      <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                        Expert management of Couchbase NoSQL databases, delivering high-performance, scalable, and flexible data solutions for modern applications.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        "Couchbase cluster management and optimization",
                        "Multi-dimensional scaling (MDS) configuration",
                        "Cross datacenter replication (XDCR) setup",
                        "Full-text search and analytics integration",
                        "Mobile and edge synchronization",
                        "Memory and storage optimization",
                        "Security and access control management",
                        "Application integration and SDK support"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-4">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Couchbase Server", "Couchbase Mobile", "Couchbase Lite", "Sync Gateway", "N1QL", "FTS"].map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-300 font-['Montserrat',sans-serif] text-[11px] md:text-[12px] font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Performance Metrics:
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { value: "<1ms", label: "Query Performance" },
                        { value: "1M+ ops/sec", label: "Scalability" },
                        { value: "99.99%", label: "Availability" },
                        { value: "Real-time", label: "Data Sync Speed" }
                      ].map((metric, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-[16px] p-4 text-center">
                          <div className="font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[28px] text-purple-400 mb-1">
                            {metric.value}
                          </div>
                          <div className="font-['Montserrat',sans-serif] text-[11px] md:text-[12px] text-[rgba(255,255,255,0.6)]">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Common Use Cases:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        "Real-time personalization engines",
                        "Content management systems",
                        "Gaming and social applications",
                        "IoT and sensor data processing",
                        "Mobile application backends",
                        "Session and catalog management"
                      ].map((useCase, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)]">
                            {useCase}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-[20px] p-6 sticky top-24">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Key Benefits:
                    </h4>
                    <div className="space-y-4">
                      {["Sub-millisecond Performance", "Elastic Scalability", "Multi-cloud Deployment", "Built-in Caching"].map((benefit, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-purple-500/15 to-violet-500/10 border border-purple-500/30 rounded-[12px] px-4 py-3 text-center">
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

            {/* Neo4j Graph Database Services Tab */}
            {activeServiceTab === "neo4j" && (
              <motion.div
                key="neo4j"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[24px] p-6 md:p-10"
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-9">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <Globe className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat',sans-serif] font-bold text-[22px] md:text-[26px] text-white mb-2">
                        Neo4j Graph Database Services
                      </h3>
                      <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                        Expert management of Neo4j graph databases, enabling powerful relationship-based analytics and real-time recommendations for connected data scenarios.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        "Neo4j cluster setup and management",
                        "Graph data modeling and optimization",
                        "Cypher query optimization and tuning",
                        "Real-time graph analytics implementation",
                        "Graph algorithms and machine learning integration",
                        "Multi-database and federation setup",
                        "Security and access control configuration",
                        "Performance monitoring and scaling"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-4">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["Neo4j Database", "Cypher Query Language", "Graph Data Science", "Neo4j Bloom", "APOC", "GraphQL"].map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-300 font-['Montserrat',sans-serif] text-[11px] md:text-[12px] font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Performance Metrics:
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { value: "10x Faster", label: "Query Performance" },
                        { value: "Millions/sec", label: "Relationship Traversal" },
                        { value: "Billions", label: "Data Connections" },
                        { value: "<100ms", label: "Real-time Analytics" }
                      ].map((metric, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-[16px] p-4 text-center">
                          <div className="font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[28px] text-purple-400 mb-1">
                            {metric.value}
                          </div>
                          <div className="font-['Montserrat',sans-serif] text-[11px] md:text-[12px] text-[rgba(255,255,255,0.6)]">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Common Use Cases:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        "Fraud detection and prevention",
                        "Real-time recommendation engines",
                        "Network and IT operations",
                        "Knowledge graphs and semantic search",
                        "Social network analysis",
                        "Supply chain optimization"
                      ].map((useCase, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)]">
                            {useCase}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-[20px] p-6 sticky top-24">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Key Benefits:
                    </h4>
                    <div className="space-y-4">
                      {["Real-time Insights", "Connected Data Analytics", "Fraud Detection", "Recommendation Engines"].map((benefit, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-purple-500/15 to-violet-500/10 border border-purple-500/30 rounded-[12px] px-4 py-3 text-center">
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

            {/* CockroachDB Distributed SQL Services Tab */}
            {activeServiceTab === "cockroachdb" && (
              <motion.div
                key="cockroachdb"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[24px] p-6 md:p-10"
              >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-9">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-['Montserrat',sans-serif] font-bold text-[22px] md:text-[26px] text-white mb-2">
                        CockroachDB Distributed SQL Services
                      </h3>
                      <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                        Comprehensive management of CockroachDB distributed SQL databases, providing global consistency, horizontal scaling, and cloud-native resilience.
                      </p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        "CockroachDB cluster deployment and management",
                        "Multi-region setup and geo-partitioning",
                        "Horizontal scaling and load balancing",
                        "ACID transactions and consistency management",
                        "Backup and disaster recovery automation",
                        "Performance monitoring and optimization",
                        "Security and encryption configuration",
                        "Migration from traditional SQL databases"
                      ].map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-4">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {["CockroachDB", "PostgreSQL Wire Protocol", "Kubernetes", "Raft Consensus", "SQL", "JDBC/ODBC"].map((tech, idx) => (
                        <span key={idx} className="px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 rounded-lg text-purple-300 font-['Montserrat',sans-serif] text-[11px] md:text-[12px] font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Performance Metrics:
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { value: "99.999%", label: "Availability" },
                        { value: "<50ms", label: "Global Latency" },
                        { value: "Unlimited", label: "Horizontal Scale" },
                        { value: "ACID", label: "Data Consistency" }
                      ].map((metric, idx) => (
                        <div key={idx} className="bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-[16px] p-4 text-center">
                          <div className="font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[28px] text-purple-400 mb-1">
                            {metric.value}
                          </div>
                          <div className="font-['Montserrat',sans-serif] text-[11px] md:text-[12px] text-[rgba(255,255,255,0.6)]">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Common Use Cases:
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                      {[
                        "Global financial applications",
                        "Multi-region e-commerce platforms",
                        "Real-time gaming and leaderboards",
                        "IoT data collection and analytics",
                        "Distributed microservices architectures",
                        "Compliance and audit systems"
                      ].map((useCase, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)]">
                            {useCase}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-[20px] p-6 sticky top-24">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-6">
                      Key Benefits:
                    </h4>
                    <div className="space-y-4">
                      {["Global Consistency", "Horizontal Scaling", "Zero Downtime", "Cloud-Native Architecture"].map((benefit, idx) => (
                        <div key={idx} className="bg-gradient-to-r from-purple-500/15 to-violet-500/10 border border-purple-500/30 rounded-[12px] px-4 py-3 text-center">
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-white font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Complete Database Management Services */}
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
              Complete Database Management Services
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] max-w-[800px] mx-auto leading-[1.7]">
              Our comprehensive approach covers every aspect of database management, from initial setup to ongoing optimization and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: Settings,
                title: "Database Administration",
                description: "Complete DBA services including installation, configuration, and ongoing management",
                badge: "DBA SERVICES",
                image: "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMHNlcnZlciUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzY3Njg0MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: BarChart3,
                title: "Performance Optimization",
                description: "Continuous monitoring and tuning for optimal database performance",
                badge: "PERFORMANCE",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJmb3JtYW5jZSUyMG1vbml0b3JpbmclMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY3Njg0MzkzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: Shield,
                title: "Security & Compliance",
                description: "Enterprise-grade security implementation and regulatory compliance",
                badge: "SECURITY",
                image: "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2VjdXJpdHklMjBlbmNyeXB0aW9ufGVufDF8fHx8MTc2NzY4NDM5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: Globe,
                title: "Disaster Recovery",
                description: "Comprehensive backup strategies and disaster recovery planning",
                badge: "DISASTER RECOVERY",
                image: "https://images.unsplash.com/photo-1587401048173-456fe247f0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlY292ZXJ5JTIwYmFja3VwJTIwc2VydmVyfGVufDF8fHx8MTc2NzY4NjYwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: Users,
                title: "Migration Services",
                description: "Seamless database migration and modernization services",
                badge: "MIGRATION",
                image: "https://images.unsplash.com/photo-1568716353609-12ddc5c67f04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMGNvZGUlMjBkYXRhYmFzZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTY4MjA0NDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              },
              {
                icon: Zap,
                title: "Scaling & Optimization",
                description: "Elastic scaling and resource optimization for growing workloads",
                badge: "SCALING",
                image: "https://images.unsplash.com/photo-1763568258586-da55ea292766?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBvcHRpbWl6YXRpb24lMjBkZXZlbG9wZXIlMjBzY3JlZW58ZW58MXx8fHwxNjgyMDQ0MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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

      {/* Why Choose ACC Database Management */}
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
              Why Choose ACC Database Management?
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] max-w-[900px] mx-auto leading-[1.7]">
              Our database management services combine deep technical expertise with proven methodologies to deliver exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: Award,
                title: "Expert Management",
                description: "Certified database administrators with deep expertise in Oracle and Couchbase technologies."
              },
              {
                icon: Zap,
                title: "High Performance",
                description: "Optimized configurations and tuning for maximum database performance and efficiency."
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Comprehensive security measures including encryption, access controls, and compliance."
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Round-the-clock monitoring, support, and maintenance for critical database systems."
              }
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-[16px] bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-6">
                  <reason.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-3">
                  {reason.title}
                </h3>
                <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proven Database Management Excellence - Stats Section */}
      <section className="py-[80px] md:py-[120px] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-violet-900/10 to-fuchsia-900/20" />
        <ParticleField />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left - Stats */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[36px] mb-8">
                Proven Database Management Excellence
              </h2>
              <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-12">
                Our database management services have helped organizations achieve exceptional performance, reliability, and cost efficiency across their critical data systems.
              </p>

              <div className="grid grid-cols-2 gap-6 md:gap-8">
                {[
                  { value: "1000+", label: "Databases Managed" },
                  { value: "99.9%", label: "Uptime Achieved" },
                  { value: "40%", label: "Performance Improvement" },
                  { value: "35%", label: "Cost Reduction" }
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-center bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 rounded-[16px] p-6"
                  >
                    <div className="font-['Montserrat',sans-serif] font-bold text-[32px] md:text-[40px] text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-purple-300">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right - Management Highlights */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[24px] p-6 md:p-8 self-start h-fit"
            >
              <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] md:text-[24px] text-white mb-6">
                Management Highlights
              </h3>
              <ul className="space-y-4">
                {[
                  "24/7 proactive monitoring and alerting systems",
                  "Expert DBA team with Oracle and Couchbase certifications",
                  "Automated backup and disaster recovery solutions",
                  "Performance optimization and capacity planning",
                  "Enterprise security and compliance management"
                ].map((highlight, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                    <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)] leading-[1.6]">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Optimize Your Database Performance?"
        description="Let our database experts help you achieve maximum performance, reliability, and cost efficiency. Get a comprehensive database assessment and discover optimization opportunities."
        primaryButtonText="Get Database Assessment"
        onPrimaryClick={onGetStartedClick}
      />

      {/* Footer */}
      <Footer
        onServiceClick={onServiceClick}
        onAIClick={onAIClick}
        onProductClick={onProductClick}
        onGrowWithUsClick={onGrowWithUsClick}
        onWhoWeAreItemClick={onWhoWeAreItemClick}
      />
    </div>
  );
}