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

    // Check if owner status is in metadata (this is the most reliable source)
    if (user.user_metadata && (
      user.user_metadata.is_owner === true ||
      user.user_metadata.is_owner === 'true'
    )) {
      console.log('isOwner: User is owner based on metadata');
      return true;
    }

    // Check raw_user_meta_data directly from auth.users
    try {
      const { data: authUserData, error: authUserError } = await supabase.rpc(
        'get_auth_user_data',
        { user_id: user.id }
      );

      if (!authUserError && authUserData) {
        console.log('isOwner: Auth user data:', authUserData);

        // Check if is_owner is in raw_user_meta_data
        if (authUserData.raw_user_meta_data && (
          authUserData.raw_user_meta_data.is_owner === true ||
          authUserData.raw_user_meta_data.is_owner === 'true'
        )) {
          console.log('isOwner: User is owner based on raw_user_meta_data');
          return true;
        }
      } else if (authUserError) {
        console.log('isOwner: Error getting auth user data:', authUserError);
        // Continue to check user_profiles table
      }
    } catch (rpcError) {
      console.log('isOwner: RPC error (this is normal if the function does not exist):', rpcError);
      // Continue to check user_profiles table
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
        if (user.user_metadata && (
          user.user_metadata.is_owner === true ||
          user.user_metadata.is_owner === 'true'
        )) {
          console.log('isOwner: User should be owner based on metadata, but profile is missing');

          // Try to create a user profile
          try {
            const { error: insertError } = await supabase
              .from('user_profiles')
              .insert({
                id: user.id,
                email: user.email || '',
                is_owner: true,
                permissions: {
                  content_management: true,
                  user_management: true,
                  system_configuration: true,
                  media_uploads: true,
                  security_settings: true,
                  site_customization: true
                }
              });

            if (insertError) {
              console.error('isOwner: Error creating user profile:', insertError);
              // Still return true since metadata indicates owner
            } else {
              console.log('isOwner: Created user profile for owner');
            }

            return true;
          } catch (insertError) {
            console.error('isOwner: Error creating user profile:', insertError);
            // Still return true since metadata indicates owner
            return true;
          }
        }

        // Provide guidance on how to set up owner status
        console.log(`
          ⚠️ OWNER SETUP REQUIRED ⚠️

          To set up your account as an owner:

          1. Go to the Supabase dashboard
          2. Navigate to Authentication > Users
          3. Find your user (${user.email})
          4. Click on the user to edit
          5. In the metadata section, add:
             {
               "is_owner": "true"
             }
          6. Save the changes

          This will give you owner privileges in the application.
        `);
      }

      return false;
    }

    if (!data) {
      console.log('isOwner: No data returned from database');
      return false;
    }

    console.log('isOwner: User profile data:', data);
    // Check if is_owner is a string 'true' or boolean true
    const isOwnerValue =
      data.is_owner === true ||
      data.is_owner === 'true';
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
    const { data: { user } } = await supabase.auth.getUser();

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

    // Get the user's profile from the database
    console.log('isAdmin: Fetching user profile from database');
    const { data, error } = await supabase
      .from('user_profiles')
      .select('permissions')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('isAdmin: Error checking admin status:', error);
      return false;
    }

    if (!data || !data.permissions) {
      console.log('isAdmin: No permissions data found');
      return false;
    }

    // Check if user has user_management permission (which defines an admin)
    const isAdminValue = data.permissions.user_management === true;
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
