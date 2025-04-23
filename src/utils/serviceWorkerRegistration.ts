// Service worker registration utility

// Check if service workers are supported
const isServiceWorkerSupported = 'serviceWorker' in navigator;

// Register the service worker
export const registerServiceWorker = (): void => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service workers are not supported in this browser');
    return;
  }

  window.addEventListener('load', () => {
    // Add a timestamp query parameter to force the browser to download a new service worker
    const swUrl = `${window.location.origin}/service-worker.js?v=${new Date().getTime()}`;

    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        // Check for updates every hour
        setInterval(() => registration.update(), 60 * 60 * 1000);

        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (!installingWorker) return;

          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // New content available - notify user
                console.log('New service worker available');
                window.dispatchEvent(new CustomEvent('swUpdate'));
              } else {
                // First time installation
                console.log('Service worker installed for the first time');
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error('Error during service worker registration:', error);
      });
  });
};

// Unregister all service workers
export const unregisterServiceWorker = (): void => {
  if (!isServiceWorkerSupported) return;

  navigator.serviceWorker.ready
    .then((registration) => {
      registration.unregister();
    })
    .catch((error) => {
      console.error(error.message);
    });
};

// Check for service worker updates
export const checkForUpdates = (): void => {
  if (!isServiceWorkerSupported) return;

  navigator.serviceWorker.ready
    .then((registration) => {
      registration.update();
    })
    .catch((error) => {
      console.error('Error checking for service worker updates:', error);
    });
};

// Force the waiting service worker to become active
export const updateServiceWorker = (): void => {
  if (!isServiceWorkerSupported) return;

  navigator.serviceWorker.ready
    .then((registration) => {
      if (registration.waiting) {
        // Send a message to the waiting service worker
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      }
    })
    .catch((error) => {
      console.error('Error updating service worker:', error);
    });
};

// Clear all caches and unregister service workers
export const clearAllCachesAndServiceWorkers = async (): Promise<void> => {
  if (!isServiceWorkerSupported) return;

  try {
    // Unregister all service workers
    const registrations = await navigator.serviceWorker.getRegistrations();
    for (const registration of registrations) {
      await registration.unregister();
      console.log('Service worker unregistered');
    }

    // Clear all caches
    if ('caches' in window) {
      const cacheNames = await caches.keys();
      await Promise.all(
        cacheNames.map(async (cacheName) => {
          await caches.delete(cacheName);
          console.log(`Cache ${cacheName} deleted`);
        })
      );
    }

    console.log('All caches and service workers cleared');
    return;
  } catch (error) {
    console.error('Error clearing caches and service workers:', error);
  }
};
