# Row Level Security (RLS) Removal

## Overview
This project has removed Row Level Security (RLS) policies from all database tables because the application uses password-protected admin pages for access control.

## Changes Made

### 1. Modified Files
- `add_site_content_table.sql` - Commented out RLS enablement and policy creation
- `remove_rls_policies.sql` - Script to remove existing RLS policies
- `migrations/20250130_remove_rls_policies.sql` - Migration script for production

### 2. Tables Affected
- `public.site_content` - RLS disabled, policy removed

## How to Apply Changes

### Option 1: Using Supabase CLI (Recommended)
```bash
# Apply the migration
supabase db push

# Or run the specific migration
supabase migration up
```

### Option 2: Manual Application via Supabase Dashboard
1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Run the contents of `remove_rls_policies.sql`

### Option 3: Direct SQL Execution
```sql
-- Remove RLS policy
DROP POLICY IF EXISTS "Allow all operations for authenticated users" ON public.site_content;

-- Disable RLS
ALTER TABLE public.site_content DISABLE ROW LEVEL SECURITY;
```

## Security Considerations

### Why RLS Was Removed
- Admin functionality is protected by password authentication
- Application-level access control is sufficient
- Simplifies database operations and reduces complexity

### Current Security Model
- Password-protected admin dashboard
- Environment variable configuration
- Netlify deployment security

## Verification

To verify RLS has been removed:

```sql
-- Check RLS status
SELECT schemaname, tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' AND tablename = 'site_content';

-- Should return rowsecurity = false
```

## Rollback (If Needed)

To re-enable RLS:

```sql
-- Re-enable RLS
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Recreate policy
CREATE POLICY "Allow all operations for authenticated users" ON public.site_content
    FOR ALL USING (auth.role() = 'authenticated');
```