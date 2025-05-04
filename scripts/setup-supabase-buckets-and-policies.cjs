// Script to automate Supabase Storage bucket creation and policy setup
// Requires: Node.js 18+, SUPABASE_SERVICE_ROLE_KEY, VITE_SUPABASE_URL in .env

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
require('dotenv').config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.');
  process.exit(1);
}

const BUCKETS = ['banner', 'gallery', 'scanner'];

async function createBucket(bucket) {
  const url = `${SUPABASE_URL}/storage/v1/buckets`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SERVICE_ROLE_KEY,
      'Authorization': `Bearer ${SERVICE_ROLE_KEY}`
    },
    body: JSON.stringify({
      id: bucket,
      name: bucket,
      public: true // public to allow read by all
    })
  });
  if (res.status === 409) {
    console.log(`Bucket '${bucket}' already exists.`);
    return;
  }
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to create bucket '${bucket}': ${text}`);
  }
  console.log(`Created bucket '${bucket}'.`);
}

async function setBucketPublic(bucket) {
  const url = `${SUPABASE_URL}/storage/v1/buckets/${bucket}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SERVICE_ROLE_KEY,
      'Authorization': `Bearer ${SERVICE_ROLE_KEY}`
    },
    body: JSON.stringify({ public: true })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to set bucket '${bucket}' public: ${text}`);
  }
  console.log(`Set bucket '${bucket}' to public.`);
}

async function setPolicies(bucket) {
  // Supabase storage uses Postgres policies. We'll set:
  // - Owner/admin (via user_roles): full access
  // - All users: read-only
  // - Users: full CRUD on their own uploads (optional for images)
  const sql = `
-- Enable RLS on storage.objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Owner/Admin full access
CREATE POLICY "Owner/Admin full access (${bucket})"
  ON storage.objects
  FOR ALL
  USING (
    bucket_id = '${bucket}' AND public.get_user_role() IN ('owner', 'admin')
  );

-- All users can read
CREATE POLICY "All users can read (${bucket})"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = '${bucket}');

-- Users can manage their own objects (optional)
CREATE POLICY "Users manage own objects (${bucket})"
  ON storage.objects
  FOR ALL
  USING (
    bucket_id = '${bucket}' AND auth.uid() = owner
  );
`;
  const url = `${SUPABASE_URL}/rest/v1/rpc/execute_sql`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'apikey': SERVICE_ROLE_KEY,
      'Authorization': `Bearer ${SERVICE_ROLE_KEY}`
    },
    body: JSON.stringify({
      sql
    })
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Failed to set policies for bucket '${bucket}': ${text}`);
  }
  console.log(`Set storage policies for bucket '${bucket}'.`);
}

(async () => {
  for (const bucket of BUCKETS) {
    await createBucket(bucket);
    await setBucketPublic(bucket);
    await setPolicies(bucket);
  }
  console.log('\n✅ All buckets created and policies set!');
})();
