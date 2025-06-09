"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface MasterCodeBlock {
  id: string;
  name: string;
  description: string;
  code: string;
  category: string;
  order_index: number;
  dependencies: string[];
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

interface MasterCodeManagerProps {
  onCodeUpdate?: () => void;
}

export default function MasterCodeManager({
  onCodeUpdate,
}: MasterCodeManagerProps) {
  const [codeBlocks, setCodeBlocks] = useState<MasterCodeBlock[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingBlock, setEditingBlock] = useState<MasterCodeBlock | null>(
    null,
  );
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [formData, setFormData] = useState<Partial<MasterCodeBlock>>({
    name: "",
    description: "",
    code: "",
    category: "core",
    order_index: 0,
    dependencies: [],
    is_active: true,
  });

  const categories = [
    "core",
    "indicators",
    "alerts",
    "plotting",
    "inputs",
    "calculations",
    "conditions",
    "utilities",
  ];

  useEffect(() => {
    fetchCodeBlocks();
  }, []);

  const fetchCodeBlocks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("master_code_blocks")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) {
        if (error.code === "42P01") {
          setError(
            "Master code blocks table not found. Please create the table first.",
          );
          setCodeBlocks([]);
        } else {
          throw error;
        }
      } else {
        setCodeBlocks(data || []);
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch code blocks",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);

      if (editingBlock) {
        // Update existing block
        const updateData = {
          ...formData,
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("master_code_blocks")
          .update(updateData)
          .eq("id", editingBlock.id);

        if (error) throw error;
      } else {
        // Create new block
        const insertData = {
          ...(formData as Omit<
            MasterCodeBlock,
            "id" | "created_at" | "updated_at"
          >),

          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("master_code_blocks")
          .insert([insertData]);

        if (error) throw error;
      }

      resetForm();
      await fetchCodeBlocks();
      onCodeUpdate?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to save code block",
      );
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this code block?")) return;

    try {
      setError(null);
      const { error } = await supabase
        .from("master_code_blocks")
        .delete()
        .eq("id", id);

      if (error) throw error;
      await fetchCodeBlocks();
      onCodeUpdate?.();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to delete code block",
      );
    }
  };

  const handleEdit = (block: MasterCodeBlock) => {
    setEditingBlock(block);
    setFormData({
      name: block.name,
      description: block.description,
      code: block.code,
      category: block.category,
      order_index: block.order_index,
      dependencies: block.dependencies,
      is_active: block.is_active,
    });
    setShowCreateForm(true);
  };

  const resetForm = () => {
    setEditingBlock(null);
    setShowCreateForm(false);
    setFormData({
      name: "",
      description: "",
      code: "",
      category: "core",
      order_index: 0,
      dependencies: [],
      is_active: true,
    });
  };

  const handleDependenciesChange = (value: string) => {
    const deps = value
      .split(",")
      .map((dep) => dep.trim())
      .filter((dep) => dep);
    setFormData({ ...formData, dependencies: deps });
  };

  const copyCodeToClipboard = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  const generateMasterCode = () => {
    const activeBlocks = codeBlocks
      .filter((block) => block.is_active)
      .sort((a, b) => a.order_index - b.order_index);

    return activeBlocks.map((block) => block.code).join("\n\n");
  };

  const filteredBlocks = codeBlocks.filter(
    (block) => filterCategory === "all" || block.category === filterCategory,
  );

  const uniqueCategories = [
    ...new Set(codeBlocks.map((block) => block.category)),
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">
          Master Code Repository
        </h2>
        <div className="flex space-x-2">
          <button
            onClick={() => copyCodeToClipboard(generateMasterCode())}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Copy Full Master Code
          </button>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Add Code Block
          </button>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
          {error}
          {error.includes("table not found") && (
            <div className="mt-2 text-sm">
              <p>SQL to create the master_code_blocks table:</p>
              <pre className="bg-slate-900 p-2 rounded mt-1 text-xs overflow-x-auto">
                {`CREATE TABLE master_code_blocks (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT NOT NULL,
  code TEXT NOT NULL,
  category TEXT NOT NULL,
  order_index INTEGER NOT NULL DEFAULT 0,
  dependencies TEXT[] DEFAULT '{}',
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Filter */}
      <div className="flex space-x-4">
        <div>
          <label className="block text-cyan-300 text-sm font-medium mb-1">
            Filter by Category
          </label>
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Categories</option>
            {uniqueCategories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Create/Edit Form */}
      {showCreateForm && (
        <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            {editingBlock ? "Edit Code Block" : "Create New Code Block"}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">
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
                />
              </div>

              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">
                  Category
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">
                  Order Index
                </label>
                <input
                  type="number"
                  value={formData.order_index}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      order_index: parseInt(e.target.value),
                    })
                  }
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  min="0"
                />
              </div>

              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">
                  Dependencies (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.dependencies?.join(", ") || ""}
                  onChange={(e) => handleDependenciesChange(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  placeholder="block1, block2, block3"
                />
              </div>
            </div>

            <div>
              <label className="block text-cyan-300 text-sm font-medium mb-2">
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
              />
            </div>

            <div>
              <label className="block text-cyan-300 text-sm font-medium mb-2">
                PineScript Code
              </label>
              <textarea
                value={formData.code}
                onChange={(e) =>
                  setFormData({ ...formData, code: e.target.value })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500 font-mono text-sm"
                rows={10}
                required
                placeholder="// PineScript code here..."
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="block_is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
                className="mr-2"
              />

              <label
                htmlFor="block_is_active"
                className="text-cyan-300 text-sm"
              >
                Active (include in master code generation)
              </label>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                {editingBlock ? "Update" : "Create"} Code Block
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Code Blocks List */}
      <div className="space-y-4">
        {filteredBlocks.length === 0 ? (
          <div className="text-center text-slate-400 py-8">
            {codeBlocks.length === 0
              ? "No code blocks found. Create your first code block to get started."
              : "No code blocks match the current filter."}
          </div>
        ) : (
          filteredBlocks.map((block) => (
            <div
              key={block.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">
                      {block.name}
                    </h3>
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {block.category}
                    </span>
                    <span className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded">
                      Order: {block.order_index}
                    </span>
                    {!block.is_active && (
                      <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 mb-2">{block.description}</p>
                  {block.dependencies.length > 0 && (
                    <div className="text-sm text-slate-400 mb-2">
                      Dependencies: {block.dependencies.join(", ")}
                    </div>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => copyCodeToClipboard(block.code)}
                    className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Copy
                  </button>
                  <button
                    onClick={() => handleEdit(block)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(block.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>

              {/* Code Preview */}
              <details>
                <summary className="text-cyan-300 cursor-pointer text-sm hover:text-cyan-200 mb-2">
                  View Code
                </summary>
                <pre className="bg-slate-900 border border-slate-600 rounded p-3 text-xs text-slate-300 overflow-x-auto">
                  <code>{block.code}</code>
                </pre>
              </details>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
