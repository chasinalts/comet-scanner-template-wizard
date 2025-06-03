import React from 'react';
import Modal from './ui/Modal';
import HolographicText from './ui/HolographicText';
import Button from './ui/Button';
import { useToast } from './ui/Toast';

// Export the prompts and guide text
export const PROMPT_TICKERID_NAMEID = `
Hello AI. I need your help to generate two specific strings for my TradingView PineScript: a 'tickerID string' and a 'nameID string'. These strings will be used in a scanner that processes multiple assets.

Here's how we'll do this, step-by-step:

Step 1: Ask for My Asset List
First, please ask me for my list of assets. I will provide them in a flexible format, such as:
- EXCHANGE:SYMBOL (e.g., BINANCE:BTCUSDT, NYSE:AAPL)
- SYMBOL only (e.g., BTCUSDT, AAPL, EURUSD)
- A mix of the above
- Separated by commas, newlines, or spaces.
You should be able to parse these common formats.

Step 2: Ask for My 'nameID' (Label) Formatting Preferences
Once you have my asset list, you will ask me THREE questions about how I want the 'nameID' (which is used for display labels and alert messages) to be formatted. Please ask them one by one.

   Preference Question 1: "Do you want to include the Exchange Name in the labels (e.g., 'BINANCE:BTC' instead of just 'BTC')? (Yes/No, default: No)"
      - Why this is asked: Including the exchange can be useful for clarity if I trade the same symbol on multiple exchanges, but it can make labels longer.
      - Your default if I skip: No.

   Preference Question 2: "Do you want to include the Quote Asset in the labels (e.g., 'BTCUSD' or 'BTCUSDT' instead of just 'BTC')? (Yes/No, default: No)"
      - Why this is asked: For forex or crypto, the quote asset is crucial. For stocks, it's often implied (e.g., USD).
      - Your default if I skip: No.

   Preference Question 3: "How do you want the labels to be cased? (Options: 'Uppercase', 'Lowercase', 'As Entered', default: 'Lowercase')"
      - Why this is asked: This determines the text case for the generated 'nameID' string. 'As Entered' will attempt to keep the casing of the base symbol as I typed it.
      - Your default if I skip: Lowercase.

Step 3: Process and Generate the Strings
Based on my asset list and my answers to your preference questions, you will generate:

   A. tickerID String:
      - This string is for the 'tickerid' parameter in PineScript's request.security() function.
      - Format: Each asset should be in the format EXCHANGE:SYMBOL (e.g., BINANCE:BTCUSDT) or just SYMBOL if no exchange was provided (e.g., EURUSD, AAPL).
      - ALL SYMBOLS AND EXCHANGES IN THE tickerID STRING MUST BE CONVERTED TO UPPERCASE.
      - The individual tickerIDs must be comma-separated WITHOUT ANY SPACES after the commas.
      - Example: "BINANCE:BTCUSDT,NASDAQ:AAPL,EURUSD,KRAKEN:SOLUSDTPERP"

   B. nameID String:
      - This string is for display labels on charts and in alert messages.
      - The assets in this string MUST be in the EXACT SAME ORDER as in the tickerID string.
      - The formatting of each nameID will depend on my answers to your Preference Questions in Step 2.
         - Base Symbol: Always included.
         - Exchange Prefix: Added if I answered "Yes" to Preference Question 1. (e.g., "BINANCE:" + symbol)
         - Quote Asset Suffix: Added if I answered "Yes" to Preference Question 2. (e.g., symbol + "USDT")
         - Casing: Applied as per my answer to Preference Question 3.
      - The individual nameIDs must be comma-separated WITHOUT ANY SPACES after the commas.
      - Example (assuming defaults: No exchange, No quote, Lowercase): "btcusdt,aapl,eurusd,solusdtperp"

Step 4: Provide an Important Reminder
After generating the strings, please remind me: "For cleaner charts, especially with many assets, consider using minimalist labels. You can achieve this by choosing not to include the exchange or quote asset in the nameID if they are not essential for you to identify the asset on your chart."

Step 5: Present the Strings
Clearly label and present the two generated strings.

Error Handling: If some of my input asset strings are unparseable or very ambiguous, please make your best effort to process the ones you can and include a note about any entries you had trouble with.

Please start with Step 1 now.
`.trim();

