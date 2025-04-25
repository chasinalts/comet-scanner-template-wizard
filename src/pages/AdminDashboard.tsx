import { useState, ChangeEvent, useEffect } from '../utils/react-imports';

import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../components/ui/Toast';
import Button from '../components/ui/Button';
import DragDropUpload from '../components/ui/DragDropUpload';
import { TextField, TextArea, CheckboxField, SelectField } from '../components/ui/FormField';
import { useTheme } from '../contexts/ThemeContext';
import { handleSupabaseImageUpload } from '../utils/imageHandlers';
import { useQuestions } from '../hooks/useQuestions';
import { useSections } from '../hooks/useSections';
import { useContentManager } from '../hooks/useContentManager';
import { useAdminContent } from '../hooks/useAdminContent';
import type { Question, QuestionOption } from '../types/questions';
import type { Section } from '../hooks/useSections';
// TrashIcon import removed as it's not used
import ImageThumbnail from '../components/ui/ImageThumbnail';
import TemplateCreator from '../components/TemplateCreator';
import HolographicText from '../components/ui/HolographicText';
import { isOwner } from '../utils/permissionChecks';

interface UploadingState {
  questionId?: string;
  optionId?: string;
  contentType?: 'banner' | 'scanner';
}

export default function AdminDashboard() {
  const { currentUser } = useAuth();
  const { showToast } = useToast();
  const { theme } = useTheme();
  const [canUpload, setCanUpload] = useState<boolean>(false);

  // Check if the user is an owner
  useEffect(() => {
    const checkOwnerStatus = async () => {
      const ownerStatus = await isOwner();
      setCanUpload(ownerStatus);
    };

    checkOwnerStatus();
  }, [currentUser]);
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

  // Get paginated scanner images
  const getPaginatedScannerImages = () => {
    const allImages = getScannerImages();
    const startIndex = (scannerImagesPage - 1) * IMAGES_PER_PAGE;
    return allImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);
  };

  // Calculate total pages
  const getTotalScannerPages = () => {
    const totalImages = getScannerImages().length;
    return Math.ceil(totalImages / IMAGES_PER_PAGE);
  };

  // Handle page change
  const handlePageChange = (newPage: number) => {
    setScannerImagesPage(newPage);
  };

  if (!currentUser?.is_owner) {
    return <div className="p-8 text-center">
      <HolographicText
        text="You don't have permission to access this page."
        as="p"
        variant="subtitle"
        className="text-center"
      />
    </div>;
  }

  return (
    <div className={`max-w-7xl mx-auto p-6 space-y-12 ${theme === 'dark' ? 'dark' : ''} futuristic-grid-bg`}>
      <HolographicText
        text="Admin Dashboard"
        as="h1"
        variant="title"
        className="text-3xl font-bold mb-8"
      />

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
                {/* Banner Image Preview */}
                <div className="mb-4">
                  {getBannerImage() ? (
                    <div className="relative aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden">
                      <img
                        src={getBannerImage()?.src}
                        alt={getBannerImage()?.alt || 'Banner image'}
                        className="w-full h-full object-contain"
                        style={{ transform: `scale(${getBannerImage()?.scale || 1})` }}
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                      <HolographicText
                        text="No banner image uploaded"
                        as="p"
                        className="text-gray-500 dark:text-gray-400"
                      />
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
            {/* Scanner Images Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Existing Scanner Images */}
              {getPaginatedScannerImages().map((image) => (
                <ImageThumbnail
                  key={image.id}
                  id={image.id}
                  src={image.src}
                  alt={image.alt}
                  scale={image.scale || 1}
                  onScaleChange={(id: string, scale: number) => updateImageScale(id, scale)}
                  onDelete={handleDeleteImage}
                />
              ))}

              {/* Upload New Scanner Image - Only show if user can upload */}
              {canUpload ? (
                <div className="border dark:border-gray-700 rounded-lg shadow-sm p-4 futuristic-container">
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
                <div className="border dark:border-gray-700 rounded-lg shadow-sm p-4 futuristic-container text-center">
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
            <CheckboxField
              label="Make Available to Users"
              checked={localStorage.getItem('fullTemplateEnabled') === 'true'}
              onChange={(e) => {
                localStorage.setItem('fullTemplateEnabled', e.target.checked.toString());
                showToast('success', `Full template ${e.target.checked ? 'enabled' : 'disabled'} for users`);
              }}
            />
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

      {/* Template Builder Section */}
      <section className="space-y-8">
        <HolographicText
          text="Template Builder"
          as="h2"
          variant="subtitle"
          className="text-2xl font-semibold"
        />
        <TemplateCreator />
        <div className="space-y-6">
          <Button onClick={addSection}>Add New Section</Button>
          <Reorder.Group axis="y" values={sections} onReorder={reorderSections} className="space-y-4">
            {sections.map((section: Section) => (
              <Reorder.Item
                key={section.id}
                value={section}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center justify-between mb-3">
                  <TextField
                    value={section.title}
                    onChange={(e) => updateSection(section.id, { title: e.target.value })}
                    className="text-lg font-medium text-gray-900 dark:text-white bg-white dark:bg-gray-800"
                    placeholder="Section Title"
                  />
                  <div className="flex items-center space-x-4">
                    <CheckboxField
                      label="Mandatory"
                      checked={section.isMandatory}
                      onChange={(e) => updateSection(section.id, { isMandatory: e.target.checked })}
                    />
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteSection(section.id)}
                    >
                      Delete Section
                    </Button>
                  </div>
                </div>
                <TextArea
                  value={section.code}
                  onChange={(e) => updateSection(section.id, { code: e.target.value })}
                  className="w-full font-mono text-sm text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                  rows={5}
                  placeholder="Enter section code here..."
                />
              </Reorder.Item>
            ))}
          </Reorder.Group>
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
    </div>
  );
}
