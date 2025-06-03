import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { supabase } from '../supabaseConfig';
import { useAuth } from '../contexts/AuthContext';

export interface Template {
  id: string;
  name: string;
  description?: string;
  master_code: string;
  category_id?: string;
  is_active: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
  version: number;
}

export interface CodeSnippet {
  id: string;
  name: string;
  description?: string;
  code: string;
  placeholder_variable?: string;
  category?: string;
  is_active: boolean;
  created_by: string;
  created_at: string;
  updated_at: string;
}

export interface TemplateCategory {
  id: string;
  name: string;
  description?: string;
  created_at: string;
}

export interface UseTemplatesReturn {
  // Templates
  templates: Template[];
  loadingTemplates: boolean;
  createTemplate: (template: Omit<Template, 'id' | 'created_at' | 'updated_at' | 'created_by' | 'version'>) => Promise<Template | null>;
  updateTemplate: (id: string, updates: Partial<Template>) => Promise<boolean>;
  deleteTemplate: (id: string) => Promise<boolean>;
  getTemplateById: (id: string) => Template | null;
  
  // Code Snippets
  codeSnippets: CodeSnippet[];
  loadingSnippets: boolean;
  createCodeSnippet: (snippet: Omit<CodeSnippet, 'id' | 'created_at' | 'updated_at' | 'created_by'>) => Promise<CodeSnippet | null>;
  updateCodeSnippet: (id: string, updates: Partial<CodeSnippet>) => Promise<boolean>;
  deleteCodeSnippet: (id: string) => Promise<boolean>;
  getCodeSnippetById: (id: string) => CodeSnippet | null;
  
  // Categories
  categories: TemplateCategory[];
  loadingCategories: boolean;
  createCategory: (category: Omit<TemplateCategory, 'id' | 'created_at'>) => Promise<TemplateCategory | null>;
  deleteCategory: (id: string) => Promise<boolean>;
  
  // Utility functions
  refreshData: () => Promise<void>;
  error: string | null;
}

