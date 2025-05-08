// Client for interacting with the Context7 MCP Server

/**
 * Interface for Context7 MCP Server response
 */
interface Context7Response {
  success: boolean;
  data?: any;
  error?: string;
}

/**
 * Interface for documentation request options
 */
interface DocRequestOptions {
  libraryId: string;
  topic?: string;
  maxTokens?: number;
}

/**
 * Default Context7 MCP Server URL
 */
const DEFAULT_MCP_SERVER_URL = 'http://localhost:3100';

/**
 * Context7 MCP Client for retrieving documentation
 */
export class Context7Client {
  private serverUrl: string;

  /**
   * Create a new Context7 MCP Client
   * @param serverUrl The URL of the Context7 MCP Server (default: http://localhost:3100)
   */
  constructor(serverUrl: string = DEFAULT_MCP_SERVER_URL) {
    this.serverUrl = serverUrl;
  }

  /**
   * Get documentation from the Context7 MCP Server
   * @param options Documentation request options
   * @returns Promise with the documentation data
   */
  async getDocumentation(options: DocRequestOptions): Promise<Context7Response> {
    try {
      const { libraryId, topic, maxTokens } = options;
      
      // Build the URL with query parameters
      let url = `${this.serverUrl}/docs/${encodeURIComponent(libraryId)}`;
      const queryParams = [];
      
      if (topic) {
        queryParams.push(`topic=${encodeURIComponent(topic)}`);
      }
      
      if (maxTokens) {
        queryParams.push(`maxTokens=${maxTokens}`);
      }
      
      if (queryParams.length > 0) {
        url += `?${queryParams.join('&')}`;
      }
      
      // Make the request
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to fetch documentation: ${response.statusText}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data
      };
    } catch (error) {
      console.error('Error fetching documentation from Context7 MCP Server:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Search for code in the codebase
   * @param query The search query
   * @returns Promise with the search results
   */
  async searchCode(query: string): Promise<Context7Response> {
    try {
      const url = `${this.serverUrl}/search`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query })
      });
      
      if (!response.ok) {
        throw new Error(`Failed to search code: ${response.statusText}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data
      };
    } catch (error) {
      console.error('Error searching code with Context7 MCP Server:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Get information about a specific file
   * @param filePath The path to the file
   * @returns Promise with the file information
   */
  async getFileInfo(filePath: string): Promise<Context7Response> {
    try {
      const url = `${this.serverUrl}/file?path=${encodeURIComponent(filePath)}`;
      
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      
      if (!response.ok) {
        throw new Error(`Failed to get file info: ${response.statusText}`);
      }
      
      const data = await response.json();
      return {
        success: true,
        data
      };
    } catch (error) {
      console.error('Error getting file info from Context7 MCP Server:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }
}

// Create a singleton instance of the Context7 Client
export const context7Client = new Context7Client();

// Export default instance
export default context7Client;
