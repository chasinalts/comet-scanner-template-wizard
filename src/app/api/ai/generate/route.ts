import { NextRequest, NextResponse } from 'next/server';
import { aiService, AIProvider } from '@/lib/aiService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, functionType, userInput, provider } = body;

    // Validate required fields
    if (!prompt || !functionType || !provider) {
      return NextResponse.json(
        { error: 'Missing required fields: prompt, functionType, provider' },
        { status: 400 }
      );
    }

    // Validate provider
    const validProviders: AIProvider[] = ['openai', 'gemini', 'claude', 'openrouter'];
    if (!validProviders.includes(provider)) {
      return NextResponse.json(
        { error: `Invalid provider. Must be one of: ${validProviders.join(', ')}` },
        { status: 400 }
      );
    }

    // Check if API key exists for the provider
    const apiKeyMap: Record<AIProvider, string | undefined> = {
      openai: process.env.OPENAI_API_KEY,
      gemini: process.env.GEMINI_API_KEY,
      claude: process.env.ANTHROPIC_API_KEY,
      openrouter: process.env.OPENROUTER_API_KEY,
    };

    if (!apiKeyMap[provider as AIProvider]) {
      return NextResponse.json(
        { error: `API key not configured for ${provider}` },
        { status: 500 }
      );
    }

    // Generate code using AI service
    const result = await aiService.generateCode({
      prompt,
      functionType,
      userInput,
      provider,
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('AI generation error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    );
  }
}

// Handle OPTIONS for CORS
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}