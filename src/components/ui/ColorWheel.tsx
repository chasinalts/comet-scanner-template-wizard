import React, { useState, useEffect } from 'react';

interface ColorWheelProps {
  onColorChange: (color: string) => void;
  initialColor?: string;
}

const ColorWheel: React.FC<ColorWheelProps> = ({ onColorChange, initialColor = '#1f2937' }) => {
  const [hue, setHue] = useState(210);
  const [saturation, setSaturation] = useState(50);
  const [lightness, setLightness] = useState(25);
  const [isOpen, setIsOpen] = useState(false);

  // Convert HSL to hex
  const hslToHex = (h: number, s: number, l: number): string => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * color).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  // Update color when HSL values change
  useEffect(() => {
    const hexColor = hslToHex(hue, saturation, lightness);
    onColorChange(hexColor);
  }, [hue, saturation, lightness, onColorChange]);

  const currentColor = hslToHex(hue, saturation, lightness);

  return (
    <div className="relative">
      {/* Color Wheel Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
      >
        <div 
          className="w-6 h-6 rounded-full border-2 border-white shadow-lg"
          style={{ backgroundColor: currentColor }}
        />
        <span className="text-white font-medium">Background Color</span>
        <svg 
          className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Color Wheel Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 p-4 bg-gray-800 rounded-lg shadow-xl border border-gray-600 z-50 min-w-[300px]">
          <h3 className="text-white font-semibold mb-4">Customize Background Color</h3>
          
          {/* Color Preview */}
          <div className="mb-4">
            <div 
              className="w-full h-16 rounded-lg border-2 border-gray-600 shadow-inner"
              style={{ backgroundColor: currentColor }}
            />
            <p className="text-gray-300 text-sm mt-2 text-center font-mono">{currentColor}</p>
          </div>

          {/* Hue Slider */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">Hue: {hue}°</label>
            <input
              type="range"
              min="0"
              max="360"
              value={hue}
              onChange={(e) => setHue(Number(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, 
                  hsl(0, 100%, 50%), hsl(60, 100%, 50%), hsl(120, 100%, 50%), 
                  hsl(180, 100%, 50%), hsl(240, 100%, 50%), hsl(300, 100%, 50%), hsl(360, 100%, 50%))`
              }}
            />
          </div>

          {/* Saturation Slider */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">Saturation: {saturation}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={saturation}
              onChange={(e) => setSaturation(Number(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, 
                  hsl(${hue}, 0%, ${lightness}%), hsl(${hue}, 100%, ${lightness}%))`
              }}
            />
          </div>

          {/* Lightness Slider */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">Lightness: {lightness}%</label>
            <input
              type="range"
              min="5"
              max="50"
              value={lightness}
              onChange={(e) => setLightness(Number(e.target.value))}
              className="w-full h-3 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, 
                  hsl(${hue}, ${saturation}%, 0%), hsl(${hue}, ${saturation}%, 50%))`
              }}
            />
          </div>

          {/* Preset Colors */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">Quick Presets</label>
            <div className="grid grid-cols-6 gap-2">
              {[
                { name: 'Dark Blue', h: 210, s: 50, l: 25 },
                { name: 'Dark Purple', h: 270, s: 50, l: 25 },
                { name: 'Dark Green', h: 120, s: 50, l: 25 },
                { name: 'Dark Red', h: 0, s: 50, l: 25 },
                { name: 'Dark Orange', h: 30, s: 50, l: 25 },
                { name: 'Dark Gray', h: 0, s: 0, l: 25 }
              ].map((preset) => {
                const presetColor = hslToHex(preset.h, preset.s, preset.l);
                return (
                  <button
                    key={preset.name}
                    onClick={() => {
                      setHue(preset.h);
                      setSaturation(preset.s);
                      setLightness(preset.l);
                    }}
                    className="w-8 h-8 rounded-full border-2 border-gray-600 hover:border-white transition-colors"
                    style={{ backgroundColor: presetColor }}
                    title={preset.name}
                  />
                );
              })}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-colors font-medium"
          >
            Apply Color
          </button>
        </div>
      )}
    </div>
  );
};

export default ColorWheel;