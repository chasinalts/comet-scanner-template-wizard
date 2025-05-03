/**
 * Script to retrieve Appwrite credentials
 * 
 * This script uses the Appwrite SDK to retrieve project information
 * and outputs the necessary environment variables.
 */
import { Client, Account } from 'appwrite';
import readline from 'readline';

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to prompt for input
const prompt = (question) => new Promise((resolve) => {
  rl.question(question, (answer) => resolve(answer));
});

async function getAppwriteCredentials() {
  try {
    console.log('🔑 Appwrite Credentials Retriever');
    console.log('--------------------------------');
    
    // Get user credentials
    const email = await prompt('Enter your Appwrite email: ');
    const password = await prompt('Enter your Appwrite password: ');
    
    // Initialize Appwrite client
    const client = new Client()
      .setEndpoint('https://cloud.appwrite.io/v1');
    
    // Create account instance
    const account = new Account(client);
    
    // Login to Appwrite
    console.log('\nLogging in to Appwrite...');
    await account.createEmailSession(email, password);
    
    // Get account information
    const accountInfo = await account.get();
    console.log(`\n✅ Logged in as: ${accountInfo.name} (${accountInfo.email})`);
    
    // Get list of projects
    console.log('\nRetrieving projects...');
    
    // Note: The SDK doesn't provide direct access to projects list
    // We need to use the Appwrite Console to get this information
    console.log('\n⚠️ To get your project ID:');
    console.log('1. Go to https://cloud.appwrite.io/console');
    console.log('2. Select your project');
    console.log('3. Go to Project Settings');
    console.log('4. Copy the Project ID');
    
    // Get project ID from user
    const projectId = await prompt('\nEnter your Project ID: ');
    
    // Set project ID in client
    client.setProject(projectId);
    
    // Get database information
    console.log('\n⚠️ To get your database ID:');
    console.log('1. Go to https://cloud.appwrite.io/console');
    console.log('2. Select your project');
    console.log('3. Go to Databases');
    console.log('4. Copy the Database ID');
    
    // Get database ID from user
    const databaseId = await prompt('\nEnter your Database ID: ');
    
    // Generate .env file content
    const envContent = `# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=${projectId}
VITE_APPWRITE_DATABASE_ID=${databaseId}

# Add any additional environment variables below
`;
    
    console.log('\n✅ Credentials retrieved successfully!');
    console.log('\nHere are your environment variables:');
    console.log('--------------------------------');
    console.log(envContent);
    console.log('--------------------------------');
    
    console.log('\nUpdating .env file...');
    
    // Return the environment variables
    return {
      projectId,
      databaseId,
      envContent
    };
  } catch (error) {
    console.error('\n❌ Error retrieving credentials:', error.message);
    if (error.response) {
      console.error('Response:', error.response);
    }
    return null;
  } finally {
    // Close readline interface
    rl.close();
  }
}

// Run the function
getAppwriteCredentials()
  .then((credentials) => {
    if (credentials) {
      console.log('\nYou can now update your .env file with these values.');
      console.log('Or run: node scripts/update-env.js to update it automatically.');
    }
  })
  .catch((error) => {
    console.error('Unhandled error:', error);
  });
