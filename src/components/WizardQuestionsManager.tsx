import React, { useState, useEffect } from 'react';
import { useQuestions } from '../hooks/useQuestions';
import { useSections } from '../hooks/useSections';
import Button from './ui/Button';
import HolographicText from './ui/HolographicText';
import { useToast } from './ui/Toast';
import type { Question } from '../types/questions';

// Predefined wizard questions based on the wizardQuestions file
const WIZARD_QUESTIONS_DATA = [
  {
    id: 'q1-template-type',
    type: 'choice' as const,
    text: 'Do you want the full template in its entirety (contains every possible line of code that could be added by the app) for you to filter/parse-out what you need and what you do not (comments/descriptions are provided with every bit of code to help you to better understand what you\'re looking at)?',
    required: true,
    options: [
      {
        id: 'full-template',
        text: 'Yes, give me the full template',
        value: 'full',
        imageUrl: '/images/full-template-preview.png', // Placeholder - needs actual image
        linkedSectionId: 'full-template-section'
      },
      {
        id: 'wizard-template',
        text: 'No, I want to use the wizard to build a custom template',
        value: 'wizard',
        imageUrl: '/images/wizard-preview.png', // Placeholder - needs actual image
        linkedSectionId: 'wizard-template-section'
      }
    ]
  },
  {
    id: 'q2-overlay-position',
    type: 'choice' as const,
    text: 'Do you want the COMET Scanner overlaid on the chart or in a separate window?',
    required: true,
    options: [
      {
        id: 'overlaid',
        text: 'Overlaid on the chart',
        value: 'true',
        imageUrl: '/images/overlaid-scanner.png', // Placeholder - needs actual image
        linkedSectionId: 'overlay-true-section'
      },
      {
        id: 'separate-window',
        text: 'In a separate window',
        value: 'false',
        imageUrl: '/images/separate-window-scanner.png', // Placeholder - needs actual image
        linkedSectionId: 'overlay-false-section'
      }
    ]
  },
  {
    id: 'q3-scanner-name',
    type: 'text' as const,
    text: 'Provide a name for scanner used when searching for indicator',
    required: true,
    placeholderVariable: '{{SCANNER_NAME}}',
    linkedSectionId: 'scanner-name-section',
    validation: {
      minLength: 3,
      maxLength: 50
    }
  },
  {
    id: 'q4-shorthand-name',
    type: 'text' as const,
    text: 'Provide a Shorthand (abbreviated) name for COMET Scanner that will appear on the chart (keep it super short for a clean chart)',
    required: true,
    placeholderVariable: '{{SHORTHAND_NAME}}',
    linkedSectionId: 'shorthand-name-section',
    validation: {
      minLength: 1,
      maxLength: 10
    }
  },
  {
    id: 'q5-plot-type',
    type: 'choice' as const,
    text: 'Will you be using LINE PLOTS WITH NAME LABELS at the ends of them (example...like if you are wanting to scan for/view a specific oscillator but for every asset) or simply just ALERT TRIGGER LABELS with the asset name in the Alert Labels?',
    required: true,
    options: [
      {
        id: 'line-plots',
        text: 'LINE PLOTS WITH NAME LABELS',
        value: 'line_plots',
        imageUrl: '/images/line-plots-example.png', // Placeholder - needs actual image
        linkedSectionId: 'line-plots-section'
      },
      {
        id: 'alert-labels',
        text: 'ALERT TRIGGER LABELS only',
        value: 'alert_labels',
        imageUrl: '/images/alert-labels-example.png', // Placeholder - needs actual image
        linkedSectionId: 'alert-labels-section'
      }
    ]
  },
  {
    id: 'q6-horizontal-lines',
    type: 'choice' as const,
    text: 'Do you need stationary horizontal lines (ex. If using line plots that will be plotting an oscillator value)? If so, input the Lowest Line, the Mid Line, and the Highest Line of the oscillator on the appropriate lines?',
    required: true,
    options: [
      {
        id: 'need-hlines',
        text: 'Yes, I need horizontal lines',
        value: 'yes',
        imageUrl: '/images/horizontal-lines-example.png', // Placeholder - needs actual image
        linkedSectionId: 'hlines-section'
      },
      {
        id: 'no-hlines',
        text: 'No, I don\'t need horizontal lines',
        value: 'no',
        imageUrl: '/images/no-hlines-example.png', // Placeholder - needs actual image
        linkedSectionId: 'no-hlines-section'
      }
    ]
  },
  {
    id: 'q7-signal-cooldown',
    type: 'choice' as const,
    text: 'Are you in need of a "Signal Cool-Down" function in your script? (ex. This could be desired in a situation such as if you were signals were produced from the RSI crossing the 70/30 level. This would produce entirely too many signals. By using Signal Cool-Downs it would only produce the first signal and a user defined amount of bars must go by before another signal can be generated from the same level being crossed).',
    required: true,
    options: [
      {
        id: 'need-cooldown',
        text: 'Yes, I need signal cool-down functionality',
        value: 'yes',
        imageUrl: '/images/signal-cooldown-example.png', // Placeholder - needs actual image
        linkedSectionId: 'cooldown-section'
      },
      {
        id: 'no-cooldown',
        text: 'No, I don\'t need signal cool-down',
        value: 'no',
        imageUrl: '/images/no-cooldown-example.png', // Placeholder - needs actual image
        linkedSectionId: 'no-cooldown-section'
      }
    ]
  },
  {
    id: 'q8-alert-timing',
    type: 'choice' as const,
    text: 'Do you want a Bullish/Bearish Alert to trigger as soon as the alert condition is met (this can send an alert before the candle closes) OR do you want the candle to close before an alert is triggered to prevent possible repainting? Repainting can occur if a signal is triggered as soon as the Alert Trigger condition has been met.*** this can occur before a bar closes and if the condition ends up undoing itself before the candle closes, then the previous Alert Label that has already been triggered, will then erase itself causing a repaint of the signal but it\'s too late for the alert as it has already been sent (but ONLY can occur if you allow your alert to trigger before the candle closes)',
    required: true,
    options: [
      {
        id: 'immediate-alert',
        text: 'Trigger alerts immediately (may cause repainting)',
        value: 'immediate',
        imageUrl: '/images/immediate-alert-example.png', // Placeholder - needs actual image
        linkedSectionId: 'immediate-alert-section'
      },
      {
        id: 'confirmed-alert',
        text: 'Wait for candle close (prevents repainting)',
        value: 'confirmed',
        imageUrl: '/images/confirmed-alert-example.png', // Placeholder - needs actual image
        linkedSectionId: 'confirmed-alert-section'
      }
    ]
  }
];

