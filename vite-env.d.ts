/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // Add all custom env variables here for type safety
  // readonly VITE_SUPABASE_URL: string;
  // readonly VITE_SUPABASE_ANON_KEY: string;
  // ...etc
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
