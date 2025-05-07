#!/usr/bin/env node

/**
 * Script to commit and push changes to GitHub
 * 
 * This script commits the changes and pushes them to GitHub
 */
import { execSync } from 'child_process';
import readline from 'readline';

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Prompt function
const prompt = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

// Main function to commit and push changes
async function commitAndPush() {
  try {
    console.log('🚀 Committing and pushing changes to GitHub');
    console.log('------------------------------------------');
    
    // Check git status
    const statusOutput = execSync('git status --porcelain', { encoding: 'utf8' });
    if (!statusOutput.trim()) {
      console.log('✅ No changes to commit');
      rl.close();
      return;
    }
    
    console.log('📝 Changes to commit:');
    console.log(execSync('git status', { encoding: 'utf8' }));
    
    // Get commit message
    const commitMessage = await prompt('Enter commit message: ');
    if (!commitMessage.trim()) {
      console.log('❌ Commit message cannot be empty');
      rl.close();
      return;
    }
    
    // Add all changes
    console.log('📝 Adding all changes...');
    execSync('git add .', { stdio: 'inherit' });
    
    // Commit changes
    console.log('📝 Committing changes...');
    execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
    
    // Push changes
    const shouldPush = await prompt('Do you want to push the changes to GitHub? (y/n): ');
    if (shouldPush.toLowerCase() === 'y') {
      console.log('📝 Pushing changes to GitHub...');
      execSync('git push', { stdio: 'inherit' });
      console.log('✅ Changes pushed to GitHub successfully');
    } else {
      console.log('⚠️ Changes committed but not pushed');
      console.log('You can push the changes later with:');
      console.log('git push');
    }
    
    rl.close();
  } catch (error) {
    console.error('❌ Error committing and pushing changes:', error);
    rl.close();
    process.exit(1);
  }
}

// Run the function
commitAndPush();
