/* eslint-env node */
/* eslint-disable no-undef */
/**
 * Simple script to run the development server
 */

import { execSync } from 'child_process';

console.log('🚀 Starting development server...');

try {
  // Log Node.js and npm versions
  console.log('Node version:', process.version);
  console.log('NPM version:', execSync('npm --version').toString().trim());
  
  // Install dependencies
  console.log('\n📦 Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Run the development server
  console.log('\n🔨 Starting development server...');
  execSync('npx vite', { stdio: 'inherit' });
  
} catch (error) {
  console.error('\n❌ Failed to start development server:', error.message);
  process.exit(1);
}
