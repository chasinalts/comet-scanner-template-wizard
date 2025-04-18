import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/ui/Modal';
import { useAdminContent } from '../hooks/useAdminContent';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import ResponsiveImageWithPlaceholder from '../components/ui/ResponsiveImageWithPlaceholder';
import ThemeToggle from '../components/ui/ThemeToggle';
import LiveCodePreview from '../components/LiveCodePreview';
import { useWizard } from '../contexts/WizardContext';
import { useQuestions } from '../hooks/useQuestions';
import { useSections } from '../hooks/useSections';
import type { Question, QuestionOption } from '../types/questions';
import { TextField, CheckboxField } from '../components/ui/FormField'; // Assuming FormField exports these
// import Button from '../components/ui/Button'; // Unused import

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 }
};

const ScannerWizard = () => {
  const { getBannerImage, getScannerImages } = useAdminContent();
  const { } = useAuth(); // Auth context is used but currentUser is not needed
  const { theme } = useTheme();
  const { state: wizardState, dispatch: wizardDispatch } = useWizard();
  const { questions } = useQuestions(); // Load questions managed by admin
  const { sections } = useSections(); // Load sections managed by admin
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');

  // Load admin-managed questions and sections into wizard context
  useEffect(() => {
    wizardDispatch({ type: 'SET_QUESTIONS', payload: questions });
  }, [questions, wizardDispatch]);

  useEffect(() => {
    wizardDispatch({ type: 'SET_SECTIONS', payload: sections });
  }, [sections, wizardDispatch]);

  // Get banner and scanner images from admin content
  const bannerContent = getBannerImage();

  // Get scanner images with error handling
  const [scannerImages, setScannerImages] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 6; // Show 6 images per page (2x3 grid)

  useEffect(() => {
    try {
      const images = getScannerImages();
      setScannerImages(images);
      console.log('Scanner Images loaded:', images.length);
    } catch (error) {
      console.error('Error loading scanner images:', error);
      setScannerImages([]);
    }
  }, [getScannerImages]);

  // Get current page of images
  const getCurrentPageImages = () => {
    const startIndex = (currentPage - 1) * imagesPerPage;
    return scannerImages.slice(startIndex, startIndex + imagesPerPage);
  };

  // Calculate total pages
  const totalPages = Math.ceil(scannerImages.length / imagesPerPage);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleAnswerChange = (questionId: string, value: any) => {
    wizardDispatch({ type: 'SET_ANSWER', payload: { questionId, value } });
  };

  const renderQuestionInput = (question: Question) => {
    const answer = wizardState.answers[question.id];

    switch (question.type) {
      case 'text':
        return (
          <TextField
            label={question.text}
            value={(answer as string) || ''}
            onChange={(e) => handleAnswerChange(question.id, e.target.value)}
            required={question.required}
            className="text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
          />
        );
      case 'choice':
        return (
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              {question.text} {question.required && <span className="text-red-500">*</span>}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {question.options?.map((option: QuestionOption) => (
                <label
                  key={option.id}
                  className={`
                    flex flex-col items-center p-4 border rounded-lg cursor-pointer
                    transition-all duration-150 ease-in-out
                    ${(answer === option.value)
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 ring-2 ring-blue-500'
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700'
                    }
                  `}
                >
                  <input
                    type="radio" // Assuming single choice for now
                    name={question.id}
                    value={option.value}
                    checked={answer === option.value}
                    onChange={() => handleAnswerChange(question.id, option.value)}
                    className="sr-only" // Hide default radio
                  />
                  {option.imageUrl && (
                    <img
                      src={option.imagePreview || option.imageUrl}
                      alt={option.text}
                      className="w-full h-32 object-contain mb-2 rounded"
                      style={{ transform: `scale(${option.scale || 1})` }}
                    />
                  )}
                  <span className="text-sm font-medium text-gray-900 dark:text-white text-center">{option.text}</span>
                </label>
              ))}
            </div>
          </div>
        );
      case 'boolean':
        return (
          <CheckboxField
            label={question.text}
            checked={!!answer}
            onChange={(e) => handleAnswerChange(question.id, e.target.checked)}
            required={question.required}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <ThemeToggle />
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="relative"
        >
          {/* Title Section */}
          <motion.div
            variants={itemVariants}
            className="py-12 px-4 text-center"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white font-display tracking-tight">
              COMET Scanner Template Wizard
            </h1>
          </motion.div>

          {/* Banner Section */}
          <motion.div
            variants={itemVariants}
            className="relative w-full mb-12 bg-gray-100 dark:bg-gray-800"
          >
            {bannerContent ? (
              <div className="relative w-full flex items-center justify-center overflow-hidden">
                <div className="w-full" style={{ paddingBottom: '42.85%' }}>
                  <img
                    src={bannerContent.src}
                    alt="COMET Scanner Banner"
                    className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300"
                    style={{
                      transform: `scale(${bannerContent.scale || 1})`,
                      transformOrigin: 'center center'
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="w-full" style={{ paddingBottom: '42.85%' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <span className="text-3xl text-white font-semibold">
                    Visualize Your Data with COMET Scanner
                  </span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Scanner Variations Gallery */}
          {scannerImages.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Scanner Variations
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {getCurrentPageImages().map((image) => (
                  <div
                    key={image.id}
                    className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
                    onClick={() => {
                      setSelectedImage(image.src);
                      setSelectedTitle(image.displayText || 'Scanner Variation');
                    }}
                  >
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
                      <ResponsiveImageWithPlaceholder
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-contain"                        
                        style={{ transform: `scale(${image.scale || 1})` }}                                                
                        gallerySize={true}
                      />
                    </div>
                    {image.displayText && (
                      <div className="p-4">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                          {image.displayText}
                        </h3>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-8">
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
                    >
                      Previous
                    </button>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`w-8 h-8 rounded flex items-center justify-center ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
                      >
                        {page}
                      </button>
                    ))}

                    <button
                      onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
                    >
                      Next
                    </button>
                  </nav>
                </div>
              )}
            </motion.div>
          )}

          {/* Main Content Area */}
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column: Questions */}
            <div className="lg:col-span-2 space-y-8">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  Configure Your Template
                </h2>
                <div className="space-y-6">
                  {wizardState.questions.map((question: Question) => (
                    <div key={question.id} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700">
                      {renderQuestionInput(question)}
                    </div>
                  ))}
                  {wizardState.questions.length === 0 && (
                     <p className="text-gray-500 dark:text-gray-400">No questions configured yet. Please set them up in the Admin Dashboard.</p>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Right Column: Live Preview */}
            <div className="lg:col-span-1">
              <LiveCodePreview />
            </div>
          </div>
        </motion.div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <Modal
            isOpen={true}
            onClose={() => {
              setSelectedImage(null);
              setSelectedTitle('');
            }}
            title={selectedTitle}
            size="xl"
          >
            <div className="relative">
              <div className="flex justify-center items-center bg-white dark:bg-gray-800 rounded-lg p-4">
                <img
                  src={selectedImage}
                  alt={selectedTitle}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default ScannerWizard;