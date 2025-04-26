// This script unregisters any service workers to prevent caching issues
(function() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      for (let registration of registrations) {
        registration.unregister();
        console.log('Service worker unregistered:', registration);
      }
      // Clear caches
      if ('caches' in window) {
        caches.keys().then(function(cacheNames) {
          cacheNames.forEach(function(cacheName) {
            caches.delete(cacheName);
            console.log('Cache deleted:', cacheName);
          });
          console.log('All caches cleared');
          // Reload the page after clearing caches
          if (sessionStorage.getItem('cache_cleared') !== 'true') {
            sessionStorage.setItem('cache_cleared', 'true');
            window.location.reload(true);
          }
        });
      }
    }).catch(function(error) {
      console.error('Service worker unregistration failed:', error);
    });
  }
})();
