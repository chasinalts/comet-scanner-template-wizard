-- Setup script for Supabase tables for COMET Scanner Template Wizard

-- Create user_profiles table
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email VARCHAR(255) NOT NULL UNIQUE,
  username VARCHAR(255),
  is_owner BOOLEAN NOT NULL DEFAULT FALSE,
  role VARCHAR(50) NOT NULL DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  last_sign_in_at TIMESTAMP WITH TIME ZONE,
  permissions JSONB
);

-- Create images table
CREATE TABLE IF NOT EXISTS public.images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  bucket_id VARCHAR(255) NOT NULL,
  path VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  size INTEGER NOT NULL,
  mime_type VARCHAR(255) NOT NULL,
  uploaded_by UUID NOT NULL REFERENCES public.user_profiles(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
  metadata JSONB
);

-- Create logs table
CREATE TABLE IF NOT EXISTS public.logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.user_profiles(id) ON DELETE SET NULL,
  action VARCHAR(255) NOT NULL,
  details JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW()
);

-- Create Row Level Security (RLS) policies

-- Enable RLS on all tables
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.logs ENABLE ROW LEVEL SECURITY;

-- User Profiles policies
-- Owners can see all user profiles
CREATE POLICY "Owners can see all user profiles" ON public.user_profiles
  FOR SELECT USING (
    auth.uid() IN (
      SELECT id FROM public.user_profiles WHERE is_owner = TRUE
    )
  );

-- Users can see their own profile
CREATE POLICY "Users can see their own profile" ON public.user_profiles
  FOR SELECT USING (auth.uid() = id);

-- Owners can update any user profile
CREATE POLICY "Owners can update any user profile" ON public.user_profiles
  FOR UPDATE USING (
    auth.uid() IN (
      SELECT id FROM public.user_profiles WHERE is_owner = TRUE
    )
  );

-- Users can update their own profile
CREATE POLICY "Users can update their own profile" ON public.user_profiles
  FOR UPDATE USING (auth.uid() = id);

-- Images policies
-- Anyone can view images
CREATE POLICY "Anyone can view images" ON public.images
  FOR SELECT USING (TRUE);

-- Only owners can insert images
CREATE POLICY "Only owners can insert images" ON public.images
  FOR INSERT WITH CHECK (
    auth.uid() IN (
      SELECT id FROM public.user_profiles WHERE is_owner = TRUE
    )
  );

-- Only owners can update images
CREATE POLICY "Only owners can update images" ON public.images
  FOR UPDATE USING (
    auth.uid() IN (
      SELECT id FROM public.user_profiles WHERE is_owner = TRUE
    )
  );

-- Only owners can delete images
CREATE POLICY "Only owners can delete images" ON public.images
  FOR DELETE USING (
    auth.uid() IN (
      SELECT id FROM public.user_profiles WHERE is_owner = TRUE
    )
  );

-- Logs policies
-- Owners and admins can see all logs
CREATE POLICY "Owners and admins can see all logs" ON public.logs
  FOR SELECT USING (
    auth.uid() IN (
      SELECT id FROM public.user_profiles WHERE is_owner = TRUE OR role = 'admin'
    )
  );

-- Users can see their own logs
CREATE POLICY "Users can see their own logs" ON public.logs
  FOR SELECT USING (auth.uid() = user_id);

-- Anyone can insert logs
CREATE POLICY "Anyone can insert logs" ON public.logs
  FOR INSERT WITH CHECK (TRUE);

-- Create storage buckets if they don't exist
-- Note: This needs to be done through the Supabase API or dashboard
-- The SQL below is just a placeholder for documentation

-- CREATE BUCKET banner;
-- CREATE BUCKET gallery;
-- CREATE BUCKET scanner;

-- Set up storage bucket policies
-- Note: This needs to be done through the Supabase API or dashboard
-- The SQL below is just a placeholder for documentation

-- Allow anyone to read from all buckets
-- ALLOW READ ON banner TO public;
-- ALLOW READ ON gallery TO public;
-- ALLOW READ ON scanner TO public;

-- Allow only owners to write to buckets
-- ALLOW WRITE ON banner TO authenticated WHERE (SELECT is_owner FROM public.user_profiles WHERE id = auth.uid()) = TRUE;
-- ALLOW WRITE ON gallery TO authenticated WHERE (SELECT is_owner FROM public.user_profiles WHERE id = auth.uid()) = TRUE;
-- ALLOW WRITE ON scanner TO authenticated WHERE (SELECT is_owner FROM public.user_profiles WHERE id = auth.uid()) = TRUE;
