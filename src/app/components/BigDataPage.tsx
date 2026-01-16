import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Database,
  Cloud,
  BarChart3,
  Zap,
  Shield,
  GitBranch,
  Settings,
  Target,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Plug,
  Brain,
  LineChart,
  CloudCog,
  Sparkles,
  Activity,
  Gauge,
  Quote
} from "lucide-react";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { GradientCTAButton } from "./GradientCTAButton";
import { Footer } from "./Footer";
import { CTASection } from "./CTASection";

interface BigDataPageProps {
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

export function BigDataPage({
  onClose,
  onServiceClick,
  onAIClick,
  onProductClick,
  onGrowWithUsClick,
  onWhoWeAreItemClick,
  onLogoClick,
  onGetStartedClick
}: BigDataPageProps) {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Data Lifecycle Cards - consistent with design system
  const dataLifecycleCards = [
    {
      title: "Data Strategy",
      icon: Target,
      points: [
        "Designs cloud-native AWS strategies",
        "Defines roadmap for cloud adoption and modernization"
      ]
    },
    {
      title: "Data Governance",
      icon: Shield,
      points: [
        "Implements governance frameworks with AWS Lake Formation",
        "Establishes policies for access and retention"
      ]
    },
    {
      title: "Data Engineering",
      icon: Settings,
      points: [
        "Builds enterprise-grade data lakes and pipelines",
        "Leverages Databricks for AI/ML optimization"
      ]
    },
    {
      title: "Data Analytics",
      icon: BarChart3,
      points: [
        "Connects ERP, CRM, IoT, and operational systems",
        "Creates unified, real-time platforms"
      ]
    },
    {
      title: "Data Integration",
      icon: Plug,
      points: [
        "Builds dashboards and tracking KPIs",
        "Supports advanced analytics and executive reporting"
      ]
    },
    {
      title: "Machine Learning",
      icon: Brain,
      points: [
        "Operationalizes ML models on Databricks",
        "Drives predictions, personalization, and modernization"
      ]
    },
    {
      title: "Data Visualization",
      icon: LineChart,
      points: [
        "Creates interactive dashboards with Tableau",
        "Enables drill-down insights and automated reports"
      ]
    },
    {
      title: "Cloud Solutions",
      icon: CloudCog,
      points: [
        "Migrates legacy systems to AWS-native architectures",
        "Implements cloud-native and modernization"
      ]
    }
  ];

  // Comprehensive Services Tabs
  const serviceTabs = [
    {
      name: "Data Lake",
      icon: Database
    },
    {
      name: "Cloud-Native Data",
      icon: Cloud
    },
    {
      name: "Strategic Data",
      icon: Target
    },
    {
      name: "ML Enablement",
      icon: Brain
    },
    {
      name: "Data Modernization",
      icon: TrendingUp
    }
  ];

  // Data Lake Build and Operate Content
  const dataLakeContent = {
    title: "Data Lake Build and Operate",
    description: "Designing, implementing, and managing scalable data lakes for storing, processing, and analyzing large volumes of structured and unstructured data.",
    keyFeatures: [
      "Scalable data lake architecture design",
      "Real-time and batch processing capabilities",
      "Cost-optimized storage strategies",
      "Performance monitoring and optimization",
      "Multi-format data ingestion (structured, semi-structured, unstructured)",
      "Advanced data cataloging and metadata management",
      "Data governance and security implementation"
    ],
    keyBenefits: [
      "Unlimited scalability",
      "Cost-effective storage",
      "Flexible data formats",
      "Real-time analytics"
    ],
    technologies: [
      "Apache Hadoop",
      "Apache Spark",
      "AWS S3",
      "Azure Data Lake",
      "Delta Lake",
      "Apache Hive"
    ]
  };

  // Cloud-Native Data Pipelines Content
  const cloudNativeContent = {
    title: "Cloud-Native Data Pipelines",
    description: "Expertise in constructing high-performance, resilient data pipelines optimized for cloud environments, facilitating seamless data flow from diverse sources to analytical platforms.",
    keyFeaturesLeft: [
      "Event-driven pipeline architecture",
      "Multi-cloud deployment capabilities",
      "Data quality validation and monitoring",
      "CI/CD integration for pipeline deployment"
    ],
    keyFeaturesRight: [
      "Auto-scaling and fault-tolerant design",
      "Real-time stream processing",
      "Automated error handling and recovery"
    ],
    keyBenefits: [
      "High availability",
      "Auto-scaling",
      "Real-time processing",
      "Cost optimization"
    ],
    technologies: [
      "Apache Kafka",
      "Apache Airflow",
      "AWS Kinesis",
      "Azure Stream Analytics",
      "Google Dataflow",
      "Kubernetes"
    ]
  };

  // Strategic Data Platform Partnerships Content
  const strategicDataContent = {
    title: "Strategic Data Platform Partnerships",
    description: "Leveraging our strong partnerships with industry leaders like Couchbase, Cloudera, and Databricks to provide comprehensive and integrated big data solutions.",
    keyFeaturesLeft: [
      "Couchbase NoSQL database solutions for high-performance applications",
      "Databricks unified data analytics and AI capabilities",
      "Best-practice implementation methodologies",
      "Training and knowledge transfer programs"
    ],
    keyFeaturesRight: [
      "Cloudera enterprise-grade data management and analytics platforms",
      "Integrated solution architecture across platforms",
      "Ongoing support and optimization services"
    ],
    keyBenefits: [
      "Enterprise-grade solutions",
      "Proven methodologies",
      "Expert support",
      "Integrated platforms"
    ],
    technologies: [
      "Couchbase",
      "Cloudera CDP",
      "Databricks",
      "Apache Spark",
      "MLflow",
      "Delta Lake"
    ]
  };

  // ML Enablement Content
  const mlEnablementContent = {
    title: "ML Enablement",
    description: "Providing the infrastructure, tools, and expertise to build, deploy, and manage machine learning models, enabling data-driven insights and predictive capabilities.",
    keyFeaturesLeft: [
      "MLOps pipeline development and automation",
      "Real-time model serving and inference",
      "Feature engineering and data preparation",
      "Automated model retraining and deployment"
    ],
    keyFeaturesRight: [
      "Model training and validation infrastructure",
      "A/B testing and model performance monitoring",
      "Model versioning and lifecycle management"
    ],
    keyBenefits: [
      "Faster time-to-market",
      "Scalable ML operations",
      "Automated workflows",
      "Production-ready models"
    ],
    technologies: [
      "TensorFlow",
      "PyTorch",
      "Kubeflow",
      "MLflow",
      "Apache Airflow",
      "Docker",
      "Kubernetes"
    ]
  };

  // Data Modernization Content
  const dataModernizationContent = {
    title: "Data Modernization",
    description: "Helping organizations transform their legacy data systems into modern, agile, and scalable data architectures, leveraging cloud technologies for improved performance and efficiency.",
    keyFeaturesLeft: [
      "Legacy system assessment and migration planning",
      "Data warehouse to data lake migration",
      "Microservices-based data architecture",
      "BI Migration Accelerator for Databricks native visualizations"
    ],
    keyFeaturesRight: [
      "Cloud-first architecture design",
      "API-first data integration strategies",
      "Real-time analytics capability implementation",
      "Change management and training programs"
    ],
    keyBenefits: [
      "Reduced operational costs",
      "Improved agility",
      "Enhanced performance",
      "Future-ready architecture"
    ],
    technologies: [
      "AWS",
      "Azure",
      "Google Cloud",
      "Snowflake",
      "Apache Kafka",
      "Kubernetes",
      "Terraform",
      "Databricks"
    ]
  };

  // Strategic Technology Partnerships
  const technologyPartners = [
    {
      name: "Couchbase",
      badge: "NoSQL Database",
      description: "NoSQL database solutions for high-performance applications",
      features: [
        "High performance",
        "Flexible data model",
        "Built-in caching",
        "Mobile sync"
      ]
    },
    {
      name: "Cloudera",
      badge: "Data Platform",
      description: "Enterprise-grade data management and analytics platforms",
      features: [
        "Enterprise security",
        "Hybrid cloud",
        "Machine learning",
        "Data governance"
      ]
    },
    {
      name: "Databricks",
      badge: "Analytics & AI",
      description: "Unified data analytics and AI platform",
      features: [
        "Unified platform",
        "Collaborative notebooks",
        "MLOps",
        "Delta Lake"
      ]
    }
  ];

  // Databricks BI Migration Accelerator Features
  const databricksMigrationFeatures = [
    {
      title: "Proven Track Record",
      icon: CheckCircle2,
      description: "Successfully executed Tableau to Power BI, SAP BO to Power BI, and Pentaho to SAP BO migrations for enterprise clients.",
      badge: "MIGRATION SUCCESS",
      tags: ["Tableau", "Power BI", "SAP BO"],
      image: "https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3Njc1NzM3NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Automated Process",
      icon: Zap,
      description: "Automated dashboard parsing, calculation translation, and dashboard recreation capabilities streamline the migration process.",
      badge: "AUTOMATION",
      tags: ["Parsing", "Translation", "Recreation"],
      image: "https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwY2VudGVyJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc1MzEwNDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Simplified Modernization",
      icon: TrendingUp,
      description: "Accelerate your BI modernization journey with our proven accelerators designed specifically for Databricks customers.",
      badge: "DATABRICKS",
      tags: ["Accelerator", "BI Tools", "Modern"],
      image: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGdyb3d0aCUyMGNoYXJ0fGVufDF8fHx8MTc2NzU5NDc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  // Why Choose ACC for Big Data Features
  const whyChooseAccFeatures = [
    {
      title: "Scalable Architecture",
      icon: Target,
      description: "Build data solutions that grow with your business, handling petabytes of data with ease."
    },
    {
      title: "Real-time Processing",
      icon: Zap,
      description: "Enable instant insights with real-time data processing and streaming analytics capabilities."
    },
    {
      title: "Enterprise Security",
      icon: Shield,
      description: "Implement robust security measures and compliance frameworks for sensitive data protection."
    },
    {
      title: "Cloud-Native Solutions",
      icon: Cloud,
      description: "Leverage cloud technologies for cost-effective, scalable, and resilient data infrastructure."
    }
  ];

  // Get current tab content
  const getCurrentTabContent = () => {
    switch (activeTab) {
      case 0:
        return dataLakeContent;
      case 1:
        return cloudNativeContent;
      case 2:
        return strategicDataContent;
      case 3:
        return mlEnablementContent;
      case 4:
        return dataModernizationContent;
      default:
        return dataLakeContent;
    }
  };

  const currentContent = getCurrentTabContent();
  const isDataLakeTab = activeTab === 0;

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

      {/* Hero Section - Redesigned */}
      <section className="relative pt-[140px] md:pt-[180px] pb-[80px] md:pb-[120px] overflow-hidden">
        <ParticleField />
        <MeshGradient />
        
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left Content - 7 columns */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6"
              >
                <Database className="w-4 h-4 text-purple-400" />
                <span className="font-['Montserrat',sans-serif] text-purple-400 text-[13px] font-medium tracking-wide">
                  Big Data & Analytics Solutions
                </span>
              </motion.div>

              <h1 className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] text-white mb-6">
                Harness the Full Potential of Your Data
              </h1>
              
              <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[17px] text-[rgba(255,255,255,0.7)] leading-[1.7] mb-8 max-w-2xl">
                ACC empowers organizations to unlock the value of their data through comprehensive Big Data solutions, enabling advanced analytics and informed decision-making across the enterprise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <GradientCTAButton onClick={onGetStartedClick}>
                  Get Started
                </GradientCTAButton>
              </div>
            </motion.div>

            {/* Right Testimonial Card - 5 columns */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-5"
            >
              <div className="relative bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 hover:border-purple-500/40 transition-all duration-500 group">
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-violet-500/0 group-hover:from-purple-500/5 group-hover:to-violet-500/5 rounded-3xl transition-all duration-500" />
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                    <Quote className="w-6 h-6 text-purple-400" />
                  </div>
                  
                  <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-white/90 leading-[1.8] mb-6">
                    Our first client has already subscribed and downloaded 2 years of data in under a minute—something that earlier took almost a month through our on-premises downloader. A big thank you to the entire team for making this possible.
                  </p>

                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/20 border border-purple-500/30 flex items-center justify-center">
                      <Database className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-[13px] text-white/90 font-['Montserrat',sans-serif] font-medium">
                        Leading Stock Exchange
                      </div>
                      <div className="text-[12px] text-white/60 font-['Montserrat',sans-serif]">
                        India
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="text-center p-3 bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-xl">
                      <div className="font-['Montserrat',sans-serif] font-bold text-[20px] md:text-[24px] text-white mb-1">
                        2 Years
                      </div>
                      <div className="font-['Montserrat',sans-serif] text-[10px] md:text-[11px] text-white/70 leading-tight">
                        Data Downloaded
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-xl">
                      <div className="font-['Montserrat',sans-serif] font-bold text-[20px] md:text-[24px] text-white mb-1">
                        &lt;1 Min
                      </div>
                      <div className="font-['Montserrat',sans-serif] text-[10px] md:text-[11px] text-white/70 leading-tight">
                        Processing Time
                      </div>
                    </div>
                    <div className="text-center p-3 bg-gradient-to-br from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-xl">
                      <div className="font-['Montserrat',sans-serif] font-bold text-[20px] md:text-[24px] text-white mb-1">
                        30x
                      </div>
                      <div className="font-['Montserrat',sans-serif] text-[10px] md:text-[11px] text-white/70 leading-tight">
                        Faster
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Lifecycle Section - Redesigned with consistent purple theme */}
      <section className="py-[80px] md:py-[120px] bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-white mb-4 leading-[1.2]">
              Driving Digital Transformation across the Full Data Lifecycle
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] lg:text-[17px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.65]">
              Comprehensive Big Data Solutions and Advanced Analytics through our complete data lifecycle approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {dataLifecycleCards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-5 md:p-6 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
              >
                <motion.div
                  animate={{
                    scale: hoveredCard === index ? 1.1 : 1,
                    rotate: hoveredCard === index ? 5 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center mb-4 md:mb-5"
                >
                  <card.icon className="w-6 h-6 md:w-7 md:h-7 text-purple-400" />
                </motion.div>
                
                <h3 className="font-['Montserrat',sans-serif] font-semibold text-[16px] md:text-[17px] lg:text-[18px] text-white mb-3 md:mb-4 leading-[1.3]">
                  {card.title}
                </h3>
                
                <ul className="space-y-2">
                  {card.points.map((point, idx) => (
                    <li key={idx} className="font-['Montserrat',sans-serif] text-[12px] md:text-[13px] text-[rgba(255,255,255,0.7)] leading-[1.6] flex items-start gap-2">
                      <motion.span 
                        animate={{
                          scale: hoveredCard === index ? 1.2 : 1
                        }}
                        transition={{ duration: 0.3 }}
                        className="text-purple-400 text-[10px] mt-1 flex-shrink-0"
                      >
                        ●
                      </motion.span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-violet-500/0 pointer-events-none"
                  animate={{
                    opacity: hoveredCard === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.1) 0%, transparent 70%)'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Big Data Services */}
      <section className="py-[80px] md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 md:mb-12"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-white mb-4 leading-[1.2]">
              Comprehensive Big Data Services
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] lg:text-[17px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.65]">
              From data lake implementation to ML enablement, we provide end-to-end big data solutions that transform how organizations leverage their data assets.
            </p>
          </motion.div>

          {/* Service Tabs */}
          <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8 justify-center">
            {serviceTabs.map((tab, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveTab(index)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-2 px-4 md:px-6 py-2.5 md:py-3 rounded-full font-['Montserrat',sans-serif] font-medium text-[13px] md:text-[14px] transition-all duration-300 ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-purple-600 to-violet-600 text-white shadow-lg shadow-purple-500/30'
                    : 'bg-white/5 text-white/70 border border-white/10 hover:bg-white/10 hover:border-purple-500/30'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.name}</span>
                <span className="sm:hidden">{tab.name.split(' ')[0]}</span>
              </motion.button>
            ))}
          </div>

          {/* Tab Content - Data Lake Build and Operate */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-6 md:p-8 lg:p-10 hover:border-purple-500/30 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                <Database className="w-6 h-6 md:w-7 md:h-7 text-purple-400" />
              </div>
              <div>
                <h3 className="font-['Montserrat',sans-serif] font-bold text-[20px] md:text-[24px] lg:text-[28px] text-white mb-2">
                  {currentContent.title}
                </h3>
                <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.6]">
                  {currentContent.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
              {/* Key Features */}
              <div>
                <h4 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-4">
                  Key Features:
                </h4>
                <div className="space-y-3">
                  {isDataLakeTab ? (
                    // Data Lake tab - single column of features
                    currentContent.keyFeatures.map((feature: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)] leading-[1.5]">
                          {feature}
                        </span>
                      </div>
                    ))
                  ) : (
                    // Other tabs - left column of features
                    <>
                      {(currentContent as any).keyFeaturesLeft?.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)] leading-[1.5]">
                            {feature}
                          </span>
                        </div>
                      ))}
                      {(currentContent as any).keyFeaturesRight?.map((feature: string, idx: number) => (
                        <div key={`right-${idx}`} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)] leading-[1.5]">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-4">
                  Key Benefits:
                </h4>
                <div className="space-y-3">
                  {currentContent.keyBenefits.map((benefit: string, idx: number) => (
                    <div key={idx} className="px-4 py-3 bg-gradient-to-r from-purple-500/10 to-violet-500/5 border border-purple-500/20 rounded-lg hover:border-purple-500/40 transition-all duration-300">
                      <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-purple-300 font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-['Montserrat',sans-serif] font-semibold text-[15px] md:text-[16px] text-purple-400 mb-4">
                Technologies:
              </h4>
              <div className="flex flex-wrap gap-2">
                {currentContent.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 md:px-4 py-2 bg-gradient-to-r from-purple-500/10 to-violet-500/5 border border-purple-500/20 text-purple-300 rounded-full font-['Montserrat',sans-serif] text-[12px] md:text-[13px] font-medium hover:border-purple-500/40 transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Technology Partnerships */}
      <section className="py-[80px] md:py-[120px] bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-white mb-4 leading-[1.2]">
              Strategic Technology Partnerships
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] lg:text-[17px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.65]">
              We partner with industry leaders to deliver best-in-class big data solutions that meet enterprise requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {technologyPartners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-purple-500/40 transition-all duration-500 overflow-hidden"
              >
                {/* Animated gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.08) 0%, transparent 70%)'
                  }}
                />
                
                <div className="relative z-10">
                  {/* Partner Name */}
                  <h3 className="font-['Montserrat',sans-serif] font-bold text-[22px] md:text-[24px] text-white mb-4">
                    {partner.name}
                  </h3>
                  
                  {/* Badge */}
                  <div className="inline-block px-3 py-1.5 bg-purple-500/15 border border-purple-500/30 rounded-lg mb-5">
                    <span className="font-['Montserrat',sans-serif] text-purple-400 text-[12px] md:text-[13px] font-medium">
                      {partner.badge}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.7] mb-6">
                    {partner.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {partner.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-5 h-5 rounded-full border-2 border-green-400/60 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-green-400 fill-green-400/20" />
                        </div>
                        <span className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.75)]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Glow effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    boxShadow: '0 0 40px rgba(139, 92, 246, 0.15), inset 0 0 60px rgba(139, 92, 246, 0.05)'
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Databricks BI Migration Accelerator */}
      <section className="py-[80px] md:py-[120px]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <span className="font-['Montserrat',sans-serif] text-purple-400 text-[13px] font-medium">
                Databricks BI Migration
              </span>
            </div>

            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-white mb-6 leading-[1.2]">
              Databricks BI Migration Accelerator
            </h2>
            
            <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[rgba(255,255,255,0.7)] max-w-4xl mx-auto leading-[1.7]">
              We have strong capabilities to build accelerators that help customers migrate from Tableau and SAP BusinessObjects to Databricks native visualizations. We have successfully executed similar migration projects in the past including Tableau to Power BI, SAP BO to Power BI, and Pentaho to SAP BO. We now want to extend these capabilities to Databricks customers by automating dashboard parsing, calculation translation, and dashboard recreation directly on Databricks to simplify BI modernization.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {databricksMigrationFeatures.map((feature, index) => {
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="group relative bg-[#1a1a2d] border border-white/10 rounded-[20px] overflow-hidden hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  {/* Image Section */}
                  <div className="relative h-[200px] md:h-[220px] overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    {/* Purple Overlay */}
                    <div className="absolute inset-0 bg-purple-900/20" />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1a1a2d]" />
                    
                    {/* Badge on Image */}
                    <div className="absolute top-4 left-4">
                      <div className="px-3 py-1.5 bg-purple-600 rounded-full">
                        <span className="font-['Montserrat',sans-serif] text-white text-[10px] md:text-[11px] font-semibold uppercase tracking-wide">
                          {feature.badge}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-7">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-[14px] bg-purple-600/20 border border-purple-500/30 flex items-center justify-center mb-5">
                      <feature.icon className="w-6 h-6 text-purple-400" />
                    </div>

                    {/* Title */}
                    <h3 className="font-['Montserrat',sans-serif] font-bold text-[19px] md:text-[20px] text-white mb-3 leading-[1.3]">
                      {feature.title}
                    </h3>

                    {/* Description */}
                    <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.6] mb-6">
                      {feature.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {feature.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-white/70 font-['Montserrat',sans-serif] text-[11px] md:text-[12px] font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose ACC for Big Data */}
      <section className="py-[80px] md:py-[120px] bg-gradient-to-b from-transparent via-purple-900/5 to-transparent">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="font-['Montserrat',sans-serif] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-white mb-6 leading-[1.2]">
              Why Choose ACC for Big Data?
            </h2>
            <p className="font-['Montserrat',sans-serif] text-[14px] md:text-[15px] lg:text-[16px] text-[rgba(255,255,255,0.7)] max-w-3xl mx-auto leading-[1.7]">
              Our comprehensive approach to big data delivers measurable business value through proven methodologies and cutting-edge technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseAccFeatures.map((feature, index) => (
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
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/10 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-purple-400" />
                </div>

                {/* Title */}
                <h3 className="font-['Montserrat',sans-serif] font-bold text-[18px] md:text-[19px] text-white mb-4 leading-[1.3]">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="font-['Montserrat',sans-serif] text-[13px] md:text-[14px] text-[rgba(255,255,255,0.65)] leading-[1.65]">
                  {feature.description}
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

      {/* CTA Section */}
      <CTASection
        title="Ready to Transform Your Data Strategy?"
        description="Let our big data experts help you unlock the full potential of your data assets. Start your transformation journey today with a comprehensive data assessment."
        primaryButtonText="Get Started Today"
        variant="dark"
        onPrimaryClick={onGetStartedClick}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}