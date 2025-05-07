/**
 * Auth0 password reset function
 * This function sends a password reset email to the user via Auth0
 */
export const handler = async (event) => {
  try {
    // Only allow POST requests
    if (event.httpMethod !== 'POST') {
      return {
        statusCode: 405,
        body: JSON.stringify({ error: 'Method Not Allowed' })
      };
    }

    // Parse the request body
    const { email } = JSON.parse(event.body || '{}');

    if (!email) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Email is required' })
      };
    }

    // Get Auth0 domain and client ID from environment variables
    const auth0Domain = process.env.AUTH0_DOMAIN;
    const auth0ClientId = process.env.AUTH0_CLIENT_ID;

    if (!auth0Domain || !auth0ClientId) {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Auth0 configuration is missing' })
      };
    }

    // Make a request to Auth0 to send a password reset email
    const response = await fetch(`https://${auth0Domain}/dbconnections/change_password`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        client_id: auth0ClientId,
        email,
        connection: 'Username-Password-Authentication'
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: 'Failed to send password reset email', details: errorData })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Password reset email sent successfully' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', message: error.message })
    };
  }
};
