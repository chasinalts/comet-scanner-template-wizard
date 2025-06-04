# Project Development Rules

## RULE: Node.js Version Management
**MANDATORY: This project MUST use Node.js v22.x**

### Version Requirements
- **Node.js**: `>=22.0.0 <23.0.0` (strictly v22)
- **npm**: Compatible with Node.js v22
- **Deployment**: Netlify configured for Node.js v22

### Why Node.js v22 is Required
- Enhanced native `fetch()` API support with improved performance
- Advanced `AbortController` compatibility throughout codebase
- Optimized ES modules (`"type": "module"`) support
- Latest Vite, Vitest, TypeScript dependencies fully compatible with v22+
- Enhanced Supabase JS client compatibility and performance
- Modern production deployment consistency
- Better memory management and performance optimizations
- Latest security patches and stability improvements

### Version Alignment Checklist
✅ `.node-version` file contains `22`
✅ `package.json` engines field: `"node": ">=22.0.0 <23.0.0"`
✅ `netlify.toml` specifies `NODE_VERSION = "22"`
✅ Local development uses Node.js v22

### Setup Commands
```bash
# Set Node version
echo "22" > .node-version
nvm use 22

# Verify version
node --version  # Should show v22.x.x
```

### Node.js v22 Documentation Rule
**MANDATORY: AI must ONLY use Node.js v22 documentation and examples**
- When providing Node.js guidance, reference ONLY v22 features and APIs
- Do NOT use examples from other Node.js versions
- All Node.js code examples must be compatible with v22.x
- When in doubt about Node.js functionality, verify against v22 documentation

---

## RULE: TypeScript/React Import Error Prevention
MANDATORY CHECKS BEFORE ANY IMPORT MODIFICATIONS:

ALWAYS CHECK VERSIONS FIRST

Before suggesting any import fixes, check package.json for React and @types/react versions
If @types/react version is older than React version, update @types/react FIRST
Never suggest import syntax changes without version verification


TSCONFIG.JSON ANALYSIS REQUIRED

Check tsconfig.json for allowSyntheticDefaultImports and esModuleInterop settings
If either is missing or false, recommend adding them BEFORE changing imports
Never ignore TypeScript configuration when debugging import errors


IMPORT SYNTAX VALIDATION

For React hooks: ALWAYS use import React, { useEffect, useState } from '../utils/react-imports' (or appropriate relative path to utils/react-imports)
NEVER suggest import { React, useEffect } from 'react' (incorrect)
For utility modules without default exports: Use import * as moduleName from './module'
For modules with default exports: Use import moduleName from './module'


ERROR PATTERN RECOGNITION

If seeing "allowSyntheticDefaultImports" error: Check if module has default export
If seeing "no exported member" error: Check @types package version first
If error persists after fixes: Investigate module system mismatch (CommonJS vs ES6)


DEBUGGING PROTOCOL

Step 1: Verify package versions compatibility
Step 2: Check TypeScript configuration
Step 3: Analyze actual module exports
Step 4: Apply appropriate import syntax
Step 5: Test and validate fix



FORBIDDEN ACTIONS:

❌ DO NOT repeatedly suggest the same import syntax without investigating why it failed
❌ DO NOT ignore TypeScript configuration files
❌ DO NOT assume default exports exist without checking
❌ DO NOT mix CommonJS and ES6 import patterns
❌ DO NOT suggest complex workarounds before trying simple version updates

REQUIRED ACTIONS:

✅ ALWAYS check package versions before import fixes
✅ ALWAYS examine tsconfig.json before suggesting configuration changes
✅ ALWAYS explain WHY a specific import syntax is correct for the situation
✅ ALWAYS provide step-by-step verification instructions
✅ ALWAYS suggest testing the fix before proceeding with additional changes

---

## RULE: Deprecated Package Management
**Handle deprecated packages proactively**

### Current Deprecated Packages in Project
Based on npm warnings, these packages need attention:

#### Critical Deprecations
- **ESLint v8.57.1** → Upgrade to ESLint v9.x (Current)
  - Status: No longer supported
  - Action: Update to latest ESLint version
  - Reference: https://eslint.org/version-support

#### Transitive Dependencies (Auto-resolved)
- **inflight@1.0.6** → Use lru-cache for async request coalescing
- **rimraf@3.0.2** → Upgrade to rimraf v4+
- **glob@7.2.3** → Upgrade to glob v9+
- **@humanwhocodes/config-array@0.13.0** → Use @eslint/config-array
- **@humanwhocodes/object-schema@2.0.3** → Use @eslint/object-schema

