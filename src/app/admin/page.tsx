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
        data-oid="i0jeyvm"
      >
        <div
          className="p-8 futuristic-container w-auto max-w-md"
          data-oid=":0o0q49"
        >
          <h1
            className="mb-6 holographic-title text-center"
            data-text="Admin Access"
            data-oid="4mp_x0g"
          >
            Admin Access
          </h1>

          <form onSubmit={handleLogin} className="space-y-6" data-oid="n5bzkb6">
            <div data-oid="ewt4gdc">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-cyan-300 mb-2"
                data-oid="ej_ek8j"
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
                data-oid="cptdn9i"
              />
            </div>

            {error && (
              <div
                className="text-red-400 text-sm text-center"
                data-oid="89ct92x"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
              data-oid="h.8th5t"
            >
              Access Admin Panel
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen futuristic-grid-bg" data-oid="xt0ies8">
      <div className="container mx-auto px-6 py-8" data-oid="p91g-sq">
        <div
          className="flex items-center justify-between mb-8"
          data-oid="t2_c-l0"
        >
          <h1
            className="holographic-title text-4xl font-bold"
            data-text="Admin Dashboard"
            data-oid="lq-3ul_"
          >
            Admin Dashboard
          </h1>
          <button
            onClick={handleLogout}
            className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-300"
            data-oid="j4ajrlw"
          >
            Logout
          </button>
        </div>

        <AdminDashboard data-oid="396njwm" />
      </div>
    </main>
  );
}
