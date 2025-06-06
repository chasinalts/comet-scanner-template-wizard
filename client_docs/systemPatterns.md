# System Patterns - COMET Scanner Template Wizard

## High-Level Architecture

### Two-Page Application Structure

#### Template Builder (`/`) - User Interaction Page
```
COMET Scanner Template Wizard
├── Page 1: User Interface (/)
" │   ├── Template Gallery (displays templates created in Dashboard)
│   ├── Template Wizard (user interaction with section│   ├── AI Provider Selection
 on the right of the screen│   ├── Live Code Preview
│   ├── Generated Code Export
│   └── Import/Export Section (collapsible left tab)
│       ├── Progress Checklist
│       ├── Export State to File
│       └── Import State from File
└── Page 2: Admin Dashboard (/admin)
    ├── Section Creation/Editing
    ├── Template Management
    ├── Code Snippet Library
    ├── Visual Asset Manager
    ├── AI Configuration
    └── System Analytics
```

#### Section Relationship
- **Dashboard**: Where sections are created, edited, and configured
- **Template Builder**: Where users interact with sections to assign specific code based on their responses
- **Data Flow**: Dashboard creates → Template Builder implements → User assigns ### Import/Export Section (Template Builder)
- **Collapsible Tab Interface**:
  - Small tab on left side with "Import/Export" text
  - Expands to 1/3 of page width when selected
  - Collapses when clicking outside the expanded area
- **Progress Tracking Checklist**:
  - Completed items (checked boxes)
  - Quit items (marked as abandoned)
  - Paused items (temporarily stopped)
  - Never opened items (not yet started)
- **Export Functionality**:
  - Captures all step outputs and user answers
  - Includes complete COMET Scanner template state
  - Downloads file to user's device
- **Import Functionality**:
  - Accepts exported files from other users
  - Clones exact environment state and template
  - Restores progress and configuration
- **Live Preview Functionality:** A pull-out tab on the right side of the Template Builder page labeled "Live Preview" displays the COMET Scanner Template Live Preview. This tab pulls out and remains visible until the "X" button is pressed to hide it. The preview starts with the base "Master Code" (template code that the admin inputs in the Dashboard) and updates live as users complete sections. Each completed section adds code to the template in the correct location, determined by the Master Code template which contains every possible line of code in proper order relative to all other potential code additions. This ensures correct code placement even if users complete sections out of order.

### Core Technical Patterns

#### 1. Component Architecture
```
src/
├── components/
│   ├── user/              # Template Builder components (user interaction)
│   │   ├── TemplateGallery.tsx
│   │   ├── TemplateWizard.tsx
│   │   ├── LiveCodePreview.tsx
│   │   ├── ImportExportTab.tsx
│   │   ├── ProgressChecklist.tsx
│   │   ├── LivePreviewTab.tsx
│   │   └── MasterCodeRenderer.tsx
│   ├── admin/             # Dashboard components (content creation/editing)
│   │   ├── SectionManager.tsx
│   │   ├── TemplateManager.tsx
│   │   └── CodeSnippetManager.tsx
│   └── shared/            # Reusable components
│       ├── AIProviderSelector.tsx
│       └── LoadingSpinner.tsx
├── app/
│   ├── page.tsx           # User interface (template builder)
│   └── admin/
│       ├── layout.tsx     # Admin layout
│       └── page.tsx       # Admin dashboard (section management)
```

### Section Management Flow
- **Dashboard Components**: Create and edit sections with configurable options
- **Template Builder Components**: Display sections for user interaction and code assignment
- **Shared Components**: Common UI elements used across both interfaces

#### 2. Data Flow Architecture
```
User Workflow (Template Builder):
Section Interaction → User Response → Code Assignment → AI Generation → Preview → Export

Admin Workflow (Dashboard):
Section Creation → Configuration → Code Options → Template Assembly → Publish

Import/Export Workflow:
Progress Tracking → State Capture → File Export → File Download
File Import → State Restoration → Environment Clone → Continue Work

Data Flow:
Dashboard: Creates Sections → Stores in Database → Defines Master Code Template
Template Builder: Reads Sections → User Interaction → Assigns Code → Master Code Positioning → Live Preview Update
Import/Export: Captures State → File System → Restores State
Live Preview: Master Code Template → Section Completion → Code Insertion → Real-time Display

Section Lifecycle:
Dashboard (Create/Edit) → Database (Store) → Template Builder (Display/Interact) → Code Assignment → State Export/Import
```

#### 3. State Management Pattern
- **Local State**: React useState for component-specific state
- **Shared State**: Context providers for cross-component data
- **Server State**: Supabase real-time subscriptions
- **AI State**: Custom hooks (useAI) for generation status

