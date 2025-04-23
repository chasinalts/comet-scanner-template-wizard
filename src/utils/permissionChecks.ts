import { supabase } from '../supabaseConfig';

/**
 * Checks if the current user has a specific permission
 * @param permission The permission to check for
 * @returns A promise that resolves to a boolean indicating if the user has the permission
 */
export const hasPermission = async (permission: string): Promise<boolean> => {
  try {
    // Get the current user
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return false;
    }

    // Get the user's profile
    const { data, error } = await supabase
      .from('user_profiles')
      .select('permissions, is_owner')
      .eq('id', user.id)
      .single();

    if (error || !data) {
      console.error('Error checking permission:', error);
      return false;
    }

    // If the user is an owner, they have all permissions
    if (data.is_owner) {
      return true;
    }

    // Check if the user has the specific permission
    return data.permissions && data.permissions[permission as keyof typeof data.permissions] === true;
  } catch (error) {
    console.error('Error checking permission:', error);
    return false;
  }
};

/**
 * Checks if the current user is an owner
 * @returns A promise that resolves to a boolean indicating if the user is an owner
 */
export const isOwner = async (): Promise<boolean> => {
  try {
    // Get the current user
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return false;
    }

    // Get the user's profile
    const { data, error } = await supabase
      .from('user_profiles')
      .select('is_owner')
      .eq('id', user.id)
      .single();

    if (error || !data) {
      console.error('Error checking owner status:', error);
      return false;
    }

    return data.is_owner === true;
  } catch (error) {
    console.error('Error checking owner status:', error);
    return false;
  }
};

/**
 * Checks if the current user has the mediaUploads permission
 * @returns A promise that resolves to a boolean indicating if the user can upload media
 */
export const canUploadMedia = async (): Promise<boolean> => {
  // Only owners can upload media based on our storage policies
  return isOwner();
};
