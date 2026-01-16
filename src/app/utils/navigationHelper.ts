/**
 * NAVIGATION HELPER UTILITY
 * PURPOSE: Centralized navigation system using React Router
 * ENSURES: Proper URL-based navigation for production deployment
 * 
 * ⚠️ DEVELOPER NOTES:
 * - DO NOT use anchor tags (<a href>) for internal navigation
 * - DO NOT use window.location.href or window.location.assign for internal navigation
 * - ALWAYS use React Router Link/NavLink or useNavigate hook
 * - This ensures smooth client-side navigation without full page reloads
 */

/**
 * Service titles mapping (for consistency)
 */
export const SERVICE_TITLES = {
  CLOUD_PRACTICE: 'Cloud Practice',
  DIGITAL_ENGINEERING: 'Digital & Product Engineering',
  BIG_DATA: 'Big Data',
  APP_MODERNIZATION: 'App Modernization',
  SECURITY: 'Security',
  DATABASE_MANAGEMENT: 'Database Management',
  ERP_TESTING: 'ERP & Testing',
} as const;

/**
 * Product titles mapping (for consistency)
 */
export const PRODUCT_TITLES = {
  AGENT_STUDIO: 'Agent Studio',
  ATLAS_API_MANAGER: 'Atlas API Manager',
  OTTOHM_VIDEO: 'Ottohm Video',
  ITSM_TICKETING: 'ITSM Ticketing',
  AI_OPS: 'AI Ops Platform',
  SMART_CONTRACTS: 'Smart Contracts',
} as const;

/**
 * AI Solution titles mapping
 */
export const AI_TITLES = {
  BFSI_AGENTS: 'BFSI Agents',
  BRAND_MANAGEMENT: 'Brand Management Agents',
} as const;

/**
 * Who We Are items mapping
 */
export const WHO_WE_ARE_ITEMS = {
  OUR_TEAM: 'Our Team',
  ABOUT_US: 'About Us',
  PARTNERS: 'Partners',
  CAREERS: 'Careers',
  NEWS: 'News & Updates',
} as const;

/**
 * Route mappings - converts titles to URL paths
 * USE THESE WITH React Router Link components or useNavigate hook
 */
const SERVICE_ROUTES: Record<string, string> = {
  'Cloud Practice': '/services/cloud-practice',
  'Digital & Product Engineering': '/services/digital-engineering',
  'Big Data': '/services/big-data',
  'App Modernization': '/services/app-modernization',
  'Security': '/services/security',
  'Database Management': '/services/database-management',
  'ERP & Testing': '/services/erp-testing',
};

const PRODUCT_ROUTES: Record<string, string> = {
  'Agent Studio': '/products/agent-studio',
  'Atlas API Manager': '/products/atlas-api-manager',
  'Ottohm Video': '/products/ottohm-video',
  'ITSM Ticketing': '/products/itsm-ticketing',
  'AI Ops Platform': '/products/ai-ops',
  'Smart Contracts': '/products/smart-contracts',
};

const AI_ROUTES: Record<string, string> = {
  'BFSI Agents': '/ai/bfsi-agents',
  'Brand Management Agents': '/ai/brand-management',
};

const WHO_WE_ARE_ROUTES: Record<string, string> = {
  'Our Team': '/who-we-are/our-team',
  'About Us': '/who-we-are/about-us',
  'Partners': '/who-we-are/partners',
  'Careers': '/who-we-are/careers',
  'News & Updates': '/who-we-are/news-updates',
};

/**
 * ⚠️ DEPRECATED: Use React Router's useNavigate hook instead
 * This function is kept for backward compatibility but should be avoided
 * 
 * @deprecated Use React Router's useNavigate() hook instead
 */
export function navigateTo(path: string): void {
  if (typeof window !== 'undefined') {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'auto' });
    
    // Navigate using window.location for now (React Router will handle the routing)
    window.location.href = path;
  }
}

/**
 * ⚠️ DEPRECATED: Use React Router Link with getServiceUrl() instead
 * @deprecated Use <Link to={getServiceUrl(serviceTitle)}>
 */
export function navigateToService(serviceTitle: string): void {
  const route = SERVICE_ROUTES[serviceTitle];
  if (route) {
    navigateTo(route);
  } else {
    console.warn(`Unknown service: ${serviceTitle}`);
  }
}

/**
 * ⚠️ DEPRECATED: Use React Router Link with getProductUrl() instead
 * @deprecated Use <Link to={getProductUrl(productTitle)}>
 */
export function navigateToProduct(productTitle: string): void {
  const route = PRODUCT_ROUTES[productTitle];
  if (route) {
    navigateTo(route);
  } else {
    console.warn(`Unknown product: ${productTitle}`);
  }
}

/**
 * ⚠️ DEPRECATED: Use React Router Link with getAIUrl() instead
 * @deprecated Use <Link to={getAIUrl(aiTitle) or "/ai"}>
 */
export function navigateToAI(aiTitle?: string): void {
  if (aiTitle) {
    const route = AI_ROUTES[aiTitle];
    if (route) {
      navigateTo(route);
    } else {
      console.warn(`Unknown AI solution: ${aiTitle}`);
    }
  } else {
    navigateTo('/ai');
  }
}

/**
 * ⚠️ DEPRECATED: Use React Router Link with getWhoWeAreUrl() instead
 * @deprecated Use <Link to={getWhoWeAreUrl(item)}>
 */
export function navigateToWhoWeAre(item: string): void {
  const route = WHO_WE_ARE_ROUTES[item];
  if (route) {
    navigateTo(route);
  } else {
    console.warn(`Unknown Who We Are item: ${item}`);
  }
}

/**
 * ⚠️ DEPRECATED: Use React Router Link instead
 * @deprecated Use <Link to="/">
 */
export function navigateToHome(): void {
  navigateTo('/');
}

/**
 * ⚠️ DEPRECATED: Use React Router Link instead
 * @deprecated Use <Link to="/case-studies">
 */
export function navigateToCaseStudies(): void {
  navigateTo('/case-studies');
}

/**
 * Get URL for a service (for React Router Link components)
 * ✅ USE THIS: <Link to={getServiceUrl(serviceTitle)}>
 */
export function getServiceUrl(serviceTitle: string): string {
  return SERVICE_ROUTES[serviceTitle] || '/';
}

/**
 * Get URL for a product (for React Router Link components)
 * ✅ USE THIS: <Link to={getProductUrl(productTitle)}>
 */
export function getProductUrl(productTitle: string): string {
  return PRODUCT_ROUTES[productTitle] || '/';
}

/**
 * Get URL for an AI solution (for React Router Link components)
 * ✅ USE THIS: <Link to={getAIUrl(aiTitle)}>
 */
export function getAIUrl(aiTitle: string): string {
  return AI_ROUTES[aiTitle] || '/ai';
}

/**
 * Get URL for a Who We Are item (for React Router Link components)
 * ✅ USE THIS: <Link to={getWhoWeAreUrl(item)}>
 */
export function getWhoWeAreUrl(item: string): string {
  return WHO_WE_ARE_ROUTES[item] || '/';
}