// Code snippets for each section (placeholder - these would need to be actual PineScript code)
const CODE_SNIPPETS = {
  'full-template-section': `
// Full Template Code
//@version=5
indicator("COMET Scanner - Full Template", overlay=true)
// ... complete template code here ...
`,
  'wizard-template-section': `
// Wizard-built Template Base
//@version=5
indicator("COMET Scanner - Custom", overlay={{OVERLAY_SETTING}})
// ... wizard-specific code here ...
`,
  'overlay-true-section': `
// Overlay setting: true
overlay=true
`,
  'overlay-false-section': `
// Overlay setting: false
overlay=false
`,
  'scanner-name-section': `
// Scanner name configuration
title="{{SCANNER_NAME}}"
`,
  'shorthand-name-section': `
// Shorthand name for chart display
shorttitle="{{SHORTHAND_NAME}}"
`,
  'line-plots-section': `
// Line plots with name labels
plot(value, title="{{ASSET_NAME}}", color=color.new({{COLOR}}, 0))
// Additional plot configuration...
`,
  'alert-labels-section': `
// Alert trigger labels only
plotshape(condition, title="{{ASSET_NAME}} Alert", style=shape.labelup, location=location.belowbar)
`,
  'hlines-section': `
// Horizontal reference lines
hline({{LOW_LINE}}, "Low Level", color=color.red)
hline({{MID_LINE}}, "Mid Level", color=color.yellow)
hline({{HIGH_LINE}}, "High Level", color=color.green)
`,
  'no-hlines-section': `
// No horizontal lines needed
// Chart will display without reference lines
`,
  'cooldown-section': `
// Signal cool-down functionality
var int lastSignalBar = na
cooldownPeriod = input.int(5, "Cool-down Bars")
signalAllowed = na(lastSignalBar) or (bar_index - lastSignalBar) >= cooldownPeriod
`,
  'no-cooldown-section': `
// No signal cool-down
// All signals will be triggered immediately when conditions are met
`,
  'immediate-alert-section': `
// Immediate alert triggering
if (alertCondition)
    alert("Signal detected!", alert.freq_once_per_bar)
`,
  'confirmed-alert-section': `
// Confirmed alert (wait for bar close)
if (alertCondition and barstate.isconfirmed)
    alert("Signal confirmed!", alert.freq_once_per_bar)
`
};

