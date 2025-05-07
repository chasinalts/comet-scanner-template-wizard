#!/usr/bin/env node
/**
 * Script to set up Auth0 rules
 * 
 * This script creates a rule in Auth0 to add user roles to the ID token
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Auth0 rule for adding user roles to the ID token
const addUserRolesRule = `
function addUserRoles(user, context, callback) {
  // Get user metadata
  const namespace = 'https://cometscanner.netlify.app';
  const assignedRoles = (user.app_metadata && user.app_metadata.roles) || ['user'];
  const isOwner = (user.app_metadata && user.app_metadata.is_owner) || false;
  
  // Add roles to the user's ID token
  context.idToken[\`\${namespace}/roles\`] = assignedRoles;
  context.idToken[\`\${namespace}/is_owner\`] = isOwner;
  
  // Add roles to the user's access token
  context.accessToken[\`\${namespace}/roles\`] = assignedRoles;
  context.accessToken[\`\${namespace}/is_owner\`] = isOwner;
  
  callback(null, user, context);
}
`;

function setupAuth0Rules() {
  try {
    console.log('🔄 Setting up Auth0 rules...');

    // Create the rules directory if it doesn't exist
    const rulesDir = path.join(__dirname, '..', 'auth0-rules');
    if (!fs.existsSync(rulesDir)) {
      fs.mkdirSync(rulesDir, { recursive: true });
    }

    // Write the add-user-roles rule to a file
    const rulePath = path.join(rulesDir, 'add-user-roles.js');
    fs.writeFileSync(rulePath, addUserRolesRule);

    console.log('✅ Auth0 rules created successfully');
    console.log('⚠️ Please add the following rule to your Auth0 dashboard:');
    console.log('1. Go to Auth Pipeline > Rules');
    console.log('2. Click "Create Rule"');
    console.log('3. Select "Empty Rule"');
    console.log('4. Name it "Add User Roles"');
    console.log('5. Copy and paste the code from:');
    console.log(rulePath);
    console.log('6. Click "Save Changes"');
  } catch (error) {
    console.error('❌ Error setting up Auth0 rules:', error);
  }
}

setupAuth0Rules();
