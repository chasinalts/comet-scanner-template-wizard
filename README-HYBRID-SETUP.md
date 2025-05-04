# COMET Scanner Hybrid Appwrite/Supabase Setup

This project uses a hybrid approach with Appwrite for authentication and its single database, while using Supabase for additional database needs and storage.

## ⚠️ Important: Node.js Version Requirement

This project requires Node.js v18. It will not work correctly with Node.js v22 or v23.

To ensure you're using Node.js v18:

```bash
# If you have nvm installed
source scripts/use-node18.sh

# Verify the Node.js version
node -v  # Should show v18.x.x
```

## Quick Start

1. Clone the repository
2. Switch to Node.js v18 (see above)
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the hybrid setup script:
   ```bash
   npm run hybrid:setup
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

## Why Hybrid?

- **Appwrite** provides excellent authentication and a single database in the free tier
- **Supabase** offers generous storage and database capabilities in its free tier
- Together, they provide a powerful, cost-effective backend solution

## What Goes Where?

### Appwrite
- Authentication
- User profiles
- Core content

### Supabase
- Extended content
- All image storage
- Logs and analytics
- Any additional data

## Setup Details

For detailed setup instructions, see the [Hybrid Setup Guide](HYBRID-SETUP-GUIDE.md).

## Environment Variables

Your `.env` file should contain:

```
# Appwrite Configuration
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your-project-id
VITE_APPWRITE_DATABASE_ID=your-database-id
APPWRITE_API_KEY=your-api-key

# Supabase Configuration
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-supabase-service-role-key
```

## Available Scripts

- `npm run hybrid:setup` - Set up the hybrid environment
- `npm run appwrite:setup-resources-limited` - Set up Appwrite resources
- `npm run supabase:setup` - Set up Supabase resources
- `npm run appwrite:update-env` - Update Appwrite environment variables
- `npm run supabase:update-env` - Update Supabase environment variables

## Troubleshooting

If you encounter issues:

1. Check your environment variables
2. Verify your Appwrite and Supabase credentials
3. Check the browser console for specific error messages
4. Refer to the [Hybrid Setup Guide](HYBRID-SETUP-GUIDE.md) for more details
