/**
 * Script to install and run Vite
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = process.cwd();

console.log('🚀 Starting Vite setup...');
console.log('Current directory:', __dirname);

try {
  // Log Node.js and npm versions
  console.log('Node version:', process.version);
  console.log('NPM version:', execSync('npm --version').toString().trim());
  
  // Check if node_modules exists
  const nodeModulesPath = join(__dirname, 'node_modules');
  console.log('Checking if node_modules exists:', existsSync(nodeModulesPath));
  
  // Check if vite executable exists
  const vitePath = join(__dirname, 'node_modules', '.bin', 'vite');
  console.log('Checking if vite executable exists:', existsSync(vitePath));
  
  // Install dependencies if node_modules doesn't exist
  if (!existsSync(nodeModulesPath)) {
    console.log('\n📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
  }
  
  // Run Vite
  console.log('\n🔨 Starting Vite development server...');
  if (existsSync(vitePath)) {
    console.log('Using local Vite executable:', vitePath);
    execSync(vitePath, { stdio: 'inherit' });
  } else {
    console.log('Using npx to run Vite');
    execSync('npx vite', { stdio: 'inherit' });
  }
  
} catch (error) {
  console.error('\n❌ Failed to start Vite:', error.message);
  process.exit(1);
}
