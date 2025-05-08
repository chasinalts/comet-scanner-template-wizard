// Script to test Auth0 login flow
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createRequire } from 'module';
import axios from 'axios';
import open from 'open';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);

dotenv.config();

async function testAuth0Login() {
  const domain = process.env.VITE_AUTH0_DOMAIN || 'dev-mytcazei5krtbkqw.us.auth0.com';
  const clientId = process.env.VITE_AUTH0_CLIENT_ID || 'Mp0HS9ZAmmgPVbpDU3lCbe8vr4cQgT6L';
  
  console.log('Testing Auth0 login flow...');
  console.log(`Domain: ${domain}`);
  console.log(`Client ID: ${clientId}`);
  
  try {
    // Test if the Auth0 domain is valid
    const response = await axios.get(`https://${domain}/.well-known/openid-configuration`);
    
    if (response.status === 200) {
      console.log('\n✅ Auth0 domain is valid and accessible.');
      
      // Generate the login URL
      const loginUrl = `https://${domain}/authorize?client_id=${clientId}&response_type=code&redirect_uri=https://cometscanner.netlify.app/callback&scope=openid%20profile%20email`;
      
      console.log('\nOpening the Auth0 login page in your default browser...');
      console.log(`URL: ${loginUrl}`);
      
      // Open the login URL in the default browser
      await open(loginUrl);
      
      console.log('\nInstructions:');
      console.log('1. Log in with your Auth0 credentials.');
      console.log('2. After logging in, you should be redirected to your callback URL.');
      console.log('3. If you see the "AUTHENTICATING..." screen, it means the callback URL is correct.');
      console.log('4. If you see an error, check the browser console for more information.');
    }
  } catch (error) {
    console.error('\n❌ Error testing Auth0 login flow:');
    console.error(error.message);
    
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error('Response:', error.response.data);
    }
    
    console.log('\nPlease check your Auth0 domain and client ID.');
    console.log('If the domain is incorrect, update it in your .env and .env.local files.');
  }
}

testAuth0Login();
