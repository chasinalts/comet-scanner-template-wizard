const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
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
    tsconfigPath: "./tsconfig.json"
  },
  experimental: {
    typedRoutes: true,
    optimizePackageImports: ["@supabase/supabase-js", "@anthropic-ai/sdk", "@google/generative-ai"],
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js"
        }
      }
    }
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