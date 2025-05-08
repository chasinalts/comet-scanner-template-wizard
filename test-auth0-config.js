// Script to test Auth0 configuration
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

dotenv.config();

async function testAuth0Config() {
  const domain = process.env.VITE_AUTH0_DOMAIN || 'dev-mytcazei5krtbkqw.us.auth0.com';
  const clientId = process.env.VITE_AUTH0_CLIENT_ID || 'Mp0HS9ZAmmgPVbpDU3lCbe8vr4cQgT6L';
  
  console.log('Testing Auth0 configuration...');
  console.log(`Domain: ${domain}`);
  console.log(`Client ID: ${clientId}`);
  
  try {
    // Test if the Auth0 domain is valid
    const response = await axios.get(`https://${domain}/.well-known/openid-configuration`);
    
    if (response.status === 200) {
      console.log('\n✅ Auth0 domain is valid and accessible.');
      console.log('OpenID Configuration is available.');
      
      // Check if the client ID is valid
      console.log('\nTo complete the test, please follow these steps:');
      console.log('1. Open the following URL in your browser:');
      console.log(`https://${domain}/authorize?client_id=${clientId}&response_type=code&redirect_uri=https://cometscanner.netlify.app/callback&scope=openid%20profile%20email`);
      console.log('\n2. If you see the Auth0 login page, your client ID is valid.');
      console.log('3. After logging in, you should be redirected to your callback URL.');
      console.log('4. If you see an error about the callback URL, make sure you have updated your Auth0 application settings as per the instructions in auth0-setup-instructions.md.');
    }
  } catch (error) {
    console.error('\n❌ Error testing Auth0 configuration:');
    console.error(error.message);
    
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error('Response:', error.response.data);
    }
    
    console.log('\nPlease check your Auth0 domain and client ID.');
    console.log('If the domain is incorrect, update it in your .env and .env.local files.');
  }
}

testAuth0Config();
