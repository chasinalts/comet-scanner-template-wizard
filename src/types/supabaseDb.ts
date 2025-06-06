// Supabase Database Types
// This file defines the database schema types for the COMET Scanner Template Wizard

export interface Database {
  public: {
    Tables: {
      sections: {
        Row: {
          id: string;
          title: string;
          description: string;
          question_type: 'multiple_choice' | 'text_input' | 'boolean' | 'slider';
          options: string[] | null;
          code_snippets: Record<string, string>; // key-value pairs for different answers
          order_index: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          description: string;
          question_type: 'multiple_choice' | 'text_input' | 'boolean' | 'slider';
          options?: string[] | null;
          code_snippets: Record<string, string>;
          order_index: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          description?: string;
          question_type?: 'multiple_choice' | 'text_input' | 'boolean' | 'slider';
          options?: string[] | null;
          code_snippets?: Record<string, string>;
          order_index?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      templates: {
        Row: {
          id: string;
          name: string;
          description: string;
          master_code: string; // The base template code with placeholders
          section_ids: string[]; // Array of section IDs that belong to this template
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description: string;
          master_code: string;
          section_ids: string[];
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string;
          master_code?: string;
          section_ids?: string[];
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      user_sessions: {
        Row: {
          id: string;
          template_id: string;
          user_answers: Record<string, any>; // section_id -> user_answer
          completed_sections: string[]; // Array of completed section IDs
          generated_code: string;
          progress_state: 'not_started' | 'in_progress' | 'completed' | 'paused';
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          template_id: string;
          user_answers?: Record<string, any>;
          completed_sections?: string[];
          generated_code?: string;
          progress_state?: 'not_started' | 'in_progress' | 'completed' | 'paused';
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          template_id?: string;
          user_answers?: Record<string, any>;
          completed_sections?: string[];
          generated_code?: string;
          progress_state?: 'not_started' | 'in_progress' | 'completed' | 'paused';
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

// Helper types
export type Section = Database['public']['Tables']['sections']['Row'];
export type Template = Database['public']['Tables']['templates']['Row'];
export type UserSession = Database['public']['Tables']['user_sessions']['Row'];

export type SectionInsert = Database['public']['Tables']['sections']['Insert'];
export type TemplateInsert = Database['public']['Tables']['templates']['Insert'];
export type UserSessionInsert = Database['public']['Tables']['user_sessions']['Insert'];

export type SectionUpdate = Database['public']['Tables']['sections']['Update'];
export type TemplateUpdate = Database['public']['Tables']['templates']['Update'];
export type UserSessionUpdate = Database['public']['Tables']['user_sessions']['Update'];

// UI State Types
export interface ImportExportState {
  template_id: string;
  user_answers: Record<string, any>;
  completed_sections: string[];
  progress_state: 'not_started' | 'in_progress' | 'completed' | 'paused';
  generated_code: string;
  export_timestamp: string;
  app_version: string;
}

export interface LivePreviewState {
  masterCode: string;
  completedSections: string[];
  userAnswers: Record<string, any>;
  currentCode: string;
}