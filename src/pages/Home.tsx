import React, { useState } from 'react';
import HolographicText from '../components/ui/HolographicText';
// import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseConfig';
import VirtualizedImageGallery from '../components/ui/VirtualizedImageGallery';
import { useAdminContent } from '../hooks/useAdminContent';
import EditableSection from '../components/ui/EditableSection';

const COMET_EXPLANATION = `COMET = Co-integrated Observational Market Evaluation Tool.\n\nA COMET Scanner journeys a few steps farther using the data from a traditional scanner by using them with different visualization techniques and often at very extreme settings to produce very revealing and predictable patterns and similarities in the edge cases of the price action. These \"edge case\" signals may be very far and few between for a single asset, but in my case, the Alert Signals start stacking up when I start to screen all 400+ futures assets on the Blofin Exchange (by having 10 copies of the COMET Scanner on the chart with a different 40 assets selected to be screened for each copy....each copy can screen up to 40 assets max).`;

const Home: React.FC = () => {
  // const { currentUser } = useAuth(); // COMMENTED OUT - NO AUTH
  const navigate = useNavigate();
  const [bannerUrl, setBannerUrl] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [error, setError] = useState('');
  
  // ADMIN ACCESS STATE
  const [showPasswordInput, setShowPasswordInput] = useState(false);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  // HIDDEN ADMIN PASSWORD (obfuscated)
  const adminPassword = atob('ODU2MkpUSHlLIQ=='); // Base64 encoded '8562JTHyK!'

  // Fetch banner and gallery images from Supabase Storage
  React.useEffect(() => {
    const fetchImages = async () => {
      try {
        console.log('Fetching images from Supabase Storage...');

        // BYPASS AUTHENTICATION CHECK
        // const { data: { session } } = await supabase.auth.getSession();
        console.log('Authentication status: Bypassed - all users allowed');

        // Fetch banner (assume single file in 'banner' folder)
        console.log('Fetching banner images...');
        const { data: bannerData, error: bannerError } = await supabase.storage.from('images').list('banner', { limit: 1 });

        if (bannerError) {
          console.error('Error fetching banner:', bannerError);
          throw new Error(`Banner fetch error: ${bannerError.message}`);
        }

        console.log('Banner data:', bannerData);

        if (bannerData && bannerData.length > 0) {
          const { data: bannerUrlData } = await supabase.storage.from('images').getPublicUrl(`banner/${bannerData[0].name}`);
          console.log('Banner URL:', bannerUrlData.publicUrl);
          setBannerUrl(bannerUrlData.publicUrl);
        } else {
          console.log('No banner images found');
        }

        // Fetch gallery images (all files in 'gallery' folder)
        console.log('Fetching gallery images...');
        const { data: galleryData, error: galleryError } = await supabase.storage.from('images').list('gallery');

        if (galleryError) {
          console.error('Error fetching gallery:', galleryError);
          throw new Error(`Gallery fetch error: ${galleryError.message}`);
        }

        console.log('Gallery data:', galleryData);

        if (galleryData && galleryData.length > 0) {
          const urls = galleryData.map(img => {
            const { data } = supabase.storage.from('images').getPublicUrl(`gallery/${img.name}`);
            return data.publicUrl;
          });
          console.log('Gallery URLs:', urls);
          setGalleryImages(urls);
        } else {
          console.log('No gallery images found');
        }
      } catch (err: any) {
        console.error('Failed to load images:', err);
        setError(`Failed to load images: ${err.message || 'Unknown error'}`);
      }
    };

    const loadCometExplanation = async () => {
      try {
        const { data, error } = await supabase
          .from('site_content')
          .select('content')
          .eq('key', 'comet_explanation')
          .single();

        if (data && !error) {
          setCometExplanation(data.content);
        }
      } catch (error) {
        console.error('Error loading COMET explanation:', error);
      }
    };

    fetchImages();
    loadCometExplanation();
  }, []);



  // Clicking gallery image expands it fullscreen
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [cometExplanation, setCometExplanation] = useState(COMET_EXPLANATION);
  
  // ADMIN PASSWORD HANDLING
  const handleAdminButtonClick = () => {
    console.log('Admin button clicked!');
    setShowPasswordInput(true);
    setPasswordError('');
  };
  
  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === adminPassword) {
      navigate('/admin');
    } else {
      setPasswordError('Incorrect password');
      setPasswordInput('');
    }
  };
  
  const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
    setPasswordError('');
  };
  
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowPasswordInput(false);
      setPasswordInput('');
      setPasswordError('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-cyan-900 to-blue-700 flex flex-col items-center py-8 px-2 relative">
      {/* ADMIN BUTTON - TOP RIGHT CORNER - INVISIBLE */}
      <button
        onClick={handleAdminButtonClick}
        className="absolute top-2 right-2 w-12 h-12 bg-transparent border-none cursor-default opacity-0 z-10"
        title=""
        style={{ pointerEvents: 'auto' }}
      >
        {/* Invisible admin access button */}
      </button>
      
      {/* PASSWORD INPUT MODAL */}
      {showPasswordInput && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
          onClick={handleClickOutside}
        >
          <div className="bg-white rounded-lg p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handlePasswordSubmit}>
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Admin Access</h3>
              <input
                type="password"
                value={passwordInput}
                onChange={handlePasswordInputChange}
                placeholder="Enter password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2"
                autoFocus
              />
              {passwordError && (
                <p className="text-red-500 text-sm mb-2">{passwordError}</p>
              )}
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >Submit</button>
                <button
                  type="button"
                  onClick={() => setShowPasswordInput(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                >Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <HolographicText text="COMET SCANNER TEMPLATE WIZARD" as="h1" variant="title" className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg" />
      {/* Banner Section */}
      <div className="w-full max-w-3xl mb-6 flex flex-col items-center">
        {bannerUrl ? (
          <img src={bannerUrl} alt="Banner" className="rounded-lg shadow-2xl w-full object-cover max-h-72" style={{ background: 'rgba(255,255,255,0.05)' }} />
        ) : (
          <div className="w-full h-48 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">No banner uploaded yet.</div>
        )}
        {error && <div className="text-red-400 mt-2">{error}</div>}
      </div>
      {/* COMET Explanation - Editable and Collapsible */}
      <EditableSection
        title="What is COMET?"
        content={cometExplanation}
        onContentChange={setCometExplanation}
        className="mb-8"
      />
      {/* Image Gallery */}
      <section className="w-full max-w-5xl mb-8">
        <HolographicText text="COMET Scanner Possibilities" as="h2" variant="subtitle" className="text-xl font-semibold text-cyan-100 mb-4 text-center" />
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