interface WizardQuestionsManagerProps {
  onClose?: () => void;
}

const WizardQuestionsManager: React.FC<WizardQuestionsManagerProps> = ({ onClose }) => {
  const { questions, addQuestion, updateQuestion, deleteQuestion } = useQuestions();
  const { sections, addSection } = useSections();
  const { showToast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleImplementWizardQuestions = async () => {
    setIsLoading(true);
    try {
      // First, create the code sections
      for (const [sectionId, code] of Object.entries(CODE_SNIPPETS)) {
        const existingSection = sections.find(s => s.id === sectionId);
        if (!existingSection) {
          await addSection({
            id: sectionId,
            title: sectionId.replace('-section', '').replace(/-/g, ' ').toUpperCase(),
            content: code,
            order: Object.keys(CODE_SNIPPETS).indexOf(sectionId)
          });
        }
      }

      // Then, add the questions
      for (const questionData of WIZARD_QUESTIONS_DATA) {
        const existingQuestion = questions.find(q => q.id === questionData.id);
        if (!existingQuestion) {
          await addQuestion(questionData.type);
          // Update the question with the predefined data
          await updateQuestion(questionData.id, questionData);
        }
      }

      showToast('Wizard questions implemented successfully!', 'success');
      if (onClose) onClose();
    } catch (error) {
      console.error('Error implementing wizard questions:', error);
      showToast('Failed to implement wizard questions', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearExistingQuestions = async () => {
    setIsLoading(true);
    try {
      // Delete all existing questions
      for (const question of questions) {
        await deleteQuestion(question.id);
      }
      showToast('Existing questions cleared successfully!', 'success');
    } catch (error) {
      console.error('Error clearing questions:', error);
      showToast('Failed to clear existing questions', 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-6 bg-gray-800/30 rounded-lg border border-cyan-600/50">
      <HolographicText 
        text="Wizard Questions Implementation" 
        as="h2" 
        variant="subtitle" 
        className="text-2xl mb-4 text-cyan-300" 
      />
      
      <div className="space-y-4">
        <p className="text-gray-300 text-sm leading-relaxed">
          This will implement the predefined wizard questions from the wizardQuestions file. 
          These questions include:
        </p>
        
        <ul className="text-gray-300 text-sm space-y-1 ml-4">
          <li>• Template type selection (full vs wizard)</li>
          <li>• Scanner overlay position</li>
          <li>• Scanner naming</li>
          <li>• Plot type selection</li>
          <li>• Horizontal lines configuration</li>
          <li>• Signal cool-down settings</li>
          <li>• Alert timing preferences</li>
        </ul>
        
        <div className="bg-yellow-900/20 border border-yellow-600/50 rounded-lg p-3 mt-4">
          <p className="text-yellow-300 text-sm">
            <strong>Note:</strong> Image placeholders are included but will need actual images uploaded. 
            Code snippets are basic templates that should be customized for your specific use case.
          </p>
        </div>
        
        <div className="flex gap-3 mt-6">
          <Button
            onClick={handleImplementWizardQuestions}
            disabled={isLoading}
            className="btn-primary"
          >
            {isLoading ? 'Implementing...' : 'Implement Wizard Questions'}
          </Button>
          
          <Button
            onClick={handleClearExistingQuestions}
            disabled={isLoading}
            variant="secondary"
            className="btn-secondary"
          >
            {isLoading ? 'Clearing...' : 'Clear Existing Questions'}
          </Button>
          
          {onClose && (
            <Button
              onClick={onClose}
              variant="secondary"
              className="btn-secondary"
            >
              Close
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default WizardQuestionsManager;