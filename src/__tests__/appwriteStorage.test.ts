import { describe, it, expect, vi, beforeEach } from 'vitest';
import {
  uploadFile,
  getFilePreview,
  listFiles,
  deleteFile,
  getBucketId
} from '../utils/appwriteStorage';
import { storage, databases, ID } from '../appwriteConfig';

// Import test mocks
import '../setupTests';

describe('Appwrite Storage', () => {
  // Create a mock file
  const mockFile = new File(['test'], 'test-image.jpg', { type: 'image/jpeg' });

  beforeEach(() => {
    vi.clearAllMocks();
  });

  describe('uploadFile', () => {
    it('should upload a file to Appwrite storage and store metadata', async () => {
      const result = await uploadFile(mockFile, 'banner', 'user-123');

      // Check that the file was uploaded to Appwrite
      expect(storage.createFile).toHaveBeenCalledWith(
        expect.any(String), // bucket ID
        expect.any(String), // file ID
        mockFile
      );

      // Check that the metadata was stored
      expect(databases.createDocument).toHaveBeenCalledWith(
        'test-database',
        'images',
        expect.any(String),
        expect.objectContaining({
          name: 'test-image.jpg',
          file_id: expect.any(String),
          bucket_id: expect.any(String),
          uploaded_by: 'user-123',
          image_type: 'banner',
        })
      );

      // Check the returned data
      expect(result).toEqual({
        file: expect.objectContaining({
          $id: 'test-file-id',
          name: 'test-image.jpg',
        }),
        metadata: expect.objectContaining({
          $id: 'test-metadata-id',
          name: 'test-image.jpg',
          file_id: 'test-file-id',
          image_type: 'banner',
        }),
      });
    });

    it('should handle upload errors', async () => {
      // Mock an upload error
      vi.mocked(storage.createFile).mockRejectedValueOnce(new Error('Upload failed'));

      await expect(uploadFile(mockFile, 'banner', 'user-123')).rejects.toThrow('Upload failed');
    });
  });

  describe('getFilePreview', () => {
    it('should return a preview URL for a file', () => {
      const previewUrl = getFilePreview('test-file-id', 'banner');

      expect(storage.getFilePreview).toHaveBeenCalledWith(
        expect.any(String), // bucket ID
        'test-file-id'
      );

      expect(previewUrl).toBe('https://example.com/preview/test-file-id.jpg');
    });
  });

  describe('listFiles', () => {
    it('should list files from a bucket filtered by image type', async () => {
      const result = await listFiles('banner');

      // Check that the files were listed
      expect(storage.listFiles).toHaveBeenCalled();

      // Check that the metadata was queried to filter by image type
      expect(databases.listDocuments).toHaveBeenCalled();

      // Check the returned data
      expect(result).toEqual(expect.objectContaining({
        files: expect.arrayContaining([
          expect.objectContaining({
            $id: 'file-1',
            name: 'file1.jpg',
          })
        ]),
        metadata: expect.arrayContaining([
          expect.objectContaining({
            $id: 'metadata-1',
            file_id: 'file-1',
            image_type: 'banner',
          })
        ]),
      }));
    });
  });

  describe('deleteFile', () => {
    it('should delete a file from Appwrite storage and its metadata', async () => {
      await deleteFile('file-1', 'banner');

      // Check that the file was deleted
      expect(storage.deleteFile).toHaveBeenCalledWith(
        expect.any(String), // bucket ID
        'file-1'
      );

      // Check that the metadata was queried
      expect(databases.listDocuments).toHaveBeenCalled();

      // Check that the metadata was deleted
      expect(databases.deleteDocument).toHaveBeenCalledWith(
        'test-database',
        'images',
        'metadata-1'
      );
    });
  });

  describe('getBucketId', () => {
    it('should return the correct bucket ID for each bucket type', () => {
      expect(getBucketId('banner')).toBe('banner');
      // Add more tests for other bucket types if needed
    });
  });
});
