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
      data-oid="1vk6rdy"
    >
      <h3
        className="text-lg font-semibold text-cyan-400 mb-4"
        data-oid="opkiihk"
      >
        Browser Cache Management
      </h3>

      {/* Main Clear Button */}
      <div className="mb-4" data-oid="._m7xom">
        <button
          onClick={clearBrowserCache}
          disabled={isClearing}
          className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 ${
            isClearing
              ? "bg-gray-600 text-gray-300 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 text-white"
          }`}
          data-oid="2js0brj"
        >
          {isClearing ? (
            <span
              className="flex items-center justify-center"
              data-oid="_ctbpwb"
            >
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                data-oid="-msza26"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  data-oid="xivt074"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  data-oid="_z_:sb2"
                ></path>
              </svg>
              Clearing Cache...
            </span>
          ) : (
            "🗑️ Clear All Browser Cache & Reload"
          )}
        </button>

        {lastCleared && (
          <p className="text-sm text-gray-400 mt-2" data-oid="mwra0jc">
            Last cleared: {lastCleared}
          </p>
        )}
      </div>

      {/* Specific Cache Controls */}
      <div className="space-y-2" data-oid="xii9j8p">
        <p className="text-sm text-gray-300 mb-2" data-oid="i:9j2oj">
          Clear specific cache types:
        </p>

        <div className="grid grid-cols-2 gap-2" data-oid="ijh6xi0">
          <button
            onClick={() => clearSpecificCache("localStorage")}
            className="bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-3 rounded transition-colors"
            data-oid="yynsuqp"
          >
            Local Storage
          </button>

          <button
            onClick={() => clearSpecificCache("sessionStorage")}
            className="bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-3 rounded transition-colors"
            data-oid="v2zjva."
          >
            Session Storage
          </button>

          <button
            onClick={() => clearSpecificCache("indexedDB")}
            className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm py-2 px-3 rounded transition-colors"
            data-oid="b._1bgj"
          >
            IndexedDB
          </button>

          <button
            onClick={() => clearSpecificCache("serviceWorker")}
            className="bg-purple-500 hover:bg-purple-600 text-white text-sm py-2 px-3 rounded transition-colors"
            data-oid="w9wi:_8"
          >
            Service Worker
          </button>
        </div>
      </div>

      {/* Info */}
      <div
        className="mt-4 p-3 bg-slate-700 rounded text-sm text-gray-300"
        data-oid="gpnf_-x"
      >
        <p className="font-medium text-cyan-400 mb-1" data-oid="nuba_d9">
          ℹ️ Cache Clearing Info:
        </p>
        <ul className="text-xs space-y-1" data-oid="ao.0u95">
          <li data-oid="c_o4yjx">
            • Full clear will reload the page to ensure fresh content
          </li>
          <li data-oid="fg07hf0">• Use before testing new functionality</li>
          <li data-oid="lfs9a-b">• Specific clears won't reload the page</li>
          <li data-oid="6.i:vrh">
            • Some caches may require manual browser refresh
          </li>
        </ul>
      </div>
    </div>
  );
}
