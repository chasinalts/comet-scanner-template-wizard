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
        data-oid=":bavo.t"
      >
        <div
          className="p-8 futuristic-container w-auto max-w-md"
          data-oid=":etilcn"
        >
          <h1
            className="mb-6 holographic-title text-center"
            data-text="Admin Access"
            data-oid="z5c.:5h"
          >
            Admin Access
          </h1>

          <form onSubmit={handleLogin} className="space-y-6" data-oid="f9yeo31">
            <div data-oid="ghn96mw">
              <label
                className="block text-cyan-300 font-semibold mb-2"
                data-oid="9zk1jhn"
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
                data-oid="g-q.6d5"
              />
            </div>

            {error && (
              <p
                className="text-red-400 text-sm text-center"
                data-oid="i7s2n2x"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="futuristic-button w-full px-6 py-3"
              data-oid="okfg3x9"
            >
              Access Dashboard
            </button>
          </form>

          <div className="mt-8 text-center" data-oid="ma321p6">
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="br8b9r:"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen futuristic-grid-bg" data-oid="kn4ist1">
      {/* Admin Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="shzyp:g"
      >
        <div className="container mx-auto px-6 py-4" data-oid="kb:ef5m">
          <div className="flex items-center justify-between" data-oid="pw9709_">
            <h1
              className="holographic-title text-2xl"
              data-text="COMET Scanner Admin Dashboard"
              data-oid="tzmqfho"
            >
              COMET Scanner Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4" data-oid="u.:w3zt">
              <span
                className="holographic-text"
                data-text="Admin Mode"
                data-oid=":x5qgyq"
              >
                Admin Mode
              </span>
              <button
                onClick={handleLogout}
                className="futuristic-button px-4 py-2"
                data-oid="4udekj8"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <AdminDashboard data-oid="5j0d:fw" />
    </div>
  );
}
