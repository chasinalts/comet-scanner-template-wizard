// Utility functions for working with the Appwrite MCP server
import { client, account, databases, storage, ID, Query, type Models } from '../appwriteConfig';
import { UserProfile, ContentItem, ImageMetadata } from './appwriteDatabase';
import { BucketType } from './appwriteStorage';

/**
 * Check if the MCP server is available
 * This is a simple check to see if we can connect to the Appwrite API
 * @returns Promise<boolean> True if the MCP server is available
 */
export const checkMCPServerAvailable = async (): Promise<boolean> => {
  try {
    // Try to get the current account - this will throw if no valid session exists
    // but will still connect to the API
    try {
      await account.get();
      console.log('MCP server available with authenticated session');
      return true;
    } catch (sessionError) {
      // Even if we're not authenticated, we can still check if the API is available
      // by checking the client's health endpoint
      const response = await fetch(`${client.config.endpoint}/health`);
      if (response.ok) {
        console.log('MCP server available but no authenticated session');
        return true;
      }
      console.error('MCP server health check failed:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error checking MCP server availability:', error);
    return false;
  }
};

/**
 * Get MCP server configuration
 * @returns The MCP server configuration
 */
export const getMCPServerConfig = () => {
  return {
    endpoint: client.config.endpoint,
    project: client.config.project,
    isConfigured: !!client.config.project
  };
};

/**
 * Create a new user profile using the MCP server
 * @param email User's email
 * @param password User's password
 * @param name User's name
 * @param isOwner Whether the user is an owner
 * @returns The created user and session
 */
export const createUserWithMCP = async (
  email: string,
  password: string,
  name: string,
  isOwner: boolean = false
): Promise<{ user: Models.User<Models.Preferences>; session: Models.Session }> => {
  try {
    // Create the user account
    const user = await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    // Set user preferences
    await account.updatePrefs({
      is_owner: isOwner,
      permissions: isOwner ? {
        content_management: true,
        user_management: true,
        system_configuration: true,
        media_uploads: true,
        security_settings: true,
        site_customization: true,
      } : {
        content_management: false,
        user_management: false,
        system_configuration: false,
        media_uploads: false,
        security_settings: false,
        site_customization: false,
      }
    });

    // Sign in the user
    const session = await account.createEmailPasswordSession(email, password);

    // Create user profile in database
    await databases.createDocument(
      process.env.VITE_APPWRITE_DATABASE_ID || '',
      'user_profiles',
      user.$id,
      {
        email: email,
        is_owner: isOwner,
        created_at: new Date().toISOString(),
        permissions: JSON.stringify(isOwner ? {
          content_management: true,
          user_management: true,
          system_configuration: true,
          media_uploads: true,
          security_settings: true,
          site_customization: true,
        } : {
          content_management: false,
          user_management: false,
          system_configuration: false,
          media_uploads: false,
          security_settings: false,
          site_customization: false,
        })
      }
    );

    return { user, session };
  } catch (error) {
    console.error('Error creating user with MCP:', error);
    throw error;
  }
};

/**
 * Upload a file using the MCP server
 * @param file The file to upload
 * @param bucketType The type of bucket to upload to
 * @param userId The ID of the user uploading the file
 * @returns The uploaded file and metadata
 */
export const uploadFileWithMCP = async (
  file: File,
  bucketType: BucketType,
  userId: string
): Promise<{ file: Models.File; metadata: ImageMetadata }> => {
  try {
    const bucketId = 'banner'; // Using a single bucket for all images
    const fileId = ID.unique();

    // Upload the file to storage
    const fileResult = await storage.createFile(
      bucketId,
      fileId,
      file
    );

    // Store metadata in the images collection
    const metadataResult = await databases.createDocument<ImageMetadata>(
      process.env.VITE_APPWRITE_DATABASE_ID || '',
      'images',
      ID.unique(),
      {
        name: file.name,
        file_id: fileId,
        bucket_id: bucketId,
        uploaded_by: userId,
        uploaded_at: new Date().toISOString(),
        image_type: bucketType
      }
    );

    return {
      file: fileResult,
      metadata: metadataResult
    };
  } catch (error) {
    console.error(`Error uploading file with MCP:`, error);
    throw error;
  }
};

/**
 * Get all content items using the MCP server
 * @param limit Optional limit of items to return (default: 100)
 * @returns A list of content items
 */
export const getContentWithMCP = async (limit: number = 100): Promise<ContentItem[]> => {
  try {
    const result = await databases.listDocuments<ContentItem>(
      process.env.VITE_APPWRITE_DATABASE_ID || '',
      'content',
      [
        Query.limit(limit),
        Query.orderDesc('$createdAt')
      ]
    );
    return result.documents;
  } catch (error) {
    console.error('Error getting content with MCP:', error);
    throw error;
  }
};

/**
 * Get all user profiles using the MCP server
 * @param limit Optional limit of profiles to return (default: 100)
 * @returns A list of user profiles
 */
export const getUserProfilesWithMCP = async (limit: number = 100): Promise<UserProfile[]> => {
  try {
    const result = await databases.listDocuments<UserProfile>(
      process.env.VITE_APPWRITE_DATABASE_ID || '',
      'user_profiles',
      [
        Query.limit(limit),
        Query.orderDesc('$createdAt')
      ]
    );
    return result.documents;
  } catch (error) {
    console.error('Error getting user profiles with MCP:', error);
    throw error;
  }
};
