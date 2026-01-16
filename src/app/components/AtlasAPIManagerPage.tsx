import React, { useEffect, useState } from 'react';
import { X, ArrowRight, Shield, Zap, Activity, Lock, Eye, FileText, GitBranch, Users, Server, Cloud, CheckCircle2, AlertTriangle, BarChart3, Globe, Settings, Code, Database, Network, Workflow, FileCode, Gauge, Clock, Target, Layers, Package, Box, Key, DollarSign, BarChart2, TrendingUp, Hexagon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';

interface AtlasAPIManagerPageProps {
  onClose: () => void;
  onServiceClick: (serviceTitle: string) => void;
  onAIClick: (aiPageTitle: string) => void;
  onProductClick: (productTitle: string) => void;
  onGrowWithUsClick: () => void;
  onWhoWeAreItemClick: (item: string) => void;
  onLogoClick?: () => void;
  onGetStartedClick?: () => void;
}

// AI Particle Field Background Animation - Enhanced visibility v2
const AIParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(60)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-[2px] h-[2px] bg-purple-300/70 rounded-full shadow-[0_0_4px_rgba(167,139,250,0.6)]"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 2, 0.8],
          }}
          transition={{
            duration: 4 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 4,
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

export function AtlasAPIManagerPage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick, onGetStartedClick }: AtlasAPIManagerPageProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[1100] bg-black overflow-y-auto">
      {/* Navigation */}
      <div className="relative z-[1200]">
        <Nav onClose={onClose} onServiceClick={onServiceClick} onAIClick={onAIClick} onProductClick={onProductClick} onGrowWithUsClick={onGrowWithUsClick} onWhoWeAreItemClick={onWhoWeAreItemClick} onLogoClick={onLogoClick} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[92px]">
        {/* Dark Purple/Black Gradient Background - matching Image 2 v2 */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0d2e] via-[#0f0a1f] to-[#050510]" />
        
        {/* Animated mesh + particles */}
        <AIMeshGradient />
        <AIParticleField />

        {/* Subtle grid overlay - removed for cleaner look matching Image 2 */}

        {/* Subtle ambient glow orbs */}
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
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.12) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.25, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="relative max-w-[1000px] mx-auto px-[16px] md:px-[40px] lg:px-[80px] py-[60px] w-full z-10">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 md:mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 text-[10px] md:text-[11px] font-['Montserrat:SemiBold',sans-serif] tracking-[0.15em] uppercase text-white/80 bg-purple-500/15 border border-purple-500/25 rounded-md backdrop-blur-sm">
                <Network className="w-3 h-3 md:w-4 md:h-4" />
                API LIFECYCLE MANAGEMENT
              </span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] mb-6"
            >
              <span className="text-white">Atlas API Manager</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[15px] md:text-[16px] font-['Montserrat:Regular',sans-serif] text-white/70 leading-[1.7] mx-auto max-w-[900px] px-4"
            >
              Enterprise-grade API gateway and lifecycle management suite with BFSI-grade governance, security, and compliance.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Product Summary */}
      <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px] bg-black">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Product Summary
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#b3b3ba] leading-[1.7] max-w-[900px] mx-auto">
              Atlas API Manager provides a comprehensive solution for managing your entire API ecosystem with security, scalability, and developer experience at its core.
            </p>
          </motion.div>

          {/* Key Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Network,
                title: 'Unified Platform',
                description: 'Single platform for all API operations'
              },
              {
                icon: Shield,
                title: 'Enterprise Security',
                description: 'Built-in security & compliance'
              },
              {
                icon: Gauge,
                title: 'Real-Time Analytics',
                description: 'Monitor performance & usage'
              },
              {
                icon: Users,
                title: 'Developer Portal',
                description: 'Self-service API documentation'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-900/10 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card - LEFT ALIGNED */}
                <div className="relative h-full p-6 rounded-[20px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                  {/* Icon - left aligned */}
                  <div className="w-14 h-14 rounded-[12px] bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4 shadow-lg">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title - left aligned */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-2 leading-[1.3]">
                    {feature.title}
                  </h3>
                  
                  {/* Description - left aligned */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/60 leading-[1.6]">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Atlas Section */}
      <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
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
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Why Atlas?
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: 'Unified Gateway + Manager',
                description: 'Secure, publish, and monitor REST, GraphQL, gRPC, WebSocket, SOAP (mediation), and event APIs.'
              },
              {
                icon: Settings,
                title: 'Policy-First Governance',
                description: 'Reusable, versioned policies applied globally, per-product, or per-route.'
              },
              {
                icon: Shield,
                title: 'BFSI Controls Baked In',
                description: 'Data residency, audit trails, masking/tokenization, consent, and regulator-ready reporting.'
              },
              {
                icon: Zap,
                title: 'Operates at Scale',
                description: 'Active-active, autoscaling, blue-green/canary, SLO dashboards, SIEM export.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-900/10 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative h-full p-8 rounded-[20px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-[12px] bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-3 leading-[1.3]">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/60 leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px] bg-black">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Core Capabilities
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#b3b3ba] leading-[1.7] max-w-[900px] mx-auto">
              Comprehensive API management features designed for enterprise scale and BFSI compliance
            </p>
          </motion.div>

          {/* Architecture Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-[80px]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
              {/* Left: Application Interaction Layer */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="p-8 rounded-[24px] bg-gradient-to-br from-purple-900/40 via-purple-800/30 to-purple-900/40 border border-purple-500/20"
              >
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-6 leading-[1.3]">
                  Application Interaction Layer
                </h3>
                <ul className="space-y-3">
                  {[
                    'Connected users & streaming dashboards',
                    'Web & mobile applications',
                    'IoT devices',
                    'Private applications'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                      <span className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/90 leading-[1.6]">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Middle: Gateway Runtime */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="p-8 rounded-[24px] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10"
              >
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-6 leading-[1.3]">
                  Gateway Runtime
                </h3>
                <div className="space-y-4">
                  <div className="p-4 rounded-[16px] bg-black/40 border border-white/5">
                    <p className="font-['Montserrat:Bold',sans-serif] text-[15px] md:text-[16px] text-white mb-1">AWS API Gateway</p>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[12px] md:text-[13px] text-white/50 leading-[1.5]">Create, publish, maintain, monitor, and secure APIs at scale</p>
                  </div>
                  <div className="p-4 rounded-[16px] bg-black/40 border border-white/5">
                    <p className="font-['Montserrat:Bold',sans-serif] text-[15px] md:text-[16px] text-white">Route Cache</p>
                  </div>
                  <div className="p-4 rounded-[16px] bg-black/40 border border-white/5">
                    <p className="font-['Montserrat:Bold',sans-serif] text-[15px] md:text-[16px] text-white">Amazon CloudWatch</p>
                  </div>
                </div>
              </motion.div>

              {/* Right: Atlas Functional Block */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="p-8 rounded-[24px] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10"
              >
                <div className="mb-6">
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-2 leading-[1.3]">
                    Atlas Functional Block — API Gateway & Integration Ecosystem
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[12px] md:text-[13px] text-white/60 leading-[1.5]">
                    Unified environment for API management, integration, and orchestration
                  </p>
                </div>

                {/* Atlas API Gateway and Management Layer */}
                <div className="mb-3 px-4 py-3 rounded-[12px] bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-center">
                  <p className="font-['Montserrat:Bold',sans-serif] text-[13px] md:text-[14px] text-white">
                    Atlas API Gateway and Management Layer
                  </p>
                </div>

                {/* Grid of Purple Buttons - Management Layer */}
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    'Upstream Configuration',
                    'API Proxy',
                    'Vault',
                    'Alert Engine',
                    'Scheduling',
                    'API Subscription',
                    'Workflow Integration',
                    'Mock API Setup',
                    'Access Management',
                    'Identity Provider Management',
                    'Analytics & MIS',
                    'Rate Limiting'
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2.5 rounded-[10px] bg-gradient-to-br from-purple-600 to-purple-500 text-center hover:from-purple-500 hover:to-purple-600 transition-all duration-300"
                    >
                      <p className="font-['Montserrat:SemiBold',sans-serif] text-[11px] md:text-[12px] text-white leading-tight">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Atlas Integration and Microservices Layer */}
                <div className="mb-3 px-4 py-3 rounded-[12px] bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 text-center">
                  <p className="font-['Montserrat:Bold',sans-serif] text-[13px] md:text-[14px] text-white">
                    Atlas Integration and Microservices Layer
                  </p>
                </div>

                {/* Grid of Purple Buttons - Integration Layer */}
                <div className="grid grid-cols-2 gap-2">
                  {[
                    'Low-code / No-code Interface',
                    'Connector Setup',
                    'Scheduling',
                    'Business Logic'
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-2.5 rounded-[10px] bg-gradient-to-br from-purple-600 to-purple-500 text-center hover:from-purple-500 hover:to-purple-600 transition-all duration-300"
                    >
                      <p className="font-['Montserrat:SemiBold',sans-serif] text-[11px] md:text-[12px] text-white leading-tight">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Capability Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Security & Access',
                description: 'OAuth2/OIDC, SAML, API keys/mTLS, mTLS, JWT validation/JWE/JWS, IP allow/deny, WAF integration, bot mitigation, field-level encryption, PII masking & tokenization.'
              },
              {
                icon: Settings,
                title: 'Policy & Traffic Management',
                description: 'Rate limiting, burst/spike arrest, quotas, caching, rate/transformation, circuit breaker, canary & A/B response transforms (header/body, JSON↔XML), SOAP mediation, CORS.'
              },
              {
                icon: Users,
                title: 'Developer Experience & Monetization',
                description: 'Developer portal, catalog, "try-it" console, API subscriptions/tiers, usage-based or plan-based monetization, analytics, webhook/event collections, change logs and deprecation flows.'
              },
              {
                icon: GitBranch,
                title: 'Lifecycle & CI/CD',
                description: 'Design → Mock → Test → Deploy → Observe; OpenAPI/AsyncAPI import, contract tests, environment promotion with approvals, GitOps pipelines, versioning, blue-green/canary releases and rollback.'
              },
              {
                icon: BarChart2,
                title: 'Observability & Analytics',
                description: 'Golden signals (latency, error rate, saturation), per-tenant metering, consumer analytics, anomaly detection, alert routing, distributed tracing/correlation IDs, immutable audit logs and SIEM export (ELK/Splunk).'
              },
              {
                icon: Hexagon,
                title: 'Topology & Scale',
                description: 'Multi-region HA, hybrid/on-prem (VPC/VNet gateways), service-mesh integration (Istio, Linkerd), plugin/sidecar model, autoscaling with HPA, zero-downtime upgrades.'
              },
              {
                icon: Code,
                title: 'Protocols & Eventing',
                description: 'REST, GraphQL, gRPC, WebSockets, Async APIs, Kafka/MSK, SNS/SQS, SAAS-to-REST mediation.'
              }
            ].map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-900/10 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative h-full p-6 rounded-[20px] bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  {/* Purple Badge Title */}
                  <div className="inline-block mb-4 px-6 py-2.5 rounded-[8px] bg-gradient-to-r from-purple-600 to-purple-700 shadow-lg">
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[15px] md:text-[16px] text-white leading-[1.3]">
                      {capability.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/60 leading-[1.7]">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BFSI Compliance & Risk Controls */}
      <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px] bg-black">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              BFSI Compliance & Risk Controls
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#b3b3ba] leading-[1.7] max-w-[900px] mx-auto">
              Built-in compliance features designed specifically for Banking, Financial Services, and Insurance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Data & Privacy',
                badge: 'SECURITY',
                description: 'Regional data residency with encryption in transit and at rest',
                impact: 'Fine-grained masking/tokenization for PAN/Aadhaar/PII',
                image: 'https://images.unsplash.com/photo-1576297185621-93ed9df5ca9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2VjdXJpdHklMjBlbmNyeXB0aW9uJTIwcHJpdmFjeXxlbnwxfHx8fDE2ODIwNDU4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              {
                title: 'Governance',
                badge: 'COMPLIANCE',
                description: 'Four-eyes approvals, SoD, change windows, policy attestation',
                impact: 'OWASP API Top-10 protections with threat rules',
                image: 'https://images.unsplash.com/photo-1545005785-a4a5554b8efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBnb3Zlcm5hbmNlJTIwY29tcGxpYW5jZSUyMGJ1c2luZXNzfGVufDF8fHx8MTY4MjA0NTg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              {
                title: 'Operations & DR',
                badge: 'RESILIENCE',
                description: 'RTO/RPO targets with cross-region backup and restore',
                impact: 'Failover drills, 24x7 monitoring and on-call runbooks',
                image: 'https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlY292ZXJ5JTIwc2VydmVyJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNjgyMDQ1ODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              },
              {
                title: 'Reporting',
                badge: 'ANALYTICS',
                description: 'Consumer usage and SLA/SLO performance tracking',
                impact: 'Regulator-ready exports with full traceability',
                image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMHJlcG9ydGluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE2ODIwNDU4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
              }
            ].map((item, index) => {
              const BFSICard = () => {
                const [isHovered, setIsHovered] = useState(false);
                
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group cursor-pointer rounded-[24px] overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    {/* Split Layout: Image on Top, Content Below */}
                    <div className="flex flex-col h-full">
                      {/* Image Section - 40% height */}
                      <div className="relative h-[180px] overflow-hidden">
                        <motion.img
                          alt={item.title}
                          className="w-full h-full object-cover"
                          src={item.image}
                          animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                        />
                        
                        {/* Purple overlay on image */}
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 to-black/70" />
                        
                        {/* Badge */}
                        <div className="absolute top-4 left-4 bg-purple-600 px-5 py-2 rounded-full z-10">
                          <p className="font-['Montserrat:SemiBold',sans-serif] text-[11px] text-white uppercase tracking-wide">
                            {item.badge}
                          </p>
                        </div>
                      </div>

                      {/* Content Section - 60% height */}
                      <div className="flex-1 p-6 flex flex-col justify-between">
                        {/* Title */}
                        <div>
                          <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[22px] text-white mb-4 leading-[1.3]">
                            {item.title}
                          </h3>
                          
                          {/* Description */}
                          <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/80 leading-[1.7] mb-3">
                            {item.description}
                          </p>
                          
                          {/* Impact */}
                          <p className="font-['Montserrat:Medium',sans-serif] text-[13px] md:text-[14px] text-purple-300 leading-[1.6]">
                            {item.impact}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Subtle hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-[24px] pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 0%, transparent 70%)',
                        opacity: 0
                      }}
                      animate={isHovered ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                );
              };
              
              return <BFSICard key={index} />;
            })}
          </div>
        </div>
      </section>

      {/* Architecture (High Level) Section */}
      <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        
        <div className="relative max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Architecture (High Level)
            </h2>
          </motion.div>

          {/* Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Top Row - Main Flow */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-8 rounded-[24px] border border-white/10">
              {/* Consumers */}
              <div className="flex-shrink-0">
                <div className="inline-flex items-center justify-center px-8 py-4 bg-black/40 rounded-[16px] border-2 border-purple-500 min-w-[140px]">
                  <p className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white">
                    Consumers
                  </p>
                </div>
              </div>

              <ArrowRight className="w-8 h-8 text-purple-400 flex-shrink-0 rotate-90 md:rotate-0" />

              {/* Atlas API Gateway & Management */}
              <div className="flex-1">
                <div className="p-6 bg-black/40 rounded-[16px] border-2 border-purple-500">
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-3 text-center">
                    Atlas API Gateway &<br />Management
                  </h3>
                  <div className="text-[12px] md:text-[13px] font-['Montserrat:Regular',sans-serif] text-white/80 leading-[1.6] text-center">
                    <p>proxy, identity, policy, analytics,</p>
                    <p>alerting, vault, scheduling,</p>
                    <p>subscription, rate limiting</p>
                  </div>
                </div>
              </div>

              <ArrowRight className="w-8 h-8 text-purple-400 flex-shrink-0 rotate-90 md:rotate-0" />

              {/* Integration & Microservices Layer */}
              <div className="flex-1">
                <div className="p-6 bg-black/40 rounded-[16px] border-2 border-purple-500">
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-3 text-center">
                    Integration &<br />Microservices Layer
                  </h3>
                  <div className="text-[12px] md:text-[13px] font-['Montserrat:Regular',sans-serif] text-white/80 leading-[1.6] text-center">
                    <p>orchestration/transform, connectors,</p>
                    <p>low/no-code, schedulers, business</p>
                    <p>logic</p>
                  </div>
                </div>
              </div>

              <ArrowRight className="w-8 h-8 text-purple-400 flex-shrink-0 rotate-90 md:rotate-0" />

              {/* Core Systems */}
              <div className="flex-1">
                <div className="p-6 bg-black/40 rounded-[16px] border-2 border-purple-500">
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-3 text-center">
                    Core Systems
                  </h3>
                  <div className="text-[12px] md:text-[13px] font-['Montserrat:Regular',sans-serif] text-white/80 leading-[1.6] text-center">
                    <p>Core Banking, payments—</p>
                    <p>RTGS/UPI/NEFT, insurance,</p>
                    <p>custody, ledger, data</p>
                    <p>aggregators</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MZ Layer */}
            <div className="p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-[24px] border border-white/10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-purple-600/80 text-white text-[12px] md:text-[13px] font-['Montserrat:Bold',sans-serif] rounded-[8px]">
                  MZ — Military Zone (AWS Cloud Environment)
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                {['Paytm', 'Karza', 'HDFC\nOpenBanking', 'IndiaStack', 'OCEN', 'API Setu'].map((system, idx) => (
                  <div key={idx} className="p-4 bg-white/5 rounded-[12px] border border-white/10 text-center">
                    <p className="font-['Montserrat:SemiBold',sans-serif] text-[13px] md:text-[14px] text-white whitespace-pre-line">
                      {system}
                    </p>
                  </div>
                ))}
              </div>

              {/* Gateway Layer */}
              <div className="p-6 bg-black/40 rounded-[16px] border-2 border-purple-500 mb-6">
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white text-center">
                  Atlas API Gateway and Management Layer
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-black/20 rounded-[12px] border border-white/5">
                  <h4 className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[15px] text-white mb-2">
                    Developer Portal & Sandbox APIs
                  </h4>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[12px] md:text-[13px] text-white/60">
                    Partner onboarding, API documentation, keys & subscriptions
                  </p>
                </div>
                <div className="p-4 bg-black/20 rounded-[12px] border border-white/5">
                  <h4 className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[15px] text-white mb-2">
                    Monitoring & Security
                  </h4>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[12px] md:text-[13px] text-white/60">
                    CloudWatch / ELK · GuardDuty · IAM · WAF
                  </p>
                </div>
              </div>
            </div>

            {/* DMZ Layer */}
            <div className="p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-[24px] border border-white/10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-purple-600/80 text-white text-[12px] md:text-[13px] font-['Montserrat:Bold',sans-serif] rounded-[8px]">
                  DMZ — Secure Hybrid Interconnect
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-6 bg-white/5 rounded-[16px] border border-white/10 text-center">
                  <h4 className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[15px] text-white mb-2">
                    Payment initiation processing
                  </h4>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[12px] text-white/50">
                    API calls, workflow initiation and response
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-[16px] border border-white/10 text-center">
                  <h4 className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[15px] text-white mb-2">
                    Transformation / Aggregation / Orchestration
                  </h4>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[12px] text-white/50">
                    Format mediation, error-log, back-office applications
                  </p>
                </div>
                <div className="p-6 bg-white/5 rounded-[16px] border border-white/10 text-center">
                  <h4 className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[15px] text-white mb-2">
                    Account information processing
                  </h4>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[12px] text-white/50">
                    Insights request and response
                  </p>
                </div>
              </div>

              <p className="text-center font-['Montserrat:Regular',sans-serif] text-[12px] md:text-[13px] text-white/60">
                Encrypted connectivity via AWS Direct Connect / Site-to-Site VPN · TLS · mTLS · Policy Enforcement
              </p>
            </div>

            {/* Core Defense Zone */}
            <div className="p-8 bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-[24px] border border-white/10">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-purple-600/80 text-white text-[12px] md:text-[13px] font-['Montserrat:Bold',sans-serif] rounded-[8px]">
                  Core Defense Zone — Bank Data Center / Private Network
                </span>
              </div>

              <div className="mb-6 p-6 bg-black/40 rounded-[16px] border-2 border-purple-500">
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white text-center mb-3">
                  Service Bus
                </h3>
                <p className="text-center font-['Montserrat:Regular',sans-serif] text-[13px] text-white/80">
                  Atlas Integration and Microservices Layer
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 mb-4">
                {[
                  'Domestic\nRetail\nPayment',
                  'International\nPayment',
                  'National\nRTGS\nPayments',
                  'Back Office\nApplications',
                  'Core Banking\n(Accounts)',
                  'Insurance',
                  'Data\nAggregators'
                ].map((system, idx) => (
                  <div key={idx} className="p-4 bg-white/5 rounded-[12px] border border-white/10 text-center">
                    <p className="font-['Montserrat:SemiBold',sans-serif] text-[12px] md:text-[13px] text-white whitespace-pre-line">
                      {system}
                    </p>
                  </div>
                ))}
              </div>

              <p className="text-center font-['Montserrat:Regular',sans-serif] text-[11px] md:text-[12px] text-white/50">
                Data Residency · SOC3 · ISO 27001 · FAPI · RBI Open Banking Compliant
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Feature Matrix (Snapshot) Section */}
      <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px] bg-black">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Feature Matrix (Snapshot)
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Security',
                items: 'OAuth2/OIDC, SAML, mTLS, JWT/JWE/JWS, WAF, IP lists, geo-fencing, bot defense'
              },
              {
                icon: FileText,
                title: 'Policies',
                items: 'Quotas, rate limits, caching, transforms, mediation, CORS, fault injection, circuit breaking'
              },
              {
                icon: Code,
                title: 'Dev Portal',
                items: 'Catalog, try-it, SDKs, monetization, subscription workflow, developer analytics'
              },
              {
                icon: Activity,
                title: 'Observability',
                items: 'Metrics/traces/logs, SIEM export, anomaly alerts, SLA/SLO dashboards, audits'
              },
              {
                icon: Server,
                title: 'Deployment',
                items: 'K8s (EKS/AKS/GKE/OKE), VMs, bare-metal; cloud, on-prem, or hybrid; private networking'
              },
              {
                icon: TrendingUp,
                title: 'Scale',
                items: 'Multi-region HA, autoscaling, multi-tenant isolation, zero-downtime deploys, canary/blue-green'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-900/10 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card - LEFT ALIGNED */}
                <div className="relative h-full p-8 rounded-[20px] bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  {/* Purple Icon Box - left aligned */}
                  <div className="flex items-center justify-center w-[64px] h-[64px] mb-6 rounded-[16px] border-2 border-purple-500">
                    <feature.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  
                  {/* Title - left aligned */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-4 leading-[1.3]">
                    {feature.title}
                  </h3>
                  
                  {/* Items - left aligned */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/60 leading-[1.7]">
                    {feature.items}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifecycle & Governance */}
      <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px] bg-black">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Lifecycle & Governance
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              {
                number: '1',
                title: 'Design',
                description: 'Design contracts (OpenAPI/AsyncAPI) and attach policy blueprints.'
              },
              {
                number: '2',
                title: 'Build & Mock',
                description: 'Build & Mock services; run security/contract tests in CI.'
              },
              {
                number: '3',
                title: 'Publish',
                description: 'Publish to dev → test → prod with approvals & change windows.'
              },
              {
                number: '4',
                title: 'Operate',
                description: 'Operate with SLOs, autoscaling, patching, and runbooks.'
              },
              {
                number: '5',
                title: 'Retire',
                description: 'Retire safely with deprecation notices, traffic drain, and archival.'
              }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative text-center"
              >
                {/* Number Circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center shadow-lg">
                    <span className="font-['Montserrat:Bold',sans-serif] text-[24px] text-white">
                      {phase.number}
                    </span>
                  </div>
                </div>
                
                {/* Title */}
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-3 leading-[1.3]">
                  {phase.title}
                </h3>
                
                {/* Description */}
                <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/60 leading-[1.7]">
                  {phase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
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
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Deployment Options
            </h2>
          </motion.div>

          {/* Main Deployment Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[40px]">
            {[
              {
                icon: Settings,
                title: 'Managed by ACC',
                description: 'Fully managed service with 24/7 support and monitoring'
              },
              {
                icon: Cloud,
                title: 'Customer Cloud',
                description: 'Deploy in your AWS, Azure, or GCP environment'
              },
              {
                icon: Server,
                title: 'On-Premises',
                description: 'Air-gapped deployment for maximum security and compliance'
              }
            ].map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-900/10 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card - LEFT ALIGNED */}
                <div className="relative h-full p-8 rounded-[20px] bg-[#0a0a0a] border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  {/* Purple Icon Box - left aligned */}
                  <div className="inline-flex items-center justify-center w-[64px] h-[64px] mb-6 rounded-[16px] border-2 border-purple-500">
                    <option.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  
                  {/* Title - left aligned */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-4 leading-[1.3]">
                    {option.title}
                  </h3>
                  
                  {/* Description - left aligned */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/60 leading-[1.7]">
                    {option.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-[20px] bg-black/60 border border-white/10"
          >
            <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[24px] text-white mb-6 leading-[1.3]">
              Additional Features
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-['Montserrat:SemiBold',sans-serif] text-[16px] md:text-[18px] text-white mb-2 leading-[1.3]">
                  Observability Integration
                </h4>
                <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/60 leading-[1.7]">
                  BYO observability (Cloud/Watch/Prometheus/Grafana/Splunk/ELK)
                </p>
              </div>
              
              <div>
                <h4 className="font-['Montserrat:SemiBold',sans-serif] text-[16px] md:text-[18px] text-white mb-2 leading-[1.3]">
                  Identity Integration
                </h4>
                <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/60 leading-[1.7]">
                  Native identity integrations (ADEntra, Okta, Keycloak)
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px] bg-black overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        
        <div className="relative max-w-[1280px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Business Outcomes
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#b3b3ba] leading-[1.7] max-w-[900px] mx-auto">
              Transform your API strategy with measurable business results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                text: 'Faster partner onboarding and product launches (weeks, not months)'
              },
              {
                text: 'Consistent, auditable policy enforcement across all APIs'
              },
              {
                text: 'Lower operational risk via standardized runtime, observability, and DR'
              },
              {
                text: 'Developer productivity through self-service, SDKs, and automation'
              }
            ].map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="flex items-start gap-4 p-6 rounded-[16px] bg-black/60 border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/80 leading-[1.7]">
                  {outcome.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="relative px-[16px] md:px-[40px] lg:px-[80px] bg-black">
        <div className="max-w-[1280px] mx-auto">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />
        </div>
      </div>

      {/* CTA Section */}
      <section className="relative py-[100px] md:py-[140px] px-[16px] md:px-[40px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0b2e] to-black" />
        
        <div className="relative max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[36px] md:text-[48px] lg:text-[56px] text-white mb-6 leading-[1.2]">
              Ready to Transform Your API Strategy?
            </h2>
            
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-white/60 max-w-[800px] mx-auto leading-[1.7] mb-[60px]">
              Get started with Atlas API Manager and experience enterprise-grade API management with BFSI compliance built-in.


            </p>

            {/* CTA Button */}
            <div className="flex justify-center">
              <button 
                onClick={onGetStartedClick}
                className="group px-10 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <span className="text-[15px] md:text-[16px] font-['Montserrat:SemiBold',sans-serif] text-black">
                  Start Free Trial
                </span>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
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