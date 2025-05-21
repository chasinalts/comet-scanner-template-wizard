/* eslint-env node */
/* eslint-disable no-undef */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      // Polyfill Node.js built-ins
      process: 'process/browser',
      buffer: 'buffer',
      util: 'util',
    },
  },
  define: {
    // Provide process.env for packages that expect it
    'process.env': {
      ...process.env,
      // Add fallback values for critical environment variables
      VITE_AUTH0_DOMAIN: process.env.VITE_AUTH0_DOMAIN || '',
      VITE_AUTH0_CLIENT_ID: process.env.VITE_AUTH0_CLIENT_ID || '',
      VITE_AUTH0_AUDIENCE: process.env.VITE_AUTH0_AUDIENCE || '',
      VITE_TURSO_DATABASE_URL:
        process.env.VITE_TURSO_DATABASE_URL || process.env.TURSO_DATABASE_URL || '',
      VITE_TURSO_AUTH_TOKEN:
        process.env.VITE_TURSO_AUTH_TOKEN || process.env.TURSO_AUTH_TOKEN || '',
    },
    global: 'globalThis',
  },
  server: {
    port: 3000,
    open: process.env.NODE_ENV !== 'production',
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
      define: {
        global: 'globalThis',
      },
    },
    include: [
      'react',
      'react-dom',
      'buffer',
      'process/browser',
      '@auth0/auth0-react',
      '@libsql/client',
      'uuid',
    ],
  },
  build: {
    target: 'es2020',
    outDir: 'dist',
    assetsDir: 'assets',
    // Enable source maps in development, disable in production
    sourcemap: process.env.NODE_ENV !== 'production',
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    commonjsOptions: {
      transformMixedEsModules: true,
      esmExternals: true,
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['framer-motion', '@headlessui/react', '@heroicons/react'],
          'vendor-auth': ['@auth0/auth0-react'],
          'vendor-db': ['@libsql/client'],
          'vendor-utils': ['uuid', 'buffer', 'process', 'util'],
        },
      },
      // These packages are only used in Netlify Functions, not in the browser
      external: [
        // Node.js built-ins that might be imported by server-side code
        'fs',
        'path',
        'crypto',
        'url',
        'stream',
        'zlib',
        'http',
        'https',
        'net',
        'tls',
        'os',
        'child_process',
        // Netlify packages that should only be used in Netlify Functions
        '@netlify/blobs',
      ],
      // Handle warnings
      onwarn(warning, warn) {
        warn(warning);
      },
    },
  },
  preview: {
    port: 5000,
    headers: {
      'Cache-Control': 'public, max-age=31536000',
    },
  },
});
