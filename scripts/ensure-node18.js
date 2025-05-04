#!/usr/bin/env node

/**
 * Script to ensure Node.js v18 is used
 * 
 * This script:
 * 1. Checks the current Node.js version
 * 2. If not v18, attempts to switch to v18 using nvm
 * 3. Provides instructions if nvm is not available
 */
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Execute a command and return its output
const execCommand = (command, silent = false) => {
  try {
    return execSync(command, { 
      encoding: 'utf8',
      stdio: silent ? 'pipe' : 'inherit'
    });
  } catch (error) {
    if (!silent) {
      console.error(`Error executing command: ${command}`);
      console.error(error.message);
    }
    return null;
  }
};

// Check if nvm is available
const checkNvm = () => {
  try {
    // Check if .nvm directory exists
    const homeDir = process.env.HOME || process.env.USERPROFILE;
    const nvmDir = path.join(homeDir, '.nvm');
    
    if (fs.existsSync(nvmDir)) {
      return true;
    }
    
    // Try to execute nvm command
    const result = execCommand('command -v nvm', true);
    return result !== null && result.trim() !== '';
  } catch (error) {
    return false;
  }
};

// Get current Node.js version
const getCurrentNodeVersion = () => {
  return process.version;
};

// Check if current version is v18
const isNodeV18 = (version) => {
  return version.startsWith('v18.');
};

// Switch to Node.js v18 using nvm
const switchToNodeV18 = () => {
  try {
    // Source nvm script
    const homeDir = process.env.HOME || process.env.USERPROFILE;
    const nvmScript = path.join(homeDir, '.nvm', 'nvm.sh');
    
    // List available v18 versions
    const listCommand = `source "${nvmScript}" && nvm ls | grep "v18"`;
    const versions = execCommand(listCommand, true);
    
    if (!versions || versions.trim() === '') {
      console.log('No Node.js v18 versions found. Installing Node.js v18.20.8...');
      execCommand(`source "${nvmScript}" && nvm install 18.20.8`);
    }
    
    // Use the latest v18 version
    const useCommand = `source "${nvmScript}" && nvm use 18`;
    execCommand(useCommand);
    
    // Verify the switch
    const newVersion = execCommand('node -v', true);
    
    if (isNodeV18(newVersion)) {
      console.log(`Successfully switched to Node.js ${newVersion.trim()}`);
      return true;
    } else {
      console.log(`Failed to switch to Node.js v18. Current version: ${newVersion.trim()}`);
      return false;
    }
  } catch (error) {
    console.error('Error switching to Node.js v18:', error);
    return false;
  }
};

// Main function
const ensureNodeV18 = () => {
  console.log('🔍 Checking Node.js version');
  console.log('------------------------');
  
  const currentVersion = getCurrentNodeVersion();
  console.log(`Current Node.js version: ${currentVersion}`);
  
  if (isNodeV18(currentVersion)) {
    console.log('✅ Using Node.js v18 as required');
    return true;
  }
  
  console.log('⚠️ This app requires Node.js v18');
  
  // Check if nvm is available
  const nvmAvailable = checkNvm();
  
  if (nvmAvailable) {
    console.log('Found nvm. Attempting to switch to Node.js v18...');
    return switchToNodeV18();
  } else {
    console.log('\n❌ nvm not found. Please install Node.js v18 manually:');
    console.log('1. Install nvm: https://github.com/nvm-sh/nvm#installing-and-updating');
    console.log('2. Install Node.js v18: nvm install 18');
    console.log('3. Use Node.js v18: nvm use 18');
    return false;
  }
};

// Run the function
const success = ensureNodeV18();

// Exit with appropriate code
process.exit(success ? 0 : 1);
