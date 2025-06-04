import { ChangeEvent, useEffect, useState } from '../utils/react-imports';

import { motion, Reorder, AnimatePresence } from 'framer-motion';
// import { useAuth } from '../contexts/AuthContext'; // COMMENTED OUT - NO AUTH
import { useToast } from '../components/ui/Toast';
import Button from '../components/ui/Button';
import DragDropUpload from '../components/ui/DragDropUpload';
import { TextField, TextArea, CheckboxField, SelectField } from '../components/ui/FormField';
import { useTheme } from '../contexts/ThemeContext';
import { handleSupabaseImageUpload } from '../utils/imageHandlers';
import { useQuestions } from '../hooks/useQuestions';
import { useSections } from '../hooks/useSections';
import { useContentManager } from '../hooks/useContentManager';
import { useAdminContent, type ImageContent } from '../hooks/useAdminContent';
import { useTemplates } from '../hooks/useTemplates';

import type { Question, QuestionOption } from '../types/questions';
import type { Section } from '../hooks/useSections';
// TrashIcon import removed as it's not used
import ImageThumbnail from '../components/ui/ImageThumbnail';

import HolographicText from '../components/ui/HolographicText';
import { isOwner } from '../utils/permissionChecks';
import { supabase } from '../supabaseConfig';
import WizardQuestionsManager from '../components/WizardQuestionsManager';
import AiPromptsModal from '../components/AiPromptsModal';
import ColorWheel from '../components/ui/ColorWheel';

interface UploadingState {
  questionId?: string;
  optionId?: string;
  contentType?: 'banner' | 'scanner';
}

