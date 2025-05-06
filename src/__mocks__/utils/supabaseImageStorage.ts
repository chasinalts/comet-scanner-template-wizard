// Mock for supabaseImageStorage.ts
import { vi } from 'vitest';

// Mock data
const mockImages = [
  {
    id: 'image-1',
    name: 'image1.jpg',
    url: 'https://example.com/image1.jpg',
    metadata: {
      type: 'banner',
      title: 'Banner 1',
    },
  },
  {
    id: 'image-2',
    name: 'image2.jpg',
    url: 'https://example.com/image2.jpg',
    metadata: {
      type: 'scanner',
      title: 'Scanner 1',
    },
  },
];

// Mock functions
export const uploadImage = vi.fn().mockImplementation((file, options = {}) => {
  return Promise.resolve({
    id: 'new-image-id',
    url: 'https://example.com/new-image.jpg',
    name: file.name || 'new-image.jpg',
    metadata: options.metadata || {},
  });
});

export const getImageUrl = vi.fn().mockImplementation((id) => {
  const image = mockImages.find(img => img.id === id);
  return image ? image.url : 'https://example.com/default.jpg';
});

export const listFiles = vi.fn().mockResolvedValue(mockImages);

export const deleteImage = vi.fn().mockResolvedValue(true);

// Export bucket IDs
export const IMAGES_BUCKET_ID = 'banner';
export const BANNER_BUCKET_ID = 'banner';

// Log the bucket configuration for debugging
console.log('Storage bucket configuration:', { IMAGES_BUCKET_ID, BANNER_BUCKET_ID });

// Export the mock functions
export default {
  uploadImage,
  getImageUrl,
  listFiles,
  deleteImage,
  IMAGES_BUCKET_ID,
  BANNER_BUCKET_ID,
};
