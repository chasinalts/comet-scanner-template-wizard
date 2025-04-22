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
  const [showControls, setShowControls] = useState<boolean>(false);

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
      className={`group border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200 ${className}`}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="p-4 space-y-4">
        <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-contain transition-transform duration-200"
            style={{ transform: `scale(${localScale})` }}
          />
          
          {/* Delete button */}
          <button
            onClick={() => onDelete(id)}
            className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            title="Delete image"
          >
            <TrashIcon className="w-4 h-4" />
          </button>
          
          {/* Resize controls - shown on hover */}
          <div 
            className={`absolute bottom-0 left-0 right-0 bg-black/50 backdrop-blur-sm p-2 transition-opacity duration-200 ${
              showControls ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="flex items-center space-x-2">
              <span className="text-white text-xs">Small</span>
              <input
                type="range"
                min="0.5"
                max="2"
                step="0.1"
                value={localScale}
                onChange={handleScaleChange}
                className="flex-grow h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <span className="text-white text-xs">Large</span>
            </div>
            <div className="text-center text-white text-xs mt-1">
              {Math.round(localScale * 100)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageThumbnail;
