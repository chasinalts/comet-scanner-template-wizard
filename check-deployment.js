// Script to check the deployment status and log any errors
import https from 'https';
import { config } from 'dotenv';

// Load environment variables
config();

// Get the deployment URL from environment variables or use a default for local testing
const getDeploymentUrl = () => {
  // Use VITE_APP_URL if available, otherwise use NETLIFY_URL or DEPLOY_URL (Netlify provides these)
  return process.env.VITE_APP_URL ||
         process.env.NETLIFY_URL ||
         process.env.DEPLOY_URL ||
         process.env.URL ||
         'http://localhost:3000'; // Fallback for local development
};

function checkDeployment(path = '') {
  const baseUrl = getDeploymentUrl();
  const url = `${baseUrl}${path}`;

  return new Promise((resolve, reject) => {
    console.log(`Checking deployment at ${url}...`);

    // Determine if we're using http or https
    const httpModule = url.startsWith('https') ? https : require('http');

    httpModule.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        console.log(`Status code: ${res.statusCode}`);
        if (res.statusCode === 200) {
          console.log('✅ Site is up and running!');
          resolve(true);
        } else {
          console.log(`❌ Site returned status code ${res.statusCode}`);
          resolve(false);
        }
      });
    }).on('error', (err) => {
      console.error(`❌ Error checking deployment: ${err.message}`);
      reject(err);
    });
  });
}

// Check the main site
checkDeployment('/')
  .then(() => {
    // Also check the login page
    return checkDeployment('/login');
  })
  .then(() => {
    console.log('\nDeployment check complete!');
    console.log('To check for console errors, please visit the site in your browser and open the developer tools.');
  })
  .catch((error) => {
    console.error('Deployment check failed:', error);
  });
