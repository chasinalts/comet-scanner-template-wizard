#!/usr/bin/env node

/**
 * Simple Netlify build script that ensures dependencies are installed correctly
 */

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

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
  
  // Run the build
  console.log('\n🔨 Building the project...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('\n✅ Build completed successfully!');
} catch (error) {
  console.error('\n❌ Build failed:', error.message);
  process.exit(1);
}
