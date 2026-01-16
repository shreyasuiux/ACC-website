import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  CheckCircle2, 
  User, 
  Mail, 
  MessageSquare,
  Send,
  ArrowRight,
  ArrowLeft,
  Phone,
  Briefcase,
  Building2,
  Cloud,
  Zap,
  Bot,
  Database,
  Layers,
  Shield
} from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  // Step 1 - Personal Information
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  
  // Step 2 - Business Information
  industry: string;
  companySize: string;
  challenges: string[];
  
  // Step 3 - Service Interest
  services: string[];
  timeline: string;
  budget: string;
  additionalInfo: string;
}

const STEPS = [
  { id: 1, title: 'Personal Info' },
  { id: 2, title: 'Business Info' },
  { id: 3, title: 'Service Interest' },
  { id: 4, title: 'Review' }
];

const INDUSTRIES = [
  'Financial Services',
  'Healthcare',
  'Retail',
  'Manufacturing',
  'Technology',
  'Education',
  'Government',
  'Other'
];

const COMPANY_SIZES = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
];

const CHALLENGES = [
  'Legacy system modernization',
  'Data management and analytics',
  'DevOps and automation',
  'Scalability issues',
  'Cloud migration',
  'Security and compliance',
  'Cost optimization',
  'Digital transformation'
];

const SERVICES = [
  { id: 'cloud', label: 'Cloud Practice', icon: Cloud },
  { id: 'digitalization', label: 'Digitalization', icon: Zap },
  { id: 'ai-agents', label: 'AI Agents', icon: Bot },
  { id: 'big-data', label: 'Big Data', icon: Database },
  { id: 'app-modernization', label: 'Application Modernization', icon: Layers },
  { id: 'security', label: 'Security', icon: Shield }
];

const TIMELINES = [
  'Immediate (within 1 month)',
  '1-3 months',
  '3-6 months',
  '6-12 months',
  'Not sure yet'
];

const BUDGETS = [
  'Under $50K',
  '$50K - $100K',
  '$100K - $250K',
  '$250K - $500K',
  '$500K+',
  'Not sure yet'
];

