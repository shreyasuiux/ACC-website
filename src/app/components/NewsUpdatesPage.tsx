import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Newspaper,
  TrendingUp,
  Award,
  Users,
  Rocket,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Filter,
  X,
  Mail,
  Bell,
  ExternalLink,
  Tag,
  ChevronRight
} from 'lucide-react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';

// Animated particle background component
const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {[...Array(40)].map((_, i) => (
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

// Categories
const categories = [
  { id: 'all', label: 'All News', icon: Newspaper },
  { id: 'product', label: 'Product Updates', icon: Rocket },
  { id: 'partnership', label: 'Partnerships', icon: Users },
  { id: 'awards', label: 'Awards & Recognition', icon: Award },
  { id: 'company', label: 'Company News', icon: TrendingUp },
];

// News Articles Data
const newsArticles = [
  {
    id: 1,
    category: 'partnership',
    title: 'Applied Cloud Computing Announces Strategic Partnership with Oracle Inc. and RackWare Inc.',
    excerpt: 'ACC partners with Oracle Inc. and RackWare Inc. for seamless cloud migration, management, and disaster recovery solutions, strengthening our enterprise cloud capabilities.',
    date: '2024-05-22',
    readTime: '4 min read',
    publication: 'Business Standard',
    image: 'https://images.unsplash.com/photo-1705234384669-c6d31c61b789?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbGVhZGVyc2hpcCUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3Njc5NTI3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.business-standard.com/content/specials/applied-cloud-computing-announces-strategic-partnership-with-oracle-inc-and-rackware-inc-for-seamless-cloud-migration-management-and-disaster-recovery-124052201171_1.html',
    featured: true,
  },
  {
    id: 2,
    category: 'partnership',
    title: 'Neo4j and Applied Cloud Computing Forge Strategic Partnership to Revolutionize Data Management',
    excerpt: 'ACC partners with Neo4j to deliver advanced graph database solutions, enabling organizations to unlock deeper insights from connected data and drive innovation.',
    date: '2024-12-20',
    readTime: '5 min read',
    publication: 'Live Mint',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc2NzkzOTA2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.livemint.com/brand-stories/neo4j-and-applied-cloud-computing-forge-strategic-partnership-to-revolutionize-data-management-11734688380040.html',
    featured: false,
  },
  {
    id: 3,
    category: 'company',
    title: 'Transforming Businesses with AI: Applied Cloud Computing\'s Vision and Strategy',
    excerpt: 'CEO Nilesh Satpute demystifies artificial intelligence (AI) as he shares insights into empowering organisations and ACC\'s comprehensive suite of AI solutions for business transformation.',
    date: '2023-11-22',
    readTime: '6 min read',
    publication: 'Economic Times',
    image: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3Njc4NjE1NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://economictimes.indiatimes.com/tech/technology/transforming-businesses-with-ai-applied-cloud-computings-vision-and-strategy/articleshow/105419837.cms',
    featured: true,
  },
  {
    id: 4,
    category: 'partnership',
    title: 'Tessell and Applied Cloud Computing Transform Cloud Migration and Modernization Landscape',
    excerpt: 'Strategic partnership with Tessell enhances ACC\'s database-as-a-service capabilities, providing customers with simplified cloud migration and modernization solutions.',
    date: '2023-11-18',
    readTime: '5 min read',
    publication: 'The Hindu',
    image: 'https://images.unsplash.com/photo-1628313348684-5d75dd67e7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhYmFzZSUyMGNsb3VkJTIwbWlncmF0aW9ufGVufDF8fHx8MTc2Nzk1Mjc1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.thehindu.com/brandhub/pr-release/tessell-and-applied-cloud-computing-transform-cloud-migration-and-modernization-landscape/article67617604.ece',
    featured: false,
  },
  {
    id: 5,
    category: 'company',
    title: 'Applied Cloud Computing Appoints Lakhvinder Singh to Head Cloud Practice',
    excerpt: 'ACC strengthens its leadership team with the appointment of Lakhvinder Singh as Head of Cloud Practice, bringing extensive experience in cloud transformation and enterprise solutions.',
    date: '2023-09-19',
    readTime: '4 min read',
    publication: 'Hindustan Times',
    image: 'https://images.unsplash.com/photo-1553976468-dcd9082bcd28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxlYWRlciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2Nzg1Mjk3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.hindustantimes.com/brand-stories/applied-cloud-computing-appoints-lakhvinder-singh-to-head-cloud-practice-101695129385364.html',
    featured: false,
  },
  {
    id: 6,
    category: 'product',
    title: 'Wireless Earplug Apps, TWS, VPN Device Smartphone Laptop Bluetooth Vulnerable',
    excerpt: 'ACC experts discuss cybersecurity vulnerabilities in wireless devices and provide insights on protecting against emerging threats in connected technologies.',
    date: '2023-01-15',
    readTime: '5 min read',
    publication: 'The Hindu',
    image: 'https://images.unsplash.com/photo-1762340916350-ad5a3d620c16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5JTIwbmV0d29yayUyMHByb3RlY3Rpb258ZW58MXx8fHwxNzY3OTUyNzU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.thehindu.com/sci-tech/technology/wireless-earplug-apps-tws-vpn-device-smartphone-laptop-bluetooth-vulnerable-apple-iphone-hacks/article66139566.ece',
    featured: false,
  },
  {
    id: 7,
    category: 'company',
    title: 'Robust Disaster Recovery Plan: A Must for Business Continuity',
    excerpt: 'ACC thought leadership on the critical importance of disaster recovery planning and how organizations can ensure business continuity in the face of disruptions.',
    date: '2023-03-10',
    readTime: '6 min read',
    publication: 'Times of India',
    image: 'https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBkYXRhJTIwY2VudGVyfGVufDF8fHx8MTc2Nzg5NzcwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://timesofindia.indiatimes.com/blogs/voices/robust-disaster-recovery-plan-a-must-for-business-continuity/',
    featured: false,
  },
  {
    id: 8,
    category: 'company',
    title: 'How to Approach Performance Improvement Plan and Layoffs',
    excerpt: 'ACC leadership shares insights on managing organizational changes, performance improvement strategies, and maintaining team morale during challenging times.',
    date: '2023-06-15',
    readTime: '5 min read',
    publication: 'MoneyControl',
    image: 'https://images.unsplash.com/photo-1707301280380-56f7e7a00aef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMHN0cmF0ZWd5fGVufDF8fHx8MTc2NzkxMTcxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.moneycontrol.com/news/business/pipped-to-the-post-how-to-approach-performance-improvement-plan-and-layoffs-10324721.html',
    featured: false,
  },
  {
    id: 9,
    category: 'company',
    title: 'Digital Science Park to Expand Digital India Initiative',
    excerpt: 'Analysis of PM Modi\'s Digital Science Park announcement in Kerala and its potential impact on tech startups and the broader digital transformation landscape.',
    date: '2023-04-25',
    readTime: '4 min read',
    publication: 'News18',
    image: 'https://images.unsplash.com/photo-1639416070357-6dc10225abec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGluZGlhfGVufDF8fHx8MTc2Nzg1MzQyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.news18.com/tech/digital-science-park-to-expand-digital-india-initiative-says-pm-modi-in-kerala-what-will-be-impact-on-tech-start-ups-7633723.html',
    featured: false,
  },
  {
    id: 10,
    category: 'partnership',
    title: 'Applied Cloud Computing Partners with Snowflake to Expand Data Capabilities',
    excerpt: 'Strategic partnership with Snowflake enhances ACC\'s data cloud capabilities, enabling customers to unlock the full potential of their data with advanced analytics and AI.',
    date: '2023-08-20',
    readTime: '5 min read',
    publication: 'The Industrial',
    image: 'https://images.unsplash.com/photo-1717501219687-ddce079f704b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW5lcmF0aXZlJTIwQUklMjBtYWNoaW5lJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzY3OTUyNzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.theindustrial.in/news/ec0bfd000f/Applied-Cloud-Computing-partners-with-Snowflake-to-expand-its-data-capabilities',
    featured: false,
  },
  {
    id: 11,
    category: 'company',
    title: 'Cracking the Right Strategy: Clarity on Outcome Must for Digital Transformation Initiatives',
    excerpt: 'ACC experts discuss the importance of clear outcome definition and strategic planning for successful digital transformation initiatives across enterprises.',
    date: '2022-09-15',
    readTime: '6 min read',
    publication: 'CIO Economic Times',
    image: 'https://images.unsplash.com/photo-1726607424623-6d9fee974241?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3Njc4ODgwMjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://cio.economictimes.indiatimes.com/news/business-analytics/cracking-the-right-strategy-clarity-on-outcome-must-for-digital-transformation-initiatives/94040925',
    featured: false,
  },
  {
    id: 12,
    category: 'product',
    title: 'Automation of Containerisation Cloud Infrastructure Deployment',
    excerpt: 'Technical insights from ACC on automating containerization and cloud infrastructure deployment, improving efficiency and reducing operational overhead.',
    date: '2022-07-10',
    readTime: '7 min read',
    publication: 'Express Computer',
    image: 'https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG91ZCUyMGluZnJhc3RydWN0dXJlJTIwc2VydmVyc3xlbnwxfHx8fDE3Njc5NTI3NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.expresscomputer.in/guest-blogs/automation-of-containerisation-cloud-infrastructure-deployment/91376/',
    featured: false,
  },
  {
    id: 13,
    category: 'company',
    title: 'Indian Startup Funding Report Q1 2023: Sectors That Attracted Maximum Funding',
    excerpt: 'Comprehensive analysis of Indian startup funding trends, highlighting sectors that attracted maximum investment and implications for the technology ecosystem.',
    date: '2023-04-05',
    readTime: '5 min read',
    publication: 'Zee Business',
    image: 'https://images.unsplash.com/photo-1761735485999-f3e7e531e149?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwZnVuZGluZyUyMGludmVzdG1lbnR8ZW58MXx8fHwxNzY3OTUyNzU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.zeebiz.com/startups/news-indian-startup-funding-report-q1-2023-equity-funding-news-unicorn-these-sectors-attracted-maximum-funding-check-out-which-ones-lagged-229740',
    featured: false,
  },
  {
    id: 14,
    category: 'product',
    title: 'Future of Business Trade Hinges on Smart Contracts',
    excerpt: 'ACC thought leadership on how smart contracts are revolutionizing business trade, improving transparency, efficiency, and trust in commercial transactions.',
    date: '2022-11-20',
    readTime: '6 min read',
    publication: 'Express Computer',
    image: 'https://images.unsplash.com/photo-1644925155331-cda18e17d99f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9ja2NoYWluJTIwc21hcnQlMjBjb250cmFjdHN8ZW58MXx8fHwxNzY3OTUyNzU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.expresscomputer.in/guest-blogs/future-of-business-trade-hinges-on-smart-contracts/88568/',
    featured: false,
  },
  {
    id: 15,
    category: 'company',
    title: 'Applied Cloud Computing Expands Operations with New Initiatives',
    excerpt: 'ACC announces expansion of operations and new strategic initiatives to strengthen market position and enhance service delivery capabilities.',
    date: '2022-07-14',
    readTime: '4 min read',
    publication: 'The Week',
    image: 'https://images.unsplash.com/photo-1694702740570-0a31ee1525c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBidWlsZGluZ3xlbnwxfHx8fDE3Njc5MzkzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.theweek.in/wire-updates/business/2022/07/14/pwr3-applied-cloud-computing--acc.html',
    featured: false,
  },
  {
    id: 16,
    category: 'company',
    title: 'API Economy Fuelling the Digital Transformation Among Enterprises',
    excerpt: 'Analysis of how the API economy is driving digital transformation initiatives across enterprises and enabling new business models and partnerships.',
    date: '2022-05-18',
    readTime: '5 min read',
    publication: 'CIO India',
    image: 'https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBUEklMjBpbnRlZ3JhdGlvbiUyMGNvZGV8ZW58MXx8fHwxNzY3OTUyNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.theweek.in/wire-updates/business/2022/07/14/pwr3-applied-cloud-computing--acc.html',
    featured: false,
  },
  {
    id: 17,
    category: 'company',
    title: 'Migration to Cloud Services by BFSI Sector to Provide Distinct Business Advantage',
    excerpt: 'ACC insights on how Banking, Financial Services, and Insurance sector organizations can leverage cloud migration for competitive advantage and operational efficiency.',
    date: '2022-08-25',
    readTime: '5 min read',
    publication: 'CXO Today',
    image: 'https://images.unsplash.com/photo-1571715268998-d6e79bed5fc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5raW5nJTIwZmluYW5jZSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3OTUyNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://cxotoday.com/cxo-bytes/migration-to-cloud-services-by-bfsi-sector-to-provide-distinct-business-advantage/',
    featured: false,
  },
  {
    id: 18,
    category: 'awards',
    title: 'Enterprise IT World June Issue 2022',
    excerpt: 'ACC featured in Enterprise IT World magazine, showcasing our expertise in enterprise technology solutions and digital transformation strategies.',
    date: '2022-06-01',
    readTime: '3 min read',
    publication: 'Enterprise IT World',
    image: 'https://images.unsplash.com/photo-1572028412480-0a75271c6bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hZ2F6aW5lJTIwcHVibGljYXRpb258ZW58MXx8fHwxNzY3OTUyNzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.enterpriseitworld.com/enterprise-it-world-june-issue-2022/',
    featured: false,
  },
  {
    id: 19,
    category: 'company',
    title: 'How Data Analytics Has Changed Retail Business in India',
    excerpt: 'CEO Nilesh Satpute discusses the transformative impact of data analytics on India\'s retail sector and emerging trends in customer experience optimization.',
    date: '2023-02-14',
    readTime: '5 min read',
    publication: 'CIO Economic Times',
    image: 'https://images.unsplash.com/photo-1721875426552-7f309c70c6e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRhaWwlMjBzaG9wcGluZyUyMGFuYWx5dGljc3xlbnwxfHx8fDE3Njc5NTI3NjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://cio.economictimes.indiatimes.com/news/strategy-and-management/nilesh-satpute-acc-on-how-data-analytics-has-changed-retail-business-in-india/99803140',
    featured: false,
  },
  {
    id: 20,
    category: 'awards',
    title: 'Applied Cloud Computing Achieves AWS Migration Services Competency Status',
    excerpt: 'ACC achieves the prestigious AWS Migration Services Competency, demonstrating our proven expertise in helping customers migrate workloads to AWS cloud infrastructure.',
    date: '2023-04-25',
    readTime: '4 min read',
    publication: 'DevDiscourse',
    image: 'https://images.unsplash.com/photo-1566762270258-d5e142c581bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhd3MlMjBjbG91ZCUyMGNlcnRpZmljYXRpb258ZW58MXx8fHwxNzY3OTUyNzYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.devdiscourse.com/article/technology/2428725-applied-cloud-computing-achieves-aws-migration-services-competency-status',
    featured: false,
  },
  {
    id: 21,
    category: 'company',
    title: 'Digital Transformation for Insurance Sector',
    excerpt: 'ACC experts share insights on digital transformation strategies specifically tailored for the insurance industry, addressing unique challenges and opportunities.',
    date: '2023-01-30',
    readTime: '6 min read',
    publication: 'Express Computer',
    image: 'https://images.unsplash.com/photo-1739430514990-a2896a43786a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN1cmFuY2UlMjBkaWdpdGFsJTIwYnVzaW5lc3N8ZW58MXx8fHwxNzY3OTUyNzYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.expresscomputer.in/guest-blogs/digital-transformation-for-insurance-sector/97916/',
    featured: false,
  },
  {
    id: 22,
    category: 'company',
    title: 'Digital Transformation for Healthcare',
    excerpt: 'Comprehensive analysis of digital transformation trends in healthcare, exploring how technology is revolutionizing patient care and operational efficiency.',
    date: '2022-10-12',
    readTime: '5 min read',
    publication: 'Express Healthcare',
    image: 'https://images.unsplash.com/photo-1758691462848-ba1e929da259?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY3OTM2Nzc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    link: 'https://www.expresshealthcare.in/news/digital-transformation-for-healthcare/438871/',
    featured: false,
  },
];

export default function NewsUpdatesPage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick }: { 
  onClose?: () => void;
  onServiceClick?: (serviceTitle: string) => void;
  onAIClick?: (aiPageTitle: string) => void;
  onProductClick?: (productTitle: string) => void;
  onGrowWithUsClick?: () => void;
  onWhoWeAreItemClick?: (item: string) => void;
  onLogoClick?: () => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setSubscribeStatus('error');
      setSubscribeMessage('Please enter your email address');
      return;
    }
    
    if (!emailRegex.test(email)) {
      setSubscribeStatus('error');
      setSubscribeMessage('Please enter a valid email address');
      return;
    }

    setSubscribeStatus('loading');
    
    // Simulate API call (replace with actual API integration)
    setTimeout(() => {
      setSubscribeStatus('success');
      setSubscribeMessage('Thank you for subscribing! Check your inbox for confirmation.');
      setEmail('');
      
      // Reset after 5 seconds
      setTimeout(() => {
        setSubscribeStatus('idle');
        setSubscribeMessage('');
      }, 5000);
    }, 1000);
  };

  // Filter articles based on selected category and search
  const filteredArticles = newsArticles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Featured articles (first 2 featured items)
  const featuredArticles = newsArticles.filter(article => article.featured).slice(0, 2);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

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
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden px-[16px] md:px-[40px] lg:px-[80px] py-[80px]">
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <div className="inline-block mb-6">
                <div className="px-6 py-3 rounded-full bg-purple-500/15 border border-purple-400/40 backdrop-blur-sm">
                  <span className="font-['Montserrat:Bold',sans-serif] text-[11px] md:text-[12px] text-purple-300 uppercase tracking-[0.15em]">
                    STAY INFORMED
                  </span>
                </div>
              </div>

              <h1 className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] mb-6 text-white">
                News &{" "}
                <span className="bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#7c3aed] bg-clip-text text-transparent">
                  Updates
                </span>
              </h1>

              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] mb-10 max-w-[800px] mx-auto">
                Stay up to date with the latest news, product updates, partnerships, and achievements from Applied Cloud Computing.
              </p>

              {/* Search Bar */}
              <div className="max-w-[600px] mx-auto">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                  <input
                    type="text"
                    placeholder="Search news articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 transition-all duration-300 font-['Montserrat:Regular',sans-serif] text-[14px]"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Category Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-3"
            >
              {categories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`group px-6 py-3 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                      selectedCategory === category.id
                        ? 'bg-purple-600 border-purple-500 text-white'
                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:border-purple-500/30'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[13px]">
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* All Articles Grid Section */}
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
              className="mb-10"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[24px] md:text-[32px] text-white mb-2 leading-[1.2]">
                {selectedCategory === 'all' ? 'All' : categories.find(c => c.id === selectedCategory)?.label} <span className="text-purple-500">Articles</span>
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60">
                {filteredArticles.length} {filteredArticles.length === 1 ? 'article' : 'articles'} found
              </p>
            </motion.div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filteredArticles.map((article, index) => (
                  <motion.a
                    key={article.id}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    className="group relative overflow-hidden rounded-[24px] cursor-pointer bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
                    onMouseEnter={() => setHoveredCard(article.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Image */}
                    <div className="relative h-[220px] overflow-hidden">
                      <motion.img 
                        alt={article.title}
                        className="h-full w-full object-cover" 
                        src={article.image}
                        animate={hoveredCard === article.id ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-600/90 backdrop-blur-sm">
                          <Tag className="w-3 h-3 text-white" />
                          <span className="font-['Montserrat:SemiBold',sans-serif] text-[10px] text-white uppercase">
                            {categories.find(c => c.id === article.category)?.label || article.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Meta Info */}
                      <div className="flex items-center gap-3 text-white/50 mb-3">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5" />
                          <span className="font-['Montserrat:Medium',sans-serif] text-[11px]">
                            {formatDate(article.date)}
                          </span>
                        </div>
                        <span className="text-white/30">•</span>
                        <div className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span className="font-['Montserrat:Medium',sans-serif] text-[11px]">
                            {article.readTime}
                          </span>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] text-white mb-3 leading-[1.3] line-clamp-2">
                        {article.title}
                      </h3>

                      {/* Excerpt */}
                      <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/60 leading-[1.6] mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-purple-400 group-hover:gap-3 transition-all duration-300">
                        <span className="font-['Montserrat:SemiBold',sans-serif] text-[13px]">
                          Read More
                        </span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-[24px] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={hoveredCard === article.id ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        boxShadow: '0 0 30px rgba(160, 32, 240, 0.3)',
                      }}
                    />
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>

            {/* No Results */}
            {filteredArticles.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-20"
              >
                <div className="w-20 h-20 bg-purple-600/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-purple-400" />
                </div>
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] text-white mb-3">
                  No articles found
                </h3>
                <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 mb-6">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300"
                >
                  <span className="font-['Montserrat:SemiBold',sans-serif] text-[13px] text-white">
                    Clear Filters
                  </span>
                </button>
              </motion.div>
            )}
          </div>
        </section>

        {/* Newsletter CTA Section */}
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
              <div className="w-16 h-16 bg-purple-600/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell className="w-8 h-8 text-purple-400" />
              </div>
              
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-6 leading-[1.2]">
                Stay Updated with{" "}
                <span className="text-purple-500">ACC News</span>
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] mb-8 max-w-[700px] mx-auto">
                Subscribe to our newsletter and be the first to know about new product launches, partnerships, industry insights, and company updates.
              </p>

              {/* Newsletter Form */}
              <form onSubmit={handleNewsletterSubmit} className="max-w-[600px] mx-auto mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={subscribeStatus === 'loading'}
                      className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500/50 transition-all duration-300 font-['Montserrat:Regular',sans-serif] text-[14px] disabled:opacity-50 disabled:cursor-not-allowed"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={subscribeStatus === 'loading'}
                    className="group px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-black">
                      {subscribeStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
                    </span>
                    <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
                {subscribeStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Montserrat:Medium',sans-serif] text-[13px] text-green-400 mt-3"
                  >
                    ✓ {subscribeMessage}
                  </motion.p>
                )}
                {subscribeStatus === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="font-['Montserrat:Medium',sans-serif] text-[13px] text-red-400 mt-3"
                  >
                    ⚠ {subscribeMessage}
                  </motion.p>
                )}
              </form>

              <p className="font-['Montserrat:Regular',sans-serif] text-[12px] text-white/40">
                We respect your privacy. Unsubscribe at any time.
              </p>
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