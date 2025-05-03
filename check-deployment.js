// Script to check the deployment status and log any errors
import https from 'https';

function checkDeployment(url) {
  return new Promise((resolve, reject) => {
    console.log(`Checking deployment at ${url}...`);

    https.get(url, (res) => {
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
checkDeployment('https://cometscanner.netlify.app')
  .then(() => {
    // Also check the login page
    return checkDeployment('https://cometscanner.netlify.app/login');
  })
  .then(() => {
    console.log('\nDeployment check complete!');
    console.log('To check for console errors, please visit the site in your browser and open the developer tools.');
  })
  .catch((error) => {
    console.error('Deployment check failed:', error);
  });
