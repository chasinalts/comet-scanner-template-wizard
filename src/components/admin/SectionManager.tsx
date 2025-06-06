'use client';

import React, { useState, useEffect } from 'react';
import { Section, SectionInsert, SectionUpdate } from '@/types/supabaseDb';
import { supabase } from '@/lib/supabaseClient';

interface SectionManagerProps {
  onSectionUpdate?: () => void;
}

export default function SectionManager({ onSectionUpdate }: SectionManagerProps) {
  const [sections, setSections] = useState<Section[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingSection, setEditingSection] = useState<Section | null>(null);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [formData, setFormData] = useState<Partial<SectionInsert>>({
    title: '',
    description: '',
    question_type: 'multiple_choice',
    options: [],
    code_snippets: {},
    order_index: 0,
    is_active: true
  });

  useEffect(() => {
    fetchSections();
  }, []);

  const fetchSections = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('sections')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) throw error;
      setSections(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch sections');
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
          updated_at: new Date().toISOString()
        };
        
        const { error } = await supabase
          .from('sections')
          .update(updateData)
          .eq('id', editingSection.id);

        if (error) throw error;
      } else {
        // Create new section
        const insertData: SectionInsert = {
          ...formData as SectionInsert,
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };

        const { error } = await supabase
          .from('sections')
          .insert([insertData]);

        if (error) throw error;
      }

      // Reset form and refresh data
      resetForm();
      await fetchSections();
      onSectionUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save section');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this section?')) return;

    try {
      setError(null);
      const { error } = await supabase
        .from('sections')
        .delete()
        .eq('id', id);

      if (error) throw error;
      await fetchSections();
      onSectionUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete section');
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
      is_active: section.is_active
    });
    setShowCreateForm(true);
  };

  const resetForm = () => {
    setEditingSection(null);
    setShowCreateForm(false);
    setFormData({
      title: '',
      description: '',
      question_type: 'multiple_choice',
      options: [],
      code_snippets: {},
      order_index: sections.length,
      is_active: true
    });
  };

  const handleOptionsChange = (value: string) => {
    const options = value.split('\n').filter(opt => opt.trim());
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
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Section Manager</h2>
        <button
          onClick={() => setShowCreateForm(true)}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          Create Section
        </button>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Create/Edit Form */}
      {showCreateForm && (
        <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-white mb-4">
            {editingSection ? 'Edit Section' : 'Create New Section'}
          </h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-cyan-300 text-sm font-medium mb-2">
                Title
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            <div>
              <label className="block text-cyan-300 text-sm font-medium mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-cyan-300 text-sm font-medium mb-2">
                Question Type
              </label>
              <select
                value={formData.question_type}
                onChange={(e) => setFormData({ ...formData, question_type: e.target.value as any })}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
              >
                <option value="multiple_choice">Multiple Choice</option>
                <option value="text_input">Text Input</option>
                <option value="boolean">Boolean</option>
                <option value="slider">Slider</option>
              </select>
            </div>

            {formData.question_type === 'multiple_choice' && (
              <div>
                <label className="block text-cyan-300 text-sm font-medium mb-2">
                  Options (one per line)
                </label>
                <textarea
                  value={formData.options?.join('\n') || ''}
                  onChange={(e) => handleOptionsChange(e.target.value)}
                  className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                  rows={4}
                  placeholder="Option 1\nOption 2\nOption 3"
                />
              </div>
            )}

            <div>
              <label className="block text-cyan-300 text-sm font-medium mb-2">
                Code Snippets (JSON format)
              </label>
              <textarea
                value={JSON.stringify(formData.code_snippets, null, 2)}
                onChange={(e) => handleCodeSnippetsChange(e.target.value)}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500 font-mono text-sm"
                rows={6}
                placeholder='{\n  "option1": "code for option 1",\n  "option2": "code for option 2"\n}'
              />
            </div>

            <div>
              <label className="block text-cyan-300 text-sm font-medium mb-2">
                Order Index
              </label>
              <input
                type="number"
                value={formData.order_index}
                onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) })}
                className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
                min="0"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_active"
                checked={formData.is_active}
                onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                className="mr-2"
              />
              <label htmlFor="is_active" className="text-cyan-300 text-sm">
                Active
              </label>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg transition-colors"
              >
                {editingSection ? 'Update' : 'Create'} Section
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

      {/* Sections List */}
      <div className="space-y-4">
        {sections.length === 0 ? (
          <div className="text-center text-slate-400 py-8">
            No sections found. Create your first section to get started.
          </div>
        ) : (
          sections.map((section) => (
            <div
              key={section.id}
              className="bg-slate-800 border border-slate-700 rounded-lg p-4 hover:border-cyan-500/50 transition-colors"
            >
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      {section.question_type}
                    </span>
                    <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">
                      Order: {section.order_index}
                    </span>
                    {!section.is_active && (
                      <span className="text-xs bg-red-500/20 text-red-300 px-2 py-1 rounded">
                        Inactive
                      </span>
                    )}
                  </div>
                  <p className="text-slate-300 mb-2">{section.description}</p>
                  {section.options && section.options.length > 0 && (
                    <div className="text-sm text-slate-400">
                      Options: {section.options.join(', ')}
                    </div>
                  )}
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(section)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(section.id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
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