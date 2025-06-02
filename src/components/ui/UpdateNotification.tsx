import * as React from 'react';
import { useState, useEffect } from 'react';
// Service worker update logic is now inline below, since serviceWorkerRegistration no longer exists.

const UpdateNotification: React.FC = () => {
  const [showUpdateNotification, setShowUpdateNotification] = useState(false);

  useEffect(() => {
    // Listen for the custom event dispatched by the service worker
    const handleUpdate = () => {
      setShowUpdateNotification(true);
    };

    window.addEventListener('swUpdate', handleUpdate);

    return () => {
      window.removeEventListener('swUpdate', handleUpdate);
    };
  }, []);

  const handleUpdate = () => {
    // Unregister all service workers and reload
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.getRegistrations().then(registrations => {
        registrations.forEach(reg => reg.unregister());
        setShowUpdateNotification(false);
        window.location.reload();
      });
    } else {
      setShowUpdateNotification(false);
      window.location.reload();
    }
  };

  if (!showUpdateNotification) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg z-50 flex flex-col">
      <p className="mb-2">A new version is available!</p>
      <div className="flex space-x-2">
        <button
          onClick={handleUpdate}
          className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100 transition-colors"
        >
          Update Now
        </button>
        <button
          onClick={() => setShowUpdateNotification(false)}
          className="bg-transparent border border-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Later
        </button>
      </div>
    </div>
  );
};

export default UpdateNotification;
