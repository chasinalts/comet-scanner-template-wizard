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
                className="block text-cyan-300 font-semibold mb-2"
                data-oid="2y25xhq"
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
                data-oid="blo5l_6"
              />
            </div>

            {error && (
              <p
                className="text-red-400 text-sm text-center"
                data-oid="leay_op"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="futuristic-button w-full px-6 py-3"
              data-oid="5a-rj18"
            >
              Access Dashboard
            </button>
          </form>

          <div className="mt-8 text-center" data-oid="gjx34:z">
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="inbs:cx"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen futuristic-grid-bg" data-oid="b.tkzvx">
      {/* Admin Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="z9mucmq"
      >
        <div className="container mx-auto px-6 py-4" data-oid="l7x6xfg">
          <div className="flex items-center justify-between" data-oid="-f_pc00">
            <h1
              className="holographic-title text-2xl"
              data-text="COMET Scanner Admin Dashboard"
              data-oid="no7xfl1"
            >
              COMET Scanner Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4" data-oid="9uhs2g1">
              <span
                className="holographic-text"
                data-text="Admin Mode"
                data-oid=":.9fpwy"
              >
                Admin Mode
              </span>
              <button
                onClick={handleLogout}
                className="futuristic-button px-4 py-2"
                data-oid="jzha-3v"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <AdminDashboard data-oid="x1l79bg" />
    </div>
  );
}
