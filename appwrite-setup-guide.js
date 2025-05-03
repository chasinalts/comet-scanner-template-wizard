#!/usr/bin/env node

/**
 * This script provides a step-by-step guide for setting up Appwrite resources
 * for the COMET Scanner project manually through the Appwrite Console.
 */

console.log('=== COMET Scanner Appwrite Setup Guide ===');
console.log('\nFollow these steps to set up your Appwrite resources:');

console.log('\n1. Log in to your Appwrite Console: https://cloud.appwrite.io/console');
console.log('2. Select your project (cstw) or create a new one');

console.log('\n3. Create a database:');
console.log('   a. Go to "Databases" in the left sidebar');
console.log('   b. Click "Create Database"');
console.log('   c. Name it "cometscanner"');
console.log('   d. Click "Create"');

console.log('\n4. Create collections in the database:');
console.log('   a. Select the "cometscanner" database');
console.log('   b. Click "Create Collection"');
console.log('   c. Create the following collections with their attributes:');

console.log('\n   Collection 1: user_profiles');
console.log('   - Attribute: name (string, required)');
console.log('   - Attribute: email (string, required)');
console.log('   - Attribute: role (string, required)');
console.log('   - Set appropriate permissions (e.g., read for any user, write for authenticated users)');

console.log('\n   Collection 2: content');
console.log('   - Attribute: title (string, required)');
console.log('   - Attribute: body (string, required)');
console.log('   - Attribute: type (string, required)');
console.log('   - Set appropriate permissions (e.g., read for any user, write for authenticated users)');

console.log('\n   Collection 3: images');
console.log('   - Attribute: name (string, required)');
console.log('   - Attribute: url (string, required)');
console.log('   - Attribute: type (string, required)');
console.log('   - Set appropriate permissions (e.g., read for any user, write for authenticated users)');

console.log('\n   Collection 4: logs');
console.log('   - Attribute: type (string, required)');
console.log('   - Attribute: message (string, required)');
console.log('   - Attribute: timestamp (datetime, required)');
console.log('   - Set appropriate permissions (e.g., read/write for authenticated users)');

console.log('\n5. Create storage buckets:');
console.log('   a. Go to "Storage" in the left sidebar');
console.log('   b. Click "Create Bucket"');
console.log('   c. Create the following buckets:');

console.log('\n   Bucket 1: banner');
console.log('   - Set appropriate permissions (e.g., read for any user, write for authenticated users)');

console.log('\n   Bucket 2: gallery');
console.log('   - Set appropriate permissions (e.g., read for any user, write for authenticated users)');

console.log('\n   Bucket 3: scanner');
console.log('   - Set appropriate permissions (e.g., read for any user, write for authenticated users)');

console.log('\n6. Create initial content:');
console.log('   a. Go to the "content" collection');
console.log('   b. Click "Create Document"');
console.log('   c. Add a document with:');
console.log('      - title: "What is COMET?"');
console.log('      - body: "COMET is a revolutionary scanner application..."');
console.log('      - type: "info"');
console.log('   d. Add another document with:');
console.log('      - title: "Welcome"');
console.log('      - body: "Welcome to the COMET Scanner application!"');
console.log('      - type: "welcome"');

console.log('\n7. Create an owner account:');
console.log('   a. Go to the "user_profiles" collection');
console.log('   b. Click "Create Document"');
console.log('   c. Add a document with:');
console.log('      - name: "Chase Cambre"');
console.log('      - email: "chasinalts@gmail.com"');
console.log('      - role: "owner"');

console.log('\n8. Update your environment variables:');
console.log('   a. Make sure your .env file contains:');
console.log('      VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1');
console.log('      VITE_APPWRITE_PROJECT_ID=cstw (or your project ID)');
console.log('      VITE_APPWRITE_DATABASE_ID=cometscanner (or your database ID)');

console.log('\nSetup guide complete! Follow these steps to set up your Appwrite resources manually.');
console.log('Once completed, your application should be able to connect to Appwrite successfully.');
