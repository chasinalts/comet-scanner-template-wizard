import React, { useState, useEffect } from 'react';
import { updateServiceWorker } from '../../utils/serviceWorkerRegistration';

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
    updateServiceWorker();
    setShowUpdateNotification(false);
    // Force reload to ensure the user gets the latest version
    window.location.reload();
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
