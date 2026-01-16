import React, { useEffect, useState } from 'react';
import { X, ArrowRight, CheckCircle2, Search, Shield, Network, FileSearch, Scale, Headphones, Users, CreditCard, TrendingUp, FileText, Bell, Activity, Eye, BookOpen, Mic, Target, UserCheck, Lightbulb, MessagesSquare, Database, Clock, TrendingDown, Server, ShieldAlert, Code, Rocket, Repeat, Lock, Languages, UserCog, Zap, Cloud, Sparkles, MonitorCheck, MessageSquare, BarChart3, Calendar, AlertTriangle, ClipboardCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from './Footer';
import { Nav } from '../../imports/Desktop72';
import { MobileAIPageSelector } from './MobileAIPageSelector';

interface BFSIAgentsPageProps {
  onClose: () => void;
  onServiceClick: (serviceTitle: string) => void;
  onAIClick: (aiPageTitle: string) => void;
  onProductClick: (productTitle: string) => void;
  onGrowWithUsClick: () => void;
  onWhoWeAreItemClick: (item: string) => void;
  onLogoClick?: () => void;
  onGetStartedClick?: () => void;
}

// Animated particle background component
const AIParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.8, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            repeat: Infinity,
            delay: Math.random() * 2,
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

const trustFeatures = [
  {
    icon: CheckCircle2,
    label: "RBI & DPDP Act Compliant",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Shield,
    label: "Zero Data Leakage Design",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: FileSearch,
    label: "Explainable & Audit-Ready",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Network,
    label: "Multilingual AI Models",
    color: "from-purple-500 to-purple-600"
  }
];

const quickFeatures = [
  {
    title: "BFSI-Grade",
    subtitle: "Security & Compliance"
  },
  {
    title: "Explainable",
    subtitle: "AI with Audit Trails"
  },
  {
    title: "Multi-Cloud",
    subtitle: "Deployment Ready"
  },
  {
    title: "Weeks",
    subtitle: "Not Months"
  }
];

const approachSteps = [
  {
    number: "1",
    title: "Discovery and Design",
    heading: "Understanding workflows, compliance, and technology landscape",
    description: "We begin by understanding each institution's workflows, compliance structure, and technology landscape. Our domain teams — across Compliance, Risk, Lending, Audit, and Customer Operations — collaborate with client stakeholders to identify high-impact automation areas.",
    icon: Search,
    color: "from-purple-500 to-purple-600",
    features: [
      "Purpose-Driven Intelligence Framework",
      "Explainability and data safety focus",
      "Measurable ROI identification",
      "Stakeholder collaboration workshops"
    ]
  },
  {
    number: "2",
    title: "Secure AI Development",
    heading: "BFSI-grade engineering practices with compliance focus",
    description: "ACC engineers follow strict BFSI-grade engineering practices with RBI and DPDP Act compliant data handling, zero data leakage design, and continuous model evaluation.",
    icon: Shield,
    color: "from-purple-500 to-purple-600",
    features: [
      "RBI and DPDP Act compliant data handling",
      "Zero data leakage design with regional deployment",
      "Model transparency and governance",
      "Role-based access controls and audit trails"
    ]
  },
  {
    number: "3",
    title: "Integration and Deployment",
    heading: "Seamless integration with core banking systems",
    description: "Agents are integrated with core banking systems (CBS, LOS, LMS, CRM, GRC, API gateways) using secure connectors and encryption.",
    icon: Network,
    color: "from-purple-500 to-purple-600",
    features: [
      "API-first integration approach",
      "Containerized deployment for scalability",
      "Continuous monitoring via MLOps and CloudOps",
      "24×7 managed support with periodic retraining"
    ]
  },
  {
    number: "4",
    title: "Compliance and Explainability",
    heading: "Regulator-ready with full audit trails",
    description: "Each agent deployed by ACC is explainable, traceable, and regulator-ready. Audit trails, role-based dashboards, and digital logs ensure accountability across all automated actions.",
    icon: FileSearch,
    color: "from-purple-500 to-purple-600",
    features: [
      "Explainable AI with full traceability",
      "Role-based compliance dashboards",
      "Digital audit logs and accountability",
      "Regulator-ready documentation"
    ]
  }
];

// Features Card Component
const FeaturesCard = ({ features, align }: { features: string[], align: 'left' | 'right' }) => {
  return (
    <div className="p-6 rounded-[12px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300">
      <h3 className="text-[18px] md:text-[20px] font-['Montserrat:Bold',sans-serif] text-purple-400 mb-1">
        Key Features
      </h3>
      <ul className="space-y-2 pt-4 border-t border-white/10">
        {features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-2"
          >
            <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
            <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/70">
              {feature}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Agent data organized by categories
const agentCategories = [
  {
    id: 'regulatory',
    name: 'Regulatory & Compliance',
    icon: Scale,
    agents: [
      {
        icon: Scale,
        iconColor: 'from-blue-500 to-blue-600',
        title: 'Regulatory and Compliance Agents',
        subtitle: 'Automated regulatory monitoring and compliance management',
        description: 'Monitor circulars from RBI, SEBI, IRDAI, FIU-IND, and NHB, summarize changes, and automatically map them to internal SOPs and compliance workflows — enabling faster response and zero missed mandates.',
        features: [
          'Real-time regulatory circular monitoring',
          'Automated policy change summarization',
          'SOP mapping and workflow integration',
          'Compliance deadline tracking'
        ]
      },
      {
        icon: Eye,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Automated Regulatory Policy Monitoring System',
        subtitle: 'Continuous regulatory change tracking and compliance',
        description: 'Automatically monitors and tracks regulatory policy changes from RBI, SEBI, IRDAI, and other financial regulators. Provides instant alerts and impact analysis for compliance teams.',
        features: [
          'Real-time regulatory updates monitoring',
          'Automated policy change alerts',
          'Impact analysis and compliance mapping',
          'Regulatory deadline tracking'
        ]
      },
      {
        icon: BookOpen,
        iconColor: 'from-teal-500 to-teal-600',
        title: 'Digital Register Automation',
        subtitle: 'Automated register management and record keeping',
        description: 'Digitizes and automates maintenance of statutory registers, ledgers, and compliance records. Ensures accurate, audit-ready documentation with automated data entry and validation.',
        features: [
          'Automated register data entry',
          'Real-time validation and error detection',
          'Audit-ready documentation',
          'Compliance record management'
        ]
      }
    ]
  },
  {
    id: 'audit',
    name: 'Audit & Operations',
    icon: Activity,
    agents: [
      {
        icon: FileSearch,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Audit and Operations Agents',
        subtitle: 'Digitized audit processes with automated data collection',
        description: 'Digitize branch audits, automate data collection, and create exception-tracking dashboards with audit-ready logs for Circle Audit Controllers, Zonal Heads, and Compliance Teams.',
        features: [
          'Automated branch audit digitization',
          'Exception tracking dashboards',
          'Audit-ready log generation',
          'Real-time compliance monitoring'
        ]
      },
      {
        icon: Bell,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Incident, Log, and Monitoring Agents',
        subtitle: 'Proactive system monitoring and incident management',
        description: 'Analyze logs from CBS, UPI, and ATM systems to detect anomalies, generate automated RCA reports, and trigger alerts through ServiceNow or internal monitoring tools.',
        features: [
          'Real-time anomaly detection',
          'Automated RCA report generation',
          'Multi-system log analysis',
          'Integrated alert management'
        ]
      },
      {
        icon: Activity,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'System Log Analysis & Root Cause Identification using LLMs',
        subtitle: 'AI-powered system diagnostics',
        description: 'Uses large language models to analyze complex system logs, identify patterns, and pinpoint root causes of issues. Accelerates troubleshooting and reduces downtime.',
        features: [
          'Intelligent log pattern analysis',
          'Automated root cause identification',
          'Issue correlation and prediction',
          'Faster problem resolution'
        ]
      }
    ]
  },
  {
    id: 'customer',
    name: 'Customer Service',
    icon: Headphones,
    agents: [
      {
        icon: MessagesSquare,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Customer & Employee Assistants',
        subtitle: 'Multilingual conversational AI for enhanced experiences',
        description: 'Conversational AI chatbots simplify customer onboarding, KYC checks, and policy queries in English, Hindi, and regional languages. These assistants reduce dependency on manual intervention.',
        features: [
          'Multilingual customer support',
          'Automated KYC and onboarding',
          'Policy query resolution',
          'Reduced manual intervention'
        ]
      },
      {
        icon: Users,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Customer Onboarding & KYC Agent',
        subtitle: 'Automated KYC validation and customer onboarding',
        description: 'This agent automates customer onboarding by validating KYC documents such as Aadhaar, PAN, address proof, and selfies. It checks data consistency, flags mismatches, and tracks KYC status end to end.',
        features: [
          'Automated KYC document validation',
          'Data consistency checks and mismatch detection',
          'End-to-end KYC status tracking',
          'Faster onboarding with lower rejection rates',
          'RBI/SEBI compliance adherence'
        ]
      },
      {
        icon: Headphones,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Customer Support & Service Desk Agent',
        subtitle: 'Intelligent customer query resolution',
        description: 'This agent handles customer queries related to accounts, loans, investments, statements, NAVs, SIPs, charges, and policies. It can resolve issues directly or route them to the right team with full context.',
        features: [
          'Multi-domain query handling',
          'Direct issue resolution or intelligent routing',
          'Context-aware team escalation',
          'Reduced call center load',
          'Improved customer experience'
        ]
      },
      {
        icon: UserCheck,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Intelligent Client Onboarding & KYC/AML/Fraud Data Collection via Prompts',
        subtitle: 'Guided onboarding with compliance checks',
        description: 'Interactive AI-guided onboarding system that collects KYC, AML, and fraud prevention data through intelligent prompts. Ensures complete and compliant customer information.',
        features: [
          'Intelligent prompt-based data collection',
          'KYC/AML compliance validation',
          'Fraud risk assessment',
          'Complete customer profiling'
        ]
      },
      {
        icon: Clock,
        iconColor: 'from-purple-500 to-purple-600',
        title: '24x7 AI Concierge for Personalized Guidance & Custom Reports',
        subtitle: 'Always-on intelligent customer service',
        description: 'Always-on AI concierge provides intelligent customer service 24x7. Delivers personalized guidance, answers queries, and generates custom reports on demand. Enhances customer experience with instant, intelligent support.',
        features: [
          '24x7 availability and support',
          'Personalized guidance and recommendations',
          'On-demand custom report generation',
          'Multilingual support'
        ]
      },
      {
        icon: Users,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Customer 360 & Customer Communication Portal',
        subtitle: 'Unified customer view and personalized engagement',
        description: 'Provides a comprehensive 360-degree view of customers with integrated touchpoints across all channels. Unified customer communication portal enables personalized engagement across all touchpoints and channels.',
        features: [
          'Complete customer profile aggregation',
          'Personalized engagement tracking',
          'Multi-channel communication management',
          'Customer journey analytics'
        ]
      },
      {
        icon: Search,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Customer Prospecting & Research Automation',
        subtitle: 'AI-driven lead generation and research',
        description: 'Automates customer prospecting and research by analyzing market data, social signals, and behavioral patterns. Identifies high-value leads and provides actionable intelligence for sales teams.',
        features: [
          'Automated lead identification',
          'Prospect profile generation',
          'Market intelligence analysis',
          'Lead scoring and prioritization'
        ]
      }
    ]
  },
  {
    id: 'credit',
    name: 'Credit & Risk',
    icon: CreditCard,
    agents: [
      {
        icon: CreditCard,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Credit and Risk Assessment Agents',
        subtitle: 'Intelligent credit analysis and risk scoring',
        description: 'Automate credit memo generation, investigation reports, and risk scoring for Retail, SME, and Credit Card portfolios using OCR, NLP, and LLM-driven intelligence.',
        features: [
          'Automated credit memo generation',
          'Risk scoring and assessment',
          'OCR and NLP-driven analysis',
          'Portfolio-specific intelligence'
        ]
      },
      {
        icon: TrendingUp,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Loan & Credit Assessment Agent',
        subtitle: 'Intelligent credit analysis and loan processing',
        description: 'This agent analyzes customer data like income, bank statements, bureau scores, transaction patterns, and past repayment behavior to assess creditworthiness. It recommends approve, reject, or conditional approval with reasons.',
        features: [
          'Comprehensive creditworthiness analysis',
          'Bureau score and transaction pattern evaluation',
          'Automated approval recommendations with reasoning',
          'Better credit decisions and reduced NPAs',
          'Faster loan processing'
        ]
      },
      {
        icon: Bell,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Collections & Early Warning Agent',
        subtitle: 'Proactive delinquency risk management',
        description: 'This agent continuously monitors repayment behavior and transaction trends to predict delinquency risk. It triggers early warning alerts, suggests follow-up actions, and prioritizes high-risk accounts for collection teams.',
        features: [
          'Continuous repayment behavior monitoring',
          'Delinquency risk prediction',
          'Early warning alerts and follow-up suggestions',
          'High-risk account prioritization',
          'Lower defaults and improved recovery rates'
        ]
      },
      {
        icon: TrendingUp,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Credit & Default Risk Assessment using Alternative Data',
        subtitle: 'Enhanced risk modeling with non-traditional data',
        description: 'Assesses credit and default risk by leveraging non-traditional data sources such as utility payments, digital footprints, and behavioral patterns. Enables lending to underserved segments with better risk profiling.',
        features: [
          'Alternative data source integration',
          'Enhanced risk scoring models',
          'Underserved segment evaluation',
          'Financial inclusion enablement'
        ]
      },
      {
        icon: ShieldAlert,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Fraud Detection & Risk Management',
        subtitle: 'Real-time fraud prevention and risk mitigation',
        description: 'Advanced AI-powered fraud detection system that identifies suspicious activities, prevents fraudulent transactions, and manages risk across all banking operations. Learns continuously to detect new fraud patterns.',
        features: [
          'Real-time transaction monitoring',
          'Anomaly detection and alerts',
          'Behavior-based fraud identification',
          'Risk scoring and prevention'
        ]
      },
      {
        icon: TrendingDown,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Collection Risk Management System',
        subtitle: 'Intelligent collections and recovery optimization',
        description: 'AI-driven collections management system that optimizes recovery strategies, prioritizes accounts, and automates collection workflows. Improves recovery rates and reduces NPAs.',
        features: [
          'Intelligent account prioritization',
          'Automated collection workflows',
          'Recovery strategy optimization',
          'Performance analytics and insights'
        ]
      }
    ]
  },
  {
    id: 'investment',
    name: 'Investment & Advisory',
    icon: TrendingUp,
    agents: [
      {
        icon: TrendingUp,
        iconColor: 'from-purple-500 to-pink-500',
        title: 'Mutual Fund Advisory & Suitability Agent',
        subtitle: 'Personalized investment recommendations at scale',
        description: 'This agent evaluates investor profile, risk appetite, goals, time horizon, and existing portfolio. It recommends suitable mutual fund categories and rebalancing actions while ensuring regulatory suitability.',
        features: [
          'Comprehensive investor profile evaluation',
          'Risk-based fund recommendations',
          'Portfolio rebalancing suggestions',
          'Regulatory suitability compliance',
          'Personalized advice at scale'
        ]
      },
      {
        icon: Lightbulb,
        iconColor: 'from-purple-600 to-purple-700',
        title: 'Advisor Digital Assistant for Investment Ideas, Up-sell & Cross-sell',
        subtitle: 'AI-powered sales and advisory support',
        description: 'Provides financial advisors with real-time investment ideas, up-sell and cross-sell opportunities based on customer profiles, risk appetite, and product suitability.',
        features: [
          'Personalized investment recommendations',
          'Up-sell and cross-sell identification',
          'Customer profile analysis',
          'Market trend insights'
        ]
      }
    ]
  },
  {
    id: 'documentation',
    name: 'Documentation & Knowledge',
    icon: FileText,
    agents: [
      {
        icon: Database,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Synthetic Data Generation for Model Training (Indian Banking & NBFCs)',
        subtitle: 'Privacy-preserving training data generation',
        description: 'Generates synthetic data that mimics real banking and NBFC datasets for AI model training while preserving privacy. Enables robust model development without exposing sensitive customer data.',
        features: [
          'Privacy-preserving data generation',
          'Realistic banking data simulation',
          'Compliance with data protection regulations',
          'BFSI-specific dataset generation'
        ]
      },
      {
        icon: FileText,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Staff Assistant & Document Summarization Chatbot',
        subtitle: 'AI-powered employee productivity assistant',
        description: 'Intelligent chatbot that assists employees by summarizing lengthy documents, policies, and reports. Provides quick answers to internal queries and accelerates decision-making.',
        features: [
          'Document summarization and extraction',
          'Policy and procedure guidance',
          'Internal knowledge base queries',
          'Productivity enhancement'
        ]
      },
      {
        icon: FileText,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Automated Credit Memos & Investigation Reports',
        subtitle: 'AI-generated credit analysis documentation',
        description: 'Automatically generates comprehensive credit memos and investigation reports using AI analysis of financial data, credit history, and risk factors. Reduces manual effort and ensures consistency.',
        features: [
          'Automated credit memo generation',
          'Investigation report creation',
          'Financial data analysis',
          'Consistent documentation standards'
        ]
      },
      {
        icon: FileSearch,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Loan Application Documentation using Advanced OCR & NLP',
        subtitle: 'Intelligent document processing for loan applications',
        description: 'Uses advanced OCR and NLP to extract, validate, and process loan application documents. Automatically identifies missing information and flags inconsistencies.',
        features: [
          'Advanced OCR document extraction',
          'NLP-based data validation',
          'Missing information detection',
          'Automated consistency checks'
        ]
      },
      {
        icon: Lightbulb,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'AI-Enabled Knowledge Management for Employee Service & Sales Support',
        subtitle: 'Intelligent knowledge base for employee empowerment',
        description: 'AI-powered knowledge management system that provides employees with instant access to product information, sales scripts, service procedures, and best practices.',
        features: [
          'Intelligent knowledge retrieval',
          'Product information access',
          'Sales and service guidance',
          'Best practice recommendations'
        ]
      },
      {
        icon: FileText,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Automated Drafting of Incident & Investigation Reports',
        subtitle: 'AI-generated incident documentation',
        description: 'Automatically drafts detailed incident and investigation reports based on system logs, user inputs, and historical data. Ensures comprehensive documentation and faster resolution.',
        features: [
          'Automated incident report generation',
          'Investigation documentation',
          'Root cause analysis',
          'Compliance-ready reporting'
        ]
      },
      {
        icon: Mic,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Customer Sentiment & Operational Feedback Analysis from Call Center Transcripts',
        subtitle: 'Voice-of-customer insights from call data',
        description: 'Analyzes call center transcripts to extract customer sentiment, identify pain points, and generate operational insights. Helps improve service quality and customer satisfaction.',
        features: [
          'Sentiment analysis from transcripts',
          'Pain point identification',
          'Service quality insights',
          'Trend analysis and reporting'
        ]
      },
      {
        icon: Server,
        iconColor: 'from-purple-500 to-purple-600',
        title: 'Master Data Management System',
        subtitle: 'Centralized data governance and quality',
        description: 'Comprehensive master data management system that ensures data consistency, quality, and governance across all banking systems. Provides single source of truth for enterprise data.',
        features: [
          'Centralized data repository',
          'Data quality management',
          'Cross-system data synchronization',
          'Data governance and compliance'
        ]
      }
    ]
  }
];

export default function BFSIAgentsPage({
  onClose,
  onServiceClick,
  onAIClick,
  onProductClick,
  onGrowWithUsClick,
  onWhoWeAreItemClick,
  onLogoClick,
  onGetStartedClick
}: BFSIAgentsPageProps) {
  const [activeCategory, setActiveCategory] = useState('regulatory');

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[1100] bg-black overflow-y-auto">
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

      {/* Mobile AI Page Selector - Only visible on mobile */}
      <div className="sticky top-[65px] z-[1190]">
        <MobileAIPageSelector 
          currentPage="BFSI Agents"
          onPageChange={onAIClick}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[92px] md:pt-[92px]">
        {/* Deep charcoal background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a15] via-[#0a0a0f] to-[#0a0a0f]" />

        {/* Animated mesh + particles */}
        <AIMeshGradient />
        <AIParticleField />

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Ambient glow orbs */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-[700px] h-[700px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(217, 70, 239, 0.15) 0%, transparent 70%)",
          }}
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        <div className="relative max-w-[1280px] mx-auto px-6 md:px-12 py-24 w-full z-10">
          <div className="text-center max-w-[1000px] mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                AGENTIC AI SERVICES FOR BFSI
              </span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Montserrat:SemiBold',sans-serif] text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] mb-6"
            >
              <span className="text-[#f0f0f2]">Design. Build. Deploy </span>
              <span className="bg-gradient-to-r from-[#C084FC] via-[#E879F9] to-[#F0ABFC] bg-clip-text text-transparent">Intelligent Agents</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[16px] md:text-[18px] font-['Montserrat',sans-serif] text-[#b3b3ba] leading-[1.7] mb-10 max-w-[800px] mx-auto"
            >
              At Applied Cloud Computing (ACC), we specialize in building custom AI agents that automate decision-making, simplify compliance, and transform customer and employee experiences in the banking and financial services ecosystem.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <button 
                onClick={onGetStartedClick}
                className="group px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span className="text-[15px] font-['Montserrat:SemiBold',sans-serif] text-black">
                  Start Your AI Journey
                </span>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            {/* Quick Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1100px] mx-auto">
                {quickFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                    className="p-6 rounded-[12px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
                  >
                    <h3 className="text-[18px] md:text-[20px] font-['Montserrat:Bold',sans-serif] text-purple-400 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] font-['Montserrat:Regular',sans-serif] text-white/60">
                      {feature.subtitle}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Our Approach Introduction Section */}
      <section className="relative py-[80px] md:py-[120px] px-[24px] md:px-[80px]">
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
            className="text-center max-w-[900px] mx-auto mb-16"
          >
            <h2 className="text-[36px] md:text-[48px] font-['Montserrat:Bold',sans-serif] text-white mb-6">
              Our Approach
            </h2>
            <p className="text-[16px] md:text-[18px] font-['Montserrat:Regular',sans-serif] text-white/70 leading-[1.7]">
              Our Agentic AI Services combine domain expertise, cloud engineering, and large language model (LLM) orchestration to deliver secure, explainable, and audit-ready automation — purpose-built for regulated BFSI environments.
            </p>
          </motion.div>

          {/* Trust Features - Horizontal Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {trustFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  className="relative group"
                >
                  <div className="relative p-8 rounded-[16px] bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 group-hover:from-purple-500/10 group-hover:to-blue-500/10 rounded-[16px] transition-all duration-300" />
                    
                    <div className="relative flex flex-col items-center text-center">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-[15px] md:text-[16px] font-['Montserrat:SemiBold',sans-serif] text-white leading-[1.4]">
                        {feature.label}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Approach Steps Section */}
      <section className="relative py-[80px] md:py-[120px] px-[16px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="relative max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[80px]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="font-['Montserrat:SemiBold',sans-serif] text-[13px] text-purple-400 uppercase tracking-wider">
                Our Methodology
              </span>
            </div>
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[36px] md:text-[42px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              From Discovery to Deployment
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[17px] text-white/60 max-w-[700px] mx-auto leading-[1.7]">
              A proven four-step approach designed for BFSI-grade security, compliance, and rapid time-to-value
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line - Desktop centered, Mobile left */}
            <motion.div
              className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[2px] h-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            >
              <div className="w-full h-full bg-gradient-to-b from-purple-500 via-purple-500/50 to-purple-500/20" />
            </motion.div>

            {/* Mobile timeline line */}
            <motion.div
              className="md:hidden absolute top-0 left-[24px] w-[2px] h-full"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            >
              <div className="w-full h-full bg-gradient-to-b from-purple-500 via-purple-500/50 to-purple-500/20" />
            </motion.div>

            <div className="space-y-[40px] md:space-y-[60px]">
              {approachSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: "easeOut"
                  }}
                  className="relative"
                >
                  {/* Desktop Layout - Alternating */}
                  <div className={`hidden md:grid md:grid-cols-2 md:gap-[80px] items-start`}>
                    
                    {/* Left Side Content */}
                    <div className={`${index % 2 === 0 ? 'order-1' : 'order-2'}`}>
                      {index % 2 === 0 ? (
                        // Content on left
                        <div className="pr-[40px]">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg shadow-purple-500/30 mb-[24px]">
                            <step.icon className="w-4 h-4 text-white" />
                            <span className="font-['Montserrat:Bold',sans-serif] text-[12px] text-white uppercase tracking-wider">
                              Step {step.number}
                            </span>
                          </div>
                          <h3 className="font-['Montserrat:Bold',sans-serif] text-[28px] lg:text-[32px] text-white mb-[16px] leading-[1.2]">
                            {step.title}
                          </h3>
                          <p className="font-['Montserrat:SemiBold',sans-serif] text-[16px] text-purple-400 mb-[16px] leading-[1.5]">
                            {step.heading}
                          </p>
                          <p className="font-['Montserrat:Regular',sans-serif] text-[15px] text-white/60 leading-[1.8] mb-[24px]">
                            {step.description}
                          </p>
                        </div>
                      ) : (
                        // Features card on left when content is on right
                        <div className="pr-[40px]">
                          <FeaturesCard features={step.features} align="left" />
                        </div>
                      )}
                    </div>

                    {/* Right Side Content */}
                    <div className={`${index % 2 === 0 ? 'order-2' : 'order-1'}`}>
                      {index % 2 === 0 ? (
                        // Features card on right
                        <div className="pl-[40px]">
                          <FeaturesCard features={step.features} align="left" />
                        </div>
                      ) : (
                        // Content on right
                        <div className="pl-[40px]">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg shadow-purple-500/30 mb-[24px]">
                            <step.icon className="w-4 h-4 text-white" />
                            <span className="font-['Montserrat:Bold',sans-serif] text-[12px] text-white uppercase tracking-wider">
                              Step {step.number}
                            </span>
                          </div>
                          <h3 className="font-['Montserrat:Bold',sans-serif] text-[28px] lg:text-[32px] text-white mb-[16px] leading-[1.2]">
                            {step.title}
                          </h3>
                          <p className="font-['Montserrat:SemiBold',sans-serif] text-[16px] text-purple-400 mb-[16px] leading-[1.5]">
                            {step.heading}
                          </p>
                          <p className="font-['Montserrat:Regular',sans-serif] text-[15px] text-white/60 leading-[1.8] mb-[24px]">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Center Dot - Desktop */}
                    <div className="absolute left-1/2 top-[32px] -translate-x-1/2 z-20">
                      <motion.div
                        className="relative"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3, duration: 0.5, type: "spring" }}
                      >
                        {/* Outer glow ring */}
                        <motion.div
                          className="absolute inset-0 w-[48px] h-[48px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-purple-500/30 blur-xl"
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 0.8, 0.5],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: index * 0.3,
                          }}
                        />
                        {/* Main dot */}
                        <div className="relative w-[20px] h-[20px] rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-4 border-black shadow-lg shadow-purple-500/50" />
                        {/* Inner pulse */}
                        <motion.div
                          className="absolute inset-0 w-[20px] h-[20px] rounded-full bg-purple-400"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.8, 0, 0.8],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                      </motion.div>
                    </div>
                  </div>

                  {/* Mobile Layout - Stack Vertically */}
                  <div className="md:hidden pl-[64px] relative">
                    {/* Mobile Dot */}
                    <div className="absolute left-[16px] top-[32px] z-20">
                      <motion.div
                        className="relative"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.4, type: "spring" }}
                      >
                        {/* Outer glow */}
                        <motion.div
                          className="absolute inset-0 w-[32px] h-[32px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 rounded-full bg-purple-500/30 blur-lg"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.7, 0.5],
                          }}
                          transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            delay: index * 0.2,
                          }}
                        />
                        {/* Main dot */}
                        <div className="relative w-[16px] h-[16px] rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-[3px] border-black shadow-lg shadow-purple-500/50" />
                      </motion.div>
                    </div>

                    {/* Mobile Content */}
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 shadow-lg shadow-purple-500/30 mb-[16px]">
                        <step.icon className="w-3.5 h-3.5 text-white" />
                        <span className="font-['Montserrat:Bold',sans-serif] text-[11px] text-white uppercase tracking-wider">
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[22px] text-white mb-[12px] leading-[1.3]">
                        {step.title}
                      </h3>
                      <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-purple-400 mb-[12px] leading-[1.5]">
                        {step.heading}
                      </p>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 leading-[1.7] mb-[20px]">
                        {step.description}
                      </p>
                      
                      {/* Mobile Features */}
                      <FeaturesCard features={step.features} align="left" />
                    </div>
                  </div>

                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="relative py-[80px] md:py-[120px] px-[16px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        
        <div className="relative max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[36px] md:text-[42px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              What We Deliver
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[17px] text-white/60 max-w-[800px] mx-auto leading-[1.7]">
              Six specialized AI agent types designed for comprehensive BFSI automation
            </p>
          </motion.div>

          {/* Category Tabs - Horizontal Scrollable on Mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-[40px]"
          >
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 min-w-max md:min-w-0 md:flex-wrap md:justify-center pb-2 md:pb-0">
                {agentCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full font-['Montserrat:SemiBold',sans-serif] text-[14px] transition-all duration-300 whitespace-nowrap ${
                      activeCategory === category.id
                        ? 'bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg shadow-purple-500/30'
                        : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white/80 border border-white/10'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Agent Cards Grid - Animated */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            >
              {agentCategories
                .find((cat) => cat.id === activeCategory)
                ?.agents.map((agent, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative"
                  >
                    {/* Card Background with Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-900/10 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Card */}
                    <div className="relative h-full p-8 rounded-[20px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-[12px] bg-gradient-to-br ${agent.iconColor} flex items-center justify-center mb-6 shadow-lg`}>
                        <agent.icon className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[22px] text-white mb-3 leading-[1.3]">
                        {agent.title}
                      </h3>
                      
                      {/* Subtitle */}
                      <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[15px] text-purple-400 mb-4 leading-[1.5]">
                        {agent.subtitle}
                      </p>
                      
                      {/* Description */}
                      <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/60 mb-6 leading-[1.7]">
                        {agent.description}
                      </p>
                      
                      {/* Features List */}
                      <div className="space-y-2.5 pt-6 border-t border-white/10">
                        {agent.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2.5"
                          >
                            <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                            <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/70 leading-[1.6]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>

        </div>
      </section>

      {/* BFSI-Grade Excellence Section */}
      <section className="relative py-[80px] md:py-[120px] px-[16px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        
        <div className="relative max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[36px] md:text-[42px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              How We Ensure BFSI-Grade Excellence
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[17px] text-white/60 max-w-[900px] mx-auto leading-[1.7]">
              Seven critical practice areas that guarantee enterprise-grade security, compliance, and performance
            </p>
          </motion.div>

          {/* Excellence Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="rounded-[20px] overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 backdrop-blur-sm"
          >
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-purple-600 to-purple-500 p-6">
              <div className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white">
                Practice Area
              </div>
              <div className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white hidden md:block">
                Our Implementation
              </div>
            </div>

            {/* Table Rows */}
            <div className="divide-y divide-white/10">
              {[
                {
                  icon: Database,
                  area: 'Data Governance',
                  implementation: 'DPDP-compliant, encryption-at-rest and in-transit, regional data residency'
                },
                {
                  icon: Sparkles,
                  area: 'Model Governance',
                  implementation: 'Explainable AI, versioning, bias checks, and lineage tracking'
                },
                {
                  icon: Lock,
                  area: 'Security',
                  implementation: 'Multi-cloud security frameworks, IAM-based controls, penetration-tested setups'
                },
                {
                  icon: Eye,
                  area: 'Auditability',
                  implementation: 'End-to-end traceability, timestamped actions, compliance dashboards'
                },
                {
                  icon: TrendingUp,
                  area: 'Scalability',
                  implementation: 'Containerized deployments, autoscaling, and microservices'
                },
                {
                  icon: Languages,
                  area: 'Multilingual Enablement',
                  implementation: 'AI models fine-tuned for Hindi, Marathi, Bengali, Tamil, Telugu, and more'
                },
                {
                  icon: UserCog,
                  area: 'Human Oversight',
                  implementation: 'Every agent includes human-in-loop checkpoints for review and governance'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 p-6 hover:bg-white/[0.03] transition-all duration-300"
                >
                  {/* Practice Area */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[17px] text-white">
                      {item.area}
                    </h3>
                  </div>
                  
                  {/* Implementation - Always visible on mobile */}
                  <div className="md:flex md:items-center">
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/70 leading-[1.7] md:pl-4">
                      <span className="md:hidden font-['Montserrat:SemiBold',sans-serif] text-purple-400 block mb-2">Implementation:</span>
                      {item.implementation}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Delivery Excellence Section */}
      <section className="relative py-[80px] md:py-[120px] px-[16px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        
        <div className="relative max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[36px] md:text-[42px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Delivery Excellence
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[17px] text-white/60 max-w-[800px] mx-auto leading-[1.7]">
              Our projects are executed through a structured delivery model
            </p>
          </motion.div>

          {/* Delivery Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: Target,
                title: 'Assessment Workshop',
                description: 'Define agent goals and success metrics'
              },
              {
                icon: Lightbulb,
                title: 'Design Sprint',
                description: 'Map workflows, build prompt chains, and data connectors'
              },
              {
                icon: Code,
                title: 'Development & Testing',
                description: 'Secure coding, model tuning, sandbox validation'
              },
              {
                icon: Rocket,
                title: 'Deployment & Governance',
                description: 'Cloud-native rollout with dashboards and alerts'
              },
              {
                icon: Repeat,
                title: 'Continuous Optimization',
                description: 'Ongoing improvement through user feedback and analytics'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-900/10 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card - LEFT ALIGNED */}
                <div className="relative h-full p-8 rounded-[20px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                  {/* Icon - left aligned */}
                  <div className="w-16 h-16 rounded-[16px] bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title - left aligned */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[17px] md:text-[18px] text-white mb-3 leading-[1.3]">
                    {step.title}
                  </h3>
                  
                  {/* Description - left aligned */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/60 leading-[1.6]">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Banks Choose ACC Section */}
      <section className="relative py-[80px] md:py-[120px] px-[16px] md:px-[40px] lg:px-[80px]">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        
        <div className="relative max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[36px] md:text-[42px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Why Banks and NBFCs Choose ACC
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[17px] text-white/60 max-w-[900px] mx-auto leading-[1.7]">
              Five key differentiators that make ACC the preferred partner for BFSI AI transformation
            </p>
          </motion.div>

          {/* Differentiators Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: 'Deep BFSI Expertise',
                description: 'Over a decade of domain knowledge across lending, compliance, and operations'
              },
              {
                icon: Cloud,
                title: 'Cloud-Native Delivery',
                description: 'Built and deployed securely on AWS, Azure, GCP, or on-prem environments'
              },
              {
                icon: Sparkles,
                title: 'Agentic AI Specialists',
                description: 'Every agent is custom-engineered, not generic'
              },
              {
                icon: Shield,
                title: 'Regulator-Ready Compliance',
                description: 'Audit trails, explainability, and encryption are standard, not optional'
              },
              {
                icon: Zap,
                title: 'Faster Time-to-Value',
                description: 'Modular components allow deployment in weeks, not months'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-900/10 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card - LEFT ALIGNED */}
                <div className="relative h-full p-8 rounded-[20px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                  {/* Icon - left aligned */}
                  <div className="w-16 h-16 rounded-[16px] bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Title - left aligned */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-4 leading-[1.3]">
                    {item.title}
                  </h3>
                  
                  {/* Description - left aligned */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/60 leading-[1.7]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Real-World Impact Section */}
      <section className="relative py-[80px] md:py-[120px] px-[16px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        
        <div className="relative max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[36px] md:text-[42px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Real-World Impact
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[17px] text-white/60 max-w-[900px] mx-auto leading-[1.7]">
              Proven results from our AI agent implementations across leading BFSI institutions
            </p>
          </motion.div>

          {/* Impact Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Clock,
                title: 'Automated RBI policy interpretation for a private sector bank',
                result: 'Reducing compliance turnaround from 5 days to 5 hours'
              },
              {
                icon: MonitorCheck,
                title: 'Digitized branch audits across 500+ locations',
                result: 'Live dashboards and instant exception alerts'
              },
              {
                icon: BarChart3,
                title: 'AI-enabled credit memo generation for SME lending',
                result: 'Improving TAT by 40%'
              },
              {
                icon: MessageSquare,
                title: 'Voice-based sentiment analysis from multilingual call center transcripts',
                result: 'Identifying process bottlenecks within hours'
              }
            ].map((impact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-900/10 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card */}
                <div className="relative h-full p-8 rounded-[20px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-[12px] bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg">
                    <impact.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[17px] md:text-[18px] text-white mb-6 leading-[1.4]">
                    {impact.title}
                  </h3>
                  
                  {/* Result Badge */}
                  <div className="inline-block px-5 py-3 rounded-[12px] bg-gradient-to-r from-purple-500/20 to-purple-600/20 border border-purple-500/30">
                    <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] md:text-[15px] text-purple-300 leading-[1.5]">
                      {impact.result}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Branch Audit Agent - Featured Solution Section */}
      <section className="relative py-[80px] md:py-[120px] px-[16px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        
        <div className="relative max-w-[1400px] mx-auto">
          
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 mb-6">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <span className="font-['Montserrat:SemiBold',sans-serif] text-[13px] text-purple-400 uppercase tracking-wider">
                Featured Solution
              </span>
            </div>
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[36px] md:text-[42px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Branch Audit Agent – Retail Banking & NBFCs
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[17px] text-white/60 max-w-[900px] mx-auto leading-[1.7]">
              The Branch Audit Agent automates and standardizes branch-level audits across retail bank branches and NBFC centers. It continuously checks operational, financial, compliance, and process adherence to reduce audit gaps, fraud risk, and manual effort.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-[60px]">
            {[
              {
                icon: Clock,
                iconColor: 'from-blue-500 to-blue-600',
                title: '1. Daily Operations Audit',
                subtitle: 'Monitors whether mandatory branch activities are being followed',
                features: [
                  'Cash opening and closing balances',
                  'Teller operations and overrides',
                  'Vault access logs',
                  'End-of-day reconciliation status',
                  'Maker–checker compliance',
                  'Flags deviations in near real-time'
                ]
              },
              {
                icon: ClipboardCheck,
                iconColor: 'from-green-500 to-green-600',
                title: '2. Loan & Customer File Audit',
                subtitle: 'Verifies branch-level loan and customer documentation',
                features: [
                  'KYC completeness and validity',
                  'Loan file checklist adherence',
                  'Sanction and disbursement approvals',
                  'Document ageing and missing files',
                  'Field visit and verification reports',
                  'Identifies incomplete or non-compliant cases'
                ]
              },
              {
                icon: Shield,
                iconColor: 'from-purple-500 to-purple-600',
                title: '3. Compliance & Regulatory Checks',
                subtitle: 'Ensures adherence to RBI and internal policies',
                features: [
                  'AML and suspicious transaction indicators',
                  'Interest rate and charge disclosures',
                  'Policy deviation tracking',
                  'Audit trail completeness',
                  'SEBI/RBI guideline mapping at branch level',
                  'Creates exception-based compliance reports'
                ]
              },
              {
                icon: AlertTriangle,
                iconColor: 'from-red-500 to-red-600',
                title: '4. Cash & Fraud Risk Monitoring',
                subtitle: 'Detects early warning signals',
                features: [
                  'Abnormal cash movements',
                  'Frequent reversals or overrides',
                  'Teller-wise risk patterns',
                  'Unusual customer behavior at branch level',
                  'Repeated policy breaches',
                  'Helps prevent fraud before it escalates'
                ]
              },
              {
                icon: BarChart3,
                iconColor: 'from-indigo-500 to-indigo-600',
                title: '5. Branch Performance & Control Scoring',
                subtitle: 'Generates a Branch Risk & Audit Score',
                features: [
                  'Operational discipline score',
                  'Compliance health score',
                  'Documentation quality score',
                  'Fraud exposure index',
                  'Enables head office to rank branches and centers'
                ]
              },
              {
                icon: FileText,
                iconColor: 'from-orange-500 to-orange-600',
                title: '6. Audit Reporting & Action Tracking',
                subtitle: 'Automates audit lifecycle',
                features: [
                  'Auto-generated audit observations',
                  'Root cause analysis suggestions',
                  'Corrective action plans',
                  'Closure tracking with timelines',
                  'Historical audit trend analysis',
                  'Reduces dependency on manual audits'
                ]
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
                <div className="relative h-full p-8 rounded-[20px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-[12px] bg-gradient-to-br ${capability.iconColor} flex items-center justify-center mb-6 shadow-lg`}>
                    <capability.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[17px] md:text-[18px] text-white mb-3 leading-[1.3]">
                    {capability.title}
                  </h3>
                  
                  {/* Subtitle */}
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-purple-400 mb-5 leading-[1.5]">
                    {capability.subtitle}
                  </p>
                  
                  {/* Features List */}
                  <div className="space-y-2.5 pt-5 border-t border-white/10">
                    {capability.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5"
                      >
                        <CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />
                        <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/70 leading-[1.6]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Benefits Banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-[24px] bg-gradient-to-r from-purple-600 via-purple-500 to-purple-600 p-[2px]"
          >
            <div className="relative rounded-[22px] bg-gradient-to-r from-purple-700 via-purple-600 to-purple-700 px-8 md:px-12 py-12">
              <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] md:text-[28px] text-white mb-8 text-center">
                Branch Audit Agent Benefits
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    metric: '90%',
                    label: 'Reduction in Manual Audit Effort'
                  },
                  {
                    metric: 'Real-Time',
                    label: 'Deviation Detection & Alerts'
                  },
                  {
                    metric: '100%',
                    label: 'Branch Coverage & Consistency'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.5 }}
                    className="text-center"
                  >
                    <div className="font-['Montserrat:Bold',sans-serif] text-[40px] md:text-[48px] text-white mb-2">
                      {benefit.metric}
                    </div>
                    <div className="font-['Montserrat:SemiBold',sans-serif] text-[15px] md:text-[16px] text-purple-100">
                      {benefit.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Partner with ACC - CTA Section */}
      <section className="relative py-[100px] md:py-[140px] px-[24px] overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        {/* Dark Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a0b2e] to-black" />
        
        <div className="relative max-w-[1200px] mx-auto">
          
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Heading with Purple Accent */}
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[36px] md:text-[48px] lg:text-[56px] text-white mb-6 leading-[1.2]">
              Partner with <span className="text-[#a78bfa]">ACC</span>
            </h2>
            
            {/* Subheading */}
            <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[17px] text-white/60 max-w-[900px] mx-auto leading-[1.7] mb-[60px]">
              Build your next generation of BFSI-ready AI Agents — compliant, explainable, and engineered for real-world impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-[80px]">
              <button 
                onClick={onGetStartedClick}
                className="group px-10 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <span className="text-[15px] md:text-[16px] font-['Montserrat:SemiBold',sans-serif] text-black">
                  Talk to Our Experts
                </span>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Quick Features Bottom */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
              {[
                {
                  title: 'BFSI-Grade',
                  subtitle: 'Security & Compliance'
                },
                {
                  title: 'Explainable',
                  subtitle: 'AI with Audit Trails'
                },
                {
                  title: 'Multi-Cloud',
                  subtitle: 'Deployment Ready'
                },
                {
                  title: 'Weeks',
                  subtitle: 'Not Months'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                  className="text-center"
                >
                  <h4 className="font-['Montserrat:Bold',sans-serif] text-[24px] md:text-[28px] lg:text-[32px] text-[#a78bfa] mb-2">
                    {feature.title}
                  </h4>
                  <p className="font-['Montserrat:SemiBold',sans-serif] text-[13px] md:text-[14px] text-white/60">
                    {feature.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}