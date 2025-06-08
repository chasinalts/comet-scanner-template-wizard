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
        data-oid="-7forqa"
      >
        <div
          className="p-8 futuristic-container w-auto max-w-md"
          data-oid="dg3ji44"
        >
          <h1
            className="mb-6 holographic-title text-center"
            data-text="Admin Access"
            data-oid="ejqqdwl"
          >
            Admin Access
          </h1>

          <form onSubmit={handleLogin} className="space-y-6" data-oid="yrrylxs">
            <div data-oid="b5xxg.g">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-cyan-300 mb-2"
                data-oid="0432o69"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-slate-800 border border-cyan-500/30 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                placeholder="Enter admin password"
                required
                data-oid="k77vizt"
              />
            </div>

            {error && (
              <div
                className="text-red-400 text-sm text-center"
                data-oid="w9n.y.x"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              data-oid="xh-:ynt"
            >
              Access Admin Panel
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen futuristic-grid-bg" data-oid="njicxf8">
      <div className="container mx-auto px-6 py-8" data-oid="k:stoei">
        <div
          className="flex items-center justify-between mb-8"
          data-oid="1w9pz10"
        >
          <h1
            className="holographic-title text-4xl font-bold"
            data-text="Admin Dashboard"
            data-oid="qo_6-hv"
          >
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
            data-oid="kg33:ox"
          >
            Logout
          </button>
        </div>

        <AdminDashboard data-oid="ic6ystm" />
      </div>
    </main>
  );
}
