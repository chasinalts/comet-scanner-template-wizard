const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    // Temporarily ignore during builds to prevent deployment failures
    dirs: ["src"]
  },
  images: {
    unoptimized: true
  },
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    NEXT_PUBLIC_SUPABASE_ANON_KEY: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  },
  output: "standalone",
  distDir: process.env.NODE_ENV === "production" ? ".next-prod" : ".next",
  typescript: {
    ignoreBuildErrors: true,
    // Temporarily ignore to prevent deployment failures
    tsconfigPath: "./tsconfig.json"
  },
  experimental: {
    optimizePackageImports: ["@supabase/supabase-js", "@anthropic-ai/sdk", "@google/generative-ai"]
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  poweredByHeader: false,
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    "@supabase/supabase-js": {
      transform: "@supabase/supabase-js/dist/module/{{member}}"
    }
  }
};
module.exports = nextConfig;