// Template types for the COMET Scanner Template Wizard
// Based on the database schema from supabaseDb.ts

import { Database } from './supabaseDb';

// Main Template type based on database Row type
export type Template = Database['public']['Tables']['templates']['Row'];

// Template creation type for new templates
export type TemplateInsert = Database['public']['Tables']['templates']['Insert'];

// Template update type for modifications
export type TemplateUpdate = Database['public']['Tables']['templates']['Update'];

// Extended Template interface with additional frontend properties
export interface TemplateWithSections extends Template {
  sections?: Section[];
}

// Section type based on database schema
export type Section = Database['public']['Tables']['sections']['Row'];
export type SectionInsert = Database['public']['Tables']['sections']['Insert'];
export type SectionUpdate = Database['public']['Tables']['sections']['Update'];

// User session type
export type UserSession = Database['public']['Tables']['user_sessions']['Row'];
export type UserSessionInsert = Database['public']['Tables']['user_sessions']['Insert'];
export type UserSessionUpdate = Database['public']['Tables']['user_sessions']['Update'];

// Question types for sections
export type QuestionType = 'multiple_choice' | 'text_input' | 'boolean' | 'slider';

// Progress states for user sessions
export type ProgressState = 'not_started' | 'in_progress' | 'completed' | 'paused';

// Template validation interface
export interface TemplateValidation {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

// Template export/import interfaces
export interface TemplateExport {
  template: Template;
  sections: Section[];
  exportDate: string;
  version: string;
}

export interface TemplateImportResult {
  success: boolean;
  imported: Template[];
  errors: string[];
  warnings: string[];
}