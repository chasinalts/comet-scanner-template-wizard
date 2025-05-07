-- SQL script to fix function search path warnings
-- Run this in the Supabase SQL Editor: https://app.supabase.com/project/hpbfipnhqakrhlnhluze/sql

-- First, let's get the function definitions to preserve their logic
-- We'll use this information to recreate them with the search_path parameter

-- 1. Fix signup_user function
DO $$
DECLARE
    func_body text;
    func_args text;
    func_returns text;
    func_language text;
    func_volatility text;
    func_security text;
BEGIN
    -- Get function details
    SELECT
        pg_get_functiondef(p.oid),
        pg_get_function_arguments(p.oid),
        pg_get_function_result(p.oid),
        l.lanname,
        p.provolatile,
        CASE WHEN p.prosecdef THEN 'SECURITY DEFINER' ELSE 'SECURITY INVOKER' END
    INTO
        func_body,
        func_args,
        func_returns,
        func_language,
        func_volatility,
        func_security
    FROM
        pg_proc p
        JOIN pg_namespace n ON p.pronamespace = n.oid
        JOIN pg_language l ON p.prolang = l.oid
    WHERE
        n.nspname = 'public'
        AND p.proname = 'signup_user';

    -- Extract function body from the full definition
    func_body := substring(func_body FROM '^\s*CREATE\s+(?:OR\s+REPLACE\s+)?FUNCTION\s+(?:[^\s(]+)\s*\([^)]*\)\s*(?:RETURNS\s+[^{]+)\s*AS\s*\$[^$]*\$(.*)\$[^$]*\$' FOR '$1');

    -- If function exists, recreate it with search_path
    IF func_body IS NOT NULL THEN
        EXECUTE format('
            CREATE OR REPLACE FUNCTION public.signup_user(%s)
            RETURNS %s
            LANGUAGE %s
            %s
            SET search_path = public
            AS $func$
            %s
            $func$;
        ', func_args, func_returns, func_language, func_security, func_body);
        RAISE NOTICE 'Fixed search_path for function public.signup_user';
    ELSE
        -- Create a placeholder function if it doesn't exist
        EXECUTE '
            CREATE OR REPLACE FUNCTION public.signup_user()
            RETURNS trigger
            LANGUAGE plpgsql
            SECURITY DEFINER
            SET search_path = public
            AS $func$
            BEGIN
                RETURN NEW;
            END;
            $func$;
        ';
        RAISE NOTICE 'Created placeholder for function public.signup_user';
    END IF;
END
$$;

-- 2. Fix handle_new_user function
DO $$
DECLARE
    func_body text;
    func_args text;
    func_returns text;
    func_language text;
    func_volatility text;
    func_security text;
BEGIN
    -- Get function details
    SELECT
        pg_get_functiondef(p.oid),
        pg_get_function_arguments(p.oid),
        pg_get_function_result(p.oid),
        l.lanname,
        p.provolatile,
        CASE WHEN p.prosecdef THEN 'SECURITY DEFINER' ELSE 'SECURITY INVOKER' END
    INTO
        func_body,
        func_args,
        func_returns,
        func_language,
        func_volatility,
        func_security
    FROM
        pg_proc p
        JOIN pg_namespace n ON p.pronamespace = n.oid
        JOIN pg_language l ON p.prolang = l.oid
    WHERE
        n.nspname = 'public'
        AND p.proname = 'handle_new_user';

    -- Extract function body from the full definition
    func_body := substring(func_body FROM '^\s*CREATE\s+(?:OR\s+REPLACE\s+)?FUNCTION\s+(?:[^\s(]+)\s*\([^)]*\)\s*(?:RETURNS\s+[^{]+)\s*AS\s*\$[^$]*\$(.*)\$[^$]*\$' FOR '$1');

    -- If function exists, recreate it with search_path
    IF func_body IS NOT NULL THEN
        EXECUTE format('
            CREATE OR REPLACE FUNCTION public.handle_new_user(%s)
            RETURNS %s
            LANGUAGE %s
            %s
            SET search_path = public
            AS $func$
            %s
            $func$;
        ', func_args, func_returns, func_language, func_security, func_body);
        RAISE NOTICE 'Fixed search_path for function public.handle_new_user';
    ELSE
        -- Create a placeholder function if it doesn't exist
        EXECUTE '
            CREATE OR REPLACE FUNCTION public.handle_new_user()
            RETURNS trigger
            LANGUAGE plpgsql
            SECURITY DEFINER
            SET search_path = public
            AS $func$
            BEGIN
                RETURN NEW;
            END;
            $func$;
        ';
        RAISE NOTICE 'Created placeholder for function public.handle_new_user';
    END IF;
END
$$;

-- 3. Fix set_updated_at function
DO $$
DECLARE
    func_body text;
    func_args text;
    func_returns text;
    func_language text;
    func_volatility text;
    func_security text;
BEGIN
    -- Get function details
    SELECT
        pg_get_functiondef(p.oid),
        pg_get_function_arguments(p.oid),
        pg_get_function_result(p.oid),
        l.lanname,
        p.provolatile,
        CASE WHEN p.prosecdef THEN 'SECURITY DEFINER' ELSE 'SECURITY INVOKER' END
    INTO
        func_body,
        func_args,
        func_returns,
        func_language,
        func_volatility,
        func_security
    FROM
        pg_proc p
        JOIN pg_namespace n ON p.pronamespace = n.oid
        JOIN pg_language l ON p.prolang = l.oid
    WHERE
        n.nspname = 'public'
        AND p.proname = 'set_updated_at';

    -- Extract function body from the full definition
    func_body := substring(func_body FROM '^\s*CREATE\s+(?:OR\s+REPLACE\s+)?FUNCTION\s+(?:[^\s(]+)\s*\([^)]*\)\s*(?:RETURNS\s+[^{]+)\s*AS\s*\$[^$]*\$(.*)\$[^$]*\$' FOR '$1');

    -- If function exists, recreate it with search_path
    IF func_body IS NOT NULL THEN
        EXECUTE format('
            CREATE OR REPLACE FUNCTION public.set_updated_at(%s)
            RETURNS %s
            LANGUAGE %s
            %s
            SET search_path = public
            AS $func$
            %s
            $func$;
        ', func_args, func_returns, func_language, func_security, func_body);
        RAISE NOTICE 'Fixed search_path for function public.set_updated_at';
    ELSE
        -- Create a placeholder function if it doesn't exist
        EXECUTE '
            CREATE OR REPLACE FUNCTION public.set_updated_at()
            RETURNS trigger
            LANGUAGE plpgsql
            SECURITY DEFINER
            SET search_path = public
            AS $func$
            BEGIN
                NEW.updated_at = now();
                RETURN NEW;
            END;
            $func$;
        ';
        RAISE NOTICE 'Created placeholder for function public.set_updated_at';
    END IF;
END
$$;

-- 4. Fix create_profile_for_new_user function
DO $$
DECLARE
    func_body text;
    func_args text;
    func_returns text;
    func_language text;
    func_volatility text;
    func_security text;
BEGIN
    -- Get function details
    SELECT
        pg_get_functiondef(p.oid),
        pg_get_function_arguments(p.oid),
        pg_get_function_result(p.oid),
        l.lanname,
        p.provolatile,
        CASE WHEN p.prosecdef THEN 'SECURITY DEFINER' ELSE 'SECURITY INVOKER' END
    INTO
        func_body,
        func_args,
        func_returns,
        func_language,
        func_volatility,
        func_security
    FROM
        pg_proc p
        JOIN pg_namespace n ON p.pronamespace = n.oid
        JOIN pg_language l ON p.prolang = l.oid
    WHERE
        n.nspname = 'public'
        AND p.proname = 'create_profile_for_new_user';

    -- Extract function body from the full definition
    func_body := substring(func_body FROM '^\s*CREATE\s+(?:OR\s+REPLACE\s+)?FUNCTION\s+(?:[^\s(]+)\s*\([^)]*\)\s*(?:RETURNS\s+[^{]+)\s*AS\s*\$[^$]*\$(.*)\$[^$]*\$' FOR '$1');

    -- If function exists, recreate it with search_path
    IF func_body IS NOT NULL THEN
        EXECUTE format('
            CREATE OR REPLACE FUNCTION public.create_profile_for_new_user(%s)
            RETURNS %s
            LANGUAGE %s
            %s
            SET search_path = public
            AS $func$
            %s
            $func$;
        ', func_args, func_returns, func_language, func_security, func_body);
        RAISE NOTICE 'Fixed search_path for function public.create_profile_for_new_user';
    ELSE
        -- Create a placeholder function if it doesn't exist
        EXECUTE '
            CREATE OR REPLACE FUNCTION public.create_profile_for_new_user()
            RETURNS trigger
            LANGUAGE plpgsql
            SECURITY DEFINER
            SET search_path = public
            AS $func$
            BEGIN
                RETURN NEW;
            END;
            $func$;
        ';
        RAISE NOTICE 'Created placeholder for function public.create_profile_for_new_user';
    END IF;
END
$$;

-- 5. Fix is_owner function
DO $$
DECLARE
    func_body text;
    func_args text;
    func_returns text;
    func_language text;
    func_volatility text;
    func_security text;
BEGIN
    -- Get function details
    SELECT
        pg_get_functiondef(p.oid),
        pg_get_function_arguments(p.oid),
        pg_get_function_result(p.oid),
        l.lanname,
        p.provolatile,
        CASE WHEN p.prosecdef THEN 'SECURITY DEFINER' ELSE 'SECURITY INVOKER' END
    INTO
        func_body,
        func_args,
        func_returns,
        func_language,
        func_volatility,
        func_security
    FROM
        pg_proc p
        JOIN pg_namespace n ON p.pronamespace = n.oid
        JOIN pg_language l ON p.prolang = l.oid
    WHERE
        n.nspname = 'public'
        AND p.proname = 'is_owner';

    -- Extract function body from the full definition
    func_body := substring(func_body FROM '^\s*CREATE\s+(?:OR\s+REPLACE\s+)?FUNCTION\s+(?:[^\s(]+)\s*\([^)]*\)\s*(?:RETURNS\s+[^{]+)\s*AS\s*\$[^$]*\$(.*)\$[^$]*\$' FOR '$1');

    -- If function exists, recreate it with search_path
    IF func_body IS NOT NULL THEN
        EXECUTE format('
            CREATE OR REPLACE FUNCTION public.is_owner(%s)
            RETURNS %s
            LANGUAGE %s
            %s
            SET search_path = public
            AS $func$
            %s
            $func$;
        ', func_args, func_returns, func_language, func_security, func_body);
        RAISE NOTICE 'Fixed search_path for function public.is_owner';
    ELSE
        -- Create a placeholder function if it doesn't exist
        EXECUTE '
            CREATE OR REPLACE FUNCTION public.is_owner()
            RETURNS boolean
            LANGUAGE plpgsql
            SECURITY DEFINER
            SET search_path = public
            AS $func$
            BEGIN
                RETURN true;
            END;
            $func$;
        ';
        RAISE NOTICE 'Created placeholder for function public.is_owner';
    END IF;
END
$$;

-- 6. Fix set_first_user_as_owner function
DO $$
DECLARE
    func_body text;
    func_args text;
    func_returns text;
    func_language text;
    func_volatility text;
    func_security text;
BEGIN
    -- Get function details
    SELECT
        pg_get_functiondef(p.oid),
        pg_get_function_arguments(p.oid),
        pg_get_function_result(p.oid),
        l.lanname,
        p.provolatile,
        CASE WHEN p.prosecdef THEN 'SECURITY DEFINER' ELSE 'SECURITY INVOKER' END
    INTO
        func_body,
        func_args,
        func_returns,
        func_language,
        func_volatility,
        func_security
    FROM
        pg_proc p
        JOIN pg_namespace n ON p.pronamespace = n.oid
        JOIN pg_language l ON p.prolang = l.oid
    WHERE
        n.nspname = 'public'
        AND p.proname = 'set_first_user_as_owner';

    -- Extract function body from the full definition
    func_body := substring(func_body FROM '^\s*CREATE\s+(?:OR\s+REPLACE\s+)?FUNCTION\s+(?:[^\s(]+)\s*\([^)]*\)\s*(?:RETURNS\s+[^{]+)\s*AS\s*\$[^$]*\$(.*)\$[^$]*\$' FOR '$1');

    -- If function exists, recreate it with search_path
    IF func_body IS NOT NULL THEN
        EXECUTE format('
            CREATE OR REPLACE FUNCTION public.set_first_user_as_owner(%s)
            RETURNS %s
            LANGUAGE %s
            %s
            SET search_path = public
            AS $func$
            %s
            $func$;
        ', func_args, func_returns, func_language, func_security, func_body);
        RAISE NOTICE 'Fixed search_path for function public.set_first_user_as_owner';
    ELSE
        -- Create a placeholder function if it doesn't exist
        EXECUTE '
            CREATE OR REPLACE FUNCTION public.set_first_user_as_owner()
            RETURNS trigger
            LANGUAGE plpgsql
            SECURITY DEFINER
            SET search_path = public
            AS $func$
            BEGIN
                RETURN NEW;
            END;
            $func$;
        ';
        RAISE NOTICE 'Created placeholder for function public.set_first_user_as_owner';
    END IF;
END
$$;

-- 7. Fix update_updated_at_column function
DO $$
DECLARE
    func_body text;
    func_args text;
    func_returns text;
    func_language text;
    func_volatility text;
    func_security text;
BEGIN
    -- Get function details
    SELECT
        pg_get_functiondef(p.oid),
        pg_get_function_arguments(p.oid),
        pg_get_function_result(p.oid),
        l.lanname,
        p.provolatile,
        CASE WHEN p.prosecdef THEN 'SECURITY DEFINER' ELSE 'SECURITY INVOKER' END
    INTO
        func_body,
        func_args,
        func_returns,
        func_language,
        func_volatility,
        func_security
    FROM
        pg_proc p
        JOIN pg_namespace n ON p.pronamespace = n.oid
        JOIN pg_language l ON p.prolang = l.oid
    WHERE
        n.nspname = 'public'
        AND p.proname = 'update_updated_at_column';

    -- Extract function body from the full definition
    func_body := substring(func_body FROM '^\s*CREATE\s+(?:OR\s+REPLACE\s+)?FUNCTION\s+(?:[^\s(]+)\s*\([^)]*\)\s*(?:RETURNS\s+[^{]+)\s*AS\s*\$[^$]*\$(.*)\$[^$]*\$' FOR '$1');

    -- If function exists, recreate it with search_path
    IF func_body IS NOT NULL THEN
        EXECUTE format('
            CREATE OR REPLACE FUNCTION public.update_updated_at_column(%s)
            RETURNS %s
            LANGUAGE %s
            %s
            SET search_path = public
            AS $func$
            %s
            $func$;
        ', func_args, func_returns, func_language, func_security, func_body);
        RAISE NOTICE 'Fixed search_path for function public.update_updated_at_column';
    ELSE
        -- Create a placeholder function if it doesn't exist
        EXECUTE '
            CREATE OR REPLACE FUNCTION public.update_updated_at_column()
            RETURNS trigger
            LANGUAGE plpgsql
            SECURITY DEFINER
            SET search_path = public
            AS $func$
            BEGIN
                NEW.updated_at = now();
                RETURN NEW;
            END;
            $func$;
        ';
        RAISE NOTICE 'Created placeholder for function public.update_updated_at_column';
    END IF;
END
$$;

-- 8. Enable leaked password protection and MFA options
DO $$
BEGIN
    -- Update auth.config to enable security features
    UPDATE auth.config
    SET
        enable_hibp_check = true,
        enable_totp_mfa = true,
        enable_sms_mfa = true;

    RAISE NOTICE 'Enabled leaked password protection and MFA options';
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Could not update auth.config: %', SQLERRM;
END
$$;

-- 9. Update CORS configuration in auth.config
DO $$
BEGIN
    -- Update auth.config to set CORS settings
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

    RAISE NOTICE 'Updated CORS configuration in auth.config';
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Could not update CORS configuration in auth.config: %', SQLERRM;
END
$$;

-- 10. Create or update storage buckets with CORS settings
DO $$
BEGIN
    -- Create or update banner bucket
    BEGIN
        INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types, cors_origins)
        VALUES (
            'banner',
            'banner',
            true,
            5242880,
            ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
            ARRAY[
                'http://localhost:3000',
                'http://localhost:5173',
                'https://cometscanner.netlify.app',
                'https://680f06902e429800091e81e5--cometscanner.netlify.app'
            ]::text[]
        );
        RAISE NOTICE 'Created banner bucket';
    EXCEPTION
        WHEN unique_violation THEN
            UPDATE storage.buckets
            SET
                public = true,
                file_size_limit = 5242880,
                allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
                cors_origins = ARRAY[
                    'http://localhost:3000',
                    'http://localhost:5173',
                    'https://cometscanner.netlify.app',
                    'https://680f06902e429800091e81e5--cometscanner.netlify.app'
                ]::text[]
            WHERE id = 'banner';
            RAISE NOTICE 'Updated banner bucket';
        WHEN OTHERS THEN
            RAISE NOTICE 'Error with banner bucket: %', SQLERRM;
    END;

    -- Create or update gallery bucket
    BEGIN
        INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types, cors_origins)
        VALUES (
            'gallery',
            'gallery',
            true,
            5242880,
            ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
            ARRAY[
                'http://localhost:3000',
                'http://localhost:5173',
                'https://cometscanner.netlify.app',
                'https://680f06902e429800091e81e5--cometscanner.netlify.app'
            ]::text[]
        );
        RAISE NOTICE 'Created gallery bucket';
    EXCEPTION
        WHEN unique_violation THEN
            UPDATE storage.buckets
            SET
                public = true,
                file_size_limit = 5242880,
                allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
                cors_origins = ARRAY[
                    'http://localhost:3000',
                    'http://localhost:5173',
                    'https://cometscanner.netlify.app',
                    'https://680f06902e429800091e81e5--cometscanner.netlify.app'
                ]::text[]
            WHERE id = 'gallery';
            RAISE NOTICE 'Updated gallery bucket';
        WHEN OTHERS THEN
            RAISE NOTICE 'Error with gallery bucket: %', SQLERRM;
    END;

    -- Create or update scanner bucket
    BEGIN
        INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types, cors_origins)
        VALUES (
            'scanner',
            'scanner',
            true,
            5242880,
            ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
            ARRAY[
                'http://localhost:3000',
                'http://localhost:5173',
                'https://cometscanner.netlify.app',
                'https://680f06902e429800091e81e5--cometscanner.netlify.app'
            ]::text[]
        );
        RAISE NOTICE 'Created scanner bucket';
    EXCEPTION
        WHEN unique_violation THEN
            UPDATE storage.buckets
            SET
                public = true,
                file_size_limit = 5242880,
                allowed_mime_types = ARRAY['image/png', 'image/jpeg', 'image/gif', 'image/webp'],
                cors_origins = ARRAY[
                    'http://localhost:3000',
                    'http://localhost:5173',
                    'https://cometscanner.netlify.app',
                    'https://680f06902e429800091e81e5--cometscanner.netlify.app'
                ]::text[]
            WHERE id = 'scanner';
            RAISE NOTICE 'Updated scanner bucket';
        WHEN OTHERS THEN
            RAISE NOTICE 'Error with scanner bucket: %', SQLERRM;
    END;
END
$$;

-- 11. Create storage policies for each bucket
DO $$
BEGIN
    -- For banner bucket
    BEGIN
        DROP POLICY IF EXISTS "Public Access for banner" ON storage.objects;
        CREATE POLICY "Public Access for banner" ON storage.objects
            FOR SELECT USING (bucket_id = 'banner');
        RAISE NOTICE 'Created policy for banner bucket';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating policy for banner bucket: %', SQLERRM;
    END;

    -- For gallery bucket
    BEGIN
        DROP POLICY IF EXISTS "Public Access for gallery" ON storage.objects;
        CREATE POLICY "Public Access for gallery" ON storage.objects
            FOR SELECT USING (bucket_id = 'gallery');
        RAISE NOTICE 'Created policy for gallery bucket';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating policy for gallery bucket: %', SQLERRM;
    END;

    -- For scanner bucket
    BEGIN
        DROP POLICY IF EXISTS "Public Access for scanner" ON storage.objects;
        CREATE POLICY "Public Access for scanner" ON storage.objects
            FOR SELECT USING (bucket_id = 'scanner');
        RAISE NOTICE 'Created policy for scanner bucket';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating policy for scanner bucket: %', SQLERRM;
    END;

    -- Allow authenticated users to upload to buckets
    BEGIN
        DROP POLICY IF EXISTS "Authenticated users can upload" ON storage.objects;
        CREATE POLICY "Authenticated users can upload" ON storage.objects
            FOR INSERT WITH CHECK (auth.role() = 'authenticated');
        RAISE NOTICE 'Created policy for authenticated users to upload';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating policy for authenticated users to upload: %', SQLERRM;
    END;

    -- Allow authenticated users to update their own objects
    BEGIN
        DROP POLICY IF EXISTS "Authenticated users can update their own objects" ON storage.objects;
        CREATE POLICY "Authenticated users can update their own objects" ON storage.objects
            FOR UPDATE USING (auth.uid() = owner) WITH CHECK (auth.uid() = owner);
        RAISE NOTICE 'Created policy for authenticated users to update their own objects';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating policy for authenticated users to update their own objects: %', SQLERRM;
    END;

    -- Allow authenticated users to delete their own objects
    BEGIN
        DROP POLICY IF EXISTS "Authenticated users can delete their own objects" ON storage.objects;
        CREATE POLICY "Authenticated users can delete their own objects" ON storage.objects
            FOR DELETE USING (auth.uid() = owner);
        RAISE NOTICE 'Created policy for authenticated users to delete their own objects';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating policy for authenticated users to delete their own objects: %', SQLERRM;
    END;
END
$$;

-- 12. Create images table if it doesn't exist
DO $$
BEGIN
    BEGIN
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
        RAISE NOTICE 'Created images table';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating images table: %', SQLERRM;
    END;

    -- Enable Row Level Security
    BEGIN
        ALTER TABLE public.images ENABLE ROW LEVEL SECURITY;
        RAISE NOTICE 'Enabled Row Level Security on images table';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error enabling Row Level Security on images table: %', SQLERRM;
    END;

    -- Drop existing policies if they exist to avoid errors
    BEGIN
        DROP POLICY IF EXISTS "Public Access for images" ON public.images;
        DROP POLICY IF EXISTS "Users can insert their own images" ON public.images;
        DROP POLICY IF EXISTS "Users can update their own images" ON public.images;
        DROP POLICY IF EXISTS "Users can delete their own images" ON public.images;
        RAISE NOTICE 'Dropped existing policies on images table';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error dropping existing policies on images table: %', SQLERRM;
    END;

    -- Create policy for public access to images (read-only)
    BEGIN
        CREATE POLICY "Public Access for images" ON public.images
            FOR SELECT USING (true);
        RAISE NOTICE 'Created policy for public access to images';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating policy for public access to images: %', SQLERRM;
    END;

    -- Create policy for authenticated users to insert their own images
    BEGIN
        CREATE POLICY "Users can insert their own images" ON public.images
            FOR INSERT WITH CHECK (auth.uid() = owner_id OR owner_id IS NULL);
        RAISE NOTICE 'Created policy for users to insert their own images';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating policy for users to insert their own images: %', SQLERRM;
    END;

    -- Create policy for authenticated users to update their own images
    BEGIN
        CREATE POLICY "Users can update their own images" ON public.images
            FOR UPDATE USING (auth.uid() = owner_id OR owner_id IS NULL)
            WITH CHECK (auth.uid() = owner_id OR owner_id IS NULL);
        RAISE NOTICE 'Created policy for users to update their own images';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating policy for users to update their own images: %', SQLERRM;
    END;

    -- Create policy for authenticated users to delete their own images
    BEGIN
        CREATE POLICY "Users can delete their own images" ON public.images
            FOR DELETE USING (auth.uid() = owner_id OR owner_id IS NULL);
        RAISE NOTICE 'Created policy for users to delete their own images';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating policy for users to delete their own images: %', SQLERRM;
    END;

    -- Create index on image_type for faster queries
    BEGIN
        DROP INDEX IF EXISTS idx_images_image_type;
        CREATE INDEX idx_images_image_type ON public.images(image_type);
        RAISE NOTICE 'Created index on image_type';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating index on image_type: %', SQLERRM;
    END;

    -- Create index on owner_id for faster queries
    BEGIN
        DROP INDEX IF EXISTS idx_images_owner_id;
        CREATE INDEX idx_images_owner_id ON public.images(owner_id);
        RAISE NOTICE 'Created index on owner_id';
    EXCEPTION
        WHEN OTHERS THEN
            RAISE NOTICE 'Error creating index on owner_id: %', SQLERRM;
    END;
END
$$;
