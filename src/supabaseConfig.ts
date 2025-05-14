// Supabase configuration file that initializes the client and services
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client with additional options
export const supabaseClient = createClient(
  import.meta.env.VITE_SUPABASE_URL || '',
  import.meta.env.VITE_SUPABASE_ANON_KEY || '',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
    global: {
      headers: {
        'X-Client-Info': 'comet-scanner-template-wizard',
      },
    },
  }
);

// Database table names
export const EXTENDED_CONTENT_TABLE = 'extended_content';
export const IMAGES_TABLE = 'images';
export const LOGS_TABLE = 'logs';

// Storage bucket names
export const BANNER_BUCKET = 'banner';
export const GALLERY_BUCKET = 'gallery';
export const SCANNER_BUCKET = 'scanner';

// Helper function to get user ID from Auth0
export const getUserId = async () => {
  try {
    const { data: { user } } = await supabaseClient.auth.getUser();
    return user?.id || null;
  } catch (error) {
    console.error('Error getting user ID:', error);
    return null;
  }
};

// Helper function to get user profile from Supabase
export const getUserProfile = async () => {
  try {
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (!user) {
      return null;
    }

    const { data, error } = await supabaseClient
      .from('user_profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('Error getting user profile:', error);
      return null;
    }

    return data;
  } catch (error) {
    console.error('Error getting user profile:', error);
    return null;
  }
};
