
-- Create user_profiles table for Auth0 integration
CREATE TABLE IF NOT EXISTS user_profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  auth0_id TEXT UNIQUE NOT NULL,
  email TEXT UNIQUE NOT NULL,
  username TEXT,
  role TEXT NOT NULL DEFAULT 'user',
  is_owner BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_sign_in_at TIMESTAMP WITH TIME ZONE,
  permissions JSONB DEFAULT '{
    "content_management": false,
    "user_management": false,
    "system_configuration": false,
    "media_uploads": false,
    "security_settings": false,
    "site_customization": false
  }'::jsonb
);

-- Create index on auth0_id for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_auth0_id ON user_profiles(auth0_id);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_user_profiles_email ON user_profiles(email);

-- Enable Row Level Security (RLS)
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow users to read their own profile
CREATE POLICY IF NOT EXISTS user_profiles_select_own ON user_profiles
  FOR SELECT
  USING (auth.uid()::text = auth0_id);

-- Create policy to allow users to update their own profile
CREATE POLICY IF NOT EXISTS user_profiles_update_own ON user_profiles
  FOR UPDATE
  USING (auth.uid()::text = auth0_id);

-- Create policy to allow admins and owners to read all profiles
CREATE POLICY IF NOT EXISTS user_profiles_select_admin ON user_profiles
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE auth0_id = auth.uid()::text
      AND (role = 'admin' OR is_owner = true)
    )
  );

-- Create policy to allow owners to update all profiles
CREATE POLICY IF NOT EXISTS user_profiles_update_owner ON user_profiles
  FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE auth0_id = auth.uid()::text
      AND is_owner = true
    )
  );

-- Create policy to allow owners to insert new profiles
CREATE POLICY IF NOT EXISTS user_profiles_insert_owner ON user_profiles
  FOR INSERT
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM user_profiles
      WHERE auth0_id = auth.uid()::text
      AND is_owner = true
    )
  );

-- Create policy to allow service role to manage all profiles
CREATE POLICY IF NOT EXISTS user_profiles_service_role ON user_profiles
  FOR ALL
  USING (auth.jwt() ? 'service_role');

-- Create policy to allow anonymous users to create their own profile
CREATE POLICY IF NOT EXISTS user_profiles_insert_self ON user_profiles
  FOR INSERT
  WITH CHECK (auth0_id = auth.uid()::text);

-- Grant permissions to authenticated users
GRANT SELECT, UPDATE ON user_profiles TO authenticated;

-- Grant permissions to anon users (for initial profile creation)
GRANT INSERT ON user_profiles TO anon;
