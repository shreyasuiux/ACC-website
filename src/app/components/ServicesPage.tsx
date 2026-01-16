import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import {
  Cloud,
  Code2,
  Database,
  Shield,
  Zap,
  GitBranch,
  ArrowRight,
  Cpu,
  Linkedin,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { Link } from "react-router-dom";

// Services Overview - Parent page for all services
export const ServicesPage: React.FC = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const location = useLocation();

  // Check if we're on a child route (not the parent /services)
  const isChildRoute = location.pathname !== "/services";

  // If we're on a child route, render the Outlet
  if (isChildRoute) {
    return <Outlet />;
  }

  // Otherwise, render the Services overview page
  const services = [
    {
      icon: Cloud,
      title: "Cloud Practice",
      description: "Comprehensive cloud migration, optimization, and management services for modern enterprises.",
      link: "/services/cloud-practice",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code2,
      title: "Digital Engineering",
      description: "End-to-end digital transformation solutions leveraging cutting-edge technologies.",
      link: "/services/digital-engineering",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Database,
      title: "Big Data & Analytics",
      description: "Transform your data into actionable insights with our advanced analytics solutions.",
      link: "/services/big-data",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Zap,
      title: "Application Modernization",
      description: "Modernize legacy applications for improved performance and scalability.",
      link: "/services/app-modernization",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Shield,
      title: "Security Services",
      description: "Comprehensive security solutions to protect your digital assets and infrastructure.",
      link: "/services/security",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: GitBranch,
      title: "Database Management",
      description: "Expert database design, optimization, and management for mission-critical systems.",
      link: "/services/database-management",
      gradient: "from-teal-500 to-cyan-500"
    },
    {
      icon: Cpu,
      title: "ERP Testing",
      description: "Comprehensive testing solutions for enterprise resource planning systems.",
      link: "/services/erp-testing",
      gradient: "from-pink-500 to-rose-500"
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
              Our Services
            </h1>
            <p className="text-[18px] text-white/80 max-w-[800px] mx-auto leading-relaxed">
              Comprehensive technology solutions designed to drive digital transformation 
              and accelerate business growth across every stage of your journey.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={service.link}>
                  <div className="group relative bg-white/5 backdrop-blur-sm rounded-[16px] p-[32px] h-full border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-[56px] h-[56px] rounded-[12px] bg-gradient-to-br ${service.gradient} mb-[24px]`}>
                      <service.icon className="w-[28px] h-[28px] text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-[24px] font-semibold text-white mb-[16px]">
                      {service.title}
                    </h3>
                    <p className="text-[16px] text-white/70 mb-[24px] leading-relaxed">
                      {service.description}
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
              <h4 className="text-white font-semibold text-[16px] mb-[16px]">Services</h4>
              <ul className="space-y-[12px]">
                {services.slice(0, 4).map(service => (
                  <li key={service.title}>
                    <Link to={service.link} className="text-white/60 text-[14px] hover:text-purple-400 transition-colors">
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-[16px] mb-[16px]">More Services</h4>
              <ul className="space-y-[12px]">
                {services.slice(4).map(service => (
                  <li key={service.title}>
                    <Link to={service.link} className="text-white/60 text-[14px] hover:text-purple-400 transition-colors">
                      {service.title}
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
        - Route must use wildcard path: /services/*
        - Child routes are rendered via the <Outlet /> component from react-router-dom
        - Direct URL access (e.g., /services/cloud-practice) works via nested routing
        - Browser refresh and deep links are fully supported
        - Do not rely on state-based page switching - use React Router navigation
      */}
    </div>
  );
};