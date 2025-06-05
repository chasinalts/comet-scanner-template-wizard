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
        data-oid="xw5r3_4"
      >
        <div
          className="p-8 futuristic-container w-auto max-w-md"
          data-oid=":l-l_mv"
        >
          <h1
            className="mb-6 holographic-title text-center"
            data-text="Admin Access"
            data-oid="_0euza1"
          >
            Admin Access
          </h1>

          <form onSubmit={handleLogin} className="space-y-6" data-oid="1gy2yas">
            <div data-oid="f51bnhv">
              <label
                className="block text-cyan-300 font-semibold mb-2"
                data-oid="4ik.3p7"
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
                data-oid="7f31.48"
              />
            </div>

            {error && (
              <p
                className="text-red-400 text-sm text-center"
                data-oid="onj7gzu"
              >
                {error}
              </p>
            )}

            <button
              type="submit"
              className="futuristic-button w-full px-6 py-3"
              data-oid="o_c3nmk"
            >
              Access Dashboard
            </button>
          </form>

          <div className="mt-8 text-center" data-oid="yvlo4xm">
            <a
              href="/"
              className="text-cyan-400 hover:text-cyan-300 transition-colors"
              data-oid="xyamwks"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <div className="min-h-screen futuristic-grid-bg" data-oid="lqoilrj">
      {/* Admin Header */}
      <header
        className="bg-slate-900 bg-opacity-50 backdrop-blur-md border-b border-cyan-500/30"
        data-oid="mi17l:d"
      >
        <div className="container mx-auto px-6 py-4" data-oid="il12402">
          <div className="flex items-center justify-between" data-oid="gt5dyw.">
            <h1
              className="holographic-title text-2xl"
              data-text="COMET Scanner Admin Dashboard"
              data-oid="esewl2f"
            >
              COMET Scanner Admin Dashboard
            </h1>
            <div className="flex items-center space-x-4" data-oid="0qrmf-e">
              <span
                className="holographic-text"
                data-text="Admin Mode"
                data-oid="d7m5_lj"
              >
                Admin Mode
              </span>
              <button
                onClick={handleLogout}
                className="futuristic-button px-4 py-2"
                data-oid="5n63w.y"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <AdminDashboard data-oid=".-:au_t" />
    </div>
  );
}
