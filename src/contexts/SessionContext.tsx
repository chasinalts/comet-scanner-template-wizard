import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { useToast } from '../components/ui/Toast';
import { useWizard } from './WizardContext';
import { useAuth } from './AuthContext';

export interface SessionMetadata {
  exportDate: string;
  title?: string;
  version: string;
  appVersion: string;
}

export interface WizardProgress {
  currentStep: number;
  completedSteps: number[];
  startedSteps: number[];
  cancelledSteps: number[];
  skippedQuestions: string[];
}

export interface AIGenerated {
  tickerID?: string;
  nameID?: string;
  customFunctions?: string;
  pinescriptLogic?: string;
}

export interface SessionState {
  metadata: SessionMetadata;
  wizardProgress: WizardProgress;
  formData: Record<string, any>;
  aiGenerated: AIGenerated;
  templateConfig: {
    name?: string;
    description?: string;
    masterCode?: string;
    wizardMode?: 'wizard' | 'fullTemplate';
  };
  answers: Record<string, any>;
}

export interface ChecklistItem {
  id: string;
  title: string;
  status: 'completed' | 'in-progress' | 'not-started' | 'cancelled';
  description?: string;
}

interface SessionContextType {
  sessionState: SessionState;
  updateSessionState: (updates: Partial<SessionState>) => void;
  exportSession: (customTitle?: string) => void;
  importSession: (file: File) => Promise<boolean>;
  getChecklist: () => ChecklistItem[];
  resetSession: () => void;
}

const SessionContext = createContext<SessionContextType | undefined>(undefined);

const initialSessionState: SessionState = {
  metadata: {
    exportDate: '',
    version: '1.0.0',
    appVersion: '1.0.0'
  },
  wizardProgress: {
    currentStep: 0,
    completedSteps: [],
    startedSteps: [],
    cancelledSteps: [],
    skippedQuestions: []
  },
  formData: {},
  aiGenerated: {},
  templateConfig: {},
  answers: {}
};

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [sessionState, setSessionState] = useState<SessionState>(initialSessionState);
  const { showToast } = useToast();
  const { state: wizardState, dispatch } = useWizard();
  const { currentUser } = useAuth();

  const updateSessionState = useCallback((updates: Partial<SessionState>) => {
    setSessionState(prev => ({
      ...prev,
      ...updates,
      metadata: {
        ...prev.metadata,
        ...updates.metadata
      }
    }));
  }, []);

  const exportSession = useCallback((customTitle?: string) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
    const filename = customTitle 
      ? `${customTitle.replace(/[^a-zA-Z0-9-_]/g, '_')}-${timestamp}.json`
      : `scanner-session-${timestamp}.json`;

    const exportData: SessionState = {
      ...sessionState,
      metadata: {
        ...sessionState.metadata,
        exportDate: new Date().toISOString(),
        title: customTitle
      },
      wizardProgress: {
        ...sessionState.wizardProgress,
        currentStep: wizardState.currentStep,
        completedSteps: wizardState.completedSteps,
        startedSteps: wizardState.startedSteps || [],
        cancelledSteps: sessionState.wizardProgress.cancelledSteps
      },
      answers: wizardState.answers,
      formData: {
        ...sessionState.formData,
        userId: currentUser?.id
      }
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], {
      type: 'application/json'
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast('Session exported successfully!', 'success');
  }, [sessionState, wizardState, currentUser, showToast]);

  const importSession = useCallback(async (file: File): Promise<boolean> => {
    try {
      const text = await file.text();
      const importedData: SessionState = JSON.parse(text);

      // Validate the imported data structure
      if (!importedData.metadata || !importedData.wizardProgress) {
        showToast('Invalid session file format', 'error');
        return false;
      }

      // Update session state
      setSessionState(importedData);

      // Update wizard context
      dispatch({
        type: 'RESTORE_STATE',
        payload: {
          currentStep: importedData.wizardProgress.currentStep,
          completedSteps: importedData.wizardProgress.completedSteps,
          answers: importedData.answers
        }
      });

      showToast('Session imported successfully!', 'success');
      return true;
    } catch (error) {
      console.error('Error importing session:', error);
      showToast('Failed to import session file', 'error');
      return false;
    }
  }, [dispatch, showToast]);

  const getChecklist = useCallback((): ChecklistItem[] => {
    const { wizardProgress, aiGenerated, templateConfig } = sessionState;
    
    return [
      {
        id: 'initial-setup',
        title: 'Initial Setup',
        status: wizardProgress.completedSteps.includes(0) ? 'completed' : 
                wizardProgress.startedSteps.includes(0) ? 'in-progress' : 'not-started',
        description: 'Choose wizard mode and basic configuration'
      },
      {
        id: 'wizard-questions',
        title: 'Wizard Questions',
        status: wizardProgress.completedSteps.includes(1) ? 'completed' : 
                wizardProgress.startedSteps.includes(1) ? 'in-progress' : 'not-started',
        description: 'Answer configuration questions'
      },
      {
        id: 'custom-questions',
        title: 'Custom Questions',
        status: wizardProgress.completedSteps.includes(2) ? 'completed' : 
                wizardProgress.startedSteps.includes(2) ? 'in-progress' : 'not-started',
        description: 'Create and configure custom questions'
      },
      {
        id: 'ai-ticker-id',
        title: 'AI TickerID Generation',
        status: aiGenerated.tickerID ? 'completed' : 'not-started',
        description: 'Generate TickerID string using AI'
      },
      {
        id: 'ai-name-id',
        title: 'AI NameID Generation',
        status: aiGenerated.nameID ? 'completed' : 'not-started',
        description: 'Generate NameID string using AI'
      },
      {
        id: 'custom-functions',
        title: 'Custom Functions',
        status: aiGenerated.customFunctions ? 'completed' : 'not-started',
        description: 'Create custom PineScript functions'
      },
      {
        id: 'template-config',
        title: 'Template Configuration',
        status: templateConfig.masterCode ? 'completed' : 'not-started',
        description: 'Configure final template settings'
      }
    ];
  }, [sessionState]);

  const resetSession = useCallback(() => {
    setSessionState(initialSessionState);
    dispatch({ type: 'RESET' });
    showToast('Session reset successfully', 'success');
  }, [dispatch, showToast]);

  return (
    <SessionContext.Provider value={{
      sessionState,
      updateSessionState,
      exportSession,
      importSession,
      getChecklist,
      resetSession
    }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return context;
};