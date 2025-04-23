import { defineConfig } from 'vite'
import reactPlugin from '@vitejs/plugin-react'
// Note: You'll need to install this plugin with: npm install vite-plugin-imagemin --save-dev
// import imagemin from 'vite-plugin-imagemin'

export default defineConfig({
  // Remove or comment out the base path
  // base: '/comet-scanner-wizard/',
  plugins: [reactPlugin()],
  resolve: {
    alias: [
      { find: 'react', replacement: '/Users/chasecambre/CSTW/comet-scanner-template-wizard/node_modules/react' },
      { find: 'react-dom', replacement: '/Users/chasecambre/CSTW/comet-scanner-template-wizard/node_modules/react-dom' }
    ]
  },
  server: {
    port: 3000,
    open: process.env.NODE_ENV !== 'production' // Only open in development
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020'
    },
    include: ['react', 'react-dom']
  },
  build: {
    target: 'es2020',
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor code into separate chunks
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['framer-motion', '@headlessui/react', '@heroicons/react'],
          'vendor-monaco': ['@monaco-editor/react']
        }
      }
    },
    // Enable source map for debugging in production
    sourcemap: false,
    // Minify the output
    minify: 'esbuild',
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true
    //   }
    // },
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000
  },
  // Add cache headers to assets
  preview: {
    headers: {
      'Cache-Control': 'public, max-age=31536000' // 1 year for static assets
    }
  }
})