#### 4. Authentication Pattern
```
Public Routes:
- / (User interface)
- /api/ai/generate (AI generation endpoint)

Protected Routes:
- /admin/* (Admin dashboard and sub-pages)
- /api/admin/* (Admin API endpoints)
```

### Password Protection System
- **No Row Level Security**: All database operations are password-protected at application level
- **Invisible Password Button**: 
  - Initially positioned at top-right corner of screen
  - Owner can reposition through dashboard at any time
  - Triggers password input box when clicked
- **Resizable Password Input Box**:
  - Adjustable on both vertical and horizontal axis
  - Recognizable by dotted line perimeter
  - First published entry becomes the password
  - Password changeable through dashboard

### Authentication Flow
```
User Access: Public → Template Builder
Admin Access: Invisible Button → Password Input → Dashboard → Management Features
```

## Core Technical Decisions

### 1. Separation of Concerns
- **User Interface**: Focus on template building and code generation
- **Admin Interface**: Focus on content management and configuration
- **Shared Services**: AI generation, database operations, file storage

### 2. Database Design Pattern
```sql
-- Template Management
templates {
  id: uuid
  name: text
  description: text
  category: text
  difficulty: enum
  banner_image_url: text
  preview_images: text[]
  master_code_id: uuid
  wizard_config: jsonb
  created_by: uuid (admin)
  created_at: timestamp
}

-- Code Management
code_snippets {
  id: uuid
  name: text
  description: text
  code: text
  function_type: enum
  tags: text[]
  template_id: uuid (optional)
}

master_code {
  id: uuid
  template_id: uuid
  complete_code: text
  version: integer
  changelog: text
}

-- Image Management
images {
  id: uuid
  filename: text
  storage_path: text
  image_type: enum (banner, thumbnail, branding)
  template_id: uuid (optional)
  uploaded_by: uuid
}
```

### 3. AI Integration Pattern
```typescript
// Multi-provider AI service
interface AIProvider {
  generateCode(prompt: string, context: GenerationContext): Promise<string>
}

// Provider implementations
class OpenAIProvider implements AIProvider
class GeminiProvider implements AIProvider
class ClaudeProvider implements AIProvider
class OpenRouterProvider implements AIProvider

// Usage pattern
const aiService = new AIService()
const result = await aiService.generate({
  provider: 'openai',
  functionType: 'scanner',
  userInput: wizardData,
  template: selectedTemplate
})
```

### 4. File Storage Pattern
```
Supabase Storage Structure:
/templates/
  /{template-id}/
    /banners/
      /main-banner.jpg
    /thumbnails/
      /thumb-1.jpg
      /thumb-2.jpg
    /branding/
      /owner-logo.png
/admin/
  /branding/
    /app-logo.png
    /admin-assets/
```

### 5. Code Generation Pattern
```typescript
// Template-based generation
interface CodeTemplate {
  baseCode: string
  variables: TemplateVariable[]
  snippets: CodeSnippet[]
}

// Generation process
1. Load template configuration
2. Apply user wizard inputs
3. Inject code snippets
4. Generate with AI (if needed)
5. Validate Pine Script syntax
6. Return formatted code
```

## Data Flow

### User Workflow Data Flow
```
1. Template Selection
   Gallery → Template Data → Wizard Configuration

2. Wizard Process
   User Input → Validation → State Update → Preview

3. Code Generation
   Wizard Data → AI Service → Code Generation → Preview Update

4. Final Output
   Generated Code → Formatting → Download/Copy
```

### Admin Workflow Data Flow
```
1. Content Management
   Admin Input → Validation → Database Update → UI Refresh

2. Template Creation
   Template Data → Image Upload → Code Assignment → Save

3. Wizard Configuration
   Step Definition → Validation → Template Update → Preview

4. Code Management
   Snippet Creation → Categorization → Template Assignment → Save
```

## Key Technical Decisions

### 1. Framework Choice
- **Next.js 15**: App router for clean separation of user/admin routes
- **React 18**: Component-based architecture with hooks
- **TypeScript**: Type safety for complex data structures

### 2. Styling Strategy
- **Tailwind CSS**: Utility-first styling
- **Custom CSS**: Holographic/futuristic theme
- **Responsive Design**: Mobile-first approach

### 3. Database Strategy
- **Supabase**: PostgreSQL with real-time capabilities
- **Row Level Security**: Admin vs user data access
- **Storage Integration**: File upload and management

### 4. AI Integration Strategy
- **Multi-provider Support**: Flexibility and redundancy
- **Prompt Engineering**: Specialized prompts per function type
- **Error Handling**: Graceful fallbacks between providers

### 5. Performance Considerations
- **Code Splitting**: Separate bundles for user/admin
- **Lazy Loading**: Components loaded on demand
- **Caching**: Template and code snippet caching
- **Optimistic Updates**: Immediate UI feedback