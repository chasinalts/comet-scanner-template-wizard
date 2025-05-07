#!/usr/bin/env node
/**
 * Script to set up an owner account in Auth0
 * 
 * Note: This script requires Auth0 Management API access.
 * You need to set up the following environment variables:
 * - AUTH0_DOMAIN
 * - AUTH0_CLIENT_ID
 * - AUTH0_CLIENT_SECRET
 * - OWNER_EMAIL
 */
import fetch from 'node-fetch';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Auth0 credentials
const AUTH0_DOMAIN = process.env.AUTH0_DOMAIN || 'cometscanner.us.auth0.com';
const AUTH0_CLIENT_ID = process.env.AUTH0_CLIENT_ID || 'sample123456789clientId';
const AUTH0_CLIENT_SECRET = process.env.AUTH0_CLIENT_SECRET || 'sample123456789clientSecret';
const OWNER_EMAIL = process.env.OWNER_EMAIL || 'chasinalts@gmail.com';

async function setupOwnerAccount() {
  try {
    console.log('🔄 Setting up owner account in Auth0...');

    // Get an access token for the Auth0 Management API
    console.log('🔄 Getting access token for Auth0 Management API...');
    const tokenResponse = await fetch(`https://${AUTH0_DOMAIN}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: AUTH0_CLIENT_ID,
        client_secret: AUTH0_CLIENT_SECRET,
        audience: `https://${AUTH0_DOMAIN}/api/v2/`,
        grant_type: 'client_credentials'
      })
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      console.error('❌ Error getting access token:', errorData);
      console.log('⚠️ Please set up the owner account manually in the Auth0 dashboard');
      return;
    }

    const tokenData = await tokenResponse.json();
    const accessToken = tokenData.access_token;

    // Find the user by email
    console.log(`🔄 Finding user with email ${OWNER_EMAIL}...`);
    const userResponse = await fetch(`https://${AUTH0_DOMAIN}/api/v2/users-by-email?email=${encodeURIComponent(OWNER_EMAIL)}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      }
    });

    if (!userResponse.ok) {
      const errorData = await userResponse.json();
      console.error('❌ Error finding user:', errorData);
      console.log('⚠️ Please set up the owner account manually in the Auth0 dashboard');
      return;
    }

    const users = await userResponse.json();

    if (users.length === 0) {
      console.log(`⚠️ User with email ${OWNER_EMAIL} not found`);
      console.log('⚠️ Please sign up with this email first, then run this script again');
      return;
    }

    const user = users[0];
    console.log(`✅ Found user with ID ${user.user_id}`);

    // Update the user's app_metadata to make them an owner
    console.log('🔄 Updating user metadata to make them an owner...');
    const updateResponse = await fetch(`https://${AUTH0_DOMAIN}/api/v2/users/${user.user_id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        app_metadata: {
          roles: ['owner'],
          is_owner: true
        }
      })
    });

    if (!updateResponse.ok) {
      const errorData = await updateResponse.json();
      console.error('❌ Error updating user metadata:', errorData);
      console.log('⚠️ Please set up the owner account manually in the Auth0 dashboard');
      return;
    }

    console.log('✅ User metadata updated successfully');
    console.log(`✅ User ${OWNER_EMAIL} is now an owner`);

    // Create a corresponding record in the Supabase user_profiles table
    console.log('🔄 Creating owner record in Supabase user_profiles table...');
    
    // Import the Supabase client
    const { createClient } = await import('@supabase/supabase-js');
    
    // Supabase credentials
    const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://hpbfipnhqakrhlnhluze.supabase.co';
    const SUPABASE_ANON_KEY = process.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmZpcG5ocWFrcmhsbmhsdXplIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4Mjc0NDgsImV4cCI6MjA2MDQwMzQ0OH0.kPZLOf0rKMn-FjEFgLG_cefIaRaLDdIILSjHzYK-b1w';
    
    // Create Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    // Check if the user already exists in the user_profiles table
    const { data: existingUser, error: existingError } = await supabase
      .from('user_profiles')
      .select('id')
      .eq('auth0_id', user.user_id)
      .single();
    
    if (!existingError) {
      console.log('✅ User already exists in user_profiles table');
      
      // Update the user's role and is_owner flag
      const { error: updateError } = await supabase
        .from('user_profiles')
        .update({
          role: 'owner',
          is_owner: true,
          permissions: {
            content_management: true,
            user_management: true,
            system_configuration: true,
            media_uploads: true,
            security_settings: true,
            site_customization: true
          }
        })
        .eq('auth0_id', user.user_id);
      
      if (updateError) {
        console.error('❌ Error updating user in user_profiles table:', updateError);
      } else {
        console.log('✅ User updated in user_profiles table');
      }
    } else {
      // Create a new user record
      const { error: insertError } = await supabase
        .from('user_profiles')
        .insert([
          {
            auth0_id: user.user_id,
            email: OWNER_EMAIL,
            role: 'owner',
            is_owner: true,
            permissions: {
              content_management: true,
              user_management: true,
              system_configuration: true,
              media_uploads: true,
              security_settings: true,
              site_customization: true
            }
          }
        ]);
      
      if (insertError) {
        console.error('❌ Error creating user in user_profiles table:', insertError);
      } else {
        console.log('✅ User created in user_profiles table');
      }
    }
    
    console.log('✅ Owner account setup complete');
  } catch (error) {
    console.error('❌ Error setting up owner account:', error);
  }
}

setupOwnerAccount();
