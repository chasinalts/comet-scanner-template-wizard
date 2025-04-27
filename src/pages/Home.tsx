import React, { useState, useEffect } from '../utils/react-imports';

import HolographicText from '../components/ui/HolographicText';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseConfig';
import VirtualizedImageGallery from '../components/ui/VirtualizedImageGallery';
import LazyImage from '../components/ui/LazyImage';
import Button from '../components/ui/Button';

// COMET Scanner description and explanation
const COMET_EXPLANATION = `COMET = Co-integrated Observational Market Evaluation Tool.\n\nA COMET Scanner journeys a few steps farther using the data from a traditional scanner by using them with different visualization techniques and often at very extreme settings to produce very revealing and predictable patterns and similarities in the edge cases of the price action. These \"edge case\" signals may be very far and few between for a single asset, but in my case, the Alert Signals start stacking up when I start to screen all 400+ futures assets on the Blofin Exchange (by having 10 copies of the COMET Scanner on the chart with a different 40 assets selected to be screened for each copy....each copy can screen up to 40 assets max).`;

// Scanner usage description
const SCANNER_USAGE = `COMET Scanners are powerful tools for market analysis that help traders identify potential trading opportunities across multiple assets simultaneously. They work by applying custom filters and visualization techniques to price data, highlighting patterns that might be missed by traditional analysis methods.

Key features of COMET Scanners include:
• Multi-asset screening capability (up to 40 assets per scanner instance)
• Custom visualization techniques for pattern recognition
• Extreme parameter settings to identify edge cases
• Real-time alerts for potential trading opportunities
• Configurable filters to match your trading strategy

The COMET Scanner Template Wizard helps you create a customized scanner template tailored to your specific trading needs and preferences.`;

