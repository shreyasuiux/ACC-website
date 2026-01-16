import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, X, ArrowRight } from 'lucide-react';
import { 
  navigateToService, 
  navigateToProduct, 
  navigateToAI, 
  navigateToWhoWeAre, 
  navigateToHome, 
  navigateToCaseStudies,
  SERVICE_TITLES,
  PRODUCT_TITLES,
  AI_TITLES,
  WHO_WE_ARE_ITEMS
} from '../utils/navigationHelper';

interface SearchResult {
  title: string;
  description: string;
  category: string;
  navigationHandler: () => void;
}

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate?: (handler: () => void) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Define search data with navigation handlers
  const searchData: SearchResult[] = [
    // Pages - Home
    { 
      title: "Home", 
      description: "Main landing page with hero section and features", 
      category: "Pages",
      navigationHandler: () => navigateToHome()
    },
    
    // Services (What We Craft)
    { 
      title: "Cloud Practice", 
      description: "AWS, Azure, and GCP cloud solutions and migrations", 
      category: "Services",
      navigationHandler: () => navigateToService('Cloud Practice')
    },
    { 
      title: "Digital & Product Engineering", 
      description: "Custom software development and product engineering", 
      category: "Services",
      navigationHandler: () => navigateToService('Digital & Product Engineering')
    },
    { 
      title: "Big Data", 
      description: "Data analytics, warehousing, and big data solutions", 
      category: "Services",
      navigationHandler: () => navigateToService('Big Data')
    },
    { 
      title: "App Modernization", 
      description: "Application modernization and cloud migration", 
      category: "Services",
      navigationHandler: () => navigateToService('App Modernization')
    },
    { 
      title: "Security", 
      description: "Cybersecurity and compliance solutions", 
      category: "Services",
      navigationHandler: () => navigateToService('Security')
    },
    { 
      title: "Database Management", 
      description: "Database design, optimization, and management", 
      category: "Services",
      navigationHandler: () => navigateToService('Database Management')
    },
    { 
      title: "ERP Testing & Automation", 
      description: "Enterprise resource planning testing services", 
      category: "Services",
      navigationHandler: () => navigateToService('ERP Testing & Automation')
    },
    
    // AI Solutions
    { 
      title: "BFSI Agents", 
      description: "AI agents for banking and financial services industry", 
      category: "AI Solutions",
      navigationHandler: () => navigateToAI('BFSI Agents')
    },
    { 
      title: "Brand Management Agents", 
      description: "AI-powered brand and marketing automation agents", 
      category: "AI Solutions",
      navigationHandler: () => navigateToAI('Brand Management Agents')
    },
    
    // Products (What Defines Us)
    { 
      title: "Agent Studio", 
      description: "Build and deploy custom AI agents", 
      category: "Products",
      navigationHandler: () => navigateToProduct('Agent Studio')
    },
    { 
      title: "Atlas API Manager", 
      description: "Comprehensive API management platform", 
      category: "Products",
      navigationHandler: () => navigateToProduct('Atlas API Manager')
    },
    { 
      title: "Ottohm Video", 
      description: "Enterprise video collaboration platform", 
      category: "Products",
      navigationHandler: () => navigateToProduct('Ottohm Video')
    },
    { 
      title: "ITSM Ticketing", 
      description: "IT service management and ticketing system", 
      category: "Products",
      navigationHandler: () => navigateToProduct('ITSM Ticketing')
    },
    { 
      title: "AIOps", 
      description: "AI-powered IT operations and monitoring", 
      category: "Products",
      navigationHandler: () => navigateToProduct('AIOps')
    },
    { 
      title: "Smart Contracts", 
      description: "Blockchain-based smart contract solutions", 
      category: "Products",
      navigationHandler: () => navigateToProduct('Smart Contracts')
    },
    
    // Who We Are
    { 
      title: "Our Team", 
      description: "Meet the talented team behind our success", 
      category: "Who We Are",
      navigationHandler: () => navigateToWhoWeAre('Our Team')
    },
    { 
      title: "About Us", 
      description: "Our story, mission, and values", 
      category: "Who We Are",
      navigationHandler: () => navigateToWhoWeAre('About Us')
    },
    { 
      title: "Partners", 
      description: "Our technology and strategic partners", 
      category: "Who We Are",
      navigationHandler: () => navigateToWhoWeAre('Partners')
    },
    { 
      title: "Careers", 
      description: "Join our team and grow with us", 
      category: "Who We Are",
      navigationHandler: () => navigateToWhoWeAre('Careers')
    },
    { 
      title: "News & Updates", 
      description: "Latest company news and announcements", 
      category: "Who We Are",
      navigationHandler: () => navigateToWhoWeAre('News')
    },
    
    // Grow With Us
    { 
      title: "Case Studies", 
      description: "Success stories and client testimonials", 
      category: "Case Studies",
      navigationHandler: () => navigateToCaseStudies()
    },
  ];

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results = searchData.filter(item =>
      item.title.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
    
    setFilteredResults(results);
    setSelectedIndex(0);
  }, [searchQuery]);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setFilteredResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev < filteredResults.length - 1 ? prev + 1 : prev));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === 'Enter' && filteredResults.length > 0) {
        e.preventDefault();
        handleResultClick(filteredResults[selectedIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredResults, selectedIndex]);

  const handleResultClick = (result: SearchResult) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    result.navigationHandler();
    onClose();
  };

  const groupedResults = filteredResults.reduce((acc, result) => {
    if (!acc[result.category]) {
      acc[result.category] = [];
    }
    acc[result.category].push(result);
    return acc;
  }, {} as Record<string, SearchResult[]>);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[10vh] left-1/2 -translate-x-1/2 w-[90vw] max-w-[640px] z-[9999]"
          >
            <div className="bg-gradient-to-br from-gray-900 to-black border border-purple-500/30 rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 p-4 border-b border-white/10">
                <Search className="w-5 h-5 text-purple-400" />
                <input
                  type="text"
                  placeholder="Search pages, services, or AI agents..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none font-['Montserrat',sans-serif] text-[15px]"
                />
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close search"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === '' ? (
                  <div className="p-8 text-center">
                    <Search className="w-12 h-12 text-purple-400/30 mx-auto mb-3" />
                    <p className="text-white/40 font-['Montserrat',sans-serif] text-[14px]">
                      Start typing to search...
                    </p>
                  </div>
                ) : filteredResults.length === 0 ? (
                  <div className="p-8 text-center">
                    <p className="text-white/40 font-['Montserrat',sans-serif] text-[14px]">
                      No results found for "{searchQuery}"
                    </p>
                  </div>
                ) : (
                  <div className="py-2">
                    {Object.entries(groupedResults).map(([category, results]) => (
                      <div key={category} className="mb-4 last:mb-0">
                        <div className="px-4 py-2">
                          <h3 className="text-purple-400 font-['Montserrat',sans-serif] font-semibold text-[12px] uppercase tracking-wider">
                            {category}
                          </h3>
                        </div>
                        {results.map((result, idx) => {
                          const globalIndex = filteredResults.indexOf(result);
                          const isSelected = globalIndex === selectedIndex;
                          
                          return (
                            <motion.button
                              key={result.title}
                              onClick={() => handleResultClick(result)}
                              onMouseEnter={() => setSelectedIndex(globalIndex)}
                              className={`w-full px-4 py-3 flex items-center justify-between gap-3 transition-colors ${
                                isSelected
                                  ? 'bg-purple-600/20 border-l-2 border-purple-500'
                                  : 'hover:bg-white/5 border-l-2 border-transparent'
                              }`}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.02 }}
                            >
                              <div className="flex-1 text-left">
                                <p className="text-white font-['Montserrat',sans-serif] font-medium text-[14px] mb-0.5">
                                  {result.title}
                                </p>
                                <p className="text-white/50 font-['Montserrat',sans-serif] text-[12px]">
                                  {result.description}
                                </p>
                              </div>
                              <ArrowRight className={`w-4 h-4 transition-all ${
                                isSelected ? 'text-purple-400 translate-x-1' : 'text-white/30'
                              }`} />
                            </motion.button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer Hint */}
              {filteredResults.length > 0 && (
                <div className="px-4 py-3 border-t border-white/10 bg-black/30">
                  <p className="text-white/40 font-['Montserrat',sans-serif] text-[11px] text-center">
                    Use <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">↑</kbd>{' '}
                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">↓</kbd> to navigate,{' '}
                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">Enter</kbd> to select,{' '}
                    <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white/60">Esc</kbd> to close
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};