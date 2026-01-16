import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  Heart, 
  Factory, 
  ShoppingCart, 
  DollarSign,
  TrendingUp,
  Target,
  Zap,
  Cloud,
  Brain,
  Database,
  Shield,
  Check,
  X,
  ArrowRight,
  Filter,
  ChevronDown,
  CreditCard,
  Smartphone,
  Tv,
  GraduationCap,
  Gamepad2,
  BarChart3
} from 'lucide-react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';
import { Logo } from './Logo';

// Types
interface CaseStudy {
  id: string;
  category: string;
  title: string;
  description: string;
  keyImpacts: string[];
  technologies: string[];
  industry: string;
}

// All 64 Case Studies Data - Updated to match filter counts from image
const caseStudies: CaseStudy[] = [
  // Digital Transformation (40 case studies)
  // Banking & Financial Services cases
  {
    id: '1',
    category: 'Digital Transformation',
    title: 'Enterprise Banking Portal',
    description: 'A multinational bank needed to consolidate 15+ legacy systems into a unified digital banking platform for corporate clients.',
    keyImpacts: [
      'Unified access to all banking services reduced login time by 65%',
      'Transaction processing speed increased by 3x',
      'Customer satisfaction scores improved from 72% to 94%',
      'Operational costs reduced by $8M annually'
    ],
    technologies: ['Azure', 'React', 'APIs', 'OAuth'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '2',
    category: 'Digital Transformation',
    title: 'Banking Core Modernization',
    description: 'A regional bank modernized its core banking system for digital-first operations.',
    keyImpacts: [
      'Account opening time reduced from 3 days to 10 minutes',
      'System uptime improved to 99.97%',
      'Digital transaction volume increased 245%',
      'Operating costs reduced by $12M annually'
    ],
    technologies: ['Microservices', 'APIs', 'Cloud', 'Security'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '3',
    category: 'Digital Transformation',
    title: 'Mobile Banking App',
    description: 'A commercial bank launched a comprehensive mobile banking platform.',
    keyImpacts: [
      'Mobile app downloads reached 3M+',
      'Digital transactions now 67% of total volume',
      'Branch visits reduced by 48%',
      'Customer satisfaction improved to 4.6/5'
    ],
    technologies: ['React Native', 'Biometrics', 'APIs', 'Cloud'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '4',
    category: 'Digital Transformation',
    title: 'SME Banking Platform',
    description: 'A bank created a specialized digital platform for small and medium enterprises.',
    keyImpacts: [
      'SME customer base grew by 156%',
      'Loan approval time reduced from weeks to hours',
      'Cash flow management tools increased retention 34%',
      'Cross-sell success rate improved to 42%'
    ],
    technologies: ['Cloud', 'APIs', 'Analytics', 'Integration'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '5',
    category: 'Digital Transformation',
    title: 'Treasury Management System',
    description: 'A corporate bank modernized its treasury and cash management platform.',
    keyImpacts: [
      'Real-time liquidity visibility across 40+ currencies',
      'FX execution efficiency improved 67%',
      'Automated reporting saved 500+ hrs/month',
      'Client portal adoption at 89%'
    ],
    technologies: ['APIs', 'Real-time', 'Analytics', 'Cloud'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '6',
    category: 'Digital Transformation',
    title: 'Trade Finance Platform',
    description: 'A global bank digitized trade finance operations including letters of credit.',
    keyImpacts: [
      'Document processing time reduced by 78%',
      'Fraud detection improved with blockchain verification',
      'Customer onboarding time reduced from weeks to days',
      'Trade finance volume increased 43%'
    ],
    technologies: ['Blockchain', 'APIs', 'Document AI', 'Cloud'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '7',
    category: 'Digital Transformation',
    title: 'Wealth Management Platform',
    description: 'An investment firm needed a digital platform for portfolio management and client advisory services.',
    keyImpacts: [
      'Assets under management grew by $2.4B',
      'Client portal usage increased 156%',
      'Advisory service efficiency improved 67%',
      'Client satisfaction scores at 4.7/5'
    ],
    technologies: ['Azure', 'React', 'Analytics', 'Integration'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '8',
    category: 'Digital Transformation',
    title: 'Corporate Card Platform',
    description: 'A bank launched a digital corporate credit card management platform.',
    keyImpacts: [
      'Card issuance time reduced from 10 days to instant',
      'Expense tracking automated saving 200 hrs/month',
      'Fraud detection accuracy at 97%',
      'Corporate client adoption at 84%'
    ],
    technologies: ['Cloud', 'Mobile', 'APIs', 'Analytics'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '9',
    category: 'Digital Transformation',
    title: 'Digital Lending Platform',
    description: 'A bank created an end-to-end digital lending platform for personal loans.',
    keyImpacts: [
      'Loan disbursal time reduced from 7 days to 2 hours',
      'Application approval rate improved by 34%',
      'Customer acquisition cost reduced 52%',
      'Portfolio quality improved with AI credit scoring'
    ],
    technologies: ['ML', 'APIs', 'Cloud', 'Analytics'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '10',
    category: 'Digital Transformation',
    title: 'Private Banking Portal',
    description: 'A private bank modernized its wealth management services for high-net-worth clients.',
    keyImpacts: [
      'Portfolio performance reporting in real-time',
      'Client engagement increased 78%',
      'Assets under management grew $1.8B',
      'Relationship manager productivity improved 56%'
    ],
    technologies: ['React', 'Analytics', 'Security', 'Cloud'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '11',
    category: 'Digital Transformation',
    title: 'Mortgage Origination System',
    description: 'A bank digitized the mortgage application and approval process.',
    keyImpacts: [
      'Application processing time reduced 68%',
      'Document verification automated with AI',
      'Customer satisfaction improved to 4.5/5',
      'Mortgage portfolio grew by $450M'
    ],
    technologies: ['Document AI', 'APIs', 'Cloud', 'Integration'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '12',
    category: 'Digital Transformation',
    title: 'Investment Banking Portal',
    description: 'An investment bank created a digital platform for capital markets services.',
    keyImpacts: [
      'Deal execution time reduced by 42%',
      'Client collaboration improved with digital workspaces',
      'Document management automated',
      'Revenue per banker increased 34%'
    ],
    technologies: ['Cloud', 'Security', 'Collaboration', 'APIs'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '13',
    category: 'Digital Transformation',
    title: 'Retail Banking Transformation',
    description: 'A retail bank underwent complete digital transformation across all channels.',
    keyImpacts: [
      'Digital customer adoption reached 76%',
      'Branch operating costs reduced 45%',
      'Product cross-sell increased 89%',
      'Net promoter score improved from 32 to 67'
    ],
    technologies: ['Omnichannel', 'Cloud', 'CRM', 'Analytics'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '14',
    category: 'Digital Transformation',
    title: 'Open Banking Platform',
    description: 'A bank launched an open banking platform with API access for third-party developers.',
    keyImpacts: [
      'API adoption by 500+ fintech partners',
      'New revenue streams of $8M annually',
      'Customer choice increased with marketplace',
      'Developer ecosystem created'
    ],
    technologies: ['APIs', 'Cloud', 'Security', 'Integration'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '15',
    category: 'Digital Transformation',
    title: 'Cash Management Platform',
    description: 'A corporate bank digitized cash management services for enterprise clients.',
    keyImpacts: [
      'Real-time cash position visibility globally',
      'Payment processing automated 100%',
      'Liquidity optimization saved clients $45M',
      'Client satisfaction at 4.8/5'
    ],
    technologies: ['Real-time', 'APIs', 'Cloud', 'Analytics'],
    industry: 'Banking & Financial Services'
  },

  // Insurance & Financial Services cases
  {
    id: '16',
    category: 'Digital Transformation',
    title: 'SAP-Based Insurance Core',
    description: 'A major insurance provider sought to modernize its insurance operations for seamless policy, claims, payments, etc.',
    keyImpacts: [
      'Cutting policy issuance time by 60%',
      'Reducing operational costs by 32%',
      'Boosting the insurance renewal retention rate by 18%',
      'Streamlining cross-system data integrations'
    ],
    technologies: ['SAP Hana', 'Microservices', 'API'],
    industry: 'Insurance & Financial Services'
  },
  {
    id: '17',
    category: 'Digital Transformation',
    title: 'Cloud-First Claims System',
    description: 'A top-tier insurance firm wanted to fast-track claims processing and reduce manual overhead via the cloud.',
    keyImpacts: [
      'Highly automated claims lifecycle with 48% quicker processing',
      'Real-time analytics with instant insight into claims status',
      'Cost savings of $4M+, as manual errors plummeted',
      'Customer satisfaction improved to 4.3/5'
    ],
    technologies: ['GCP', 'ReactJS', 'CloudSQL'],
    industry: 'Insurance & Financial Services'
  },
  {
    id: '18',
    category: 'Digital Transformation',
    title: 'Digital Customer Onboarding',
    description: 'A leading life insurance company wanted to digitize its customer onboarding and policy journey.',
    keyImpacts: [
      '89% reduction in customer drop-off at application',
      '56% improvement in first-time policy issuance',
      'Enhanced customer self-service through digital portals',
      '24/7 accessibility and immediate policy retrieval'
    ],
    technologies: ['AWS', 'React', 'KYC', 'eNach'],
    industry: 'Insurance & Financial Services'
  },
  {
    id: '19',
    category: 'Digital Transformation',
    title: 'Insurance Broker Portal',
    description: 'An insurance brokerage network needed a unified portal for 5000+ agents to manage policies across 20+ carriers.',
    keyImpacts: [
      'Agent onboarding time reduced from 2 weeks to 2 days',
      'Policy comparison time decreased by 85%',
      'Commission processing automated saving 120 hrs/week',
      'Agent satisfaction increased to 92%'
    ],
    technologies: ['Azure', 'APIs', 'React', 'Analytics'],
    industry: 'Insurance & Financial Services'
  },
  {
    id: '20',
    category: 'Digital Transformation',
    title: 'Health Insurance Platform',
    description: 'A health insurer launched a digital platform for claims and wellness programs.',
    keyImpacts: [
      'Claims settlement time reduced by 67%',
      'Wellness program participation increased 145%',
      'Customer retention improved to 89%',
      'Fraudulent claims detected reduced costs $12M'
    ],
    technologies: ['Cloud', 'ML', 'Mobile', 'Analytics'],
    industry: 'Insurance & Financial Services'
  },

  // Fintech & Payments cases
  {
    id: '21',
    category: 'Digital Transformation',
    title: 'Modern Investor App',
    description: 'A prominent asset management company launched a modernized investor app designed to offer seamless portfolio insights.',
    keyImpacts: [
      'App usage boosted by 78% after UX overhaul',
      'Real-time investment tracking led to 46% increase in engagement',
      'First-time investor onboard time cut from 4 days to 8 hrs',
      'In-built trade suggestions improved investor returns'
    ],
    technologies: ['AWS', 'Mobile App', 'OAuth'],
    industry: 'Fintech & Payments'
  },
  {
    id: '22',
    category: 'Digital Transformation',
    title: 'Unified MF Services Platform',
    description: 'A leading mutual fund service provider sought to unify multiple workflows and reduce manual errors.',
    keyImpacts: [
      'Combined 6 internal apps into a single seamless platform',
      'Transaction processing accelerated by 42%',
      'Investor data consistency improved',
      'Integration with multiple RTA partners in single platform'
    ],
    technologies: ['Java', 'Cloud Platform', 'Security'],
    industry: 'Fintech & Payments'
  },
  {
    id: '23',
    category: 'Digital Transformation',
    title: 'Digital NPS Management',
    description: 'A mutual fund service provider transformed traditional NPS operations into a cloud-based ecosystem.',
    keyImpacts: [
      'Over 90% of NPS transactions are now digital',
      '2.5x acceleration of tier II withdrawals',
      'Enhanced reporting & transparency for investors',
      'Seamless compliance with PFRDA guidelines'
    ],
    technologies: ['Cloud Platform', 'Security', 'Automation'],
    industry: 'Fintech & Payments'
  },
  {
    id: '24',
    category: 'Digital Transformation',
    title: 'Payment Gateway Platform',
    description: 'A fintech startup needed a robust payment gateway to process millions of transactions daily.',
    keyImpacts: [
      'Processing 10M+ transactions daily with 99.99% uptime',
      'Transaction settlement time reduced by 75%',
      'Multi-currency support across 50+ countries',
      'Payment fraud reduced by 68%'
    ],
    technologies: ['AWS', 'Microservices', 'Encryption', 'APIs'],
    industry: 'Fintech & Payments'
  },
  {
    id: '25',
    category: 'Digital Transformation',
    title: 'Digital Wallet Solution',
    description: 'A mobile payments company launched a comprehensive digital wallet for consumer and merchant transactions.',
    keyImpacts: [
      'Onboarded 5M+ users in first 6 months',
      'Transaction volume increased 340% year-over-year',
      'Merchant adoption rate at 78% in target markets',
      'Customer retention improved to 89%'
    ],
    technologies: ['React Native', 'Node.js', 'Blockchain', 'Security'],
    industry: 'Fintech & Payments'
  },
  {
    id: '26',
    category: 'Digital Transformation',
    title: 'Cross-Border Payments',
    description: 'A remittance company needed a platform for instant cross-border money transfers.',
    keyImpacts: [
      'Transfer completion time reduced from 3 days to 30 minutes',
      'Transaction fees reduced by 42%',
      'Coverage expanded to 120+ countries',
      'Customer acquisition increased 215%'
    ],
    technologies: ['Blockchain', 'APIs', 'Compliance', 'Mobile'],
    industry: 'Fintech & Payments'
  },
  {
    id: '27',
    category: 'Digital Transformation',
    title: 'Credit Scoring Platform',
    description: 'A fintech lender developed an AI-powered credit scoring system for underserved markets.',
    keyImpacts: [
      'Credit assessment time reduced from days to minutes',
      'Approval rates improved by 34%',
      'Default rates reduced by 28%',
      'Served 500K+ new-to-credit customers'
    ],
    technologies: ['ML', 'Big Data', 'APIs', 'Cloud'],
    industry: 'Fintech & Payments'
  },
  {
    id: '28',
    category: 'Digital Transformation',
    title: 'Investment Trading App',
    description: 'A brokerage firm launched a mobile-first trading platform for retail investors.',
    keyImpacts: [
      'User base grew to 2M+ active traders',
      'Trading latency reduced to <50ms',
      'Commission-free trades increased engagement 178%',
      'App rating maintained at 4.5+ stars'
    ],
    technologies: ['React Native', 'Real-time', 'AWS', 'Analytics'],
    industry: 'Fintech & Payments'
  },
  {
    id: '29',
    category: 'Digital Transformation',
    title: 'Buy Now Pay Later Platform',
    description: 'An e-commerce fintech created a BNPL solution integrated with major retailers.',
    keyImpacts: [
      'Merchant integration across 5000+ retailers',
      'Transaction volume of $500M in first year',
      'Customer default rate below 2%',
      'Merchant sales increased average 28%'
    ],
    technologies: ['APIs', 'ML', 'Cloud', 'Integration'],
    industry: 'Fintech & Payments'
  },
  {
    id: '30',
    category: 'Digital Transformation',
    title: 'Cryptocurrency Exchange',
    description: 'A digital assets company launched a secure cryptocurrency trading platform.',
    keyImpacts: [
      'Daily trading volume exceeding $100M',
      'Zero security breaches in 24 months',
      'Support for 50+ cryptocurrencies',
      'User base grew to 1.2M traders'
    ],
    technologies: ['Blockchain', 'Security', 'Real-time', 'Cloud'],
    industry: 'Fintech & Payments'
  },
  {
    id: '31',
    category: 'Digital Transformation',
    title: 'Robo-Advisory Service',
    description: 'An investment firm launched an automated wealth management service for millennials.',
    keyImpacts: [
      'Assets under management reached $800M',
      'Portfolio rebalancing automated 100%',
      'Customer acquisition cost reduced 54%',
      'Average portfolio returns outperformed benchmarks by 2.1%'
    ],
    technologies: ['ML', 'Analytics', 'Cloud', 'APIs'],
    industry: 'Fintech & Payments'
  },
  {
    id: '32',
    category: 'Digital Transformation',
    title: 'UPI Payment Platform',
    description: 'A payments company built a UPI-based instant payment solution.',
    keyImpacts: [
      'Processing 50M+ transactions monthly',
      'Transaction success rate at 99.7%',
      'Merchant onboarding automated',
      'Market share grew to 23% in first year'
    ],
    technologies: ['UPI', 'Real-time', 'Cloud', 'Security'],
    industry: 'Fintech & Payments'
  },
  {
    id: '33',
    category: 'Digital Transformation',
    title: 'POS Payment System',
    description: 'A fintech created a modern point-of-sale payment acceptance platform.',
    keyImpacts: [
      'Merchant deployment across 100K+ locations',
      'Payment acceptance for all modes (cards, UPI, wallets)',
      'Settlement time reduced to T+1',
      'Merchant satisfaction at 4.6/5'
    ],
    technologies: ['Android', 'Cloud', 'Security', 'APIs'],
    industry: 'Fintech & Payments'
  },

  // Media & Entertainment cases
  {
    id: '34',
    category: 'Digital Transformation',
    title: 'Media Streaming Platform',
    description: 'A media company launched an OTT platform to compete with global streaming services.',
    keyImpacts: [
      'Platform scaled to 5M concurrent streams',
      'Content recommendation accuracy at 87%',
      'User retention improved by 64% in first 6 months',
      'Ad revenue increased by $15M in year one'
    ],
    technologies: ['AWS', 'CDN', 'ML', 'Video Encoding'],
    industry: 'Media & Entertainment'
  },
  {
    id: '35',
    category: 'Digital Transformation',
    title: 'Video Streaming Analytics',
    description: 'A media company needed advanced analytics for their streaming platform.',
    keyImpacts: [
      'Content recommendation accuracy improved to 91%',
      'Viewer engagement increased 58%',
      'Churn prediction accuracy at 84%',
      'Ad targeting efficiency improved 72%'
    ],
    technologies: ['Big Data', 'ML', 'Real-time', 'Cloud'],
    industry: 'Media & Entertainment'
  },
  {
    id: '36',
    category: 'Digital Transformation',
    title: 'Gaming Platform Development',
    description: 'A gaming company built a cloud-based multiplayer gaming platform.',
    keyImpacts: [
      'Concurrent players capacity: 500K+',
      'Latency reduced to <30ms globally',
      'In-game purchases increased 145%',
      'Player retention improved to 68%'
    ],
    technologies: ['Cloud Gaming', 'Real-time', 'CDN', 'Analytics'],
    industry: 'Media & Entertainment'
  },
  {
    id: '37',
    category: 'Digital Transformation',
    title: 'Content Management System',
    description: 'A broadcaster needed a digital asset management system for their content library.',
    keyImpacts: [
      'Managed 100K+ hours of video content',
      'Content retrieval time reduced by 89%',
      'Metadata tagging automated with AI',
      'Content monetization increased $18M'
    ],
    technologies: ['Cloud Storage', 'AI', 'CDN', 'APIs'],
    industry: 'Media & Entertainment'
  },
  {
    id: '38',
    category: 'Digital Transformation',
    title: 'Live Event Streaming',
    description: 'An entertainment company launched a platform for live event broadcasting.',
    keyImpacts: [
      'Streamed to 2M+ concurrent viewers',
      'Zero downtime during major events',
      'Revenue per event increased 234%',
      'Global reach expanded to 150+ countries'
    ],
    technologies: ['Live Streaming', 'CDN', 'Cloud', 'Analytics'],
    industry: 'Media & Entertainment'
  },

  // Education & Training cases
  {
    id: '39',
    category: 'Digital Transformation',
    title: 'E-Learning Platform',
    description: 'An education technology company built a comprehensive online learning platform.',
    keyImpacts: [
      'Enrolled 500K+ students globally',
      'Course completion rates at 76%',
      'Interactive features increased engagement 156%',
      'Instructor earnings increased average 89%'
    ],
    technologies: ['Video Platform', 'Cloud', 'Analytics', 'Mobile'],
    industry: 'Education & Training'
  },
  {
    id: '40',
    category: 'Digital Transformation',
    title: 'Corporate Training Portal',
    description: 'An enterprise needed a digital platform for employee training and development.',
    keyImpacts: [
      'Training delivery costs reduced 67%',
      'Employee certification rates improved 145%',
      'Skill gap analysis automated',
      'Training ROI increased 234%'
    ],
    technologies: ['LMS', 'Cloud', 'Analytics', 'Mobile'],
    industry: 'Education & Training'
  },

  // AI & Automation (15 case studies)
  {
    id: '41',
    category: 'AI & Automation',
    title: 'Intelligent Document Processing',
    description: 'An insurance company processed 100K+ claims documents monthly using manual data entry.',
    keyImpacts: [
      'Document processing time reduced by 92%',
      'Data extraction accuracy improved to 98.5%',
      'Processing costs reduced by $3.2M annually',
      'Employee satisfaction improved as manual work eliminated'
    ],
    technologies: ['OCR', 'AI', 'Azure', 'Python'],
    industry: 'Insurance & Financial Services'
  },
  {
    id: '42',
    category: 'AI & Automation',
    title: 'Customer Service Chatbot',
    description: 'An e-commerce retailer wanted to automate 80% of customer inquiries.',
    keyImpacts: [
      '84% of queries resolved without human intervention',
      'Average response time reduced from 45min to 30sec',
      'Customer satisfaction maintained at 4.3/5',
      'Support costs reduced by $2.8M annually'
    ],
    technologies: ['NLP', 'GPT-4', 'AWS', 'Integration'],
    industry: 'Retail & Consumer'
  },
  {
    id: '43',
    category: 'AI & Automation',
    title: 'Fraud Detection System',
    description: 'A payment processor needed real-time fraud detection for 50M+ daily transactions.',
    keyImpacts: [
      'Fraud detection accuracy of 99.4%',
      'False positive rate reduced by 87%',
      'Prevented $48M in fraudulent transactions annually',
      'Transaction processing time unchanged'
    ],
    technologies: ['ML', 'Real-time Analytics', 'AWS', 'Python'],
    industry: 'Fintech & Payments'
  },
  {
    id: '44',
    category: 'AI & Automation',
    title: 'Predictive Maintenance',
    description: 'A manufacturing plant wanted to predict equipment failures to minimize downtime.',
    keyImpacts: [
      'Unplanned downtime reduced by 76%',
      'Maintenance costs decreased by 34%',
      'Equipment lifespan extended by 23%',
      'Production output increased by 18%'
    ],
    technologies: ['IoT', 'ML', 'Azure', 'Time Series'],
    industry: 'Gaming & Technology'
  },
  {
    id: '45',
    category: 'AI & Automation',
    title: 'Recruitment Automation',
    description: 'A staffing agency needed to automate resume screening for 10K+ applications monthly.',
    keyImpacts: [
      'Resume screening time reduced by 94%',
      'Quality of candidate matches improved by 67%',
      'Time to fill positions reduced from 45 to 12 days',
      'Recruiter productivity increased 3.5x'
    ],
    technologies: ['NLP', 'ML', 'Python', 'APIs'],
    industry: 'Gaming & Technology'
  },
  {
    id: '46',
    category: 'AI & Automation',
    title: 'Inventory Optimization',
    description: 'A retail chain with 500+ stores needed AI-driven inventory management.',
    keyImpacts: [
      'Stockout incidents reduced by 68%',
      'Inventory waste decreased by 42%',
      'Working capital freed up: $12M',
      'Customer satisfaction improved by 28%'
    ],
    technologies: ['ML', 'Azure', 'Analytics', 'Forecasting'],
    industry: 'Retail & Consumer'
  },
  {
    id: '47',
    category: 'AI & Automation',
    title: 'Medical Diagnosis Assistant',
    description: 'A healthcare network wanted AI assistance for radiologists.',
    keyImpacts: [
      'Diagnosis accuracy improved by 23%',
      'Radiologist report time reduced by 45%',
      'Early detection of critical conditions increased by 34%',
      'Patient outcomes improved measurably'
    ],
    technologies: ['Computer Vision', 'AI', 'Azure', 'DICOM'],
    industry: 'Healthcare & Life Sciences'
  },
  {
    id: '48',
    category: 'AI & Automation',
    title: 'Content Moderation',
    description: 'A social media platform needed automated content moderation for 100M+ posts daily.',
    keyImpacts: [
      'Moderation speed increased 1000x',
      'Harmful content detection accuracy at 96%',
      'Moderator workload reduced by 78%',
      'Platform safety scores improved by 52%'
    ],
    technologies: ['Computer Vision', 'NLP', 'ML', 'AWS'],
    industry: 'Media & Entertainment'
  },
  {
    id: '49',
    category: 'AI & Automation',
    title: 'Dynamic Pricing Engine',
    description: 'A ride-sharing company needed real-time pricing optimization.',
    keyImpacts: [
      'Revenue increased by 34% through optimized pricing',
      'Driver utilization improved by 28%',
      'Customer price satisfaction at 4.1/5',
      'Competitive position strengthened in 12 markets'
    ],
    technologies: ['ML', 'Real-time', 'AWS', 'Analytics'],
    industry: 'Gaming & Technology'
  },
  {
    id: '50',
    category: 'AI & Automation',
    title: 'Email Campaign Optimization',
    description: 'A marketing agency wanted AI to optimize email campaigns for 500+ clients.',
    keyImpacts: [
      'Email open rates improved by 67%',
      'Click-through rates increased by 89%',
      'Campaign setup time reduced by 72%',
      'Client ROI improved by average of 145%'
    ],
    technologies: ['ML', 'NLP', 'AWS', 'Marketing APIs'],
    industry: 'Media & Entertainment'
  },
  {
    id: '51',
    category: 'AI & Automation',
    title: 'Loan Approval Automation',
    description: 'A bank wanted to automate loan approvals while maintaining compliance.',
    keyImpacts: [
      'Loan approval time reduced from 7 days to 2 hours',
      'Approval accuracy improved by 31%',
      'Default rate reduced by 18%',
      'Customer satisfaction increased to 4.5/5'
    ],
    technologies: ['ML', 'Azure', 'Compliance', 'APIs'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '52',
    category: 'AI & Automation',
    title: 'Quality Control Automation',
    description: 'An electronics manufacturer needed automated visual inspection for 1M+ units daily.',
    keyImpacts: [
      'Defect detection accuracy at 99.2%',
      'Inspection speed increased 50x',
      'Customer returns reduced by 64%',
      'Quality assurance costs decreased by $4M/year'
    ],
    technologies: ['Computer Vision', 'Edge AI', 'IoT', 'ML'],
    industry: 'Gaming & Technology'
  },
  {
    id: '53',
    category: 'AI & Automation',
    title: 'Voice Assistant Integration',
    description: 'A hotel chain wanted voice-enabled room controls across 200+ properties.',
    keyImpacts: [
      'Guest satisfaction improved by 43%',
      'Service request resolution time reduced 67%',
      'Staff efficiency increased by 38%',
      'Upsell revenue increased by $2.4M annually'
    ],
    technologies: ['NLP', 'Voice AI', 'IoT', 'Cloud'],
    industry: 'Media & Entertainment'
  },
  {
    id: '54',
    category: 'AI & Automation',
    title: 'Network Traffic Optimization',
    description: 'A telecom provider needed AI to optimize network traffic for 50M+ subscribers.',
    keyImpacts: [
      'Network congestion reduced by 58%',
      'Customer experience scores improved by 41%',
      'Infrastructure costs optimized by $18M',
      'Network capacity increased by 35% without new hardware'
    ],
    technologies: ['ML', 'Real-time', 'Analytics', 'Cloud'],
    industry: 'Gaming & Technology'
  },
  {
    id: '55',
    category: 'AI & Automation',
    title: 'Contract Analysis',
    description: 'A legal services firm needed automated contract review and risk assessment.',
    keyImpacts: [
      'Contract review time reduced by 88%',
      'Risk identification accuracy at 94%',
      'Legal costs for clients reduced by average 52%',
      'Attorney focus shifted to high-value strategic work'
    ],
    technologies: ['NLP', 'ML', 'Document AI', 'Azure'],
    industry: 'Banking & Financial Services'
  },

  // Cloud Migration (6 case studies)
  {
    id: '56',
    category: 'Cloud Migration',
    title: 'Multi-Cloud Banking Infrastructure',
    description: 'A global bank needed to migrate 200+ applications to multi-cloud.',
    keyImpacts: [
      'Zero downtime during entire migration',
      'Infrastructure costs reduced by 42%',
      'Application performance improved by 3.2x',
      'Disaster recovery time reduced from hours to minutes'
    ],
    technologies: ['AWS', 'Azure', 'Kubernetes', 'Terraform'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '57',
    category: 'Cloud Migration',
    title: 'Healthcare Data Migration',
    description: 'A hospital network needed to migrate patient data to cloud.',
    keyImpacts: [
      'Migrated 50TB of patient data with 100% integrity',
      'Achieved HIPAA compliance with zero violations',
      'Data access speed improved by 8x',
      'Storage costs reduced by 38%'
    ],
    technologies: ['Azure', 'Encryption', 'Compliance', 'Migration Tools'],
    industry: 'Healthcare & Life Sciences'
  },
  {
    id: '58',
    category: 'Cloud Migration',
    title: 'E-Commerce Platform Migration',
    description: 'A retailer needed to migrate their e-commerce platform to cloud.',
    keyImpacts: [
      'Migration completed 2 weeks ahead of schedule',
      'Platform handled 5x peak traffic successfully',
      'Page load times improved by 73%',
      'Infrastructure costs reduced by $1.8M annually'
    ],
    technologies: ['AWS', 'CloudFront', 'RDS', 'ElastiCache'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '59',
    category: 'Cloud Migration',
    title: 'Manufacturing ERP Migration',
    description: 'A manufacturer migrated SAP ERP across 25 global facilities.',
    keyImpacts: [
      'Zero production downtime during migration',
      'ERP response time improved by 4.5x',
      'IT operational costs reduced by 36%',
      'Global collaboration improved significantly'
    ],
    technologies: ['SAP HANA', 'Azure', 'Migration Factory', 'Automation'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '60',
    category: 'Cloud Migration',
    title: 'Insurance Legacy Modernization',
    description: 'An insurer needed to migrate 30-year-old mainframe systems to cloud.',
    keyImpacts: [
      'Modernized 40+ legacy applications successfully',
      'Processing capacity increased 10x',
      'Maintenance costs reduced by 68%',
      'New feature deployment time reduced from months to days'
    ],
    technologies: ['AWS', 'Refactoring', 'APIs', 'Microservices'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '61',
    category: 'Cloud Migration',
    title: 'Media Asset Management',
    description: 'A broadcaster needed to migrate 500TB of video content to cloud.',
    keyImpacts: [
      'Migrated 500TB with zero content loss',
      'Content delivery speed improved 12x globally',
      'Storage and distribution costs reduced by 45%',
      'Content monetization increased by $8M'
    ],
    technologies: ['AWS', 'S3', 'CloudFront', 'Media Services'],
    industry: 'Media & Entertainment'
  },

  // DevOps & Automation (2 case studies)
  {
    id: '62',
    category: 'DevOps & Automation',
    title: 'CI/CD Pipeline Implementation',
    description: 'A software company needed to automate development and deployment workflows.',
    keyImpacts: [
      'Deployment frequency increased from weekly to daily',
      'Release failure rate reduced by 78%',
      'Mean time to recovery reduced from hours to minutes',
      'Developer productivity improved by 45%'
    ],
    technologies: ['Jenkins', 'Docker', 'Kubernetes', 'GitOps'],
    industry: 'Banking & Financial Services'
  },
  {
    id: '63',
    category: 'DevOps & Automation',
    title: 'Infrastructure as Code',
    description: 'An enterprise needed to automate infrastructure provisioning.',
    keyImpacts: [
      'Infrastructure provisioning time reduced by 89%',
      'Configuration drift eliminated through automation',
      'Infrastructure costs optimized by 34%',
      'Compliance violations reduced to zero'
    ],
    technologies: ['Terraform', 'Ansible', 'Cloud', 'Automation'],
    industry: 'Healthcare & Life Sciences'
  },

  // IoT & Analytics (1 case study)
  {
    id: '64',
    category: 'IoT & Analytics',
    title: 'Smart Factory IoT Platform',
    description: 'A manufacturer deployed IoT sensors and analytics across production facilities.',
    keyImpacts: [
      'Real-time monitoring of 10K+ connected devices',
      'Production efficiency improved by 42%',
      'Predictive maintenance reduced downtime by 68%',
      'Energy consumption optimized saving $4M annually'
    ],
    technologies: ['IoT', 'Edge Computing', 'Analytics', 'ML'],
    industry: 'Education & Training'
  },
];

// Filter Options - Updated to match image
const industries = [
  'All Industries',
  'Banking & Financial Services',
  'Insurance & Financial Services',
  'Fintech & Payments',
  'Media & Entertainment',
  'Healthcare & Life Sciences',
  'Education & Training',
  'Gaming & Technology',
  'Manufacturing & Energy',
  'Retail & Consumer',
  'Engineering & IoT'
];

const categories = [
  'All Categories',
  'Digital Transformation',
  'AI & Automation',
  'Cloud Migration',
  'DevOps & Automation',
  'IoT & Analytics'
];

// Section 1: Hero
function HeroSection({ onGetStartedClick }: { onGetStartedClick?: () => void }) {
  return (
    <section className="relative min-h-[calc(70vh-160px)] flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-purple-950/20 to-black">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-transparent"
          animate={{
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-tl from-blue-600/10 via-purple-600/5 to-transparent"
          animate={{
            opacity: [0.5, 0.3, 0.5],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 pt-[0px] md:pt-12 pb-[80px] md:pb-[52px] text-center pr-[24px] pl-[24px]">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-['Montserrat',sans-serif] font-semibold text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] text-white mb-6 md:mb-6"
        >
          Case Studies
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Montserrat',sans-serif] text-[15px] md:text-[16px] lg:text-[18px] text-white/70 max-w-3xl mx-auto mb-12 md:mb-12 leading-[1.7] px-4"
        >
          Explore our comprehensive portfolio of 64+ success stories across industries, showcasing proven results in cloud transformation, AI automation, and digital innovation.
        </motion.p>
      </div>

      
    </section>
  );
}

// Case Study Card Component
interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  index: number;
  onRequestCaseStudy: (caseStudy: CaseStudy) => void;
}

function CaseStudyCard({ caseStudy, index, onRequestCaseStudy }: CaseStudyCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] rounded-[24px] p-6 border border-white/[0.08] hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]"
    >
      {/* Category Badge */}
      <div className="mb-4">
        <span className="inline-block px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 font-['Montserrat',sans-serif] text-[11px] font-medium text-purple-300">
          {caseStudy.category}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-['Montserrat',sans-serif] font-semibold text-[20px] text-white mb-3 leading-[1.3]">
        {caseStudy.title}
      </h3>

      {/* Description */}
      <p className="font-['Montserrat',sans-serif] text-[13px] text-white/60 mb-6 leading-[1.6] line-clamp-3">
        {caseStudy.description}
      </p>

      {/* Key Impact */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Target className="w-4 h-4 text-green-400" />
          <h4 className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-white">
            Key Impact:
          </h4>
        </div>
        <ul className="space-y-2">
          {caseStudy.keyImpacts.slice(0, 3).map((impact, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <Check className="w-3.5 h-3.5 text-green-400 mt-0.5 flex-shrink-0" />
              <span className="font-['Montserrat',sans-serif] text-[12px] text-white/70 leading-[1.5]">
                {impact}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <Zap className="w-4 h-4 text-blue-400" />
          <h4 className="font-['Montserrat',sans-serif] font-semibold text-[13px] text-white">
            Technologies:
          </h4>
        </div>
        <div className="flex flex-wrap gap-2">
          {caseStudy.technologies.map((tech, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 font-['Montserrat',sans-serif] text-[11px] text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Request Case Study Button */}
      <motion.button
        onClick={() => onRequestCaseStudy(caseStudy)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-['Montserrat',sans-serif] font-semibold text-[14px] transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]"
      >
        Request Case Study
        <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-1' : ''}`} />
      </motion.button>
    </motion.div>
  );
}

// Filter Section Component
interface FilterSectionProps {
  selectedIndustry: string;
  selectedCategory: string;
  onIndustryChange: (industry: string) => void;
  onCategoryChange: (category: string) => void;
}

function FilterSection({ selectedIndustry, selectedCategory, onIndustryChange, onCategoryChange }: FilterSectionProps) {
  const [showIndustryDropdown, setShowIndustryDropdown] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const industryRef = useRef<HTMLDivElement>(null);
  const categoryRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (industryRef.current && !industryRef.current.contains(event.target as Node)) {
        setShowIndustryDropdown(false);
      }
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setShowCategoryDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="mb-12">
      <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
        <h2 className="font-['Montserrat',sans-serif] font-semibold text-[24px] md:text-[28px] text-white">
          All Case Studies
        </h2>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 relative z-50 w-full md:w-auto">{/* Industry Filter */}
          <div ref={industryRef} className="relative w-full sm:w-auto">
            <button
              onClick={() => {
                setShowIndustryDropdown(!showIndustryDropdown);
                setShowCategoryDropdown(false);
              }}
              className="w-full sm:w-auto flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-['Montserrat',sans-serif] text-[13px] transition-all duration-300"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>{selectedIndustry}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ml-auto ${showIndustryDropdown ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showIndustryDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 left-0 min-w-[250px] max-h-[300px] overflow-y-auto bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl z-[100] py-2"
                >
                  {industries.map((industry) => (
                    <button
                      key={industry}
                      onClick={() => {
                        onIndustryChange(industry);
                        setShowIndustryDropdown(false);
                      }}
                      className={`w-full px-4 py-2 text-left font-['Montserrat',sans-serif] text-[13px] transition-all duration-200 ${
                        selectedIndustry === industry
                          ? 'bg-purple-600/20 text-purple-300'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {industry}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Category Filter */}
          <div ref={categoryRef} className="relative w-full sm:w-auto">
            <button
              onClick={() => {
                setShowCategoryDropdown(!showCategoryDropdown);
                setShowIndustryDropdown(false);
              }}
              className="w-full sm:w-auto flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-['Montserrat',sans-serif] text-[13px] transition-all duration-300"
            >
              <Filter className="w-3.5 h-3.5" />
              <span>{selectedCategory}</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ml-auto ${showCategoryDropdown ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {showCategoryDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-full mt-2 left-0 min-w-[200px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl z-[100] py-2"
                >
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        onCategoryChange(category);
                        setShowCategoryDropdown(false);
                      }}
                      className={`w-full px-4 py-2 text-left font-['Montserrat',sans-serif] text-[13px] transition-all duration-200 ${
                        selectedCategory === category
                          ? 'bg-purple-600/20 text-purple-300'
                          : 'text-white/70 hover:bg-white/5 hover:text-white'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main Case Studies Page Component
export function CaseStudiesPage({ 
  onClose, 
  onGetStartedClick,
  onServiceClick,
  onAIClick,
  onProductClick,
  onGrowWithUsClick,
  onWhoWeAreItemClick,
  onLogoClick
}: { 
  onClose: () => void; 
  onGetStartedClick?: () => void;
  onServiceClick?: (service: string) => void;
  onAIClick?: (ai: string) => void;
  onProductClick?: (product: string) => void;
  onGrowWithUsClick?: () => void;
  onWhoWeAreItemClick?: (item: string) => void;
  onLogoClick?: () => void;
}) {
  const [selectedIndustry, setSelectedIndustry] = useState('All Industries');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [displayCount, setDisplayCount] = useState(12);

  // Filter case studies
  const filteredCases = caseStudies.filter((caseStudy) => {
    const industryMatch = selectedIndustry === 'All Industries' || caseStudy.industry === selectedIndustry;
    const categoryMatch = selectedCategory === 'All Categories' || caseStudy.category === selectedCategory;
    return industryMatch && categoryMatch;
  });

  const handleRequestCaseStudy = (caseStudy: CaseStudy) => {
    if (onGetStartedClick) {
      onGetStartedClick();
    }
  };

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 12, filteredCases.length));
  };

  useEffect(() => {
    setDisplayCount(12);
  }, [selectedIndustry, selectedCategory]);

  return (
    <div className="fixed inset-0 z-[1100] bg-black overflow-y-auto">
      {/* Navigation */}
      <div className="relative z-[1200]">
        <Nav
          onServiceClick={onServiceClick}
          onAIClick={onAIClick}
          onProductClick={onProductClick}
          onGrowWithUsClick={onGrowWithUsClick}
          onWhoWeAreItemClick={onWhoWeAreItemClick}
          onLogoClick={onLogoClick}
          onGetStartedClick={onGetStartedClick}
        />
        <MobileNav
          onServiceClick={onServiceClick}
          onAIClick={onAIClick}
          onProductClick={onProductClick}
          onGrowWithUsClick={onGrowWithUsClick}
          onWhoWeAreItemClick={onWhoWeAreItemClick}
          onLogoClick={onLogoClick}
          onGetStartedClick={onGetStartedClick}
        />
      </div>

      <div className="w-full pt-[80px] pr-[0px] pb-[0px] pl-[0px]">
        <HeroSection onGetStartedClick={onGetStartedClick} />

        {/* Case Studies Grid Section */}
        <section className="relative py-8 bg-black mt-[-80px] mr-[0px] mb-[0px] ml-[0px]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">{/* FilterSection */}
            <FilterSection
              selectedIndustry={selectedIndustry}
              selectedCategory={selectedCategory}
              onIndustryChange={setSelectedIndustry}
              onCategoryChange={setSelectedCategory}
            />

            {/* Results Count */}
            <div className="mb-6">
              <p className="font-['Montserrat',sans-serif] text-[14px] text-white/60">
                Showing {Math.min(displayCount, filteredCases.length)} of {filteredCases.length} case studies
              </p>
            </div>

            {/* Case Studies Grid */}
            {filteredCases.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {filteredCases.slice(0, displayCount).map((caseStudy, index) => (
                    <CaseStudyCard
                      key={caseStudy.id}
                      caseStudy={caseStudy}
                      index={index}
                      onRequestCaseStudy={handleRequestCaseStudy}
                    />
                  ))}
                </div>

                {/* Load More Button */}
                {displayCount < filteredCases.length && (
                  <div className="flex justify-center mb-12">
                    <motion.button
                      onClick={handleLoadMore}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-3 rounded-full border-2 border-white/[0.12] text-white font-['Montserrat',sans-serif] font-semibold text-[14px] hover:bg-white/[0.05] hover:border-purple-500/50 transition-all duration-300"
                    >
                      Load More Case Studies
                    </motion.button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="font-['Montserrat',sans-serif] text-[16px] text-white/50">
                  No case studies match your filters. Try adjusting your selection.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 bg-[#0a0a0f] overflow-hidden">
          {/* Particle field background */}
          <motion.div
            className="absolute inset-0 opacity-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          
          {/* Purple-black gradient band */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-[#0a0a0f] to-[#0a0a0f]" />

          {/* Animated glow waves */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background:
                "radial-gradient(ellipse at top, rgba(139, 92, 246, 0.15) 0%, transparent 50%)",
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

          <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-['Montserrat',sans-serif] font-semibold text-[40px] md:text-[48px] text-white mb-6 leading-[1.2]"
            >
              Ready to Join Our Success Stories?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-['Montserrat',sans-serif] text-[16px] text-white/70 mb-10 leading-[1.6] max-w-2xl mx-auto"
            >
              Join 100+ satisfied clients across 11+ industries. Let's discuss how AICC can transform your business with proven solutions and measurable results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <motion.button
                onClick={onGetStartedClick}
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 rounded-full bg-white text-black font-['Montserrat',sans-serif] font-semibold text-[15px] transition-all duration-300 flex items-center justify-center gap-2"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}