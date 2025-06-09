import type { Metadata } from "next";
import { createClient } from '@/lib/supabaseClient';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const metadata: Metadata = {
  title: "Admin Dashboard - COMET Scanner Template Wizard",
  description:
    "Administrative interface for managing templates, sections, and system settings",
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient();
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        router.push('/admin/login');
      } else {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="holographic-loader">
          Verifying admin privileges...
        </div>
      </div>
    );
  }

  return (
    <div className="admin-layout bg-slate-900 min-h-screen">
      {children}
    </div>
  );
}
