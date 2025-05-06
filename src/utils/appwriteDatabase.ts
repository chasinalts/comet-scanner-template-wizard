// Utility functions for interacting with Appwrite database using the latest SDK
import { databases, DATABASE_ID, USER_PROFILES_COLLECTION_ID, CONTENT_COLLECTION_ID, IMAGES_COLLECTION_ID, ID, Query, type Models } from '../appwriteConfig.ts';

// Define common document types
export interface UserProfile extends Models.Document {
  email: string;
  is_owner: boolean;
  created_at: string;
  permissions: string;
  role?: string;
}

export interface ContentItem extends Models.Document {
  type: string;
  title: string;
  content: string;
  imageUrl?: string;
  scale?: number;
  created_at?: string;
  updated_at?: string;
}

export interface ImageMetadata extends Models.Document {
  name: string;
  file_id: string;
  bucket_id: string;
  uploaded_by: string;
  uploaded_at: string;
  image_type: string;
}

/**
 * Create a document in a collection
 * @param collectionId The ID of the collection
 * @param data The document data
 * @param documentId Optional document ID (will generate a unique ID if not provided)
 * @returns The created document
 */
export const createDocument = async <T extends Models.Document>(
  collectionId: string,
  data: Omit<T, keyof Models.Document>,
  documentId?: string
): Promise<T> => {
  try {
    const id = documentId || ID.unique();
    return await databases.createDocument<T>(
      DATABASE_ID,
      collectionId,
      id,
      data
    );
  } catch (error) {
    console.error(`Error creating document in ${collectionId}:`, error);
    throw error;
  }
};

/**
 * Get a document by ID
 * @param collectionId The ID of the collection
 * @param documentId The ID of the document
 * @returns The document data
 */
export const getDocument = async <T extends Models.Document>(
  collectionId: string,
  documentId: string
): Promise<T> => {
  try {
    return await databases.getDocument<T>(
      DATABASE_ID,
      collectionId,
      documentId
    );
  } catch (error) {
    console.error(`Error getting document from ${collectionId}:`, error);
    throw error;
  }
};

/**
 * Update a document
 * @param collectionId The ID of the collection
 * @param documentId The ID of the document
 * @param data The updated document data
 * @returns The updated document
 */
export const updateDocument = async <T extends Models.Document>(
  collectionId: string,
  documentId: string,
  data: Partial<Omit<T, keyof Models.Document>>
): Promise<T> => {
  try {
    return await databases.updateDocument<T>(
      DATABASE_ID,
      collectionId,
      documentId,
      data
    );
  } catch (error) {
    console.error(`Error updating document in ${collectionId}:`, error);
    throw error;
  }
};

/**
 * Delete a document
 * @param collectionId The ID of the collection
 * @param documentId The ID of the document
 * @returns A promise that resolves when the document is deleted
 */
export const deleteDocument = async (
  collectionId: string,
  documentId: string
): Promise<void> => {
  try {
    await databases.deleteDocument(
      DATABASE_ID,
      collectionId,
      documentId
    );
  } catch (error) {
    console.error(`Error deleting document from ${collectionId}:`, error);
    throw error;
  }
};

/**
 * List documents in a collection with optional queries
 * @param collectionId The ID of the collection
 * @param queries Optional query parameters
 * @returns A list of documents
 */
export const listDocuments = async <T extends Models.Document>(
  collectionId: string,
  queries: string[] = []
): Promise<T[]> => {
  try {
    const result = await databases.listDocuments<T>(
      DATABASE_ID,
      collectionId,
      queries
    );
    return result.documents;
  } catch (error) {
    console.error(`Error listing documents in ${collectionId}:`, error);
    throw error;
  }
};

/**
 * Get user profile by user ID
 * @param userId The ID of the user
 * @returns The user profile
 */
export const getUserProfile = async (userId: string): Promise<UserProfile> => {
  try {
    return await getDocument<UserProfile>(USER_PROFILES_COLLECTION_ID, userId);
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
};

/**
 * Update user profile
 * @param userId The ID of the user
 * @param data The updated profile data
 * @returns The updated profile
 */
export const updateUserProfile = async (
  userId: string,
  data: Partial<Omit<UserProfile, keyof Models.Document>>
): Promise<UserProfile> => {
  try {
    return await updateDocument<UserProfile>(USER_PROFILES_COLLECTION_ID, userId, data);
  } catch (error) {
    console.error('Error updating user profile:', error);
    throw error;
  }
};

/**
 * Get content by ID
 * @param contentId The ID of the content
 * @returns The content data
 */
export const getContent = async (contentId: string): Promise<ContentItem> => {
  try {
    return await getDocument<ContentItem>(CONTENT_COLLECTION_ID, contentId);
  } catch (error) {
    console.error('Error getting content:', error);
    throw error;
  }
};

/**
 * Update content
 * @param contentId The ID of the content
 * @param data The updated content data
 * @returns The updated content
 */
export const updateContent = async (
  contentId: string,
  data: Partial<Omit<ContentItem, keyof Models.Document>>
): Promise<ContentItem> => {
  try {
    return await updateDocument<ContentItem>(CONTENT_COLLECTION_ID, contentId, data);
  } catch (error) {
    console.error('Error updating content:', error);
    throw error;
  }
};

/**
 * Get image metadata by ID
 * @param imageId The ID of the image metadata
 * @returns The image metadata
 */
export const getImage = async (imageId: string): Promise<ImageMetadata> => {
  try {
    return await getDocument<ImageMetadata>(IMAGES_COLLECTION_ID, imageId);
  } catch (error) {
    console.error('Error getting image metadata:', error);
    throw error;
  }
};

/**
 * List all images metadata
 * @returns A list of all image metadata
 */
export const listImages = async (): Promise<ImageMetadata[]> => {
  try {
    return await listDocuments<ImageMetadata>(IMAGES_COLLECTION_ID);
  } catch (error) {
    console.error('Error listing image metadata:', error);
    throw error;
  }
};