export const GUIDE_TICKERID_NAMEID = `
## User Guide: Generating TickerID & NameID Strings for TradingView PineScript

This guide explains how to use the AI Assistant Prompt to generate \`tickerID\` and \`nameID\` strings, which are essential for creating multi-asset scanners in TradingView's PineScript.

**1. Purpose of the Prompt:**
The primary goal is to create two comma-separated strings:
*   \`tickerID String\`: Used in the \`request.security()\` function in PineScript to fetch data for different assets. Example: \`BINANCE:BTCUSDT,NASDAQ:AAPL,EURUSD\`
*   \`nameID String\`: Used for display purposes, like chart labels or alert messages, corresponding to the assets in the \`tickerID\` string. Example: \`btcusdt,aapl,eurusd\`
It's crucial that the assets in both strings are in the **exact same order**.

**2. How to Use the Prompt:**
*   Copy the entire "Prompt for your AI" text provided in the modal.
*   Paste it into your preferred AI chat interface (e.g., ChatGPT, Claude, Gemini).
*   The AI will then guide you through the process by asking you questions. Follow the AI's lead.

**3. Providing Your Information to the AI:**

*   **Step 1: Asset List:**
    *   When the AI asks for your list of assets, provide them one per line or separated by commas/spaces.
    *   **Preferred Format:** \`EXCHANGE:SYMBOL\` (e.g., \`BINANCE:BTCUSDT\`, \`NYSE:AAPL\`). This is the most explicit.
    *   **Other Accepted Formats:**
        *   \`SYMBOL\` only (e.g., \`BTCUSDT\`, \`AAPL\`). The AI will process these without an exchange prefix for the \`tickerID\`.
        *   Forex pairs (e.g., \`EURUSD\`, \`GBPUSD\`).
    *   The AI is designed to be flexible with common variations.

*   **Step 2: \`nameID\` (Label) Formatting Preferences:**
    The AI will ask you three questions to customize how the \`nameID\` string (used for labels) will look.

    *   **Preference 1: Include Exchange Name?** (e.g., "BINANCE:BTC" vs "BTC")
        *   **Why:** Useful if you trade the same symbol on different exchanges. Makes labels longer.
        *   **AI Default:** No.
        *   **Example:** If "Yes" and input is \`BINANCE:BTCUSDT\`, a label might be \`BINANCE:BTC\` (if quote is excluded).

    *   **Preference 2: Include Quote Asset?** (e.g., "BTCUSD" or "BTCUSDT" vs "BTC")
        *   **Why:** Essential for crypto/forex. For stocks, the quote (e.g., USD) is often implied and can be omitted for brevity.
        *   **AI Default:** No.
        *   **Example:** If "Yes" and input is \`BINANCE:BTCUSDT\`, a label might be \`BTCUSDT\` (if exchange is excluded).

    *   **Preference 3: Label Casing?** (Uppercase, Lowercase, As Entered)
        *   **Why:** Controls the text case of your labels.
        *   **AI Default:** Lowercase.
        *   **"As Entered" Behavior:** This option tries to keep the casing of the base symbol and quote asset as you typed them.

**4. Understanding the AI's Output:**

*   **\`tickerID\` String:**
    *   Always formatted as \`EXCHANGE:SYMBOL\` or just \`SYMBOL\`.
    *   **Crucially, all parts are converted to UPPERCASE.**
    *   Items are comma-separated **without spaces**.

*   **\`nameID\` String:**
    *   Formatted based on your answers to the preference questions.
    *   Assets will be in the **same order** as the \`tickerID\` string.
    *   Items are comma-separated **without spaces**.

**5. Tips and Troubleshooting:**

*   **AI is a Tool:** While powerful, AIs aren't perfect. Review the generated strings.
*   **Clear Input is Key:** The more precise your asset list, the better the results.
*   **No Spaces After Commas:** For both generated strings, ensure there are no spaces after the commas when you copy them into your PineScript code.

**Compatible AIs:** This prompt is designed to work well with advanced conversational AIs like ChatGPT, Claude, Gemini, and similar models.
`.trim();

export const PROMPT_PINESCRIPT_LOGIC_TO_FUNCTION = `
Hello AI. I need your help to create a custom PineScript function (or potentially a set of related functions) from a trading logic description I will provide. This function will be used in a TradingView scanner script.

Here's the process:

Step 1: Inquire about Logic Input & PineScript Version
   - First, please ask me if I will provide the trading logic as a natural language description OR as existing PineScript code.
   - Then, ask me which version of PineScript I am targeting (e.g., v5, v6). Default to v6 if I don't specify.

Step 2: Request Details Based on Input Type
   - If I choose "Natural Language": Ask me to describe the trading logic in as much detail as possible. I should specify indicators, conditions, and the desired output (e.g., a buy signal, a sell signal, a numeric value).
   - If I choose "Existing PineScript Code": Ask me to provide the code. I should also specify which part of the code contains the core logic I want to turn into a function(s) and what the key outputs of that logic are.

Step 3: Process My Input
   - If natural language: Translate my description into programmable logic.
   - If existing code: Extract the core, reusable logic from the provided snippet.

Step 4: Create PineScript Function(s)
   - Based on the processed logic, generate one or more reusable PineScript functions that are compatible with the PineScript version I specified.
   - Function Design Requirements:
      - The function(s) should be suitable for use within TradingView's \`request.security()\` function to query data for multiple symbols.
      - The function(s) MUST return boolean signal(s) (e.g., \`isLongEntry\`, \`isShortEntry\`) AND/OR numeric value(s) (e.g., an oscillator value, a specific price level) that can be plotted or used in further analysis.
      - The code should be well-commented, explaining the purpose of the function and its parameters.

Step 5: Identify and List Required Function Inputs
   - Analyze the generated function(s) and identify all parameters that should be user-configurable (e.g., indicator lengths, price sources, specific thresholds).
   - List these inputs clearly for me. For common parameters, suggest typical default values.

Step 6: Present Results Clearly
   - Provide the complete, generated PineScript function(s).
   - Provide the identified list of required inputs and their suggested defaults.
   - Optionally, offer a brief explanation of the function's logic if it's complex.

Error Handling/Clarification:
   - If my initial description or code is unclear, too complex for a single pass, or ambiguous, please ask me clarifying questions before proceeding with function generation.

Please start with Step 1 now.
`.trim();

