-- Comprehensive Database Fixes for COMET Scanner Admin Dashboard
-- This script addresses all issues found during testing:
-- 1. Remove RLS policies from all tables (admin is password-protected)
-- 2. Add missing is_active columns to templates and code_snippets tables
-- 3. Create storage bucket for images
-- 4. Fix any other schema issues

-- =====================================================
-- PART 1: Remove Row Level Security from All Tables
-- =====================================================

-- Disable RLS on all existing tables
ALTER TABLE IF EXISTS public.answers DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.code_snippets DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.media DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.permissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.questions DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.template_categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.template_versions DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.templates DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.users DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.site_content DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_profiles DISABLE ROW LEVEL SECURITY;

-- Drop any existing RLS policies
DROP POLICY IF EXISTS "Allow all operations for authenticated users" ON public.site_content;
DROP POLICY IF EXISTS "Users can view their own profile" ON public.user_profiles;
DROP POLICY IF EXISTS "Users can update their own profile" ON public.user_profiles;

-- Add comments explaining security model
COMMENT ON TABLE public.templates IS 'RLS disabled - security handled by password-protected admin dashboard';
COMMENT ON TABLE public.code_snippets IS 'RLS disabled - security handled by password-protected admin dashboard';
COMMENT ON TABLE public.categories IS 'RLS disabled - security handled by password-protected admin dashboard';
COMMENT ON TABLE public.questions IS 'RLS disabled - security handled by password-protected admin dashboard';
COMMENT ON TABLE public.media IS 'RLS disabled - security handled by password-protected admin dashboard';
COMMENT ON TABLE public.users IS 'RLS disabled - security handled by password-protected admin dashboard';
COMMENT ON TABLE public.answers IS 'RLS disabled - security handled by password-protected admin dashboard';
COMMENT ON TABLE public.permissions IS 'RLS disabled - security handled by password-protected admin dashboard';

-- =====================================================
-- PART 2: Add Missing Columns
-- =====================================================

-- Add is_active column to templates table if it doesn't exist
ALTER TABLE public.templates 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;

-- Add is_active column to code_snippets table if it doesn't exist
ALTER TABLE public.code_snippets 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;

-- Add any other commonly needed columns
ALTER TABLE public.templates 
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE public.code_snippets 
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE public.categories 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN IF NOT EXISTS created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

-- =====================================================
-- PART 3: Create Storage Bucket for Images
-- =====================================================

-- Create the images bucket in storage.buckets
-- Note: This may need to be run with appropriate permissions
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'images',
    'images',
    true,
    5242880, -- 5MB limit
    ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;

-- Create storage policy for public access to images bucket
-- Since we're removing RLS, we need to allow public access
CREATE POLICY IF NOT EXISTS "Public Access" ON storage.objects
FOR ALL USING (bucket_id = 'images');

-- Alternative: If the above doesn't work, disable RLS on storage.objects
-- ALTER TABLE storage.objects DISABLE ROW LEVEL SECURITY;

-- =====================================================
-- PART 4: Create Missing Tables (if needed)
-- =====================================================

-- Create site_content table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.site_content (
    id BIGSERIAL PRIMARY KEY,
    content_type TEXT NOT NULL,
    content_data JSONB NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Disable RLS on the newly created table
ALTER TABLE public.site_content DISABLE ROW LEVEL SECURITY;

-- =====================================================
-- PART 5: Update Functions and Triggers
-- =====================================================

-- Create updated_at trigger function if it doesn't exist
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers to tables that have the column
DROP TRIGGER IF EXISTS update_templates_updated_at ON public.templates;
CREATE TRIGGER update_templates_updated_at
    BEFORE UPDATE ON public.templates
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_code_snippets_updated_at ON public.code_snippets;
CREATE TRIGGER update_code_snippets_updated_at
    BEFORE UPDATE ON public.code_snippets
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_categories_updated_at ON public.categories;
CREATE TRIGGER update_categories_updated_at
    BEFORE UPDATE ON public.categories
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS update_site_content_updated_at ON public.site_content;
CREATE TRIGGER update_site_content_updated_at
    BEFORE UPDATE ON public.site_content
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- PART 6: Grant Permissions
-- =====================================================

-- Grant necessary permissions for the application
-- Note: Adjust these based on your specific user/role setup

-- Grant permissions to authenticated users (if using Supabase auth)
GRANT ALL ON ALL TABLES IN SCHEMA public TO authenticated;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO authenticated;
GRANT EXECUTE ON ALL FUNCTIONS IN SCHEMA public TO authenticated;

-- Grant permissions to anon users for public access
GRANT SELECT ON public.templates TO anon;
GRANT SELECT ON public.categories TO anon;
GRANT SELECT ON public.code_snippets TO anon;
GRANT SELECT ON public.questions TO anon;

-- =====================================================
-- PART 7: Verification Queries
-- =====================================================

-- These queries can be used to verify the fixes
-- Uncomment to run verification

/*
-- Check that RLS is disabled on all tables
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
ORDER BY tablename;

-- Check that required columns exist
SELECT table_name, column_name, data_type, is_nullable, column_default
FROM information_schema.columns
WHERE table_schema = 'public' 
AND table_name IN ('templates', 'code_snippets', 'categories')
AND column_name IN ('is_active', 'created_at', 'updated_at')
ORDER BY table_name, column_name;

-- Check storage bucket
SELECT * FROM storage.buckets WHERE id = 'images';

-- Check storage policies
SELECT * FROM storage.policies WHERE bucket_id = 'images';
*/

-- =====================================================
-- COMPLETION MESSAGE
-- =====================================================

-- Log completion
DO $$
BEGIN
    RAISE NOTICE 'Database fixes completed successfully!';
    RAISE NOTICE 'RLS disabled on all tables';
    RAISE NOTICE 'Missing columns added to templates and code_snippets';
    RAISE NOTICE 'Storage bucket created for images';
    RAISE NOTICE 'Updated triggers added for timestamp management';
END $$;