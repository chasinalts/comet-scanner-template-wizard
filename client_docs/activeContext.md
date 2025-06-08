CSTW ACTIVE CONTEXT

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
3. **Content Management**: No system for admin to wizard and AI feature (questions, images, template code)
4. **Navigation Structure**: Need clear routing between user and admin areas (admin with authentication)

# Recent Changes
- Established client documentation system in `client_docs/`
- Identified need for app restructuring
- Analyzed existing component structure

*****check and edit current components (contained in everything below this line) against current code******
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
- Image, Code snippet, and Master Code upload and management system


# Next Steps

## Phase 1: Structural Separation
1. Create dedicated admin route (`/admin`)
2. Move admin components to admin-only pages
3. Clean up main user interface
4. Establish clear navigation between user/admin areas

## Phase 2: Admin Dashboard Enhancement
1. Template CRUD operations
2. Image management system
3. Code snippet library
4. Master code management
5. Wizard configuration interface

## Phase 3: User Experience Optimization
1. Streamline template builder workflow
2. Improve code generation and preview
3. Enhanced visualization options
4. Better template categorization

# Blockers
- Need detailed requirements for admin dashboard functionality
- Supabase schema needs to be defined for template/content management
- Image storage strategy needs clarification

# Development Priority
1. **HIGH**: Separate user and admin interfaces
2. **HIGH**: Create comprehensive admin dashboard
3. **MEDIUM**: Enhance template management system
4. **MEDIUM**: Improve user workflow
5. **LOW**: Advanced features and integrations