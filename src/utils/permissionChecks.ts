import { account, databases, DATABASE_ID, USER_PROFILES_COLLECTION_ID } from '../appwriteConfig.ts';

/**
 * Checks if the current user has a specific permission
 * @param permission The permission to check for
 * @returns A promise that resolves to a boolean indicating if the user has the permission
 */
export const hasPermission = async (permission: string): Promise<boolean> => {
  try {
    // Get the current user
    const user = await account.get();

    if (!user) {
      return false;
    }

    // Get the user's profile
    try {
      const profile = await databases.getDocument(
        DATABASE_ID,
        USER_PROFILES_COLLECTION_ID,
        user.$id
      );

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
    const user = await account.get();

    if (!user) {
      console.log('isOwner: No authenticated user found');
      return false;
    }

    console.log('isOwner: User ID:', user.$id);

    // Check if owner status is in preferences
    const userPrefs = user.prefs;
    if (userPrefs && (
      userPrefs.is_owner === true ||
      userPrefs.is_owner === 'true'
    )) {
      console.log('isOwner: User is owner based on preferences');
      return true;
    }

    // Get the user's profile from the database
    try {
      const profile = await databases.getDocument(
        DATABASE_ID,
        USER_PROFILES_COLLECTION_ID,
        user.$id
      );

      console.log('isOwner: User profile data:', profile);

      // Check if is_owner is a string 'true' or boolean true
      const isOwnerValue =
        profile.is_owner === true ||
        profile.is_owner === 'true';

      console.log('isOwner: Is owner value:', isOwnerValue);

      return isOwnerValue;
    } catch (error) {
      console.error('isOwner: Error checking owner status:', error);

      // If the profile doesn't exist, check if we should create one
      if (error.code === 404) {
        console.log('isOwner: No user profile found, checking preferences');

        // If user has owner preferences, they should be an owner
        if (userPrefs && (
          userPrefs.is_owner === true ||
          userPrefs.is_owner === 'true'
        )) {
          console.log('isOwner: User should be owner based on preferences, but profile is missing');

          // Try to create a user profile
          try {
            await databases.createDocument(
              DATABASE_ID,
              USER_PROFILES_COLLECTION_ID,
              user.$id,
              {
                email: user.email,
                is_owner: true,
                created_at: new Date().toISOString(),
                permissions: {
                  content_management: true,
                  user_management: true,
                  system_configuration: true,
                  media_uploads: true,
                  security_settings: true,
                  site_customization: true
                }
              }
            );

            console.log('isOwner: Created user profile for owner');
            return true;
          } catch (insertError) {
            console.error('isOwner: Error creating user profile:', insertError);
            // Still return true since preferences indicate owner
            return true;
          }
        }

        // Provide guidance on how to set up owner status
        console.log(`
          ⚠️ OWNER SETUP REQUIRED ⚠️

          To set up your account as an owner:

          1. Go to the Appwrite console
          2. Navigate to Authentication > Users
          3. Find your user (${user.email})
          4. Click on the user to edit
          5. In the preferences section, add:
             {
               "is_owner": "true"
             }
          6. Save the changes

          This will give you owner privileges in the application.
        `);
      }

      return false;
    }
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
    const user = await account.get();

    if (!user) {
      console.log('isAdmin: No authenticated user found');
      return false;
    }

    console.log('isAdmin: User ID:', user.$id);

    // First check if user is an owner (owners have admin privileges)
    const ownerStatus = await isOwner();
    if (ownerStatus) {
      console.log('isAdmin: User is an owner, so they have admin privileges');
      return true;
    }

    // Get the user's profile from the database
    try {
      console.log('isAdmin: Fetching user profile from database');
      const profile = await databases.getDocument(
        DATABASE_ID,
        USER_PROFILES_COLLECTION_ID,
        user.$id
      );

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
      return false;
    }
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
