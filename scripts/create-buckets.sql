-- Create banner bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('banner', 'Banner Images', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'])
ON CONFLICT (id) DO UPDATE SET 
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'];

-- Create gallery bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('gallery', 'Gallery Images', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'])
ON CONFLICT (id) DO UPDATE SET 
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'];

-- Create scanner bucket if it doesn't exist
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES ('scanner', 'Scanner Images', true, 5242880, ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'])
ON CONFLICT (id) DO UPDATE SET 
  public = true,
  file_size_limit = 5242880,
  allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'];

-- Enable RLS on storage.objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Create policies for banner bucket
CREATE POLICY "Public Access for banner" ON storage.objects
  FOR SELECT USING (bucket_id = 'banner')
  WITH CHECK (bucket_id = 'banner');

-- Create policies for gallery bucket
CREATE POLICY "Public Access for gallery" ON storage.objects
  FOR SELECT USING (bucket_id = 'gallery')
  WITH CHECK (bucket_id = 'gallery');

-- Create policies for scanner bucket
CREATE POLICY "Public Access for scanner" ON storage.objects
  FOR SELECT USING (bucket_id = 'scanner')
  WITH CHECK (bucket_id = 'scanner');

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

-- Enable RLS on images table
ALTER TABLE public.images ENABLE ROW LEVEL SECURITY;

-- Create policy for public access to images
CREATE POLICY "Public Access for images" ON public.images
  FOR SELECT USING (true);
