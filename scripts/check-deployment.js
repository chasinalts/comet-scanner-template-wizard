#!/usr/bin/env node

/**
 * Script to check the deployment status of the application
 * 
 * This script checks if the application is properly configured for deployment
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { execSync } from 'child_process';

// Load environment variables
dotenv.config();

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// ANSI color codes for output
const colors = {
  reset: '\x1b[0m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m'
};

// Check if a file exists
const fileExists = (filePath) => {
  return fs.existsSync(filePath);
};

// Check if a directory exists
const dirExists = (dirPath) => {
  return fs.existsSync(dirPath) && fs.statSync(dirPath).isDirectory();
};

// Check if a package is installed
const packageInstalled = (packageName) => {
  try {
    const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
    return (
      (packageJson.dependencies && packageJson.dependencies[packageName]) ||
      (packageJson.devDependencies && packageJson.devDependencies[packageName])
    );
  } catch (error) {
    return false;
  }
};

// Check if a script exists in package.json
const scriptExists = (scriptName) => {
  try {
    const packageJson = JSON.parse(fs.readFileSync(path.join(rootDir, 'package.json'), 'utf8'));
    return packageJson.scripts && packageJson.scripts[scriptName];
  } catch (error) {
    return false;
  }
};

// Check if Netlify CLI is installed
const netlifyCliInstalled = () => {
  try {
    execSync('netlify --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
};

// Check if user is logged in to Netlify
const netlifyLoggedIn = () => {
  try {
    const statusOutput = execSync('netlify status', { encoding: 'utf8' });
    return statusOutput.includes('Logged in');
  } catch (error) {
    return false;
  }
};

// Check if site is linked to Netlify
const netlifyLinked = () => {
  try {
    const statusOutput = execSync('netlify status', { encoding: 'utf8' });
    return statusOutput.includes('Site ID:');
  } catch (error) {
    return false;
  }
};

// Check if environment variables are set
const envVarsSet = () => {
  const requiredVars = [
    'VITE_APPWRITE_ENDPOINT',
    'VITE_APPWRITE_PROJECT_ID',
    'VITE_APPWRITE_DATABASE_ID'
  ];
  
  const missingVars = requiredVars.filter(varName => !process.env[varName]);
  
  return {
    allSet: missingVars.length === 0,
    missingVars
  };
};

// Main function to check deployment status
async function checkDeployment() {
  console.log(`${colors.cyan}🔍 Checking deployment status${colors.reset}`);
  console.log('===============================');
  
  // Check Node.js version
  const nodeVersion = process.version;
  const nodeVersionMajor = parseInt(nodeVersion.slice(1).split('.')[0], 10);
  console.log(`${colors.blue}Node.js version:${colors.reset} ${nodeVersion} ${nodeVersionMajor >= 18 && nodeVersionMajor < 19 ? `${colors.green}✓${colors.reset}` : `${colors.red}✗ (should be v18.x)${colors.reset}`}`);
  
  // Check required files
  console.log(`\n${colors.blue}Required files:${colors.reset}`);
  const requiredFiles = [
    { name: 'netlify.toml', path: path.join(rootDir, 'netlify.toml') },
    { name: 'netlify-build.js', path: path.join(rootDir, 'netlify-build.js') },
    { name: 'netlify-node-version.js', path: path.join(rootDir, 'netlify-node-version.js') },
    { name: '.env', path: path.join(rootDir, '.env') }
  ];
  
  requiredFiles.forEach(file => {
    const exists = fileExists(file.path);
    console.log(`- ${file.name}: ${exists ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`}`);
  });
  
  // Check required directories
  console.log(`\n${colors.blue}Required directories:${colors.reset}`);
  const requiredDirs = [
    { name: 'src', path: path.join(rootDir, 'src') },
    { name: 'public', path: path.join(rootDir, 'public') },
    { name: 'scripts', path: path.join(rootDir, 'scripts') }
  ];
  
  requiredDirs.forEach(dir => {
    const exists = dirExists(dir.path);
    console.log(`- ${dir.name}: ${exists ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`}`);
  });
  
  // Check required packages
  console.log(`\n${colors.blue}Required packages:${colors.reset}`);
  const requiredPackages = [
    'appwrite',
    'vite',
    'react',
    'react-dom'
  ];
  
  requiredPackages.forEach(pkg => {
    const installed = packageInstalled(pkg);
    console.log(`- ${pkg}: ${installed ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`}`);
  });
  
  // Check required scripts
  console.log(`\n${colors.blue}Required scripts:${colors.reset}`);
  const requiredScripts = [
    'build',
    'netlify:clean-build',
    'netlify:setup-env',
    'netlify:deploy'
  ];
  
  requiredScripts.forEach(script => {
    const exists = scriptExists(script);
    console.log(`- ${script}: ${exists ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`}`);
  });
  
  // Check Netlify CLI
  console.log(`\n${colors.blue}Netlify CLI:${colors.reset}`);
  const cliInstalled = netlifyCliInstalled();
  console.log(`- Installed: ${cliInstalled ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`}`);
  
  if (cliInstalled) {
    const loggedIn = netlifyLoggedIn();
    console.log(`- Logged in: ${loggedIn ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`}`);
    
    const linked = netlifyLinked();
    console.log(`- Site linked: ${linked ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`}`);
  }
  
  // Check environment variables
  console.log(`\n${colors.blue}Environment variables:${colors.reset}`);
  const { allSet, missingVars } = envVarsSet();
  console.log(`- All required variables set: ${allSet ? `${colors.green}✓${colors.reset}` : `${colors.red}✗${colors.reset}`}`);
  
  if (!allSet) {
    console.log(`  Missing variables: ${colors.yellow}${missingVars.join(', ')}${colors.reset}`);
  }
  
  // Summary
  console.log('\n===============================');
  if (
    nodeVersionMajor >= 18 && nodeVersionMajor < 19 &&
    requiredFiles.every(file => fileExists(file.path)) &&
    requiredDirs.every(dir => dirExists(dir.path)) &&
    requiredPackages.every(pkg => packageInstalled(pkg)) &&
    requiredScripts.every(script => scriptExists(script)) &&
    cliInstalled &&
    allSet
  ) {
    console.log(`${colors.green}✅ Your application is ready for deployment!${colors.reset}`);
    console.log(`\nTo deploy to Netlify, run: ${colors.cyan}npm run netlify:deploy${colors.reset}`);
  } else {
    console.log(`${colors.red}❌ Your application is not ready for deployment.${colors.reset}`);
    console.log(`\nPlease fix the issues above and run this script again.`);
    
    if (!cliInstalled) {
      console.log(`\nTo install Netlify CLI, run: ${colors.cyan}npm install -g netlify-cli${colors.reset}`);
    }
    
    if (!allSet) {
      console.log(`\nTo set up environment variables, run: ${colors.cyan}npm run netlify:setup-env${colors.reset}`);
    }
  }
}

// Run the check function
checkDeployment().catch(error => {
  console.error(`${colors.red}Error checking deployment status:${colors.reset}`, error);
  process.exit(1);
});