export const GUIDE_PINESCRIPT_LOGIC_TO_FUNCTION = `
## User Guide: Converting Trading Logic to PineScript Functions

This guide explains how to use the AI Assistant Prompt to convert your trading logic into reusable PineScript functions for TradingView scanners.

**1. Purpose of the Prompt:**
The goal is to create custom PineScript functions from your trading logic that can be used in multi-asset scanners. These functions will:
*   Return boolean signals (buy/sell) or numeric values (oscillator readings, price levels)
*   Work with TradingView's \`request.security()\` function
*   Be reusable across different symbols and timeframes

**2. How to Use the Prompt:**
*   Copy the entire "Prompt for your AI" text provided in the modal.
*   Paste it into your preferred AI chat interface (e.g., ChatGPT, Claude, Gemini).
*   The AI will guide you through the conversion process step by step.

**3. Preparing Your Trading Logic:**

*   **Option 1: Natural Language Description**
    *   Describe your trading strategy in detail
    *   Include specific indicators (RSI, EMA, MACD, etc.)
    *   Specify entry/exit conditions
    *   Mention any thresholds or parameters
    *   Example: "I want a buy signal when the 10-period EMA crosses above the 20-period EMA and RSI is below 70"

*   **Option 2: Existing PineScript Code**
    *   Provide your current PineScript code
    *   Identify which parts contain the core logic
    *   Specify what outputs you want from the function
    *   The AI will extract and refactor the logic into reusable functions

**4. What the AI Will Provide:**

*   **Custom PineScript Function(s):**
    *   Well-commented code compatible with your specified PineScript version
    *   Functions designed to work with \`request.security()\`
    *   Proper return values (boolean signals or numeric values)

*   **Input Parameters List:**
    *   All configurable parameters identified
    *   Suggested default values for common indicators
    *   Clear descriptions of what each parameter controls

*   **Usage Instructions:**
    *   How to integrate the function into your scanner
    *   Examples of how to call the function
    *   Tips for optimization and customization

**5. Best Practices:**

*   **Be Specific:** The more detailed your logic description, the better the AI can help
*   **Test Incrementally:** Start with simple logic and build complexity gradually
*   **Review Output:** Always review the generated code for accuracy
*   **Optimize Parameters:** Adjust the suggested defaults based on your trading style

**6. Common Use Cases:**

*   Converting indicator-based strategies to functions
*   Creating custom oscillators or momentum indicators
*   Building multi-condition entry/exit signals
*   Extracting reusable logic from complex scripts

**Compatible AIs:** This prompt works well with ChatGPT, Claude, Gemini, and other advanced AI models that understand programming concepts.
`.trim();

interface AiPromptsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AiPromptsModal: React.FC<AiPromptsModalProps> = ({ isOpen, onClose }) => {
  const { showToast } = useToast();

  const handleCopy = async (text: string, promptName: string) => {
    try {
      await navigator.clipboard.writeText(text);
 showToast(`${promptName} copied to clipboard!`, 'success');
    } catch (err) {
      console.error('Failed to copy text: ', err);
      showToast('Failed to copy to clipboard', 'error');
    }
  };

