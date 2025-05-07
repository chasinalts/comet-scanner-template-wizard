/**
 * Auth0 callback handler
 * This function handles the callback from Auth0 after authentication
 */
export const handler = async (event) => {
  try {
    // Get the code and state from query parameters
    const { code, state } = event.queryStringParameters || {};

    if (!code || !state) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing code or state parameter' })
      };
    }

    // Get Auth0 domain and client ID from environment variables
    const auth0Domain = process.env.AUTH0_DOMAIN;
    const auth0ClientId = process.env.AUTH0_CLIENT_ID;
    const auth0ClientSecret = process.env.AUTH0_CLIENT_SECRET;

    if (!auth0Domain || !auth0ClientId || !auth0ClientSecret) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Auth0 configuration is missing' })
      };
    }

    // Get the redirect URI from the host header
    const protocol = event.headers.referer?.startsWith('https') ? 'https' : 'http';
    const redirectUri = `${protocol}://${event.headers.host}/callback`;

    // Exchange the code for an access token
    const tokenResponse = await fetch(`https://${auth0Domain}/oauth/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        grant_type: 'authorization_code',
        client_id: auth0ClientId,
        client_secret: auth0ClientSecret,
        code,
        redirect_uri: redirectUri
      })
    });

    if (!tokenResponse.ok) {
      const errorData = await tokenResponse.json();
      return {
        statusCode: tokenResponse.status,
        body: JSON.stringify({ error: 'Failed to exchange code for token', details: errorData })
      };
    }

    const tokenData = await tokenResponse.json();

    // Redirect to the home page with the token
    return {
      statusCode: 302,
      headers: {
        Location: '/',
        'Set-Cookie': `auth0Token=${tokenData.access_token}; Path=/; HttpOnly; SameSite=Strict; Max-Age=${tokenData.expires_in}`
      },
      body: JSON.stringify({
        message: 'Authentication successful'
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', message: error.message })
    };
  }
};
