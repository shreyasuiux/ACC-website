import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { WhoWeAreDropdown } from "./WhoWeAreDropdown";
import { getServiceUrl, getProductUrl, getAIUrl } from "../utils/navigationHelper";

// Service dropdown data
const services = [
  {
    title: "Cloud Practice",
    description: "Comprehensive cloud migration, optimization, and management services."
  },
  {
    title: "Digital & Product Engineering",
    description: "End-to-end digital transformation solutions leveraging cutting-edge technologies."
  },
  {
    title: "Big Data",
    description: "Transform your data into actionable insights with advanced analytics."
  },
  {
    title: "App Modernization",
    description: "Modernize legacy applications for improved performance and scalability."
  },
  {
    title: "Security",
    description: "Comprehensive security solutions to protect your digital assets."
  },
  {
    title: "Database Management",
    description: "Expert database design, optimization, and management services."
  },
  {
    title: "ERP & Testing",
    description: "Comprehensive testing solutions for enterprise resource planning systems."
  }
];

// AI dropdown data
const aiSolutions = [
  {
    title: "BFSI Agents",
    description: "Intelligent agents for banking, financial services, and insurance."
  },
  {
    title: "Brand Management Agents",
    description: "AI-powered brand monitoring and management solutions."
  }
];

// Products dropdown data
const products = [
  {
    title: "Agent Studio",
    description: "Build and deploy intelligent AI agents for automated workflows."
  },
  {
    title: "Atlas API Manager",
    description: "Comprehensive API management platform for designing, securing, and monitoring APIs."
  },
  {
    title: "Ottohm Video",
    description: "Enterprise-grade video streaming and collaboration platform."
  },
  {
    title: "ITSM Ticketing",
    description: "Streamlined IT service management with intelligent ticketing."
  },
  {
    title: "AIOps",
    description: "AI-powered operations platform for proactive monitoring."
  },
  {
    title: "Smart Contracts",
    description: "Blockchain-powered smart contract platform for secure transactions."
  }
];

