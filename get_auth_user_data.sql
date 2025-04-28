-- Function to get auth.users data including raw_user_meta_data
-- This helps with checking owner status directly from auth.users
CREATE OR REPLACE FUNCTION get_auth_user_data(user_id UUID)
RETURNS JSONB
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    user_data JSONB;
BEGIN
    -- Get user data from auth.users
    SELECT 
        jsonb_build_object(
            'id', id,
            'email', email,
            'raw_user_meta_data', raw_user_meta_data
        ) INTO user_data
    FROM auth.users
    WHERE id = user_id;
    
    RETURN user_data;
END;
$$ LANGUAGE plpgsql;

-- Grant execute permission to authenticated users
GRANT EXECUTE ON FUNCTION get_auth_user_data TO authenticated;

-- Create storage policies for the images bucket
-- These need to be run in the Supabase SQL editor

-- 1. Allow authenticated users to view images
CREATE POLICY "Allow authenticated read access"
ON storage.objects FOR SELECT
USING (bucket_id = 'images' AND auth.role() = 'authenticated');

-- 2. Allow owners to upload images
CREATE POLICY "Allow owners to upload images"
ON storage.objects FOR INSERT
WITH CHECK (
    bucket_id = 'images' AND 
    (
        -- Check user_metadata for is_owner flag
        (auth.jwt() ->> 'user_metadata')::jsonb ->> 'is_owner' = 'true'
        OR
        -- Check raw_user_meta_data in auth.users
        EXISTS (
            SELECT 1 FROM auth.users
            WHERE id = auth.uid() AND raw_user_meta_data ->> 'is_owner' = 'true'
        )
    )
);

-- 3. Allow owners to update images
CREATE POLICY "Allow owners to update images"
ON storage.objects FOR UPDATE
USING (
    bucket_id = 'images' AND 
    (
        -- Check user_metadata for is_owner flag
        (auth.jwt() ->> 'user_metadata')::jsonb ->> 'is_owner' = 'true'
        OR
        -- Check raw_user_meta_data in auth.users
        EXISTS (
            SELECT 1 FROM auth.users
            WHERE id = auth.uid() AND raw_user_meta_data ->> 'is_owner' = 'true'
        )
    )
);

-- 4. Allow owners to delete images
CREATE POLICY "Allow owners to delete images"
ON storage.objects FOR DELETE
USING (
    bucket_id = 'images' AND 
    (
        -- Check user_metadata for is_owner flag
        (auth.jwt() ->> 'user_metadata')::jsonb ->> 'is_owner' = 'true'
        OR
        -- Check raw_user_meta_data in auth.users
        EXISTS (
            SELECT 1 FROM auth.users
            WHERE id = auth.uid() AND raw_user_meta_data ->> 'is_owner' = 'true'
        )
    )
);
