// Script to set up Supabase schema, RLS, and user roles automatically
// Requires: Node.js 18+, Supabase CLI installed, .env with SUPABASE_SERVICE_ROLE_KEY, VITE_SUPABASE_URL

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const SUPABASE_URL = process.env.VITE_SUPABASE_URL;
const SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
  console.error('Missing VITE_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment.');
  process.exit(1);
}

const schemaSql = `
-- 1. Create user_roles table to map users to roles
CREATE TABLE IF NOT EXISTS public.user_roles (
  user_id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL CHECK (role IN ('owner', 'admin', 'user'))
);

-- 2. Function to get current user role
CREATE OR REPLACE FUNCTION public.get_user_role()
RETURNS text
LANGUAGE sql STABLE
AS $$
  SELECT role FROM public.user_roles WHERE user_id = auth.uid();
$$;

-- 3. EXTENDED CONTENT TABLE
CREATE TABLE IF NOT EXISTS public.extended_content (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text,
  section_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  created_by uuid REFERENCES auth.users(id),
  content_type text
);

-- 4. IMAGES TABLE
CREATE TABLE IF NOT EXISTS public.images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  file_path text NOT NULL,
  bucket_id text NOT NULL,
  uploaded_by uuid REFERENCES auth.users(id),
  uploaded_at timestamptz DEFAULT now(),
  image_type text,
  size integer,
  metadata jsonb
);

-- 5. LOGS TABLE
CREATE TABLE IF NOT EXISTS public.logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event text NOT NULL,
  message text,
  level text,
  user_id uuid REFERENCES auth.users(id),
  details jsonb,
  created_at timestamptz DEFAULT now()
);

-- 6. TEMPLATES TABLE
CREATE TABLE IF NOT EXISTS public.templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  content jsonb,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 7. Enable RLS on all tables
ALTER TABLE public.extended_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.templates ENABLE ROW LEVEL SECURITY;

-- 8. Policies for extended_content
CREATE POLICY "Owner/Admin full access (extended_content)"
  ON public.extended_content
  FOR ALL
  USING (public.get_user_role() IN ('owner', 'admin'));

CREATE POLICY "All users can read (extended_content)"
  ON public.extended_content
  FOR SELECT
  USING (true);

-- 9. Policies for images
CREATE POLICY "Owner/Admin full access (images)"
  ON public.images
  FOR ALL
  USING (public.get_user_role() IN ('owner', 'admin'));

CREATE POLICY "All users can read (images)"
  ON public.images
  FOR SELECT
  USING (true);

-- 10. Policies for logs
CREATE POLICY "Owner/Admin full access (logs)"
  ON public.logs
  FOR ALL
  USING (public.get_user_role() IN ('owner', 'admin'));

CREATE POLICY "All users can read (logs)"
  ON public.logs
  FOR SELECT
  USING (true);

-- 11. Policies for templates
CREATE POLICY "Owner/Admin full access (templates)"
  ON public.templates
  FOR ALL
  USING (public.get_user_role() IN ('owner', 'admin'));

CREATE POLICY "All users can read templates"
  ON public.templates
  FOR SELECT
  USING (true);

CREATE POLICY "Users can modify/delete their own templates"
  ON public.templates
  FOR UPDATE, DELETE
  USING (auth.uid() = created_by);

CREATE POLICY "Users can insert their own templates"
  ON public.templates
  FOR INSERT
  WITH CHECK (auth.uid() = created_by);
`;

const sqlFile = path.join(__dirname, 'supabase-schema-and-roles.sql');
fs.writeFileSync(sqlFile, schemaSql);
console.log('SQL migration file written:', sqlFile);

try {
  // Run the SQL migration using Supabase CLI
  console.log('\nRunning migration...');
  execSync(`npx supabase db execute --file ${sqlFile}`, { stdio: 'inherit' });
  console.log('\n✅ Supabase schema and RLS setup complete!');
  console.log('\nNext steps:');
  console.log('1. Create storage buckets (banner, gallery, scanner) in Supabase Dashboard > Storage.');
  console.log('2. Set storage bucket policies for owner/admin full access, all users read-only.');
  console.log('3. To assign a user as owner/admin, insert into user_roles table:');
  console.log("   INSERT INTO public.user_roles (user_id, role) VALUES ('<user-uuid>', 'owner');");
} catch (err) {
  console.error('Error running migration:', err);
  process.exit(1);
}
