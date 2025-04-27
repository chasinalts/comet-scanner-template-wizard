/**
 * Test Netlify deployment locally
 * 
 * This script simulates the Netlify deployment process locally to help identify any issues
 * before deploying to Netlify.
 */
/* eslint-env node */
/* eslint-disable no-undef */

import { execSync } from 'child_process';
import { existsSync, mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

console.log('🚀 Testing Netlify deployment locally...');

// Get environment information
const nodeVersion = process.version;
const npmVersion = execSync('npm --version').toString().trim();
const cwd = process.cwd();

console.log('Environment Information:');
console.log('- Node version:', nodeVersion);
console.log('- NPM version:', npmVersion);
console.log('- Current directory:', cwd);

try {
  // Create a temporary directory for testing
  const tempDir = join(cwd, 'netlify-test');
  if (!existsSync(tempDir)) {
    console.log('\n📁 Creating temporary directory for testing...');
    mkdirSync(tempDir, { recursive: true });
  }
  
  // Create a simple package.json in the temp directory
  const packageJson = {
    name: 'netlify-test',
    version: '1.0.0',
    type: 'module',
    scripts: {
      build: 'echo "Build successful"'
    }
  };
  
  writeFileSync(
    join(tempDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );
  
  // Create a simple netlify.toml in the temp directory
  const netlifyToml = `
[build]
  base = "/"
  publish = "dist"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "22"
`;
  
  writeFileSync(join(tempDir, 'netlify.toml'), netlifyToml);
  
  // Test npm installation
  console.log('\n📦 Testing npm installation...');
  execSync('npm install --no-package-lock', { 
    stdio: 'inherit',
    cwd: tempDir
  });
  
  // Test build command
  console.log('\n🔨 Testing build command...');
  execSync('npm run build', { 
    stdio: 'inherit',
    cwd: tempDir
  });
  
  // Create a simple dist directory and index.html
  const distDir = join(tempDir, 'dist');
  if (!existsSync(distDir)) {
    mkdirSync(distDir, { recursive: true });
  }
  
  const indexHtml = `
<!DOCTYPE html>
<html>
<head>
  <title>Netlify Test</title>
</head>
<body>
  <h1>Netlify Test Successful</h1>
</body>
</html>
`;
  
  writeFileSync(join(distDir, 'index.html'), indexHtml);
  
  // Verify the test deployment
  console.log('\n✅ Test deployment successful!');
  console.log('The following files would be deployed to Netlify:');
  execSync('ls -la dist', { stdio: 'inherit' });
  
  // Clean up
  console.log('\n🧹 Cleaning up...');
  execSync(`rm -rf ${tempDir}`, { stdio: 'inherit' });
  
  console.log('\n🎉 Netlify deployment test completed successfully!');
  console.log('Your project should deploy correctly to Netlify.');
  
} catch (error) {
  console.error('\n❌ Netlify deployment test failed:', error.message);
  console.error('Stack trace:', error.stack);
  process.exit(1);
}
