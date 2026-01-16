import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Target,
  Heart,
  Users,
  TrendingUp,
  Award,
  Sparkles,
  Globe,
  Lightbulb,
  ArrowRight,
  X
} from 'lucide-react';
import { Footer } from './Footer';
import { Nav } from './Nav';
import { MobileNav } from './MobileNav';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
  initiativeImg1,
  initiativeImg2,
  initiativeImg3,
  initiativeImg4,
  initiativeImg5,
  initiativeImg6,
  sportsImg1,
  sportsImg2,
  sportsImg3,
  sportsImg4,
  sportsImg5,
  sportsImg6,
  sportsImg7,
  sportsImg8,
  sportsImg9,
  sportsImg10,
  sportsImg11,
  sportsImg12,
  sportsImg13,
  sportsImg14,
  sportsImg15,
  rewardsImg1,
  rewardsImg2,
  rewardsImg3,
  rewardsImg4,
  rewardsImg5,
  rewardsImg6,
  rewardsImg7,
  rewardsImg8,
  rewardsImg9,
  rewardsImg10,
  rewardsImg11,
  rewardsImg12,
} from '../../assets/images';

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

// Lightbox Modal Component
const LightboxModal = ({ image, onClose }: { image: string; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[2000] bg-black/95 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[2001] p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300"
      >
        <X className="w-6 h-6 text-white" />
      </button>
      <motion.img
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        src={image}
        alt="Gallery"
        className="max-w-full max-h-[90vh] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
};

export default function AboutUsPage({ onClose, onServiceClick, onAIClick, onProductClick, onGrowWithUsClick, onWhoWeAreItemClick, onLogoClick, onGetStartedClick, onCareersClick }: { 
  onClose?: () => void;
  onServiceClick?: (serviceTitle: string) => void;
  onAIClick?: (aiPageTitle: string) => void;
  onProductClick?: (productTitle: string) => void;
  onGrowWithUsClick?: () => void;
  onWhoWeAreItemClick?: (item: string) => void;
  onLogoClick?: () => void;
  onGetStartedClick?: () => void;
  onCareersClick?: () => void;
}) {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Our Initiatives Gallery
  const initiativesImages = [
    initiativeImg1,
    initiativeImg2,
    initiativeImg3,
    initiativeImg4,
    initiativeImg5,
    initiativeImg6,
  ];

  // ACC Sports Culture Gallery
  const sportsImages = [
    sportsImg1,
    sportsImg2,
    sportsImg3,
    sportsImg4,
    sportsImg5,
    sportsImg6,
    sportsImg7,
    sportsImg8,
    sportsImg9,
    sportsImg10,
    sportsImg11,
    sportsImg12,
    sportsImg13,
    sportsImg14,
    sportsImg15,
  ];

  // Rewards and Recognition Gallery
  const rewardsImages: string[] = [
    rewardsImg1,
    rewardsImg2,
    rewardsImg3,
    rewardsImg4,
    rewardsImg5,
    rewardsImg6,
    rewardsImg7,
    rewardsImg8,
    rewardsImg9,
    rewardsImg10,
    rewardsImg11,
    rewardsImg12,
  ];

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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-[16px] md:px-[40px] lg:px-[80px] py-[80px] md:py-[120px]">
          {/* Deep charcoal background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f0a15] via-[#0a0a0f] to-[#0a0a0f]" />

          {/* Animated mesh + particles */}
          <MeshGradient />
          <ParticleField />

          {/* Subtle grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

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

          <div className="relative max-w-[1000px] mx-auto w-full text-center z-10">
            {/* Company Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block mb-8"
            >
              <div className="px-6 py-3 rounded-full bg-purple-500/15 border border-purple-400/40 backdrop-blur-sm">
                <span className="font-['Montserrat:Bold',sans-serif] text-[11px] md:text-[12px] text-purple-300 uppercase tracking-[0.15em]">
                  WHO WE ARE
                </span>
              </div>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-['Montserrat:SemiBold',sans-serif] text-[42px] md:text-[56px] lg:text-[72px] leading-[1.1] mb-6 text-white"
            >
              Empowering People to{" "}
              <span className="bg-gradient-to-r from-[#a78bfa] via-[#8b5cf6] to-[#7c3aed] bg-clip-text text-transparent">
                achieve more!
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-['Montserrat:Medium',sans-serif] text-[15px] md:text-[17px] text-white/60 leading-[1.7] mb-10 max-w-[780px] mx-auto"
            >
              In our journey we have created 1200+ jobs
            </motion.p>
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent z-10"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
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
                Our Mission
              </h2>
            </motion.div>

            {/* Mission Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: Mission Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/70 leading-[1.8] mb-6">
                  Our vision is to empower businesses to harness the full potential of cloud technology, driving efficiency, innovation, and competitive advantage. ACC's strength lies in its holistic approach, combining deep technical knowledge with a client-centric methodology.
                </p>
                <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/70 leading-[1.8] mb-8">
                  We pride ourselves on building long-term relationships, guiding our clients through every stage of their cloud journey, from initial strategy and assessment to ongoing management and optimization.
                </p>
                
                {/* CTA Button */}
                <button 
                  onClick={onGetStartedClick}
                  className="group px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-full transition-all duration-300 flex items-center gap-2"
                >
                  <span className="font-['Montserrat:SemiBold',sans-serif] text-[14px] text-white">
                    Start Your Journey
                  </span>
                  <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </motion.div>

              {/* Right: Leading Innovation Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative p-8 md:p-10 rounded-[32px] bg-gradient-to-br from-purple-500/20 to-purple-600/10 border border-purple-400/30 backdrop-blur-sm"
              >
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-[20px] flex items-center justify-center mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>

                {/* Card Content */}
                <h3 className="font-['Montserrat:Bold',sans-serif] text-[22px] md:text-[26px] text-white mb-4 leading-[1.2]">
                  Leading Innovation
                </h3>
                <p className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[15px] text-white/70 leading-[1.7]">
                  Comprehensive solution provider in the rapidly expanding cloud computing landscape
                </p>
              </motion.div>
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
          <div className="absolute inset-0 bg-gradient-to-b from-black to-black" />
          
          <div className="relative max-w-[1280px] mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-[60px]"
            >
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-4 leading-[1.2]">
                Our Values
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                The principles that guide our work and define our commitment to excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lightbulb,
                  title: 'Innovation',
                  description: 'We continuously innovate to deliver cutting-edge cloud solutions that drive business transformation.'
                },
                {
                  icon: Users,
                  title: 'Client-Centric',
                  description: 'Our clients\' success is our priority. We build long-term relationships based on trust and results.'
                },
                {
                  icon: Award,
                  title: 'Excellence',
                  description: 'We maintain the highest standards of quality and expertise in everything we do.'
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="group p-8 rounded-[24px] bg-gradient-to-br from-white/[0.08] to-white/[0.04] border border-white/10 hover:border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-purple-700 rounded-[16px] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-['Montserrat:Bold',sans-serif] text-[20px] md:text-[24px] text-white mb-3 leading-[1.2]">
                    {value.title}
                  </h3>
                  <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 leading-[1.6]">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Initiatives Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent z-10"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
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
                Our Initiatives
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                Programs and activities that make a difference
              </p>
            </motion.div>

            {/* Image Gallery Grid */}
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="24px">
                {initiativesImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="relative rounded-[16px] overflow-hidden cursor-pointer group"
                    onClick={() => setLightboxImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Initiative ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                      style={{ display: 'block' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </section>

        {/* ACC Sports Culture Section */}
        <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
          <motion.div
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent z-10"
            style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
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
                ACC Sports Culture
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                At ACC, we believe in fostering team spirit and camaraderie through sports. Our vibrant sports culture brings our team together, building stronger bonds and creating memorable experiences beyond the workplace.
              </p>
            </motion.div>

            {/* Image Gallery Grid */}
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="24px">
                {sportsImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.4 }}
                    className="relative rounded-[16px] overflow-hidden cursor-pointer group"
                    onClick={() => setLightboxImage(image)}
                  >
                    <img
                      src={image}
                      alt={`Sports Culture ${index + 1}`}
                      className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                      style={{ display: 'block' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
        </section>

        {/* Rewards and Recognition Section */}
        {rewardsImages.length > 0 && (
          <section className="relative py-[80px] px-[16px] md:px-[40px] lg:px-[80px]">
            <motion.div
              className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent z-10"
              style={{ boxShadow: '0 0 20px rgba(168, 85, 247, 0.8)' }}
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
                  Rewards and Recognition
                </h2>
                <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] max-w-[700px] mx-auto">
                  Celebrating excellence and achievements at ACC. Our recognition culture honors outstanding performance, team accomplishments, and milestone celebrations that drive our success forward.
                </p>
              </motion.div>

              {/* Image Gallery Grid */}
              <ResponsiveMasonry
                columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
              >
                <Masonry gutter="24px">
                  {rewardsImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05, duration: 0.4 }}
                      className="relative rounded-[16px] overflow-hidden cursor-pointer group"
                      onClick={() => setLightboxImage(image)}
                    >
                      <img
                        src={image}
                        alt={`Rewards ${index + 1}`}
                        className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                        style={{ display: 'block' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </div>
          </section>
        )}

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
              <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[36px] lg:text-[48px] text-white mb-6 leading-[1.2]">
                Ready to Work with <span className="text-purple-500">ACC</span>?
              </h2>
              <p className="font-['Montserrat:Regular',sans-serif] text-[15px] md:text-[16px] text-white/60 leading-[1.7] mb-8">
                Join us in our mission to empower people and transform businesses through innovation. Let's create something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={onCareersClick}
                  className="group px-8 py-4 bg-white hover:bg-white/90 rounded-full transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                >
                  <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-black">
                    Join Our Team
                  </span>
                  <ArrowRight className="w-5 h-5 text-black group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                <button 
                  onClick={onGetStartedClick}
                  className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white/20 hover:border-white/40 rounded-full transition-all duration-300"
                >
                  <span className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-white">
                    Start a Project
                  </span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="relative z-[1200]">
        <Footer />
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <LightboxModal image={lightboxImage} onClose={() => setLightboxImage(null)} />
      )}
    </div>
  );
}