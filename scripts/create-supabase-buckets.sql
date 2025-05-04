-- SQL script to create storage buckets in Supabase
-- Run this in the Supabase SQL Editor: https://app.supabase.com/project/oomnadogzgpoaouireog/editor

-- Create the storage.buckets table if it doesn't exist (should already exist in Supabase)
CREATE TABLE IF NOT EXISTS storage.buckets (
  id text NOT NULL,
  name text NOT NULL,
  owner uuid,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  public boolean DEFAULT false,
  avif_autodetection boolean DEFAULT false,
  file_size_limit bigint,
  allowed_mime_types text[],
  PRIMARY KEY (id)
);

-- Create banner bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('banner', 'banner', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'])
ON CONFLICT (id) DO UPDATE SET 
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'];

-- Create gallery bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('gallery', 'gallery', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'])
ON CONFLICT (id) DO UPDATE SET 
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'];

-- Create scanner bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('scanner', 'scanner', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'])
ON CONFLICT (id) DO UPDATE SET 
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'];

-- Set up storage policies to allow public access
-- For banner bucket
CREATE POLICY "Public Access for banner" ON storage.objects
  FOR SELECT USING (bucket_id = 'banner');

-- For gallery bucket
CREATE POLICY "Public Access for gallery" ON storage.objects
  FOR SELECT USING (bucket_id = 'gallery');

-- For scanner bucket
CREATE POLICY "Public Access for scanner" ON storage.objects
  FOR SELECT USING (bucket_id = 'scanner');

-- Set up storage policies to allow authenticated users to upload
-- For banner bucket
CREATE POLICY "Authenticated users can upload to banner" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'banner' AND auth.role() = 'authenticated');

-- For gallery bucket
CREATE POLICY "Authenticated users can upload to gallery" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'gallery' AND auth.role() = 'authenticated');

-- For scanner bucket
CREATE POLICY "Authenticated users can upload to scanner" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'scanner' AND auth.role() = 'authenticated');

-- Set up storage policies to allow authenticated users to update their own uploads
-- For banner bucket
CREATE POLICY "Authenticated users can update their own uploads in banner" ON storage.objects
  FOR UPDATE USING (bucket_id = 'banner' AND auth.uid() = owner);

-- For gallery bucket
CREATE POLICY "Authenticated users can update their own uploads in gallery" ON storage.objects
  FOR UPDATE USING (bucket_id = 'gallery' AND auth.uid() = owner);

-- For scanner bucket
CREATE POLICY "Authenticated users can update their own uploads in scanner" ON storage.objects
  FOR UPDATE USING (bucket_id = 'scanner' AND auth.uid() = owner);

-- Set up storage policies to allow authenticated users to delete their own uploads
-- For banner bucket
CREATE POLICY "Authenticated users can delete their own uploads in banner" ON storage.objects
  FOR DELETE USING (bucket_id = 'banner' AND auth.uid() = owner);

-- For gallery bucket
CREATE POLICY "Authenticated users can delete their own uploads in gallery" ON storage.objects
  FOR DELETE USING (bucket_id = 'gallery' AND auth.uid() = owner);

-- For scanner bucket
CREATE POLICY "Authenticated users can delete their own uploads in scanner" ON storage.objects
  FOR DELETE USING (bucket_id = 'scanner' AND auth.uid() = owner);
