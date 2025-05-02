// Utility functions for interacting with Appwrite database
import { databases, DATABASE_ID, USER_PROFILES_COLLECTION_ID, CONTENT_COLLECTION_ID, IMAGES_COLLECTION_ID } from '../appwriteConfig';
import { ID, Query } from 'appwrite';

/**
 * Create a document in a collection
 * @param collectionId The ID of the collection
 * @param data The document data
 * @param documentId Optional document ID (will generate a unique ID if not provided)
 * @returns The created document
 */
export const createDocument = async (
  collectionId: string,
  data: any,
  documentId?: string
): Promise<any> => {
  try {
    const id = documentId || ID.unique();
    return await databases.createDocument(
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
export const getDocument = async (
  collectionId: string,
  documentId: string
): Promise<any> => {
  try {
    return await databases.getDocument(
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
export const updateDocument = async (
  collectionId: string,
  documentId: string,
  data: any
): Promise<any> => {
  try {
    return await databases.updateDocument(
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
export const listDocuments = async (
  collectionId: string,
  queries: string[] = []
): Promise<any[]> => {
  try {
    const result = await databases.listDocuments(
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
export const getUserProfile = async (userId: string): Promise<any> => {
  try {
    return await getDocument(USER_PROFILES_COLLECTION_ID, userId);
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
export const updateUserProfile = async (userId: string, data: any): Promise<any> => {
  try {
    return await updateDocument(USER_PROFILES_COLLECTION_ID, userId, data);
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
export const getContent = async (contentId: string): Promise<any> => {
  try {
    return await getDocument(CONTENT_COLLECTION_ID, contentId);
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
export const updateContent = async (contentId: string, data: any): Promise<any> => {
  try {
    return await updateDocument(CONTENT_COLLECTION_ID, contentId, data);
  } catch (error) {
    console.error('Error updating content:', error);
    throw error;
  }
};

/**
 * Get image by ID
 * @param imageId The ID of the image
 * @returns The image data
 */
export const getImage = async (imageId: string): Promise<any> => {
  try {
    return await getDocument(IMAGES_COLLECTION_ID, imageId);
  } catch (error) {
    console.error('Error getting image:', error);
    throw error;
  }
};

/**
 * List all images
 * @returns A list of all images
 */
export const listImages = async (): Promise<any[]> => {
  try {
    return await listDocuments(IMAGES_COLLECTION_ID);
  } catch (error) {
    console.error('Error listing images:', error);
    throw error;
  }
};
