import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MobileAIPageSelectorProps {
  currentPage: 'BFSI Agents' | 'Brand Management Agents';
  onPageChange: (page: string) => void;
}

const aiPages = [
  {
    title: 'BFSI Agents',
    description: 'AI agents for banking and financial services'
  },
  {
    title: 'Brand Management Agents',
    description: 'AI agents for brand strategy and optimization'
  }
];

export function MobileAIPageSelector({ currentPage, onPageChange }: MobileAIPageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handlePageSelect = (pageTitle: string) => {
    setIsOpen(false);
    setHasInteracted(true);
    onPageChange(pageTitle);
  };

  // Hide the selector after interaction
  if (hasInteracted) {
    return null;
  }

  return (
    <div className="md:hidden relative w-full px-4 py-3 bg-black/95 backdrop-blur-md border-b border-white/10">
      <div className="relative">
        {/* Current Page Display */}
        

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[1350]"
                onClick={() => setIsOpen(false)}
              />

              {/* Dropdown Panel */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="absolute top-full left-0 right-0 mt-2 z-[1360] rounded-lg bg-[#1a1a1a] border border-white/10 shadow-2xl overflow-hidden"
              >
                <div className="py-2">
                  {aiPages.map((page, index) => {
                    const isCurrentPage = page.title === currentPage;
                    return (
                      <motion.button
                        key={page.title}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        onClick={() => handlePageSelect(page.title)}
                        disabled={isCurrentPage}
                        className={`w-full text-left px-4 py-3 transition-all ${
                          isCurrentPage
                            ? 'bg-purple-900/30 border-l-2 border-purple-500'
                            : 'hover:bg-white/5 active:bg-white/10'
                        }`}
                      >
                        <div className="flex flex-col gap-1">
                          <span
                            className={`text-[14px] font-['Montserrat:SemiBold',sans-serif] ${
                              isCurrentPage ? 'text-purple-300' : 'text-white'
                            }`}
                          >
                            {page.title}
                          </span>
                          <span className="text-[12px] font-['Montserrat',sans-serif] text-white/60">
                            {page.description}
                          </span>
                        </div>
                      </motion.button>
                    );
                  })}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}