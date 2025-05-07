// Script to create storage buckets in Supabase
// Run with: node scripts/setup-supabase-buckets.js

import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Supabase credentials - hardcoded for reliability
const supabaseUrl = 'https://hpbfipnhqakrhlnhluze.supabase.co';
// Using service role key instead of anon key for admin operations
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhwYmZpcG5ocWFrcmhsbmhsdXplIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NDgyNzQ0OCwiZXhwIjoyMDYwNDAzNDQ4fQ.Rl-4xWVuTm3vfzQF6QHRhN0yzVrNzJQTmF_tl31AjQw';

// Initialize Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Bucket names
const buckets = ['banner', 'gallery', 'scanner'];

// Create buckets
async function createBuckets() {
  try {
    console.log('Creating storage buckets in Supabase...');

    // First, try to list existing buckets
    let existingBuckets = [];
    try {
      const { data, error } = await supabase.storage.listBuckets();
      if (error) {
        console.error(`Error listing buckets: ${error.message}`);
      } else {
        existingBuckets = data || [];
        console.log('Existing buckets:', existingBuckets.map(b => b.name).join(', ') || 'none');
      }
    } catch (listError) {
      console.error('Error listing buckets:', listError.message);
    }

    // Try to create each bucket
    for (const bucket of buckets) {
      try {
        // Check if bucket exists
        const bucketExists = existingBuckets.some(b => b.name === bucket);

        if (bucketExists) {
          console.log(`Bucket '${bucket}' already exists.`);

          // Try to update the bucket to make it public
          try {
            const { error: updateError } = await supabase.storage.updateBucket(bucket, {
              public: true,
              fileSizeLimit: 5242880, // 5MB
              allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
            });

            if (updateError) {
              console.error(`Error updating bucket '${bucket}': ${updateError.message}`);
            } else {
              console.log(`Updated bucket '${bucket}' to be public.`);
            }
          } catch (updateErr) {
            console.error(`Error updating bucket '${bucket}':`, updateErr.message);
          }

          continue;
        }

        // Create bucket
        console.log(`Creating bucket '${bucket}'...`);
        const { data, error } = await supabase.storage.createBucket(bucket, {
          public: true,
          fileSizeLimit: 5242880, // 5MB
          allowedMimeTypes: ['image/png', 'image/jpeg', 'image/gif', 'image/webp']
        });

        if (error) {
          console.error(`Error creating bucket '${bucket}': ${error.message}`);

          // Try alternative method using REST API
          try {
            console.log(`Trying to create bucket '${bucket}' using REST API...`);
            const response = await fetch(`${supabaseUrl}/rest/v1/storage/buckets`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'apikey': supabaseKey,
                'Authorization': `Bearer ${supabaseKey}`
              },
              body: JSON.stringify({
                id: bucket,
                name: bucket,
                public: true
              })
            });

            if (response.ok) {
              console.log(`Created bucket '${bucket}' using REST API.`);
            } else {
              const errorData = await response.json();
              console.error(`Error creating bucket '${bucket}' using REST API:`, errorData);

              // If we still can't create the bucket, suggest manual creation
              console.log(`\nPlease create the '${bucket}' bucket manually in the Supabase dashboard:`);
              console.log(`1. Go to https://app.supabase.com/project/hpbfipnhqakrhlnhluze/storage`);
              console.log(`2. Click "New Bucket"`);
              console.log(`3. Enter "${bucket}" as the bucket name`);
              console.log(`4. Check "Public bucket" to make it publicly accessible`);
              console.log(`5. Click "Create bucket"\n`);
            }
          } catch (restError) {
            console.error(`Error creating bucket '${bucket}' using REST API:`, restError.message);
          }
        } else {
          console.log(`Created bucket '${bucket}'.`);
        }
      } catch (err) {
        console.error(`Error processing bucket '${bucket}':`, err.message);
      }
    }

    console.log('Storage buckets setup completed.');
    console.log('\nIf any buckets could not be created automatically, please create them manually in the Supabase dashboard:');
    console.log('1. Go to https://app.supabase.com/project/hpbfipnhqakrhlnhluze/storage');
    console.log('2. Click "New Bucket"');
    console.log('3. Enter the bucket name (banner, gallery, or scanner)');
    console.log('4. Check "Public bucket" to make it publicly accessible');
    console.log('5. Click "Create bucket"');
  } catch (error) {
    console.error('Error creating buckets:', error.message);
  }
}

createBuckets();
