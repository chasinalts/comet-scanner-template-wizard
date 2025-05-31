import React, { useState, useEffect } from '../utils/react-imports';
import { motion, AnimatePresence } from 'framer-motion';
import { supabase } from '../supabaseConfig';
import HolographicText from './ui/HolographicText';
import { useTheme } from '../contexts/ThemeContext';

interface TemplateGalleryProps {
  className?: string;
}

const TemplateGallery: React.FC<TemplateGalleryProps> = ({ className = '' }) => {
  const { theme } = useTheme();
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  // Fetch gallery images from Supabase Storage
  useEffect(() => {
    const fetchGalleryImages = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const { data: galleryData, error: galleryError } = await supabase.storage
          .from('images')
          .list('gallery');

        if (galleryError) {
          throw new Error(`Gallery fetch error: ${galleryError.message}`);
        }

        if (galleryData && galleryData.length > 0) {
          const urls = galleryData.map(img => {
            const { data } = supabase.storage
              .from('images')
              .getPublicUrl(`gallery/${img.name}`);
            return data.publicUrl;
          });
          setGalleryImages(urls);
        }
      } catch (err: any) {
        console.error('Failed to load gallery images:', err);
        setError(`Failed to load images: ${err.message || 'Unknown error'}`);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryImages();
  }, []);

  if (loading) {
    return (
      <div className={`${className} flex items-center justify-center py-12`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`${className} text-center py-12`}>
        <HolographicText
          text="Error loading images"
          as="p"
          className="text-red-400 text-lg"
        />
        <p className="text-gray-500 mt-2">
          {error}
        </p>
      </div>
    );
  }

  if (galleryImages.length === 0) {
    return (
      <div className={`${className} text-center py-12`}>
        <HolographicText
          text="No images available yet"
          as="p"
          className="text-gray-400 text-lg"
        />
        <p className="text-gray-500 mt-2">
          Images will appear here once administrators upload them.
        </p>
      </div>
    );
  }

  return (
    <div className={`${className} ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="mb-8">
        <HolographicText
          text="Image Gallery"
          as="h2"
          variant="subtitle"
          className="text-3xl font-bold text-center mb-4"
        />
        <p className="text-center text-gray-300 max-w-2xl mx-auto">
          Browse our collection of COMET Scanner images and visualizations.
        </p>
      </div>

      {/* Images Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <AnimatePresence mode="popLayout">
          {galleryImages.map((imageUrl, index) => (
            <motion.div
              key={imageUrl}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 cursor-pointer"
              onClick={() => setFullscreenImage(imageUrl)}
            >
              <img
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-200"
                loading="lazy"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center cursor-pointer" 
          onClick={() => setFullscreenImage(null)}
        >
          <img 
            src={fullscreenImage} 
            alt="Fullscreen view" 
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default TemplateGallery;