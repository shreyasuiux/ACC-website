import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Shield,
  CheckCircle2,
  AlertTriangle,
  Star,
  ArrowRight,
  FileText,
  Eye,
  Target,
  Users,
  TrendingUp,
  Zap,
  Lock,
  Activity,
  Globe
} from "lucide-react";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { GradientCTAButton } from "./GradientCTAButton";
import { Footer } from "./Footer";
import { dashboardImg } from "../../assets/images";
import { CTASection } from "./CTASection";

// Security Page Component
interface SecurityPageProps {
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

export function SecurityPage({
  onClose,
  onServiceClick,
  onAIClick,
  onProductClick,
  onGrowWithUsClick,
  onWhoWeAreItemClick,
  onLogoClick,
  onGetStartedClick
}: SecurityPageProps) {

  const [activeTab, setActiveTab] = useState("cloud");

  // Hero Stats - 2x2 Grid
  const heroStats = [
    { icon: Shield, value: "350+", label: "Security Assessments" },
    { icon: AlertTriangle, value: "10K+", label: "Threats Mitigated" },
    { icon: CheckCircle2, value: "15+", label: "Compliance Frameworks" },
    { icon: Star, value: "99.9%", label: "Client Protection Rate" }
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
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6"
              >
                <Shield className="w-4 h-4 text-purple-400" />
                <span className="font-['Montserrat',sans-serif] text-purple-400 text-[13px] font-medium tracking-wide">
                  Enterprise Security Audits
                </span>
              </motion.div>

              <h1 className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] text-white mb-6">
                Comprehensive<br />Security Audit<br />Services
              </h1>
              
              <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[17px] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-8">
                Protect your digital assets with our comprehensive security audit services including Cloud Security Posture Management, Pre-Audit Readiness, and Advanced Red Teaming with Purple Team collaboration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={onGetStartedClick}
                  className="px-8 py-4 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[15px] hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Security Assessment
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Column - Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              {heroStats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 rounded-[20px] p-6 backdrop-blur-sm text-center"
                >
                  <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                  <div className="font-['Montserrat',sans-serif] font-bold text-[32px] md:text-[36px] text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="font-['Montserrat',sans-serif] text-[12px] md:text-[13px] text-purple-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Security Audit Services */}
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
              Our Security Audit Services
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.7]">
              Choose from our comprehensive suite of security audit services designed to protect and strengthen your organization's security posture.
            </p>
          </motion.div>

          {/* Service Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("cloud")}
              className={`px-6 py-3 rounded-full font-['Montserrat',sans-serif] font-medium text-[14px] md:text-[15px] transition-all duration-300 flex items-center gap-2 ${
                activeTab === "cloud"
                  ? "bg-purple-600 text-white"
                  : "bg-white/[0.05] border border-white/10 text-white/70 hover:bg-white/[0.08]"
              }`}
            >
              <Shield className="w-4 h-4" />
              Cloud Security Posture Management
            </button>
            <button
              onClick={() => setActiveTab("preaudit")}
              className={`px-6 py-3 rounded-full font-['Montserrat',sans-serif] font-medium text-[14px] md:text-[15px] transition-all duration-300 flex items-center gap-2 ${
                activeTab === "preaudit"
                  ? "bg-purple-600 text-white"
                  : "bg-white/[0.05] border border-white/10 text-white/70 hover:bg-white/[0.08]"
              }`}
            >
              <FileText className="w-4 h-4" />
              Pre-Audit Readiness (BFS)
            </button>
            <button
              onClick={() => setActiveTab("redteam")}
              className={`px-6 py-3 rounded-full font-['Montserrat',sans-serif] font-medium text-[14px] md:text-[15px] transition-all duration-300 flex items-center gap-2 ${
                activeTab === "redteam"
                  ? "bg-purple-600 text-white"
                  : "bg-white/[0.05] border border-white/10 text-white/70 hover:bg-white/[0.08]"
              }`}
            >
              <Eye className="w-4 h-4" />
              Red Teaming (with Purple Team Option)
            </button>
          </div>

          {/* Cloud Security Posture Management */}
          {activeTab === "cloud" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[24px] p-8 md:p-12"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[28px] text-white mb-2 leading-[1.2]">
                    Cloud Security Posture Management
                  </h3>
                  <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                    Comprehensive cloud security assessment and continuous monitoring to ensure optimal security posture across your cloud infrastructure.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Process & Methodology */}
                <div>
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-6">
                    Process & Methodology
                  </h4>

