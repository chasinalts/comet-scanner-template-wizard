-- User Profiles table
CREATE TABLE user_profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id),
    email TEXT NOT NULL,
    username TEXT,
    is_owner BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    permissions JSONB NOT NULL DEFAULT '{
        "contentManagement": false,
        "userManagement": false,
        "systemConfiguration": false,
        "mediaUploads": false,
        "securitySettings": false,
        "siteCustomization": false
    }'::jsonb
);

-- Enable Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- RLS Policies for user_profiles
CREATE POLICY "Users can view their own profile"
    ON user_profiles FOR SELECT
    USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile"
    ON user_profiles FOR UPDATE
    USING (auth.uid() = id);

-- Storage configuration is handled automatically by Supabase when you create
-- a storage bucket named 'images' through the dashboard or API