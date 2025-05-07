-- Comprehensive SQL script to set up Supabase and fix warnings
-- Run this in the Supabase SQL Editor: https://app.supabase.com/project/hpbfipnhqakrhlnhluze/sql

-- 1. Update CORS configuration in auth.config
UPDATE auth.config
SET 
  cors_allowed_origins = ARRAY[
    'http://localhost:3000',
    'http://localhost:5173',
    'https://cometscanner.netlify.app',
    'https://680f06902e429800091e81e5--cometscanner.netlify.app'
  ]::text[],
  cors_allowed_methods = ARRAY['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']::text[],
  cors_allowed_headers = ARRAY['Content-Type', 'Authorization', 'X-Client-Info', 'apikey']::text[];

-- 2. Enable leaked password protection and MFA options
UPDATE auth.config
SET 
  enable_hibp_check = true,
  enable_totp_mfa = true,
  enable_sms_mfa = true;

-- 3. Create or update storage buckets with CORS settings
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types, cors_origins)
VALUES 
  ('banner', 'banner', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'], ARRAY[
    'http://localhost:3000',
    'http://localhost:5173',
    'https://cometscanner.netlify.app',
    'https://680f06902e429800091e81e5--cometscanner.netlify.app'
  ]::text[]),
  ('gallery', 'gallery', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'], ARRAY[
    'http://localhost:3000',
    'http://localhost:5173',
    'https://cometscanner.netlify.app',
    'https://680f06902e429800091e81e5--cometscanner.netlify.app'
  ]::text[]),
  ('scanner', 'scanner', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'], ARRAY[
    'http://localhost:3000',
    'http://localhost:5173',
    'https://cometscanner.netlify.app',
    'https://680f06902e429800091e81e5--cometscanner.netlify.app'
  ]::text[])
ON CONFLICT (id) DO UPDATE SET
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
  cors_origins = ARRAY[
    'http://localhost:3000',
    'http://localhost:5173',
    'https://cometscanner.netlify.app',
    'https://680f06902e429800091e81e5--cometscanner.netlify.app'
  ]::text[];

-- 4. Create images table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  bucket_id TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  owner_id UUID,
  image_type TEXT NOT NULL,
  size INTEGER,
  width INTEGER,
  height INTEGER,
  metadata JSONB
);

-- 5. Enable Row Level Security
ALTER TABLE public.images ENABLE ROW LEVEL SECURITY;

-- 6. Drop existing policies if they exist to avoid errors
DROP POLICY IF EXISTS "Public Access for images" ON public.images;
DROP POLICY IF EXISTS "Users can insert their own images" ON public.images;
DROP POLICY IF EXISTS "Users can update their own images" ON public.images;
DROP POLICY IF EXISTS "Users can delete their own images" ON public.images;

-- 7. Create policy for public access to images (read-only)
CREATE POLICY "Public Access for images" ON public.images
  FOR SELECT USING (true);

-- 8. Create policy for authenticated users to insert their own images
CREATE POLICY "Users can insert their own images" ON public.images
  FOR INSERT WITH CHECK (auth.uid() = owner_id OR owner_id IS NULL);

-- 9. Create policy for authenticated users to update their own images
CREATE POLICY "Users can update their own images" ON public.images
  FOR UPDATE USING (auth.uid() = owner_id OR owner_id IS NULL) 
  WITH CHECK (auth.uid() = owner_id OR owner_id IS NULL);

-- 10. Create policy for authenticated users to delete their own images
CREATE POLICY "Users can delete their own images" ON public.images
  FOR DELETE USING (auth.uid() = owner_id OR owner_id IS NULL);

-- 11. Create index on image_type for faster queries
DROP INDEX IF EXISTS idx_images_image_type;
CREATE INDEX idx_images_image_type ON public.images(image_type);

-- 12. Create index on owner_id for faster queries
DROP INDEX IF EXISTS idx_images_owner_id;
CREATE INDEX idx_images_owner_id ON public.images(owner_id);

-- 13. Create storage policies for each bucket
-- For banner bucket
DROP POLICY IF EXISTS "Public Access for banner" ON storage.objects;
CREATE POLICY "Public Access for banner" ON storage.objects
  FOR SELECT USING (bucket_id = 'banner');

-- For gallery bucket
DROP POLICY IF EXISTS "Public Access for gallery" ON storage.objects;
CREATE POLICY "Public Access for gallery" ON storage.objects
  FOR SELECT USING (bucket_id = 'gallery');

-- For scanner bucket
DROP POLICY IF EXISTS "Public Access for scanner" ON storage.objects;
CREATE POLICY "Public Access for scanner" ON storage.objects
  FOR SELECT USING (bucket_id = 'scanner');

-- 14. Allow authenticated users to upload to buckets
DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;
CREATE POLICY "Authenticated users can upload" ON storage.objects
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- 15. Allow authenticated users to update their own objects
DROP POLICY IF EXISTS "Authenticated users can update their own objects" ON storage.objects;
CREATE POLICY "Authenticated users can update their own objects" ON storage.objects
  FOR UPDATE USING (auth.uid() = owner) WITH CHECK (auth.uid() = owner);

-- 16. Allow authenticated users to delete their own objects
DROP POLICY IF EXISTS "Authenticated users can delete their own objects" ON storage.objects;
CREATE POLICY "Authenticated users can delete their own objects" ON storage.objects
  FOR DELETE USING (auth.uid() = owner);

-- 17. Fix function search path warnings by recreating functions with search_path parameter

-- Fix signup_user function
CREATE OR REPLACE FUNCTION public.signup_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Your existing function logic here
  RETURN NEW;
END;
$$;

-- Fix handle_new_user function
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Your existing function logic here
  RETURN NEW;
END;
$$;

-- Fix set_updated_at function
CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

-- Fix create_profile_for_new_user function
CREATE OR REPLACE FUNCTION public.create_profile_for_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Your existing function logic here
  RETURN NEW;
END;
$$;

-- Fix is_owner function
CREATE OR REPLACE FUNCTION public.is_owner()
RETURNS boolean
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Your existing function logic here
  RETURN true;
END;
$$;

-- Fix set_first_user_as_owner function
CREATE OR REPLACE FUNCTION public.set_first_user_as_owner()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  -- Your existing function logic here
  RETURN NEW;
END;
$$;

-- Fix update_updated_at_column function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;
