import React, { useState } from 'react';
import { Menu, X, ChevronRight, Home, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';
import svgPaths from '../../imports/svg-bngkqqxd9l';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '../contexts/ThemeContext';
import { getServiceUrl, getProductUrl, getAIUrl, getWhoWeAreUrl } from '@/app/utils/navigationHelper';

/**
 * Mobile Navigation Component
 * PURPOSE: Provide logo, breadcrumbs, and hamburger menu for mobile UX
 * PRESERVES: Brand colors, visual style
 * 
 * ⚠️ DEVELOPER NOTES:
 * - Uses React Router Link and useNavigate for all internal navigation
 * - DO NOT use anchor tags or window.location for internal navigation
 * - All navigation uses proper React Router patterns
 */

interface MobileNavProps {
  currentPage?: string;
  breadcrumbs?: Array<{ label: string; onClick?: () => void }>;
  onLogoClick?: () => void; // ⚠️ DEPRECATED - kept for backward compatibility
  onMenuToggle?: (isOpen: boolean) => void;
  onServiceClick?: (serviceTitle: string) => void; // ⚠️ DEPRECATED - kept for backward compatibility
  onAIClick?: (aiPageTitle: string) => void; // ⚠️ DEPRECATED - kept for backward compatibility
  onProductClick?: (productTitle: string) => void; // ⚠️ DEPRECATED - kept for backward compatibility
  onGrowWithUsClick?: () => void; // ⚠️ DEPRECATED - kept for backward compatibility
  onWhoWeAreItemClick?: (item: string) => void; // ⚠️ DEPRECATED - kept for backward compatibility
  onGetStartedClick?: () => void;
  [key: string]: any; // Allow any additional props from Figma
}

function MobileNavComponent({ 
  currentPage = 'Home', 
  breadcrumbs = [],
  onLogoClick,
  onMenuToggle,
  onServiceClick,
  onAIClick,
  onProductClick,
  onGrowWithUsClick,
  onWhoWeAreItemClick,
  onGetStartedClick,
  ...rest // Capture and ignore any extra props
}: MobileNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenuToggle = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    onMenuToggle?.(newState);
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const handleMenuItemClick = (callback?: () => void) => {
    setIsMenuOpen(false);
    callback?.();
  };

  return (
    <div className="mobile-nav-wrapper">
      {/* Mobile Header - Fixed at top */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-[1300] bg-black">
        <div className="flex items-center justify-between px-[20px] py-[16px]">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={handleLogoClick}
          >
            <div className="w-[88px] h-[28px]">
              <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 40.6387">
                <g>
                  <path d={svgPaths.p1a137200} fill="white" />
                  <path d={svgPaths.ped4dd00} fill="white" />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Side - Hamburger Menu */}
          <div className="flex items-center gap-2">
            {/* Hamburger Menu Button */}
            <motion.button
              onClick={handleMenuToggle}
              className="p-[8px] rounded-lg hover:bg-white/10 transition-colors relative z-50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Breadcrumbs - Only show if not on home page */}
        {breadcrumbs.length > 0 && (
          <div className="px-4 pb-3 flex items-center gap-2 text-xs overflow-x-auto">
            <Home 
              className="w-[10px] h-[10px] text-purple-400 flex-shrink-0 cursor-pointer" 
              onClick={handleLogoClick}
            />
            {breadcrumbs.map((crumb, index) => (
              <div key={index} className="flex items-center gap-2">
                <ChevronRight className="w-2.5 h-2.5 text-white/40 flex-shrink-0" />
                <span
                  className={`text-white/80 whitespace-nowrap ${crumb.onClick ? 'cursor-pointer hover:text-white' : ''}`}
                  onClick={crumb.onClick}
                >
                  {crumb.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/90 backdrop-blur-md z-[1250]"
              onClick={handleMenuToggle}
            />

            {/* Menu Panel - Full Screen */}
            <motion.div
              key="menu-panel"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="md:hidden fixed top-[65px] left-0 right-0 bottom-0 z-[1260] overflow-y-auto bg-gradient-to-b from-black via-purple-950/10 to-black"
            >
              <div className="min-h-full flex flex-col p-6 pb-20">
                {/* Navigation Items */}
                <nav className="flex-1 space-y-2 mb-8">
                  <MobileNavItem 
                    label="Home" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate('/');
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                    icon={<Home className="w-5 h-5" />}
                  />
                  
                  <MobileNavItem 
                    label="Services" 
                    isExpandable
                    subItems={[
                      'Cloud Practice',
                      'Digital & Product Engineering',
                      'Big Data',
                      'App Modernization',
                      'Security',
                      'Database Management',
                      'ERP & Testing'
                    ]}
                    onItemClick={(item) => {
                      setIsMenuOpen(false);
                      navigate(getServiceUrl(item));
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                  />
                  
                  <MobileNavItem 
                    label="AI" 
                    isExpandable
                    subItems={[
                      'BFSI Agents',
                      'Brand Management Agents'
                    ]}
                    onItemClick={(item) => {
                      setIsMenuOpen(false);
                      navigate(getAIUrl(item));
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                  />
                  
                  <MobileNavItem 
                    label="Products" 
                    isExpandable
                    subItems={[
                      'Atlas API Manager',
                      'Agent Studio',
                      'Ottohm Video',
                      'ITSM Ticketing',
                      'AI Ops Platform',
                      'Smart Contracts'
                    ]}
                    onItemClick={(item) => {
                      setIsMenuOpen(false);
                      navigate(getProductUrl(item));
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                  />
                  
                  <MobileNavItem 
                    label="Case Studies" 
                    onClick={() => {
                      setIsMenuOpen(false);
                      navigate('/case-studies');
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                  />
                  
                  <MobileNavItem 
                    label="Company" 
                    isExpandable
                    subItems={[
                      'About Us',
                      'Our Team',
                      'Partners',
                      'Careers',
                      'News & Updates'
                    ]}
                    onItemClick={(item) => {
                      setIsMenuOpen(false);
                      navigate(getWhoWeAreUrl(item));
                      window.scrollTo({ top: 0, behavior: 'auto' });
                    }}
                  />
                </nav>

                {/* Bottom Section - CTA */}
                <div className="mt-auto pt-6 border-t border-white/10">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleMenuItemClick(onGetStartedClick)}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-full font-['Montserrat:Bold',sans-serif] text-[16px] hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 min-h-[56px] active:shadow-xl active:shadow-purple-500/60"
                  >
                    Get Started
                  </motion.button>
                </div>

                {/* Footer Info */}
                <div className="mt-6 text-center">
                  <p className="text-white/40 text-xs font-['Montserrat',sans-serif]">
                    © 2025 ACC. All rights reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer to prevent content from going under fixed header */}
      <div className="md:hidden h-[65px]" />
    </div>
  );
}

interface MobileNavItemProps {
  label: string;
  onClick?: () => void;
  isExpandable?: boolean;
  icon?: React.ReactNode;
  subItems?: string[];
  onItemClick?: (item: string) => void;
}

function MobileNavItem({ label, onClick, isExpandable, icon, subItems = [], onItemClick }: MobileNavItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleClick = () => {
    if (isExpandable) {
      setIsExpanded(!isExpanded);
    } else {
      onClick?.();
    }
  };

  return (
    <div>
      <motion.button
        onClick={handleClick}
        className="w-full flex items-center justify-between py-4 px-5 rounded-xl text-white hover:bg-white/5 active:bg-white/10 transition-all text-left group"
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="flex items-center gap-3">
          {icon && <span className="text-purple-400">{icon}</span>}
          <span className="font-['Montserrat',sans-serif] font-medium text-[15px] group-hover:text-purple-300 transition-colors">
            {label}
          </span>
        </span>
        {isExpandable && (
          <ChevronDown 
            className={`w-4 h-4 text-white/60 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} 
          />
        )}
      </motion.button>
      
      <AnimatePresence>
        {isExpandable && isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="pl-8 pr-4 py-2 space-y-1">
              {subItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => onItemClick?.(item)}
                  className="w-full text-left py-3 px-4 rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all font-['Montserrat',sans-serif] text-[14px]"
                  whileHover={{ x: 4 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Breadcrumb Component (Standalone)
 * Can be used independently on pages
 */
interface BreadcrumbProps {
  items: Array<{ label: string; onClick?: () => void }>;
  className?: string;
}

export function Breadcrumb({ items, className = '' }: BreadcrumbProps) {
  return (
    <nav className={`flex items-center gap-2 text-sm ${className}`} aria-label="Breadcrumb">
      <Home className="w-[10px] h-[10px] text-purple-400 flex-shrink-0 cursor-pointer" />
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight className="w-4 h-4 text-white/40 flex-shrink-0" />
          <span
            className={`${
              index === items.length - 1 
                ? 'text-white font-medium' 
                : 'text-white/60 hover:text-white cursor-pointer'
            } ${item.onClick ? 'cursor-pointer' : ''}`}
            onClick={item.onClick}
          >
            {item.label}
          </span>
        </div>
      ))}
    </nav>
  );
}

// Export wrapper that filters out Figma's internal props
export function MobileNav(props: MobileNavProps) {
  const { 
    currentPage, 
    breadcrumbs, 
    onLogoClick, 
    onMenuToggle,
    onServiceClick,
    onAIClick,
    onProductClick,
    onGrowWithUsClick,
    onWhoWeAreItemClick,
    onGetStartedClick
  } = props;
  return (
    <MobileNavComponent
      currentPage={currentPage}
      breadcrumbs={breadcrumbs}
      onLogoClick={onLogoClick}
      onMenuToggle={onMenuToggle}
      onServiceClick={onServiceClick}
      onAIClick={onAIClick}
      onProductClick={onProductClick}
      onGrowWithUsClick={onGrowWithUsClick}
      onWhoWeAreItemClick={onWhoWeAreItemClick}
      onGetStartedClick={onGetStartedClick}
    />
  );
}