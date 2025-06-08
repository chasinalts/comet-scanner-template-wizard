# Complete File Tree - COMET Scanner Template Wizard

## Project Structure

```
/Users/chasecambre/comet-scanner-template-wizard/
├── .gitignore
├── .nvmrc
├── .trae/
│   └── rules/
│       └── project_rules.md
├── README.md
├── app/
├── clear-chrome-cache.sh
├── client_docs/
│   ├── activeContext.md
│   ├── currentTasks.md
│   ├── productContext.md
│   ├── systemPatterns.md
│   └── fileTreeContext.md (this file)
├── eslint.config.mjs
├── netlify.toml
├── next.config.js
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── images/
│   │   └── bg.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── ai/
│   │   │       └── generate/
│   │   │           └── route.ts
│   │   ├── example/
│   │   │   └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── AIProviderSelector.tsx
│   │   ├── AdminDashboard.tsx
│   │   ├── CacheClearButton.tsx
│   │   ├── ImportExportPanel.tsx
│   │   ├── InvisibleAdminButton.tsx
│   │   ├── LiveCodePreview.tsx
│   │   ├── LivePreviewPanel.tsx
│   │   ├── TemplateGallery.tsx
│   │   ├── TemplateWizard.tsx
│   │   ├── admin/
│   │   │   ├── AdminDashboard.tsx
│   │   │   ├── AuthManager.tsx
│   │   │   ├── CodeSnippetManager.tsx
│   │   │   ├── SectionManager.tsx
│   │   │   └── TemplateManager.tsx
│   │   ├── shared/
│   │   │   └── AIProviderSelector.tsx
│   │   └── user/
│   │       ├── LiveCodePreview.tsx
│   │       ├── TemplateGallery.tsx
│   │       └── TemplateWizard.tsx
│   ├── hooks/
│   │   └── useAI.ts
│   ├── lib/
│   │   ├── aiService.ts
│   │   └── supabaseClient.ts
│   ├── styles/
│   │   └── holographic.css
│   ├── types/
│   │   └── supabaseDb.ts
│   └── utils/
│       └── supabase/
│           ├── client.ts
│           └── server.ts
├── supabase/
│   ├── .gitignore
│   └── config.toml
├── tailwind.config.ts
└── tsconfig.json
```

## File Count Summary

### Configuration Files (9)
- .gitignore
- .nvmrc
- eslint.config.mjs
- netlify.toml
- next.config.js
- package-lock.json
- package.json
- postcss.config.mjs
- tailwind.config.ts
- tsconfig.json

### Documentation Files (5)
- README.md
- client_docs/activeContext.md
- client_docs/currentTasks.md
- client_docs/productContext.md
- client_docs/systemPatterns.md
- client_docs/fileTreeContext.md

### Source Code Files (26)

#### App Pages (4)
- src/app/page.tsx (main landing page)
- src/app/layout.tsx (root layout)
- src/app/admin/page.tsx (admin dashboard)
- src/app/example/page.tsx (example page)

#### API Routes (1)
- src/app/api/ai/generate/route.ts (AI generation endpoint)

#### Components (15)
- src/components/AIProviderSelector.tsx
- src/components/AdminDashboard.tsx
- src/components/CacheClearButton.tsx
- src/components/ImportExportPanel.tsx
- src/components/InvisibleAdminButton.tsx
- src/components/LiveCodePreview.tsx
- src/components/LivePreviewPanel.tsx
- src/components/TemplateGallery.tsx
- src/components/TemplateWizard.tsx
- src/components/admin/AdminDashboard.tsx
- src/components/admin/AuthManager.tsx
- src/components/admin/CodeSnippetManager.tsx
- src/components/admin/SectionManager.tsx
- src/components/admin/TemplateManager.tsx
- src/components/shared/AIProviderSelector.tsx
- src/components/user/LiveCodePreview.tsx
- src/components/user/TemplateGallery.tsx
- src/components/user/TemplateWizard.tsx

#### Hooks (1)
- src/hooks/useAI.ts

#### Libraries (2)
- src/lib/aiService.ts
- src/lib/supabaseClient.ts

#### Types (1)
- src/types/supabaseDb.ts

#### Utils (2)
- src/utils/supabase/client.ts
- src/utils/supabase/server.ts

### Static Assets (6)
- public/file.svg
- public/globe.svg
- public/images/bg.svg
- public/next.svg
- public/vercel.svg
- public/window.svg

### Styles (2)
- src/app/globals.css
- src/styles/holographic.css

### Other Files (4)
- src/app/favicon.ico
- .trae/rules/project_rules.md
- clear-chrome-cache.sh
- supabase/.gitignore
- supabase/config.toml
- app/ (empty directory)

## Total Files: 53

## Key Observations

1. **Duplicate Components**: There are duplicate component files in different directories (main components/ vs admin/, shared/, user/ subdirectories)

2. **Next.js App Router Structure**: Uses the new App Router with src/app/ directory

3. **Supabase Integration**: Has dedicated Supabase configuration and utility files

4. **AI Integration**: Dedicated AI service files and API routes

5. **Component Organization**: Components are organized by user type (admin, user, shared)

6. **Documentation**: Well-documented with client_docs/ directory containing context files

7. **Development Tools**: Includes ESLint, Tailwind CSS, PostCSS configurations

8. **Deployment Ready**: Has Netlify configuration for deployment

Generated on: $(date)