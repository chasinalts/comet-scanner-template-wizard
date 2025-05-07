import { useState } from '../utils/react-imports';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/Auth0Context';
// Import HolographicText component for UI
import HolographicText from '../components/ui/HolographicText';

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const Signup = () => {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSignup = () => {
    try {
      setError('');
      setIsLoading(true);
      console.log('Redirecting to Auth0 signup page');
      signup();
    } catch (error: any) {
      console.error("Signup redirect failed:", error);
      let errorMessage = 'Failed to redirect to signup page. Please try again.';
      setError(errorMessage);
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8 futuristic-grid-bg"
    >
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <HolographicText
            text="Create your account"
            as="h2"
            variant="title"
            className="text-center font-extrabold"
          />
          <div className="mt-2">
            <HolographicText
              text="Join COMET Scanner Wizard"
              as="h3"
              variant="subtitle"
              className="text-center"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10 futuristic-container holo-glow">
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-md bg-red-50 p-4 mb-4"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-red-700">{error}</p>
                </div>
              </div>
            </motion.div>
          )}

          <div className="space-y-6">
            <div className="text-center mb-6">
              <HolographicText
                text="Sign up with Auth0"
                as="p"
                className="text-lg font-medium text-cyan-300 mb-4"
              />
              <p className="text-sm text-gray-400 mb-4">
                You will be redirected to Auth0 to complete the registration process.
              </p>
            </div>

            <div>
              <button
                type="button"
                onClick={handleSignup}
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white futuristic-button ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isLoading ? (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                ) : null}
                {isLoading ? 'Redirecting...' : 'Continue to Sign Up'}
              </button>
            </div>
          </div>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cyan-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 futuristic-dark-panel text-cyan-300">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/login"
                  className="font-medium"
                >
                  <HolographicText
                    text="Sign in instead"
                    as="span"
                    className="text-cyan-400 hover:text-cyan-300"
                  />
                </Link>
                {/* Owner setup link removed - owner account already created */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