// Services Dropdown Component
function ServicesDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  
  const handleServiceClick = (serviceTitle: string) => {
    onClose();
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(getServiceUrl(serviceTitle));
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 bg-black/40 z-[999] cursor-pointer"
            style={{ willChange: "opacity" }}
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-[92px] -translate-x-1/2 z-[1000] w-[95vw] max-w-[1280px]"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="bg-[#1a1a1a] rounded-[8px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.8)] border border-white/[0.06] overflow-hidden">
              <div className="px-12 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      className="group cursor-pointer"
                      onClick={() => handleServiceClick(service.title)}
                    >
                      <div className="relative">
                        <h3 className="font-['Montserrat:SemiBold',sans-serif] text-white text-[15px] leading-[1.5] mb-1 group-hover:text-white/80 transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="font-['Montserrat:Regular',sans-serif] text-white/40 text-[13px] leading-[1.4] group-hover:text-white/50 transition-colors duration-200">
                          {service.description}
                        </p>
                        <div className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white/30 group-hover:w-full transition-all duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// AI Dropdown Component
function AIDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  
  const handleAIClick = (aiPageTitle: string) => {
    onClose();
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(getAIUrl(aiPageTitle));
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 bg-black/40 z-[999] cursor-pointer"
            style={{ willChange: "opacity" }}
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-[92px] -translate-x-1/2 z-[1000] w-[95vw] max-w-[1280px]"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="bg-[#1a1a1a] rounded-[8px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.8)] border border-white/[0.06] overflow-hidden">
              <div className="px-12 py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {aiSolutions.map((ai, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      className="group cursor-pointer"
                      onClick={() => handleAIClick(ai.title)}
                    >
                      <div className="relative">
                        <h3 className="font-['Montserrat:SemiBold',sans-serif] text-white text-[15px] leading-[1.5] mb-1 group-hover:text-white/80 transition-colors duration-200">
                          {ai.title}
                        </h3>
                        <p className="font-['Montserrat:Regular',sans-serif] text-white/40 text-[13px] leading-[1.4] group-hover:text-white/50 transition-colors duration-200">
                          {ai.description}
                        </p>
                        <div className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white/30 group-hover:w-full transition-all duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Products Dropdown Component
function ProductsDropdown({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const navigate = useNavigate();
  
  const handleProductClick = (productTitle: string) => {
    onClose();
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(getProductUrl(productTitle));
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 bg-black/40 z-[999] cursor-pointer"
            style={{ willChange: "opacity" }}
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed left-1/2 top-[92px] -translate-x-1/2 z-[1000] w-[95vw] max-w-[1280px]"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="bg-[#1a1a1a] rounded-[8px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.8)] border border-white/[0.06] overflow-hidden">
              <div className="px-12 py-10">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                  {products.map((product, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ 
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut"
                      }}
                      className="group cursor-pointer"
                      onClick={() => handleProductClick(product.title)}
                    >
                      <div className="relative">
                        <h3 className="font-['Montserrat:SemiBold',sans-serif] text-white text-[15px] leading-[1.5] mb-1 group-hover:text-white/80 transition-colors duration-200">
                          {product.title}
                        </h3>
                        <p className="font-['Montserrat:Regular',sans-serif] text-white/40 text-[13px] leading-[1.4] group-hover:text-white/50 transition-colors duration-200">
                          {product.description}
                        </p>
                        <div className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white/30 group-hover:w-full transition-all duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// Main Nav Component
export function Nav({ onWhoWeAreItemClick, onLogoClick, onGetStartedClick, onSearchClick }: { onWhoWeAreItemClick?: (item: string) => void; onLogoClick?: () => void; onGetStartedClick?: () => void; onSearchClick?: () => void }) {
  const navigate = useNavigate();
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAIDropdownOpen, setIsAIDropdownOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isWhoWeAreDropdownOpen, setIsWhoWeAreDropdownOpen] = useState(false);

  const handleToggleServicesDropdown = () => {
    const newState = !isServicesDropdownOpen;
    setIsServicesDropdownOpen(newState);
    if (newState) {
      setIsAIDropdownOpen(false);
      setIsProductsDropdownOpen(false);
      setIsWhoWeAreDropdownOpen(false);
    }
  };

  const handleToggleAIDropdown = () => {
    const newState = !isAIDropdownOpen;
    setIsAIDropdownOpen(newState);
    if (newState) {
      setIsServicesDropdownOpen(false);
      setIsProductsDropdownOpen(false);
      setIsWhoWeAreDropdownOpen(false);
    }
  };

  const handleToggleProductsDropdown = () => {
    const newState = !isProductsDropdownOpen;
    setIsProductsDropdownOpen(newState);
    if (newState) {
      setIsServicesDropdownOpen(false);
      setIsAIDropdownOpen(false);
      setIsWhoWeAreDropdownOpen(false);
    }
  };

  const handleToggleWhoWeAreDropdown = () => {
    const newState = !isWhoWeAreDropdownOpen;
    setIsWhoWeAreDropdownOpen(newState);
    if (newState) {
      setIsServicesDropdownOpen(false);
      setIsAIDropdownOpen(false);
      setIsProductsDropdownOpen(false);
    }
  };

  const handleCloseServicesDropdown = () => {
    setIsServicesDropdownOpen(false);
  };

  const handleCloseAIDropdown = () => {
    setIsAIDropdownOpen(false);
  };

  const handleCloseProductsDropdown = () => {
    setIsProductsDropdownOpen(false);
  };

  const handleCloseWhoWeAreDropdown = () => {
    setIsWhoWeAreDropdownOpen(false);
  };

  const handleLogoClickInternal = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate('/');
    if (onLogoClick) onLogoClick();
  };

  const handleCaseStudiesClick = () => {
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate('/case-studies');
  };

  return (
    <>
      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:block relative z-[1200] w-full">
        <div className="fixed backdrop-blur-[25px] backdrop-filter bg-[rgba(0,0,0,0.5)] content-stretch flex flex-col h-[92px] items-start justify-center left-0 right-0 overflow-visible px-[80px] py-[12px] shadow-[0px_2px_30px_0px_rgba(0,0,0,0.05),0px_8px_72px_-5px_rgba(0,0,0,0.1)] top-0 z-[998]" data-name="Nav">
          <div className="content-stretch flex gap-[260px] items-center relative shrink-0">
            {/* Logo */}
            <div className="cursor-pointer" onClick={handleLogoClickInternal}>
              <Logo />
            </div>

            {/* Navigation Links */}
            <div className="content-stretch flex gap-[177px] items-center leading-[0] relative shrink-0">
              <div className="flex items-center gap-[32px] relative shrink-0">
                <div 
                  className="h-[31.5px] relative rounded-[8px] cursor-pointer hover:bg-white/10 transition-all duration-200 active:scale-95 px-[12px] flex items-center shrink-0" 
                  onClick={handleToggleServicesDropdown}
                >
                  <div className="flex items-center gap-1">
                    <p className="font-['Montserrat:Bold',sans-serif] leading-[19.5px] not-italic text-[13px] text-nowrap text-white tracking-[-0.0762px]">Services</p>
                    <ChevronDown className="w-3 h-3 text-white/80" />
                  </div>
                </div>
                <div 
                  className="h-[31.5px] relative rounded-[8px] cursor-pointer hover:bg-white/10 transition-all duration-200 active:scale-95 px-[12px] flex items-center" 
                  onClick={handleToggleAIDropdown}
                >
                  <div className="flex items-center gap-1">
                    <p className="font-['Montserrat:Bold',sans-serif] leading-[19.5px] not-italic text-[13px] text-nowrap text-white tracking-[-0.0762px]">AI</p>
                    <ChevronDown className="w-3 h-3 text-white/80" />
                  </div>
                </div>
                <div 
                  className="h-[31.5px] relative rounded-[8px] cursor-pointer hover:bg-white/10 transition-all duration-200 active:scale-95 px-[12px] flex items-center" 
                  onClick={handleToggleProductsDropdown}
                >
                  <div className="flex items-center gap-1">
                    <p className="font-['Montserrat:Bold',sans-serif] leading-[19.5px] not-italic text-[13px] text-nowrap text-white tracking-[-0.0762px]">Products</p>
                    <ChevronDown className="w-3 h-3 text-white/80" />
                  </div>
                </div>
                <div 
                  className="h-[31.5px] relative rounded-[8px] cursor-pointer hover:bg-white/10 transition-all duration-200 active:scale-95 px-[12px] flex items-center" 
                  onClick={handleCaseStudiesClick}
                >
                  <p className="font-['Montserrat:Bold',sans-serif] leading-[19.5px] not-italic text-[13px] text-nowrap text-white tracking-[-0.0762px]">Case Studies</p>
                </div>
                <div 
                  className="h-[31.5px] relative rounded-[8px] cursor-pointer hover:bg-white/10 transition-all duration-200 active:scale-95 px-[12px] flex items-center" 
                  onClick={handleToggleWhoWeAreDropdown}
                >
                  <div className="flex items-center gap-1">
                    <p className="font-['Montserrat:Bold',sans-serif] leading-[19.5px] not-italic text-[13px] text-nowrap text-white tracking-[-0.0762px]">Company</p>
                    <ChevronDown className="w-3 h-3 text-white/80" />
                  </div>
                </div>
              </div>

              {/* Contact Us Button */}
              <div className="flex items-center gap-3 relative shrink-0">
                <div className="relative w-[207.234px] h-[33.5px]">
                  <div onClick={onGetStartedClick} className="absolute bg-[rgba(0,0,0,0.5)] content-stretch flex h-[33.5px] items-center left-[97px] px-[13px] py-px rounded-[24px] top-0 w-[110.234px] cursor-pointer hover:bg-[rgba(0,0,0,0.7)] transition-colors">
                    <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[24px]" />
                    <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-[42.5px] not-italic text-[13px] text-center text-nowrap text-white top-px tracking-[-0.0762px] translate-x-[-50%]">Contact Us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_2px_20px_2px_rgba(53,53,53,0.05)]" />
        </div>
      </div>

      <ServicesDropdown 
        isOpen={isServicesDropdownOpen} 
        onClose={handleCloseServicesDropdown}
      />
      <AIDropdown 
        isOpen={isAIDropdownOpen} 
        onClose={handleCloseAIDropdown}
      />
      <ProductsDropdown 
        isOpen={isProductsDropdownOpen} 
        onClose={handleCloseProductsDropdown}
      />
      <WhoWeAreDropdown 
        isOpen={isWhoWeAreDropdownOpen} 
        onClose={handleCloseWhoWeAreDropdown}
      />
    </>
  );
}