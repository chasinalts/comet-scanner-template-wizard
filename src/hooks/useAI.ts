import { useState } from 'react';
import { AIProvider } from '@/lib/aiService';

interface UseAIOptions {
  onSuccess?: (code: string) => void;
  onError?: (error: string) => void;
}

interface AIGenerationRequest {
  prompt: string;
  functionType: 'ticker' | 'name' | 'function' | 'scanner' | 'custom';
  userInput?: string;
  provider: AIProvider;
}

interface AIGenerationResponse {
  code: string;
  explanation?: string;
}

export function useAI(options: UseAIOptions = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastResponse, setLastResponse] = useState<AIGenerationResponse | null>(null);

  const generateCode = async (request: AIGenerationRequest): Promise<AIGenerationResponse | null> => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/ai/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate code');
      }

      const result: AIGenerationResponse = await response.json();
      setLastResponse(result);
      
      if (options.onSuccess) {
        options.onSuccess(result.code);
      }

      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
      setError(errorMessage);
      
      if (options.onError) {
        options.onError(errorMessage);
      }
      
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const clearError = () => setError(null);
  const clearResponse = () => setLastResponse(null);

  return {
    generateCode,
    isLoading,
    error,
    lastResponse,
    clearError,
    clearResponse,
  };
}