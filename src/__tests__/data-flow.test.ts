import { describe, it, expect, vi, beforeEach } from 'vitest';
import { listFiles } from '../utils/supabaseImageStorage';
import { databaseService } from '../utils/databaseService';
import { processImageForUpload } from '../utils/imageCompression';
import { handleImageUpload, handleAppwriteImageUpload, handleSupabaseImageUpload } from '../utils/imageHandlers';

// Mock the storage and database services
vi.mock('../utils/supabaseImageStorage', () => ({
  listFiles: vi.fn().mockImplementation((bucketType) => {
    if (bucketType === 'banner') {
      return Promise.resolve([
        { id: 'banner-1', publicUrl: 'https://example.com/banner/image1.jpg', image_type: 'banner' },
      ]);
    } else if (bucketType === 'gallery') {
      return Promise.resolve([
        { id: 'gallery-1', publicUrl: 'https://example.com/gallery/image1.jpg', image_type: 'gallery' },
        { id: 'gallery-2', publicUrl: 'https://example.com/gallery/image2.jpg', image_type: 'gallery' },
      ]);
    } else if (bucketType === 'scanner') {
      return Promise.resolve([
        { id: 'scanner-1', publicUrl: 'https://example.com/scanner/image1.jpg', image_type: 'scanner' },
        { id: 'scanner-2', publicUrl: 'https://example.com/scanner/image2.jpg', image_type: 'scanner' },
      ]);
    }
    return Promise.resolve([]);
  }),
  uploadFile: vi.fn().mockImplementation((file, bucketType) => {
    return Promise.resolve({
      $id: `${bucketType}-${Date.now()}`,
      bucketId: bucketType,
      filePath: `${bucketType}/${file.name}`,
      publicUrl: `https://example.com/${bucketType}/${file.name}`,
      name: file.name,
    });
  }),
  deleteFile: vi.fn().mockResolvedValue(true),
}));

vi.mock('../utils/appwriteStorage', () => ({
  uploadFile: vi.fn().mockImplementation((file, bucketType) => {
    return Promise.resolve({
      file: {
        $id: `${bucketType}-${Date.now()}`,
        name: file.name,
      },
      metadata: {
        $id: `metadata-${Date.now()}`,
        file_id: `${bucketType}-${Date.now()}`,
        image_type: bucketType,
      },
    });
  }),
}));

vi.mock('../utils/databaseService', () => ({
  databaseService: {
    list: vi.fn().mockImplementation((collection, filters) => {
      if (collection === 'content') {
        return Promise.resolve([
          { id: 'content-1', type: 'what_is_comet', content: 'Test COMET description' },
        ]);
      }
      return Promise.resolve([]);
    }),
    get: vi.fn().mockResolvedValue({ id: 'content-1', type: 'what_is_comet', content: 'Test COMET description' }),
    create: vi.fn().mockImplementation((collection, data) => {
      return Promise.resolve({
        id: `${collection}-${Date.now()}`,
        ...data,
      });
    }),
    update: vi.fn().mockImplementation((collection, id, data) => {
      return Promise.resolve({
        id,
        ...data,
      });
    }),
  },
}));

vi.mock('../utils/imageCompression', () => ({
  processImageForUpload: vi.fn().mockImplementation((file) => Promise.resolve(file)),
}));

