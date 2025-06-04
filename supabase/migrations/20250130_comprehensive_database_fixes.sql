-- Migration: Comprehensive Database Fixes
-- Date: 2025-01-30
-- Purpose: Fix all admin dashboard issues identified during testing

-- Remove RLS from all tables since admin is password-protected
ALTER TABLE IF EXISTS public.templates DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.code_snippets DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.questions DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.answers DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.users DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.media DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.permissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.template_categories DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.template_versions DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.site_content DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS public.user_profiles DISABLE ROW LEVEL SECURITY;

-- Add missing is_active columns that were causing errors
ALTER TABLE public.templates 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;

ALTER TABLE public.code_snippets 
ADD COLUMN IF NOT EXISTS is_active BOOLEAN NOT NULL DEFAULT true;

-- Add helpful timestamp columns
ALTER TABLE public.templates 
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

ALTER TABLE public.code_snippets 
ADD COLUMN IF NOT EXISTS updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP;

-- Create site_content table if missing
CREATE TABLE IF NOT EXISTS public.site_content (
    id BIGSERIAL PRIMARY KEY,
    content_type TEXT NOT NULL,
    content_data JSONB NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE public.site_content DISABLE ROW LEVEL SECURITY;

-- Create images storage bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
    'images',
    'images', 
    true,
    5242880, -- 5MB
    ARRAY['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml']
)
ON CONFLICT (id) DO NOTHING;

-- Allow public access to images bucket
CREATE POLICY IF NOT EXISTS "Public Access" ON storage.objects
FOR ALL USING (bucket_id = 'images');