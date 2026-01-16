import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart,
  TrendingUp,
  Globe,
  Users,
  Lightbulb,
  Target,
  GraduationCap,
  Scale,
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
  CheckCircle2,
  FileText,
  Video,
  Code,
  MessageSquare,
  Sparkles
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

// Why Work at ACC Data
const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health insurance, mental health support, and wellness programs for you and your family.',
    image: 'https://images.unsplash.com/photo-1763924987904-96c66c099d66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFsdGglMjBpbnN1cmFuY2V8ZW58MXx8fHwxNzY4MjE0NjM4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'wellbeing',
  },
  {
    icon: TrendingUp,
    title: 'Learning & Growth',
    description: 'Continuous learning opportunities, certifications, conferences, and skill development programs.',
    image: 'https://images.unsplash.com/photo-1766867264693-e34f484d3371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0cmFpbmluZyUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNjY4MTIyODg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'development',
  },
  {
    icon: Globe,
    title: 'Remote-First Culture',
    description: 'Work from anywhere with flexible hours, modern tools, and a collaborative remote-first environment.',
    image: 'https://images.unsplash.com/photo-1640622304293-ec9c89c6bac9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW1vdGUlMjB3b3JrJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE2NjgyMTQ2Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'flexibility',
  },
  {
    icon: Users,
    title: 'Inclusive Team',
    description: 'Diverse, inclusive workplace where everyone\'s voice matters and contributions are valued.',
    image: 'https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY29ycG9yYXRlJTIwdGVhbXxlbnwxfHx8fDE2NjgyMTQ2Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tag: 'diversity',
  },
];

// Our Values Data
const values = [
  {
    icon: Lightbulb,
    title: 'Innovation First',
    description: 'We embrace cutting-edge technologies and encourage creative problem-solving to deliver exceptional solutions.',
  },
  {
    icon: Target,
    title: 'Client Success',
    description: 'Our clients\' success is our success. We go above and beyond to ensure their digital transformation journey succeeds.',
  },
  {
    icon: GraduationCap,
    title: 'Continuous Learning',
    description: 'We invest in our team\'s growth through training, certifications, and exposure to latest technologies.',
  },
  {
    icon: Scale,
    title: 'Work-Life Balance',
    description: 'We believe in sustainable work practices that allow our team to thrive both professionally and personally.',
  },
];

// Job Listings Data
const jobListings = [
  {
    id: 1,
    title: 'Senior Cloud Architect',
    location: 'Pune, India',
    type: 'Full-time',
    experience: '5+ years',
    department: 'Engineering',
    description: 'Lead cloud architecture design and implementation for enterprise clients using AWS, Azure, and multi-cloud strategies.',
    tags: ['AWS Solutions Architect certification', '5+ years cloud experience', 'Terraform/CloudFormation', 'Kubernetes expertise'],
  },
  {
    id: 2,
    title: 'DevOps Engineer',
    location: 'Mumbai, India',
    type: 'Full-time',
    experience: '3+ years',
    department: 'Engineering',
    description: 'Build and maintain CI/CD pipelines, automate infrastructure, and ensure reliable deployments for client projects.',
    tags: ['Docker/Kubernetes', 'Jenkins/GitLab CI', 'AWS/Azure DevOps', 'Infrastructure as Code'],
  },
  {
    id: 3,
    title: 'AI/ML Engineer',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '4+ years',
    department: 'AI & Innovation',
    description: 'Develop AI agents and machine learning solutions for enterprise automation and intelligent decision-making.',
    tags: ['Python/TensorFlow', 'ML model deployment', 'NLP/Computer Vision', 'Cloud ML services'],
  },
  {
    id: 4,
    title: 'Cloud Security Specialist',
    location: 'Delhi, India',
    type: 'Full-time',
    experience: '4+ years',
    department: 'Security',
    description: 'Design and implement security frameworks for cloud environments, conduct security assessments and compliance audits.',
    tags: ['Cloud security certifications', 'Penetration testing', 'Compliance frameworks', 'Security automation'],
  },
  {
    id: 5,
    title: 'Technical Project Manager',
    location: 'Hyderabad, India',
    type: 'Full-time',
    experience: '6+ years',
    department: 'Operations',
    description: 'Lead complex cloud transformation projects, coordinate cross-functional teams, and ensure successful client deliveries.',
    tags: ['Multiple certifications', 'Cloud project experience', 'Client management', 'Technical background'],
  },
  {
    id: 6,
    title: 'Business Development Manager',
    location: 'Pan India',
    type: 'Full-time',
    experience: '5+ years',
    department: 'Sales',
    description: 'Drive business growth by identifying new opportunities, building client relationships, and expanding our market presence.',
    tags: ['B2B sales experience', 'Cloud industry knowledge', 'Relationship building', 'Target achievement'],
  },
];

