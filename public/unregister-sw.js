// Minimal service worker unregistration script - only runs if service workers exist
// Temporarily disabled to test service worker behavior
/*
(function() {
  // Only check for service workers if the API exists
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      // Only do work if there are actually service workers registered
      if (registrations.length > 0) {
        // Unregister any existing service workers
        Promise.all(
          registrations.map(registration => registration.unregister())
        ).then(() => {
          // Only clear caches if we actually unregistered service workers
          if ('caches' in window) {
            caches.keys().then(cacheNames => {
              return Promise.all(
                cacheNames.map(cacheName => caches.delete(cacheName))
              );
            });
          }
        });
      }
    }).catch(() => {
      // Silently fail - no need to log errors for this cleanup script
    });
  }
})();
*/
