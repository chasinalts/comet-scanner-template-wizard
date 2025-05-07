// Database service abstraction layer that routes operations to either Appwrite or Supabase
import { ID, Query } from 'appwrite';
import { databases, DATABASE_ID, USER_PROFILES_COLLECTION_ID, CONTENT_COLLECTION_ID, IMAGES_COLLECTION_ID } from '../appwriteConfig';
import { supabaseClient, EXTENDED_CONTENT_TABLE, IMAGES_TABLE, LOGS_TABLE } from '../supabaseConfig';

// Enum for database providers
export enum DatabaseProvider {
  APPWRITE = 'appwrite',
  SUPABASE = 'supabase'
}

// Interface for database operations
interface DatabaseOperations {
  create: (collectionOrTable: string, data: any, id?: string) => Promise<any>;
  get: (collectionOrTable: string, id: string) => Promise<any>;
  list: (collectionOrTable: string, queries?: any[]) => Promise<any[]>;
  update: (collectionOrTable: string, id: string, data: any) => Promise<any>;
  delete: (collectionOrTable: string, id: string) => Promise<any>;
}

// Map collection/table names to their respective providers
const collectionProviderMap: Record<string, DatabaseProvider> = {
  // Appwrite collections
  [USER_PROFILES_COLLECTION_ID]: DatabaseProvider.APPWRITE,
  [CONTENT_COLLECTION_ID]: DatabaseProvider.APPWRITE,

  // Supabase tables
  [EXTENDED_CONTENT_TABLE]: DatabaseProvider.SUPABASE,
  [IMAGES_TABLE]: DatabaseProvider.SUPABASE,
  [LOGS_TABLE]: DatabaseProvider.SUPABASE,

  // Default mapping for images collection (for backward compatibility)
  [IMAGES_COLLECTION_ID]: DatabaseProvider.SUPABASE
};

// Appwrite database operations implementation
const appwriteOperations: DatabaseOperations = {
  create: async (collection, data, id) => {
    try {
      return await databases.createDocument(
        DATABASE_ID,
        collection,
        id || ID.unique(),
        data
      );
    } catch (error) {
      console.error(`Error creating document in Appwrite collection ${collection}:`, error);
      throw error;
    }
  },

  get: async (collection, id) => {
    try {
      return await databases.getDocument(
        DATABASE_ID,
        collection,
        id
      );
    } catch (error) {
      console.error(`Error getting document from Appwrite collection ${collection}:`, error);
      throw error;
    }
  },

  list: async (collection, queries = []) => {
    try {
      const result = await databases.listDocuments(
        DATABASE_ID,
        collection,
        queries
      );
      return result.documents;
    } catch (error) {
      console.error(`Error listing documents in Appwrite collection ${collection}:`, error);
      throw error;
    }
  },

  update: async (collection, id, data) => {
    try {
      return await databases.updateDocument(
        DATABASE_ID,
        collection,
        id,
        data
      );
    } catch (error) {
      console.error(`Error updating document in Appwrite collection ${collection}:`, error);
      throw error;
    }
  },

  delete: async (collection, id) => {
    try {
      return await databases.deleteDocument(
        DATABASE_ID,
        collection,
        id
      );
    } catch (error) {
      console.error(`Error deleting document from Appwrite collection ${collection}:`, error);
      throw error;
    }
  }
};

