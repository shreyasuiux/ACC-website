import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, TrendingUp, Users, Rocket, Zap } from 'lucide-react';
import { navigateToProduct } from '@/app/utils/navigationHelper';

/**
 * Mobile-Optimized Products Section
 * Shows "Innovative Cloud Products" with better UX/UI for mobile
 */

interface Product {
  title: string;
  description: string;
  tags: string[];
}

const products: Product[] = [
  {
    title: 'Atlas API Manager',
    description: 'Robust platform for managing, securing, and scaling APIs',
    tags: ['API Gateway', 'Security', 'Analytics', 'Developer Portal']
  },
  {
    title: 'Agent Studio',
    description: 'Powerful environment for developing intelligent agents',
    tags: ['AI Development', 'Automation', 'Integration', 'Monitoring']
  },
  {
    title: 'Ottohm Video',
    description: 'Comprehensive video content delivery solution',
    tags: ['Live Streaming', 'CDN', 'Analytics', 'Security']
  },
  {
    title: 'ITSM Ticketing Tool',
    description: 'Cloud-native IT Service Management solution',
    tags: ['Ticket Management', 'Workflow', 'Reporting', 'Integration']
  },
  {
    title: 'Smart Contracts',
    description: 'Secure, transparent automated agreements',
    tags: ['Blockchain', 'Automation', 'Security', 'Compliance']
  },
  {
    title: 'AI Ops Platform',
    description: 'Advanced AI-powered IT operations automation',
    tags: ['Predictive Analytics', 'Automation', 'Monitoring', 'Optimization']
  }
];

const stats = [
  { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  { icon: Users, value: '500+', label: 'Enterprise Clients' },
  { icon: Rocket, value: '2.5x', label: 'Faster Deployment' },
  { icon: Zap, value: '100%', label: 'Cloud Native' }
];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-gradient-to-br from-[#1a0f2e] to-[#0a0a0f] rounded-xl border border-purple-500/20 overflow-hidden"
    >
      {/* Card Header - Always Visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-5 py-5 flex items-start justify-between text-left"
      >
        <div className="flex-1 pr-3">
          <h3 className="font-['Montserrat',sans-serif] font-semibold text-white text-[18px] leading-[1.3] mb-2">
            {product.title}
          </h3>
          <p className="font-['Montserrat',sans-serif] text-white/60 text-[13px] leading-[1.5]">
            {product.description}
          </p>
        </div>
        
        {/* Expand/Collapse Icon */}
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 mt-1"
        >
          <ChevronDown className="w-5 h-5 text-purple-400" />
        </motion.div>
      </button>

      {/* Expandable Tags Section */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5">
              {/* Feature Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: tagIndex * 0.05 }}
                    className="bg-purple-500/20 border border-purple-500/30 text-purple-300 px-3 py-1.5 rounded-lg text-[11px] font-['Montserrat',sans-serif] font-medium"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Know More Button */}
              <motion.button
                whileTap={{ scale: 0.97 }}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-5 rounded-lg font-['Montserrat',sans-serif] font-medium text-[14px] hover:shadow-lg hover:shadow-purple-500/30 transition-all"
                onClick={() => navigateToProduct(product.title)}
              >
                Know More
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const Icon = stat.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl p-4 flex items-center gap-3"
    >
      <div className="bg-purple-500/20 border border-purple-500/30 rounded-lg p-2.5">
        <Icon className="w-5 h-5 text-purple-400" />
      </div>
      <div>
        <div className="font-['Montserrat',sans-serif] font-bold text-white text-[20px] leading-none mb-1">
          {stat.value}
        </div>
        <div className="font-['Montserrat',sans-serif] text-white/60 text-[11px] leading-tight">
          {stat.label}
        </div>
      </div>
    </motion.div>
  );
}

export function ProductsSection() {
  return (
    <section className="md:hidden relative w-full bg-black py-16 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-[500px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-['Montserrat',sans-serif] font-bold text-white text-[32px] leading-[1.2] mb-4">
            Innovative Cloud Products
          </h2>
          <p className="font-['Montserrat',sans-serif] text-white/70 text-[14px] leading-[1.6] max-w-[340px] mx-auto">
            Our commitment to innovation reflected in our suite of proprietary products, designed to solve specific enterprise challenges.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 mb-10">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Products List */}
        <div className="space-y-4">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}