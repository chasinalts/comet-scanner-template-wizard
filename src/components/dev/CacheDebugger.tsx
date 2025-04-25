import React, { useState } from 'react';
// Service worker and cache clearing logic is now inline below, since serviceWorkerRegistration no longer exists.

const CacheDebugger: React.FC = () => {
  const [isClearing, setIsClearing] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Only show in development or if explicitly enabled
  const isDev = process.env.NODE_ENV === 'development';
  const isDebugEnabled = isDev || localStorage.getItem('enableCacheDebugger') === 'true';

  if (!isDebugEnabled) return null;

  const handleClearCache = async () => {
    setIsClearing(true);
    setMessage('Clearing caches and service workers...');
    
    try {
      // Clear all caches
      if ('caches' in window) {
        const cacheNames = await caches.keys();
        await Promise.all(cacheNames.map(name => caches.delete(name)));
      }
      // Unregister all service workers
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        await Promise.all(registrations.map(reg => reg.unregister()));
      }
      setMessage('Successfully cleared all caches and service workers. Reloading in 2 seconds...');
      
      // Reload the page after a short delay
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      setMessage(`Error clearing cache: ${error instanceof Error ? error.message : String(error)}`);
    } finally {
      setIsClearing(false);
    }
  };

  return (
    <div className="fixed top-4 right-4 bg-red-600 text-white p-4 rounded-lg shadow-lg z-50 max-w-xs">
      <h3 className="text-lg font-bold mb-2">Cache Debugger</h3>
      <p className="text-sm mb-3">
        Use this tool to clear all caches and service workers if you're experiencing stale content issues.
      </p>
      
      <button
        onClick={handleClearCache}
        disabled={isClearing}
        className="bg-white text-red-600 px-4 py-2 rounded hover:bg-red-100 transition-colors disabled:opacity-50 w-full"
      >
        {isClearing ? 'Clearing...' : 'Clear All Caches'}
      </button>
      
      {message && (
        <div className="mt-3 text-sm bg-red-700 p-2 rounded">
          {message}
        </div>
      )}
    </div>
  );
};

export default CacheDebugger;