const Home: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [error, setError] = useState('');

  // Fetch banner and gallery images from Supabase Storage
  useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching images from Supabase Storage...');

        // Make sure the storage is initialized
        await supabase.storage.from('images').list('', { limit: 1 }).catch(err => {
          console.log('Storage initialization check:', err);
        });

        // Fetch banner (assume single file in 'banner' folder)
        console.log('Fetching banner images...');
        const { data: bannerData, error: bannerError } = await supabase.storage.from('images').list('banner', {
          limit: 10, // Increased limit to make sure we get all files
          sortBy: { column: 'name', order: 'asc' }
        });

        if (bannerError) {
          console.error('Error fetching banner:', bannerError);
          throw new Error(`Banner fetch error: ${bannerError.message}`);
        }

        console.log('Banner data:', bannerData);

        // Filter out placeholder files and get the first real image
        const realBannerFiles = bannerData?.filter(file => !file.name.startsWith('.'));

        if (realBannerFiles && realBannerFiles.length > 0) {
          // Try to get a signed URL for the banner image (more reliable with RLS)
          try {
            const { data: signedUrlData, error: signedUrlError } = await supabase.storage
              .from('images')
              .createSignedUrl(`banner/${realBannerFiles[0].name}`, 60 * 60); // 1 hour expiry

            if (signedUrlError) {
              console.error('Error getting signed URL for banner:', signedUrlError);
              throw signedUrlError;
            }

            if (signedUrlData?.signedUrl) {
              console.log('Banner signed URL:', signedUrlData.signedUrl);
              setBannerUrl(signedUrlData.signedUrl);
            } else {
              throw new Error('No signed URL returned for banner');
            }
          } catch (signedUrlError) {
            console.error('Failed to get signed URL, falling back to public URL:', signedUrlError);

            // Fallback to public URL
            const { data: bannerUrlData } = await supabase.storage
              .from('images')
              .getPublicUrl(`banner/${realBannerFiles[0].name}`);

            console.log('Banner public URL:', bannerUrlData.publicUrl);
            setBannerUrl(bannerUrlData.publicUrl);
          }
        } else {
          console.log('No banner images found');
        }

        // Fetch gallery images (all files in 'gallery' folder)
        console.log('Fetching gallery images...');
        const { data: galleryData, error: galleryError } = await supabase.storage.from('images').list('gallery', {
          limit: 100, // Increased limit to get more images
          sortBy: { column: 'name', order: 'asc' }
        });

        if (galleryError) {
          console.error('Error fetching gallery:', galleryError);
          throw new Error(`Gallery fetch error: ${galleryError.message}`);
        }

        console.log('Gallery data:', galleryData);

        // Filter out placeholder files
        const realGalleryFiles = galleryData?.filter(file => !file.name.startsWith('.'));

        if (realGalleryFiles && realGalleryFiles.length > 0) {
          // Get signed URLs for all gallery images (more reliable with RLS)
          try {
            const signedUrls = await Promise.all(
              realGalleryFiles.map(async (img) => {
                try {
                  // Try to get a signed URL first
                  const { data, error } = await supabase.storage
                    .from('images')
                    .createSignedUrl(`gallery/${img.name}`, 60 * 60); // 1 hour expiry

                  if (error) {
                    console.error(`Error getting signed URL for gallery image ${img.name}:`, error);
                    throw error;
                  }

                  return data.signedUrl;
                } catch (signedUrlError) {
                  console.error(`Failed to get signed URL for ${img.name}, falling back to public URL:`, signedUrlError);

                  // Fallback to public URL
                  const { data } = supabase.storage.from('images').getPublicUrl(`gallery/${img.name}`);
                  return data.publicUrl;
                }
              })
            );

            console.log('Gallery URLs:', signedUrls);
            setGalleryImages(signedUrls);
          } catch (error) {
            console.error('Error getting gallery image URLs:', error);

            // Fallback to public URLs if there's an error with the signed URLs
            const publicUrls = realGalleryFiles.map(img => {
              const { data } = supabase.storage.from('images').getPublicUrl(`gallery/${img.name}`);
              return data.publicUrl;
            });

            console.log('Gallery public URLs (fallback):', publicUrls);
            setGalleryImages(publicUrls);
          }
        } else {
          console.log('No gallery images found');
        }
      } catch (err: any) {
        console.error('Failed to load images:', err);
        setError(`Failed to load images: ${err.message || 'Unknown error'}`);
      }
    };

    fetchImages();
  }, []);



  // Clicking gallery image expands it fullscreen
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-900 to-blue-700 flex flex-col items-center py-8 px-2">
      {/* Site Title */}
      <HolographicText
        text="COMET SCANNER TEMPLATE WIZARD"
        as="h1"
        variant="title"
        className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg"
      />

      {/* Banner Section */}
      <div className="w-full max-w-5xl mb-10 flex flex-col items-center">
        {bannerUrl ? (
          <LazyImage
            src={bannerUrl}
            alt="Banner"
            className="rounded-lg shadow-2xl w-full h-72 object-cover"
            style={{ background: 'rgba(255,255,255,0.05)' }}
            loadingStrategy="eager"
          />
        ) : (
          <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">No banner uploaded yet.</div>
        )}
        {error && <div className="text-red-400 mt-2">{error}</div>}
      </div>

      {/* Image Gallery Section */}
      <section className="w-full max-w-6xl mb-12">
        <HolographicText
          text="COMET Scanner Gallery"
          as="h2"
          variant="subtitle"
          className="text-3xl font-semibold text-cyan-100 mb-6 text-center"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-gradient-to-br from-cyan-800/30 to-blue-900/30 p-4 rounded-xl shadow-inner">
          {galleryImages.length > 0 ? (
            galleryImages.map((img, i) => (
              <div key={img} className="aspect-[16/9]">
                <LazyImage
                  src={img}
                  alt={`COMET Gallery ${i + 1}`}
                  className="rounded-lg cursor-pointer w-full h-full hover:scale-105 transition-transform duration-200"
                  onClick={() => setFullscreenImage(img)}
                  style={{ boxShadow: '0 0 20px 2px rgba(0,255,255,0.2)' }}
                  gallerySize={true}
                />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-cyan-200">
              No gallery images available. The admin can add images through the dashboard.
            </div>
          )}
        </div>
      </section>

      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setFullscreenImage(null)}>
          <div className="max-h-[90vh] max-w-[90vw]">
            <LazyImage
              src={fullscreenImage}
              alt="Fullscreen COMET"
              className="rounded-lg shadow-2xl w-full h-full"
              loadingStrategy="eager"
            />
          </div>
        </div>
      )}

      {/* Start Wizard Button */}
      <div className="w-full max-w-4xl flex justify-center mb-16">
        <Button
          onClick={() => navigate('/scanner')}
          className="px-8 py-6 text-xl font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg shadow-cyan-500/20"
          variant="primary"
        >
          Start the COMET Scanner Template Wizard
        </Button>
      </div>

      {/* COMET Description Section */}
      <section className="w-full max-w-4xl mb-8 bg-white/10 backdrop-blur-sm rounded-lg p-8 shadow-lg">
        <HolographicText
          text="What is COMET?"
          as="h2"
          variant="subtitle"
          className="text-2xl font-bold text-cyan-200 mb-4 text-center"
        />
        <div className="whitespace-pre-line text-white text-lg leading-relaxed mb-8">
          {COMET_EXPLANATION}
        </div>

        <HolographicText
          text="COMET Scanner Usage"
          as="h3"
          variant="subtitle"
          className="text-xl font-bold text-cyan-200 mb-4 text-center"
        />
        <div className="whitespace-pre-line text-white text-lg leading-relaxed">
          {SCANNER_USAGE}
        </div>
      </section>
    </div>
  );
};

export default Home;
