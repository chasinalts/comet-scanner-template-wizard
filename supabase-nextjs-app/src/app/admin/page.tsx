"use client";

import { useState, useEffect } from "react";
import AdminDashboard from "@/components/AdminDashboard";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = "comet2025"; // This should be in environment variables

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setError("");
    } else {
      setError("Invalid password");
      setPassword("");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword("");
  };

  if (!isAuthenticated) {
    return (
      <main
        className="flex flex-col items-center justify-center min-h-screen p-24 futuristic-grid-bg"
        data-oid=".e7uvj-"
      >
        <div
          className="p-8 futuristic-container w-auto max-w-md"
          data-oid="tunm.m8"
        >
          <h1
            className="mb-6 holographic-title text-center"
            data-text="Admin Access"
            data-oid="33_pun8"
          >
            Admin Access
          </h1>

          <form onSubmit={handleLogin} className="space-y-6" data-oid="g:jkf8b">
            <div data-oid="-_dzn3y">
              <label
                className="block text-cyan-300 font-semibold mb-2"
                data-oid="-euh19_"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="futuristic-input w-full"
                placeholder="Enter admin password"
                required
                data-oid="xdgjwqj"
              />
            </div>

            {error && (
              <p
                className="text-red-400 text-sm text-center"
                data-oid="u-4xlcg"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="futuristic-button w-full px-6 py-3"
              data-oid="ta3n7vn"
            >
              Access Dashboard
            </button>
          </form>

          <div className="mt-8 text-center" data-oid=":_stjro">
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="_nn36nq"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen futuristic-grid-bg" data-oid="3k9uevz">
      {/* Admin Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="7vi.cc6"
      >
        <div className="container mx-auto px-6 py-4" data-oid="hma81-x">
          <div className="flex items-center justify-between" data-oid="g21drci">
            <h1
              className="holographic-title text-2xl"
              data-text="COMET Scanner Admin Dashboard"
              data-oid="e::.vhz"
            >
              COMET Scanner Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4" data-oid="ofe144f">
              <span
                className="holographic-text"
                data-text="Admin Mode"
                data-oid="_qt.6in"
              >
                Admin Mode
              </span>
              <button
                onClick={handleLogout}
                className="futuristic-button px-4 py-2"
                data-oid="1-d5kff"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <AdminDashboard data-oid="47ann-z" />
    </div>
  );
}
