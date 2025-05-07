/**
 * Auth0 logout handler
 * This function handles server-side logout for Auth0
 */
export const handler = async (event) => {
  try {
    // Get Auth0 domain and client ID from environment variables
    const auth0Domain = process.env.AUTH0_DOMAIN;
    const auth0ClientId = process.env.AUTH0_CLIENT_ID;

    if (!auth0Domain || !auth0ClientId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Auth0 configuration is missing' })
      };
    }

    // Get the return URL from query parameters or use the default
    const returnTo = event.queryStringParameters?.returnTo || `${event.headers.host}`;
    const protocol = event.headers.referer?.startsWith('https') ? 'https' : 'http';
    const fullReturnUrl = `${protocol}://${returnTo}`;

    // Construct the Auth0 logout URL
    const logoutUrl = `https://${auth0Domain}/v2/logout?client_id=${auth0ClientId}&returnTo=${encodeURIComponent(fullReturnUrl)}`;

    // Redirect to the Auth0 logout URL
    return {
      statusCode: 302,
      headers: {
        Location: logoutUrl,
        'Cache-Control': 'no-cache'
      },
      body: JSON.stringify({
        message: 'Redirecting to Auth0 logout'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', message: error.message })
    };
  }
};
