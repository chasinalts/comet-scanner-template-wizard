'use client';

import { useState, useEffect } from 'react';
import { LivePreviewState } from '@/types/supabaseDb';

interface LivePreviewPanelProps {
  masterCode?: string;
  userAnswers?: Record<string, any>;
  completedSections?: string[];
  onCodeUpdate?: (code: string) => void;
}

export default function LivePreviewPanel({
  masterCode = '',
  userAnswers = {},
  completedSections = [],
  onCodeUpdate = () => {}
}: LivePreviewPanelProps = {}) {
  const [isVisible, setIsVisible] = useState(true);
  const [currentCode, setCurrentCode] = useState('');
  const [previewState, setPreviewState] = useState<LivePreviewState>({
    masterCode: '',
    completedSections: [],
    userAnswers: {},
    currentCode: ''
  });

  // Base COMET Scanner code that every template starts with
  const baseCode = `// COMET Scanner Base Template
// Co-Integrated Observational Market Evaluation Tool

class COMETScanner {
  constructor(config = {}) {
    this.config = {
      // Default configuration
      scanInterval: 1000,
      dataPoints: 100,
      alertThreshold: 0.8,
      ...config
    };
    
    this.isScanning = false;
    this.data = [];
    this.observers = [];
  }

  // Core scanning functionality
  startScan() {
    if (this.isScanning) return;
    
    this.isScanning = true;
    console.log('COMET Scanner: Starting market evaluation...');
    
    // Initialize base scanning loop
    this.scanLoop();
  }

  scanLoop() {
    if (!this.isScanning) return;
    
    // Base market data collection
    this.collectMarketData();
    
    // Continue scanning
    setTimeout(() => this.scanLoop(), this.config.scanInterval);
  }

  collectMarketData() {
    // Base data collection logic
    const timestamp = Date.now();
    const dataPoint = {
      timestamp,
      value: Math.random(), // Placeholder for actual market data
      trend: this.calculateTrend()
    };
    
    this.data.push(dataPoint);
    this.notifyObservers(dataPoint);
  }

  calculateTrend() {
    // Basic trend calculation
    if (this.data.length < 2) return 'neutral';
    
    const current = this.data[this.data.length - 1]?.value || 0;
    const previous = this.data[this.data.length - 2]?.value || 0;
    
    if (current > previous) return 'up';
    if (current < previous) return 'down';
    return 'neutral';
  }

  // Observer pattern for real-time updates
  addObserver(callback) {
    this.observers.push(callback);
  }

  notifyObservers(data) {
    this.observers.forEach(callback => callback(data));
  }

  stopScan() {
    this.isScanning = false;
    console.log('COMET Scanner: Stopping market evaluation...');
  }

  // Placeholder sections for customization
  // {{IMAGE_MANAGEMENT_SECTION}}
  // {{SCANNER_VARIATIONS_SECTION}}
  // {{DISPLAY_OPTIONS_SECTION}}
  // {{INTEGRATION_SETTINGS_SECTION}}
  // {{ADVANCED_FEATURES_SECTION}}
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = COMETScanner;
} else if (typeof window !== 'undefined') {
  window.COMETScanner = COMETScanner;
}`;

  // Generate code based on user responses and master code
  const generateCode = () => {
    let code = masterCode || baseCode;
    
    // Replace placeholders based on completed sections and user answers
    completedSections.forEach(sectionId => {
      const userAnswer = userAnswers[sectionId];
      if (!userAnswer) return;
      
      let sectionCode = '';
      
      switch (sectionId) {
        case 'image-management':
          sectionCode = generateImageManagementCode(userAnswer);
          code = code.replace('// {{IMAGE_MANAGEMENT_SECTION}}', sectionCode);
          break;
          
        case 'scanner-variations':
          sectionCode = generateScannerVariationsCode(userAnswer);
          code = code.replace('// {{SCANNER_VARIATIONS_SECTION}}', sectionCode);
          break;
          
        case 'display-options':
          sectionCode = generateDisplayOptionsCode(userAnswer);
          code = code.replace('// {{DISPLAY_OPTIONS_SECTION}}', sectionCode);
          break;
          
        case 'integration-settings':
          sectionCode = generateIntegrationSettingsCode(userAnswer);
          code = code.replace('// {{INTEGRATION_SETTINGS_SECTION}}', sectionCode);
          break;
          
        case 'advanced-features':
          sectionCode = generateAdvancedFeaturesCode(userAnswer);
          code = code.replace('// {{ADVANCED_FEATURES_SECTION}}', sectionCode);
          break;
      }
    });
    
    return code;
  };

  // Code generation functions for each section
  const generateImageManagementCode = (answer: any) => {
    return `
  // Image Management Configuration
  setupImageBanner() {
    this.bannerConfig = {
      enabled: ${answer.enableBanner || false},
      position: '${answer.position || 'top'}',
      imageUrl: '${answer.imageUrl || ''}',
      altText: '${answer.altText || 'COMET Scanner Banner'}'
    };
    
    if (this.bannerConfig.enabled) {
      this.createBannerElement();
    }
  }
  
  createBannerElement() {
    const banner = document.createElement('div');
    banner.className = 'comet-scanner-banner';
    banner.innerHTML = \`<img src="\${this.bannerConfig.imageUrl}" alt="\${this.bannerConfig.altText}" />\`;
    document.body.appendChild(banner);
  }`;
  };

  const generateScannerVariationsCode = (answer: any) => {
    return `
  // Scanner Variations Configuration
  configureScannerVariations() {
    this.scannerType = '${answer.scannerType || 'standard'}';
    this.sensitivity = ${answer.sensitivity || 0.5};
    this.updateInterval = ${answer.updateInterval || 1000};
    
    // Apply scanner-specific logic
    switch (this.scannerType) {
      case 'aggressive':
        this.config.scanInterval = this.updateInterval / 2;
        this.config.alertThreshold = this.sensitivity * 0.6;
        break;
      case 'conservative':
        this.config.scanInterval = this.updateInterval * 2;
        this.config.alertThreshold = this.sensitivity * 1.4;
        break;
      default:
        this.config.scanInterval = this.updateInterval;
        this.config.alertThreshold = this.sensitivity;
    }
  }`;
  };

  const generateDisplayOptionsCode = (answer: any) => {
    return `
  // Display Options Configuration
  setupDisplayOptions() {
    this.displayConfig = {
      theme: '${answer.theme || 'dark'}',
      showGrid: ${answer.showGrid || false},
      showLegend: ${answer.showLegend || true},
      chartType: '${answer.chartType || 'line'}'
    };
    
    this.applyDisplaySettings();
  }
  
  applyDisplaySettings() {
    document.body.className = \`comet-scanner-\${this.displayConfig.theme}\`;
    
    if (this.displayConfig.showGrid) {
      this.enableGridDisplay();
    }
  }`;
  };

  const generateIntegrationSettingsCode = (answer: any) => {
    return `
  // Integration Settings Configuration
  setupIntegrations() {
    this.integrations = {
      apiEndpoint: '${answer.apiEndpoint || ''}',
      webhookUrl: '${answer.webhookUrl || ''}',
      enableRealtime: ${answer.enableRealtime || false},
      dataFormat: '${answer.dataFormat || 'json'}'
    };
    
    if (this.integrations.enableRealtime) {
      this.initializeRealtimeConnection();
    }
  }
  
  initializeRealtimeConnection() {
    // WebSocket or SSE connection setup
    console.log('Initializing real-time connection...');
  }`;
  };

  const generateAdvancedFeaturesCode = (answer: any) => {
    return `
  // Advanced Features Configuration
  setupAdvancedFeatures() {
    this.advancedConfig = {
      enableAI: ${answer.enableAI || false},
      enablePredictions: ${answer.enablePredictions || false},
      enableAlerts: ${answer.enableAlerts || false},
      customAlgorithm: '${answer.customAlgorithm || 'standard'}'
    };
    
    if (this.advancedConfig.enableAI) {
      this.initializeAI();
    }
  }
  
  initializeAI() {
    console.log('Initializing AI-powered analysis...');
    // AI integration logic here
  }`;
  };

  // Update code when dependencies change
  useEffect(() => {
    const newCode = generateCode();
    setCurrentCode(newCode);
    onCodeUpdate(newCode);
    
    setPreviewState({
      masterCode: masterCode || baseCode,
      completedSections,
      userAnswers,
      currentCode: newCode
    });
  }, [masterCode, userAnswers, completedSections]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(currentCode);
    // Could add a toast notification here
  };

  const downloadCode = () => {
    const blob = new Blob([currentCode], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `comet-scanner-${Date.now()}.js`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  if (!isVisible) {
    return (
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-slate-800 border border-cyan-500/50 text-cyan-400 px-2 py-4 rounded-l-lg hover:bg-slate-700 transition-all duration-200 writing-mode-vertical"
          style={{ writingMode: 'vertical-rl' }}
        >
          Live Preview
        </button>
      </div>
    );
  }

  return (
    <div className="fixed right-0 top-0 h-full w-1/3 bg-slate-900 border-l border-cyan-500/50 z-40 flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-cyan-500/30">
        <h2 className="text-lg font-bold text-cyan-400">Live Preview</h2>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-white text-xl"
        >
          ×
        </button>
      </div>

      {/* Status */}
      <div className="p-4 border-b border-slate-700">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-300">Sections Completed:</span>
          <span className="text-cyan-400 font-medium">{completedSections.length}/5</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
          <div 
            className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(completedSections.length / 5) * 100}%` }}
          />
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 border-b border-slate-700 flex space-x-2">
        <button
          onClick={copyToClipboard}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm py-2 px-3 rounded transition-colors"
        >
          📋 Copy
        </button>
        <button
          onClick={downloadCode}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm py-2 px-3 rounded transition-colors"
        >
          💾 Download
        </button>
      </div>

      {/* Code Preview */}
      <div className="flex-1 overflow-hidden">
        <pre className="h-full overflow-auto p-4 text-sm text-gray-300 bg-slate-800 font-mono">
          <code>{currentCode}</code>
        </pre>
      </div>
    </div>
  );
}