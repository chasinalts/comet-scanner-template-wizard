-- SQL script to set up CORS in Supabase
-- Run this in the Supabase SQL Editor: https://app.supabase.com/project/hpbfipnhqakrhlnhluze/sql

-- Update CORS configuration in auth.config
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

-- Create or update storage buckets with CORS settings
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

-- Create images table if it doesn't exist
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

-- Enable Row Level Security
ALTER TABLE public.images ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to avoid errors
DROP POLICY IF EXISTS "Public Access for images" ON public.images;
DROP POLICY IF EXISTS "Users can insert their own images" ON public.images;
DROP POLICY IF EXISTS "Users can update their own images" ON public.images;
DROP POLICY IF EXISTS "Users can delete their own images" ON public.images;

-- Create policy for public access to images (read-only)
CREATE POLICY "Public Access for images" ON public.images
  FOR SELECT USING (true);

-- Create policy for authenticated users to insert their own images
CREATE POLICY "Users can insert their own images" ON public.images
  FOR INSERT WITH CHECK (auth.uid() = owner_id OR owner_id IS NULL);

-- Create policy for authenticated users to update their own images
CREATE POLICY "Users can update their own images" ON public.images
  FOR UPDATE USING (auth.uid() = owner_id OR owner_id IS NULL) 
  WITH CHECK (auth.uid() = owner_id OR owner_id IS NULL);

-- Create policy for authenticated users to delete their own images
CREATE POLICY "Users can delete their own images" ON public.images
  FOR DELETE USING (auth.uid() = owner_id OR owner_id IS NULL);

-- Create index on image_type for faster queries
DROP INDEX IF EXISTS idx_images_image_type;
CREATE INDEX idx_images_image_type ON public.images(image_type);

-- Create index on owner_id for faster queries
DROP INDEX IF EXISTS idx_images_owner_id;
CREATE INDEX idx_images_owner_id ON public.images(owner_id);

-- Create storage policies for each bucket
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

-- Allow authenticated users to upload to buckets
DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;
CREATE POLICY "Authenticated users can upload" ON storage.objects
  FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Allow authenticated users to update their own objects
DROP POLICY IF EXISTS "Authenticated users can update their own objects" ON storage.objects;
CREATE POLICY "Authenticated users can update their own objects" ON storage.objects
  FOR UPDATE USING (auth.uid() = owner) WITH CHECK (auth.uid() = owner);

-- Allow authenticated users to delete their own objects
DROP POLICY IF EXISTS "Authenticated users can delete their own objects" ON storage.objects;
CREATE POLICY "Authenticated users can delete their own objects" ON storage.objects
  FOR DELETE USING (auth.uid() = owner);