export function GetStartedModal({ isOpen, onClose }: GetStartedModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    companySize: '',
    challenges: [],
    services: [],
    timeline: '',
    budget: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (step === 1) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.company.trim()) newErrors.company = 'Company name is required';
      if (!formData.jobTitle.trim()) newErrors.jobTitle = 'Job title is required';
    }

    if (step === 2) {
      if (!formData.industry) newErrors.industry = 'Please select an industry';
      if (!formData.companySize) newErrors.companySize = 'Please select company size';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Reset and close after 3 seconds
    setTimeout(() => {
      handleClose();
    }, 3000);
  };

  const handleClose = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      company: '',
      jobTitle: '',
      industry: '',
      companySize: '',
      challenges: [],
      services: [],
      timeline: '',
      budget: '',
      additionalInfo: ''
    });
    setErrors({});
    setIsSuccess(false);
    setIsSubmitting(false);
    setCurrentStep(1);
    onClose();
  };

  const toggleArrayItem = (array: string[], item: string) => {
    return array.includes(item)
      ? array.filter(i => i !== item)
      : [...array, item];
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 overflow-y-auto"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: 'spring', duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-3xl bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] border border-white/10 rounded-[16px] md:rounded-[24px] my-auto max-h-[90vh] overflow-y-auto"
        >
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 md:top-6 md:right-6 z-50 p-1.5 md:p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4 md:w-5 md:h-5 text-white" />
          </button>

          {/* Success State */}
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="absolute inset-0 z-40 flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] to-[#0f0f1e] p-4 md:p-8 overflow-y-auto"
            >
              <div className="text-center max-w-2xl w-full my-auto">
                {/* Success Icon with Glow Effect */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring' }}
                  className="relative mx-auto w-20 h-20 md:w-24 md:h-24 mb-6 md:mb-8"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur-2xl opacity-50 animate-pulse" />
                  {/* Icon container */}
                  <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 md:w-12 md:h-12 text-white" strokeWidth={2.5} />
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="font-['Montserrat:Bold',sans-serif] text-[28px] md:text-[48px] text-white mb-3 md:mb-4"
                >
                  Thank You!
                </motion.h3>

                {/* Subheading */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-['Montserrat:Regular',sans-serif] text-[14px] md:text-[18px] text-white/80 mb-6 md:mb-8 leading-relaxed px-2"
                >
                  We've received your information and our team is reviewing your request.
                </motion.p>

                {/* Info Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8"
                >
                  {/* Response Time */}
                  <div className="bg-white/5 border border-white/10 rounded-[12px] md:rounded-[16px] p-4 md:p-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-['Montserrat:Bold',sans-serif] text-[13px] md:text-[14px] text-white mb-1 md:mb-2">
                      Response Time
                    </h4>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[12px] md:text-[13px] text-white/60">
                      Within 24 hours
                    </p>
                  </div>

                  {/* Confirmation Email */}
                  <div className="bg-white/5 border border-white/10 rounded-[12px] md:rounded-[16px] p-4 md:p-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="font-['Montserrat:Bold',sans-serif] text-[13px] md:text-[14px] text-white mb-1 md:mb-2">
                      Check Your Email
                    </h4>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[12px] md:text-[13px] text-white/60">
                      Confirmation sent
                    </p>
                  </div>

                  {/* Next Steps */}
                  <div className="bg-white/5 border border-white/10 rounded-[12px] md:rounded-[16px] p-4 md:p-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-2 md:mb-3">
                      <svg className="w-5 h-5 md:w-6 md:h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="font-['Montserrat:Bold',sans-serif] text-[13px] md:text-[14px] text-white mb-1 md:mb-2">
                      Next Steps
                    </h4>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[12px] md:text-[13px] text-white/60">
                      Personalized consultation
                    </p>
                  </div>
                </motion.div>

                {/* What to Expect */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 border border-purple-500/20 rounded-[12px] md:rounded-[16px] p-4 md:p-6 mb-6 md:mb-8"
                >
                  <h4 className="font-['Montserrat:Bold',sans-serif] text-[15px] md:text-[16px] text-white mb-3 md:mb-4">
                    What Happens Next?
                  </h4>
                  <div className="space-y-2 md:space-y-3 text-left">
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="font-['Montserrat:Bold',sans-serif] text-[11px] md:text-[12px] text-purple-400">1</span>
                      </div>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/80">
                        Our team will review your requirements and prepare a tailored response
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="font-['Montserrat:Bold',sans-serif] text-[11px] md:text-[12px] text-purple-400">2</span>
                      </div>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/80">
                        A dedicated consultant will reach out to discuss your specific needs
                      </p>
                    </div>
                    <div className="flex items-start gap-2 md:gap-3">
                      <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="font-['Montserrat:Bold',sans-serif] text-[11px] md:text-[12px] text-purple-400">3</span>
                      </div>
                      <p className="font-['Montserrat:Regular',sans-serif] text-[13px] md:text-[14px] text-white/80">
                        We'll schedule a meeting to explore how we can help achieve your goals
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="text-center px-2"
                >
                  <p className="font-['Montserrat:Regular',sans-serif] text-[12px] md:text-[13px] text-white/50">
                    Need immediate assistance? Email us at{' '}
                    <a href="mailto:contact@company.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                      contact@company.com
                    </a>
                  </p>
                </motion.div>
              </div>
            </motion.div>
          )}

          {/* Step Indicator */}
          <div className="px-4 md:px-12 pt-12 md:pt-8 pb-4 md:pb-6">
            <div className="flex items-center justify-between max-w-2xl mx-auto">
              {STEPS.map((step, index) => (
                <div key={step.id} className="flex items-center flex-1 last:flex-initial">
                  <div className="flex flex-col items-center gap-1.5 md:gap-2">
                    <div
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all ${
                        currentStep > step.id
                          ? 'bg-gradient-to-r from-purple-600 to-purple-500'
                          : currentStep === step.id
                          ? 'bg-gradient-to-r from-purple-600 to-purple-500'
                          : 'bg-white/5 border border-white/20'
                      }`}
                    >
                      {currentStep > step.id ? (
                        <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      ) : (
                        <span className={`font-['Montserrat:Bold',sans-serif] text-[12px] md:text-[14px] ${
                          currentStep === step.id ? 'text-white' : 'text-white/40'
                        }`}>
                          {step.id}
                        </span>
                      )}
                    </div>
                    <span className={`font-['Montserrat:Medium',sans-serif] text-[10px] md:text-[12px] whitespace-nowrap ${
                      currentStep >= step.id ? 'text-white' : 'text-white/40'
                    }`}>
                      {step.title}
                    </span>
                  </div>
                  {index < STEPS.length - 1 && (
                    <div
                      className={`flex-1 h-[2px] mx-1 md:mx-2 transition-all ${
                        currentStep > step.id
                          ? 'bg-gradient-to-r from-purple-600 to-purple-500'
                          : 'bg-white/10'
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="px-4 md:px-12 pb-4 md:pb-8">
            <div className="bg-white/5 border border-white/10 rounded-[12px] md:rounded-[16px] p-4 md:p-8">
              <AnimatePresence mode="wait">
                {/* Step 1 - Personal Information */}
                {currentStep === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-white mb-2">
                      Personal Information
                    </h3>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 mb-6">
                      Let us know who you are
                    </p>

                    <div className="space-y-4">
                      {/* Name Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-2">
                            First Name *
                          </label>
                          <input
                            type="text"
                            value={formData.firstName}
                            onChange={(e) => {
                              setFormData({ ...formData, firstName: e.target.value });
                              setErrors({ ...errors, firstName: undefined });
                            }}
                            className={`w-full px-4 py-3 bg-white/5 border ${
                              errors.firstName ? 'border-red-500/50' : 'border-white/10'
                            } rounded-[12px] text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors font-['Montserrat:Regular',sans-serif] text-[14px]`}
                            placeholder="John"
                          />
                          {errors.firstName && (
                            <p className="mt-1.5 text-[12px] text-red-400 font-['Montserrat:Regular',sans-serif]">
                              {errors.firstName}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-2">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            value={formData.lastName}
                            onChange={(e) => {
                              setFormData({ ...formData, lastName: e.target.value });
                              setErrors({ ...errors, lastName: undefined });
                            }}
                            className={`w-full px-4 py-3 bg-white/5 border ${
                              errors.lastName ? 'border-red-500/50' : 'border-white/10'
                            } rounded-[12px] text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors font-['Montserrat:Regular',sans-serif] text-[14px]`}
                            placeholder="Doe"
                          />
                          {errors.lastName && (
                            <p className="mt-1.5 text-[12px] text-red-400 font-['Montserrat:Regular',sans-serif]">
                              {errors.lastName}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Email & Phone Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => {
                              setFormData({ ...formData, email: e.target.value });
                              setErrors({ ...errors, email: undefined });
                            }}
                            className={`w-full px-4 py-3 bg-white/5 border ${
                              errors.email ? 'border-red-500/50' : 'border-white/10'
                            } rounded-[12px] text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors font-['Montserrat:Regular',sans-serif] text-[14px]`}
                            placeholder="john@company.com"
                          />
                          {errors.email && (
                            <p className="mt-1.5 text-[12px] text-red-400 font-['Montserrat:Regular',sans-serif]">
                              {errors.email}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => {
                              setFormData({ ...formData, phone: e.target.value });
                              setErrors({ ...errors, phone: undefined });
                            }}
                            className={`w-full px-4 py-3 bg-white/5 border ${
                              errors.phone ? 'border-red-500/50' : 'border-white/10'
                            } rounded-[12px] text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors font-['Montserrat:Regular',sans-serif] text-[14px]`}
                            placeholder="+1 (555) 000-0000"
                          />
                          {errors.phone && (
                            <p className="mt-1.5 text-[12px] text-red-400 font-['Montserrat:Regular',sans-serif]">
                              {errors.phone}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Company & Job Title Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-2">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            value={formData.company}
                            onChange={(e) => {
                              setFormData({ ...formData, company: e.target.value });
                              setErrors({ ...errors, company: undefined });
                            }}
                            className={`w-full px-4 py-3 bg-white/5 border ${
                              errors.company ? 'border-red-500/50' : 'border-white/10'
                            } rounded-[12px] text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors font-['Montserrat:Regular',sans-serif] text-[14px]`}
                            placeholder="Acme Inc."
                          />
                          {errors.company && (
                            <p className="mt-1.5 text-[12px] text-red-400 font-['Montserrat:Regular',sans-serif]">
                              {errors.company}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-2">
                            Job Title *
                          </label>
                          <input
                            type="text"
                            value={formData.jobTitle}
                            onChange={(e) => {
                              setFormData({ ...formData, jobTitle: e.target.value });
                              setErrors({ ...errors, jobTitle: undefined });
                            }}
                            className={`w-full px-4 py-3 bg-white/5 border ${
                              errors.jobTitle ? 'border-red-500/50' : 'border-white/10'
                            } rounded-[12px] text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors font-['Montserrat:Regular',sans-serif] text-[14px]`}
                            placeholder="Chief Technology Officer"
                          />
                          {errors.jobTitle && (
                            <p className="mt-1.5 text-[12px] text-red-400 font-['Montserrat:Regular',sans-serif]">
                              {errors.jobTitle}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 2 - Business Information */}
                {currentStep === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-white mb-2">
                      Business Information
                    </h3>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 mb-6">
                      Tell us about your business
                    </p>

                    <div className="space-y-4">
                      {/* Industry & Company Size Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-2">
                            Industry *
                          </label>
                          <select
                            value={formData.industry}
                            onChange={(e) => {
                              setFormData({ ...formData, industry: e.target.value });
                              setErrors({ ...errors, industry: undefined });
                            }}
                            className={`w-full px-4 py-3 bg-white/5 border ${
                              errors.industry ? 'border-red-500/50' : 'border-white/10'
                            } rounded-[12px] text-white focus:outline-none focus:border-purple-500/50 transition-colors font-['Montserrat:Regular',sans-serif] text-[14px] appearance-none cursor-pointer`}
                          >
                            <option value="" className="bg-[#1a1a2e] text-white/60">Select industry</option>
                            {INDUSTRIES.map(industry => (
                              <option key={industry} value={industry} className="bg-[#1a1a2e] text-white">
                                {industry}
                              </option>
                            ))}
                          </select>
                          {errors.industry && (
                            <p className="mt-1.5 text-[12px] text-red-400 font-['Montserrat:Regular',sans-serif]">
                              {errors.industry}
                            </p>
                          )}
                        </div>
                        <div>
                          <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-2">
                            Company Size *
                          </label>
                          <select
                            value={formData.companySize}
                            onChange={(e) => {
                              setFormData({ ...formData, companySize: e.target.value });
                              setErrors({ ...errors, companySize: undefined });
                            }}
                            className={`w-full px-4 py-3 bg-white/5 border ${
                              errors.companySize ? 'border-red-500/50' : 'border-white/10'
                            } rounded-[12px] text-white focus:outline-none focus:border-purple-500/50 transition-colors font-['Montserrat:Regular',sans-serif] text-[14px] appearance-none cursor-pointer`}
                          >
                            <option value="" className="bg-[#1a1a2e] text-white/60">Select company size</option>
                            {COMPANY_SIZES.map(size => (
                              <option key={size} value={size} className="bg-[#1a1a2e] text-white">
                                {size}
                              </option>
                            ))}
                          </select>
                          {errors.companySize && (
                            <p className="mt-1.5 text-[12px] text-red-400 font-['Montserrat:Regular',sans-serif]">
                              {errors.companySize}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Current Challenges */}
                      <div>
                        <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-3">
                          Current Challenges (Select all that apply)
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {CHALLENGES.map(challenge => (
                            <label
                              key={challenge}
                              className="flex items-start gap-3 p-3 rounded-[12px] bg-white/5 border border-white/10 cursor-pointer hover:bg-white/10 transition-colors"
                            >
                              <input
                                type="checkbox"
                                checked={formData.challenges.includes(challenge)}
                                onChange={() => setFormData({
                                  ...formData,
                                  challenges: toggleArrayItem(formData.challenges, challenge)
                                })}
                                className="mt-0.5 w-4 h-4 rounded border-white/20 bg-white/5 text-purple-600 focus:ring-purple-500 focus:ring-offset-0 cursor-pointer"
                              />
                              <span className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/90">
                                {challenge}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 3 - Service Interest */}
                {currentStep === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-white mb-2">
                      Service Interest
                    </h3>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 mb-6">
                      Which services are you interested in?
                    </p>

                    <div className="space-y-4">
                      {/* Interested Services */}
                      <div>
                        <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-3">
                          Interested Services (Select all that apply)
                        </label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {SERVICES.map(service => {
                            const Icon = service.icon;
                            return (
                              <label
                                key={service.id}
                                className={`flex items-center gap-3 p-4 rounded-[12px] border cursor-pointer transition-all ${
                                  formData.services.includes(service.id)
                                    ? 'bg-purple-600/20 border-purple-500/50'
                                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={formData.services.includes(service.id)}
                                  onChange={() => setFormData({
                                    ...formData,
                                    services: toggleArrayItem(formData.services, service.id)
                                  })}
                                  className="sr-only"
                                />
                                <div className={`p-2 rounded-lg ${
                                  formData.services.includes(service.id)
                                    ? 'bg-purple-600/30'
                                    : 'bg-white/5'
                                }`}>
                                  <Icon className={`w-5 h-5 ${
                                    formData.services.includes(service.id)
                                      ? 'text-purple-400'
                                      : 'text-white/60'
                                  }`} />
                                </div>
                                <span className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/90">
                                  {service.label}
                                </span>
                              </label>
                            );
                          })}
                        </div>
                      </div>

                      {/* Timeline & Budget Row */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-2">
                            Project Timeline
                          </label>
                          <select
                            value={formData.timeline}
                            onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[12px] text-white focus:outline-none focus:border-purple-500/50 transition-colors font-['Montserrat:Regular',sans-serif] text-[14px] appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#1a1a2e] text-white/60">Select timeline</option>
                            {TIMELINES.map(timeline => (
                              <option key={timeline} value={timeline} className="bg-[#1a1a2e] text-white">
                                {timeline}
                              </option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-2">
                            Budget Range
                          </label>
                          <select
                            value={formData.budget}
                            onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[12px] text-white focus:outline-none focus:border-purple-500/50 transition-colors font-['Montserrat:Regular',sans-serif] text-[14px] appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#1a1a2e] text-white/60">Select budget range</option>
                            {BUDGETS.map(budget => (
                              <option key={budget} value={budget} className="bg-[#1a1a2e] text-white">
                                {budget}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div>
                        <label className="block font-['Montserrat:Medium',sans-serif] text-[13px] text-white/80 mb-2">
                          Additional Information
                        </label>
                        <textarea
                          value={formData.additionalInfo}
                          onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                          rows={4}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[12px] text-white placeholder:text-white/30 focus:outline-none focus:border-purple-500/50 transition-colors font-['Montserrat:Regular',sans-serif] text-[14px] resize-none"
                          placeholder="Tell us more about your specific requirements or questions..."
                        />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Step 4 - Review */}
                {currentStep === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h3 className="font-['Montserrat:Bold',sans-serif] text-[24px] text-white mb-2">
                      Review Your Information
                    </h3>
                    <p className="font-['Montserrat:Regular',sans-serif] text-[14px] text-white/60 mb-6">
                      Please review your details before submitting
                    </p>

                    <div className="space-y-6">
                      {/* Personal Information */}
                      <div className="space-y-3">
                        <h4 className="font-['Montserrat:Bold',sans-serif] text-[16px] text-white">
                          Personal Information
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px]">
                          <div>
                            <span className="font-['Montserrat:Medium',sans-serif] text-white/60">Name: </span>
                            <span className="font-['Montserrat:Regular',sans-serif] text-white">
                              {formData.firstName} {formData.lastName}
                            </span>
                          </div>
                          <div>
                            <span className="font-['Montserrat:Medium',sans-serif] text-white/60">Email: </span>
                            <span className="font-['Montserrat:Regular',sans-serif] text-white">
                              {formData.email}
                            </span>
                          </div>
                          <div>
                            <span className="font-['Montserrat:Medium',sans-serif] text-white/60">Phone: </span>
                            <span className="font-['Montserrat:Regular',sans-serif] text-white">
                              {formData.phone}
                            </span>
                          </div>
                          <div>
                            <span className="font-['Montserrat:Medium',sans-serif] text-white/60">Company: </span>
                            <span className="font-['Montserrat:Regular',sans-serif] text-white">
                              {formData.company}
                            </span>
                          </div>
                          <div className="md:col-span-2">
                            <span className="font-['Montserrat:Medium',sans-serif] text-white/60">Job Title: </span>
                            <span className="font-['Montserrat:Regular',sans-serif] text-white">
                              {formData.jobTitle}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Business Information */}
                      <div className="space-y-3 pt-4 border-t border-white/10">
                        <h4 className="font-['Montserrat:Bold',sans-serif] text-[16px] text-white">
                          Business Information
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px]">
                          <div>
                            <span className="font-['Montserrat:Medium',sans-serif] text-white/60">Industry: </span>
                            <span className="font-['Montserrat:Regular',sans-serif] text-white">
                              {formData.industry}
                            </span>
                          </div>
                          <div>
                            <span className="font-['Montserrat:Medium',sans-serif] text-white/60">Company Size: </span>
                            <span className="font-['Montserrat:Regular',sans-serif] text-white">
                              {formData.companySize}
                            </span>
                          </div>
                          {formData.timeline && (
                            <div>
                              <span className="font-['Montserrat:Medium',sans-serif] text-white/60">Timeline: </span>
                              <span className="font-['Montserrat:Regular',sans-serif] text-white">
                                {formData.timeline}
                              </span>
                            </div>
                          )}
                          {formData.budget && (
                            <div>
                              <span className="font-['Montserrat:Medium',sans-serif] text-white/60">Budget: </span>
                              <span className="font-['Montserrat:Regular',sans-serif] text-white">
                                {formData.budget}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Current Challenges */}
                      {formData.challenges.length > 0 && (
                        <div className="space-y-3 pt-4 border-t border-white/10">
                          <h4 className="font-['Montserrat:Bold',sans-serif] text-[16px] text-white">
                            Current Challenges
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {formData.challenges.map(challenge => (
                              <span
                                key={challenge}
                                className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full font-['Montserrat:Regular',sans-serif] text-[12px] text-white/90"
                              >
                                {challenge}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Interested Services */}
                      {formData.services.length > 0 && (
                        <div className="space-y-3 pt-4 border-t border-white/10">
                          <h4 className="font-['Montserrat:Bold',sans-serif] text-[16px] text-white">
                            Interested Services
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {formData.services.map(serviceId => {
                              const service = SERVICES.find(s => s.id === serviceId);
                              return service ? (
                                <span
                                  key={serviceId}
                                  className="px-3 py-1.5 bg-purple-600/20 border border-purple-500/30 rounded-full font-['Montserrat:Regular',sans-serif] text-[12px] text-purple-300"
                                >
                                  {service.label}
                                </span>
                              ) : null;
                            })}
                          </div>
                        </div>
                      )}

                      {/* Additional Information */}
                      {formData.additionalInfo && (
                        <div className="space-y-3 pt-4 border-t border-white/10">
                          <h4 className="font-['Montserrat:Bold',sans-serif] text-[16px] text-white">
                            Additional Information
                          </h4>
                          <p className="font-['Montserrat:Regular',sans-serif] text-[13px] text-white/80">
                            {formData.additionalInfo}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                {currentStep > 1 ? (
                  <button
                    onClick={handlePrevious}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all font-['Montserrat:Bold',sans-serif] text-[14px] text-white"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous
                  </button>
                ) : (
                  <div /> // Spacer
                )}

                {currentStep < 4 ? (
                  <button
                    onClick={handleNext}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transition-all font-['Montserrat:Bold',sans-serif] text-[14px] text-white ml-auto"
                  >
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transition-all font-['Montserrat:Bold',sans-serif] text-[14px] text-white ml-auto disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        Submit
                        <CheckCircle2 className="w-4 h-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}