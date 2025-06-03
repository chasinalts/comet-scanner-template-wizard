-- Remove RLS policies from site_content table
-- This is safe because admin functionality is password-protected

-- Drop existing RLS policy if it exists
DROP POLICY IF EXISTS "Allow all operations for authenticated users" ON public.site_content;

-- Disable RLS on site_content table
ALTER TABLE public.site_content DISABLE ROW LEVEL SECURITY;

-- Optional: Add comment explaining the security model
COMMENT ON TABLE public.site_content IS 'RLS disabled - security handled by password-protected admin dashboard';