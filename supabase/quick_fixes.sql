-- Quick Database Fixes for Admin Dashboard
-- Run this in Supabase SQL Editor to fix immediate issues

-- 1. Add missing columns that are causing errors
ALTER TABLE templates ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;
ALTER TABLE code_snippets ADD COLUMN IF NOT EXISTS is_active BOOLEAN DEFAULT true;

-- 2. Remove RLS from all tables (admin is password protected)
ALTER TABLE templates DISABLE ROW LEVEL SECURITY;
ALTER TABLE code_snippets DISABLE ROW LEVEL SECURITY;
ALTER TABLE categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE questions DISABLE ROW LEVEL SECURITY;
ALTER TABLE answers DISABLE ROW LEVEL SECURITY;
ALTER TABLE users DISABLE ROW LEVEL SECURITY;
ALTER TABLE media DISABLE ROW LEVEL SECURITY;
ALTER TABLE permissions DISABLE ROW LEVEL SECURITY;

-- 3. Create images bucket for file uploads
INSERT INTO storage.buckets (id, name, public) 
VALUES ('images', 'images', true) 
ON CONFLICT (id) DO NOTHING;

-- 4. Allow access to images bucket
CREATE POLICY IF NOT EXISTS "Allow all access" ON storage.objects 
FOR ALL USING (bucket_id = 'images');