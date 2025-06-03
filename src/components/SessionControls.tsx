import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useSession } from '../contexts/SessionContext';
import Button from './ui/Button';
import Modal from './ui/Modal';
import { TextField } from './ui/FormField';

const SessionControls = () => {
  const { exportSession, importSession, resetSession } = useSession();
  const [showExportModal, setShowExportModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [showResetModal, setShowResetModal] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [isImporting, setIsImporting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExport = () => {
    exportSession(customTitle.trim() || undefined);
    setCustomTitle('');
    setShowExportModal(false);
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    const success = await importSession(file);
    setIsImporting(false);
    setShowImportModal(false);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleReset = () => {
    resetSession();
    setShowResetModal(false);
  };

  return (
    <>
      <div className="flex flex-wrap gap-4 p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Session Management
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Save your progress and continue later, or share your template configuration with others.
          </p>
          
          <div className="flex flex-wrap gap-3">
            {/* Export Button */}
            <Button
              onClick={() => setShowExportModal(true)}
              variant="primary"
              className="flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Export Session
            </Button>

            {/* Import Button */}
            <Button
              onClick={() => setShowImportModal(true)}
              variant="secondary"
              className="flex items-center gap-2"
              disabled={isImporting}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
              </svg>
              {isImporting ? 'Importing...' : 'Import Session'}
            </Button>

            {/* Reset Button */}
            <Button
              onClick={() => setShowResetModal(true)}
              variant="danger"
              className="flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reset Session
            </Button>
          </div>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        onChange={handleFileSelect}
        className="hidden"
      />

      {/* Export Modal */}
      <Modal
        isOpen={showExportModal}
        onClose={() => setShowExportModal(false)}
        title="Export Session"
      >
        <div className="space-y-4">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 dark:text-blue-100 mb-2">
              What gets exported?
            </h4>
            <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
              <li>• Your current progress through the wizard</li>
              <li>• All form data and answers</li>
              <li>• AI-generated TickerID and NameID strings</li>
              <li>• Custom functions and PineScript logic</li>
              <li>• Template configuration and settings</li>
              <li>• Completion status of each section</li>
            </ul>
          </div>
          
          <TextField
            label="Custom Title (Optional)"
            value={customTitle}
            onChange={(e) => setCustomTitle(e.target.value)}
            placeholder="e.g., My Trading Strategy v1"
            helpText="If left empty, the file will be named with the current date and time"
          />
          
          <div className="flex gap-3 pt-4">
            <Button onClick={handleExport} variant="primary" className="flex-1">
              Export Session
            </Button>
            <Button 
              onClick={() => setShowExportModal(false)} 
              variant="secondary"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Import Modal */}
      <Modal
        isOpen={showImportModal}
        onClose={() => setShowImportModal(false)}
        title="Import Session"
      >
        <div className="space-y-4">
          <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-amber-900 dark:text-amber-100 mb-2">
              ⚠️ Important Notice
            </h4>
            <p className="text-sm text-amber-800 dark:text-amber-200">
              Importing a session will replace your current progress and settings. 
              Make sure to export your current session first if you want to keep it.
            </p>
          </div>
          
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-green-900 dark:text-green-100 mb-2">
              What gets imported?
            </h4>
            <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
              <li>• Wizard progress and current step</li>
              <li>• All previously entered form data</li>
              <li>• AI-generated content and custom functions</li>
              <li>• Template configuration</li>
              <li>• Completion status and checklist progress</li>
            </ul>
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={handleImportClick} 
              variant="primary" 
              className="flex-1"
              disabled={isImporting}
            >
              {isImporting ? 'Importing...' : 'Choose File to Import'}
            </Button>
            <Button 
              onClick={() => setShowImportModal(false)} 
              variant="secondary"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>

      {/* Reset Modal */}
      <Modal
        isOpen={showResetModal}
        onClose={() => setShowResetModal(false)}
        title="Reset Session"
      >
        <div className="space-y-4">
          <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
            <h4 className="font-medium text-red-900 dark:text-red-100 mb-2">
              ⚠️ Warning: This action cannot be undone
            </h4>
            <p className="text-sm text-red-800 dark:text-red-200">
              Resetting your session will permanently delete all your current progress, 
              including form data, AI-generated content, and template configuration.
            </p>
          </div>
          
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Consider exporting your current session before resetting if you might want to return to it later.
          </p>
          
          <div className="flex gap-3 pt-4">
            <Button 
              onClick={handleReset} 
              variant="danger" 
              className="flex-1"
            >
              Yes, Reset Session
            </Button>
            <Button 
              onClick={() => setShowResetModal(false)} 
              variant="secondary"
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SessionControls;