### Deprecation Management Protocol
1. **Immediate Action Required**: ESLint upgrade
2. **Monitor**: Transitive dependencies (usually auto-resolved)
3. **Audit**: Run `npm audit` regularly
4. **Update**: Keep dependencies current with security patches

### ESLint Migration Steps (CORRECTED)
**Issue**: eslint-plugin-react-hooks@4.6.2 doesn't support ESLint v9

#### Option A: Stay with ESLint v8 (Recommended for stability)
```bash
# Update to latest ESLint v8
npm install --save-dev eslint@^8.57.1
npm install --save-dev @typescript-eslint/eslint-plugin@latest
npm install --save-dev @typescript-eslint/parser@latest

# This resolves deprecation while maintaining compatibility
```

#### Option B: Upgrade to ESLint v9 (Requires plugin updates)
```bash
# First update react-hooks plugin to v5+ (supports ESLint v9)
npm install --save-dev eslint-plugin-react-hooks@^5.0.0

# Then install ESLint v9
npm install --save-dev eslint@^9.0.0
npm install --save-dev @typescript-eslint/eslint-plugin@latest
npm install --save-dev @typescript-eslint/parser@latest

# Convert to flat config format in eslint.config.js
```

#### If conflicts persist, use legacy resolution:
```bash
npm install --legacy-peer-deps
```

### Forbidden Actions
❌ DO NOT ignore deprecation warnings
❌ DO NOT delay critical security updates
❌ DO NOT use deprecated packages in new code

---

## RULE: Dependency Management
**Maintain consistent and secure dependencies**

### Package Version Control
- Keep `@types/react` and `@types/react-dom` updated to match React version
- Use exact versions for critical dependencies in `package.json`
- Regularly audit dependencies with `npm audit`
- Update security vulnerabilities immediately

### Installation Protocol
```bash
# Clean install after version changes
rm -rf node_modules package-lock.json
npm install

# Update type definitions
npm install @types/react@latest @types/react-dom@latest
```

### Forbidden Actions
❌ DO NOT install packages without checking Node.js v22 compatibility
❌ DO NOT ignore `package-lock.json` conflicts
❌ DO NOT mix package managers (stick to npm)

---

## RULE: Development Environment
**Ensure consistent development setup**

### Required Tools
- Node.js v22.x (via nvm recommended)
- npm (bundled with Node.js)
- VS Code with recommended extensions
- Git for version control

### Environment Setup
1. Clone repository
2. Set Node.js version: `nvm use 22`
3. Install dependencies: `npm install`
4. Copy environment: `cp .env.example .env`
5. Start development: `npm run dev`

### VS Code Configuration
- Install recommended extensions from `.vscode/extensions.json`
- Enable TypeScript strict mode
- Configure ESLint and Prettier
- Use workspace settings for consistent formatting

---

## RULE: Build and Deployment
**Ensure production-ready builds**

### Build Requirements
- All builds MUST pass TypeScript compilation
- No ESLint errors allowed in production builds
- Vite build optimization enabled
- Source maps generated for debugging

### Deployment Checklist
✅ Node.js v22 specified in deployment config
✅ Environment variables properly configured
✅ Build artifacts optimized and compressed
✅ CORS headers configured correctly
✅ Security headers implemented

### Testing Protocol
- Run `npm test` before commits
- Verify build with `npm run build`
- Test production build locally
- Validate deployment on staging environment

---

## RULE: Code Quality Standards
**Maintain high code quality and consistency**

### TypeScript Configuration
- Strict mode enabled in `tsconfig.json`
- No `any` types without explicit justification
- Proper type definitions for all components
- Interface definitions for complex objects

### React Best Practices
- Use functional components with hooks
- Implement proper error boundaries
- Optimize re-renders with `useMemo` and `useCallback`
- Follow component composition patterns

### File Organization
- Components in `/src/components/`
- Hooks in `/src/hooks/`
- Types in `/src/types/`
- Utilities in `/src/utils/`
- Pages in `/src/pages/`

### Security Guidelines
- Never commit secrets or API keys
- Use environment variables for configuration
- Implement proper input validation
- Follow OWASP security practices

---

## RULE: Performance Optimization
**Ensure optimal application performance**

### Bundle Optimization
- Code splitting for large components
- Lazy loading for non-critical routes
- Image optimization and compression
- Tree shaking for unused code elimination

### Runtime Performance
- Minimize re-renders with proper dependency arrays
- Use React.memo for expensive components
- Implement virtual scrolling for large lists
- Optimize API calls with caching strategies

### Monitoring
- Track bundle size changes
- Monitor Core Web Vitals
- Implement error tracking
- Use performance profiling tools