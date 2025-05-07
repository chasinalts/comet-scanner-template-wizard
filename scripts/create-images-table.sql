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
