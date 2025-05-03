/**
 * API handler function for general API requests
 */
export const handler = async (event) => {
  try {
    // Parse the request body
    const body = JSON.parse(event.body || '{}');
    
    // Handle different API routes based on path
    const path = event.path.replace('/.netlify/functions/api', '');
    
    // Return a response based on the request
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'API request successful',
        path,
        method: event.httpMethod,
        receivedData: body
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', message: error.message })
    };
  }
};
