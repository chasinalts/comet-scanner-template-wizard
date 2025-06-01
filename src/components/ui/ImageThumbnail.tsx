import React, { useState, useEffect } from 'react';
import TrashIcon from './TrashIcon';

interface ImageThumbnailProps {
  id: string;
  src: string;
  alt: string;
  scale?: number;
  onScaleChange: (id: string, scale: number) => void;
  onDelete: (id: string) => void;
  className?: string;
}

const ImageThumbnail: React.FC<ImageThumbnailProps> = ({
  id,
  src,
  alt,
  scale = 1,
  onScaleChange,
  onDelete,
  className = '',
}) => {
  const [localScale, setLocalScale] = useState<number>(scale);

  // Update local scale when prop changes
  useEffect(() => {
    setLocalScale(scale);
  }, [scale]);

  // Handle scale change from slider
  const handleScaleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newScale = parseFloat(e.target.value);
    setLocalScale(newScale);
    onScaleChange(id, newScale);
  };

  return (
    <div
      className={`group border dark:border-gray-600 rounded-lg bg-gray-800 dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-200 ${className}`}
    >
      <div className="p-4 space-y-4">
        <div className="relative aspect-video bg-gray-900 dark:bg-black rounded-lg overflow-hidden border border-gray-700">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain transition-transform duration-200"
            style={{ transform: `scale(${localScale})` }}
          />

          {/* Delete button - always visible */}
          <button
            onClick={() => {
              if (window.confirm('Are you sure you want to delete this image?')) {
                onDelete(id);
              }
            }}
            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
            title="Delete image"
          >
            <TrashIcon className="w-4 h-4" />
          </button>

          {/* Resize controls - always visible */}
          <div
            className="absolute bottom-0 left-0 right-0 bg-black/75 backdrop-blur-sm p-2 border-t border-gray-600"
          >
            <div className="flex items-center space-x-2">
              <span className="text-cyan-300 text-xs font-medium">Small</span>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={localScale}
                onChange={handleScaleChange}
                className="flex-grow h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer dark:bg-gray-900 accent-cyan-400"
              />
              <span className="text-cyan-300 text-xs font-medium">Large</span>
            </div>
            <div className="text-center text-cyan-300 text-xs mt-1 font-medium">
              {Math.round(localScale * 100)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageThumbnail;
