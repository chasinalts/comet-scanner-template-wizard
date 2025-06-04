import React, { useEffect, useState } from '../../utils/react-imports';
import { motion, AnimatePresence } from 'framer-motion';
import HolographicText from './HolographicText';
import supabase from '@/supabaseConfig';

interface EditableSectionProps {
  title: string;
  content: string;
  onContentChange?: (newContent: string) => void;
  className?: string;
}

const EditableSection: React.FC<EditableSectionProps> = ({
  title,
  content,
  onContentChange,
  className = ''
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(content);
  const [isSaving, setIsSaving] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);

  useEffect(() => {
    setEditContent(content);
  }, [content]);

  const handleSave = async () => {
    if (editContent.trim() === content.trim()) {
      setIsEditing(false);
      return;
    }

    setIsSaving(true);
    try {
      // Save to Supabase
      const { error } = await supabase
        .from('site_content')
        .upsert({
          key: 'comet_explanation',
          content: editContent.trim(),
          updated_at: new Date().toISOString()
        }, {
          onConflict: 'key'
        });

      if (error) {
        console.error('Error saving content:', error);
        alert('Failed to save content. Please try again.');
        return;
      }

      // Update parent component
      if (onContentChange) {
        onContentChange(editContent.trim());
      }

      setLastSaved(new Date());
      setIsEditing(false);
    } catch (error) {
      console.error('Error saving content:', error);
      alert('Failed to save content. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    setEditContent(content);
    setIsEditing(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCancel();
    } else if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      handleSave();
    }
  };

  return (
    <section className={`max-w-2xl bg-white/10 rounded-lg shadow-lg ${className}`}>
      {/* Header with collapse toggle and edit button */}
      <div className="flex items-center justify-between p-4 border-b border-white/20">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center gap-2 text-left flex-1 hover:text-cyan-200 transition-colors"
        >
          <HolographicText 
            text={title} 
            as="h2" 
            variant="subtitle" 
            className="text-2xl font-bold text-cyan-200" 
          />
          <motion.svg
            animate={{ rotate: isCollapsed ? -90 : 0 }}
            transition={{ duration: 0.2 }}
            className="w-5 h-5 text-cyan-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>
        
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            {lastSaved && (
              <span className="text-xs text-green-400">
                Saved {lastSaved.toLocaleTimeString()}
              </span>
            )}
            {!isEditing ? (
              <button
                onClick={() => setIsEditing(true)}
                className="p-2 text-cyan-400 hover:text-cyan-300 hover:bg-white/10 rounded-lg transition-colors"
                title="Edit content"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </button>
            ) : (
              <div className="flex items-center gap-1">
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="p-2 text-green-400 hover:text-green-300 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50"
                  title="Save changes (Ctrl+Enter)"
                >
                  {isSaving ? (
                    <div className="w-4 h-4 border-2 border-green-400 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
                <button
                  onClick={handleCancel}
                  disabled={isSaving}
                  className="p-2 text-red-400 hover:text-red-300 hover:bg-white/10 rounded-lg transition-colors disabled:opacity-50"
                  title="Cancel editing (Esc)"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Content area */}
      <AnimatePresence>
        {!isCollapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="p-6">
              {isEditing ? (
                <div className="space-y-4">
                  <textarea
                    value={editContent}
                    onChange={(e) => setEditContent(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="w-full h-64 p-4 bg-black/30 border border-cyan-500/50 rounded-lg text-white font-mono text-lg leading-snug resize-none focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
                    placeholder="Enter COMET explanation content..."
                    autoFocus
                  />
                  <div className="flex justify-between items-center text-sm text-gray-400">
                    <span>Use Ctrl+Enter to save, Esc to cancel</span>
                    <span>{editContent.length} characters</span>
                  </div>
                </div>
              ) : (
                <pre className="whitespace-pre-line text-white text-lg font-mono leading-snug">
                  {content}
                </pre>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EditableSection;