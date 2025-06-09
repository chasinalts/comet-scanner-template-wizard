"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js";

interface UserSession {
  id: string;
  user_id: string;
  session_data: any;
  expires_at: string;
  created_at: string;
  updated_at: string;
}

interface UserProfile {
  id: string;
  email: string;
  role: string;
  is_active: boolean;
  last_login: string | null;
  created_at: string;
}

interface AuthManagerProps {
  onAuthUpdate?: () => void;
}

export default function AuthManager({ onAuthUpdate }: AuthManagerProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [sessions, setSessions] = useState<UserSession[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"users" | "sessions" | "settings">(
    "users",
  );
  const [showCreateUser, setShowCreateUser] = useState(false);
  const [newUserData, setNewUserData] = useState({
    email: "",
    password: "",
    role: "user",
  });

  const roles = ["admin", "editor", "user", "viewer"];

  useEffect(() => {
    getCurrentUser();
    fetchUsers();
    fetchSessions();
  }, []);

  const getCurrentUser = async () => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setCurrentUser(user);
    } catch (err) {
      console.error("Error getting current user:", err);
    }
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      // Note: This assumes a user_profiles table exists. If not, we'll need to create it.
      const { data, error } = await supabase
        .from("user_profiles")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        if (error.code === "42P01") {
          setError(
            "User profiles table not found. Please create the table first.",
          );
          setUsers([]);
        } else {
          throw error;
        }
      } else {
        setUsers(data || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  const fetchSessions = async () => {
    try {
      const { data, error } = await supabase
        .from("user_sessions")
        .select("*")
        .order("created_at", { ascending: false })
        .limit(50);

      if (error) {
        console.error("Error fetching sessions:", error);
      } else {
        setSessions(data || []);
      }
    } catch (err) {
      console.error("Error fetching sessions:", err);
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);

      // Create user in Supabase Auth
      const { data, error } = await supabase.auth.admin.createUser({
        email: newUserData.email,
        password: newUserData.password,
        email_confirm: true,
      });

      if (error) throw error;

      // Create user profile
      if (data.user) {
        const { error: profileError } = await supabase
          .from("user_profiles")
          .insert([
            {
              id: data.user.id,
              email: newUserData.email,
              role: newUserData.role,
              is_active: true,
              created_at: new Date().toISOString(),
            },
          ]);

        if (profileError) {
          console.error("Error creating user profile:", profileError);
        }
      }

      // Reset form and refresh data
      setNewUserData({ email: "", password: "", role: "user" });
      setShowCreateUser(false);
      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create user");
    }
  };

  const handleUpdateUserRole = async (userId: string, newRole: string) => {
    try {
      setError(null);
      const { error } = await supabase
        .from("user_profiles")
        .update({ role: newRole })
        .eq("id", userId);

      if (error) throw error;
      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update user role",
      );
    }
  };

  const handleToggleUserStatus = async (userId: string, isActive: boolean) => {
    try {
      setError(null);
      const { error } = await supabase
        .from("user_profiles")
        .update({ is_active: !isActive })
        .eq("id", userId);

      if (error) throw error;
      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to update user status",
      );
    }
  };

  const handleDeleteUser = async (userId: string) => {
    if (
      !confirm(
        "Are you sure you want to delete this user? This action cannot be undone.",
      )
    )
      return;

    try {
      setError(null);

      // Delete from auth (requires admin privileges)
      const { error: authError } = await supabase.auth.admin.deleteUser(userId);
      if (authError) throw authError;

      // Delete user profile
      const { error: profileError } = await supabase
        .from("user_profiles")
        .delete()
        .eq("id", userId);

      if (profileError) {
        console.error("Error deleting user profile:", profileError);
      }

      await fetchUsers();
      onAuthUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete user");
    }
  };

  const handleInvalidateSession = async (sessionId: string) => {
    try {
      setError(null);
      const { error } = await supabase
        .from("user_sessions")
        .delete()
        .eq("id", sessionId);

      if (error) throw error;
      await fetchSessions();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to invalidate session",
      );
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const isExpired = (expiresAt: string) => {
    return new Date(expiresAt) < new Date();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8" data-oid="-9uwkjk">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"
          data-oid="4.z..--"
        ></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="qg7:jui">
      {/* Header */}
      <div className="flex justify-between items-center" data-oid="qxj9enc">
        <h2 className="text-2xl font-bold text-white" data-oid="014sulw">
          Authentication Manager
        </h2>
        <div className="flex space-x-2" data-oid="6aac21i">
          {currentUser && (
            <span className="text-sm text-slate-400" data-oid="729q8sx">
              Logged in as: {currentUser.email}
            </span>
          )}
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div
          className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
          data-oid="opuhz.q"
        >
          {error}
          {error.includes("table not found") && (
            <div className="mt-2 text-sm" data-oid="_v:.bud">
              <p data-oid="8e8lnc_">SQL to create the user_profiles table:</p>
              <pre
                className="bg-slate-900 p-2 rounded mt-1 text-xs overflow-x-auto"
                data-oid="yla8qs6"
              >
                {`CREATE TABLE user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'user',
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Tabs */}
      <div
        className="flex space-x-1 bg-slate-800 p-1 rounded-lg"
        data-oid="qp_67xb"
      >
        {(["users", "sessions", "settings"] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-cyan-500 text-white"
                : "text-slate-300 hover:text-white hover:bg-slate-700"
            }`}
            data-oid="68oe_96"
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Users Tab */}
      {activeTab === "users" && (
        <div className="space-y-4" data-oid="kojde3k">
          <div className="flex justify-between items-center" data-oid="br8lduq">
            <h3 className="text-lg font-semibold text-white" data-oid="d-xls6n">
              User Management
            </h3>
            <button
              onClick={() => setShowCreateUser(true)}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
              data-oid="8_5ut5f"
            >
              Create User
            </button>
          </div>

          {/* Create User Form */}
          {showCreateUser && (
            <div
              className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6"
              data-oid="b-62kjo"
            >
              <h4
                className="text-lg font-semibold text-white mb-4"
                data-oid=":f8rzfw"
              >
                Create New User
              </h4>
              <form
                onSubmit={handleCreateUser}
                className="space-y-4"
                data-oid="i8dzp4e"
              >
                <div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  data-oid="y4hvmnd"
                >
                  <div data-oid="t2oaoqd">
                    <label
                      className="block text-cyan-300 text-sm font-medium mb-2"
                      data-oid="bll0_f_"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      value={newUserData.email}
                      onChange={(e) =>
                        setNewUserData({
                          ...newUserData,
                          email: e.target.value,
                        })
                      }
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                      required
                      data-oid="pmevred"
                    />
                  </div>
                  <div data-oid="c8e_fct">
                    <label
                      className="block text-cyan-300 text-sm font-medium mb-2"
                      data-oid="-eh2zlf"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      value={newUserData.password}
                      onChange={(e) =>
                        setNewUserData({
                          ...newUserData,
                          password: e.target.value,
                        })
                      }
                      className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                      required
                      minLength={6}
                      data-oid="5bh-773"
                    />
                  </div>
                </div>
                <div data-oid="8k_kpg:">
                  <label
                    className="block text-cyan-300 text-sm font-medium mb-2"
                    data-oid="6zqi:fx"
                  >
                    Role
                  </label>
                  <select
                    value={newUserData.role}
                    onChange={(e) =>
                      setNewUserData({ ...newUserData, role: e.target.value })
                    }
                    className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                    data-oid="_rfi3co"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role} data-oid="1h155j5">
                        {role}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex space-x-4" data-oid="61r2fib">
                  <button
                    type="submit"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                    data-oid="0c08grc"
                  >
                    Create User
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateUser(false)}
                    className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                    data-oid="er2-deo"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Users List */}
          <div
            className="bg-slate-800 rounded-lg overflow-hidden"
            data-oid="fvbn3:l"
          >
            <div className="overflow-x-auto" data-oid="o1:3quh">
              <table className="w-full" data-oid="0fmlkrb">
                <thead className="bg-slate-700" data-oid="6drnep7">
                  <tr data-oid="nl26tql">
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="apkqqqn"
                    >
                      Email
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="0uoep8b"
                    >
                      Role
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="cg8r8qu"
                    >
                      Status
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="tzny7n."
                    >
                      Last Login
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="kozqrr4"
                    >
                      Created
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="o_nk:u8"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700" data-oid=".-x27jo">
                  {users.map((user) => (
                    <tr
                      key={user.id}
                      className="hover:bg-slate-700/50"
                      data-oid="knv95.y"
                    >
                      <td className="px-4 py-3 text-white" data-oid="83bwwuh">
                        {user.email}
                      </td>
                      <td className="px-4 py-3" data-oid="nhl7_:g">
                        <select
                          value={user.role}
                          onChange={(e) =>
                            handleUpdateUserRole(user.id, e.target.value)
                          }
                          className="bg-slate-600 border border-slate-500 text-white rounded px-2 py-1 text-sm"
                          data-oid="6gbr1pg"
                        >
                          {roles.map((role) => (
                            <option key={role} value={role} data-oid="8kg82n3">
                              {role}
                            </option>
                          ))}
                        </select>
                      </td>
                      <td className="px-4 py-3" data-oid="r:oujv8">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            user.is_active
                              ? "bg-green-500/20 text-green-300"
                              : "bg-red-500/20 text-red-300"
                          }`}
                          data-oid="mlns.iy"
                        >
                          {user.is_active ? "Active" : "Inactive"}
                        </span>
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="vm0.gd-"
                      >
                        {user.last_login
                          ? formatDate(user.last_login)
                          : "Never"}
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="jb7lq0i"
                      >
                        {formatDate(user.created_at)}
                      </td>
                      <td className="px-4 py-3" data-oid="cl.s434">
                        <div className="flex space-x-2" data-oid="jig8a6z">
                          <button
                            onClick={() =>
                              handleToggleUserStatus(user.id, user.is_active)
                            }
                            className={`px-2 py-1 rounded text-xs transition-colors ${
                              user.is_active
                                ? "bg-yellow-500 hover:bg-yellow-600 text-white"
                                : "bg-green-500 hover:bg-green-600 text-white"
                            }`}
                            data-oid="e8e79a1"
                          >
                            {user.is_active ? "Deactivate" : "Activate"}
                          </button>
                          <button
                            onClick={() => handleDeleteUser(user.id)}
                            className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs transition-colors"
                            data-oid="p4wld1l"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Sessions Tab */}
      {activeTab === "sessions" && (
        <div className="space-y-4" data-oid="5cx74ox">
          <div className="flex justify-between items-center" data-oid="zfz1j-s">
            <h3 className="text-lg font-semibold text-white" data-oid="pon-qna">
              Active Sessions
            </h3>
            <button
              onClick={fetchSessions}
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
              data-oid="b4.0e2b"
            >
              Refresh
            </button>
          </div>

          <div
            className="bg-slate-800 rounded-lg overflow-hidden"
            data-oid="2hhixcc"
          >
            <div className="overflow-x-auto" data-oid="252cvit">
              <table className="w-full" data-oid="5xs7rwm">
                <thead className="bg-slate-700" data-oid=".by6.wr">
                  <tr data-oid="hci_vw6">
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="wqk-4_9"
                    >
                      User ID
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="ubzv8vk"
                    >
                      Created
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="5fcrqc4"
                    >
                      Expires
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="9o2gt9s"
                    >
                      Status
                    </th>
                    <th
                      className="px-4 py-3 text-left text-cyan-300 font-medium"
                      data-oid="n_8i_38"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700" data-oid="wlg7m5.">
                  {sessions.map((session) => (
                    <tr
                      key={session.id}
                      className="hover:bg-slate-700/50"
                      data-oid="yc9uil5"
                    >
                      <td
                        className="px-4 py-3 text-white font-mono text-sm"
                        data-oid="zxiu-8k"
                      >
                        {session.user_id.substring(0, 8)}...
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="t6i_y50"
                      >
                        {formatDate(session.created_at)}
                      </td>
                      <td
                        className="px-4 py-3 text-slate-300 text-sm"
                        data-oid="1w:ya16"
                      >
                        {formatDate(session.expires_at)}
                      </td>
                      <td className="px-4 py-3" data-oid="4ebk0bg">
                        <span
                          className={`px-2 py-1 rounded text-xs ${
                            isExpired(session.expires_at)
                              ? "bg-red-500/20 text-red-300"
                              : "bg-green-500/20 text-green-300"
                          }`}
                          data-oid="kc7a2x1"
                        >
                          {isExpired(session.expires_at) ? "Expired" : "Active"}
                        </span>
                      </td>
                      <td className="px-4 py-3" data-oid="ei.nkd2">
                        <button
                          onClick={() => handleInvalidateSession(session.id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded text-xs transition-colors"
                          data-oid="sjrx4ba"
                        >
                          Invalidate
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="space-y-4" data-oid="z62s5zo">
          <h3 className="text-lg font-semibold text-white" data-oid="lbxtrb4">
            Authentication Settings
          </h3>

          <div
            className="bg-slate-800 border border-slate-700 rounded-lg p-6"
            data-oid="mu3:6ud"
          >
            <h4
              className="text-md font-semibold text-white mb-4"
              data-oid="v0-..d4"
            >
              Security Configuration
            </h4>

            <div className="space-y-4" data-oid="be4.-ac">
              <div
                className="flex items-center justify-between"
                data-oid="a3b:6vq"
              >
                <div data-oid="t1lwu33">
                  <label
                    className="text-cyan-300 font-medium"
                    data-oid="mot4f_t"
                  >
                    Require Email Confirmation
                  </label>
                  <p className="text-slate-400 text-sm" data-oid="h8yipcz">
                    Users must confirm their email before accessing the system
                  </p>
                </div>
                <input
                  type="checkbox"
                  defaultChecked
                  className="toggle"
                  data-oid="oj9u..y"
                />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="d0fkbzz"
              >
                <div data-oid="9pm1kbz">
                  <label
                    className="text-cyan-300 font-medium"
                    data-oid=".8ysd7n"
                  >
                    Enable Two-Factor Authentication
                  </label>
                  <p className="text-slate-400 text-sm" data-oid=":5nsbse">
                    Require 2FA for admin users
                  </p>
                </div>
                <input type="checkbox" className="toggle" data-oid="uesbu1q" />
              </div>

              <div
                className="flex items-center justify-between"
                data-oid="ljjycej"
              >
                <div data-oid="ivibo4y">
                  <label
                    className="text-cyan-300 font-medium"
                    data-oid=".m0z0y8"
                  >
                    Session Timeout (hours)
                  </label>
                  <p className="text-slate-400 text-sm" data-oid="8ak-g45">
                    Automatically log out inactive users
                  </p>
                </div>
                <input
                  type="number"
                  defaultValue={24}
                  min={1}
                  max={168}
                  className="bg-slate-700 border border-slate-600 text-white rounded px-3 py-1 w-20"
                  data-oid="44n5hry"
                />
              </div>
            </div>

            <div className="mt-6" data-oid="twoy7q_">
              <button
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
                data-oid="26nz255"
              >
                Save Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
