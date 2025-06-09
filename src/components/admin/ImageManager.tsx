"use client";

import React, { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";

interface ImageFile {
  id: string;
  name: string;
  url: string;
  type: "banner" | "thumbnail" | "gallery" | "answer";
  size: number;
  created_at: string;
  updated_at: string;
}

interface ImageManagerProps {
  onImageUpdate?: () => void;
}

export default function ImageManager({ onImageUpdate }: ImageManagerProps) {
  const [images, setImages] = useState<ImageFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [selectedType, setSelectedType] = useState<
    "banner" | "thumbnail" | "gallery" | "answer"
  >("gallery");
  const [filterType, setFilterType] = useState<string>("all");

  const imageTypes = [
    { value: "banner", label: "Banner Images" },
    { value: "thumbnail", label: "Thumbnails" },
    { value: "gallery", label: "Gallery Images" },
    { value: "answer", label: "Answer Images" },
  ];

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setLoading(true);
      // Note: This assumes an images table exists. If not, we'll show a message.
      const { data, error } = await supabase
        .from("images")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        if (error.code === "42P01") {
          setError("Images table not found. Please create the table first.");
          setImages([]);
        } else {
          throw error;
        }
      } else {
        setImages(data || []);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to fetch images");
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file");
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size must be less than 5MB");
      return;
    }

    try {
      setUploading(true);
      setError(null);

      // Generate unique filename
      const fileExt = file.name.split(".").pop();
      const fileName = `${selectedType}_${Date.now()}.${fileExt}`;
      const filePath = `${selectedType}/${fileName}`;

      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("images")
        .upload(filePath, file);

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from("images")
        .getPublicUrl(filePath);

      // Save image metadata to database
      const imageData = {
        name: file.name,
        url: urlData.publicUrl,
        type: selectedType,
        size: file.size,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      const { error: dbError } = await supabase
        .from("images")
        .insert([imageData]);

      if (dbError) throw dbError;

      // Refresh images list
      await fetchImages();
      onImageUpdate?.();

      // Reset file input
      event.target.value = "";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  const handleDeleteImage = async (id: string, url: string) => {
    if (!confirm("Are you sure you want to delete this image?")) return;

    try {
      setError(null);

      // Extract file path from URL
      const urlParts = url.split("/");
      const filePath = urlParts.slice(-2).join("/"); // Get last two parts (type/filename)

      // Delete from storage
      const { error: storageError } = await supabase.storage
        .from("images")
        .remove([filePath]);

      if (storageError) {
        console.error("Storage deletion error:", storageError);
      }

      // Delete from database
      const { error: dbError } = await supabase
        .from("images")
        .delete()
        .eq("id", id);

      if (dbError) throw dbError;

      await fetchImages();
      onImageUpdate?.();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete image");
    }
  };

  const copyImageUrl = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url);
      // You could add a toast notification here
    } catch (err) {
      console.error("Failed to copy URL:", err);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const filteredImages = images.filter(
    (image) => filterType === "all" || image.type === filterType,
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Image Management</h2>
      </div>

      {/* Error Display */}
      {error && (
        <div className="bg-red-500/20 border border-red-500 text-red-200 px-4 py-3 rounded-lg">
          {error}
          {error.includes("table not found") && (
            <div className="mt-2 text-sm">
              <p>SQL to create the images table:</p>
              <pre className="bg-slate-900 p-2 rounded mt-1 text-xs overflow-x-auto">
                {`CREATE TABLE images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  url TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('banner', 'thumbnail', 'gallery', 'answer')),
  size INTEGER NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create storage bucket
INSERT INTO storage.buckets (id, name, public) VALUES ('images', 'images', true);

-- Set up storage policies
CREATE POLICY "Public Access" ON storage.objects FOR SELECT USING (bucket_id = 'images');
CREATE POLICY "Authenticated Upload" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images');
CREATE POLICY "Authenticated Delete" ON storage.objects FOR DELETE USING (bucket_id = 'images');`}
              </pre>
            </div>
          )}
        </div>
      )}

      {/* Upload Section */}
      <div className="bg-slate-800 border border-cyan-500/30 rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">
          Upload New Image
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-cyan-300 text-sm font-medium mb-2">
              Image Type
            </label>
            <select
              value={selectedType}
              onChange={(e) =>
                setSelectedType(
                  e.target.value as
                    | "banner"
                    | "thumbnail"
                    | "gallery"
                    | "answer",
                )
              }
              className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
            >
              {imageTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-cyan-300 text-sm font-medium mb-2">
              Select Image File
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              disabled={uploading}
              className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500 file:mr-4 file:py-1 file:px-4 file:rounded file:border-0 file:text-sm file:bg-cyan-500 file:text-white hover:file:bg-cyan-600"
            />
          </div>
        </div>

        {uploading && (
          <div className="flex items-center space-x-2 text-cyan-300">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-500"></div>
            <span>Uploading...</span>
          </div>
        )}
      </div>

      {/* Filter Section */}
      <div className="flex space-x-4">
        <div>
          <label className="block text-cyan-300 text-sm font-medium mb-1">
            Filter by Type
          </label>
          <select
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className="bg-slate-700 border border-slate-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:border-cyan-500"
          >
            <option value="all">All Types</option>
            {imageTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredImages.length === 0 ? (
          <div className="col-span-full text-center text-slate-400 py-8">
            {images.length === 0
              ? "No images found. Upload your first image to get started."
              : "No images match the current filter."}
          </div>
        ) : (
          filteredImages.map((image) => (
            <div
              key={image.id}
              className="bg-slate-800 border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-colors"
            >
              {/* Image Preview */}
              <div className="aspect-video bg-slate-900 flex items-center justify-center">
                <img
                  src={image.url}
                  alt={image.name}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/placeholder-image.png";
                  }}
                />
              </div>

              {/* Image Info */}
              <div className="p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="text-white font-medium truncate flex-1">
                    {image.name}
                  </h4>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      image.type === "banner"
                        ? "bg-purple-500/20 text-purple-300"
                        : image.type === "thumbnail"
                          ? "bg-blue-500/20 text-blue-300"
                          : image.type === "gallery"
                            ? "bg-green-500/20 text-green-300"
                            : "bg-orange-500/20 text-orange-300"
                    }`}
                  >
                    {image.type}
                  </span>
                </div>

                <p className="text-slate-400 text-sm mb-3">
                  {formatFileSize(image.size)}
                </p>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => copyImageUrl(image.url)}
                    className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    title="Copy URL"
                  >
                    Copy URL
                  </button>
                  <button
                    onClick={() => window.open(image.url, "_blank")}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    title="View Full Size"
                  >
                    View
                  </button>
                  <button
                    onClick={() => handleDeleteImage(image.id, image.url)}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    title="Delete"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
