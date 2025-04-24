import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../supabaseConfig';

interface Template {
  id: string;
  templateName: string;
  templateData: any;
  createdAt: any;
}

const TemplateCreator: React.FC = () => {
  const [templateName, setTemplateName] = useState('');
  const [templateData, setTemplateData] = useState({}); // You might want a more specific structure here
  const [userTemplates, setUserTemplates] = useState<Template[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { currentUser } = useAuth();

  const handleSaveTemplate = async () => {
    if (!templateName.trim()) {
      setError('Template name cannot be empty.');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      if (currentUser) {
        const { error } = await supabase
          .from('templates')
          .insert([
            {
              user_id: currentUser.id,
              templateName,
              templateData,
            },
          ]);
        if (error) throw error;
        setTemplateName('');
        setTemplateData({});
        // Optionally, refresh templates list
        const { data, error: fetchError } = await supabase
          .from('templates')
          .select('*')
          .eq('user_id', currentUser.id)
          .order('created_at', { ascending: false });
        if (!fetchError) {
          const templates: Template[] = (data || []).map((row: any) => ({
            id: row.id,
            templateName: row.templateName,
            templateData: row.templateData,
            createdAt: row.created_at,
          }));
          setUserTemplates(templates);
        }
      }
    } catch (err) {
      setError('Failed to save template.');
    } finally {
      setIsLoading(false);
    }
  };

    useEffect(() => {
        const fetchUserTemplates = async () => {
            if (currentUser) {
                setIsLoading(true);
                try {
                    // Fetch templates for the current user from Supabase
                const { data, error } = await supabase
                  .from('templates')
                  .select('*')
                  .eq('user_id', currentUser.id)
                  .order('created_at', { ascending: false });
                if (error) {
                  throw error;
                }
                const templates: Template[] = (data || []).map((row: any) => ({
                  id: row.id,
                  templateName: row.templateName,
                  templateData: row.templateData,
                  createdAt: row.created_at,
                }));
                setUserTemplates(templates);
                } catch (error) {
                    setError('Failed to load templates.');
                } finally {
                    setIsLoading(false);
                }
            }
        };

        fetchUserTemplates();
    }, [currentUser]);


  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Create a New Template</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="templateName" className="block text-gray-700 text-sm font-bold mb-2">
          Template Name
        </label>
        <input
          type="text"
          id="templateName"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
          placeholder="Enter template name"
        />
      </div>

      {/* Add inputs for template data here */}
      {/* ... */}

      <button
        onClick={handleSaveTemplate}
        disabled={isLoading}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {isLoading ? 'Saving...' : 'Save Template'}
      </button>

      <h3 className="text-lg font-bold mt-6">Your Templates</h3>
      {isLoading ? (
        <p>Loading templates...</p>
      ) : userTemplates.length === 0 ? (
        <p>No templates found.</p>
      ) : (
        <ul>
          {userTemplates.map((template) => (
            <li key={template.id} className="mt-2 p-2 border rounded">
              <p className="font-semibold">Template Name: {template.templateName}</p>
              {/* <p>Created At: {template.createdAt.toDate().toLocaleString()}</p> */}
              {/* You can display other templateData here */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TemplateCreator;