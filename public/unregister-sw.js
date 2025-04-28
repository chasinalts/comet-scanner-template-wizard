// This script unregisters any service workers to prevent caching issues
(function() {
  console.log('Running service worker unregistration script');

  // Only run the cache clearing once per session
  if (sessionStorage.getItem('cache_cleared') === 'true') {
    console.log('Cache already cleared this session, skipping');
    return;
  }

  // Function to clear caches
  const clearCaches = async () => {
    if ('caches' in window) {
      try {
        const cacheNames = await caches.keys();
        console.log('Found caches:', cacheNames);

        for (const cacheName of cacheNames) {
          await caches.delete(cacheName);
          console.log('Cache deleted:', cacheName);
        }

        console.log('All caches cleared');
        return true;
      } catch (error) {
        console.error('Error clearing caches:', error);
        return false;
      }
    }
    return false;
  };

  // Function to unregister service workers
  const unregisterServiceWorkers = async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations();
        console.log('Found service workers:', registrations.length);

        for (const registration of registrations) {
          await registration.unregister();
          console.log('Service worker unregistered');
        }

        return true;
      } catch (error) {
        console.error('Error unregistering service workers:', error);
        return false;
      }
    }
    return false;
  };

  // Run both operations and mark as complete
  Promise.all([clearCaches(), unregisterServiceWorkers()])
    .then(([cachesCleared, workersUnregistered]) => {
      if (cachesCleared || workersUnregistered) {
        console.log('Cache clearing and service worker unregistration complete');
        sessionStorage.setItem('cache_cleared', 'true');
      }
    })
    .catch(error => {
      console.error('Error in cache/SW cleanup:', error);
    });
})();