                  <div className="space-y-6">
                    {/* Discover & Baseline */}
                    <div>
                      <h5 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-3">
                        Discover & Baseline
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Enumerate all orgs/subscriptions/projects/tenancies",
                          "Auto-inventory accounts, regions, VPC/VNet, subnets, gateways, peering",
                          "Map EKS/AKS/GKE/OKE, databases, storage, keys, secrets, serverless",
                          "Identify public endpoints, tags and owners",
                          "Map against CIS Benchmarks (L1/L2), NIST CSF, ISO 27001 Annex A controls"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Prioritize & Threat Model */}
                    <div>
                      <h5 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-3">
                        Prioritize & Threat Model
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Threat-model misconfigurations using attack-path analysis",
                          "Analyze IAM privilege escalation paths",
                          "Assess exposed object storage, IMDS/SSRF vulnerabilities",
                          "Evaluate OIDC trust issues, KMS misuse, flat networks",
                          "Rank by exploitability, blast radius, and business impact"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Remediate & Govern */}
                    <div>
                      <h5 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-3">
                        Remediate & Govern
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Provide policy-as-code and automated fixes (native & IaC)",
                          "Engineer guardrails (SCPs/Policies), blueprints, and CI/CD gates",
                          "Implement continuous monitoring dashboards",
                          "Establish executive risk register and exceptions workflow",
                          "Define KPIs/SLOs and evidence collection for audits"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column - Key Benefits, Success Metrics, Technologies */}
                <div className="space-y-8">
                  {/* Key Benefits */}
                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-6">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Automated Discovery",
                        "Risk-Based Prioritization",
                        "Policy-as-Code Fixes",
                        "Continuous Monitoring"
                      ].map((benefit, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-[12px] p-4 text-center"
                        >
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-purple-300 font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-6">
                      Success Metrics
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { value: "100%", label: "Asset Discovery" },
                        { value: "85%", label: "Risk Reduction" },
                        { value: "98%", label: "Compliance Score" },
                        { value: "90%", label: "Automation Rate" }
                      ].map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 rounded-[12px] p-4 text-center"
                        >
                          <div className="font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[28px] text-white mb-1">
                            {metric.value}
                          </div>
                          <div className="font-['Montserrat',sans-serif] text-[12px] text-purple-300">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies & Frameworks */}
                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-4">
                      Technologies & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "AWS Security Hub",
                        "Azure Security Center",
                        "Google Cloud Security",
                        "CIS Benchmarks",
                        "NIST CSF",
                        "ISO 27001"
                      ].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full font-['Montserrat',sans-serif] text-[12px] md:text-[13px] text-[rgba(255,255,255,0.7)] hover:bg-white/[0.08] transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Pre-Audit Readiness (BFS) */}
          {activeTab === "preaudit" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[24px] p-8 md:p-12"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[28px] text-white mb-2 leading-[1.2]">
                    Pre-Audit Readiness (BFS)
                  </h3>
                  <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                    Comprehensive audit preparation services to ensure your organization is ready for regulatory compliance assessments and certifications.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Process & Methodology */}
                <div>
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-6">
                    Process & Methodology
                  </h4>

                  <div className="space-y-6">
                    {/* Plan & Define Scope */}
                    <div>
                      <h5 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-3">
                        Plan & Define Scope
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Define boundaries, in-scope systems/workloads, data classifications",
                          "Identify suppliers, sites/regions for assessment",
                          "Create Statement of Applicability (for ISO)",
                          "Define trust services criteria (for SOC 2)",
                          "Establish audit timeline and resource allocation"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Document Review & Control Testing */}
                    <div>
                      <h5 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-3">
                        Document Review & Control Testing
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Review policies, procedures, risk registers",
                          "Assess BCP/DR, change management processes",
                          "Evaluate vulnerability management and incident response",
                          "Test vendor risk and secure SDLC/DevSecOps practices",
                          "Sample-based testing of identity, network, logging controls"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Gap Analysis & Mock Audit */}
                    <div>
                      <h5 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-3">
                        Gap Analysis & Mock Audit
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Comprehensive gap analysis with severity/owner/ETA",
                          "Quick wins (0-30 days), medium (31-90), strategic (90+) remediation",
                          "Risk acceptance workflow and compensating controls",
                          "Interview preparation and stakeholder Q&A scripts",
                          "Auditor day-in-the-life dry-run walkthroughs"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column - Key Benefits, Success Metrics, Technologies */}
                <div className="space-y-8">
                  {/* Key Benefits */}
                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-6">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Audit Readiness",
                        "Compliance Gaps Identified",
                        "Remediation Roadmap",
                        "Mock Audit Training"
                      ].map((benefit, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-[12px] p-4 text-center"
                        >
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-purple-300 font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-6">
                      Success Metrics
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { value: "98%", label: "Audit Success Rate" },
                        { value: "95%", label: "Gap Remediation" },
                        { value: "60%↓", label: "Time to Compliance" },
                        { value: "40%", label: "Cost Reduction" }
                      ].map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 rounded-[12px] p-4 text-center"
                        >
                          <div className="font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[28px] text-white mb-1">
                            {metric.value}
                          </div>
                          <div className="font-['Montserrat',sans-serif] text-[12px] text-purple-300">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies & Frameworks */}
                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-4">
                      Technologies & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "ISO 27001",
                        "SOC 2",
                        "PCI-DSS",
                        "NIST",
                        "Evidence Vault",
                        "Control Testing"
                      ].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full font-['Montserrat',sans-serif] text-[12px] md:text-[13px] text-[rgba(255,255,255,0.7)] hover:bg-white/[0.08] transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Red Teaming - FULL CONTENT */}
          {activeTab === "redteam" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[24px] p-8 md:p-12"
            >
              <div className="flex items-start gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[28px] text-white mb-2 leading-[1.2]">
                    Red Teaming (with Purple Team Option)
                  </h3>
                  <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                    Advanced adversarial testing with Purple Team collaboration to evaluate your organization's detection and response capabilities.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column - Process & Methodology */}
                <div>
                  <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-6">
                    Process & Methodology
                  </h4>

                  <div className="space-y-6">
                    {/* Scoping & Threat Modeling */}
                    <div>
                      <h5 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-3">
                        Scoping & Threat Modeling
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Define crown jewels, adversary profiles, success criteria",
                          "Set dwell-time targets and engagement boundaries",
                          "Identify critical assets and attack surfaces",
                          "Establish rules of engagement and safety protocols",
                          "Plan scenario coverage and testing methodology"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Attack Simulation */}
                    <div>
                      <h5 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-3">
                        Attack Simulation
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Recon & Initial Access: OSINT, code/search dorks, phishing/OAuth",
                          "Privilege Escalation: Cloud IAM privesc paths, account pivoting",
                          "Lateral Movement: Target VMS/Secrets, CI/CD runners",
                          "Actions on Objectives: Data access, tamper resilience tests",
                          "Evasion & Persistence: Logging gaps, role persistence, federated identity abuse"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Debrief & Purple Team Workshops */}
                    <div>
                      <h5 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-3">
                        Debrief & Purple Team Workshops
                      </h5>
                      <ul className="space-y-2">
                        {[
                          "Comprehensive attack-path documentation",
                          "Replay TTPs with Blue Team for learning",
                          "Turn findings into detections and hardening backlog",
                          "Knowledge transfer and capability building",
                          "Continuous improvement recommendations"
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                            <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Right Column - Key Benefits, Success Metrics, Attack Scenarios */}
                <div className="space-y-8">
                  {/* Key Benefits */}
                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-6">
                      Key Benefits
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        "Real Attack Simulation",
                        "Purple Team Learning",
                        "Detection Improvement",
                        "Capability Building"
                      ].map((benefit, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-[12px] p-4 text-center"
                        >
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-purple-300 font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Success Metrics */}
                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-6">
                      Success Metrics
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { value: "95%", label: "Attack Paths Found" },
                        { value: "100%", label: "Detection Gaps" },
                        { value: "80%↑", label: "Team Capability" },
                        { value: "90%↑", label: "Security Posture" }
                      ].map((metric, idx) => (
                        <div
                          key={idx}
                          className="bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 rounded-[12px] p-4 text-center"
                        >
                          <div className="font-['Montserrat',sans-serif] font-bold text-[24px] md:text-[28px] text-white mb-1">
                            {metric.value}
                          </div>
                          <div className="font-['Montserrat',sans-serif] text-[12px] text-purple-300">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Attack Scenarios Covered */}
                  <div>
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-6">
                      Attack Scenarios Covered
                    </h4>
                    <div className="space-y-3">
                      {[
                        { icon: Target, label: "External to Cloud" },
                        { icon: Shield, label: "Control Plane Abuse" },
                        { icon: AlertTriangle, label: "Policies & Data Exfiltration" },
                        { icon: Zap, label: "Kubernetes Attack Paths" },
                        { icon: Users, label: "Insider/Partner Threat" }
                      ].map((scenario, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 rounded-[12px] p-3"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-500/20 to-pink-500/10 border border-red-500/30 flex items-center justify-center flex-shrink-0">
                            <scenario.icon className="w-4 h-4 text-red-400" />
                          </div>
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.7)]">
                            {scenario.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies & Frameworks */}
                  <div className="mt-8">
                    <h4 className="font-['Montserrat',sans-serif] font-semibold text-[18px] md:text-[20px] text-white mb-4">
                      Technologies & Frameworks
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "Metasploit",
                        "Cobalt Strike",
                        "Custom Tools",
                        "Cloud TTPs",
                        "MITRE ATT&CK",
                        "Purple Team"
                      ].map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-white/[0.05] border border-white/10 rounded-full font-['Montserrat',sans-serif] text-[12px] md:text-[13px] text-[rgba(255,255,255,0.7)] hover:bg-white/[0.08] transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Section 3: Our Security Commitment */}
      <section className="py-[80px] md:py-[120px] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-white mb-6 leading-[1.2]">
              Our Security Commitment
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] lg:text-[17px] text-[rgba(255,255,255,0.7)] max-w-4xl mx-auto leading-[1.7]">
              At ACC, security and compliance are at the core of everything we build. From financial services to healthcare and enterprise workloads, our solutions are designed with zero-trust principles, strong data protection, and industry-standard compliance frameworks. We ensure every client can operate confidently in a secure and compliant environment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Key Security Practices */}
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
              Key Security Practices
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Multi-Layered Protection",
                description: "Network firewalls, intrusion detection, and end-to-end encryption safeguard sensitive workloads.",
                image: "https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwc2VjdXJpdHklMjBmaXJld2FsbCUyMHByb3RlY3Rpb258ZW58MXx8fHwxNjgyMDQwOTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                category: "PROTECTION",
                tags: ["Firewall", "IDS/IPS", "Encryption"]
              },
              {
                icon: Lock,
                title: "Identity & Access Controls",
                description: "Fine-grained IAM, role-based access, and multi-factor authentication ensure that only authorized users can access critical systems.",
                image: "https://images.unsplash.com/photo-1762330469123-ce98036eff16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZGVudGl0eSUyMGFjY2VzcyUyMGNvbnRyb2wlMjBhdXRoZW50aWNhdGlvbnxlbnwxfHx8fDE2ODIwNDA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                category: "ACCESS CONTROL",
                tags: ["IAM", "RBAC", "MFA"]
              },
              {
                icon: Eye,
                title: "Data Privacy",
                description: "All customer data is encrypted at rest and in transit. Sensitive information is anonymized wherever possible.",
                image: "https://images.unsplash.com/photo-1572435555646-7ad9a149ad91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwcHJpdmFjeSUyMGVuY3J5cHRpb24lMjBzZWN1cml0eXxlbnwxfHx8fDE2ODIwNDA5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                category: "PRIVACY",
                tags: ["Encryption", "Anonymization", "GDPR"]
              },
              {
                icon: AlertTriangle,
                title: "Proactive Threat Detection",
                description: "Tools like AWS GuardDuty, Security Hub, and SIEM integrations continuously monitor for anomalies and potential risks.",
                image: "https://images.unsplash.com/photo-1762340915700-356b34475448?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0aHJlYXQlMjBkZXRlY3Rpb24lMjBjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTY4MjA0MDkxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                category: "THREAT DETECTION",
                tags: ["GuardDuty", "Security Hub", "SIEM"]
              },
              {
                icon: Zap,
                title: "Disaster Recovery & Business Continuity",
                description: "Automated backups, multi-region architectures, and DR drills guarantee uptime and resilience.",
                image: "https://images.unsplash.com/photo-1562487674-fabbcf99c85b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXNhc3RlciUyMHJlY292ZXJ5JTIwYmFja3VwJTIwaW5mcmFzdHJ1Y3R1cmV8ZW58MXx8fHwxNjgyMDQwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                category: "RECOVERY",
                tags: ["Backups", "Multi-Region", "DR Testing"]
              },
              {
                icon: Activity,
                title: "Continuous Monitoring",
                description: "Real-time security monitoring and automated response systems ensure 24/7 protection and rapid incident response.",
                image: "https://images.unsplash.com/photo-1675627453084-505806a00406?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMG1vbml0b3JpbmclMjBhbmFseXRpY3MlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNjgyMDQwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                category: "MONITORING",
                tags: ["24/7", "Automation", "Incident Response"]
              }
            ].map((practice, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-[24px] overflow-hidden hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500"
              >
                {/* Image Section */}
                <div className="relative h-[180px] sm:h-[200px] md:h-[220px] overflow-hidden">
                  <motion.img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
                  
                  {/* Category Badge - Top Left */}
                  <div className="absolute top-4 left-4">
                    <div className="px-4 py-1.5 bg-gradient-to-r from-[#A855F7] to-[#EC4899] rounded-full shadow-lg">
                      <span className="font-['Montserrat',sans-serif] text-white text-[11px] font-bold tracking-wider">
                        {practice.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-4 sm:p-5 md:p-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
                    <practice.icon className="w-6 h-6 text-purple-400" />
                  </div>

                  {/* Title */}
                  <h3 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-3 leading-[1.3]">
                    {practice.title}
                  </h3>

                  {/* Description */}
                  <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                    {practice.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Compliance & Regulatory Frameworks */}
      <section className="py-[80px] md:py-[120px] bg-gradient-to-b from-transparent via-white/[0.02] to-transparent">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-white mb-6 leading-[1.2]">
              Compliance & Regulatory Frameworks
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.7]">
              We ensure your security posture meets the highest industry standards and regulatory requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "ISO 27001",
                description: "Information Security Management System"
              },
              {
                title: "SOC 2",
                description: "Service Organization Control Type 2"
              },
              {
                title: "PCI-DSS",
                description: "Payment Card Industry Data Security Standard"
              },
              {
                title: "NIST CSF",
                description: "Cybersecurity Framework"
              },
              {
                title: "CIS Controls",
                description: "Center for Internet Security Benchmarks"
              },
              {
                title: "GDPR",
                description: "General Data Protection Regulation"
              }
            ].map((framework, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[20px] p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center mb-4">
                  <Lock className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-2 leading-[1.3]">
                  {framework.title}
                </h3>
                <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                  {framework.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Why Choose ACC Security? */}
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
              Why Choose ACC Security?
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.7]">
              Our comprehensive security approach combines cutting-edge technology with expert knowledge to deliver unparalleled protection.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Target,
                title: "Proactive Defense",
                description: "Stay ahead of threats with continuous monitoring and proactive security measures."
              },
              {
                icon: Zap,
                title: "Rapid Response",
                description: "Automated incident response and real-time threat mitigation capabilities."
              },
              {
                icon: Globe,
                title: "Multi-Cloud Security",
                description: "Comprehensive security across AWS, Azure, Google Cloud, and hybrid environments."
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified security professionals with extensive experience in enterprise security."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 rounded-[20px] p-6 hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Icon - left aligned */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center mb-6">
                  <item.icon className="w-8 h-8 text-purple-400" />
                </div>
                
                {/* Title - left aligned */}
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[18px] text-white mb-3 leading-[1.3]">
                  {item.title}
                </h3>
                
                {/* Description - left aligned */}
                <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA Section */}
      <CTASection
        title="Ready to Strengthen Your Security Posture?"
        description="Get started with a comprehensive security assessment and discover how ACC can help protect your organization from evolving threats."
        primaryButtonText="Start Security Assessment"
        variant="gradient"
        highlightText="Security Posture?"
        onPrimaryClick={onGetStartedClick}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}