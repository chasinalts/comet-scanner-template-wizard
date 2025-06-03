-- Migration: Remove RLS policies from all tables
-- Date: 2025-01-30
-- Reason: Admin functionality is password-protected, RLS not needed

-- Remove RLS from site_content table
DROP POLICY IF EXISTS "Allow all operations for authenticated users" ON public.site_content;
ALTER TABLE public.site_content DISABLE ROW LEVEL SECURITY;

-- Check and remove RLS from other tables if they exist
-- (Currently only site_content has RLS enabled based on our analysis)

-- Note: This migration removes Row Level Security since the application
-- uses password-protected admin pages for access control instead of RLS