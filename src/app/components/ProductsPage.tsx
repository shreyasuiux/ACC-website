import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import {
  Bot,
  Network,
  Video,
  Ticket,
  Activity,
  FileCheck,
  ArrowRight,
  Zap,
  Linkedin,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { Link } from "react-router-dom";

// Products Overview - Parent page for all products
export const ProductsPage: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const location = useLocation();

  // Check if we're on a child route (not the parent /products)
  const isChildRoute = location.pathname !== "/products";

  // If we're on a child route, render the Outlet
  if (isChildRoute) {
    return <Outlet />;
  }

  // Otherwise, render the Products overview page
  const products = [
    {
      icon: Bot,
      title: "Agent Studio",
      description: "Build and deploy intelligent AI agents for automated workflows and enhanced productivity.",
      link: "/products/agent-studio",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Network,
      title: "Atlas API Manager",
      description: "Comprehensive API management platform for designing, securing, and monitoring APIs.",
      link: "/products/atlas-api-manager",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Video,
      title: "Ottohm Video",
      description: "Enterprise-grade video streaming and collaboration platform for modern teams.",
      link: "/products/ottohm-video",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Ticket,
      title: "ITSM Ticketing",
      description: "Streamlined IT service management with intelligent ticketing and workflow automation.",
      link: "/products/itsm-ticketing",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Activity,
      title: "AIOps Platform",
      description: "AI-powered operations platform for proactive monitoring and intelligent incident management.",
      link: "/products/ai-ops",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: FileCheck,
      title: "Smart Contracts",
      description: "Blockchain-powered smart contract platform for secure and automated transactions.",
      link: "/products/smart-contracts",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  return (
    <div className="w-full min-h-screen overflow-x-hidden" style={{ background: 'linear-gradient(180deg, #0A0014 0%, #1A0B2E 100%)' }}>
      {/* Navigation */}
      <Nav />
      <MobileNav />

      {/* Hero Section */}
      <section className="relative w-full pt-[200px] pb-[80px] px-[24px] md:px-[40px] overflow-hidden">
        {/* Animated Background */}
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
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Content Container */}
        <div className="relative z-10 max-w-[1200px] mx-auto">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-[80px]"
          >
            <h1 className="text-[48px] font-semibold text-white mb-[24px] tracking-tight">
              Our Products
            </h1>
            <p className="text-[18px] text-white/80 max-w-[800px] mx-auto leading-relaxed">
              Innovative software products designed to empower your business with 
              cutting-edge technology and seamless user experiences.
            </p>
          </motion.div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={product.link}>
                  <div className="group relative bg-white/5 backdrop-blur-sm rounded-[16px] p-[32px] h-full border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-[56px] h-[56px] rounded-[12px] bg-gradient-to-br ${product.gradient} mb-[24px]`}>
                      <product.icon className="w-[28px] h-[28px] text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-[24px] font-semibold text-white mb-[16px]">
                      {product.title}
                    </h3>
                    <p className="text-[16px] text-white/70 mb-[24px] leading-relaxed">
                      {product.description}
                    </p>

                    {/* Arrow Icon */}
                    <div className="flex items-center text-purple-400 group-hover:translate-x-2 transition-transform duration-300">
                      <span className="text-[14px] font-medium mr-[8px]">Learn More</span>
                      <ArrowRight className="w-[16px] h-[16px]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative w-full bg-black/40 backdrop-blur-sm border-t border-white/10 py-[40px] px-[24px] md:px-[40px] mt-[80px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-[40px]">
            {/* Company Info */}
            <div className="md:col-span-1">
              <Logo />
              <p className="text-white/60 text-[14px] mt-[16px] leading-relaxed">
                Transforming businesses through innovative technology solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold text-[16px] mb-[16px]">Products</h4>
              <ul className="space-y-[12px]">
                {products.slice(0, 3).map(product => (
                  <li key={product.title}>
                    <Link to={product.link} className="text-white/60 text-[14px] hover:text-purple-400 transition-colors">
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-[16px] mb-[16px]">More Products</h4>
              <ul className="space-y-[12px]">
                {products.slice(3).map(product => (
                  <li key={product.title}>
                    <Link to={product.link} className="text-white/60 text-[14px] hover:text-purple-400 transition-colors">
                      {product.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="text-white font-semibold text-[16px] mb-[16px]">Follow Us</h4>
              <div className="flex gap-[12px]">
                <a href="#" className="w-[40px] h-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all">
                  <Linkedin className="w-[18px] h-[18px] text-white/60" />
                </a>
                <a href="#" className="w-[40px] h-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all">
                  <Instagram className="w-[18px] h-[18px] text-white/60" />
                </a>
                <a href="#" className="w-[40px] h-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all">
                  <Facebook className="w-[18px] h-[18px] text-white/60" />
                </a>
                <a href="#" className="w-[40px] h-[40px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-purple-500/20 hover:border-purple-500/50 transition-all">
                  <Youtube className="w-[18px] h-[18px] text-white/60" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-[40px] pt-[24px] text-center">
            <p className="text-white/40 text-[14px]">
              © 2026 All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Developer Handoff Note */}
      {/* 
        ROUTING ARCHITECTURE:
        - This is a parent route that supports nested child routes
        - Route must use wildcard path: /products/*
        - Child routes are rendered via the <Outlet /> component from react-router-dom
        - Direct URL access (e.g., /products/agent-studio) works via nested routing
        - Browser refresh and deep links are fully supported
        - Do not rely on state-based page switching - use React Router navigation
      */}
    </div>
  );
};