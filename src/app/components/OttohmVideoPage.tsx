// Ottohm Video Page Component - Updated 2026-01-07
import React from 'react';
import { motion } from 'motion/react';
import { 
  Video,
  Cloud,
  Shield,
  TrendingUp,
  Brain,
  Server,
  Lock,
  Zap,
  Activity,
  Layers,
  MonitorPlay,
  DollarSign,
  Radio,
  Globe,
  Smartphone,
  Database,
  Workflow,
  Target,
  Award,
  CheckCircle2,
  ArrowRight,
  Menu,
  X,
  Play,
  BarChart3,
  Settings,
  Users,
  FileVideo,
  Eye,
  CheckCircle,
  GitBranch,
  Tv,
  Sparkles
} from 'lucide-react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';

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

export function OttohmVideoPage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick, onGetStartedClick }: { 
  onClose: () => void;
  onServiceClick: (serviceTitle: string) => void;
  onAIClick: (aiPageTitle: string) => void;
  onProductClick: (productTitle: string) => void;
  onGrowWithUsClick: () => void;
  onWhoWeAreItemClick: (item: string) => void;
  onLogoClick?: () => void;
  onGetStartedClick?: () => void;
}) {
  return (
    <div className="fixed inset-0 z-[1100] overflow-y-auto bg-black">
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

      <div className="w-full bg-black pt-[92px]">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-[16px] md:px-[40px] lg:px-[80px] py-[80px] overflow-hidden">
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
          
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(217, 70, 239, 0.12) 0%, transparent 70%)",
            }}
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.4, 0.2, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="relative max-w-[900px] mx-auto w-full z-10">
            <div className="text-center">
              {/* Video Icon Circle */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 md:mb-8 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20"
              >
                <Video className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] mb-6 text-white"
              >
                Ottohm Video Platform
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/80 leading-[1.7] mb-8 max-w-[900px] mx-auto px-4"
              >
                Ottohm is a self-hosted, enterprise-grade video hosting and streaming platform that enables organizations to build their own OTT ecosystem — complete with content management, analytics, monetization, and AI-powered automation.
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex justify-center mb-16"
              >
                <button 
                  onClick={onGetStartedClick}
                  className="group px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
                >
                  <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-black">
                    Start Your OTT Journey
                  </span>
                  <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>

              {/* Stats Grid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-[1000px] mx-auto"
              >
                {[
                  { stat: '100%', label: 'Self-Hosted Control' },
                  { stat: '4 Weeks', label: 'Time-to-Market' },
                  { stat: 'Global', label: 'CDN Support' },
                  { stat: '99.9%', label: 'Uptime SLA' }
                ].map((item, index) => (
                  <div key={index} className="p-4 md:p-6 rounded-[20px] bg-gradient-to-br from-purple-600/10 to-purple-900/10 border border-purple-500/30 backdrop-blur-sm">
                    <div className="text-purple-400 text-[28px] md:text-[40px] font-['Montserrat:Bold',sans-serif] mb-2">
                      {item.stat}
                    </div>
                    <div className="text-white/80 text-[13px] md:text-[15px] font-['Montserrat',sans-serif] leading-[1.5]">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Why Ottohm Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px] bg-gradient-to-b from-black to-black">
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
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Why Ottohm
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7] max-w-[900px] mx-auto">
                Modern viewers expect personalized, high-quality, on-demand video experiences. Ottohm delivers this with a modular, secure, and API-driven platform that adapts to your business.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Server,
                  title: '100% Self-Hosted',
                  description: 'Deploy on AWS, Azure, GCP, or your private data center.'
                },
                {
                  icon: Lock,
                  title: 'Full Data Sovereignty',
                  description: 'Your content, metadata, analytics, and user data stay with you.'
                },
                {
                  icon: TrendingUp,
                  title: 'Scalable Architecture',
                  description: 'Handle millions of concurrent viewers with adaptive streaming and global CDN support.'
                },
                {
                  icon: Zap,
                  title: 'Faster Time-to-Market',
                  description: 'Go live with your own branded OTT platform in less than four weeks.'
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
                  {/* Card - LEFT ALIGNED */}
                  <div className="relative h-full p-6 rounded-[20px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm">
                    {/* Icon - left aligned */}
                    <div className="w-14 h-14 rounded-[16px] bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center mb-4 shadow-lg">
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    {/* Title - left aligned */}
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-3 leading-[1.3]">
                      {item.title}
                    </h3>
                    
                    {/* Description - left aligned */}
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/70 leading-[1.7]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Platform Features */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Core Platform Features
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Six foundational capabilities that power your complete OTT ecosystem
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                {
                  number: '01',
                  badge: 'Video Hosting & Adaptive Streaming',
                  icon: Video,
                  title: 'A powerful backend that manages video ingestion, encoding, and playback across any device',
                  keyCapabilities: [
                    'Multi-format upload (MP4, MOV, MKV, AVI, etc.)',
                    'Adaptive bitrate streaming (HLS/DASH) for smooth viewing',
                    'Integration with leading CDNs (CloudFront, Akamai, Cloudflare)',
                    'DRM support (Widevine, PlayReady, FairPlay)',
                    'Secure transcoded playback and watermarking'
                  ],
                  significance: 'Ensures a flawless, high-definition viewing experience with global scalability and airtight content security.'
                },
                {
                  number: '02',
                  badge: 'Advanced Content Management System (CMS)',
                  icon: Layers,
                  title: 'A centralized console to manage your video assets, metadata, and publishing lifecycle',
                  keyCapabilities: [
                    'Intuitive upload and drag-and-drop interface',
                    'AI-based tagging, captioning, and subtitle generation',
                    'Multi-category and series management',
                    'Role-based access control (RBAC) and workflow approvals'
                  ],
                  significance: 'Streamlines operations for editors, producers, and content managers with end-to-end visibility and control.'
                },
                {
                  number: '03',
                  badge: 'OTT App Builder',
                  icon: MonitorPlay,
                  title: 'Launch your branded streaming apps effortlessly across platforms',
                  keyCapabilities: [
                    'No-code app generation for Web, Android, iOS, Smart TVs, and Fire TV',
                    'Custom branding, color themes, and layout design',
                    'Watchlists, recommendations, and parental controls',
                    'Multi-language support and localization'
                  ],
                  significance: 'Delivers a unified, on-brand user experience on every device — building direct relationships with your audience.'
                },
                {
                  number: '04',
                  badge: 'Monetization Engine',
                  icon: DollarSign,
                  title: 'Turn viewership into revenue with multiple business models',
                  keyCapabilities: [
                    'SVOD, TVOD, and AVOD monetization options',
                    'Payment gateway integrations (Stripe, Razorpay, PayPal)',
                    'Dynamic ad insertion (DAI) for targeted ads',
                    'AI-driven content recommendations and pricing insights'
                  ],
                  significance: 'Supports multiple revenue strategies — from subscriptions to ads — while maximizing engagement and conversions.'
                },
                {
                  number: '05',
                  badge: 'Live Streaming & Event Management',
                  icon: Radio,
                  title: 'Stream events, shows, and broadcasts live with enterprise reliability',
                  keyCapabilities: [
                    'Integration with OBS, vMix, and studio encoders',
                    'Live multiview, auto-transcoding, and DVR functionality',
                    'Real-time audience analytics and concurrent view tracking',
                    'Post-event VOD archival and highlight creation'
                  ],
                  significance: 'Brings broadcast-level reliability to your live events and ensures lasting audience engagement.'
                },
                {
                  number: '06',
                  badge: 'Analytics & Insights Dashboard',
                  icon: Activity,
                  title: 'Gain actionable insights into viewer behavior and platform performance',
                  keyCapabilities: [
                    'Viewer heatmaps, engagement graphs, and retention analytics',
                    'Geographic and time-based reports',
                    'Ad performance and revenue tracking',
                    'Custom dashboards for API or Power BI integration'
                  ],
                  significance: 'Empowers decision makers with data-driven insights to optimize content strategy, marketing, and monetization.'
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="relative h-full p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-purple-500/40 transition-all duration-500 backdrop-blur-sm">
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-purple-600/0 to-purple-900/0 group-hover:from-purple-600/5 group-hover:to-purple-900/5 transition-all duration-500" />
                    
                    <div className="relative">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        {/* Icon */}
                        <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-[16px] bg-gradient-to-br from-purple-600/20 to-purple-500/10 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <feature.icon className="w-7 h-7 md:w-8 md:h-8 text-purple-400" />
                        </div>
                        
                        {/* Number and Badge */}
                        <div className="flex-1">
                          <div className="text-purple-400 font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] mb-2">
                            {feature.number}
                          </div>
                          <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white leading-[1.3]">
                            {feature.badge}
                          </h3>
                        </div>
                      </div>

                      {/* Title */}
                      <p className="font-['Montserrat:Medium',sans-serif] text-[14px] md:text-[16px] text-white/90 leading-[1.6] mb-6">
                        {feature.title}
                      </p>

                      {/* Divider */}
                      <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent mb-6" />

                      {/* Key Capabilities */}
                      <div className="mb-6">
                        <h4 className="font-['Montserrat:Bold',sans-serif] text-[13px] md:text-[14px] text-purple-300 mb-3 uppercase tracking-wider">
                          Key Capabilities
                        </h4>
                        <ul className="space-y-2.5">
                          {feature.keyCapabilities.map((capability, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-purple-400 mt-2" />
                              <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/70 leading-[1.7]">
                                {capability}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Significance */}
                      <div className="p-4 rounded-[12px] bg-purple-500/5 border border-purple-500/20">
                        <div className="flex items-center gap-2 mb-2">
                          <Sparkles className="w-4 h-4 text-purple-400" />
                          <h4 className="font-['Montserrat:Bold',sans-serif] text-[12px] md:text-[13px] text-purple-300 uppercase tracking-wider">
                            Significance
                          </h4>
                        </div>
                        <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/70 leading-[1.7]">
                          {feature.significance}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI-Powered Automation Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px] bg-gradient-to-b from-black to-black">
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
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                AI-Powered Automation
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7] max-w-[900px] mx-auto">
                Revolutionary AI capabilities that transform content creation and distribution
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {/* AI-Powered Video Creation Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="relative h-full p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm">
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-purple-600/0 to-purple-900/0 group-hover:from-purple-600/5 group-hover:to-purple-900/5 transition-all duration-500" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-[16px] bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center mb-6 shadow-lg">
                      <Brain className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[24px] text-white mb-4 leading-[1.3]">
                      AI-Powered Video Creation
                    </h3>

                    {/* Description */}
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/70 leading-[1.7] mb-6">
                      Revolutionize your content pipeline using generative AI
                    </p>

                    {/* Divider */}
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6" />

                    {/* Features List */}
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/80 leading-[1.7]">
                          AI video creation powered by Google Imagen Video, Meta Make-A-Video, Runway Gen-2, Pika Labs
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/80 leading-[1.7]">
                          Stable Video Diffusion and Synthesia integration
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/80 leading-[1.7]">
                          Scripted automation or explainer-style training videos
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/80 leading-[1.7]">
                          Style customization and automatic voiceover generation
                        </span>
                      </li>
                    </ul>

                    {/* Bottom Highlight */}
                    <div className="p-4 md:p-5 rounded-[16px] bg-purple-600/10 border border-purple-500/20">
                      <p className="font-['Montserrat:Medium',sans-serif] text-[13px] md:text-[14px] text-purple-300 leading-[1.7]">
                        Reduces production costs and timelines — enabling rapid creation of professional video assets.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* AI-Driven Reels & Social Media Automation Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group"
              >
                <div className="relative h-full p-6 md:p-8 rounded-[24px] bg-gradient-to-br from-white/[0.05] to-white/[0.02] border border-white/10 hover:border-purple-500/30 transition-all duration-500 backdrop-blur-sm">
                  {/* Glow Effect on Hover */}
                  <div className="absolute inset-0 rounded-[24px] bg-gradient-to-br from-purple-600/0 to-purple-900/0 group-hover:from-purple-600/5 group-hover:to-purple-900/5 transition-all duration-500" />
                  
                  <div className="relative">
                    {/* Icon */}
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-[16px] bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center mb-6 shadow-lg">
                      <Smartphone className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[24px] text-white mb-4 leading-[1.3]">
                      AI-Driven Reels & Social Media Automation
                    </h3>

                    {/* Description */}
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/70 leading-[1.7] mb-6">
                      Automatically generate and publish highlight reels from live or recorded content
                    </p>

                    {/* Divider */}
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-purple-500/20 to-transparent mb-6" />

                    {/* Features List */}
                    <ul className="space-y-4 mb-6">
                      <li className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/80 leading-[1.7]">
                          AI detection of key moments and trending segments
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/80 leading-[1.7]">
                          Auto-editing, captioning, and logo overlays
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/80 leading-[1.7]">
                          Instant publishing to Instagram Reels, YouTube Shorts, X (Twitter), and LinkedIn
                        </span>
                      </li>
                      <li className="flex items-start gap-3">
                        <Sparkles className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/80 leading-[1.7]">
                          Performance tracking and social analytics
                        </span>
                      </li>
                    </ul>

                    {/* Bottom Highlight */}
                    <div className="p-4 md:p-5 rounded-[16px] bg-purple-600/10 border border-purple-500/20">
                      <p className="font-['Montserrat:Medium',sans-serif] text-[13px] md:text-[14px] text-purple-300 leading-[1.7]">
                        Transforms long videos into bite-sized viral content — expanding your reach across platforms automatically.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Use Cases
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Ottohm adapts to diverse industries and business models
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Media & Entertainment */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group"
              >
                <div className="relative h-[420px] rounded-[24px] overflow-hidden bg-black border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1760404700115-461c3872e160?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpYSUyMGVudGVydGFpbm1lbnQlMjBzdHJlYW1pbmd8ZW58MXx8fHwxNzY4MjA5ODEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Media & Entertainment"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 group-hover:from-black/80 group-hover:via-black/85 group-hover:to-black/95 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-6 md:p-8 flex flex-col">
                    {/* Badge */}
                    <div className="mb-auto">
                      <span className="inline-block px-4 py-2 bg-purple-600 rounded-full font-['Montserrat:Bold',sans-serif] text-[11px] tracking-[0.1em] uppercase text-white">
                        Media & Entertainment
                      </span>
                    </div>

                    {/* Details */}
                    <div>
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[22px] md:text-[24px] text-white mb-3 leading-[1.2]">
                        Media & Entertainment
                      </h3>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/80 leading-[1.6] mb-4">
                        Create your own OTT service for movies, shows, or podcasts
                      </p>
                      
                      {/* Bullet Points - Show on Hover */}
                      <ul className="space-y-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                        {['Streaming platforms', 'Content libraries', 'Podcast networks'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/70">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="group"
              >
                <div className="relative h-[420px] rounded-[24px] overflow-hidden bg-black border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1762330917056-e69b34329ddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBsZWFybmluZyUyMHBsYXRmb3JtfGVufDF8fHx8MTc2ODIwOTgxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Education"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 group-hover:from-black/80 group-hover:via-black/85 group-hover:to-black/95 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-6 md:p-8 flex flex-col">
                    {/* Badge */}
                    <div className="mb-auto">
                      <span className="inline-block px-4 py-2 bg-purple-600 rounded-full font-['Montserrat:Bold',sans-serif] text-[11px] tracking-[0.1em] uppercase text-white">
                        Education
                      </span>
                    </div>

                    {/* Details */}
                    <div>
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[22px] md:text-[24px] text-white mb-3 leading-[1.2]">
                        Education
                      </h3>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/80 leading-[1.6] mb-4">
                        Host lectures, webinars, and learning series securely
                      </p>
                      
                      {/* Bullet Points - Show on Hover */}
                      <ul className="space-y-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                        {['Online courses', 'Training programs', 'Educational content'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/70">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Sports */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group"
              >
                <div className="relative h-[420px] rounded-[24px] overflow-hidden bg-black border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1728034867407-8f325091fc7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBzdGFkaXVtJTIwbGl2ZXxlbnwxfHx8fDE3Njc3ODY5NTV8MA&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Sports"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 group-hover:from-black/80 group-hover:via-black/85 group-hover:to-black/95 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-6 md:p-8 flex flex-col">
                    {/* Badge */}
                    <div className="mb-auto">
                      <span className="inline-block px-4 py-2 bg-purple-600 rounded-full font-['Montserrat:Bold',sans-serif] text-[11px] tracking-[0.1em] uppercase text-white">
                        Sports
                      </span>
                    </div>

                    {/* Details */}
                    <div>
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[22px] md:text-[24px] text-white mb-3 leading-[1.2]">
                        Sports
                      </h3>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/80 leading-[1.6] mb-4">
                        Stream live matches and auto-generate AI highlights
                      </p>
                      
                      {/* Bullet Points - Show on Hover */}
                      <ul className="space-y-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                        {['Live sports', 'Match highlights', 'Sports analysis'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/70">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Corporate & Enterprise */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group"
              >
                <div className="relative h-[420px] rounded-[24px] overflow-hidden bg-black border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1642522029695-2d4d222e41f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc2NzY4NzUwNnww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="Corporate & Enterprise"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 group-hover:from-black/80 group-hover:via-black/85 group-hover:to-black/95 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-6 md:p-8 flex flex-col">
                    {/* Badge */}
                    <div className="mb-auto">
                      <span className="inline-block px-4 py-2 bg-purple-600 rounded-full font-['Montserrat:Bold',sans-serif] text-[11px] tracking-[0.1em] uppercase text-white">
                        Corporate & Enterprise
                      </span>
                    </div>

                    {/* Details */}
                    <div>
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[22px] md:text-[24px] text-white mb-3 leading-[1.2]">
                        Corporate & Enterprise
                      </h3>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/80 leading-[1.6] mb-4">
                        Internal video communication, training, and townhalls
                      </p>
                      
                      {/* Bullet Points - Show on Hover */}
                      <ul className="space-y-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                        {['Corporate communications', 'Training videos', 'Internal broadcasts'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/70">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* News & Broadcast */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group"
              >
                <div className="relative h-[420px] rounded-[24px] overflow-hidden bg-black border border-white/10 hover:border-purple-500/30 transition-all duration-500 cursor-pointer">
                  {/* Background Image */}
                  <div className="absolute inset-0">
                    <img 
                      src="https://images.unsplash.com/photo-1581092802212-36559f37c39d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdzJTIwYnJvYWRjYXN0JTIwc3R1ZGlvfGVufDF8fHx8MTc2NzcwODIyOHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="News & Broadcast"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/90 group-hover:from-black/80 group-hover:via-black/85 group-hover:to-black/95 transition-all duration-500" />
                  </div>

                  {/* Content */}
                  <div className="relative h-full p-6 md:p-8 flex flex-col">
                    {/* Badge */}
                    <div className="mb-auto">
                      <span className="inline-block px-4 py-2 bg-purple-600 rounded-full font-['Montserrat:Bold',sans-serif] text-[11px] tracking-[0.1em] uppercase text-white">
                        News & Broadcast
                      </span>
                    </div>

                    {/* Details */}
                    <div>
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[22px] md:text-[24px] text-white mb-3 leading-[1.2]">
                        News & Broadcast
                      </h3>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/80 leading-[1.6] mb-4">
                        AI-generated reels and multi-channel social publishing
                      </p>
                      
                      {/* Bullet Points - Show on Hover */}
                      <ul className="space-y-2 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 overflow-hidden">
                        {['News content', 'Breaking news', 'Live coverage'].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                            <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/70">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Deployment Flexibility Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Deployment Flexibility
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Ottohm fits your IT and compliance strategy — on your terms
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {/* Self-Hosted */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] rounded-[24px] p-8 border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
              >
                <div className="w-14 h-14 bg-purple-600 rounded-[16px] flex items-center justify-center mb-6">
                  <Server className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[22px] text-white mb-3 leading-[1.2]">
                  Self-Hosted
                </h3>
                <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/70 leading-[1.6] mb-6">
                  Deploy on your own servers or cloud tenancy
                </p>
                <p className="font-['Montserrat:Medium',sans-serif] text-[13px] text-white/60 leading-[1.6] mb-5">
                  Complete control over AWS / Azure / GCP / Private Cloud Infrastructure
                </p>
                <ul className="space-y-3">
                  {['Full data sovereignty', 'Custom configurations', 'Direct infrastructure control'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/60">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Hybrid */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] rounded-[24px] p-8 border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
              >
                <div className="w-14 h-14 bg-purple-600 rounded-[16px] flex items-center justify-center mb-6">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[22px] text-white mb-3 leading-[1.2]">
                  Hybrid
                </h3>
                <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/70 leading-[1.6] mb-6">
                  Store videos locally while streaming through global CDNs
                </p>
                <p className="font-['Montserrat:Medium',sans-serif] text-[13px] text-white/60 leading-[1.6] mb-5">
                  Best of both worlds - local storage with global reach
                </p>
                <ul className="space-y-3">
                  {['Local data storage', 'Global CDN delivery', 'Optimized performance'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/60">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Managed Service */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] rounded-[24px] p-8 border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
              >
                <div className="w-14 h-14 bg-purple-600 rounded-[16px] flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[22px] text-white mb-3 leading-[1.2]">
                  Managed Service
                </h3>
                <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/70 leading-[1.6] mb-6">
                  Let ACC host and manage Ottohm for you
                </p>
                <p className="font-['Montserrat:Medium',sans-serif] text-[13px] text-white/60 leading-[1.6] mb-5">
                  SLA-backed uptime with professional management
                </p>
                <ul className="space-y-3">
                  {['Professional management', 'SLA guarantees', 'Reduced operational overhead'].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/60">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Security, Compliance & Self-Hosting Controls Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px] bg-gradient-to-b from-black to-black">
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
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Security, Compliance & Self-Hosting Controls
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7]">
                Protect your content, comply with global regulations, and maintain total autonomy
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-[24px] p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                {/* Identity & Access */}
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-[16px] flex items-center justify-center mx-auto mb-4">
                    <Lock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-2 leading-[1.2]">
                    Identity & Access
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/80 leading-[1.6]">
                    SSO, MFA, RBAC
                  </p>
                </div>

                {/* Encryption */}
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-[16px] flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-2 leading-[1.2]">
                    Encryption
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/80 leading-[1.6]">
                    AES-256 for content & metadata
                  </p>
                </div>

                {/* Content Protection */}
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-[16px] flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-2 leading-[1.2]">
                    Content Protection
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/80 leading-[1.6]">
                    Watermarking & geo-blocking
                  </p>
                </div>

                {/* Compliance */}
                <div className="text-center">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-[16px] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-2 leading-[1.2]">
                    Compliance
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/80 leading-[1.6]">
                    GDPR, ISO 27001, SOC 2, PCI DSS, HIPAA, DPDP
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* The Ottohm Advantage Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/10 to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                The Ottohm Advantage
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-[#b3b3ba] leading-[1.7] max-w-[900px] mx-auto">
                Why leading organizations choose Ottohm for their video streaming needs
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Lock,
                  title: 'Complete Ownership',
                  description: 'Self-host and control your data, infrastructure, and audience'
                },
                {
                  icon: TrendingUp,
                  title: 'Scalable Performance',
                  description: 'Handle global audiences with adaptive streaming'
                },
                {
                  icon: Brain,
                  title: 'AI-Powered Automation',
                  description: 'Create, analyze, and promote content intelligently'
                },
                {
                  icon: Zap,
                  title: 'Faster Go-Live',
                  description: 'Deploy a full OTT platform in weeks, not months'
                },
                {
                  icon: GitBranch,
                  title: 'Open & Extensible',
                  description: 'Integrate with CDNs, payment gateways, and analytics tools'
                },
                {
                  icon: Shield,
                  title: 'Enterprise Security',
                  description: 'Fully encrypted, compliant, and audit-ready'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-gradient-to-br from-white/[0.08] to-white/[0.04] rounded-[24px] p-8 border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-[12px] bg-gradient-to-br from-purple-600 to-purple-700 flex items-center justify-center mb-4 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[16px] md:text-[18px] text-white mb-2 leading-[1.4]">
                    {item.title}
                  </h3>
                  
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/70 leading-[1.7]">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-black to-black" />
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
              style={{
                background: "radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)",
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
          </div>

          <div className="relative max-w-[900px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-6 leading-[1.2]">
                Go Live in Weeks
              </h2>
              
              <p className="font-['Montserrat:Regular',sans-serif] text-[16px] md:text-[18px] text-[#b3b3ba] leading-[1.7] mb-10">
                Ottohm comes with pre-configured modules for content management, playback, analytics, monetization, and AI workflows — so you can launch your branded OTT platform faster than ever.


              </p>

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
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}