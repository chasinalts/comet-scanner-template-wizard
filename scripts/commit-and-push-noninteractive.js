#!/usr/bin/env node
/**
 * Non-interactive script to commit and push changes to GitHub
 */
import { execSync } from 'child_process';

// Main function to commit and push changes
function commitAndPush() {
  try {
    console.log('🚀 Committing and pushing changes to GitHub');
    console.log('------------------------------------------');
    
    // Check git status
    const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
    if (!statusOutput.trim()) {
      console.log('✅ No changes to commit');
      return;
    }
    
    console.log('📝 Changes to commit:');
    console.log(execSync('git status', { encoding: 'utf8' }));
    
    // Use a default commit message
    const commitMessage = 'Auth0 integration: Transition from Appwrite to Auth0 authentication';
    
    // Add all changes
    console.log('📝 Adding all changes...');
    execSync('git add .', { stdio: 'inherit' });
    
    // Commit changes
    console.log('📝 Committing changes...');
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    
    // Push changes
    console.log('📝 Pushing changes to GitHub...');
    execSync('git push', { stdio: 'inherit' });
    console.log('✅ Changes pushed to GitHub successfully');
  } catch (error) {
    console.error('❌ Error committing and pushing changes:', error);
    process.exit(1);
  }
}

// Run the function
commitAndPush();
