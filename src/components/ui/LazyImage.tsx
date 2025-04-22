import React, { useState, useEffect } from 'react';
import { useLazyLoading } from '../../hooks/useLazyLoading';
import { resizeImage } from '../../utils/imageHandlers';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  placeholderColor?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  gallerySize?: boolean;
  sizes?: string;
  loadingStrategy?: 'lazy' | 'eager';
}

/**
 * A component that lazily loads images when they enter the viewport
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholderColor = '#f3f4f6',
  style = {},
  onClick,
  gallerySize = false,
  sizes = '100vw',
  loadingStrategy = 'lazy'
}) => {
  // State for tracking image loading
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Use lazy loading hook with different margins based on loading strategy
  const { ref, isVisible } = useLazyLoading<HTMLDivElement>({
    rootMargin: loadingStrategy === 'eager' ? '400px' : '200px',
    threshold: 0,
    triggerOnce: true
  });
  
  // Check if this is a Firebase Storage URL
  const isFirebaseUrl = src.includes('firebasestorage.googleapis.com');
  
  // Load image when it becomes visible
  useEffect(() => {
    // Skip if not visible yet or already loaded/errored
    if (!isVisible || imageSrc || error) return;
    
    let isMounted = true;
    let objectUrl: string | null = null;
    
    const loadImage = async () => {
      try {
        // For Firebase Storage URLs, we can use them directly without additional processing
        if (isFirebaseUrl && !gallerySize) {
          setImageSrc(src);
          return;
        }
        
        if (gallerySize) {
          // For gallery images, resize them for better performance
          const response = await fetch(src);
          const blob = await response.blob();
          const resizedBlob = await resizeImage(blob, 400, 400);
          
          if (isMounted) {
            objectUrl = URL.createObjectURL(resizedBlob);
            setImageSrc(objectUrl);
          }
        } else {
          // For full-size images, use the original source
          setImageSrc(src);
        }
      } catch (err) {
        console.error(`Failed to load image: ${src}`, err);
        if (isMounted) {
          setError(true);
          // For Firebase URLs, try to use the original URL as fallback
          if (isFirebaseUrl) {
            setImageSrc(src);
          }
        }
      }
    };
    
    loadImage();
    
    // Clean up on unmount
    return () => {
      isMounted = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [isVisible, src, gallerySize, isFirebaseUrl, imageSrc, error]);
  
  // Handle image load event
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  
  // Handle image error event
  const handleImageError = () => {
    setError(true);
    console.error(`Error loading image: ${src}`);
  };
  
  // Generate srcSet for responsive images
  const generateSrcSet = (): string | undefined => {
    if (!src.startsWith('data:') && !src.startsWith('blob:')) {
      return `${src} 1x, ${src} 2x`;
    }
    return undefined;
  };
  
  // Calculate aspect ratio placeholder if width and height are provided
  const aspectRatio = width && height ? (height / width) * 100 : 0;
  
  return (
    <div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={{
        backgroundColor: placeholderColor,
        paddingBottom: aspectRatio ? `${aspectRatio}%` : undefined,
        ...style
      }}
      onClick={onClick}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } absolute inset-0 w-full h-full object-contain`}
          onLoad={handleImageLoad}
          onError={handleImageError}
          width={width}
          height={height}
          sizes={sizes}
          srcSet={generateSrcSet()}
        />
      )}
      
      {/* Show loading spinner or error icon */}
      {(!imageSrc || !isLoaded) && !error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        </div>
      )}
      
      {error && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-red-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyImage;
