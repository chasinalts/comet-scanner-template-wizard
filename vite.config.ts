/* eslint-env node */
/* eslint-disable no-undef */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    port: 3000,
    open: process.env.NODE_ENV !== 'production'
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2022'
    },
    include: ['react', 'react-dom']
  },
  build: {
    target: 'es2022',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['framer-motion', '@headlessui/react', '@heroicons/react'],
        }
      }
    }
  },
  preview: {
    port: 5000,
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
})
