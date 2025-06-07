"use client";

import React, { useState, useEffect } from "react";
import { Section, SectionInsert, SectionUpdate } from "@/types/supabaseDb";
import { supabase } from "@/lib/supabaseClient";

interface SectionManagerProps {
  onSectionUpdate?: () => void;
}

export default function SectionManager({
  onSectionUpdate,
}: SectionManagerProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState<Partial<SectionInsert>>({
    title: "",
    description: "",
    question_type: "multiple_choice",
    options: [],
    code_snippets: {},
    order_index: 0,
    is_active: true,
  });

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("sections")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) throw error;
      setSections(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch sections");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setError(null);

      if (editingSection) {
        // Update existing section
        const updateData: SectionUpdate = {
          ...formData,
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase
          .from("sections")
          .update(updateData)
          .eq("id", editingSection.id);

        if (error) throw error;
      } else {
        // Create new section
        const insertData: SectionInsert = {
          ...(formData as SectionInsert),
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString(),
        };

        const { error } = await supabase.from("sections").insert([insertData]);

        if (error) throw error;
      }

      // Reset form and refresh data
      resetForm();
      await fetchSections();
      onSectionUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save section");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this section?")) return;

    try {
      setError(null);
      const { error } = await supabase.from("sections").delete().eq("id", id);

      if (error) throw error;
      await fetchSections();
      onSectionUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete section");
    }
  };

  const handleEdit = (section: Section) => {
    setEditingSection(section);
    setFormData({
      title: section.title,
      description: section.description,
      question_type: section.question_type,
      options: section.options,
      code_snippets: section.code_snippets,
      order_index: section.order_index,
      is_active: section.is_active,
    });
    setShowCreateForm(true);
  };

  const resetForm = () => {
    setEditingSection(null);
    setShowCreateForm(false);
    setFormData({
      title: "",
      description: "",
      question_type: "multiple_choice",
      options: [],
      code_snippets: {},
      order_index: sections.length,
      is_active: true,
    });
  };

  const handleOptionsChange = (value: string) => {
    const options = value.split("\n").filter((opt) => opt.trim());
    setFormData({ ...formData, options });
  };

  const handleCodeSnippetsChange = (value: string) => {
    try {
      const codeSnippets = JSON.parse(value);
      setFormData({ ...formData, code_snippets: codeSnippets });
    } catch {
      // Invalid JSON, keep current state
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8" data-oid="y3v9afq">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"
          data-oid="7ek4veu"
        ></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="3ta3y_p">
      {/* Header */}
      <div className="flex justify-between items-center" data-oid="xncz5qv">
        <h2 className="text-2xl font-bold text-white" data-oid="a3oc4wj">
          Section Manager
        </h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          data-oid="9rqje-n"
        >
          Create Section
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div
          className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
          data-oid="ybtagqp"
        >
          {error}
        </div>
      )}

      {/* Create/Edit Form */}
      {showCreateForm && (
        <div
          className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6"
          data-oid="mtt8vqp"
        >
          <h3
            className="text-xl font-semibold text-white mb-4"
            data-oid="m5_ol4h"
          >
            {editingSection ? "Edit Section" : "Create New Section"}
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-oid="mgu1uj0"
          >
            <div data-oid="df_6jto">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="3o7.2hb"
              >
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                required
                data-oid="4efz9:6"
              />
            </div>

            <div data-oid="kzboona">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="1kzjk1x"
              >
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                rows={3}
                required
                data-oid="61yj874"
              />
            </div>

            <div data-oid="h:x1paq">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="z4rk.4n"
              >
                Question Type
              </label>
              <select
                value={formData.question_type}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    question_type: e.target.value as any,
                  })
                }
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                data-oid="jr105i6"
              >
                <option value="multiple_choice" data-oid="q-8_zhe">
                  Multiple Choice
                </option>
                <option value="text_input" data-oid="5otyha-">
                  Text Input
                </option>
                <option value="boolean" data-oid="ns28q8a">
                  Boolean
                </option>
                <option value="slider" data-oid="u3cfl6h">
                  Slider
                </option>
              </select>
            </div>

            {formData.question_type === "multiple_choice" && (
              <div data-oid="v7y61fc">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="ioli::l"
                >
                  Options (one per line)
                </label>
                <textarea
                  value={formData.options?.join("\n") || ""}
                  onChange={(e) => handleOptionsChange(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  rows={4}
                  placeholder="Option 1\nOption 2\nOption 3"
                  data-oid="bw8-scb"
                />
              </div>
            )}

            <div data-oid="8hxs8t:">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="pnsma.6"
              >
                Code Snippets (JSON format)
              </label>
              <textarea
                value={JSON.stringify(formData.code_snippets, null, 2)}
                onChange={(e) => handleCodeSnippetsChange(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500 font-mono text-sm"
                rows={6}
                placeholder='{\n  "option1": "code for option 1",\n  "option2": "code for option 2"\n}'
                data-oid="wqfqhwh"
              />
            </div>

            <div data-oid="ffzqfm-">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="r6akoq4"
              >
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
                data-oid="f:n3nzd"
              />
            </div>

            <div className="flex items-center" data-oid="7dernld">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
                className="mr-2"
                data-oid="ga9z-3j"
              />

              <label
                htmlFor="is_active"
                className="text-cyan-300 text-sm"
                data-oid="9725c.o"
              >
                Active
              </label>
            </div>

            <div className="flex space-x-4" data-oid="44qay._">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="feqwrt6"
              >
                {editingSection ? "Update" : "Create"} Section
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="uh:k4d:"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Sections List */}
      <div className="space-y-4" data-oid="g7ej.3p">
        {sections.length === 0 ? (
          <div className="text-center text-slate-400 py-8" data-oid="8rq:8w9">
            No sections found. Create your first section to get started.
          </div>
        ) : (
          sections.map((section) => (
            <div
              key={section.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
              data-oid="gd_kju."
            >
              <div
                className="flex justify-between items-start"
                data-oid="fv6fmim"
              >
                <div className="flex-1" data-oid="8pi6u4r">
                  <div
                    className="flex items-center space-x-2 mb-2"
                    data-oid="70ixzaj"
                  >
                    <h3
                      className="text-lg font-semibold text-white"
                      data-oid=":5ezn7x"
                    >
                      {section.title}
                    </h3>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="-9y6m:s"
                    >
                      {section.question_type}
                    </span>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="dm_fltp"
                    >
                      Order: {section.order_index}
                    </span>
                    {!section.is_active && (
                      <span
                        className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded"
                        data-oid="g9zh8ua"
                      >
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 mb-2" data-oid="0h7av5r">
                    {section.description}
                  </p>
                  {section.options && section.options.length > 0 && (
                    <div className="text-sm text-slate-400" data-oid="3e7:0b_">
                      Options: {section.options.join(", ")}
                    </div>
                  )}
                </div>
                <div className="flex space-x-2" data-oid="qwj6dyp">
                  <button
                    onClick={() => handleEdit(section)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="lr-4.sv"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(section.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="k.:0o17"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
