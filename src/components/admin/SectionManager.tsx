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
    image_assignments: {},
    order_index: 0,
    is_active: true,
  });
  const [availableImages, setAvailableImages] = useState<any[]>([]);

  useEffect(() => {
    fetchSections();
    fetchAvailableImages();
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

  const fetchAvailableImages = async () => {
    try {
      const { data, error } = await supabase
        .from("images")
        .select("*")
        .eq("type", "answer")
        .order("created_at", { ascending: false });

      if (error && error.code !== "42P01") {
        console.error("Failed to fetch images:", error);
      } else {
        setAvailableImages(data || []);
      }
    } catch (err) {
      console.error("Failed to fetch images:", err);
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
      image_assignments: section.image_assignments || {},
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
      image_assignments: {},
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

  const handleImageAssignment = (option: string, imageId: string) => {
    const newAssignments = { ...formData.image_assignments };
    if (imageId === "") {
      delete newAssignments[option];
    } else {
      newAssignments[option] = imageId;
    }
    setFormData({ ...formData, image_assignments: newAssignments });
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8" data-oid="2xzp-c0">
        <div
          className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"
          data-oid="aqxq9n4"
        ></div>
      </div>
    );
  }

  return (
    <div className="space-y-6" data-oid="kxsfwa6">
      {/* Header */}
      <div className="flex justify-between items-center" data-oid="mvndvw9">
        <h2 className="text-2xl font-bold text-white" data-oid="e4se.8d">
          Section Manager
        </h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
          data-oid="q8hct:t"
        >
          Create Section
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div
          className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg"
          data-oid="-447ys6"
        >
          {error}
        </div>
      )}

      {/* Create/Edit Form */}
      {showCreateForm && (
        <div
          className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6"
          data-oid="ze5qk:7"
        >
          <h3
            className="text-xl font-semibold text-white mb-4"
            data-oid="c12cocz"
          >
            {editingSection ? "Edit Section" : "Create New Section"}
          </h3>

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
            data-oid="9m.bpa0"
          >
            <div data-oid="t7yse2:">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="2-o17-:"
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
                data-oid="-iuk2v5"
              />
            </div>

            <div data-oid="w0jbpg_">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="cgeellm"
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
                data-oid="-eqtvk6"
              />
            </div>

            <div data-oid="n4gwnye">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="m0tsi6m"
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
                data-oid="etotznp"
              >
                <option value="multiple_choice" data-oid="axl2r:5">
                  Multiple Choice
                </option>
                <option value="text_input" data-oid="adu81z.">
                  Text Input
                </option>
                <option value="boolean" data-oid="jzxempy">
                  Boolean
                </option>
                <option value="slider" data-oid="obxutoh">
                  Slider
                </option>
              </select>
            </div>

            {formData.question_type === "multiple_choice" && (
              <div data-oid="qa:rcoi">
                <label
                  className="block text-cyan-300 text-sm font-medium mb-2"
                  data-oid="ey2u9bo"
                >
                  Options (one per line)
                </label>
                <textarea
                  value={formData.options?.join("\n") || ""}
                  onChange={(e) => handleOptionsChange(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  rows={4}
                  placeholder="Option 1\nOption 2\nOption 3"
                  data-oid="egqgrs0"
                />
              </div>
            )}

            <div data-oid="th4kmpo">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="o0fx2:d"
              >
                Code Snippets (JSON format)
              </label>
              <textarea
                value={JSON.stringify(formData.code_snippets, null, 2)}
                onChange={(e) => handleCodeSnippetsChange(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500 font-mono text-sm"
                rows={6}
                placeholder='{\n  "option1": "code for option 1",\n  "option2": "code for option 2"\n}'
                data-oid="0pa9nlj"
              />
            </div>

            {/* Image Assignments */}
            {formData.question_type === "multiple_choice" && formData.options && formData.options.length > 0 && (
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">
                  Image Assignments
                </label>
                <div className="space-y-3 bg-slate-700 border border-slate-600 rounded-lg p-4">
                  {formData.options.map((option, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="text-white text-sm min-w-0 flex-1 truncate">
                        {option}
                      </span>
                      <select
                        value={formData.image_assignments?.[option] || ""}
                        onChange={(e) => handleImageAssignment(option, e.target.value)}
                        className="bg-slate-600 border border-slate-500 text-white rounded px-3 py-1 text-sm focus:outline-none focus:border-cyan-500"
                      >
                        <option value="">No image</option>
                        {availableImages.map((image) => (
                          <option key={image.id} value={image.id}>
                            {image.name}
                          </option>
                        ))}
                      </select>
                      {formData.image_assignments?.[option] && (
                        <div className="w-12 h-12 bg-slate-600 rounded overflow-hidden">
                          <img
                            src={availableImages.find(img => img.id === formData.image_assignments?.[option])?.url}
                            alt="Preview"
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              (e.target as HTMLImageElement).style.display = 'none';
                            }}
                          />
                        </div>
                      )}
                    </div>
                  ))}
                  {availableImages.length === 0 && (
                    <p className="text-slate-400 text-sm">
                      No answer images available. Upload images with type "Answer Images" in the Images tab first.
                    </p>
                  )}
                </div>
              </div>
            )}

            <div data-oid="-z38y_3">
              <label
                className="block text-cyan-300 text-sm font-medium mb-2"
                data-oid="qmcb0u4"
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
                data-oid="jf.4fzv"
              />
            </div>

            <div className="flex items-center" data-oid="9_8fcgq">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) =>
                  setFormData({ ...formData, is_active: e.target.checked })
                }
                className="mr-2"
                data-oid="ty:iatz"
              />

              <label
                htmlFor="is_active"
                className="text-cyan-300 text-sm"
                data-oid="wd4f:un"
              >
                Active
              </label>
            </div>

            <div className="flex space-x-4" data-oid="1_mo59p">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid="if7gdxe"
              >
                {editingSection ? "Update" : "Create"} Section
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-2 rounded-lg transition-colors"
                data-oid=":e7hzve"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Sections List */}
      <div className="space-y-4" data-oid="339fj9n">
        {sections.length === 0 ? (
          <div className="text-center text-slate-400 py-8" data-oid="y5zv6nj">
            No sections found. Create your first section to get started.
          </div>
        ) : (
          sections.map((section) => (
            <div
              key={section.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
              data-oid="a33be98"
            >
              <div
                className="flex justify-between items-start"
                data-oid="r__vn5v"
              >
                <div className="flex-1" data-oid="6a_br1l">
                  <div
                    className="flex items-center space-x-2 mb-2"
                    data-oid="2dw_utb"
                  >
                    <h3
                      className="text-lg font-semibold text-white"
                      data-oid="heedcr5"
                    >
                      {section.title}
                    </h3>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="yexol5f"
                    >
                      {section.question_type}
                    </span>
                    <span
                      className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded"
                      data-oid="a2-ll_d"
                    >
                      Order: {section.order_index}
                    </span>
                    {!section.is_active && (
                      <span
                        className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded"
                        data-oid="hpiosnl"
                      >
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 mb-2" data-oid="51lrtxz">
                    {section.description}
                  </p{section.options && section.options.length > 0 && (
                    <div className="text-sm text-slate-400 mb-2" data-oid="84igyz2">
                      Options: {section.options.join(", ")}
                    </div>
                  )}
                  {section.image_assignments && Object.keys(section.image_assignments).length > 0 && (
                    <div className="text-sm text-slate-400">
                      Images assigned: {Object.keys(section.image_assignments).length} option(s)
                    </div>
                  )}
                </div>
                <div className="flex space-x-2" data-oid="2ug.7q8">
                  <button
                    onClick={() => handleEdit(section)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="q5cie5n"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(section.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    data-oid="176_p7r"
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
