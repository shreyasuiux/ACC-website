import React, { useEffect, useState } from 'react';
import { X, ArrowRight, CheckCircle2, Target, TrendingUp, Users, MessageSquare, Heart, Share2, Sparkles, Palette, FileText, Video, Image, Megaphone, Mail, Globe, ShoppingBag, Package, Tag, BarChart3, Store, Truck, Eye, Award, Lightbulb, Zap, Brain, Search, PieChart, LineChart, Activity, MousePointer, Smartphone, Monitor, Star, Gift, Calendar, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Footer } from './Footer';
import { Nav } from '../../imports/Desktop72';
import { MobileAIPageSelector } from './MobileAIPageSelector';

interface BrandManagementPageProps {
  onClose: () => void;
  onServiceClick: (serviceTitle: string) => void;
  onAIClick: (aiPageTitle: string) => void;
  onProductClick: (productTitle: string) => void;
  onGrowWithUsClick: () => void;
  onWhoWeAreItemClick: (item: string) => void;
  onLogoClick?: () => void;
  onGetStartedClick?: () => void;
}

// Agent data organized by categories
const agentCategories = [
  {
    id: 'strategy',
    title: 'Brand Strategy & Positioning Agents',
    agents: [
      {
        icon: Activity,
        title: 'Brand Health Monitor',
        description: 'Continuously tracks brand perception across channels, analyzes sentiment trends, and provides real-time alerts on reputation risks across social media, review platforms, and news mentions.'
      },
      {
        icon: BarChart3,
        title: 'Competitive Brand Intelligence',
        description: 'Monitors competitor pricing, promotions, messaging, and market positioning. Generates comparative analysis reports and identifies market gaps and opportunities.'
      },
      {
        icon: CheckCircle2,
        title: 'Brand Consistency Guardian',
        description: 'Scans all marketing materials, store displays, and digital touchpoints to ensure adherence to brand guidelines. Flags deviations in logo usage, color schemes, typography, and messaging tone.'
      },
      {
        icon: MessageSquare,
        title: 'Brand Voice Optimizer',
        description: 'Analyzes customer communication across channels to ensure consistent brand voice. Suggests refinements to maintain personality alignment in customer service, marketing, and social interactions.'
      }
    ]
  },
  {
    id: 'experience',
    title: 'Customer Experience & Engagement Agents',
    agents: [
      {
        icon: Sparkles,
        title: 'Personalized Campaign Creator',
        description: 'Develops targeted marketing campaigns based on customer segments, purchase history, and behavioral patterns. Generates personalized offers and messaging for different demographics.'
      },
      {
        icon: MousePointer,
        title: 'Customer Journey Mapper',
        description: 'Tracks and analyzes customer touchpoints across online and offline channels. Identifies friction points and recommends improvements to enhance the omnichannel experience.'
      },
      {
        icon: Gift,
        title: 'Loyalty Program Optimizer',
        description: 'Analyzes loyalty program performance, identifies at-risk members, and generates personalized retention campaigns. Recommends reward structures and engagement tactics.'
      },
      {
        icon: Heart,
        title: 'Customer Sentiment Analyzer',
        description: 'Processes customer feedback from surveys, reviews, social media, and support interactions. Provides actionable insights to improve products, services, and experiences.'
      }
    ]
  },
  {
    id: 'creative',
    title: 'Content & Creative Agents',
    agents: [
      {
        icon: Image,
        title: 'Visual Content Generator',
        description: 'Creates on-brand visual assets for campaigns, social media, and promotional materials. Ensures all generated content adheres to brand aesthetic and guidelines.'
      },
      {
        icon: FileText,
        title: 'Product Description Writer',
        description: 'Generates compelling, SEO-optimized product descriptions that maintain brand voice while highlighting key features and benefits for different platforms.'
      },
      {
        icon: Calendar,
        title: 'Social Media Content Planner',
        description: 'Plans, schedules, and optimizes social media content calendars. Analyzes engagement patterns and recommends best posting times and content formats.'
      },
      {
        icon: Mail,
        title: 'Email Campaign Composer',
        description: 'Designs personalized email campaigns with dynamic content blocks based on customer preferences, purchase history, and engagement patterns.'
      }
    ]
  },
  {
    id: 'merchandising',
    title: 'Merchandising & Product Agents',
    agents: [
      {
        icon: Package,
        title: 'Assortment Planning Assistant',
        description: 'Analyzes sales trends, seasonal patterns, and regional preferences to recommend optimal product mixes for different store locations and online channels.'
      },
      {
        icon: Tag,
        title: 'Pricing Strategy Advisor',
        description: 'Monitors market dynamics, competitor pricing, and demand patterns to recommend optimal pricing strategies that maximize margins while maintaining competitiveness.'
      },
      {
        icon: TrendingUp,
        title: 'Trend Forecasting Agent',
        description: 'Scans fashion trends, social media buzz, and industry reports to predict upcoming product trends and consumer preferences.'
      },
      {
        icon: ShoppingBag,
        title: 'Inventory Storytelling Agent',
        description: 'Transforms inventory data into compelling narratives for marketing teams, highlighting best-sellers, new arrivals, and trending products.'
      }
    ]
  },
  {
    id: 'retail',
    title: 'Store Operations & Brand Experience Agents',
    agents: [
      {
        icon: Eye,
        title: 'Visual Merchandising Advisor',
        description: 'Analyzes store layouts, window displays, and in-store presentations. Provides recommendations to optimize visual impact and customer flow.'
      },
      {
        icon: Award,
        title: 'Brand Experience Auditor',
        description: 'Conducts virtual audits of store environments, customer service quality, and brand touchpoint consistency across locations.'
      },
      {
        icon: BarChart3,
        title: 'Promotional Effectiveness Analyzer',
        description: 'Evaluates performance of in-store and online promotions, identifying what drives engagement and conversion across different customer segments.'
      },
      {
        icon: Store,
        title: 'Store Performance Benchmarking Agent',
        description: 'Compares individual store performance against brand standards and peer locations, identifying best practices and areas for improvement.'
      }
    ]
  },
  {
    id: 'digital',
    title: 'Digital Brand Management Agents',
    agents: [
      {
        icon: Monitor,
        title: 'Website Experience Optimizer',
        description: 'Analyzes user behavior on e-commerce platforms, identifies drop-off points, and recommends improvements to navigation, content, and conversion funnels.'
      },
      {
        icon: Search,
        title: 'Search Engine Brand Monitor',
        description: 'Tracks brand search rankings, monitors brand-related keywords, and identifies opportunities to improve online visibility and reputation.'
      },
      {
        icon: Users,
        title: 'Influencer Partnership Evaluator',
        description: 'Analyzes influencer audiences, engagement rates, and brand alignment to recommend optimal partnership opportunities.'
      },
      {
        icon: Target,
        title: 'Digital Ad Performance Optimizer',
        description: 'Monitors campaign performance across platforms, adjusts targeting and creative elements, and optimizes budget allocation in real-time.'
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics & Insights Agents',
    agents: [
      {
        icon: LineChart,
        title: 'Customer Lifetime Value Predictor',
        description: 'Forecasts customer value based on purchase patterns, engagement levels, and demographic factors to inform retention and acquisition strategies.'
      },
      {
        icon: ShoppingBag,
        title: 'Market Basket Analyzer',
        description: 'Identifies product affinity patterns and cross-selling opportunities to optimize product placement and bundling strategies.'
      },
      {
        icon: BarChart3,
        title: 'Brand ROI Calculator',
        description: 'Measures the impact of brand initiatives on business outcomes, tracking attribution across multiple touchpoints and channels.'
      },
      {
        icon: Calendar,
        title: 'Seasonal Demand Forecaster',
        description: 'Predicts demand patterns based on historical data, weather forecasts, events, and cultural occasions to optimize inventory and marketing timing.'
      }
    ]
  }
];

// AI Particle Field Background Animation
const AIParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
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

export function BrandManagementPage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick, onGetStartedClick }: BrandManagementPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const filteredCategories = selectedCategory === 'all' 
    ? agentCategories 
    : agentCategories.filter(cat => cat.id === selectedCategory);

  return (
    <div className="fixed inset-0 z-[1100] bg-black overflow-y-auto">
      {/* Navigation */}
      <div className="relative z-[1200]">
        <Nav onClose={onClose} onServiceClick={onServiceClick} onAIClick={onAIClick} onProductClick={onProductClick} onGrowWithUsClick={onGrowWithUsClick} onWhoWeAreItemClick={onWhoWeAreItemClick} onLogoClick={onLogoClick} />
      </div>

      {/* Mobile AI Page Selector - Only visible on mobile */}
      <div className="sticky top-[65px] z-[1190]">
        <MobileAIPageSelector 
          currentPage="Brand Management Agents"
          onPageChange={onAIClick}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-[92px] md:pt-[92px]">
        {/* Deep charcoal background - matching other pages */}
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
              <span className="inline-flex items-center gap-2 px-4 py-2 text-[11px] font-semibold tracking-[0.2em] uppercase text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                AI-POWERED BRAND EXCELLENCE
              </span>
            </motion.div>
            
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Montserrat:SemiBold',sans-serif] text-[48px] md:text-[64px] lg:text-[72px] leading-[1.1] mb-6"
            >
              <span className="text-[#f0f0f2]">Brand Management Agents</span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[16px] md:text-[18px] font-['Montserrat',sans-serif] text-[#b3b3ba] leading-[1.7] mb-10 mx-auto whitespace-nowrap"
            >
              Intelligent AI agents that monitor, optimize, and enhance every aspect of your brand presence.
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
                  Explore Brand Agents
                </span>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions Overview Section */}
      <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px] bg-gradient-to-b from-black via-purple-950/5 to-black">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="max-w-[1280px] mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[60px]"
          >
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4 leading-[1.2]">
              Comprehensive Brand Management Solutions
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#b3b3ba] leading-[1.7] max-w-[900px] mx-auto">
              28 specialized AI agents across 7 categories to manage, optimize, and protect your brand
            </p>
          </motion.div>

          {/* Categories Overview Grid */}
          
        </div>
      </section>

      {/* Category Filter Tabs */}
      <section className="relative py-[40px] px-[16px] md:px-[40px] lg:px-[80px] bg-black">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-3 rounded-full font-['Montserrat:SemiBold',sans-serif] text-[14px] transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
              }`}
            >
              All Agents
            </button>
            {agentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-['Montserrat:SemiBold',sans-serif] text-[14px] transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {category.title.replace(' Agents', '')}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Agent Categories */}
      <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/5 to-black" />
        
        <div className="relative max-w-[1400px] mx-auto space-y-[80px]">
          <AnimatePresence>
            {filteredCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: categoryIndex * 0.1, duration: 0.6 }}
              >
                {/* Category Header */}
                <div className="text-center mb-[60px]">
                  <h2 className="font-['Montserrat:Bold',sans-serif] text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                    {category.title}
                  </h2>
                  <div className="w-24 h-1 bg-purple-500 mx-auto rounded-full" />
                </div>

                {/* Agent Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.agents.map((agent, index) => (
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
                        <div className={`w-14 h-14 rounded-[12px] bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg`}>
                          <agent.icon className="w-7 h-7 text-white" />
                        </div>
                        
                        {/* Title */}
                        <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-4 leading-[1.3]">
                          {agent.title}
                        </h3>
                        
                        {/* Description */}
                        <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/60 leading-[1.7]">
                          {agent.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Why Choose Our Brand Agents - Benefits Section */}
      <section className="relative py-[80px] md:py-[120px] px-[16px] md:px-[40px] lg:px-[80px]">
        <motion.div
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
        
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
              Why Choose Our Brand Agents
            </h2>
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[17px] text-white/60 max-w-[900px] mx-auto leading-[1.7]">
              Transform your brand management with AI-powered intelligence
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Zap,
                title: '24/7 Brand Monitoring',
                description: 'Continuous surveillance of brand mentions, sentiment, and reputation across all digital channels.'
              },
              {
                icon: Target,
                title: 'Consistent Brand Voice',
                description: 'AI ensures every customer touchpoint maintains your brand guidelines and messaging standards.'
              },
              {
                icon: TrendingUp,
                title: 'Data-Driven Decisions',
                description: 'Real-time analytics and insights enable informed strategic decisions backed by concrete data.'
              },
              {
                icon: Users,
                title: 'Personalized Experiences',
                description: 'Deliver hyper-personalized content and experiences that resonate with individual customers.'
              },
              {
                icon: Lightbulb,
                title: 'Predictive Intelligence',
                description: 'AI forecasts trends and opportunities before they emerge, keeping your brand ahead of the curve.'
              },
              {
                icon: Activity,
                title: 'Automated Optimization',
                description: 'Continuous A/B testing and optimization across campaigns, content, and customer journeys.'
              }
            ].map((benefit, index) => (
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
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-3 leading-[1.3]">
                    {benefit.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/60 leading-[1.7]">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* Transform Your Brand - CTA Section */}
      <section className="relative py-[100px] md:py-[140px] px-[16px] md:px-[40px] overflow-hidden">
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
            {/* Heading */}
            <h2 className="font-['Montserrat:Bold',sans-serif] text-[36px] md:text-[48px] lg:text-[56px] text-white mb-6 leading-[1.2]">
              Ready to Elevate Your Brand?
            </h2>
            
            {/* Subheading */}
            <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-white/60 max-w-[800px] mx-auto leading-[1.7] mb-[60px]">
              Deploy AI-powered agents to monitor, protect, and grow your brand across every touchpoint.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-[60px]">
              {[
                {
                  icon: Activity,
                  title: 'Real-Time Monitoring',
                  description: 'Track brand health and sentiment across all channels with instant alerts and insights.'
                },
                {
                  icon: Zap,
                  title: 'Automated Optimization',
                  description: 'AI-driven recommendations that continuously improve brand performance and engagement.'
                },
                {
                  icon: Award,
                  title: 'Brand Protection',
                  description: 'Proactive defense against reputation risks and brand consistency violations.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  className="group relative"
                >
                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-purple-900/10 rounded-[20px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Card */}
                  <div className="relative h-full p-8 rounded-[20px] bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-[12px] bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-6 shadow-lg mx-auto">
                      <feature.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-3 leading-[1.3]">
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/60 leading-[1.7]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={onGetStartedClick}
                className="group px-10 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
              >
                <span className="text-[15px] md:text-[16px] font-['Montserrat:SemiBold',sans-serif] text-black">
                  Get Started Today
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