import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { motion } from "motion/react";
import {
  Users,
  Building2,
  Handshake,
  Briefcase,
  Newspaper,
  ArrowRight,
  Target,
  Award,
  Linkedin,
  Instagram,
  Facebook,
  Youtube
} from "lucide-react";
import { Logo } from "./Logo";
import { Nav } from "./Nav";
import { MobileNav } from "./MobileNav";
import { Link } from "react-router-dom";

// Who We Are Overview - Parent page for all company pages
export const WhoWeArePage: React.FC = () => {
  const location = useLocation();

  // Check if we're on a child route (not the parent /who-we-are)
  const isChildRoute = location.pathname !== "/who-we-are";

  // If we're on a child route, render the Outlet
  if (isChildRoute) {
    return <Outlet />;
  }

  // Otherwise, render the Who We Are overview page
  const sections = [
    {
      icon: Users,
      title: "Our Team",
      description: "Meet the talented professionals driving innovation and excellence across our organization.",
      link: "/who-we-are/our-team",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Building2,
      title: "About Us",
      description: "Discover our mission, vision, and the values that guide our commitment to excellence.",
      link: "/who-we-are/about-us",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Handshake,
      title: "Partners",
      description: "Explore our strategic partnerships with industry-leading technology providers.",
      link: "/who-we-are/partners",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Briefcase,
      title: "Careers",
      description: "Join our team and be part of building the future of technology innovation.",
      link: "/who-we-are/careers",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Newspaper,
      title: "News & Updates",
      description: "Stay informed with the latest company news, updates, and industry insights.",
      link: "/who-we-are/news-updates",
      gradient: "from-indigo-500 to-purple-500"
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
              Who We Are
            </h1>
            <p className="text-[18px] text-white/80 max-w-[800px] mx-auto leading-relaxed">
              Learn more about our company, our talented team, our values, and our commitment 
              to delivering exceptional technology solutions.
            </p>
          </motion.div>

          {/* Sections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px] mb-[80px]">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={section.link}>
                  <div className="group relative bg-white/5 backdrop-blur-sm rounded-[16px] p-[32px] h-full border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] cursor-pointer">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-[56px] h-[56px] rounded-[12px] bg-gradient-to-br ${section.gradient} mb-[24px]`}>
                      <section.icon className="w-[28px] h-[28px] text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-[24px] font-semibold text-white mb-[16px]">
                      {section.title}
                    </h3>
                    <p className="text-[16px] text-white/70 mb-[24px] leading-relaxed">
                      {section.description}
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

          {/* Company Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-[24px] mt-[80px]"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-[16px] p-[32px] border border-white/10 text-center">
              <Target className="w-[40px] h-[40px] text-purple-400 mx-auto mb-[16px]" />
              <h4 className="text-[32px] font-semibold text-white mb-[8px]">15+</h4>
              <p className="text-[16px] text-white/70">Years of Excellence</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-[16px] p-[32px] border border-white/10 text-center">
              <Users className="w-[40px] h-[40px] text-purple-400 mx-auto mb-[16px]" />
              <h4 className="text-[32px] font-semibold text-white mb-[8px]">500+</h4>
              <p className="text-[16px] text-white/70">Expert Professionals</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-[16px] p-[32px] border border-white/10 text-center">
              <Award className="w-[40px] h-[40px] text-purple-400 mx-auto mb-[16px]" />
              <h4 className="text-[32px] font-semibold text-white mb-[8px]">200+</h4>
              <p className="text-[16px] text-white/70">Successful Projects</p>
            </div>
          </motion.div>
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
              <h4 className="text-white font-semibold text-[16px] mb-[16px]">Who We Are</h4>
              <ul className="space-y-[12px]">
                {sections.slice(0, 3).map(section => (
                  <li key={section.title}>
                    <Link to={section.link} className="text-white/60 text-[14px] hover:text-purple-400 transition-colors">
                      {section.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold text-[16px] mb-[16px]">More</h4>
              <ul className="space-y-[12px]">
                {sections.slice(3).map(section => (
                  <li key={section.title}>
                    <Link to={section.link} className="text-white/60 text-[14px] hover:text-purple-400 transition-colors">
                      {section.title}
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
        - Route must use wildcard path: /who-we-are/*
        - Child routes are rendered via the <Outlet /> component from react-router-dom
        - Direct URL access (e.g., /who-we-are/our-team) works via nested routing
        - Browser refresh and deep links are fully supported
        - Do not rely on state-based page switching - use React Router navigation
      */}
    </div>
  );
};