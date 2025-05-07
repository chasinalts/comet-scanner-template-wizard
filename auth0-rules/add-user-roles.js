
function addUserRoles(user, context, callback) {
  // Get user metadata
  const namespace = 'https://cometscanner.netlify.app';
  const assignedRoles = (user.app_metadata && user.app_metadata.roles) || ['user'];
  const isOwner = (user.app_metadata && user.app_metadata.is_owner) || false;
  
  // Add roles to the user's ID token
  context.idToken[`${namespace}/roles`] = assignedRoles;
  context.idToken[`${namespace}/is_owner`] = isOwner;
  
  // Add roles to the user's access token
  context.accessToken[`${namespace}/roles`] = assignedRoles;
  context.accessToken[`${namespace}/is_owner`] = isOwner;
  
  callback(null, user, context);
}
