import React, { useState, useEffect } from 'react';
import { resizeImage } from '../../utils/imageHandlers'; // Import the resizeImage function

interface ResponsiveImageWithPlaceholderProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  sizes?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
  gallerySize?: boolean; // New prop to indicate gallery image
}

const ResponsiveImageWithPlaceholder: React.FC<ResponsiveImageWithPlaceholderProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '100vw',
  style = {},
  onClick,
  loading = 'lazy',
  decoding = 'async',
  gallerySize = false, // Default value is false
}) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null); // Changed to null
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true; // Add a flag to track component mount state
    let objectUrl: string | null = null; // To store the blob URL

    const loadImage = async () => {
      setIsLoaded(false);
      setImageSrc(null); // Set to null initially

      if (gallerySize) {
        try {
          const response = await fetch(src);
          const blob = await response.blob();
          const resizedBlob = await resizeImage(blob, 400, 400); // Adjust size as needed
          if (isMounted) {
            objectUrl = URL.createObjectURL(resizedBlob);
            setImageSrc(objectUrl);
            setIsLoaded(true); // Set isLoaded to true when image is ready
          }
        } catch (error) {
          console.error(`Failed to load or resize image: ${src}`, error);
          if (isMounted) {
            // If loading fails, keep imageSrc as null
          }
        }
      } else {
        // For full-size images, use the original logic
        const img = new Image();
        img.src = src;
        img.onload = () => {
          if (isMounted) {
            setImageSrc(src);
            setIsLoaded(true);
          }
        };
        img.onerror = () => {
          console.error(`Failed to load image: ${src}`);
          if (isMounted) {
            // If loading fails, you might want to set a broken image placeholder
            // setImageSrc("url-to-broken-image.png");
            // setIsLoaded(true);
          }
        };
      }
    };

    loadImage();

    return () => {
      isMounted = false; // Update the flag on unmount
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl); // Revoke the blob URL
      }
    };
  }, [src, gallerySize]);

  // Generate srcSet for responsive images if width is provided
  const generateSrcSet = (): string | undefined => {
    if (!src.startsWith('data:') && !src.startsWith('blob:')) {
      // For regular URLs, create responsive sizes
      // This is a simplified version - in production you'd use actual resized images
      return `${src} 1x, ${src} 2x`;
    }
    return undefined;
  };

  // Only render the img element if imageSrc is not null (and for gallery images, if it's loaded)
  return imageSrc !== null && (!gallerySize || (gallerySize && isLoaded)) ? (
    <img
      src={imageSrc}
      alt={alt}
      className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
      style={{
        ...style,
        objectFit: 'contain',
      }}
      width={width}
      height={height}
      loading={loading}
      decoding={decoding}
      sizes={sizes}
      srcSet={generateSrcSet()}
      onClick={onClick}
      onLoad={() => setIsLoaded(true)}
    />
  ) : null; // Return null if no image to display
};

export default ResponsiveImageWithPlaceholder;
