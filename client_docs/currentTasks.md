CSTW TASKS - APP RESTRUCTURING POST INITIAL "SETUP-PROMPT"

# Phase 1: Interface Separation

⚠️ **Task 1.1: Create Admin Route Structure**
	- To-be achieved: Establish `/admin` route with proper authentication to Dashboard through invisible button on Template Builder page.
	- Already achieved: Basic Next.js routing structure exists
	- Is blocked: Need to define authentication strategy
	- In progress: Nothing
	- Is next: Create admin layout and routing
	- Components created: None yet
	- Files to modify: `src/app/admin/layout.tsx`, `src/app/admin/page.tsx`
	
⚠️ **Task 1.2: Separate User Interface (Main Page)**
	- To-be achieved: Clean main page to only show user-facing template builder
	- Already achieved: TemplateGallery and TemplateWizard components exist
	- Is blocked: Nothing
	- In progress: Nothing
	- Is next: Remove admin elements from main page
	- Components created: TemplateGallery.tsx, TemplateWizard.tsx, LiveCodePreview.tsx
	- Files to modify: `src/app/page.tsx`
	
⚠️ **Task 1.3: Move Admin Components to Dashboard**
	- To-be achieved: Consolidate all admin functionality into dedicated dashboard
	- Already achieved: AdminDashboard.tsx component exists (basic)
	- Is blocked: Need detailed admin requirements
	- In progress: Nothing
	- Is next: Expand AdminDashboard component
	- Components created: AdminDashboard.tsx (needs expansion)
	- Files to modify: `src/components/AdminDashboard.tsx`


# Phase 2: Admin Dashboard Features

⚠️ **Task 2.1: Template Management System**
	- To-be achieved: CRUD operations for scanner templates
	- Already achieved: Template interface defined
	- Is blocked: Supabase schema not defined
	- In progress: Nothing
	- Is next: Design template database schema
	- Components created: None yet
	- Files to create: `src/components/admin/TemplateManager.tsx`
	
⚠️ **Task 2.2: Image Management System**
	- To-be achieved: Upload/manage banner images, thumbnails, branding
	- Already achieved: Supabase storage configured
	- Is blocked: Image upload component not created
	- In progress: Nothing
	- Is next: Create image upload interface
	- Components created: None yet
	- Files to create: `src/components/admin/ImageManager.tsx`
	
⚠️ **Task 2.3: Code Snippet Management**
	- To-be achieved: Manage reusable Pine Script code snippets
	- Already achieved: AI service structure exists
	- Is blocked: Code snippet schema not defined
	- In progress: Nothing
	- Is next: Design code snippet storage system
	- Components created: None yet
	- Files to create: `src/components/admin/CodeSnippetManager.tsx`
	
⚠️ **Task 2.4: Master Code Repository**
	- To-be achieved: Central repository containing all possible Pine Script code
	- Already achieved: Basic AI service with prompts
	- Is blocked: Master code structure not defined
	- In progress: Nothing
	- Is next: Define master code organization
	- Components created: None yet
	- Files to create: `src/components/admin/MasterCodeManager.tsx`
	
⚠️ **Task 2.5: Wizard Configuration Interface**
	- To-be achieved: Admin can configure wizard steps and options
	- Already achieved: TemplateWizard component with step structure
	- Is blocked: Wizard configuration schema not defined
	- In progress: Nothing
	- Is next: Create wizard step configuration interface
	- Components created: TemplateWizard.tsx (user-facing)
	- Files to create: `src/components/admin/WizardConfigurator.tsx`


# Phase 3: Database Schema

⚠️ **Task 3.1: Supabase Schema Design**
	- To-be achieved: Complete database schema for templates, images, code snippets
	- Already achieved: Supabase client configured
	- Is blocked: Schema requirements not fully defined
	- In progress: Nothing
	- Is next: Create comprehensive schema
	- Components created: supabaseClient.ts
	- Files to create: `src/types/supabaseDb.ts`, SQL migration files
	
⚠️ **Task 3.2: Authentication System**
	- To-be achieved: Admin authentication for dashboard access
	- Already achieved: Supabase auth configured
	- Is blocked: Auth flow not implemented
	- In progress: Nothing
	- Is next: Implement admin login system
	- Components created: None yet
	- Files to create: `src/components/auth/AdminLogin.tsx`
	
	
# Phase 4: User Experience Enhancement
	
⚠️ **Task 4.1: Streamline Template Builder**
	- To-be achieved: Optimize user workflow in template wizard
	- Already achieved: Basic wizard structure (1051 lines)
	- Is blocked: Nothing
	- In progress: Nothing
	- Is next: Analyze and optimize wizard flow
	- Components created: TemplateWizard.tsx
	- Files to modify: `src/components/TemplateWizard.tsx`
	
⚠️ **Task 4.2: Enhanced Code Preview**
	- To-be achieved: Better code preview with syntax highlighting
	- Already achieved: LiveCodePreview component exists
	- Is blocked: Nothing
	- In progress: Nothing
	- Is next: Add syntax highlighting and better formatting
	- Components created: LiveCodePreview.tsx
	- Files to modify: `src/components/LiveCodePreview.tsx`


SUMMARY
	- Total Tasks: 12
	- Not Started: 12 ⚠️
	- In Progress:  0 ⚙️
	-     Blocked:  0 ❌
	-   Completed:  0 ✅


IMMEDIATE PROIORITY
	1. Task 1.2: Separate User Interface (Main Page) from Dashboard
	2. Task 1.1: Create Admin Route Structure
	3. Task 1.3: Move Admin Components to Dashboard
	4. Task 3.1: Supabase Schema Design