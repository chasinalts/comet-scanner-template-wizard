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
        data-oid="blpx916"
      >
        <div
          className="p-8 futuristic-container w-auto max-w-md"
          data-oid="5.qnwhh"
        >
          <h1
            className="mb-6 holographic-title text-center"
            data-text="Admin Access"
            data-oid="i6-hz79"
          >
            Admin Access
          </h1>

          <form onSubmit={handleLogin} className="space-y-6" data-oid="h_o1o-l">
            <div data-oid="dn87kvb">
              <label
                className="block text-cyan-300 font-semibold mb-2"
                data-oid="6d5s:uf"
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
                data-oid="3c4.sth"
              />
            </div>

            {error && (
              <p
                className="text-red-400 text-sm text-center"
                data-oid="cdbeln0"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="futuristic-button w-full px-6 py-3"
              data-oid="bt_brbr"
            >
              Access Dashboard
            </button>
          </form>

          <div className="mt-8 text-center" data-oid="_4y_3ae">
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="l_xmhms"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen futuristic-grid-bg" data-oid="d04et9y">
      {/* Admin Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="pc31vv_"
      >
        <div className="container mx-auto px-6 py-4" data-oid="iwnpp-d">
          <div className="flex items-center justify-between" data-oid="k2n4_ft">
            <h1
              className="holographic-title text-2xl"
              data-text="COMET Scanner Admin Dashboard"
              data-oid="nu.jqxf"
            >
              COMET Scanner Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4" data-oid="jo041hm">
              <span
                className="holographic-text"
                data-text="Admin Mode"
                data-oid="d0x:4bh"
              >
                Admin Mode
              </span>
              <button
                onClick={handleLogout}
                className="futuristic-button px-4 py-2"
                data-oid="suco5t2"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <AdminDashboard data-oid="9986_vy" />
    </div>
  );
}
