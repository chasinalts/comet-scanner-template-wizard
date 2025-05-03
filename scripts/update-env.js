/**
 * Script to update .env file with Appwrite credentials
 * 
 * This script uses the output from get-appwrite-credentials.js
 * to update the .env file with the correct values.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

// Get the current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt for input
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

async function updateEnvFile() {
  try {
    console.log('🔄 Updating .env file');
    console.log('---------------------');
    
    // Get project ID from user
    const projectId = await prompt('Enter your Project ID: ');
    
    // Get database ID from user
    const databaseId = await prompt('Enter your Database ID: ');
    
    // Generate .env file content
    const envContent = `# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=${projectId}
VITE_APPWRITE_DATABASE_ID=${databaseId}

# Add any additional environment variables below
`;
    
    // Path to .env file
    const envPath = path.join(rootDir, '.env');
    
    // Check if .env file exists
    const envExists = fs.existsSync(envPath);
    
    if (envExists) {
      // Backup existing .env file
      const backupPath = path.join(rootDir, '.env.backup');
      fs.copyFileSync(envPath, backupPath);
      console.log(`✅ Backed up existing .env file to ${backupPath}`);
    }
    
    // Write new .env file
    fs.writeFileSync(envPath, envContent);
    console.log(`✅ Updated .env file at ${envPath}`);
    
    console.log('\nEnvironment variables:');
    console.log('---------------------');
    console.log(envContent);
    
    return true;
  } catch (error) {
    console.error('❌ Error updating .env file:', error.message);
    return false;
  } finally {
    // Close readline interface
    rl.close();
  }
}

// Run the function
updateEnvFile()
  .then((success) => {
    if (success) {
      console.log('\n✅ .env file updated successfully!');
    } else {
      console.log('\n❌ Failed to update .env file.');
    }
  })
  .catch((error) => {
    console.error('Unhandled error:', error);
  });
