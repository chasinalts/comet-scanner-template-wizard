-- Remove RLS policies since admin functionality is password-protected
-- This script removes Row Level Security from the site_content table

-- Drop the existing RLS policy
DROP POLICY IF EXISTS "Allow all operations for authenticated users" ON public.site_content;

-- Disable Row Level Security on the site_content table
ALTER TABLE public.site_content DISABLE ROW LEVEL SECURITY;

-- Note: The table will now be accessible without RLS restrictions
-- since the admin functionality is protected by password authentication