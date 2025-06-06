# Supabase SSR Setup for Next.js App Router

This project now includes Supabase Server-Side Rendering (SSR) support for the Next.js App Router. This setup provides better performance, SEO, and security compared to client-only implementations.

## Files Added

### 1. `/src/utils/supabase/server.ts`
- Server-side Supabase client for Server Components and Server Actions
- Uses cookies for authentication state management
- Handles session refresh automatically

### 2. `/src/utils/supabase/client.ts`
- Browser-side Supabase client for Client Components
- Optimized for client-side interactions
- Maintains session state in the browser

### 3. `/src/utils/supabase/middleware.ts`
- Middleware helper for authentication
- Refreshes user sessions automatically
- Handles cookie management across requests

### 4. `/middleware.ts` (Project Root)
- Next.js middleware that runs on every request
- Automatically refreshes Supabase sessions
- Ensures authentication state is maintained

### 5. `/src/app/example/page.tsx`
- Example Server Component showing server-side data fetching
- Demonstrates how to use the server client
- Replace with your actual data fetching logic

## Usage Examples

### Server Components (Recommended for data fetching)

```tsx
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function ServerPage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const { data: users } = await supabase.from('users').select()
  
  return (
    <div>
      {users?.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  )
}
```

### Client Components (For interactive features)

```tsx
'use client'

import { createClient } from '@/utils/supabase/client'
import { useEffect, useState } from 'react'

export default function ClientComponent() {
  const [user, setUser] = useState(null)
  const supabase = createClient()
  
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])
  
  return <div>User: {user?.email}</div>
}
```

### Server Actions

```tsx
import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export async function createTodo(formData: FormData) {
  'use server'
  
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)
  
  const title = formData.get('title') as string
  
  await supabase.from('todos').insert({ title })
  
  revalidatePath('/')
}
```

## Environment Variables

Make sure your `.env.local` file contains:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Benefits of This Setup

1. **Better SEO**: Data is fetched server-side, improving search engine indexing
2. **Faster Initial Load**: Content is rendered on the server
3. **Improved Security**: Sensitive operations can be performed server-side
4. **Automatic Session Management**: Middleware handles session refresh
5. **Type Safety**: Full TypeScript support throughout

## Migration from Client-Only Setup

If you were using the previous client-only setup:

1. **Keep existing client components**: They can continue using the old `supabaseClient.ts`
2. **Migrate data fetching**: Move data fetching to Server Components using the new server client
3. **Update authentication**: Use the new SSR-compatible auth patterns

## Testing the Setup

1. Visit `/example` to see the server-side data fetching in action
2. Check the browser's Network tab - you should see the page loads with data already rendered
3. View page source to confirm data is present in the initial HTML

## Troubleshooting

- **Environment Variables**: Ensure your Supabase URL and anon key are set correctly
- **Database Tables**: The example uses a 'todos' table - update to match your schema
- **Middleware Issues**: Check the browser console and server logs for any middleware errors
- **Cookie Issues**: Ensure your domain settings in Supabase match your deployment URL