export const useTemplates = (): UseTemplatesReturn => {
  const { currentUser } = useAuth();
  const [templates, setTemplates] = useState<Template[]>([]);
  const [codeSnippets, setCodeSnippets] = useState<CodeSnippet[]>([]);
  const [categories, setCategories] = useState<TemplateCategory[]>([]);
  const [loadingTemplates, setLoadingTemplates] = useState(false);
  const [loadingSnippets, setLoadingSnippets] = useState(false);
  const [loadingCategories, setLoadingCategories] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Load templates from Supabase
  const loadTemplates = useCallback(async () => {
    if (!currentUser) return;
    
    setLoadingTemplates(true);
    setError(null);
    
    try {
      const { data, error: supabaseError } = await supabase
        .from('templates')
        .select('*')
        .eq('is_active', true)
        .order('updated_at', { ascending: false });
      
      if (supabaseError) throw supabaseError;
      
      setTemplates(data || []);
    } catch (err: any) {
      console.error('Error loading templates:', err);
      setError(err.message || 'Failed to load templates');
    } finally {
      setLoadingTemplates(false);
    }
  }, [currentUser]);

  // Load code snippets from Supabase
  const loadCodeSnippets = useCallback(async () => {
    if (!currentUser) return;
    
    setLoadingSnippets(true);
    setError(null);
    
    try {
      const { data, error: supabaseError } = await supabase
        .from('code_snippets')
        .select('*')
        .eq('is_active', true)
        .order('updated_at', { ascending: false });
      
      if (supabaseError) throw supabaseError;
      
      setCodeSnippets(data || []);
    } catch (err: any) {
      console.error('Error loading code snippets:', err);
      setError(err.message || 'Failed to load code snippets');
    } finally {
      setLoadingSnippets(false);
    }
  }, [currentUser]);

  // Load categories from Supabase
  const loadCategories = useCallback(async () => {
    setLoadingCategories(true);
    setError(null);
    
    try {
      const { data, error: supabaseError } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true });
      
      if (supabaseError) throw supabaseError;
      
      setCategories(data || []);
    } catch (err: any) {
      console.error('Error loading categories:', err);
      setError(err.message || 'Failed to load categories');
    } finally {
      setLoadingCategories(false);
    }
  }, [currentUser]);

  // Create new template (now returns template data without database storage)
  const createTemplate = useCallback(async (templateData: Omit<Template, 'id' | 'created_at' | 'updated_at' | 'created_by' | 'version'>): Promise<Template | null> => {
    // Validate required fields
    if (!templateData.name?.trim()) {
      setError('Template name is required');
      return null;
    }
    
    if (!templateData.master_code?.trim()) {
      setError('Template master code is required');
      return null;
    }
    
    try {
      // Create template object without saving to database
      const newTemplate: Template = {
        ...templateData,
        id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        created_by: currentUser?.id || 'anonymous',
        version: 1
      };
      
      // Add to local state for display purposes
      setTemplates(prev => [newTemplate, ...prev]);
      return newTemplate;
    } catch (err: any) {
      console.error('Error creating template:', err);
      setError(err.message || 'Failed to create template');
      return null;
    }
  }, [currentUser]);

  // Update template
  const updateTemplate = useCallback(async (id: string, updates: Partial<Template>): Promise<boolean> => {
    try {
      const { error: supabaseError } = await supabase
        .from('templates')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);
      
      if (supabaseError) throw supabaseError;
      
      setTemplates(prev => prev.map(template => 
        template.id === id ? { ...template, ...updates } : template
      ));
      
      return true;
    } catch (err: any) {
      console.error('Error updating template:', err);
      setError(err.message || 'Failed to update template');
      return false;
    }
  }, [currentUser]);

  // Delete template (soft delete)
  const deleteTemplate = useCallback(async (id: string): Promise<boolean> => {
    try {
      const { error: supabaseError } = await supabase
        .from('templates')
        .update({ is_active: false })
        .eq('id', id);
      
      if (supabaseError) throw supabaseError;
      
      setTemplates(prev => prev.filter(template => template.id !== id));
      return true;
    } catch (err: any) {
      console.error('Error deleting template:', err);
      setError(err.message || 'Failed to delete template');
      return false;
    }
  }, []);

  // Create new code snippet
  const createCodeSnippet = useCallback(async (snippetData: Omit<CodeSnippet, 'id' | 'created_at' | 'updated_at' | 'created_by'>): Promise<CodeSnippet | null> => {
    if (!currentUser) {
      setError('User must be authenticated');
      return null;
    }
    
    try {
      const { data, error: supabaseError } = await supabase
        .from('code_snippets')
        .insert({
          ...snippetData,
          created_by: currentUser.id
        })
        .select()
        .single();
      
      if (supabaseError) throw supabaseError;
      
      const newSnippet = data as CodeSnippet;
      setCodeSnippets(prev => [newSnippet, ...prev]);
      return newSnippet;
    } catch (err: any) {
      console.error('Error creating code snippet:', err);
      setError(err.message || 'Failed to create code snippet');
      return null;
    }
  }, [currentUser]);

  // Update code snippet
  const updateCodeSnippet = useCallback(async (id: string, updates: Partial<CodeSnippet>): Promise<boolean> => {
    try {
      const { error: supabaseError } = await supabase
        .from('code_snippets')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', id);
      
      if (supabaseError) throw supabaseError;
      
      setCodeSnippets(prev => prev.map(snippet => 
        snippet.id === id ? { ...snippet, ...updates } : snippet
      ));
      
      return true;
    } catch (err: any) {
      console.error('Error updating code snippet:', err);
      setError(err.message || 'Failed to update code snippet');
      return false;
    }
  }, []);

  // Delete code snippet (soft delete)
  const deleteCodeSnippet = useCallback(async (id: string): Promise<boolean> => {
    try {
      const { error: supabaseError } = await supabase
        .from('code_snippets')
        .update({ is_active: false })
        .eq('id', id);
      
      if (supabaseError) throw supabaseError;
      
      setCodeSnippets(prev => prev.filter(snippet => snippet.id !== id));
      return true;
    } catch (err: any) {
      console.error('Error deleting code snippet:', err);
      setError(err.message || 'Failed to delete code snippet');
      return false;
    }
  }, []);

  // Create new category
  const createCategory = useCallback(async (categoryData: Omit<TemplateCategory, 'id' | 'created_at'>): Promise<TemplateCategory | null> => {
    try {
      const { data, error: supabaseError } = await supabase
        .from('categories')
        .insert(categoryData)
        .select()
        .single();
      
      if (supabaseError) throw supabaseError;
      
      const newCategory = data as TemplateCategory;
      setCategories(prev => [...prev, newCategory].sort((a, b) => a.name.localeCompare(b.name)));
      return newCategory;
    } catch (err: any) {
      console.error('Error creating category:', err);
      setError(err.message || 'Failed to create category');
      return null;
    }
  }, []);

  // Delete category (soft delete)
  const deleteCategory = useCallback(async (id: string): Promise<boolean> => {
    try {
      const { error: supabaseError } = await supabase
        .from('categories')
        .update({ is_active: false })
        .eq('id', id);
      
      if (supabaseError) throw supabaseError;
      
      setCategories(prev => prev.filter(category => category.id !== id));
      return true;
    } catch (err: any) {
      console.error('Error deleting category:', err);
      setError(err.message || 'Failed to delete category');
      return false;
    }
  }, []);}]}}}

  // Get template by ID
  const getTemplateById = useCallback((id: string): Template | null => {
    return templates.find(template => template.id === id) || null;
  }, [templates]);

  // Get code snippet by ID
  const getCodeSnippetById = useCallback((id: string): CodeSnippet | null => {
    return codeSnippets.find(snippet => snippet.id === id) || null;
  }, [codeSnippets]);

  // Refresh all data
  const refreshData = useCallback(async () => {
    await Promise.all([
      loadTemplates(),
      loadCodeSnippets(),
      loadCategories()
    ]);
  }, [loadTemplates, loadCodeSnippets, loadCategories]);

  // Load data on mount and when user changes
useEffect(() => {
   refreshData();
}, [currentUser]); // eslint-disable-line react-hooks/exhaustive-deps

  // Memoize the return value to prevent unnecessary re-renders
  const result = useMemo(() => ({
    templates,
    loadingTemplates,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    getTemplateById,
    
    codeSnippets,
    loadingSnippets,
    createCodeSnippet,
    updateCodeSnippet,
    deleteCodeSnippet,
    getCodeSnippetById,
    
    categories,
    loadingCategories,
    createCategory,
    deleteCategory,
    
    refreshData,
    error
  }), [
    templates,
    loadingTemplates,
    createTemplate,
    updateTemplate,
    deleteTemplate,
    getTemplateById,
    
    codeSnippets,
    loadingSnippets,
    createCodeSnippet,
    updateCodeSnippet,
    deleteCodeSnippet,
    getCodeSnippetById,
    
    categories,
    loadingCategories,
    createCategory,
    deleteCategory,
    
    refreshData,
    error
  ]);

  return result;
};

export default useTemplates;