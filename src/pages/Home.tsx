import React, { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseConfig';
import VirtualizedImageGallery from '../components/ui/VirtualizedImageGallery';

const COMET_EXPLANATION = `COMET = Co-integrated Observational Market Evaluation Tool.\n\nA COMET Scanner journeys a few steps farther using the data from a traditional scanner by using them with different visualization techniques and often at very extreme settings to produce very revealing and predictable patterns and similarities in the edge cases of the price action. These \"edge case\" signals may be very far and few between for a single asset, but in my case, the Alert Signals start stacking up when I start to screen all 400+ futures assets on the Blofin Exchange (by having 10 copies of the COMET Scanner on the chart with a different 40 assets selected to be screened for each copy....each copy can screen up to 40 assets max).`;

const Home: React.FC = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');

  // Fetch banner and gallery images from Supabase Storage
  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        // Fetch banner (assume single file 'banner.jpg' in 'banner' bucket/folder)
        const { data: bannerData } = await supabase.storage.from('images').list('banner', { limit: 1 });
        if (bannerData && bannerData.length > 0) {
          const { data: bannerUrlData } = await supabase.storage.from('images').getPublicUrl(`banner/${bannerData[0].name}`);
          setBannerUrl(bannerUrlData.publicUrl);
        }
        // Fetch gallery images (all files in 'gallery' folder)
        const { data: galleryData } = await supabase.storage.from('images').list('gallery');
        if (galleryData && galleryData.length > 0) {
          const urls = galleryData.map(img => supabase.storage.from('images').getPublicUrl(`gallery/${img.name}`).data.publicUrl);
          setGalleryImages(urls);
        }
      } catch (err: any) {
        setError('Failed to load images.');
      }
    };
    fetchImages();
  }, []);

  // Banner upload handler (owner only)
  const handleBannerUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    setUploading(true);
    setError('');
    try {
      const file = e.target.files[0];
      const { error: uploadError } = await supabase.storage.from('images').upload(`banner/${file.name}`, file, { upsert: true });
      if (uploadError) throw uploadError;
      // Update banner
      const { data: bannerUrlData } = await supabase.storage.from('images').getPublicUrl(`banner/${file.name}`);
      setBannerUrl(bannerUrlData.publicUrl);
    } catch (err: any) {
      setError('Failed to upload banner.');
    } finally {
      setUploading(false);
    }
  };

  // Clicking gallery image expands it fullscreen
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-900 to-blue-700 flex flex-col items-center py-8 px-2">
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">COMET SCANNER TEMPLATE WIZARD</h1>
      {/* Banner Section */}
      <div className="w-full max-w-3xl mb-6 flex flex-col items-center">
        {bannerUrl ? (
          <img src={bannerUrl} alt="Banner" className="rounded-lg shadow-2xl w-full object-cover max-h-72" style={{ background: 'rgba(255,255,255,0.05)' }} />
        ) : (
          <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">No banner uploaded yet.</div>
        )}
        {currentUser?.is_owner && (
          <div className="mt-2">
            <label className="block text-sm font-medium text-white mb-1">Upload Banner (owners only):</label>
            <input type="file" accept="image/*" onChange={handleBannerUpload} disabled={uploading} className="text-white" />
          </div>
        )}
        {error && <div className="text-red-400 mt-2">{error}</div>}
      </div>
      {/* COMET Explanation */}
      <section className="max-w-2xl bg-white/10 rounded-lg p-6 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-cyan-200 mb-2 text-center">What is COMET?</h2>
        <pre className="whitespace-pre-line text-white text-lg font-mono leading-snug">{COMET_EXPLANATION}</pre>
      </section>
      {/* Image Gallery */}
      <section className="w-full max-w-5xl mb-8">
        <h2 className="text-xl font-semibold text-cyan-100 mb-4 text-center">COMET Scanner Possibilities</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-gradient-to-br from-cyan-800/30 to-blue-900/30 p-2 rounded-xl shadow-inner">
          {galleryImages.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`COMET Gallery ${i + 1}`}
              className="rounded-lg cursor-pointer object-cover aspect-square hover:scale-105 transition-transform duration-200"
              onClick={() => setFullscreenImage(img)}
              style={{ boxShadow: '0 0 20px 2px rgba(0,255,255,0.2)' }}
            />
          ))}
        </div>
      </section>
      {/* Fullscreen Image Modal */}
      {fullscreenImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="Fullscreen COMET" className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-2xl" />
        </div>
      )}
      {/* Start Wizard Button */}
      <button
        className="mt-8 px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-white font-bold text-xl rounded-full shadow-lg hover:scale-105 transition-transform"
        onClick={() => navigate('/scanner')}
      >
        Click here to be guided through the COMET Scanner Template Wizard
      </button>
    </div>
  );
};

export default Home;