  // Safe markdown-like formatting component
  const SafeFormattedText: React.FC<{ text: string }> = ({ text }) => {
    const formatText = (content: string) => {
      // Split into paragraphs
      const paragraphs = content.split('\n\n');
      
      return paragraphs.map((paragraph, pIndex) => {
        const lines = paragraph.split('\n');
        
        return (
          <div key={pIndex} className="mb-2">
            {lines.map((line, lIndex) => {
              // Handle headers
              if (line.startsWith('## ')) {
                return <h3 key={lIndex} className="text-xl font-semibold text-cyan-300 mt-4 mb-2">{line.substring(3)}</h3>;
              }
              if (line.startsWith('### ')) {
                return <h4 key={lIndex} className="text-lg font-semibold text-cyan-400 mt-3 mb-1">{line.substring(4)}</h4>;
              }
              
              // Handle list items
              if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
                return <li key={lIndex} className="ml-4 list-disc list-inside">{line.trim().substring(2)}</li>;
              }
              
              // Handle regular text with basic formatting
              const processInlineFormatting = (text: string) => {
                const parts = [];
                let currentIndex = 0;
                
                // Simple bold and code detection
                const boldRegex = /\*\*(.*?)\*\*/g;
                const codeRegex = /`(.*?)`/g;
                
                let match;
                while ((match = boldRegex.exec(text)) !== null) {
                  if (match.index > currentIndex) {
                    parts.push(text.substring(currentIndex, match.index));
                  }
                  parts.push(<strong key={`bold-${match.index}`}>{match[1]}</strong>);
                  currentIndex = match.index + match[0].length;
                }
                
                if (currentIndex < text.length) {
                  parts.push(text.substring(currentIndex));
                }
                
                return parts.length > 0 ? parts : text;
              };
              
              return (
                <span key={lIndex}>
                  {processInlineFormatting(line)}
                  {lIndex < lines.length - 1 && <br />}
                </span>
              );
            })}
          </div>
        );
      });
    };
    
    return <div className="text-sm text-gray-300 leading-relaxed">{formatText(text)}</div>;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="" size="4xl" hideTitle={true}>
      <div className="p-1 futuristic-container text-gray-200">
        <HolographicText text="AI Assistant Prompts & User Guides" as="h1" variant="title" className="text-center mb-6 text-3xl" />

        <div className="space-y-8 max-h-[80vh] overflow-y-auto p-4 custom-scrollbar">

          {/* Section 1: TickerID & NameID Generation */}
          <section className="p-4 rounded-lg border border-cyan-600/50 bg-gray-800/30 shadow-lg futuristic-container has-scanline">
            <HolographicText text="Prompt & Guide for TickerID/NameID String Generation" as="h2" variant="subtitle" className="text-2xl mb-4 text-cyan-300" />

            <div className="mb-6">
              <label className="block text-sm font-medium text-cyan-400 mb-1">Prompt for your AI:</label>
              <div className="relative bg-gray-900/80 border border-gray-700 p-3 rounded-md max-h-72 overflow-y-auto custom-scrollbar">
                <pre className="text-xs text-gray-300 whitespace-pre-wrap break-words">{PROMPT_TICKERID_NAMEID}</pre>
                <Button
                  onClick={() => handleCopy(PROMPT_TICKERID_NAMEID, "TickerID/NameID Prompt")}
                  variant="secondary"
                  size="sm"
                  className="absolute top-2 right-2 btn-accent !py-1 !px-2 text-xs"
                >
                  Copy Prompt
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-cyan-400 mb-1">How to use this prompt (User Guide):</label>
              <div className="p-3 border border-gray-700 rounded-md bg-gray-900/50 max-h-72 overflow-y-auto custom-scrollbar">
                <SafeFormattedText text={GUIDE_TICKERID_NAMEID} />
              </div>
            </div>
          </section>

          {/* Section 2: PineScript Logic-to-Function Conversion */}
          <section className="p-4 rounded-lg border border-purple-600/50 bg-gray-800/30 shadow-lg futuristic-container has-scanline">
            <HolographicText text="Prompt & Guide for PineScript Logic-to-Function" as="h2" variant="subtitle" className="text-2xl mb-4 text-purple-300" />

            <div className="mb-6">
              <label className="block text-sm font-medium text-purple-400 mb-1">Prompt for your AI:</label>
              <div className="relative bg-gray-900/80 border border-gray-700 p-3 rounded-md max-h-72 overflow-y-auto custom-scrollbar">
                <pre className="text-xs text-gray-300 whitespace-pre-wrap break-words">{PROMPT_PINESCRIPT_LOGIC_TO_FUNCTION}</pre>
                <Button
                  onClick={() => handleCopy(PROMPT_PINESCRIPT_LOGIC_TO_FUNCTION, "PineScript Logic-to-Function Prompt")}
                  variant="secondary"
                  size="sm"
                  className="absolute top-2 right-2 btn-accent !py-1 !px-2 text-xs"
                >
                  Copy Prompt
                </Button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-purple-400 mb-1">How to use this prompt (User Guide):</label>
              <div className="p-3 border border-gray-700 rounded-md bg-gray-900/50 max-h-72 overflow-y-auto custom-scrollbar">
                <SafeFormattedText text={GUIDE_PINESCRIPT_LOGIC_TO_FUNCTION} />
              </div>
            </div>
          </section>

        </div>
      </div>
    </Modal>
  );
};

export default AiPromptsModal;