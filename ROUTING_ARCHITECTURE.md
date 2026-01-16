# Routing Architecture Documentation

## Overview

This application implements a production-ready routing system using **React Router v6+** with full support for:
- Deep linking
- Nested routes
- Direct URL access
- Browser refresh persistence
- Back/forward browser navigation

## Route Structure

### Parent Routes with Nested Children

The application has four main parent routes that contain child pages:

#### 1. Services (`/services/*`)
**Parent:** `ServicesPage.tsx`
- `/services` - Overview of all services
- `/services/cloud-practice` - Cloud Practice service page
- `/services/digital-engineering` - Digital Engineering service page
- `/services/big-data` - Big Data & Analytics service page
- `/services/app-modernization` - Application Modernization service page
- `/services/security` - Security Services page
- `/services/database-management` - Database Management service page
- `/services/erp-testing` - ERP Testing service page

#### 2. Products (`/products/*`)
**Parent:** `ProductsPage.tsx`
- `/products` - Overview of all products
- `/products/agent-studio` - Agent Studio product page
- `/products/atlas-api-manager` - Atlas API Manager product page
- `/products/ottohm-video` - Ottohm Video product page
- `/products/itsm-ticketing` - ITSM Ticketing product page
- `/products/ai-ops` - AIOps Platform product page
- `/products/smart-contracts` - Smart Contracts product page

#### 3. AI (`/ai/*`)
**Parent:** `AIPage.tsx`
- `/ai` - Overview of AI solutions
- `/ai/bfsi-agents` - BFSI Agents page
- `/ai/brand-management` - Brand Management page

#### 4. Who We Are (`/who-we-are/*`)
**Parent:** `WhoWeArePage.tsx`
- `/who-we-are` - Overview of company information
- `/who-we-are/our-team` - Our Team page
- `/who-we-are/about-us` - About Us page
- `/who-we-are/partners` - Partners page
- `/who-we-are/careers` - Careers page
- `/who-we-are/news-updates` - News & Updates page

#### 5. Other Routes
- `/` - Home page (Desktop2 component)
- `/case-studies` - Case Studies page (no child routes)

## Implementation Pattern

### Parent Page Components

Each parent page (ServicesPage, ProductsPage, AIPage, WhoWeArePage) follows this pattern:

```typescript
import { Outlet, useLocation } from "react-router-dom";

export const ParentPage: React.FC = () => {
  const location = useLocation();
  
  // Check if we're on a child route
  const isChildRoute = location.pathname !== "/parent-path";
  
  // If on a child route, render the child via Outlet
  if (isChildRoute) {
    return <Outlet />;
  }
  
  // Otherwise, render the parent overview page
  return (
    <div>
      {/* Parent page content */}
    </div>
  );
};
```

### Route Configuration

Routes are defined in `/src/app/App.tsx`:

```typescript
<Routes>
  {/* Parent route */}
  <Route path="/services" element={<ServicesPage />} />
  
  {/* Child routes */}
  <Route path="/services/cloud-practice" element={<CloudPracticePage />} />
  <Route path="/services/digital-engineering" element={<DigitalEngineeringPage />} />
  {/* ... more child routes */}
</Routes>
```

## Key Features

### ✅ Direct URL Access
Users can navigate directly to any URL:
- `example.com/services/cloud-practice` ✓
- `example.com/products/agent-studio` ✓
- `example.com/ai/bfsi-agents` ✓

### ✅ Browser Refresh
Pages maintain their state after refresh. No 404 errors.

### ✅ Deep Linking
Share any URL and it will load the correct page:
- Share: `example.com/who-we-are/careers`
- Opens: Careers page directly ✓

### ✅ Parent Page Access
Accessing just the parent route shows an overview:
- `example.com/services` → Shows all services
- `example.com/products` → Shows all products
- `example.com/ai` → Shows AI solutions overview

### ✅ Navigation
All internal links use React Router:

```typescript
import { Link } from "react-router-dom";

// Correct ✓
<Link to="/services/cloud-practice">Cloud Practice</Link>

// Incorrect ✗
<a href="/services/cloud-practice">Cloud Practice</a>
```

For programmatic navigation:

```typescript
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();
navigate("/services/cloud-practice");
```

## File Structure

