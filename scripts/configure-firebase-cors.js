#!/usr/bin/env node

/**
 * This script helps configure Firebase Storage CORS settings
 * It provides instructions for both manual and CLI-based configuration
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  underscore: '\x1b[4m',
  blink: '\x1b[5m',
  reverse: '\x1b[7m',
  hidden: '\x1b[8m',
  
  black: '\x1b[30m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
  white: '\x1b[37m',
  
  bgBlack: '\x1b[40m',
  bgRed: '\x1b[41m',
  bgGreen: '\x1b[42m',
  bgYellow: '\x1b[43m',
  bgBlue: '\x1b[44m',
  bgMagenta: '\x1b[45m',
  bgCyan: '\x1b[46m',
  bgWhite: '\x1b[47m'
};

// Check if Firebase CLI is installed
const isFirebaseCliInstalled = () => {
  try {
    execSync('firebase --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
};

// Check if user is logged in to Firebase
const isUserLoggedIn = () => {
  try {
    const output = execSync('firebase projects:list --json').toString();
    return JSON.parse(output).length > 0;
  } catch (error) {
    return false;
  }
};

// Get the current Firebase project
const getCurrentProject = () => {
  try {
    // Read .firebaserc file
    const firebaserc = JSON.parse(fs.readFileSync(path.join(process.cwd(), '.firebaserc'), 'utf8'));
    return firebaserc.projects.default;
  } catch (error) {
    return null;
  }
};

// Main function
const main = async () => {
  console.log(`${colors.bright}${colors.cyan}Firebase Storage CORS Configuration Helper${colors.reset}\n`);
  
  // Check if cors.json exists
  const corsJsonPath = path.join(process.cwd(), 'cors.json');
  if (!fs.existsSync(corsJsonPath)) {
    console.log(`${colors.yellow}cors.json file not found. Creating it...${colors.reset}`);
    
    // Create cors.json file
    const corsJson = [
      {
        "origin": ["https://cometscanners.netlify.app", "http://localhost:3000"],
        "method": ["GET", "POST", "PUT", "DELETE", "HEAD", "OPTIONS"],
        "maxAgeSeconds": 3600,
        "responseHeader": ["Content-Type", "Content-Length", "Content-Encoding", "Content-Disposition"]
      }
    ];
    
    fs.writeFileSync(corsJsonPath, JSON.stringify(corsJson, null, 2));
    console.log(`${colors.green}cors.json file created successfully.${colors.reset}`);
  } else {
    console.log(`${colors.green}cors.json file already exists.${colors.reset}`);
  }
  
  // Check if Firebase CLI is installed
  const firebaseCliInstalled = isFirebaseCliInstalled();
  if (!firebaseCliInstalled) {
    console.log(`\n${colors.yellow}Firebase CLI is not installed. You can install it with:${colors.reset}`);
    console.log(`npm install -g firebase-tools`);
    
    console.log(`\n${colors.bright}${colors.white}Manual Configuration Instructions:${colors.reset}`);
    console.log(`1. Go to the Firebase Console: https://console.firebase.google.com/`);
    console.log(`2. Select your project`);
    console.log(`3. Go to "Storage" in the left sidebar`);
    console.log(`4. Click on the "Rules" tab`);
    console.log(`5. Update your rules to include CORS configuration from the firebase.storage.rules file`);
    
    rl.close();
    return;
  }
  
  console.log(`${colors.green}Firebase CLI is installed.${colors.reset}`);
  
  // Check if user is logged in
  const userLoggedIn = isUserLoggedIn();
  if (!userLoggedIn) {
    console.log(`\n${colors.yellow}You are not logged in to Firebase. Please log in:${colors.reset}`);
    console.log(`firebase login`);
    
    rl.close();
    return;
  }
  
  console.log(`${colors.green}You are logged in to Firebase.${colors.reset}`);
  
  // Get current project
  const currentProject = getCurrentProject();
  if (!currentProject) {
    console.log(`\n${colors.yellow}Could not determine the current Firebase project.${colors.reset}`);
    console.log(`Please set the project manually:`);
    console.log(`firebase use <project-id>`);
    
    rl.close();
    return;
  }
  
  console.log(`${colors.green}Current Firebase project: ${colors.bright}${currentProject}${colors.reset}`);
  
  // Ask if user wants to update CORS configuration
  rl.question(`\n${colors.yellow}Do you want to update the Firebase Storage CORS configuration? (y/n) ${colors.reset}`, (answer) => {
    if (answer.toLowerCase() === 'y') {
      try {
        console.log(`\n${colors.cyan}Updating Firebase Storage CORS configuration...${colors.reset}`);
        execSync('firebase storage:cors update cors.json', { stdio: 'inherit' });
        console.log(`\n${colors.green}Firebase Storage CORS configuration updated successfully.${colors.reset}`);
      } catch (error) {
        console.error(`\n${colors.red}Error updating Firebase Storage CORS configuration:${colors.reset}`, error.message);
        console.log(`\n${colors.yellow}You can try updating it manually:${colors.reset}`);
        console.log(`firebase storage:cors update cors.json`);
      }
    } else {
      console.log(`\n${colors.yellow}CORS configuration update skipped.${colors.reset}`);
    }
    
    rl.close();
  });
};

// Run the main function
main().catch((error) => {
  console.error(`${colors.red}Error:${colors.reset}`, error);
  rl.close();
});
