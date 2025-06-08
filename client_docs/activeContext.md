CSCSTW: ACTIVE CONTEXT

# Current Focus/Issues

## Primary Objective: App Restructuring

    ** Goal **: Separate the application into two distinct pages:
      - Page 1 (User Interface): Template builder for end users
      - Page 2 (Admin Dashboard): Content management for owner

## Current State Analysis

- Most functionality exists but is incorrectly organized
- Components are mixed between user and admin features
- Need clear separation of concerns
- Admin functionality needs to be consolidated and maintained in dashboard

## Immediate Issues

1. **Mixed UI Components**: separate user and admin features/pages
2. **Missing Admin Dashboard**: No dedicated admin interface exists
3. **Content Management**: No system for admin to wizard and AI feature (questions with each answer being being assisted by an image of chart if that answer was selected and lines of codethat are linked to each answer that will be added to Users Custom Template depending on the answer selected)
4. **Navigation Structure**: Need clear routing between user and admin areas (admin with authentication buy invisible button on the users page that can be resized and relocated according to it it's corresponding dotted outlined box that is in the dashboard at the location that it should be on the main page)

# Recent Changes

- Established client documentation system in `client_docs/`
- Identified need for app restructuring
- Analyzed existing component structure

**\***check and edit current components (contained in everything below this line) against current code**\*\***

# Active Files

## Current Components (Need Reorganization)

- `src/app/page.tsx` - Main page (currently mixed user/admin)
- `src/components/TemplateGallery.tsx` - User-facing template browser
- `src/components/TemplateWizard.tsx` - User template builder (1051 lines)
- `src/components/AdminDashboard.tsx` - Admin interface (needs expansion)
- `src/components/LiveCodePreview.tsx` - Code preview component
- `src/components/AIProviderSelector.tsx` - AI provider selection

## Files Needing Creation/Modification

- Admin routing structure
- Wizard and AI management interface
- Image, Code snippet, and Master Code and Base Code upload and management system

# Next Steps

## Phase 1: Structural Separation

1. Create dedicated admin route (`/admin`)
2. Move admin components to admin-only pages
3. Clean up main user interface
4. Establish clear navigation between user/admin areas

## Phase 2: Admin Dashboard Enhancement

1. Template CRUD operations
2. Image management system
3. Code snippet management system(snippet upload/removal and answer assignment)
4. Master code and Base Code upload
5. Wizard configuration interface

## Phase 3: User Experience Optimization

1. Streamline template builder workflow
2. Improve code generation and preview
3. Enhanced visualization options

# Blockers

- Need detailed requirements for admin dashboard functionality
- Supabase schema needs to be defined for gallery image/thumbnail, Banner image, snippet code, Base Code/Starting Code(every scanner has this code), and Master Code (Every line of code possible) and content management
- Image and code storage strategy needs clarification

# Development Priority

1. **HIGH**: Separate user and admin interfaces
2. **HIGH**: Create comprehensive admin dashboard
3. **MEDIUM**: Enhance template management system
4. **MEDIUM**: Improve user workflow
5. **LOW**: Advanced features and integrations
