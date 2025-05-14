import { supabaseClient } from '../supabaseConfig';
import { getUserProfile } from '../supabaseConfig';

/**
 * Checks if the current user has a specific permission
 * @param permission The permission to check for
 * @returns A promise that resolves to a boolean indicating if the user has the permission
 */
export const hasPermission = async (permission: string): Promise<boolean> => {
  try {
    // Get the current user
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (!user) {
      return false;
    }

    // Get the user's profile
    try {
      const { data: profile, error } = await supabaseClient
        .from('user_profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (error || !profile) {
        console.error('Error fetching user profile:', error);
        return false;
      }

      // If the user is an owner, they have all permissions
      if (profile.is_owner) {
        return true;
      }

      // Check if the user has the specific permission
      return profile.permissions && profile.permissions[permission] === true;
    } catch (error) {
      console.error('Error checking permission:', error);
      return false;
    }
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
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (!user) {
      console.log('isOwner: No authenticated user found');
      return false;
    }

    console.log('isOwner: User ID:', user.id);

    // Get the user's profile
    const profile = await getUserProfile();

    if (!profile) {
      console.log('isOwner: No user profile found');
      return false;
    }

    console.log('isOwner: User profile data:', profile);

    // Check if is_owner is a string 'true' or boolean true
    const isOwnerValue =
      profile.is_owner === true ||
      profile.is_owner === 'true';

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
 * Checks if the current user is an admin
 * @returns A promise that resolves to a boolean indicating if the user is an admin
 */
export const isAdmin = async (): Promise<boolean> => {
  try {
    console.log('isAdmin: Checking if current user is an admin');

    // Get the current user
    const { data: { user } } = await supabaseClient.auth.getUser();

    if (!user) {
      console.log('isAdmin: No authenticated user found');
      return false;
    }

    console.log('isAdmin: User ID:', user.id);

    // First check if user is an owner (owners have admin privileges)
    const ownerStatus = await isOwner();
    if (ownerStatus) {
      console.log('isAdmin: User is an owner, so they have admin privileges');
      return true;
    }

    // Get the user's profile
    const profile = await getUserProfile();

    if (!profile || !profile.permissions) {
      console.log('isAdmin: No permissions data found');
      return false;
    }

    // Check if user has user_management permission (which defines an admin)
    const isAdminValue = profile.permissions.user_management === true;
    console.log('isAdmin: Is admin value:', isAdminValue);

    return isAdminValue;
  } catch (error) {
    console.error('isAdmin: Error checking admin status:', error);
    if (error instanceof Error) {
      console.error('isAdmin: Error details:', error.message, error.stack);
    }
    return false;
  }
};

/**
 * Checks if the current user has the media_uploads permission
 * @returns A promise that resolves to a boolean indicating if the user can upload media
 */
export const canUploadMedia = async (): Promise<boolean> => {
  // Owners and admins can upload media
  const adminStatus = await isAdmin();
  const ownerStatus = await isOwner();
  return ownerStatus || adminStatus;
};
