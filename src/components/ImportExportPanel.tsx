'use client';

import { useState, useRef } from 'react';
import { ImportExportState } from '@/types/supabaseDb';

interface ImportExportPanelProps {
  checklist?: ChecklistItem[];
  onChecklistUpdate?: (checklist: ChecklistItem[]) => void;
  progressData?: any;
  onImport?: (data: ImportExportState) => void;
}

interface ChecklistItem {
  id: string;
  title: string;
  status: 'completed' | 'quit' | 'paused' | 'unopened';
}

export default function ImportExportPanel({ 
  checklist: initialChecklist = [], 
  onChecklistUpdate = () => {}, 
  progressData = {},
  onImport = () => {}
}: ImportExportPanelProps = {}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [checklist, setChecklist] = useState<ChecklistItem[]>(initialChecklist.length > 0 ? initialChecklist : [
    { id: 'image-management', title: 'Image Management', status: 'unopened' },
    { id: 'scanner-variations', title: 'Scanner Variations', status: 'unopened' },
    { id: 'display-options', title: 'Display Options', status: 'unopened' },
    { id: 'integration-settings', title: 'Integration Settings', status: 'unopened' },
    { id: 'advanced-features', title: 'Advanced Features', status: 'unopened' },
  ].map(item => ({...item, title: item.title.replace(/\w+/g, match => match.charAt(0).toUpperCase() + match.slice(1))})));
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Update checklist based on completed sections
  const updateChecklistStatus = () => {
    setChecklist(prev => prev.map(item => ({
      ...item,
      status: item.status
    })));
  };

  const handleExport = () => {
    const exportData = {
      ...progressData,
      timestamp: new Date().toISOString(),
      progress: {
        checklist,
        currentStep: checklist.findIndex(item => item.status === 'paused') + 1,
        totalSteps: checklist.length,
        completionPercentage: Math.round((checklist.filter(item => item.status === 'completed').length / checklist.length) * 100)
      }
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    });
    
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `comet-scanner-template-${new Date().toISOString().split('T')[0]}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const importData: ImportExportState = JSON.parse(e.target?.result as string);
        if (onImport) {
          onImport(importData);
        }
        
        // Update checklist based on imported data
        setChecklist(prev => prev.map(item => ({
          ...item,
          status: importData.completed_sections.includes(item.id) ? 'completed' : 'unopened'
        })));
        
      } catch (error) {
        console.error('Error parsing import file:', error);
        alert('Invalid file format. Please select a valid export file.');
      }
    };
    reader.readAsText(file);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleStatusChange = (itemId: string, newStatus: ChecklistItem['status']) => {
    setChecklist(prev => prev.map(item => 
      item.id === itemId ? { ...item, status: newStatus } : item
    ));
  };

  const getStatusIcon = (status: ChecklistItem['status']) => {
    switch (status) {
      case 'completed': return '✅';
      case 'quit': return '❌';
      case 'paused': return '⏸️';
      case 'unopened': return '⚪';
      default: return '⚪';
    }
  };

  const getStatusColor = (status: ChecklistItem['status']) => {
    switch (status) {
      case 'completed': return 'text-green-400';
      case 'quit': return 'text-red-400';
      case 'paused': return 'text-yellow-400';
      case 'unopened': return 'text-gray-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <>
      {/* Tab Button */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-slate-800 border border-cyan-500/50 text-cyan-400 px-2 py-4 rounded-r-lg hover:bg-slate-700 transition-all duration-200 writing-mode-vertical"
          style={{ writingMode: 'vertical-rl' }}
        >
          Import/Export
        </button>
      </div>

      {/* Expanded Panel */}
      {isExpanded && (
        <>
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/20 z-30"
            onClick={() => setIsExpanded(false)}
          />
          
          {/* Panel */}
          <div className="fixed left-0 top-0 h-full w-1/3 bg-slate-900 border-r border-cyan-500/50 z-40 overflow-y-auto">
            <div className="p-4 space-y-4 flex flex-col flex-grow">
              <button 
                onClick={handleImport}
                className="w-full bg-[#00ff00] hover:bg-[#00cc00] text-black py-2 px-4 rounded font-bold mb-4"
              >
                Import
              </button>
              
              <div className="flex-grow overflow-y-auto">
                {checklist.map((item) => (
                  <div key={item.id} className="text-center py-2">
                    <span className="text-sm">{item.title}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={handleExport}
                className="w-full bg-[#ff0000] hover:bg-[#cc0000] text-white py-2 px-4 rounded font-bold"
              >
                Export
              </button>

              {/* Checklist Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Progress Checklist</h3>
                <div className="space-y-3">
                  {checklist.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{getStatusIcon(item.status)}</span>
                        <span className={`font-medium ${getStatusColor(item.status)}`}>
                          {item.title}
                        </span>
                      </div>
                      
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value as ChecklistItem['status'])}
                        className="bg-slate-700 border border-gray-600 rounded px-2 py-1 text-sm text-white"
                      >
                        <option value="unopened">Unopened</option>
                        <option value="completed">Completed</option>
                        <option value="paused">Paused</option>
                        <option value="quit">Quit</option>
                      </select>
                    </div>
                  ))}
                </div>
              </div>

              {/* Export Section */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Export</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Download your current progress including responses and template state.
                </p>
                <button
                  onClick={handleExport}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  📥 Download Progress File
                </button>
              </div>

              {/* Import Section */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Import</h3>
                <p className="text-gray-300 text-sm mb-4">
                  Upload a previously exported file to restore your exact environment.
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".json"
                  onChange={handleImport}
                  className="hidden"
                />
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  📤 Upload Progress File
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}