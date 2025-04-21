/**
 * Script to simulate Netlify build process locally with trace warnings
 * 
 * This script runs the same commands that Netlify would run during deployment,
 * but with the --trace-warnings flag to show detailed stack traces for any warnings.
 */

import { execSync } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';

console.log('🚀 Simulating Netlify build with trace warnings...');

try {
  // Log Node.js and npm versions
  console.log('Node version:', process.version);
  console.log('NPM version:', execSync('npm --version').toString().trim());
  
  // Create dist directory if it doesn't exist
  const distDir = join(process.cwd(), 'dist');
  if (!existsSync(distDir)) {
    console.log('\n📁 Creating dist directory...');
    mkdirSync(distDir, { recursive: true });
  }
  
  // Install dependencies with trace warnings
  console.log('\n📦 Installing dependencies with trace warnings...');
  execSync('node --trace-warnings $(which npm) install', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  // Build the application with trace warnings
  console.log('\n🔨 Building application with trace warnings...');
  execSync('node --trace-warnings $(which npm) run build', { 
    stdio: 'inherit',
    env: { ...process.env, NODE_ENV: 'production' }
  });
  
  // Verify the build
  console.log('\n🔍 Verifying build...');
  execSync('ls -la dist', { stdio: 'inherit' });
  
  console.log('\n✅ Build completed successfully!');
  console.log('\nAny warnings during the build process will have been displayed with full stack traces.');
  console.log('Review the output above to identify and fix any issues.');
  
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
