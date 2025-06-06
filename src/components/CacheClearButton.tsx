"use client";

import { useState } from "react";

export default function CacheClearButton() {
  const [isClearing, setIsClearing] = useState(false);
  const [lastCleared, setLastCleared] = useState<string | null>(null);

  const clearBrowserCache = async () => {
    setIsClearing(true);

    try {
      // Clear various browser storage mechanisms

      // 1. Clear localStorage
      if (typeof window !== "undefined" && window.localStorage) {
        window.localStorage.clear();
      }

      // 2. Clear sessionStorage
      if (typeof window !== "undefined" && window.sessionStorage) {
        window.sessionStorage.clear();
      }

      // 3. Clear IndexedDB (if available)
      if (typeof window !== "undefined" && window.indexedDB) {
        try {
          const databases = await window.indexedDB.databases();
          await Promise.all(
            databases.map((db) => {
              if (db.name) {
                return new Promise((resolve, reject) => {
                  const deleteReq = window.indexedDB.deleteDatabase(db.name!);
                  deleteReq.onsuccess = () => resolve(true);
                  deleteReq.onerror = () => reject(deleteReq.error);
                });
              }
            }),
          );
        } catch (error) {
          console.warn("Could not clear IndexedDB:", error);
        }
      }

      // 4. Clear service worker caches (if available)
      if (typeof window !== "undefined" && "caches" in window) {
        try {
          const cacheNames = await caches.keys();
          await Promise.all(
            cacheNames.map((cacheName) => caches.delete(cacheName)),
          );
        } catch (error) {
          console.warn("Could not clear service worker caches:", error);
        }
      }

      // 5. Force reload to clear memory cache
      setTimeout(() => {
        if (typeof window !== "undefined") {
          // Use location.reload(true) to force reload from server
          window.location.reload();
        }
      }, 1000);

      setLastCleared(new Date().toLocaleTimeString());
    } catch (error) {
      console.error("Error clearing cache:", error);
    } finally {
      setIsClearing(false);
    }
  };

  const clearSpecificCache = async (
    type: "localStorage" | "sessionStorage" | "indexedDB" | "serviceWorker",
  ) => {
    try {
      switch (type) {
        case "localStorage":
          if (typeof window !== "undefined" && window.localStorage) {
            window.localStorage.clear();
          }
          break;

        case "sessionStorage":
          if (typeof window !== "undefined" && window.sessionStorage) {
            window.sessionStorage.clear();
          }
          break;

        case "indexedDB":
          if (typeof window !== "undefined" && window.indexedDB) {
            const databases = await window.indexedDB.databases();
            await Promise.all(
              databases.map((db) => {
                if (db.name) {
                  return new Promise((resolve, reject) => {
                    const deleteReq = window.indexedDB.deleteDatabase(db.name!);
                    deleteReq.onsuccess = () => resolve(true);
                    deleteReq.onerror = () => reject(deleteReq.error);
                  });
                }
              }),
            );
          }
          break;

        case "serviceWorker":
          if (typeof window !== "undefined" && "caches" in window) {
            const cacheNames = await caches.keys();
            await Promise.all(
              cacheNames.map((cacheName) => caches.delete(cacheName)),
            );
          }
          break;
      }
    } catch (error) {
      console.error(`Error clearing ${type}:`, error);
    }
  };

  return (
    <div
      className="bg-slate-800 border border-cyan-500/30 rounded-lg p-4"
      data-oid="wyzy27n"
    >
      <h3
        className="text-lg font-semibold text-cyan-400 mb-4"
        data-oid="ffpd.2v"
      >
        Browser Cache Management
      </h3>

      {/* Main Clear Button */}
      <div className="mb-4" data-oid="xqr:fs3">
        <button
          onClick={clearBrowserCache}
          disabled={isClearing}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            isClearing
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
          data-oid=".8sr-1f"
        >
          {isClearing ? (
            <span
              className="flex items-center justify-center"
              data-oid="l60jtka"
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                data-oid="howonti"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  data-oid="hc3pl9n"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  data-oid="7375-oy"
                ></path>
              </svg>
              Clearing Cache...
            </span>
          ) : (
            "🗑️ Clear All Browser Cache & Reload"
          )}
        </button>

        {lastCleared && (
          <p className="text-sm text-gray-400 mt-2" data-oid="gk3t.m5">
            Last cleared: {lastCleared}
          </p>
        )}
      </div>

      {/* Specific Cache Controls */}
      <div className="space-y-2" data-oid=":cu83z4">
        <p className="text-sm text-gray-300 mb-2" data-oid="jpq5.kx">
          Clear specific cache types:
        </p>

        <div className="grid grid-cols-2 gap-2" data-oid="v_3prqk">
          <button
            onClick={() => clearSpecificCache("localStorage")}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-3 rounded transition-colors"
            data-oid="fq3at-m"
          >
            Local Storage
          </button>

          <button
            onClick={() => clearSpecificCache("sessionStorage")}
            className="bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-3 rounded transition-colors"
            data-oid="16yonc1"
          >
            Session Storage
          </button>

          <button
            onClick={() => clearSpecificCache("indexedDB")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-2 px-3 rounded transition-colors"
            data-oid="t4jrra9"
          >
            IndexedDB
          </button>

          <button
            onClick={() => clearSpecificCache("serviceWorker")}
            className="bg-purple-500 hover:bg-purple-600 text-white text-sm py-2 px-3 rounded transition-colors"
            data-oid="ilpkbhs"
          >
            Service Worker
          </button>
        </div>
      </div>

      {/* Info */}
      <div
        className="mt-4 p-3 bg-slate-700 rounded text-sm text-gray-300"
        data-oid="7w:7-:i"
      >
        <p className="font-medium text-cyan-400 mb-1" data-oid="k2t3te-">
          ℹ️ Cache Clearing Info:
        </p>
        <ul className="text-xs space-y-1" data-oid="ri8a5qt">
          <li data-oid="5w207i0">
            • Full clear will reload the page to ensure fresh content
          </li>
          <li data-oid="x0uaruw">• Use before testing new functionality</li>
          <li data-oid="ku5iheq">• Specific clears won't reload the page</li>
          <li data-oid="1_q_bpl">
            • Some caches may require manual browser refresh
          </li>
        </ul>
      </div>
    </div>
  );
}