```
/src/app/
├── App.tsx                          # Main routing configuration
├── components/
│   ├── ServicesPage.tsx             # Parent: Services overview + Outlet
│   ├── ProductsPage.tsx             # Parent: Products overview + Outlet
│   ├── AIPage.tsx                   # Parent: AI overview + Outlet
│   ├── WhoWeArePage.tsx             # Parent: Who We Are overview + Outlet
│   ├── CloudPracticePage.tsx        # Child: Service page
│   ├── DigitalEngineeringPage.tsx   # Child: Service page
│   ├── AgentStudioPage.tsx          # Child: Product page
│   ├── BFSIAgentsPage.tsx           # Child: AI page
│   ├── OurTeamPage.tsx              # Child: Who We Are page
│   └── ...                          # More child pages
```

## Developer Guidelines

### ❌ Do NOT:
1. Use state-based page switching
2. Pass navigation callbacks as props
3. Use `<a>` tags for internal navigation
4. Assume routes work without testing direct URL access

### ✅ Do:
1. Use `<Link>` for all internal navigation
2. Use `useNavigate()` for programmatic navigation
3. Test direct URL access for all routes
4. Test browser refresh on all pages
5. Use `<Outlet />` in parent components for nested routes

## Adding New Routes

### Adding a New Child Page

1. **Create the component:**
```typescript
// /src/app/components/NewServicePage.tsx
export const NewServicePage: React.FC = () => {
  return <div>New Service Content</div>;
};
```

2. **Import in App.tsx:**
```typescript
import { NewServicePage } from "./components/NewServicePage";
```

3. **Add the route:**
```typescript
<Route path="/services/new-service" element={<NewServicePage />} />
```

4. **Add link in parent page:**
```typescript
<Link to="/services/new-service">New Service</Link>
```

### Adding a New Parent Section

1. **Create parent component with Outlet:**
```typescript
// /src/app/components/SolutionsPage.tsx
import { Outlet, useLocation } from "react-router-dom";

export const SolutionsPage: React.FC = () => {
  const location = useLocation();
  const isChildRoute = location.pathname !== "/solutions";
  
  if (isChildRoute) {
    return <Outlet />;
  }
  
  return <div>Solutions Overview</div>;
};
```

2. **Add routes in App.tsx:**
```typescript
<Route path="/solutions" element={<SolutionsPage />} />
<Route path="/solutions/solution-1" element={<Solution1Page />} />
<Route path="/solutions/solution-2" element={<Solution2Page />} />
```

## Testing Checklist

For every new route, verify:

- [ ] Direct URL access works
- [ ] Page refreshes without errors
- [ ] Parent page shows overview when accessed directly
- [ ] Child pages render correctly
- [ ] Navigation from other pages works
- [ ] Browser back/forward buttons work
- [ ] Deep links work when shared
- [ ] Mobile navigation works correctly

## Deployment Configuration

The application includes a `public/_redirects` file for deployment:

```
/*    /index.html   200
```

This ensures all routes are handled by the React app (SPA routing).

## Migration Notes

This routing architecture replaces the previous state-based navigation system. Key changes:

### Before (State-Based):
```typescript
interface Props {
  onServiceClick: (service: string) => void;
}

<button onClick={() => onServiceClick("cloud-practice")}>
  Cloud Practice
</button>
```

### After (Route-Based):
```typescript
import { Link } from "react-router-dom";

<Link to="/services/cloud-practice">
  Cloud Practice
</Link>
```

## Troubleshooting

### Issue: 404 on Direct URL Access
**Solution:** Ensure `_redirects` file exists in `public/` directory

### Issue: Page Not Updating
**Solution:** Check that you're using `<Link>` not `<a>` tags

### Issue: Parent Page Not Showing
**Solution:** Verify `isChildRoute` logic in parent component

### Issue: Outlet Not Rendering
**Solution:** Ensure parent component returns `<Outlet />` for child routes

## Best Practices

1. **Always test direct URL access** during development
2. **Use React Router DevTools** to debug routing issues
3. **Keep route paths consistent** with component names
4. **Document new routes** in this file
5. **Test on production build** before deploying

## Additional Resources

- [React Router Documentation](https://reactrouter.com/)
- [Nested Routes Guide](https://reactrouter.com/en/main/start/tutorial#nested-routes)
- [SPA Deployment](https://create-react-app.dev/docs/deployment/#serving-apps-with-client-side-routing)

---

**Last Updated:** January 2026  
**React Router Version:** 6+
