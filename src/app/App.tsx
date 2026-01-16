// Main App Component with React Router
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";

// Import page components
import Desktop2 from "../imports/Desktop72";

// Parent pages
import { ServicesPage } from "./components/ServicesPage";
import { ProductsPage } from "./components/ProductsPage";
import { AIPage } from "./components/AIPage";
import { WhoWeArePage } from "./components/WhoWeArePage";

// Service pages
import { CloudPracticePage } from "./components/CloudPracticePage";
import { DigitalEngineeringPage } from "./components/DigitalEngineeringPage";
import { BigDataPage } from "./components/BigDataPage";
import { AppModernizationPage } from "./components/AppModernizationPage";
import { SecurityPage } from "./components/SecurityPage";
import { DatabaseManagementPage } from "./components/DatabaseManagementPage";
import { ERPTestingPage } from "./components/ERPTestingPage";

// Product pages
import { AgentStudioPage } from "./components/AgentStudioPage";
import { AtlasAPIManagerPage } from "./components/AtlasAPIManagerPage";
import { OttohmVideoPage } from "./components/OttohmVideoPage";
import ITSMTicketingPage from "./components/ITSMTicketingPage";
import AIOpsPage from "./components/AIOpsPage";
import SmartContractsPage from "./components/SmartContractsPage";

// AI pages
import BFSIAgentsPage from "./components/BFSIAgentsPage";
import { BrandManagementPage } from "./components/BrandManagementPage";

// Who We Are pages
import { OurTeamPage } from "./components/OurTeamPage";
import AboutUsPage from "./components/AboutUsPage";
import PartnersPage from "./components/PartnersPage";
import CareersPage from "./components/CareersPage";
import NewsUpdatesPage from "./components/NewsUpdatesPage";

// Case Studies
import { CaseStudiesPage } from "./components/CaseStudiesPage";

/**
 * ROUTING ARCHITECTURE - Developer Handoff Notes
 * 
 * This application uses React Router v6+ with support for nested routes and deep linking.
 * 
 * PARENT ROUTES WITH NESTED CHILDREN:
 * - /services/* - Parent route with child service pages
 * - /products/* - Parent route with child product pages  
 * - /ai/* - Parent route with child AI solution pages
 * - /who-we-are/* - Parent route with child company pages
 * 
 * IMPLEMENTATION DETAILS:
 * 1. Parent pages (ServicesPage, ProductsPage, AIPage, WhoWeArePage) check the current path
 * 2. If on a child route, they render <Outlet /> to display the child component
 * 3. If on the parent route, they render their own overview/landing page
 * 4. All navigation uses React Router's <Link> and useNavigate() hooks
 * 
 * SUPPORTED BEHAVIORS:
 * - Direct URL access (e.g., /services/cloud-practice)
 * - Browser refresh maintains current page
 * - Deep linking works correctly
 * - Back/forward browser buttons work as expected
 * 
 * DO NOT:
 * - Use state-based page switching
 * - Rely on props for navigation
 * - Assume parent routes need explicit wildcard (*) in current flat structure
 * 
 * TO EXTEND:
 * - Add new routes following the existing pattern
 * - Ensure parent pages render <Outlet /> for child routes
 * - Use <Link to="/path"> for internal navigation
 */

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="w-full transition-colors duration-300" style={{ backgroundColor: 'var(--theme-bg-primary)' }}>
          <Routes>
            {/* Home */}
            <Route path="/" element={<Desktop2 />} />
            
            {/* Services */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/cloud-practice" element={<CloudPracticePage />} />
            <Route path="/services/digital-engineering" element={<DigitalEngineeringPage />} />
            <Route path="/services/big-data" element={<BigDataPage />} />
            <Route path="/services/app-modernization" element={<AppModernizationPage />} />
            <Route path="/services/security" element={<SecurityPage />} />
            <Route path="/services/database-management" element={<DatabaseManagementPage />} />
            <Route path="/services/erp-testing" element={<ERPTestingPage />} />
            
            {/* Products */}
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/agent-studio" element={<AgentStudioPage />} />
            <Route path="/products/atlas-api-manager" element={<AtlasAPIManagerPage />} />
            <Route path="/products/ottohm-video" element={<OttohmVideoPage />} />
            <Route path="/products/itsm-ticketing" element={<ITSMTicketingPage />} />
            <Route path="/products/ai-ops" element={<AIOpsPage />} />
            <Route path="/products/smart-contracts" element={<SmartContractsPage />} />
            
            {/* AI */}
            <Route path="/ai" element={<AIPage />} />
            <Route path="/ai/bfsi-agents" element={<BFSIAgentsPage />} />
            <Route path="/ai/brand-management" element={<BrandManagementPage />} />
            
            {/* Who We Are */}
            <Route path="/who-we-are" element={<WhoWeArePage />} />
            <Route path="/who-we-are/our-team" element={<OurTeamPage />} />
            <Route path="/who-we-are/about-us" element={<AboutUsPage />} />
            <Route path="/who-we-are/partners" element={<PartnersPage />} />
            <Route path="/who-we-are/careers" element={<CareersPage />} />
            <Route path="/who-we-are/news-updates" element={<NewsUpdatesPage />} />
            
            {/* Case Studies */}
            <Route path="/case-studies" element={<CaseStudiesPage />} />
            
            {/* Catch all - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}