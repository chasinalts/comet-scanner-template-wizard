import { useState, useEffect, useCallback } from 'react';
import type { ContentItem } from './useAdminContent';
import { handleImageUpload, handleSupabaseImageUpload, cleanupImageUrl } from '../utils/imageHandlers';

export interface ContentManagerHook {
  contents: ContentItem[];
  addContent: (content: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>) => string;
  updateContent: (id: string, updates: Partial<Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>>) => void;
  deleteContent: (id: string) => void;
  uploadImage: (file: File, type: 'banner' | 'scanner', title?: string) => Promise<string>;
  updateImageScale: (id: string, scale: number) => void;
  updateImageDisplayText: (id: string, displayText: string) => void;
}

export const useContentManager = (): ContentManagerHook => {
  const [contents, setContents] = useState<ContentItem[]>(() => {
    const savedContents = localStorage.getItem('admin_contents');
    return savedContents ? JSON.parse(savedContents) : [];
  });

  // Save contents to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('admin_contents', JSON.stringify(contents));
    console.log('Contents saved to localStorage:', contents);
  }, [contents]);

  // Cleanup image URLs on unmount
  useEffect(() => {
    return () => {
      contents.forEach((content) => {
        if (content.imageUrl) {
          const isFirebaseUrl = content.imageUrl.includes('firebasestorage.googleapis.com');
          cleanupImageUrl(content.imageUrl, isFirebaseUrl);
        }
      });
    };
  }, []);

  const addContent = useCallback((content: Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>): string => {
    const id = `content-${Date.now()}`;
    const timestamp = Date.now();

    const newContent: ContentItem = {
      ...content,
      id,
      createdAt: timestamp,
      updatedAt: timestamp
    };

    setContents(prev => [...prev, newContent]);
    return id;
  }, []);

  const updateContent = useCallback((id: string, updates: Partial<Omit<ContentItem, 'id' | 'createdAt' | 'updatedAt'>>) => {
    setContents(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, ...updates, updatedAt: Date.now() }
          : item
      )
    );
  }, []);

  const deleteContent = useCallback((id: string) => {
    setContents(prev => {
      const contentToDelete = prev.find(item => item.id === id);

      // Cleanup image URL if it exists
      if (contentToDelete?.imageUrl) {
        const isCloudUrl = contentToDelete.imageUrl.includes('supabase');
        cleanupImageUrl(contentToDelete.imageUrl, isCloudUrl);
      }

      return prev.filter(item => item.id !== id);
    });
  }, []);

  const uploadImage = useCallback((file: File, type: 'banner' | 'scanner', title = 'Uploaded Image'): Promise<string> => {
    console.log(`Starting upload of ${type} image:`, { fileName: file.name, fileSize: file.size, fileType: file.type });
    return new Promise((resolve, reject) => {
      try {
        // Use Supabase Storage for image uploads
        handleSupabaseImageUpload(
          file,
          type,
          (imageUrl: string, _imagePreview: string) => {
            try {
              console.log(`Adding ${type} content with Supabase Storage URL`);
              const id = addContent({
                type,
                title,
                content: '',
                imageUrl,
                scale: 1
              });
              console.log(`${type} image added with ID:`, id);
              resolve(id);
            } catch (innerError) {
              console.error(`Error adding ${type} content:`, innerError);
              reject(innerError);
            }
          },
          (error) => {
            console.error(`Error uploading ${type} image to Supabase Storage:`, error);
            reject(new Error(`Failed to upload to Supabase Storage: ${error.message}`));
          }
        );
      } catch (error) {
        console.error(`Error setting up ${type} image upload:`, error);
        reject(error);
      }
    });
  }, [addContent]);

  const updateImageScale = useCallback((id: string, scale: number) => {
    updateContent(id, { scale });

    // Trigger a custom event to notify other components about the scale change
    const event = new CustomEvent('image-scale-changed', {
      detail: { id, scale }
    });
    window.dispatchEvent(event);

    console.log('Image scale updated and event dispatched:', { id, scale });
  }, [updateContent]);

  const updateImageDisplayText = useCallback((id: string, displayText: string) => {
    updateContent(id, { displayText });
  }, [updateContent]);

  // New functions for updating image size properties
  const updateImageSize = useCallback((id: string, width?: number, height?: number) => {
    updateContent(id, { width, height });

    // Trigger a custom event to notify other components about the size change
    const event = new CustomEvent('image-size-changed', {
      detail: { id, width, height }
    });
    window.dispatchEvent(event);

    console.log('Image size updated and event dispatched:', { id, width, height });
  }, [updateContent]);

  const updateImageAspectRatio = useCallback((id: string, aspectRatio: string) => {
    updateContent(id, { aspectRatio });

    // Trigger a custom event to notify other components about the aspect ratio change
    const event = new CustomEvent('image-aspect-ratio-changed', {
      detail: { id, aspectRatio }
    });
    window.dispatchEvent(event);

    console.log('Image aspect ratio updated and event dispatched:', { id, aspectRatio });
  }, [updateContent]);

  const updateImageDisplaySize = useCallback((id: string, displaySize: 'small' | 'medium' | 'large' | 'custom') => {
    updateContent(id, { displaySize });

    // Trigger a custom event to notify other components about the display size change
    const event = new CustomEvent('image-display-size-changed', {
      detail: { id, displaySize }
    });
    window.dispatchEvent(event);

    console.log('Image display size updated and event dispatched:', { id, displaySize });
  }, [updateContent]);

  return {
    contents,
    addContent,
    updateContent,
    deleteContent,
    uploadImage,
    updateImageScale,
    updateImageDisplayText,
    updateImageSize,
    updateImageAspectRatio,
    updateImageDisplaySize
  };
};

export default useContentManager;
