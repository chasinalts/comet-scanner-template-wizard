// Global type declarations for the COMET Scanner Template Wizard

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_SUPABASE_URL: string;
      NEXT_PUBLIC_SUPABASE_ANON_KEY: string;
      SUPABASE_SERVICE_ROLE_KEY?: string;
      OPENAI_API_KEY?: string;
      CLAUDE_API_KEY?: string;
      GEMINI_API_KEY?: string;
      OPENROUTER_API_KEY?: string;
      NEXT_PUBLIC_SITE_URL?: string;
      NODE_ENV: "development" | "production" | "test";
    }
  }

  interface Window {
    gtag?: (...args: any[]) => void;
  }

  // Extend JSX namespace for custom attributes
  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }
  }
}

// Module declarations for assets
declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "*.jpg" {
  const content: string;
  export default content;
}

declare module "*.jpeg" {
  const content: string;
  export default content;
}

declare module "*.gif" {
  const content: string;
  export default content;
}

declare module "*.webp" {
  const content: string;
  export default content;
}

declare module "*.ico" {
  const content: string;
  export default content;
}

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.scss" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.sass" {
  const content: Record<string, string>;
  export default content;
}

export {};
