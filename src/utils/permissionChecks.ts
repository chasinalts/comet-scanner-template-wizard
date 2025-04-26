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
    console.log('isOwner: Checking if current user is an owner');

    // Get the current user
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      console.log('isOwner: No authenticated user found');
      return false;
    }

    console.log('isOwner: User ID:', user.id);
    console.log('isOwner: User metadata:', user.user_metadata);

    // Check if owner status is in metadata
    if (user.user_metadata && user.user_metadata.is_owner === true) {
      console.log('isOwner: User is owner based on metadata');
      return true;
    }

    // Get the user's profile from the database
    console.log('isOwner: Fetching user profile from database');
    const { data, error } = await supabase
      .from('user_profiles')
      .select('is_owner')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('isOwner: Error checking owner status:', error);
      console.error('isOwner: Error details:', JSON.stringify(error, null, 2));

      // If the profile doesn't exist, check if we should create one
      if (error.code === 'PGRST116') { // No rows returned
        console.log('isOwner: No user profile found, checking metadata');

        // If user has owner metadata, they should be an owner
        if (user.user_metadata && user.user_metadata.is_owner === true) {
          console.log('isOwner: User should be owner based on metadata, but profile is missing');
          return true;
        }
      }

      return false;
    }

    if (!data) {
      console.log('isOwner: No data returned from database');
      return false;
    }

    console.log('isOwner: User profile data:', data);
    const isOwnerValue = data.is_owner === true;
    console.log('isOwner: Is owner value:', isOwnerValue);

    return isOwnerValue;
  } catch (error) {
    console.error('isOwner: Error checking owner status:', error);
    if (error instanceof Error) {
      console.error('isOwner: Error details:', error.message, error.stack);
    }
    return false;
  }
};

/**
 * Checks if the current user has the media_uploads permission
 * @returns A promise that resolves to a boolean indicating if the user can upload media
 */
export const canUploadMedia = async (): Promise<boolean> => {
  // Only owners can upload media based on our storage policies
  return isOwner();
};
