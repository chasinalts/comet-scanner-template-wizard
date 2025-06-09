import OpenAI from "openai";

type AIProvider = "openai" | "gemini" | "claude" | "openrouter";

interface AIRequest {
  prompt: string;
  functionType: "ticker" | "name" | "function";
  userInput?: string;
  provider: AIProvider;
}

interface AIResponse {
  code: string;
  explanation?: string;
}

class AIService {
  private getSystemPrompt(functionType: string): string {
    const basePrompt = `You are an expert Pine Script developer for TradingView. Generate clean, efficient, and well-commented Pine Script code.`;

    switch (functionType) {
      case "ticker":
        return `${basePrompt} Focus on creating ticker/asset scanning configurations. Include proper array handling and security functions.`;
      case "name":
        return `${basePrompt} Focus on creating asset name formatting and labeling functions. Handle string manipulation for clean display names.`;
      case "function":
        return `${basePrompt} Focus on creating custom scanner functions with technical analysis. Include proper signal generation and condition handling.`;
      default:
        return basePrompt;
    }
  }

  private async callOpenAI(
    prompt: string,
    systemPrompt: string,
  ): Promise<string> {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      temperature: 0.7,
      max_tokens: 1000,
    });

    return response.choices[0]?.message?.content || "";
  }

  private async callGemini(
    prompt: string,
    systemPrompt: string,
  ): Promise<string> {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `${systemPrompt}\n\n${prompt}`,
                },
              ],
            },
          ],
          generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 1000,
          },
        }),
      },
    );

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  }

  private async callClaude(
    prompt: string,
    systemPrompt: string,
  ): Promise<string> {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.CLAUDE_API_KEY || "",
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-sonnet-20240229",
        max_tokens: 1000,
        system: systemPrompt,
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    return data.content?.[0]?.text || "";
  }

  private async callOpenRouter(
    prompt: string,
    systemPrompt: string,
  ): Promise<string> {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer":
            process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
          "X-Title": "Comet Scanner Template Wizard",
        },
        body: JSON.stringify({
          model: "anthropic/claude-3-sonnet",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt },
          ],
          temperature: 0.7,
          max_tokens: 1000,
        }),
      },
    );

    const data = await response.json();
    return data.choices?.[0]?.message?.content || "";
  }

  async generateCode(request: AIRequest): Promise<AIResponse> {
    const systemPrompt = this.getSystemPrompt(request.functionType);
    let generatedContent = "";

    try {
      switch (request.provider) {
        case "openai":
          generatedContent = await this.callOpenAI(
            request.prompt,
            systemPrompt,
          );
          break;
        case "gemini":
          generatedContent = await this.callGemini(
            request.prompt,
            systemPrompt,
          );
          break;
        case "claude":
          generatedContent = await this.callClaude(
            request.prompt,
            systemPrompt,
          );
          break;
        case "openrouter":
          generatedContent = await this.callOpenRouter(
            request.prompt,
            systemPrompt,
          );
          break;
        default:
          throw new Error(`Unsupported AI provider: ${request.provider}`);
      }

      // Extract code from response (handle markdown code blocks)
      const codeMatch = generatedContent.match(
        /```(?:pinescript|pine)?\n([\s\S]*?)\n```/,
      );
      const code = codeMatch ? codeMatch[1] : generatedContent;

      return {
        code: code.trim(),
        explanation: generatedContent,
      };
    } catch (error) {
      console.error(`AI generation failed for ${request.provider}:`, error);
      throw new Error(`Failed to generate code using ${request.provider}`);
    }
  }
}

export const aiService = new AIService();
export type { AIProvider, AIRequest, AIResponse };
