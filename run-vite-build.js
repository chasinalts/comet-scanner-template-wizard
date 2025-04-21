/**
 * Simple script to run Vite build directly
 */

import { execSync } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

console.log('🚀 Starting Vite build...');
console.log('Current directory:', process.cwd());

try {
  // Log Node.js and npm versions
  console.log('Node version:', process.version);
  console.log('NPM version:', execSync('npm --version').toString().trim());

  // Check if node_modules exists
  const nodeModulesPath = join(process.cwd(), 'node_modules');
  console.log('Checking if node_modules exists:', existsSync(nodeModulesPath));

  // Check if vite executable exists
  const vitePath = join(process.cwd(), 'node_modules', '.bin', 'vite');
  console.log('Checking if vite executable exists:', existsSync(vitePath));

  // Install Vite if needed
  if (!existsSync(vitePath)) {
    console.log('\n💶 Installing Vite...');
    execSync('npm install vite@latest @vitejs/plugin-react@latest', { stdio: 'inherit' });
  }

  // Run Vite directly
  console.log('\n🔨 Running Vite build...');
  if (existsSync(vitePath)) {
    console.log('Using local Vite executable:', vitePath);
    execSync(`${vitePath} build`, { stdio: 'inherit' });
  } else {
    console.log('Using npx to run Vite');
    execSync('npx vite build', { stdio: 'inherit' });
  }

  console.log('\n✅ Build completed successfully!');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
