#!/usr/bin/env node

/**
 * Simple Netlify build script that ensures dependencies are installed correctly
 */

import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

/* eslint-env node */
/* eslint-disable no-undef */

// Get the current file path and directory in ES modules
/* eslint-env node */

// Log environment info
console.log('🔍 Environment Information:');
console.log('Node version:', process.version);
console.log('Current directory:', process.cwd());
console.log('Files in current directory:', fs.readdirSync('.').join(', '));

try {
  // Clean install dependencies
  console.log('\n🧹 Cleaning node_modules...');
  if (fs.existsSync('node_modules')) {
    execSync('rm -rf node_modules', { stdio: 'inherit' });
  }

  console.log('\n📦 Installing dependencies...');
  execSync('npm install --no-audit --no-fund', { stdio: 'inherit' });

  // Ensure React and React DOM are installed correctly
  console.log('\n🔄 Ensuring React dependencies are installed correctly...');
  execSync('npm install react@18.3.1 react-dom@18.3.1 @types/react@18.3.20 @types/react-dom@18.3.6 --save', { stdio: 'inherit' });

  // Check if the JSX runtime file exists
  const jsxRuntimePath = path.join(process.cwd(), 'node_modules', 'react', 'jsx-runtime');
  console.log('JSX Runtime path exists:', fs.existsSync(jsxRuntimePath));

  if (!fs.existsSync(jsxRuntimePath)) {
    console.log('JSX Runtime directory not found, checking React installation...');
    const reactPath = path.join(process.cwd(), 'node_modules', 'react');
    console.log('React directory exists:', fs.existsSync(reactPath));
    if (fs.existsSync(reactPath)) {
      console.log('Files in React directory:', fs.readdirSync(reactPath).join(', '));
    }
  }

  // Check if the package.json has type: module
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    console.log('Package.json type:', packageJson.type);
  }

  // Run the build
  console.log('\n🔨 Building the project...');
  execSync('npm run build', { stdio: 'inherit' });

  // Copy necessary files to dist directory
  console.log('\n📋 Copying necessary files to dist directory...');

  // Ensure _redirects file is in the dist directory
  if (fs.existsSync('public/_redirects')) {
    fs.copyFileSync('public/_redirects', 'dist/_redirects');
    console.log('Copied _redirects file to dist directory');
  } else if (fs.existsSync('_redirects')) {
    fs.copyFileSync('_redirects', 'dist/_redirects');
    console.log('Copied _redirects file from root to dist directory');
  } else {
    // Create a default _redirects file
    fs.writeFileSync('dist/_redirects', '/*    /index.html   200');
    console.log('Created default _redirects file in dist directory');
  }

  // Create a _headers file in the dist directory
  const headersContent = `
# Ensure proper MIME types for JavaScript files
/*.js
  Content-Type: application/javascript; charset=utf-8

/assets/js/*.js
  Content-Type: application/javascript; charset=utf-8

# Ensure proper MIME types for CSS files
/*.css
  Content-Type: text/css; charset=utf-8

/assets/*.css
  Content-Type: text/css; charset=utf-8
`;
  fs.writeFileSync('dist/_headers', headersContent);
  console.log('Created _headers file in dist directory');

  console.log('\n✅ Build completed successfully!');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