export default function AdminDashboard() {
  // const { currentUser } = useAuth(); // COMMENTED OUT - NO AUTH
  const { showToast } = useToast();
  const { theme } = useTheme();
  const [canUpload, setCanUpload] = useState<boolean>(true); // ALWAYS TRUE - NO AUTH

  // BYPASS OWNER CHECK - ALL USERS ARE ADMINS NOW
  // useEffect(() => {
  //   const checkOwnerStatus = async () => {
  //     const ownerStatus = await isOwner();
  //     setCanUpload(ownerStatus);
  //   };
  //
  //   checkOwnerStatus();
  // }, [currentUser]);
  const {
    questions,
    addQuestion,
    updateQuestion,
    deleteQuestion
  } = useQuestions();
  const {
    sections,
    addSection,
    updateSection,
    deleteSection,
    reorderSections
  } = useSections();
  const {
    // Unused variables commented out to fix TypeScript errors
    // contents,
    // addContent,
    // updateContent,
    deleteContent,
    uploadImage,
    updateImageScale,
    updateImageDisplayText
  } = useContentManager();
  const { getBannerImage, getScannerImages } = useAdminContent();

  const [uploadingImage, setUploadingImage] = useState<UploadingState | null>(null);
  // Commented out unused state variables to fix TypeScript errors
  // const [bannerPreviewFile, setBannerPreviewFile] = useState<File | null>(null);
  // const [scannerPreviewFile, setScannerPreviewFile] = useState<File | null>(null);
  const [selectedImageId, setSelectedImageId] = useState<string | null>(null);
  const [scannerImagesPage, setScannerImagesPage] = useState<number>(1);
  const IMAGES_PER_PAGE = 9; // Show 9 images per page (3x3 grid)
  const [showWizardManager, setShowWizardManager] = useState(false);
  const [showAiPromptsModal, setShowAiPromptsModal] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState('#1f2937');

  const handleAddOption = (questionId: string) => {
    const currentQuestion = questions.find((q: Question) => q.id === questionId);
    if (!currentQuestion) return;

    const newOption: QuestionOption = {
      id: `option-${Date.now()}`,
      text: '',
      value: '',
      scale: 1
    };

    updateQuestion(questionId, {
      options: [...(currentQuestion.options || []), newOption]
    });

    showToast('success', 'New answer option added');
  };

  // Generic option update handler
  const updateQuestionOption = (
    questionId: string,
    optionId: string,
    updateFn: (opt: QuestionOption) => Partial<QuestionOption>
  ) => {
    const currentQuestion = questions.find((q: Question) => q.id === questionId);
    if (!currentQuestion) return;

    updateQuestion(questionId, {
      options: currentQuestion.options?.map((opt: QuestionOption) =>
        opt.id === optionId ? { ...opt, ...updateFn(opt) } : opt
      )
    });
  };

  // Handle option text change
  const handleOptionTextChange = (questionId: string, optionId: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      updateQuestionOption(questionId, optionId, () => ({
        text: e.target.value,
        value: e.target.value.toLowerCase()
      }));
    };
  };

  // Handle option scale change
  const handleOptionScaleChange = (questionId: string, optionId: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      updateQuestionOption(questionId, optionId, () => ({
        scale: parseFloat(e.target.value)
      }));
    };
  };

  const handleOptionImageUpload = async (questionId: string, optionId: string, file: File) => {
    if (uploadingImage) {
      showToast('error', 'Please wait for the current upload to complete');
      return;
    }

    try {
      setUploadingImage({ questionId, optionId });

      // Use Supabase Storage for image uploads
      handleSupabaseImageUpload(
        file,
        'option',
        (imageUrl: string, imagePreview: string) => {
          const currentQuestion = questions.find((q: Question) => q.id === questionId);
          if (!currentQuestion) return;

          updateQuestion(questionId, {
            options: currentQuestion.options?.map((opt: QuestionOption) =>
              opt.id === optionId ? {
                ...opt,
                imageUrl,
                imagePreview,
                scale: 1
              } : opt
            )
          });

          showToast('success', 'Image uploaded successfully');
          setUploadingImage(null);
        },
        (error) => {
          console.error('Failed to upload option image:', error);
          showToast('error', 'Failed to upload image to Supabase Storage.');
          setUploadingImage(null);
        }
      );
    } catch (error) {
      showToast('error', 'Failed to upload image');
      setUploadingImage(null);
    }
  };

  const handleRemoveOptionImage = (questionId: string, optionId: string) => {
    updateQuestionOption(questionId, optionId, () => ({
      imageUrl: undefined,
      imagePreview: undefined,
      scale: undefined
    }));
  };

  const handleOptionSectionLink = (questionId: string, optionId: string) => {
    return (e: ChangeEvent<HTMLSelectElement>) => {
      updateQuestionOption(questionId, optionId, () => ({
        linkedSectionId: e.target.value || undefined
      }));
    };
  };

  // Generic image upload handler
  const handleImageUpload = (file: File, type: 'banner' | 'scanner', title: string) => {
    if (uploadingImage) {
      showToast('error', 'Please wait for the current upload to complete');
      return;
    }

    try {
      setUploadingImage({ contentType: type });

      uploadImage(file, type, title)
        .then(id => {
          setSelectedImageId(id);

          if (type === 'scanner') {
            // Debug: Log scanner images after upload
            console.log('Scanner image uploaded with ID:', id);
            console.log('Current scanner images:', getScannerImages());
          }

          showToast('success', `${title} uploaded successfully`);
          setUploadingImage(null);
        })
        .catch(error => {
          showToast('error', `Failed to upload ${title.toLowerCase()} to Supabase Storage.`);
          console.error(`Error uploading ${title.toLowerCase()}:`, error);
          setUploadingImage(null);
        });
    } catch (error) {
      showToast('error', `Failed to upload ${title.toLowerCase()}`);
      console.error(`Error setting up ${title.toLowerCase()} upload:`, error);
      setUploadingImage(null);
    }
  };

  // Handle banner image upload
  const handleBannerImageUpload = (file: File) => {
    handleImageUpload(file, 'banner', 'Banner Image');
  };

  // Handle scanner image upload
  const handleScannerImageUpload = (file: File) => {
    handleImageUpload(file, 'scanner', 'Scanner Variation');
  };

  // Handle image scale change
  const handleImageScaleChange = (id: string) => {
    return (e: ChangeEvent<HTMLInputElement>) => {
      const scale = parseFloat(e.target.value);
      // Update the scale immediately in the content manager
      updateImageScale(id, scale);

      // Force a re-render to update the slider position
      setSelectedImageId(id);
    };
  };

  // Handle image display text change
  const handleImageDisplayTextChange = (id: string, displayText: string) => {
    updateImageDisplayText(id, displayText);
  };

  // Handle image deletion
  const handleDeleteImage = (id: string) => {
    deleteContent(id);
    if (selectedImageId === id) {
      setSelectedImageId(null);
    }
    showToast('success', 'Image deleted successfully');
  };

  // State for reordering scanner images
  const [scannerImages, setScannerImages] = useState<ImageContent[]>([]);

  // Load scanner images
  useEffect(() => {
    setScannerImages(getScannerImages());
  }, [getScannerImages]);

  // Handle reordering of scanner images
  const handleReorderScannerImages = (reorderedImages: ImageContent[]) => {
    setScannerImages(reorderedImages);

    // Here you would typically update the order in your database or storage
    // For now, we'll just update the local state
    showToast('success', 'Image order updated');
  };

  // Get paginated scanner images
  const getPaginatedScannerImages = () => {
    const startIndex = (scannerImagesPage - 1) * IMAGES_PER_PAGE;
    return scannerImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);
  };

  // Calculate total pages
  const getTotalScannerPages = () => {
    const totalImages = scannerImages.length;
    return Math.ceil(totalImages / IMAGES_PER_PAGE);
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setScannerImagesPage(newPage);
  };

  // BYPASS PERMISSION CHECK - NO AUTH
  // if (!currentUser?.is_owner) {
  //   return <div className="p-8 text-center">
  //     <HolographicText
  //       text="You don't have permission to access this page."
  //       as="p"
  //       variant="subtitle"
  //       className="text-center"
  //     />
  //   </div>;
  // }

  return (
    <div 
      className={`max-w-7xl mx-auto p-6 space-y-12 ${theme === 'dark' ? 'dark' : ''} futuristic-grid-bg`}
      style={{ backgroundColor }}
    >
      {/* Header with Exit Button and Color Wheel */}
      <div className="flex justify-between items-center mb-8">
        <HolographicText
          text="Admin Dashboard"
          as="h1"
          variant="title"
          className="text-3xl font-bold"
        />
        <div className="flex items-center gap-4">
          <ColorWheel 
            onColorChange={setBackgroundColor}
            initialColor={backgroundColor}
          />
          <Button
            onClick={() => window.location.href = '/home'}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Exit Dashboard
          </Button>
        </div>
      </div>

      {/* Image Management Section */}
      <section className="space-y-8">
        <HolographicText
          text="Image Management"
          as="h2"
          variant="subtitle"
          className="text-2xl font-semibold"
        />

        {/* Banner Image */}
        <div className="rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 futuristic-container holo-glow">
          <HolographicText
            text="Banner Image"
            as="h3"
            variant="subtitle"
            className="text-xl font-medium mb-4"
          />
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                {/* Banner Image Preview - Resizable Window */}
 background on every page                <div className="mb-4">
 of the                  {getBannerImage() ? (
                    <div className="relative bg-gray-800 dark:bg-gray-900 rounded-lg overflow-hidden resize both border-2 border-dashed border-cyan-400 min-w-[200px] min-h-[150px] max-w-full" style={{width: '400px', height: '300px'}}>
                      <img
                        src={getBannerImage()?.src}
                        alt={getBannerImage()?.alt || 'Banner image'}
                        className="w-full h-full object-contain"
                        style={{ transform: `scale(${getBannerImage()?.scale || 1})` }}
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-cyan-300 text-xs px-2 py-1 rounded border border-cyan-500">
                        ↘ Drag to resize banner display
                      </div>
                      <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-cyan-300 text-xs px-2 py-1 rounded border border-cyan-500">
                        Banner Image
                      </div>
                    </div>
                  ) : (
                    <div className="bg-gray-800 dark:bg-gray-900 rounded-lg flex items-center justify-center resize both border-2 border-dashed border-cyan-400 min-w-[200px] min-h-[150px]" style={{width: '400px', height: '300px'}}>
                      <HolographicText
                        text="No banner image uploaded"
                        as="p"
                        className="text-gray-400 dark:text-gray-500"
                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-cyan-300 text-xs px-2 py-1 rounded border border-cyan-500">
                        ↘ Drag to resize
                      </div>
                    </div>
                  )}
                </div>

                {/* Banner Image Controls */}
                {getBannerImage() && (
                  <div className="space-y-4">
                    <div>
                      <HolographicText
                        text={`Image Scale (${((getBannerImage()?.scale || 1) * 100).toFixed(0)}%)`}
                        as="label"
                        className="block text-sm font-medium text-cyan-300 mb-1"
                      />
                      <input
                        type="range"
                        min="0.1"
                        max="2"
                        step="0.1"
                        value={getBannerImage()?.scale || 1}
                        onChange={handleImageScaleChange(getBannerImage()?.id || '')}
                        className="w-full"
                        key={`banner-scale-${getBannerImage()?.id}-${getBannerImage()?.scale}`}
                      />
                    </div>

                    <div>
                      <HolographicText
                        text="Display Text"
                        as="label"
                        className="block text-sm font-medium text-cyan-300 mb-1"
                      />
                      <TextField
                        value={getBannerImage()?.displayText || ''}
                        onChange={(e) => handleImageDisplayTextChange(getBannerImage()?.id || '', e.target.value)}
                        placeholder="Enter text to display on the banner"
                        className="w-full"
                      />
                    </div>

                    <div className="flex justify-end">
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleDeleteImage(getBannerImage()?.id || '')}
                      >
                        Remove Banner Image
                      </Button>
                    </div>
                  </div>
                )}
              </div>

              <div>
                {canUpload ? (
                  /* Banner Image Upload */
                  <DragDropUpload
                    onFileSelect={handleBannerImageUpload}
                    accept="image/*"
                    title="Upload Banner Image"
                    description="Drag and drop or click to upload a banner image"
                    maxSize={5}
                    isLoading={uploadingImage?.contentType === 'banner'}
                  />
                ) : (
                  <div className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                    <HolographicText
                      text="Only owners can upload media"
                      as="p"
                      className="text-amber-500"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Scanner Variations */}
        <div className="rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700 futuristic-container holo-glow">
          <div className="flex justify-between items-center mb-4">
            <HolographicText
              text="Scanner Variations"
              as="h3"
              variant="subtitle"
              className="text-xl font-medium"
            />
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {getScannerImages().length} images
            </div>
          </div>
          <div className="space-y-6">
            {/* Scanner Images Grid with Reordering */}
            <div className="space-y-4">
              <HolographicText
                text="Drag and drop images to reorder them"
                as="p"
                className="text-sm text-cyan-300"
              />
              <Reorder.Group
                axis="y"
                values={getPaginatedScannerImages()}
                onReorder={(reordered: ImageContent[]) => {
                  // Create a new array with all images
                  const startIndex = (scannerImagesPage - 1) * IMAGES_PER_PAGE;
                  const newImages = [...scannerImages];

                  // Replace the current page's images with the reordered ones
                  for (let i = 0; i < reordered.length; i++) {
                    newImages[startIndex + i] = reordered[i];
                  }

                  // Update the state
                  handleReorderScannerImages(newImages);
                }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {/* Existing Scanner Images - Resizable Windows */}
                {getPaginatedScannerImages().map((image: ImageContent) => (
                  <Reorder.Item
                    key={image.id}
                    value={image}
                    className="cursor-move"
                  >
                    <div className="relative bg-gray-800 dark:bg-gray-900 rounded-lg overflow-hidden resize both border-2 border-dashed border-purple-400 min-w-[150px] min-h-[150px] max-w-full" style={{width: '300px', height: '250px'}}>
                      <ImageThumbnail
                        id={image.id}
                        src={image.src}
                        alt={image.alt}
                        scale={image.scale || 1}
                        onScaleChange={(id: string, scale: number) => updateImageScale(id, scale)}
                        onDelete={handleDeleteImage}
background color change                      />
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-purple-300 text-xs px-2 py-1 rounded border border-purple-500">
                        ↘ Drag to resize gallery
                      </div>
                      <div className="absolute top-2 left-2 bg-black bg-opacity-75 text-purple-300 text-xs px-2 py-1 rounded border border-purple-500">
                        Gallery #{getPaginatedScannerImages().indexOf(image) + 1}
                      </div>
                    </div>
                  </Reorder.Item>
                ))}
              </Reorder.Group>

              {/* Upload New Scanner Image - Only show if user can upload */}
              {canUpload ? (
                <div className="border dark:border-gray-700 rounded-lg shadow-sm p-4 futuristic-container mt-6">
                  <DragDropUpload
                    onFileSelect={handleScannerImageUpload}
                    accept="image/*"
                    title="Add Scanner Variation"
                    description="Drag and drop or click to upload"
                    maxSize={5}
                    isLoading={uploadingImage?.contentType === 'scanner'}
                  />
                </div>
              ) : (
                <div className="border dark:border-gray-700 rounded-lg shadow-sm p-4 futuristic-container text-center mt-6">
                  <HolographicText
                    text="Only owners can upload media"
                    as="p"
                    className="text-amber-500"
                  />
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            {getTotalScannerPages() > 1 && (
              <div className="flex justify-center mt-6">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(Math.max(1, scannerImagesPage - 1))}
                    disabled={scannerImagesPage === 1}
                    className={`px-3 py-1 rounded ${scannerImagesPage === 1 ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    Previous
                  </button>

                  {Array.from({ length: getTotalScannerPages() }, (_, i) => i + 1).map(page => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`w-8 h-8 rounded flex items-center justify-center ${page === scannerImagesPage ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
                    >
                      {page}
                    </button>
                  ))}

                  <button
                    onClick={() => handlePageChange(Math.min(getTotalScannerPages(), scannerImagesPage + 1))}
                    disabled={scannerImagesPage === getTotalScannerPages()}
                    className={`px-3 py-1 rounded ${scannerImagesPage === getTotalScannerPages() ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-700 dark:text-gray-500' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'}`}
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Master Code Section */}
      <section className="space-y-8">
        <HolographicText
          text="Master Code"
          as="h2"
          variant="subtitle"
          className="text-2xl font-semibold"
        />
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <HolographicText
              text="Complete Pre-defined Template"
              as="h3"
              variant="subtitle"
              className="text-xl font-medium"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is the complete master code that contains every possible line of code that could be added/removed from within the app and/or wizard.
          </p>
          <TextArea
            value={localStorage.getItem('masterCode') || '// Enter your complete master code here'}
            onChange={(e) => {
              localStorage.setItem('masterCode', e.target.value);
              showToast('success', 'Master code saved');
            }}
            className="w-full font-mono text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            rows={15}
            placeholder="Enter the complete master code here..."
          />
        </div>
      </section>

      {/* Full Template Code Section */}
      <section className="space-y-8">
        <HolographicText
          text="Full Template Code"
          as="h2"
          variant="subtitle"
          className="text-2xl font-semibold"
        />
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <HolographicText
              text="Complete Pre-defined Template"
              as="h3"
              variant="subtitle"
              className="text-xl font-medium"
            />
            <div className="bg-yellow-100 dark:bg-yellow-900 border-2 border-yellow-400 rounded-lg p-4 mb-4">
              <CheckboxField
                label="Make Available to Users"
                checked={localStorage.getItem('fullTemplateEnabled') === 'true'}
                onChange={(e) => {
                  localStorage.setItem('fullTemplateEnabled', e.target.checked.toString());
                  showToast('success', `Full template ${e.target.checked ? 'enabled' : 'disabled'} for users`);
                }}
                className="text-lg font-semibold text-yellow-800 dark:text-yellow-200"
              />
              <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                ⚠️ This controls whether users can access the full template
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This is the complete template code that will be provided to users who choose the "Full Template" option.
          </p>
          <TextArea
            value={localStorage.getItem('fullTemplateCode') || '// Enter your complete template code here'}
            onChange={(e) => {
              localStorage.setItem('fullTemplateCode', e.target.value);
              showToast('success', 'Full template code saved');
            }}
            className="w-full font-mono text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
            rows={15}
            placeholder="Enter the complete template code here..."
          />
        </div>
      </section>



      {/* Questions Section */}
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Questions</h2>
        <div className="space-y-6">
          <div className="flex space-x-4">
            <Button onClick={() => addQuestion('text')}>Add Text Question</Button>
            <Button onClick={() => addQuestion('choice')}>Add Choice Question</Button>
            <Button onClick={() => addQuestion('boolean')}>Add Yes/No Question</Button>
          </div>

          <AnimatePresence mode="popLayout">
            <motion.div className="space-y-8">
              {questions.map((question: Question) => (
                <motion.div
                  key={question.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex justify-between items-start mb-6">
                    <TextArea
                      value={question.text}
                      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateQuestion(question.id, { text: e.target.value })}
                      className="w-full text-lg font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                      placeholder="Enter your question..."
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteQuestion(question.id)}
                      className="ml-4"
                    >
                      Delete
                    </Button>
                  </div>

                  {/* Common Question Settings */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <CheckboxField
                      label="Required Question"
                      checked={question.required}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => updateQuestion(question.id, { required: e.target.checked })}
                    />
                    {(question.type === 'text' || question.type === 'boolean') && (
                      <SelectField
                        label="Link to Code Section"
                        value={question.linkedSectionId || ''}
                        onChange={(e: ChangeEvent<HTMLSelectElement>) => updateQuestion(question.id, { linkedSectionId: e.target.value || undefined })}
                        className="text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                      >
                        <option value="">None</option>
                        {sections.map((section: Section) => (
                          <option key={section.id} value={section.id}>
                            {section.title || `Section ${section.id}`}
                          </option>
                        ))}
                      </SelectField>
                    )}
                  </div>

                  {/* Text Question Specific Settings */}
                  {question.type === 'text' && (
                    <TextField
                      label="Placeholder Variable Name"
                      value={question.placeholderVariable || ''}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => updateQuestion(question.id, { placeholderVariable: e.target.value })}
                      placeholder="e.g., {{USER_INPUT}}"
                      className="text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 mb-6"
                    />
                  )}

                  {/* Choice Question Specific Settings */}
                  {question.type === 'choice' && (
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">Answer Options</h3>
                        <Button onClick={() => handleAddOption(question.id)}>Add Option</Button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AnimatePresence mode="popLayout">
                          {question.options?.map((option: QuestionOption) => (
                            <motion.div
                              key={option.id}
                              layout
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.9 }}
                              className="group border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-200"
                            >
                              <div className="p-4 space-y-4">
                                <TextField
                                  label="Option Text"
                                  value={option.text}
                                  onChange={handleOptionTextChange(question.id, option.id)}
                                  placeholder="Enter answer option text"
                                  className="text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                                />

                                <SelectField
                                  label="Link to Code Section"
                                  value={option.linkedSectionId || ''}
                                  onChange={(e: ChangeEvent<HTMLSelectElement>) => handleOptionSectionLink(question.id, option.id)(e)}
                                  className="text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                                >
                                  <option value="">None</option>
                                  {sections.map((section: Section) => (
                                    <option key={section.id} value={section.id}>
                                      {section.title || `Section ${section.id}`}
                                    </option>
                                  ))}
                                </SelectField>

                                <div className="pt-4">
                                  {option.imageUrl ? (
                                    <div className="space-y-4">
                                      <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                                        <img
                                          src={option.imagePreview || option.imageUrl}
                                          alt={option.text || 'Option image'}
                                          className="w-full h-full object-contain"
                                          style={{ transform: `scale(${option.scale || 1})` }}
                                        />
                                      </div>

                                      <div>
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                          Image Scale ({((option.scale || 1) * 100).toFixed(0)}%)
                                        </label>
                                        <input
                                          type="range"
                                          min="0.1"
                                          max="2"
                                          step="0.1"
                                          value={option.scale || 1}
                                          onChange={handleOptionScaleChange(question.id, option.id)}
                                          className="w-full"
                                        />
                                      </div>

                                      <div className="flex justify-end">
                                        <Button
                                          variant="danger"
                                          size="sm"
                                          onClick={() => handleRemoveOptionImage(question.id, option.id)}
                                        >
                                          Remove Image
                                        </Button>
                                      </div>
                                    </div>
                                  ) : canUpload ? (
                                    <DragDropUpload
                                      onFileSelect={(file: File) => handleOptionImageUpload(question.id, option.id, file)}
                                      accept="image/*"
                                      title="Add Answer Image"
                                      description="Drag and drop or click to upload"
                                      maxSize={2}
                                      variant="compact"
                                      isLoading={uploadingImage?.questionId === question.id && uploadingImage?.optionId === option.id}
                                    />
                                  ) : (
                                    <div className="p-2 border border-gray-200 dark:border-gray-700 rounded-lg text-center">
                                      <p className="text-amber-500 text-sm">Only owners can upload media</p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>



      {/* Master Templates Management */}
      <section className="mb-12">
        <HolographicText
          text="Master Templates"
          as="h2"
          variant="subtitle"
          className="text-2xl font-bold mb-6"
        />
        <MasterTemplatesSection />
      </section>

      {/* Template Categories Management */}
      <section className="mb-12">
        <HolographicText
          text="Template Categories"
          as="h2"
          variant="subtitle"
          className="text-2xl font-bold mb-6"
        />
        <TemplateCategoriesSection />
      </section>

      {/* Code Snippets Management */}
      <section className="mb-12">
        <HolographicText
          text="Code Snippets"
          as="h2"
          variant="subtitle"
          className="text-2xl font-bold mb-6"
        />
        <CodeSnippetsSection />
      </section>

      {/* Wizard Questions Management */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <HolographicText
            text="Wizard Questions"
            as="h2"
            variant="subtitle"
            className="text-2xl font-bold"
          />
          <Button
            onClick={() => setShowWizardManager(!showWizardManager)}
            variant="primary"
            className="bg-cyan-600 hover:bg-cyan-700"
          >
            {showWizardManager ? 'Hide' : 'Manage'} Wizard Questions
          </Button>
        </div>
        {showWizardManager && (
          <WizardQuestionsManager onClose={() => setShowWizardManager(false)} />
        )}
      </section>

      {/* AI Prompts Management */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <HolographicText
            text="AI Assistant Prompts"
            as="h2"
            variant="subtitle"
            className="text-2xl font-bold"
          />
          <Button
            onClick={() => setShowAiPromptsModal(true)}
            variant="primary"
            className="bg-purple-600 hover:bg-purple-700"
          >
            Open AI Prompts
          </Button>
        </div>
        <div className="bg-gray-800/30 rounded-lg border border-purple-600/50 p-4">
          <p className="text-gray-300 text-sm leading-relaxed">
            Access AI assistant prompts for TickerID & NameID generation and PineScript logic-to-function conversion. 
            These prompts can be copied and used with external AI assistants to maintain consistency with the app's AI functionality.
          </p>
        </div>
      </section>

      {/* AI Prompts Modal */}
      {showAiPromptsModal && (
        <AiPromptsModal onClose={() => setShowAiPromptsModal(false)} />
      )}

    </div>
  );
}

// Master Templates Management Component
const MasterTemplatesSection: React.FC = () => {
  const { templates, categories, createTemplate, updateTemplate, deleteTemplate, loadingTemplates } = useTemplates();
  // const { currentUser } = useAuth(); // COMMENTED OUT - NO AUTH
  const { theme } = useTheme();
  const [isCreating, setIsCreating] = useState(false);
  const [editingTemplate, setEditingTemplate] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    master_code: '',
    category_id: '',
    version: '1.0.0'
  });

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      master_code: '',
      category_id: '',
      version: '1.0.0'
    });
    setIsCreating(false);
    setEditingTemplate(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingTemplate) {
        await updateTemplate(editingTemplate.id, formData);
      } else {
        await createTemplate(formData);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving template:', error);
    }
  };

  const handleEdit = (template: any) => {
    setEditingTemplate(template);
    setFormData({
      name: template.name,
      description: template.description || '',
      master_code: template.master_code,
      category_id: template.category_id || '',
      version: template.version
    });
    setIsCreating(true);
  };

  const handleDelete = async (templateId: string) => {
    if (window.confirm('Are you sure you want to delete this template?')) {
      try {
        await deleteTemplate(templateId);
      } catch (error) {
        console.error('Error deleting template:', error);
      }
    }
  };

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Create/Edit Form */}
      {isCreating && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30"
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            {editingTemplate ? 'Edit Template' : 'Create New Template'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Template Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  placeholder="Enter template name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Version
                </label>
                <input
                  type="text"
                  value={formData.version}
                  onChange={(e) => setFormData({ ...formData, version: e.target.value })}
                  className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  placeholder="1.0.0"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category
              </label>
              <select
                value={formData.category_id}
                onChange={(e) => setFormData({ ...formData, category_id: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                placeholder="Enter template description"
                rows={3}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Master Template Code
              </label>
              <textarea
                value={formData.master_code}
                onChange={(e) => setFormData({ ...formData, master_code: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 font-mono text-sm"
                placeholder="Enter your master template code with placeholders like {{PLACEHOLDER_NAME}}"
                rows={10}
                required
              />
            </div>
            <div className="flex gap-3">
              <Button
                type="submit"
                variant="primary"
                className="flex-1"
              >
                {editingTemplate ? 'Update Template' : 'Create Template'}
              </Button>
              <Button
                type="button"
                onClick={resetForm}
                variant="secondary"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Templates List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">
            Existing Templates ({templates.length})
          </h3>
          <Button
            onClick={() => setIsCreating(true)}
            variant="primary"
            size="sm"
          >
            Add New Template
          </Button>
        </div>

        {loadingTemplates ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
          </div>
        ) : templates.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            No templates created yet. Create your first template above.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {templates.map((template) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 hover:border-cyan-400/50 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-white">{template.name}</h4>
                    <p className="text-sm text-cyan-300">v{template.version}</p>
                    {template.description && (
                      <p className="text-sm text-gray-300 mt-1">{template.description}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(template)}
                      className="p-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                      title="Edit template"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(template.id)}
                      className="p-1 text-red-400 hover:text-red-300 transition-colors"
                      title="Delete template"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-400 mb-2">
                  Category: {categories.find(cat => cat.id === template.category_id)?.name || 'Uncategorized'}
                </div>
                <div className="bg-gray-900/50 rounded p-2 max-h-32 overflow-y-auto">
                  <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap">
                    {template.master_code.substring(0, 200)}
                    {template.master_code.length > 200 && '...'}
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Code Snippets Management Component
const CodeSnippetsSection: React.FC = () => {
  const { codeSnippets, createCodeSnippet, updateCodeSnippet, deleteCodeSnippet } = useTemplates();
  const { theme } = useTheme();
  const [isCreating, setIsCreating] = useState(false);
  const [editingSnippet, setEditingSnippet] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    placeholder_key: '',
    code: '',
    description: ''
  });

  const resetForm = () => {
    setFormData({
      name: '',
      placeholder_key: '',
      code: '',
      description: ''
    });
    setIsCreating(false);
    setEditingSnippet(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingSnippet) {
        await updateCodeSnippet(editingSnippet.id, formData);
      } else {
        await createCodeSnippet(formData);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving code snippet:', error);
    }
  };

  const handleEdit = (snippet: any) => {
    setEditingSnippet(snippet);
    setFormData({
      name: snippet.name,
      placeholder_key: snippet.placeholder_key,
      code: snippet.code,
      description: snippet.description || ''
    });
    setIsCreating(true);
  };

  const handleDelete = async (snippetId: string) => {
    if (window.confirm('Are you sure you want to delete this code snippet?')) {
      try {
        await deleteCodeSnippet(snippetId);
      } catch (error) {
        console.error('Error deleting code snippet:', error);
      }
    }
  };

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Create/Edit Form */}
      {isCreating && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30"
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            {editingSnippet ? 'Edit Code Snippet' : 'Create New Code Snippet'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Snippet Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  placeholder="Enter snippet name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Placeholder Key
                </label>
                <input
                  type="text"
                  value={formData.placeholder_key}
                  onChange={(e) => setFormData({ ...formData, placeholder_key: e.target.value.toUpperCase() })}
                  className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                  placeholder="PLACEHOLDER_NAME"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                placeholder="Enter snippet description"
                rows={2}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Code
              </label>
              <textarea
                value={formData.code}
                onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 font-mono text-sm"
                placeholder="Enter the code that will replace the placeholder"
                rows={8}
                required
              />
            </div>
            <div className="flex gap-3">
              <Button
                type="submit"
                variant="primary"
                className="flex-1"
              >
                {editingSnippet ? 'Update Snippet' : 'Create Snippet'}
              </Button>
              <Button
                type="button"
                onClick={resetForm}
                variant="secondary"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Code Snippets List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">
            Code Snippets ({codeSnippets.length})
          </h3>
          <Button
            onClick={() => setIsCreating(true)}
            variant="primary"
            size="sm"
          >
            Add New Snippet
          </Button>
        </div>

        {false ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
          </div>
        ) : codeSnippets.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            No code snippets created yet. Create your first snippet above.
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {codeSnippets.map((snippet) => (
              <motion.div
                key={snippet.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 hover:border-cyan-400/50 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-white">{snippet.name}</h4>
                    <p className="text-sm text-cyan-300 font-mono">{snippet.name}</p>
                    {snippet.description && (
                      <p className="text-sm text-gray-300 mt-1">{snippet.description}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(snippet)}
                      className="p-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                      title="Edit snippet"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(snippet.id)}
                      className="p-1 text-red-400 hover:text-red-300 transition-colors"
                      title="Delete snippet"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <div className="bg-gray-900/50 rounded p-2 max-h-32 overflow-y-auto">
                  <pre className="text-xs text-gray-300 font-mono whitespace-pre-wrap">
                    {snippet.code.substring(0, 200)}
                    {snippet.code.length > 200 && '...'}
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Template Categories Management Component
const TemplateCategoriesSection: React.FC = () => {
  const { categories, createCategory, loadingCategories } = useTemplates();
  const { theme } = useTheme();
  const [isCreating, setIsCreating] = useState(false);
  const [editingCategory, setEditingCategory] = useState<any>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  const resetForm = () => {
    setFormData({
      name: '',
      description: ''
    });
    setIsCreating(false);
    setEditingCategory(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (editingCategory) {
        await supabase
          .from('categories')
          .update(formData)
          .eq('id', editingCategory.id);
      } else {
        await createCategory(formData);
      }
      resetForm();
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  const handleEdit = (category: any) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      description: category.description || ''
    });
    setIsCreating(true);
  };

  const handleDelete = async (categoryId: string) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      try {
        await deleteCategory(categoryId);
      } catch (error) {
        console.error('Error deleting category:', error);
      }
    }
  };

  return (
    <div className={`space-y-6 ${theme === 'dark' ? 'dark' : ''}`}>
      {/* Create/Edit Form */}
      {isCreating && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30"
        >
          <h3 className="text-lg font-semibold text-white mb-4">
            {editingCategory ? 'Edit Category' : 'Create New Category'}
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Category Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                placeholder="Enter category name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 bg-white/10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400"
                placeholder="Enter category description"
                rows={3}
              />
            </div>
            <div className="flex gap-3">
              <Button
                type="submit"
                variant="primary"
                className="flex-1"
              >
                {editingCategory ? 'Update Category' : 'Create Category'}
              </Button>
              <Button
                type="button"
                onClick={resetForm}
                variant="secondary"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </form>
        </motion.div>
      )}

      {/* Categories List */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-white">
            Categories ({categories.length})
          </h3>
          <Button
            onClick={() => setIsCreating(true)}
            variant="primary"
            size="sm"
          >
            Add New Category
          </Button>
        </div>

        {loadingCategories ? (
          <div className="flex items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
          </div>
        ) : categories.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            No categories created yet. Create your first category above.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-cyan-500/30 hover:border-cyan-400/50 transition-all"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold text-white">{category.name}</h4>
                    {category.description && (
                      <p className="text-sm text-gray-300 mt-1">{category.description}</p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEdit(category)}
                      className="p-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                      title="Edit category"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDelete(category.id)}
                      className="p-1 text-red-400 hover:text-red-300 transition-colors"
                      title="Delete category"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
                <div className="text-xs text-gray-400">
                  Created {new Date(category.created_at).toLocaleDateString()}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
function deleteCategory(categoryId: string) {
  throw new Error('Function not implemented.');
}

