import { useState, useRef, type FormEvent, useEffect } from '../utils/react-imports';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
// Import types from Supabase
import HolographicText from '../components/ui/HolographicText';

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [resetEmailSent, setResetEmailSent] = useState(false);

  const { login, sendPasswordResetEmail, currentUser, isLoading: authLoading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const modalRef = useRef<HTMLDivElement>(null);

  // Always redirect to home page after login
  const from = '/home';

  // If user is already logged in, redirect to the appropriate page
  useEffect(() => {
    if (currentUser && !authLoading) {
      console.log('User already logged in, redirecting to:', from);
      navigate(from);
    }
  }, [currentUser, authLoading, navigate, from]);



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Please enter both email and password');
      return;
    }

    try {
      setError('');
      setIsLoading(true);
      console.log('Attempting to login with email:', email);
      console.log('Will redirect to:', from);

      // Call the updated login function from AuthContext
      await login(email, password);

      console.log('Login successful, navigating to:', from);

      // Navigate to the intended destination or home page upon successful login
      navigate(from);
    } catch (error: any) {
      console.error('Login error details:', error);
      console.error("Login failed:", error);
      let errorMessage = 'Failed to sign in. Please check your credentials.';

      // Provide more specific feedback for common Supabase errors
      if (error.message) {
        // Handle specific Supabase errors
        if (error.message === 'Invalid login credentials' || error.message === 'Email not confirmed') {
          errorMessage = 'Invalid email or password.';
        }
        // Add more Supabase-specific error handling here if needed
        // e.g., rate limiting errors, etc.
      }
      setError(errorMessage); // Set the potentially updated or default error message
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = () => {
    setIsModalOpen(true);
  };

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(resetEmail);
      setResetEmailSent(true);
      setError('')
    } catch (error) {
        console.log(error);
        setError('Failed to send password reset email. Please try again later.');
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            text="COMET Scanner Wizard"
            as="h2"
            variant="title"
            className="text-center font-extrabold"
          />
          <div className="mt-2">
            <HolographicText
              text="Sign in to your account"
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

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <HolographicText
                text="Email address"
                as="label"
                className="block text-sm font-medium text-cyan-300"
                htmlFor="email"
              />
              <div className="mt-1">
                <input
                  id="email" // Change id to email
                  name="email" // Change name to email
                  type="email" // Change type to email
                  autoComplete="email" // Add autocomplete
                  required
                  value={email} // Bind value to email state
                  onChange={(e) => setEmail(e.target.value)} // Update email state
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none futuristic-input"
                />
              </div>
            </div>

            <div>
              <HolographicText
                text="Password"
                as="label"
                className="block text-sm font-medium text-cyan-300"
                htmlFor="password"
              />
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password" // Add autocomplete
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none futuristic-input"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white futuristic-button ${
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
                {isLoading ? 'Signing in...' : 'Sign in'}
              </button>
            </div>
          </form>


           <div className="mt-2">
            <button
              onClick={handleForgotPassword}
              className="text-sm"
            >
              <HolographicText
                text="Forgot Password?"
                as="span"
                className="text-cyan-400 hover:text-cyan-300"
              />
            </button>
          </div>





          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-cyan-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 futuristic-dark-panel text-cyan-300">
                  New to COMET Scanner?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <div className="flex flex-col space-y-2">
                <Link
                  to="/signup"
                  className="font-medium"
                >
                  <HolographicText
                    text="Create an account"
                    as="span"
                    className="text-cyan-400 hover:text-cyan-300"
                  />
                </Link>
                {/* Owner setup link removed - owner account already created */}
              </div>
            </div>
          </div>
        </div>
          {isModalOpen && (
          <div
            ref={modalRef}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <div className="futuristic-container p-8 rounded-lg max-w-md holo-glow">
              <div className="flex justify-between items-center mb-4">
                <HolographicText
                  text="Reset Password"
                  as="h2"
                  variant="subtitle"
                  className="text-xl font-semibold"
                />
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                  <span className="block sm:inline">{error}</span>
                </div>
              )}
                 {resetEmailSent ? (
                   <div>
                        <HolographicText
                          text="Password reset email has been sent!"
                          as="p"
                          className="mb-4"
                        />
                        <button onClick={handleCloseModal} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Close</button>
                    </div>
                ) : (
                  <form onSubmit={handleResetPassword}>
                  <div className="mb-4">
                    <HolographicText
                      text="Email"
                      as="label"
                      className="block text-cyan-300 text-sm font-bold mb-2"
                      htmlFor="resetEmail"
                    />
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline futuristic-input"
                      id="resetEmail"
                      type="email"
                      placeholder="Enter your email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline futuristic-button">
                    <HolographicText
                      text="Send Reset Link"
                      as="span"
                      animated={false}
                    />
                  </button>
                </form>
                )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Login;
