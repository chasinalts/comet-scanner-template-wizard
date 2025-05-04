#!/usr/bin/env node

/**
 * Script to get Supabase credentials using the Supabase CLI
 *
 * This script:
 * 1. Checks if Supabase CLI is installed locally
 * 2. Helps user log in to Supabase if needed
 * 3. Lists available projects
 * 4. Gets credentials for the selected project
 * 5. Updates the .env file with the credentials
 *
 * Note: This script uses the locally installed Supabase CLI
 * and requires Node.js v18 for compatibility.
 */
import { execSync } from 'child_process';
import readline from 'readline';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config();

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt function
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

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

// Check if Supabase CLI is installed locally
const checkSupabaseCLI = () => {
  try {
    // Check if supabase is in node_modules
    const nodeModulesPath = path.join(process.cwd(), 'node_modules', '.bin', 'supabase');
    if (fs.existsSync(nodeModulesPath)) {
      return true;
    }

    // Try running npx supabase
    const version = execCommand('npx supabase --version', true);
    return version !== null;
  } catch (error) {
    return false;
  }
};

// Install Supabase CLI locally
const installSupabaseCLI = async () => {
  console.log('Installing Supabase CLI locally...');

  try {
    // Install as a dev dependency
    execCommand('npm install --save-dev supabase', false);
    return true;
  } catch (error) {
    console.error('Error installing Supabase CLI with npm.');

    // Try with yarn
    try {
      execCommand('yarn --version', true);
      execCommand('yarn add --dev supabase', false);
      return true;
    } catch (yarnError) {
      console.error('Error installing Supabase CLI with yarn.');

      console.log('\nPlease install Supabase CLI manually:');
      console.log('npm install --save-dev supabase');
      console.log('or');
      console.log('yarn add --dev supabase');

      return false;
    }
  }
};

// Get the npx supabase command
const getSupabaseCommand = () => {
  // Check if supabase is in node_modules
  const nodeModulesPath = path.join(process.cwd(), 'node_modules', '.bin', 'supabase');
  if (fs.existsSync(nodeModulesPath)) {
    return nodeModulesPath;
  }

  // Otherwise use npx
  return 'npx supabase';
};

// Check if user is logged in to Supabase
const checkSupabaseLogin = () => {
  try {
    const supabaseCmd = getSupabaseCommand();
    const result = execCommand(`${supabaseCmd} projects list`, true);
    return result !== null && !result.includes('not logged in');
  } catch (error) {
    return false;
  }
};

// Login to Supabase
const loginToSupabase = async () => {
  console.log('\nYou need to log in to Supabase CLI.');
  console.log('A browser window will open for you to log in.');

  const proceed = await prompt('Continue? (y/n): ');

  if (proceed.toLowerCase() !== 'y') {
    return false;
  }

  try {
    const supabaseCmd = getSupabaseCommand();
    execCommand(`${supabaseCmd} login`);
    return checkSupabaseLogin();
  } catch (error) {
    console.error('Error logging in to Supabase CLI.');
    return false;
  }
};

// List Supabase projects
const listSupabaseProjects = () => {
  try {
    const supabaseCmd = getSupabaseCommand();
    const result = execCommand(`${supabaseCmd} projects list`, true);

    if (!result) {
      return [];
    }

    // Parse the output to get project information
    const lines = result.split('\n').filter(line => line.trim() !== '');

    // Skip the header line
    const projectLines = lines.slice(1);

    return projectLines.map(line => {
      const parts = line.split('|').map(part => part.trim());

      if (parts.length >= 3) {
        return {
          ref: parts[0],
          name: parts[1],
          organization: parts[2]
        };
      }

      return null;
    }).filter(project => project !== null);
  } catch (error) {
    console.error('Error listing Supabase projects.');
    return [];
  }
};

// Get project credentials
const getProjectCredentials = (projectRef) => {
  try {
    const supabaseCmd = getSupabaseCommand();

    // Get project settings
    const settings = execCommand(`${supabaseCmd} secrets list --project-ref ${projectRef}`, true);

    if (!settings) {
      return null;
    }

    // Parse the output to get credentials
    const lines = settings.split('\n').filter(line => line.trim() !== '');

    // Extract credentials
    const credentials = {
      url: '',
      anonKey: '',
      serviceRoleKey: ''
    };

    lines.forEach(line => {
      if (line.includes('ANON_KEY')) {
        credentials.anonKey = line.split('=')[1].trim();
      } else if (line.includes('SERVICE_ROLE_KEY')) {
        credentials.serviceRoleKey = line.split('=')[1].trim();
      } else if (line.includes('API_URL')) {
        credentials.url = line.split('=')[1].trim();
      }
    });

    // If we couldn't get the URL from secrets, try to get it from project info
    if (!credentials.url) {
      const projectInfo = execCommand(`${supabaseCmd} projects show --project-ref ${projectRef}`, true);

      if (projectInfo) {
        const lines = projectInfo.split('\n').filter(line => line.trim() !== '');

        lines.forEach(line => {
          if (line.includes('API URL')) {
            credentials.url = line.split(':')[1].trim();
          }
        });
      }
    }

    return credentials;
  } catch (error) {
    console.error('Error getting project credentials.');
    return null;
  }
};