// Supabase database operations implementation
const supabaseOperations: DatabaseOperations = {
  create: async (table, data, id) => {
    try {
      const { data: result, error } = await supabaseClient
        .from(table)
        .insert({ ...data, id: id || undefined })
        .select()
        .single();

      if (error) throw error;
      return result;
    } catch (error) {
      console.error(`Error creating record in Supabase table ${table}:`, error);
      throw error;
    }
  },

  get: async (table, id) => {
    try {
      const { data: result, error } = await supabaseClient
        .from(table)
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return result;
    } catch (error) {
      console.error(`Error getting record from Supabase table ${table}:`, error);
      throw error;
    }
  },

  list: async (table, queries = []) => {
    try {
      // Try to use the Netlify CORS proxy function if we're in production
      const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';

      if (isProduction) {
        try {
          // Build the query string for the Supabase REST API
          let queryString = `select=*`;
          if (queries && queries.length > 0) {
            for (const q of queries) {
              if (q.key && q.value) {
                queryString += `&${q.key}=eq.${encodeURIComponent(q.value)}`;
              }
            }
          }

          // Use the Netlify function to proxy the request with the correct Supabase URL
          const supabaseUrl = 'https://hpbfipnhqakrhlnhluze.supabase.co';
          const proxyUrl = `/.netlify/functions/cors-proxy?url=${encodeURIComponent(
            `${supabaseUrl}/rest/v1/${table}?${queryString}`
          )}`;

          const response = await fetch(proxyUrl);
          if (!response.ok) {
            throw new Error(`Proxy request failed with status ${response.status}`);
          }

          const result = await response.json();
          return result || [];
        } catch (proxyError) {
          console.error('Error using CORS proxy:', proxyError);
          // Fall back to the direct Supabase client
        }
      }

      // If not in production or proxy failed, use the Supabase client directly
      let query = supabaseClient.from(table).select('*');

      // Apply filters if provided
      if (queries && queries.length > 0) {
        for (const q of queries) {
          if (q.key && q.value) {
            query = query.eq(q.key, q.value);
          }
        }
      }

      const { data: result, error } = await query;

      if (error) throw error;
      return result || [];
    } catch (error) {
      console.error(`Error listing records in Supabase table ${table}:`, error);
      throw error;
    }
  },

  update: async (table, id, data) => {
    try {
      const { data: result, error } = await supabaseClient
        .from(table)
        .update(data)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return result;
    } catch (error) {
      console.error(`Error updating record in Supabase table ${table}:`, error);
      throw error;
    }
  },

  delete: async (table, id) => {
    try {
      const { data: result, error } = await supabaseClient
        .from(table)
        .delete()
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return result;
    } catch (error) {
      console.error(`Error deleting record from Supabase table ${table}:`, error);
      throw error;
    }
  }
};

// Get the appropriate database operations based on collection/table name
const getOperationsForCollection = (collectionOrTable: string): DatabaseOperations => {
  const provider = collectionProviderMap[collectionOrTable] || DatabaseProvider.APPWRITE;
  return provider === DatabaseProvider.APPWRITE ? appwriteOperations : supabaseOperations;
};

// Exported database service functions
export const databaseService = {
  /**
   * Create a document/record
   * @param collectionOrTable The collection or table name
   * @param data The data to create
   * @param id Optional ID for the document/record
   * @returns The created document/record
   */
  create: async (collectionOrTable: string, data: any, id?: string): Promise<any> => {
    const operations = getOperationsForCollection(collectionOrTable);
    return operations.create(collectionOrTable, data, id);
  },

  /**
   * Get a document/record by ID
   * @param collectionOrTable The collection or table name
   * @param id The ID of the document/record
   * @returns The document/record
   */
  get: async (collectionOrTable: string, id: string): Promise<any> => {
    const operations = getOperationsForCollection(collectionOrTable);
    return operations.get(collectionOrTable, id);
  },

  /**
   * List documents/records with optional queries
   * @param collectionOrTable The collection or table name
   * @param queries Optional query parameters
   * @returns A list of documents/records
   */
  list: async (collectionOrTable: string, queries?: any[]): Promise<any[]> => {
    const operations = getOperationsForCollection(collectionOrTable);
    return operations.list(collectionOrTable, queries);
  },

  /**
   * Update a document/record
   * @param collectionOrTable The collection or table name
   * @param id The ID of the document/record
   * @param data The data to update
   * @returns The updated document/record
   */
  update: async (collectionOrTable: string, id: string, data: any): Promise<any> => {
    const operations = getOperationsForCollection(collectionOrTable);
    return operations.update(collectionOrTable, id, data);
  },

  /**
   * Delete a document/record
   * @param collectionOrTable The collection or table name
   * @param id The ID of the document/record
   * @returns The deleted document/record
   */
  delete: async (collectionOrTable: string, id: string): Promise<any> => {
    const operations = getOperationsForCollection(collectionOrTable);
    return operations.delete(collectionOrTable, id);
  }
};
