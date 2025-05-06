import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  uploadFile,
  getFileUrl,
  listFiles,
  deleteFile,
  getFilePreview,
  getBucketId
} from '../utils/supabaseImageStorage';
import { supabaseClient } from '../supabaseConfig';
import { databaseService } from '../utils/databaseService';
import { processImageForUpload } from '../utils/imageCompression';

// Import test mocks
import '../setupTests';

describe('Supabase Image Storage', () => {
  // Create a mock file
  const mockFile = new File(['test'], 'test-image.jpg', { type: 'image/jpeg' });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('uploadFile', () => {
    it('should upload a file to Supabase storage and store metadata', async () => {
      const result = await uploadFile(mockFile, 'banner', 'user-123');

      // Check that the file was processed
      expect(processImageForUpload).toHaveBeenCalledWith(mockFile, expect.any(Object));

      // Check that the file was uploaded to Supabase
      expect(supabaseClient.storage.from).toHaveBeenCalledWith('banner');
      expect(supabaseClient.storage.from().upload).toHaveBeenCalled();

      // Check that the metadata was stored
      expect(databaseService.create).toHaveBeenCalledWith(
        'images',
        expect.objectContaining({
          name: 'test-image.jpg',
          bucket_id: 'banner',
          uploaded_by: 'user-123',
          image_type: 'banner',
        }),
        expect.any(String)
      );

      // Check the returned data
      expect(result).toEqual(expect.objectContaining({
        $id: expect.any(String),
        bucketId: 'banner',
        filePath: expect.stringContaining('test-image.jpg'),
        publicUrl: 'https://example.com/test-image.jpg',
        name: 'test-image.jpg',
      }));
    });

    it('should handle upload errors', async () => {
      // Mock an upload error
      vi.mocked(supabaseClient.storage.from().upload).mockResolvedValueOnce({
        data: null,
        error: new Error('Upload failed')
      });

      await expect(uploadFile(mockFile, 'banner', 'user-123')).rejects.toThrow('Upload failed');
    });
  });

  describe('getFileUrl', () => {
    it('should return the public URL for a file', () => {
      const url = getFileUrl('test-path', 'banner');

      expect(supabaseClient.storage.from).toHaveBeenCalledWith('banner');
      expect(supabaseClient.storage.from().getPublicUrl).toHaveBeenCalledWith('test-path');
      expect(url).toBe('https://example.com/test-image.jpg');
    });
  });

  describe('listFiles', () => {
    it('should list files from a bucket with their metadata', async () => {
      const files = await listFiles('banner');

      expect(databaseService.list).toHaveBeenCalledWith('images', [
        { key: 'image_type', value: 'banner' }
      ]);

      expect(files).toEqual(expect.arrayContaining([
        expect.objectContaining({
          id: 'image-1',
          file_path: 'banner/image1.jpg',
          image_type: 'banner',
          $id: 'image-1',
          publicUrl: expect.any(String),
        })
      ]));
    });
  });

  describe('deleteFile', () => {
    it('should delete a file from Supabase storage and its metadata', async () => {
      await deleteFile('image-1');

      // Check that the metadata was retrieved
      expect(databaseService.list).toHaveBeenCalledWith('images', [
        { key: 'id', value: 'image-1' }
      ]);

      // Since our mock returns a file with path 'banner/image1.jpg'
      expect(supabaseClient.storage.from).toHaveBeenCalledWith('banner');
      expect(supabaseClient.storage.from().remove).toHaveBeenCalledWith(['banner/image1.jpg']);
    });
  });

  describe('getFilePreview', () => {
    it('should return a preview URL for a file', async () => {
      const previewUrl = await getFilePreview('image-1', 'banner');

      // Check that the metadata was retrieved
      expect(databaseService.list).toHaveBeenCalledWith('images', [
        { key: 'id', value: 'image-1' }
      ]);

      expect(previewUrl).toBe('https://example.com/test-image.jpg');
    });
  });

  describe('getBucketId', () => {
    it('should return the correct bucket ID for each bucket type', () => {
      expect(getBucketId('banner')).toBe('banner');
      expect(getBucketId('gallery')).toBe('gallery');
      expect(getBucketId('scanner')).toBe('scanner');
    });
  });
});
