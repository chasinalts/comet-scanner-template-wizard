'use client'; // Required for useEffect and client-side operations

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient'; // Adjusted path

export default function HomePage() {
  const [userId, setUserId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Example: Try to get the current user session
        // This doesn't require any tables to exist yet.
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;

        if (session) {
          setUserId(session.user.id);
        } else {
          setUserId(null); // No active session
        }
      } catch (e: any) {
        console.error('Error fetching Supabase data:', e);
        setError(e.message || 'An unknown error occurred.');
      }
    };
    fetchUser();
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24">
      <div className="p-8 futuristic-container w-auto max-w-2xl text-center">
        <h1 className="mb-6 holographic-title" data-text="Supabase Integration Test">Supabase Integration Test</h1>

        <div className="mb-4">
          <p className="holographic-text text-lg" data-text="Checking Supabase Connection...">Checking Supabase Connection...</p>
          {error && <p className="mt-2 text-red-400">Error: {error}</p>}
          {userId !== undefined && !error && (
            <p className="mt-2 text-green-400">
              {userId ? `Supabase connection successful. User ID: ${userId}` : "Supabase connection successful. No active session."}
            </p>
          )}
        </div>

        <h2 className="mt-8 mb-4 text-2xl holographic-subtitle" data-text="Style Test">Style Test</h2>
        <button className="px-4 py-2 mt-2 font-bold text-white rounded futuristic-button">Futuristic Button</button>
        <input type="text" placeholder="Futuristic Input" className="w-full max-w-xs mt-4 futuristic-input" />
      </div>
    </main>
  );
}
