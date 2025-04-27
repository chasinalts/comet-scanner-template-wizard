import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Modal from '../components/ui/Modal';
import { useAdminContent } from '../hooks/useAdminContent';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';
import ResponsiveImageWithPlaceholder from '../components/ui/ResponsiveImageWithPlaceholder';
import LiveCodePreview from '../components/LiveCodePreview';
import LiveFloatingPreview from '../components/LiveFloatingPreview';
import { useWizard } from '../contexts/WizardContext';
import { useQuestions } from '../hooks/useQuestions';
import { useSections } from '../hooks/useSections';
import type { Question, QuestionOption } from '../types/questions';
import type { Answers } from '../contexts/WizardContext';

interface Template {
  id: string;
  template_name: string;
  template_data: string | Answers;
  created_at: string;
}
import type { ImageContent } from '../hooks/useAdminContent';
import VirtualizedImageGallery from '../components/ui/VirtualizedImageGallery';
import type { AnswerValue } from '../contexts/WizardContext';
import LazyImage from '../components/ui/LazyImage';
import { TextField, CheckboxField } from '../components/ui/FormField';
import HolographicText from '../components/ui/HolographicText';
import Button from '../components/ui/Button';
import InitialUserChoice from '../components/InitialUserChoice';

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
  const { getBannerImage, getScannerImages, getTemplates, getFullTemplate } = useAdminContent();
  const { currentUser } = useAuth();
  const { theme } = useTheme();
  const { state: wizardState, dispatch: wizardDispatch } = useWizard();
  const { questions } = useQuestions(); // Load questions managed by admin
  const { sections } = useSections(); // Load sections managed by admin

  // UI state
  const [scannerImages, setScannerImages] = useState<ImageContent[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedTitle, setSelectedTitle] = useState<string>('');
  const [showFloatingPreview, setShowFloatingPreview] = useState(true);

  // Wizard flow state
  const [wizardMode, setWizardMode] = useState<'initial' | 'fullTemplate' | 'wizard'>('initial');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [skippedQuestions, setSkippedQuestions] = useState<Set<string>>(new Set());

  // Template state
  const [fullTemplateCode, setFullTemplateCode] = useState<string>('');
  const [fullTemplateEnabled, setFullTemplateEnabled] = useState<boolean>(false);
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(null);
  const [templateName, setTemplateName] = useState<string>('');
  const [templateNameError, setTemplateNameError] = useState<string>('');
  const [savedTemplates, setSavedTemplates] = useState<Template[]>([]);

  // Load admin-managed questions and sections into wizard context
  React.useEffect(() => {
    wizardDispatch({ type: 'SET_QUESTIONS', payload: questions });
  }, [questions, wizardDispatch]);

  React.useEffect(() => {
    wizardDispatch({ type: 'SET_SECTIONS', payload: sections });
  }, [sections, wizardDispatch]);

  // Get banner and scanner images from admin content
  const bannerContent = getBannerImage();

  // Get scanner images with error handling
  React.useEffect(() => {
    try {
      const images = getScannerImages();
      setScannerImages(images);
      console.log('Scanner Images loaded:', images.length);
    } catch (error) {
      console.error('Error loading scanner images:', error);
      setScannerImages([]);
    }
  }, [getScannerImages]);

  // Load full template code if available
  React.useEffect(() => {
    try {
      // Get full template from admin settings
      const { code, isEnabled } = getFullTemplate();
      setFullTemplateCode(code);
      setFullTemplateEnabled(isEnabled);

      // Also load saved templates for the current user
      // This would typically come from a database call
      // For now, we'll use localStorage as a placeholder
      const userTemplates = localStorage.getItem(`user_templates_${currentUser?.id}`);
      if (userTemplates) {
        const parsedTemplates = JSON.parse(userTemplates) as Template[];
        setSavedTemplates(parsedTemplates);
      }
    } catch (error) {
      console.error('Error loading templates:', error);
    }
  }, [getFullTemplate, currentUser]);

  // Navigation functions
  const goToNextQuestion = () => {
    if (currentQuestionIndex < wizardState.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const skipCurrentQuestion = () => {
    const currentQuestionId = wizardState.questions[currentQuestionIndex]?.id;
    if (currentQuestionId) {
      const newSkipped = new Set(skippedQuestions);
      newSkipped.add(currentQuestionId);
      setSkippedQuestions(newSkipped);

      // Move to next question
      if (currentQuestionIndex < wizardState.questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }
    }
  };

  // Utilities
  // Import or stub showToast and loggingService if not present
  // @ts-ignore
  const showToast = (type: string, message: string) => { window.alert(`${type}: ${message}`); };
  // @ts-ignore
  const loggingService = { log: (...args: any[]) => console.log('[LOG]', ...args), error: (...args: any[]) => console.error('[ERROR]', ...args) };

  // Template management functions
  const saveTemplate = () => {
    if (!templateName.trim()) {
      setTemplateNameError('Please enter a template name');
      return;
    } else {
      setTemplateNameError('');
    }

    const newTemplate: Template = {
      id: `template-${Date.now()}`,
      template_name: templateName,
      template_data: wizardMode === 'fullTemplate' ? fullTemplateCode : wizardState.answers,
      created_at: new Date().toISOString(),
    };

    const updatedTemplates = [...savedTemplates, newTemplate];
    setSavedTemplates(updatedTemplates);

    // Save to localStorage (in a real app, this would be a database call)
    if (currentUser?.id) {
      localStorage.setItem(`user_templates_${currentUser.id}`, JSON.stringify(updatedTemplates));
    }

    setTemplateName('');
    showToast('success', 'Template saved successfully!');
    loggingService.log('Template saved', { templateName, userId: currentUser?.id });
  };

  const deleteTemplate = (templateId: string) => {
    const updatedTemplates = savedTemplates.filter(t => t.id !== templateId);
    setSavedTemplates(updatedTemplates);
    loggingService.log('Template deleted', { templateId, userId: currentUser?.id });

    // Update localStorage
    if (currentUser?.id) {
      localStorage.setItem(`user_templates_${currentUser.id}`, JSON.stringify(updatedTemplates));
    }

    if (selectedTemplateId === templateId) {
      setSelectedTemplateId(null);
    }
  };

  // Template sharing functions
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [shareTemplateId, setShareTemplateId] = useState<string | null>(null);
  const [shareEmail, setShareEmail] = useState('');
  const [shareEmailError, setShareEmailError] = useState<string>('');
  const [shareMessage, setShareMessage] = useState('');

  const openShareModal = (templateId: string) => {
    setShareTemplateId(templateId);
    setShareModalOpen(true);
  };

  const shareTemplate = () => {
    if (!shareEmail.trim()) {
      setShareEmailError('Please enter an email address');
      return;
    } else {
      setShareEmailError('');
    }

    const template = savedTemplates.find(t => t.id === shareTemplateId);
    if (!template) {
      showToast('error', 'Template not found');
      return;
    }

    // In a real app, this would send the template via email or generate a share link
    // For now, we'll just show a success message
    showToast('success', `Template "${template.template_name}" would be shared with ${shareEmail}`);
    loggingService.log('Template shared', { templateId: template.id, to: shareEmail, userId: currentUser?.id });

    // Reset share form
    setShareEmail('');
    setShareMessage('');
    setShareModalOpen(false);
    setShareTemplateId(null);
  };

  const loadTemplate = (templateId: string) => {
    const template = savedTemplates.find(t => t.id === templateId);
    if (template) {
      setSelectedTemplateId(templateId);
      loggingService.log('Template loaded', { templateId, userId: currentUser?.id });

      // If it's a full template (template_data is a string), just set the mode
      if (typeof template.template_data === 'string') {
        setWizardMode('fullTemplate');
        setFullTemplateCode(template.template_data);
      }
      // If it's a wizard template (template_data is an object with answers)
      else if (typeof template.template_data === 'object' && template.template_data !== null) {
        setWizardMode('wizard');
        wizardDispatch({ type: 'SET_ANSWERS', payload: template.template_data });
        // No skippedQuestions stored; optionally reset or handle as needed
        setSkippedQuestions(new Set());
      }
    }
  };

  const handleAnswerChange = (questionId: string, value: AnswerValue) => {
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
            className="holo-btn text-gray-900 dark:text-white bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
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
    <div className="dark">
      <div className="min-h-screen bg-gray-900 transition-colors duration-200 futuristic-grid-bg">
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
            <HolographicText
              text="COMET Scanner Template Wizard"
              as="h1"
              variant="title"
              className="text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight"
            />
          </motion.div>

          {/* Banner Section */}
          <motion.div
            variants={itemVariants}
            className="relative w-full mb-12 bg-gray-100 dark:bg-gray-800 holo-glow"
          >
            {bannerContent ? (
              <div className="relative w-full flex items-center justify-center overflow-hidden">
                <div className="w-full" style={{ paddingBottom: '42.85%' }}>
                  <LazyImage
                    src={bannerContent.src}
                    alt="COMET Scanner Banner"
                    className="absolute top-0 left-0 w-full h-full object-contain transition-transform duration-300"
                    style={{
                      transform: `scale(${bannerContent.scale || 1})`,
                      transformOrigin: 'center center'
                    }}
                    loadingStrategy="eager"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full" style={{ paddingBottom: '42.85%' }}>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center">
                  <HolographicText
                    text="Visualize Your Data with COMET Scanner"
                    as="span"
                    variant="subtitle"
                    className="text-3xl font-semibold"
                  />
                </div>
              </div>
            )}
          </motion.div>

          {/* Scanner Variations Gallery */}
          {scannerImages.length > 0 && (
            <motion.div
              variants={itemVariants}
              className="holo-card max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16"
            >
              <HolographicText
                text="Scanner Variations"
                as="h2"
                variant="title"
                className="text-4xl md:text-5xl font-bold mb-8 text-center"
              />
              <VirtualizedImageGallery
                images={scannerImages}
                onImageClick={(image) => {
                  setSelectedImage(image.src);
                  setSelectedTitle(image.displayText || 'Scanner Variation');
                }}
                columnCount={3}
                itemGap={16}
                className="mb-8"
                itemClassName="holo-card overflow-hidden transform transition-transform hover:scale-105"
                loadingStrategy="lazy"
              />
            </motion.div>
          )}

          {/* Main Content Area */}
          <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Initial Choice */}
            {wizardMode === 'initial' && (
              <InitialUserChoice
                onChooseFullTemplate={() => setWizardMode('fullTemplate')}
                onChooseWizard={() => setWizardMode('wizard')}
                fullTemplateAvailable={!!fullTemplateCode && fullTemplateEnabled}
              />
            )}

            {/* Full Template View */}
            {wizardMode === 'fullTemplate' && (
              <div className="space-y-8">
                <HolographicText
                  text="Complete COMET Scanner Template"
                  as="h2"
                  variant="subtitle"
                  className="text-3xl font-bold mb-6 text-center"
                />

                <div className="holo-card p-6">
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  </div>
);
};

export default ScannerWizard;