// Update .env file with Supabase credentials
const updateEnvFile = (credentials) => {
  try {
    const envPath = path.join(process.cwd(), '.env');
    let envContent = '';

    try {
      envContent = fs.readFileSync(envPath, 'utf8');
    } catch (error) {
      console.log('No .env file found, creating one...');
      envContent = '';
    }

    // Update or add Supabase credentials
    if (envContent.includes('VITE_SUPABASE_URL=')) {
      envContent = envContent.replace(/VITE_SUPABASE_URL=.*/g, `VITE_SUPABASE_URL=${credentials.url}`);
    } else {
      envContent += `\n# Supabase Configuration\nVITE_SUPABASE_URL=${credentials.url}\n`;
    }

    if (envContent.includes('VITE_SUPABASE_ANON_KEY=')) {
      envContent = envContent.replace(/VITE_SUPABASE_ANON_KEY=.*/g, `VITE_SUPABASE_ANON_KEY=${credentials.anonKey}`);
    } else {
      envContent += `VITE_SUPABASE_ANON_KEY=${credentials.anonKey}\n`;
    }

    if (envContent.includes('SUPABASE_SERVICE_ROLE_KEY=')) {
      envContent = envContent.replace(/SUPABASE_SERVICE_ROLE_KEY=.*/g, `SUPABASE_SERVICE_ROLE_KEY=${credentials.serviceRoleKey}`);
    } else {
      envContent += `SUPABASE_SERVICE_ROLE_KEY=${credentials.serviceRoleKey}\n`;
    }

    // Write updated content to .env file
    fs.writeFileSync(envPath, envContent);

    console.log('\n✅ .env file updated with Supabase credentials');
    return true;
  } catch (error) {
    console.error('Error updating .env file:', error);
    return false;
  }
};

// Main function to get Supabase credentials
async function getSupabaseCredentials() {
  try {
    console.log('🔑 Getting Supabase Credentials');
    console.log('-----------------------------');

    // Step 1: Check if Supabase CLI is installed
    let cliInstalled = checkSupabaseCLI();

    if (!cliInstalled) {
      console.log('Supabase CLI is not installed.');

      const installCLI = await prompt('Do you want to install Supabase CLI now? (y/n): ');

      if (installCLI.toLowerCase() === 'y') {
        cliInstalled = await installSupabaseCLI();
      }

      if (!cliInstalled) {
        console.log('Cannot proceed without Supabase CLI.');
        rl.close();
        return;
      }
    }

    console.log('✅ Supabase CLI is installed');

    // Step 2: Check if user is logged in
    let loggedIn = checkSupabaseLogin();

    if (!loggedIn) {
      loggedIn = await loginToSupabase();

      if (!loggedIn) {
        console.log('Cannot proceed without logging in to Supabase.');
        rl.close();
        return;
      }
    }

    console.log('✅ Logged in to Supabase');

    // Step 3: List projects
    const projects = listSupabaseProjects();

    if (projects.length === 0) {
      console.log('No Supabase projects found.');
      console.log('Please create a project in the Supabase dashboard first.');
      rl.close();
      return;
    }

    console.log('\nAvailable Supabase projects:');

    projects.forEach((project, index) => {
      console.log(`${index + 1}. ${project.name} (${project.ref}) - ${project.organization}`);
    });

    // Step 4: Select a project
    const projectIndex = await prompt('\nSelect a project (enter number): ');
    const selectedProject = projects[parseInt(projectIndex) - 1];

    if (!selectedProject) {
      console.log('Invalid project selection.');
      rl.close();
      return;
    }

    console.log(`Selected project: ${selectedProject.name} (${selectedProject.ref})`);

    // Step 5: Get project credentials
    console.log('\nGetting project credentials...');

    const credentials = getProjectCredentials(selectedProject.ref);

    if (!credentials || !credentials.url || !credentials.anonKey || !credentials.serviceRoleKey) {
      console.log('Failed to get project credentials.');
      console.log('Please make sure you have the necessary permissions.');
      rl.close();
      return;
    }

    console.log('✅ Got project credentials');

    // Step 6: Update .env file
    console.log('\nUpdating .env file with credentials...');

    const updated = updateEnvFile(credentials);

    if (updated) {
      console.log('\n🎉 Supabase credentials have been added to your .env file:');
      console.log(`URL: ${credentials.url}`);
      console.log(`Anon Key: ${credentials.anonKey.substring(0, 5)}...${credentials.anonKey.substring(credentials.anonKey.length - 5)}`);
      console.log(`Service Role Key: ${credentials.serviceRoleKey.substring(0, 5)}...${credentials.serviceRoleKey.substring(credentials.serviceRoleKey.length - 5)}`);
    }

    rl.close();
  } catch (error) {
    console.error('Error getting Supabase credentials:', error);
    rl.close();
  }
}

// Run the function
getSupabaseCredentials();
