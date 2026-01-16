import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router-dom';
import { 
  Info, 
  Users, 
  Handshake, 
  Briefcase, 
  Newspaper, 
  Mail 
} from 'lucide-react';
import { getWhoWeAreUrl } from '@/app/utils/navigationHelper';

interface WhoWeAreDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onItemClick?: (item: string) => void; // ⚠️ DEPRECATED - kept for backward compatibility
}

const menuItems = [
  {
    title: 'About Us',
    description: 'Our story and mission',
    icon: Info,
    gradient: 'from-purple-500 to-blue-500',
  },
  {
    title: 'Our Team',
    description: 'Meet our leaders',
    icon: Users,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Partners',
    description: 'Strategic collaborations',
    icon: Handshake,
    gradient: 'from-teal-500 to-green-500',
  },
  {
    title: 'Careers',
    description: 'Join our journey',
    icon: Briefcase,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    title: 'News & Updates',
    description: 'Latest updates',
    icon: Newspaper,
    gradient: 'from-emerald-500 to-purple-500',
  },
];

export function WhoWeAreDropdown({ isOpen, onClose, onItemClick }: WhoWeAreDropdownProps) {
  const navigate = useNavigate();
  
  const handleItemClick = (itemTitle: string) => {
    onClose();
    window.scrollTo({ top: 0, behavior: 'auto' });
    navigate(getWhoWeAreUrl(itemTitle));
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed inset-0 bg-black/40 z-[999] cursor-pointer"
            style={{ willChange: "opacity" }}
            onClick={onClose}
          />

          {/* Dropdown Panel - Accenture minimalist style */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-[92px] left-1/2 -translate-x-1/2 w-[95vw] max-w-[1280px] bg-[#1a1a1a] rounded-[8px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.8)] border border-white/[0.06] z-[1000] overflow-hidden"
            style={{ willChange: "transform, opacity" }}
          >
            <div className="px-12 py-10">
              {/* Grid - Accenture minimal style */}
              <div className="grid grid-cols-5 gap-6">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                    onClick={() => handleItemClick(item.title)}
                    className="group text-left cursor-pointer"
                  >
                    {/* Simple text link with hover effect */}
                    <div className="relative">
                      <h4 className="font-['Montserrat:SemiBold',sans-serif] text-[15px] text-white mb-1 group-hover:text-white/80 transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[12px] text-white/40 leading-[1.4] group-hover:text-white/50 transition-colors duration-200">
                        {item.description}
                      </p>
                      
                      {/* Subtle underline on hover */}
                      <div className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white/30 group-hover:w-full transition-all duration-300" />
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}