// Hiring Process Steps
const hiringSteps = [
  {
    step: 1,
    icon: FileText,
    title: 'Application Review',
    description: 'Submit your application and our team will review your profile and experience.',
  },
  {
    step: 2,
    icon: Video,
    title: 'Initial Screening',
    description: 'Have a conversation with our HR team to discuss your background and career goals.',
  },
  {
    step: 3,
    icon: Code,
    title: 'Technical Assessment',
    description: 'Demonstrate your technical skills through practical assessments and problem-solving.',
  },
  {
    step: 4,
    icon: MessageSquare,
    title: 'Final Interview',
    description: 'Meet with our leadership team to discuss culture fit and future opportunities.',
  },
];

export default function CareersPage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick }: { 
  onClose?: () => void;
  onServiceClick?: (serviceTitle: string) => void;
  onAIClick?: (aiPageTitle: string) => void;
  onProductClick?: (productTitle: string) => void;
  onGrowWithUsClick?: () => void;
  onWhoWeAreItemClick?: (item: string) => void;
  onLogoClick?: () => void;
}) {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);
  const openPositionsRef = useRef<HTMLElement>(null);

  // Function to scroll to Open Positions section
  const scrollToOpenPositions = () => {
    openPositionsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Function to generate WhatsApp application link
  const generateWhatsAppLink = (job: typeof jobListings[0]) => {
    const phoneNumber = '918828100946';
    const currentDate = new Date().toLocaleString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
    
    const requirements = job.tags.map(tag => `• ${tag}`).join('%0A');
    
    const message = `📋 JOB APPLICATION - ACC Website%0A%0A` +
      `📌 Position: ${job.title}%0A` +
      `📍 Location: ${job.location}%0A` +
      `⏱ Experience: ${job.experience}%0A` +
      `🏢 Department: ${job.department}%0A%0A` +
      `📋 Job Requirements:%0A${requirements}%0A%0A` +
      `✅ I am interested in applying for this position. Please find my details below:%0A%0A` +
      `Name: [Your Name]%0A` +
      `Email: [Your Email]%0A` +
      `Phone: [Your Phone]%0A` +
      `Experience: [Your Experience]%0A` +
      `Resume: [Please attach or provide link]%0A%0A` +
      `📅 Applied: ${currentDate}%0A` +
      `🔗 Source: https://www.appliedcloudcomputing.com/careers%0A%0A` +
      `---%0A` +
      `Applied Cloud Computing - Career Application`;
    
    return `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${message}&type=phone_number&app_absent=0`;
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
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden px-[16px] md:px-[40px] lg:px-[80px] py-[80px]">
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

          <div className="relative max-w-[1280px] mx-auto w-full z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block mb-6">
                <div className="px-6 py-3 rounded-full bg-purple-500/15 border border-purple-400/40 backdrop-blur-sm">
                  <span className="font-['Montserrat:Bold',sans-serif] text-[11px] md:text-[12px] text-purple-300 uppercase tracking-[0.15em]">
                    JOIN OUR TEAM
                  </span>
                </div>
              </div>

              <h1 className="font-['Montserrat:SemiBold',sans-serif] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.1] mb-6 text-white">
                Build Your Career with{" "}
                <span className="bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#7c3aed] bg-clip-text text-transparent">
                  Innovation
                </span>
              </h1>

              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] mb-8 max-w-[800px] mx-auto">
                Join a team of passionate professionals shaping the future of cloud technology. We're looking for talented individuals who thrive on innovation and excellence.
              </p>

              <button 
                onClick={scrollToOpenPositions}
                className="group px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg mx-auto"
              >
                <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-black">
                  View Open Positions
                </span>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>
        </section>

        {/* Why Work at ACC Section */}
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
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Why Work at <span className="text-purple-500">ACC</span>?
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                We're more than just a cloud consulting company. We're a team of passionate professionals dedicated to transforming businesses through technology.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative h-[480px] overflow-hidden rounded-[16px] cursor-pointer bg-[#2d1f47] shadow-lg"
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                  >
                    {/* Top Image Section - 45% of card */}
                    <div className="relative h-[45%] overflow-hidden">
                      {/* Image Background with hover zoom */}
                      <motion.img 
                        alt={benefit.title}
                        className="absolute h-full w-full object-cover" 
                        src={benefit.image}
                        animate={hoveredBenefit === index ? { scale: 1.1 } : { scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#2d1f47]/80" />
                      
                      {/* Purple Tag Badge */}
                      <div className="absolute top-[16px] left-[16px] z-10">
                        <div className="px-[20px] py-[8px] rounded-full bg-purple-600 shadow-lg">
                          <p className="font-['Montserrat:Bold',sans-serif] text-[11px] text-white uppercase tracking-wider">
                            {benefit.tag}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Dark Purple Content Section - 55% of card */}
                    <div className="relative h-[55%] bg-[#2d1f47] px-6 py-6 flex flex-col">
                      {/* Title */}
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[22px] text-white mb-3 leading-[1.2]">
                        {benefit.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/70 leading-[1.6] mb-5 flex-grow">
                        {benefit.description}
                      </p>
                    </div>
                    
                    {/* Hover glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-[16px] pointer-events-none"
                      initial={{ opacity: 0 }}
                      animate={hoveredBenefit === index ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        boxShadow: '0 0 30px rgba(160, 32, 240, 0.5)',
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
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
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Our <span className="text-purple-500">Values</span>
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02]"
                  >
                    <div className="flex items-start gap-6">
                      <div className="w-14 h-14 bg-purple-600/20 border border-purple-500/30 rounded-[16px] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-7 h-7 text-purple-400" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-3 leading-[1.2]">
                          {value.title}
                        </h3>
                        <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 leading-[1.6]">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]" ref={openPositionsRef}>
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
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Open <span className="text-purple-500">Positions</span>
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                Join our growing team and take the next step in your career journey.
              </p>
            </motion.div>

            <div className="space-y-6">
              {jobListings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.5 }}
                  className="group p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                    {/* Left: Job Info */}
                    <div className="flex-1">
                      <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[24px] text-white mb-3 leading-[1.2]">
                        {job.title}
                      </h3>
                      
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-purple-400" />
                          <span className="font-['Montserrat:Medium',sans-serif] text-[13px] text-white/70">
                            {job.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4 text-purple-400" />
                          <span className="font-['Montserrat:Medium',sans-serif] text-[13px] text-white/70">
                            {job.type}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-purple-400" />
                          <span className="font-['Montserrat:Medium',sans-serif] text-[13px] text-white/70">
                            {job.experience}
                          </span>
                        </div>
                      </div>

                      <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 leading-[1.6] mb-4">
                        {job.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {job.tags.map((tag, idx) => (
                          <div 
                            key={idx}
                            className="px-3 py-1.5 rounded-full bg-purple-600/20 border border-purple-500/30"
                          >
                            <span className="font-['Montserrat:Medium',sans-serif] text-[11px] text-purple-300">
                              {tag}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right: Apply Button */}
                    <div className="flex-shrink-0">
                      <a 
                        href={generateWhatsAppLink(job)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center gap-2 shadow-lg"
                      >
                        <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-black">
                          Apply Now
                        </span>
                        <ArrowRight className="w-5 h-5 text-black group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Hiring Process Section */}
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
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Our Hiring <span className="text-purple-500">Process</span>
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                We've designed a transparent and efficient hiring process to help you succeed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hiringSteps.map((step, index) => {
                const Icon = step.icon;
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="relative group p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.05]"
                  >
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-purple-600 border-4 border-black flex items-center justify-center">
                      <span className="font-['Montserrat:Bold',sans-serif] text-[14px] text-white">
                        {step.step}
                      </span>
                    </div>

                    <div className="w-14 h-14 bg-purple-600/20 border border-purple-500/30 rounded-[16px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-7 h-7 text-purple-400" />
                    </div>
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[18px] md:text-[20px] text-white mb-3 leading-[1.2]">
                      {step.title}
                    </h3>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 leading-[1.6]">
                      {step.description}
                    </p>

                    {/* Connector Line (except for last item) */}
                    {index < hiringSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-[12px] w-6 h-px bg-gradient-to-r from-purple-500/50 to-transparent" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
              <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-6" />
              
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-6 leading-[1.2]">
                Ready to Join Our{" "}
                <span className="text-purple-500">Team</span>?
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] mb-8">
                Don't see a position that fits? We're always looking for talented individuals to join our growing team.


              </p>

              <a 
                href="https://api.whatsapp.com/send/?phone=918828100946&text=Hi%20ACC%20Team,%0A%0AI%20am%20interested%20in%20career%20opportunities%20at%20Applied%20Cloud%20Computing.%20I%20would%20like%20to%20share%20my%20resume%20and%20discuss%20potential%20positions.%0A%0AName:%20[Your%20Name]%0AEmail:%20[Your%20Email]%0APhone:%20[Your%20Phone]%0AExperience:%20[Your%20Experience]%0AResume:%20[Please%20attach%20or%20provide%20link]%0A%0AThank%20you!&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg mx-auto w-fit"
              >
                <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-black">
                  Send Your Resume
                </span>
                <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
              </a>
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