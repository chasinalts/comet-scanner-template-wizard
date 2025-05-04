#!/bin/sh
# Usage: ./scripts/create-supabase-buckets.sh

set -e

npx supabase storage create-bucket banner --public
npx supabase storage create-bucket gallery --public
npx supabase storage create-bucket scanner --public

echo "✅ All buckets created and set to public."
