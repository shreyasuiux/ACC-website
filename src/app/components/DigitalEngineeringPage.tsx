import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Code,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Zap,
  CheckCircle2,
  Users,
  Target,
  TrendingUp,
  ArrowRight,
  Workflow,
  Lightbulb,
  Rocket
} from "lucide-react";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { GradientCTAButton } from "./GradientCTAButton";
import { Footer } from "./Footer";

interface DigitalEngineeringPageProps {
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

export function DigitalEngineeringPage({
  onClose,
  onServiceClick,
  onAIClick,
  onProductClick,
  onGrowWithUsClick,
  onWhoWeAreItemClick,
  onLogoClick,
  onGetStartedClick
}: DigitalEngineeringPageProps) {
  const [activePhase, setActivePhase] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Transformation Journey Phases
  const transformationPhases = [
    {
      phase: "Cloud Adoption",
      number: 1,
      subtitle: "Foundation, migration, and operating model",
      steps: [
        "Assess & plan for legacy to upgrade, migrate",
        "Move data warehouse",
        "Create disaster recovery",
        "Move to production, standardization & automation",
        "Hybrid Clouds (VMC & Nutanix Enterprise)"
      ]
    },
    {
      phase: "Embrace Containers",
      number: 2,
      subtitle: "From assessment to orchestration and security",
      steps: [
        "Application assessment for containerization",
        "Execution planning",
        "Containerised lift & shift",
        "Container orchestration across cloud",
        "Securing containers"
      ]
    },
    {
      phase: "API Ecosystem & Cloud-Native Application Development",
      number: 3,
      subtitle: "API-first, microservices, and domain platforms",
      steps: [
        "Develop API-first, cloud-native apps",
        "Microservices with bounded context",
        "Service Mesh / API Gateways",
        "API Mgmt layer & integration with legacy apps",
        "Open Banking, Loan Origination, Disbursement, Mutual Fund Fabric, AI Agents"
      ]
    },
    {
      phase: "Optimize IT Operations with Unified Dashboards & AI/ML",
      number: 4,
      subtitle: "Operate, secure, and govern at scale",
      steps: [
        "Cloud-native, intelligent performance management",
        "Unified SRO across containerised prem",
        "Automated threat detection & prevention",
        "User behavior-based security"
      ]
    },
    {
      phase: "Real-Time Insights & Analytics",
      number: 5,
      subtitle: "From data platform to business intelligence",
      steps: [
        "Scalable data platform & pipelines",
        "Custom built BI procedures to HiveSpark",
        "Real-time insight from data lakes",
        "Smart self-service insights for all users"
      ]
    }
  ];

  // Core Engineering Capabilities
  const engineeringCapabilities = [
    {
      category: "Programming Languages",
      icon: Code,
      items: [
        "Front-end: JavaScript, TypeScript, React, Angular, Vue",
        "Back-end: Java, Python, C#, Node.js, Go, Ruby",
        "Mobile: Swift, Kotlin, React Native, Flutter",
        "Low-code/No-code: Rapid platform integration"
      ]
    },
    {
      category: "Database & Caching",
      icon: Database,
      items: [
        "Relational: Oracle, SQL Server, PostgreSQL, MySQL",
        "NoSQL: MongoDB, Cassandra, DynamoDB, Couchbase",
        "Caching: Redis, Memcached, Hazelcast",
        "Big Data: Hadoop, Spark, Elasticsearch"
      ]
    }
  ];

  // Industry-Focused Solutions
  const industrySolutions = [
    {
      title: "Open Banking Solutions",
      icon: Cloud,
      description: "API-first, secure, and compliant open-banking platforms connecting banks, fintechs, and third-party providers.",
      technicalExpertise: "Microservices architecture, API management, OAuth 2.0/OpenID Connect, service-bus integration",
      keyClients: ["Axis Bank", "Federal Bank", "Poonawala Finance", "Max Life Insurance"],
      features: ["Digital KYC", "Account Aggregation", "Payment Initiation", "Consent Management"],
      image: "https://images.unsplash.com/photo-1627924657731-3f9af38e09fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc2MTA4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Loan Management Platforms",
      icon: TrendingUp,
      description: "End-to-end digital lending ecosystems unifying origination, credit assessment, disbursement, and collections.",
      technicalExpertise: "Microservices design, workflow automation, credit-bureau integrations, AI-driven credit scoring",
      keyClients: ["Tata Capital", "Mahindra Finance"],
      features: ["Automated Risk Evaluation", "Compliance Reporting", "Reduced Turnaround Time", "Scalable Architecture"],
      image: "https://images.unsplash.com/photo-1747037941864-74595e4ff56d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2FuJTIwZG9jdW1lbnR8ZW58MXx8fHwxNzY3NjExNzY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Mutual Fund Platforms",
      icon: Database,
      description: "Cloud-native solutions for investment management and investor engagement with real-time analytics.",
      technicalExpertise: "Multi-tier architecture, RTA integrations (CAMS/Karvy), portfolio analytics, mobile-first design",
      keyClients: ["Nippon", "Bandhan", "Tata Mutual Funds"],
      features: ["Investor Experience", "SEBI Compliance", "Real-time Dashboards", "Portfolio Analytics"],
      image: "https://images.unsplash.com/photo-1645226880663-81561dcab0ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdG9jayUyMG1hcmtldCUyMGNoYXJ0fGVufDF8fHx8MTc2NzU5MzY5MHww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Learning Platforms",
      icon: Users,
      description: "Next-generation digital learning ecosystems with AI/ML personalization and gamification.",
      technicalExpertise: "React/Angular UIs, Node.js/Java backends, AI/ML personalization, gamification engines",
      keyClients: ["Epic Game Labs", "Educational Institutions"],
      features: ["Adaptive Testing", "Multimedia Learning", "Massive Concurrency", "Micro-learning Modules"],
      image: "https://images.unsplash.com/photo-1610484826967-09c5720778c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbmxpbmUlMjBsZWFybmluZ3xlbnwxfHx8fDE3Njc1MTAwOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Fintech Sandbox Solutions",
      icon: Shield,
      description: "Secure innovation environments for testing and validating fintech products in regulatory compliance.",
      technicalExpertise: "Kubernetes/Docker sandboxes, secure APIs, synthetic data generation, observability dashboards",
      keyClients: ["IDBI Bank"],
      features: ["Regulatory Compliance", "Digital Lending Testing", "Fraud Detection", "Secure Innovation"],
      image: "https://images.unsplash.com/photo-1764712097764-94caf81dd1b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW50ZWNoJTIwc2VjdXJpdHl8ZW58MXx8fHwxNzY3NjExNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "IoT Solutions",
      icon: Smartphone,
      description: "Connected platforms for real-time visibility, analytics, and predictive intelligence across industries.",
      technicalExpertise: "Edge integration, MQTT/CoAP protocols, time-series datastores, streaming analytics",
      keyClients: ["Tata Power"],
      features: ["Smart Energy Monitoring", "Predictive Maintenance", "Real-time Analytics", "Anomaly Detection"],
      image: "https://images.unsplash.com/photo-1553341640-6b28ff92098a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpb3QlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NzYxMTc2NXww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  // Development Approach
  const developmentApproach = [
    {
      title: "Agile Methodologies",
      icon: Target,
      description: "Scrum, Kanban, and SAFe for iterative delivery and continuous improvement",
      impact: "Faster time-to-market, predictable releases, business alignment",
      image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2lsZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc2NzYxMTc2Nnww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "DevOps Practices",
      icon: Workflow,
      description: "Integrated culture bridging development and operations for automated delivery",
      impact: "Deployments reduced from weeks to hours with enhanced reliability",
      image: "https://images.unsplash.com/photo-1763568258244-9d5aa9c3ce45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZvcHMlMjBhdXRvbWF0aW9ufGVufDF8fHx8MTc2NzU2MjgzMXww&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Quality Assurance",
      icon: CheckCircle2,
      description: "Quality embedded from inception with automated testing and continuous integration",
      impact: "Higher product quality, minimal defect leakage, faster client sign-off",
      image: "https://images.unsplash.com/photo-1700727448542-50531bc60211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFsaXR5JTIwdGVzdGluZ3xlbnwxfHx8fDE3Njc2MTE3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      title: "Security by Design",
      icon: Shield,
      description: "Security integrated throughout SDLC with compliance and shift-left practices",
      impact: "Reduced vulnerabilities, assured compliance, enhanced client trust",
      image: "https://images.unsplash.com/photo-1655036387197-566206c80980?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwc2hpZWxkfGVufDF8fHx8MTc2NzYxMTc2N3ww&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  // Client Success Stories
  const successStories = [
    {
      title: "Banking Transformation",
      icon: Cloud,
      quote: "\"ACC's open banking platform enabled seamless integration with multiple fintechs, reducing our time-to-market for new digital services by 60%.\"",
      attribution: "— CTO, Leading Private Bank"
    },
    {
      title: "Lending Innovation",
      icon: TrendingUp,
      quote: "\"The AI-driven credit scoring system has improved our loan approval accuracy by 40% while reducing processing time from days to minutes.\"",
      attribution: "— Head of Digital, Financial Services"
    },
    {
      title: "Learning Platform",
      icon: Users,
      quote: "\"ACC's gamified learning platform increased student engagement by 75% and improved completion rates across all our digital courses.\"",
      attribution: "— Director of Education Technology"
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
      <section className="relative pt-[160px] md:pt-[200px] pb-[80px] md:pb-[120px] overflow-hidden">
        <ParticleField />
        <MeshGradient />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block mb-6"
              >
                <span className="px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full font-['Montserrat',sans-serif] text-purple-400 text-[13px] tracking-wide">
                  Digitalisation and Product Engineering
                </span>
              </motion.div>

              <h1 className="font-['Montserrat:SemiBold',sans-serif] text-[40px] md:text-[48px] leading-[1.15] text-white mb-6">
                Modernize IT Landscape & Accelerate Digital Transformation
              </h1>
              
              <p className="font-['Montserrat',sans-serif] text-[16px] md:text-[18px] text-[rgba(255,255,255,0.7)] leading-[1.65] mb-8">
                Cutting-edge product engineering and digitalisation services combining domain depth with engineering excellence across banking, financial services, education, and emerging tech sectors.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onGetStartedClick}
                  className="group px-8 py-4 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[15px] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  Start Your Transformation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>

            {/* Right Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Enterprise Success Card */}
              <div className="bg-gradient-to-br from-purple-900/30 to-violet-900/20 border border-purple-500/30 rounded-3xl p-8">
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[22px] text-white mb-8 text-center">
                  Enterprise Success
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "50+", label: "Digital Platforms" },
                    { value: "15+", label: "Industry Verticals" },
                    { value: "99.9%", label: "Platform Uptime" },
                    { value: "24/7", label: "Support Coverage" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center"
                    >
                      <div className="font-['Montserrat',sans-serif] font-bold text-[36px] md:text-[40px] mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="font-['Montserrat',sans-serif] text-[rgba(255,255,255,0.7)] text-[13px] leading-[1.4]">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Enterprise Transformation Journey */}
      <section className="py-[80px] md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[32px] md:text-[36px] text-white mb-4 leading-[1.2]">
              Digital Enterprise Transformation Journey
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[16px] md:text-[18px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.65]">
              Our proven 5-step approach to modernizing your IT landscape and accelerating digital transformation
            </p>
          </motion.div>

          {/* Journey Timeline */}
          <div className="space-y-8">
            {transformationPhases.map((phase, phaseIndex) => (
              <motion.div
                key={phaseIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: phaseIndex * 0.1 }}
                className="border-2 rounded-2xl p-6 md:p-8 transition-all duration-300 border-purple-500/20 hover:border-purple-500/40 bg-gradient-to-br from-purple-900/5 to-transparent"
              >
                {/* Phase Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-purple-500/20 border border-purple-500/30 flex items-center justify-center">
                      <span className="font-['Montserrat',sans-serif] font-bold text-[20px] text-purple-400">{phase.number}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] md:text-[24px] text-white mb-1">{phase.phase}</h3>
                      <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.6)]">{phase.subtitle}</p>
                    </div>
                  </div>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {phase.steps.map((step, stepIndex) => (
                    <motion.div
                      key={stepIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: stepIndex * 0.05 }}
                      className="relative"
                    >
                      {/* Purple dot */}
                      <div className="flex flex-col items-center text-center">
                        <div className="w-3 h-3 rounded-full bg-purple-500 mb-3" />
                        <p className="font-['Montserrat',sans-serif] text-[12px] md:text-[13px] text-[rgba(255,255,255,0.85)] leading-[1.4]">
                          {step}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Engineering Capabilities */}
      <section className="py-[80px] md:py-[120px] bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[32px] md:text-[36px] text-white mb-4 leading-[1.2]">
              Core Engineering Capabilities
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[16px] md:text-[18px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.65]">
              Comprehensive technology stack and expertise across modern development platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engineeringCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <capability.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-['Montserrat',sans-serif] font-semibold text-[22px] md:text-[28px] text-white">{capability.category}</h3>
                </div>

                <div className="space-y-3">
                  {capability.items.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                      <span className="font-['Montserrat',sans-serif] text-[14px] text-[rgba(255,255,255,0.85)] leading-[1.5]">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Focused Solutions - WITH IMAGE CARDS */}
      <section className="py-[80px] md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[32px] md:text-[36px] text-white mb-4 leading-[1.2]">
              Industry-Focused Solutions
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[16px] md:text-[18px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.65]">
              Specialized platforms and solutions tailored for specific industry needs and regulatory requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industrySolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-gradient-to-br from-[#1a1a24] to-[#0f0f16] rounded-[24px] overflow-hidden border border-white/[0.06] hover:border-purple-500/30 transition-all duration-500"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container with Hover Animation */}
                <div className="relative w-full aspect-[16/10] bg-gradient-to-br from-purple-900/10 to-black/20 overflow-hidden">
                  <motion.img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: hoveredCard === index ? 1.05 : 1
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a24] via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all duration-300">
                    <solution.icon className="w-7 h-7 text-purple-400" />
                  </div>

                  <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] md:text-[22px] text-white mb-3 leading-[1.3]">
                    {solution.title}
                  </h3>
                  <p className="font-['Montserrat',sans-serif] text-[14px] text-[rgba(255,255,255,0.6)] mb-6 leading-[1.6]">
                    {solution.description}
                  </p>

                  <div className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="font-['Montserrat',sans-serif] text-[13px] text-[rgba(255,255,255,0.75)]">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Development Approach */}
      <section className="py-[80px] md:py-[120px] bg-gradient-to-b from-purple-900/5 to-transparent">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[32px] md:text-[36px] text-white mb-4 leading-[1.2]">
              Our Development Approach
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[16px] md:text-[18px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.65]">
              Proven methodologies and practices ensuring quality, security, and rapid delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentApproach.map((approach, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all duration-300">
                  <approach.icon className="w-7 h-7 text-purple-400" />
                </div>
                
                {/* Title */}
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] md:text-[22px] text-white mb-3 leading-[1.3]">
                  {approach.title}
                </h3>
                
                {/* Description */}
                <p className="font-['Montserrat',sans-serif] text-[14px] text-[rgba(255,255,255,0.6)] leading-[1.6] mb-4">
                  {approach.description}
                </p>
                
                {/* Impact */}
                <div className="pt-4 border-t border-white/10">
                  <p className="font-['Montserrat',sans-serif] text-[12px] text-purple-400 mb-2 font-semibold">
                    Impact
                  </p>
                  <p className="font-['Montserrat',sans-serif] text-[13px] text-[rgba(255,255,255,0.7)] leading-[1.5]">
                    {approach.impact}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories - WITH IMAGE CARDS */}
      <section className="py-[80px] md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[32px] md:text-[36px] text-white mb-4 leading-[1.2]">
              Client Success Stories
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[16px] md:text-[18px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.65]">
              Transforming businesses across industries with innovative digital solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all duration-300">
                  <story.icon className="w-7 h-7 text-purple-400" />
                </div>

                {/* Title */}
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] md:text-[22px] text-white mb-6 leading-[1.3]">
                  {story.title}
                </h3>
                
                {/* Quote */}
                <p className="font-['Montserrat',sans-serif] text-[15px] text-[rgba(255,255,255,0.75)] leading-[1.65] mb-6 italic">
                  {story.quote}
                </p>

                {/* Attribution */}
                <p className="font-['Montserrat',sans-serif] text-[13px] text-purple-400 leading-[1.5]">
                  {story.attribution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[80px] md:py-[120px] relative overflow-hidden">
        <ParticleField />
        <MeshGradient />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[32px] md:text-[36px] text-white mb-6 leading-[1.2]">
              Ready to Transform Your Digital Enterprise?
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[16px] md:text-[18px] text-[rgba(255,255,255,0.7)] mb-10 max-w-2xl mx-auto leading-[1.65]">
              Join leading enterprises already accelerating their digital transformation with ACC's comprehensive digitalisation and product engineering solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                onClick={onGetStartedClick}
                className="group px-8 md:px-10 py-4 md:py-5 bg-white text-black rounded-full font-['Montserrat',sans-serif] font-semibold text-[15px] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}