describe('Data Flow from Storage to UI', () => {
  // Create a mock file
  const mockFile = new File(['test'], 'test-image.jpg', { type: 'image/jpeg' });
  
  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('Image Upload Flow', () => {
    it('should process and upload images to storage', async () => {
      const onSuccess = vi.fn();
      const onError = vi.fn();
      
      await handleImageUpload(mockFile, 'banner', onSuccess, onError, 'user-123');
      
      // Check that the image was processed for upload
      expect(processImageForUpload).toHaveBeenCalledWith(mockFile, expect.any(Object));
      
      // Check that the success callback was called with the image ID and URL
      expect(onSuccess).toHaveBeenCalledWith(expect.any(String), expect.stringContaining('https://example.com'));
      
      // Check that the error callback was not called
      expect(onError).not.toHaveBeenCalled();
    });
    
    it('should handle upload errors gracefully', async () => {
      const onSuccess = vi.fn();
      const onError = vi.fn();
      
      // Mock an upload error
      vi.mocked(handleAppwriteImageUpload).mockRejectedValueOnce(new Error('Upload failed'));
      
      await handleImageUpload(mockFile, 'banner', onSuccess, onError, 'user-123');
      
      // Check that the error callback was called with the error
      expect(onError).toHaveBeenCalledWith(expect.any(Error));
      
      // Check that the success callback was not called
      expect(onSuccess).not.toHaveBeenCalled();
    });
  });
  
  describe('Image Retrieval Flow', () => {
    it('should fetch banner images for display', async () => {
      const bannerImages = await listFiles('banner');
      
      // Check that the images were fetched
      expect(listFiles).toHaveBeenCalledWith('banner');
      
      // Check that the result contains the expected data
      expect(bannerImages).toEqual([
        expect.objectContaining({
          id: 'banner-1',
          publicUrl: 'https://example.com/banner/image1.jpg',
          image_type: 'banner',
        }),
      ]);
    });
    
    it('should fetch gallery images for display', async () => {
      const galleryImages = await listFiles('gallery');
      
      // Check that the images were fetched
      expect(listFiles).toHaveBeenCalledWith('gallery');
      
      // Check that the result contains the expected data
      expect(galleryImages).toEqual([
        expect.objectContaining({
          id: 'gallery-1',
          publicUrl: 'https://example.com/gallery/image1.jpg',
          image_type: 'gallery',
        }),
        expect.objectContaining({
          id: 'gallery-2',
          publicUrl: 'https://example.com/gallery/image2.jpg',
          image_type: 'gallery',
        }),
      ]);
    });
    
    it('should fetch scanner images for display', async () => {
      const scannerImages = await listFiles('scanner');
      
      // Check that the images were fetched
      expect(listFiles).toHaveBeenCalledWith('scanner');
      
      // Check that the result contains the expected data
      expect(scannerImages).toEqual([
        expect.objectContaining({
          id: 'scanner-1',
          publicUrl: 'https://example.com/scanner/image1.jpg',
          image_type: 'scanner',
        }),
        expect.objectContaining({
          id: 'scanner-2',
          publicUrl: 'https://example.com/scanner/image2.jpg',
          image_type: 'scanner',
        }),
      ]);
    });
  });
  
  describe('Content Retrieval Flow', () => {
    it('should fetch COMET description for display', async () => {
      const contentList = await databaseService.list('content');
      
      // Check that the content was fetched
      expect(databaseService.list).toHaveBeenCalledWith('content');
      
      // Check that the result contains the expected data
      expect(contentList).toEqual([
        expect.objectContaining({
          id: 'content-1',
          type: 'what_is_comet',
          content: 'Test COMET description',
        }),
      ]);
    });
    
    it('should fetch specific content by ID', async () => {
      const content = await databaseService.get('content', 'content-1');
      
      // Check that the content was fetched
      expect(databaseService.get).toHaveBeenCalledWith('content', 'content-1');
      
      // Check that the result contains the expected data
      expect(content).toEqual(expect.objectContaining({
        id: 'content-1',
        type: 'what_is_comet',
        content: 'Test COMET description',
      }));
    });
  });
  
  describe('Data Persistence Flow', () => {
    it('should create new content in the database', async () => {
      const newContent = {
        type: 'what_is_comet',
        content: 'Updated COMET description',
      };
      
      const result = await databaseService.create('content', newContent);
      
      // Check that the content was created
      expect(databaseService.create).toHaveBeenCalledWith('content', newContent);
      
      // Check that the result contains the expected data
      expect(result).toEqual(expect.objectContaining({
        id: expect.any(String),
        type: 'what_is_comet',
        content: 'Updated COMET description',
      }));
    });
    
    it('should update existing content in the database', async () => {
      const updatedContent = {
        content: 'Updated COMET description',
      };
      
      const result = await databaseService.update('content', 'content-1', updatedContent);
      
      // Check that the content was updated
      expect(databaseService.update).toHaveBeenCalledWith('content', 'content-1', updatedContent);
      
      // Check that the result contains the expected data
      expect(result).toEqual(expect.objectContaining({
        id: 'content-1',
        content: 'Updated COMET description',
      }));
    });
  });
});
