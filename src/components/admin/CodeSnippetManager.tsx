"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface CodeSnippet {
  id: string;
  name: string;
  description: string;
  code: string;
  language: string;
  category: string;
  tags: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface CodeSnippetInsert {
  name: string;
  description: string;
  code: string;
  language: string;
  category: string;
  tags: string[];
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

interface CodeSnippetManagerProps {
  onSnippetUpdate?: () => void;
}

export default function CodeSnippetManager({
  onSnippetUpdate,
}: CodeSnippetManagerProps) {
  const [snippets, setSnippets] = useState<CodeSnippet[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingSnippet, setEditingSnippet] = useState<CodeSnippet | null>(
    null,
  );
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [filterLanguage, setFilterLanguage] = useState<string>("all");
  const [formData, setFormData] = useState<Partial<CodeSnippetInsert>>({
    name: "",
    description: "",
    code: "",
    language: "javascript",
    category: "utility",
    tags: [],
    is_active: true,
  });

  const categories = [
    "utility",
    "component",
    "hook",
    "api",
    "styling",
    "configuration",
    "other",
  ];

  const languages = [
    "javascript",
    "typescript",
    "html",
    "css",
    "json",
    "python",
    "bash",
    "sql",
  ];

  useEffect(() => {
    fetchSnippets();
  }, []);

  const fetchSnippets = async () => {
    try {
      setLoading(true);
      // Note: This assumes a code_snippets table exists. If not, we'll need to create it.
      const { data, error } = await supabase
        .from("code_snippets")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        // If table doesn't exist, we'll show a message
        if (error.code === "42P01") {
          setError(
            "Code snippets table not found. Please create the table first.",
          );
          setSnippets([]);
        } else {
          throw error;
        }
      } else {
        setSnippets(data || []);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch code snippets",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);

      if (editingSnippet) {
        // Update existing snippet
        const updateData = {
          ...formData,
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("code_snippets")
          .update(updateData)
          .eq("id", editingSnippet.id);

        if (error) throw error;
      } else {
        // Create new snippet
        const insertData: CodeSnippetInsert = {
          ...(formData as CodeSnippetInsert),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("code_snippets")
          .insert([insertData]);

        if (error) throw error;
      }

      // Reset form and refresh data
      resetForm();
      await fetchSnippets();
      onSnippetUpdate?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save code snippet",
      );
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this code snippet?")) return;

    try {
      setError(null);
      const { error } = await supabase
        .from("code_snippets")
        .delete()
        .eq("id", id);

      if (error) throw error;
      await fetchSnippets();
      onSnippetUpdate?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to delete code snippet",
      );
    }
  };

  const handleEdit = (snippet: CodeSnippet) => {
    setEditingSnippet(snippet);
    setFormData({
      name: snippet.name,
      description: snippet.description,
      code: snippet.code,
      language: snippet.language,
      category: snippet.category,
      tags: snippet.tags,
      is_active: snippet.is_active,
    });
    setShowCreateForm(true);
  };

  const resetForm = () => {
    setEditingSnippet(null);
    setShowCreateForm(false);
    setFormData({
      name: "",
      description: "",
      code: "",
      language: "javascript",
      category: "utility",
      tags: [],
      is_active: true,
    });
  };

  const handleTagsChange = (value: string) => {
    const tags = value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag);
    setFormData({ ...formData, tags });
  };

  const copyToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const filteredSnippets = snippets.filter((snippet) => {
    const categoryMatch =
      filterCategory === "all" || snippet.category === filterCategory;
    const languageMatch =
      filterLanguage === "all" || snippet.language === filterLanguage;
    return categoryMatch && languageMatch;
  });

  const uniqueCategories = [...new Set(snippets.map((s) => s.category))];
  const uniqueLanguages = [...new Set(snippets.map((s) => s.language))];

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8" data-oid="_edo9ft">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"
          data-oid="1e9kenv"
        ></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="z:9ir7r">
      {/* Header */}
      <div className="flex justify-between items-center" data-oid="8d.-pig">
        <h2 className="text-2xl font-bold text-white" data-oid="46a4a7i">
          Code Snippet Manager
        </h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          data-oid="20:ytz6"
        >
          Create Snippet
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div
          className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
          data-oid=":nwpi1u"
        >
          {error}
          {error.includes("table not found") && (
            <div className="mt-2 text-sm" data-oid="0qj8j0t">
              <p data-oid="eoxuqhk">SQL to create the table:</p>
              <pre
                className="bg-slate-900 p-2 rounded mt-1 text-xs overflow-x-auto"
                data-oid="b5iiob4"
              >
                {`CREATE TABLE code_snippets (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  code TEXT NOT NULL,
  language TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Filters */}
      <div className="flex space-x-4" data-oid="rr4svv9">
        <div data-oid="idcm384">
          <label
            className="block text-cyan-300 text-sm font-medium mb-1"
            data-oid="yxjucx0"
          >
            Category
          </label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
            data-oid="nxr5ocm"
          >
            <option value="all" data-oid="xqj_42d">
              All Categories
            </option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category} data-oid="-9g-t00">
                {category}
              </option>
            ))}
          </select>
        </div>
        <div data-oid="unso2qk">
          <label
            className="block text-cyan-300 text-sm font-medium mb-1"
            data-oid="vltmg4z"
          >
            Language
          </label>
          <select
            value={filterLanguage}
            onChange={(e) => setFilterLanguage(e.target.value)}
            className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
            data-oid="wu5ms-v"
          >
            <option value="all" data-oid="gg-hst4">
              All Languages
            </option>
            {uniqueLanguages.map((language) => (
              <option key={language} value={language} data-oid="gsey-l-">
                {language}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Create/Edit Form */}
      {showCreateForm && (
        <div
          className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6"
          data-oid="cgw0.94"
        >
          <h3
            className="text-xl font-semibold text-white mb-4"
            data-oid="2k1ns0:"
          >
            {editingSnippet ? "Edit Code Snippet" : "Create New Code Snippet"}
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-oid="q788cyw"
          >
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-oid="o9cw6mk"
            >
              <div data-oid="xofjgci">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="d::a5w9"
                >
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  required
                  data-oid="4o0_n8f"
                />
              </div>

              <div data-oid="k-nc9vs">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="xosd5cf"
                >
                  Language
                </label>
                <select
                  value={formData.language}
                  onChange={(e) =>
                    setFormData({ ...formData, language: e.target.value })
                  }
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  data-oid="iw50g79"
                >
                  {languages.map((lang) => (
                    <option key={lang} value={lang} data-oid="d9ux59d">
                      {lang}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              data-oid="cd:f1fo"
            >
              <div data-oid="vpnt983">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="8wwx:dh"
                >
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  data-oid="y-_k76c"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat} data-oid="6u_jpvy">
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div data-oid="kyyvr0x">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="7.9gvbr"
                >
                  Tags (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.tags?.join(", ") || ""}
                  onChange={(e) => handleTagsChange(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  placeholder="react, hook, utility"
                  data-oid="qwxgtla"
                />
              </div>
            </div>

            <div data-oid="zl2w0rn">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="mj0effs"
              >
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                rows={2}
                required
                data-oid="48nmfze"
              />
            </div>

            <div data-oid="19dmwl6">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="_uj1_d-"
              >
                Code
              </label>
              <textarea
                value={formData.code}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500 font-mono text-sm"
                rows={10}
                required
                data-oid="7y7rjs0"
              />
            </div>

            <div className="flex items-center" data-oid="3ho92vs">
              <input
                type="checkbox"
                id="snippet_is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
                className="mr-2"
                data-oid="yflaznt"
              />

              <label
                htmlFor="snippet_is_active"
                className="text-cyan-300 text-sm"
                data-oid="pkp.xg2"
              >
                Active
              </label>
            </div>

            <div className="flex space-x-4" data-oid="swrbwj6">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="ifjuf4c"
              >
                {editingSnippet ? "Update" : "Create"} Snippet
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="fzcbe85"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Snippets List */}
      <div className="space-y-4" data-oid="9hx5mvu">
        {filteredSnippets.length === 0 ? (
          <div className="text-center text-slate-400 py-8" data-oid=":zs-015">
            {snippets.length === 0
              ? "No code snippets found. Create your first snippet to get started."
              : "No snippets match the current filters."}
          </div>
        ) : (
          filteredSnippets.map((snippet) => (
            <div
              key={snippet.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
              data-oid="-osfn3t"
            >
              <div
                className="flex justify-between items-start mb-3"
                data-oid="0xzegl6"
              >
                <div className="flex-1" data-oid="7ms.w7n">
                  <div
                    className="flex items-center space-x-2 mb-2"
                    data-oid="yt24-le"
                  >
                    <h3
                      className="text-lg font-semibold text-white"
                      data-oid="kv:3:-8"
                    >
                      {snippet.name}
                    </h3>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="qq-9d8_"
                    >
                      {snippet.language}
                    </span>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="zbkxm0g"
                    >
                      {snippet.category}
                    </span>
                    {!snippet.is_active && (
                      <span
                        className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded"
                        data-oid="9:ngch1"
                      >
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 mb-2" data-oid="j:ig:av">
                    {snippet.description}
                  </p>
                  {snippet.tags.length > 0 && (
                    <div
                      className="flex flex-wrap gap-1 mb-2"
                      data-oid="8s3f_6q"
                    >
                      {snippet.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded"
                          data-oid="61.lu-b"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex space-x-2" data-oid="we-k4pi">
                  <button
                    onClick={() => copyToClipboard(snippet.code)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    title="Copy code"
                    data-oid="u86siea"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleEdit(snippet)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="ozuoe_r"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(snippet.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="ny:2yyl"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Code Preview */}
              <details data-oid="uf65le_">
                <summary
                  className="text-cyan-300 cursor-pointer text-sm hover:text-cyan-200 mb-2"
                  data-oid=".f1fx4f"
                >
                  View Code
                </summary>
                <pre
                  className="bg-slate-900 border border-slate-600 rounded p-3 text-xs text-slate-300 overflow-x-auto"
                  data-oid="w2phcmi"
                >
                  <code data-oid="1b3_hst">{snippet.code}</code>
                </pre>
              </details>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
