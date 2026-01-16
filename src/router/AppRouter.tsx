/**
 * CENTRALIZED APP ROUTER
 * All routing logic is contained here
 * Uses React Router v7 with proper URL handling
 */

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import all page components
import Home from '@/pages/Home';
import CloudPractice from '@/pages/services/CloudPractice';
import DigitalEngineering from '@/pages/services/DigitalEngineering';
import BigData from '@/pages/services/BigData';
import AppModernization from '@/pages/services/AppModernization';
import Security from '@/pages/services/Security';
import DatabaseManagement from '@/pages/services/DatabaseManagement';
import ERPTesting from '@/pages/services/ERPTesting';
import AgentStudio from '@/pages/products/AgentStudio';
import AtlasAPIManager from '@/pages/products/AtlasAPIManager';
import OttohmVideo from '@/pages/products/OttohmVideo';
import ITSMTicketing from '@/pages/products/ITSMTicketing';
import AIOps from '@/pages/products/AIOps';
import SmartContracts from '@/pages/products/SmartContracts';
import AI from '@/pages/ai/AI';
import BFSIAgents from '@/pages/ai/BFSIAgents';
import BrandManagement from '@/pages/ai/BrandManagement';
import OurTeam from '@/pages/who-we-are/OurTeam';
import AboutUs from '@/pages/who-we-are/AboutUs';
import Partners from '@/pages/who-we-are/Partners';
import Careers from '@/pages/who-we-are/Careers';
import NewsUpdates from '@/pages/who-we-are/NewsUpdates';
import CaseStudies from '@/pages/CaseStudies';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />
        
        {/* Services */}
        <Route path="/services/cloud-practice" element={<CloudPractice />} />
        <Route path="/services/digital-engineering" element={<DigitalEngineering />} />
        <Route path="/services/big-data" element={<BigData />} />
        <Route path="/services/app-modernization" element={<AppModernization />} />
        <Route path="/services/security" element={<Security />} />
        <Route path="/services/database-management" element={<DatabaseManagement />} />
        <Route path="/services/erp-testing" element={<ERPTesting />} />
        
        {/* Products */}
        <Route path="/products/agent-studio" element={<AgentStudio />} />
        <Route path="/products/atlas-api-manager" element={<AtlasAPIManager />} />
        <Route path="/products/ottohm-video" element={<OttohmVideo />} />
        <Route path="/products/itsm-ticketing" element={<ITSMTicketing />} />
        <Route path="/products/ai-ops" element={<AIOps />} />
        <Route path="/products/smart-contracts" element={<SmartContracts />} />
        
        {/* AI */}
        <Route path="/ai" element={<AI />} />
        <Route path="/ai/bfsi-agents" element={<BFSIAgents />} />
        <Route path="/ai/brand-management" element={<BrandManagement />} />
        
        {/* Who We Are */}
        <Route path="/who-we-are/our-team" element={<OurTeam />} />
        <Route path="/who-we-are/about-us" element={<AboutUs />} />
        <Route path="/who-we-are/partners" element={<Partners />} />
        <Route path="/who-we-are/careers" element={<Careers />} />
        <Route path="/who-we-are/news-updates" element={<NewsUpdates />} />
        
        {/* Case Studies */}
        <Route path="/case-studies" element={<CaseStudies />} />
        
        {/* Catch all - redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
