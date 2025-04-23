import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
// Import types from Supabase // Import FirebaseError for better error handling
import HolographicText from '../components/ui/HolographicText';

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const Signup = () => {
  // Firebase Auth uses email
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // Owner option removed - all regular signups are non-owners // Keep this for your application logic
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Firebase enforces minimum password length (usually 6 characters) automatically,
    // but client-side check is still good UX.
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      setError('');
      setIsLoading(true);
      // Call the updated signup function from AuthContext
      // Always sign up as non-owner
      await signup(email, password, false);
      // Navigate after successful signup
      // Let the AuthProvider's onAuthStateChanged listener handle redirection logic
      // or navigate directly.
      navigate('/wizard/step1'); // Or wherever appropriate
    } catch (error: any) {
      console.error("Signup failed:", error);
      let errorMessage = 'Failed to create account. Please try again.';
      // Provide more specific feedback for common Supabase errors
      if (error.message) {
        if (error.message.includes('already registered')) {
          errorMessage = 'This email address is already registered.';
        } else if (error.message.includes('valid email')) {
          errorMessage = 'Please enter a valid email address.';
        } else if (error.message.includes('owner account already exists')) {
          errorMessage = 'An owner account already exists.';
        } else if (error.message.includes('weak password')) {
          errorMessage = 'Password is too weak. Please choose a stronger password.';
        } else {
          // Use the error message directly if we don't have a specific handler
          errorMessage = error.message;
        }
      }
      setError(errorMessage);
    } finally {
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
                  autoComplete="email"
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
                  autoComplete="new-password" // Use new-password for signup
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none futuristic-input"
                />
              </div>
            </div>

            <div>
              <HolographicText
                text="Confirm Password"
                as="label"
                className="block text-sm font-medium text-cyan-300"
                htmlFor="confirmPassword"
              />
              <div className="mt-1">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password" // Use new-password for signup
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none futuristic-input"
                />
              </div>
            </div>

            {/* Owner option removed */}

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
                {isLoading ? 'Creating account...' : 'Create account'}
              </button>
            </div>
          </form>

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
                <div className="text-xs text-cyan-200 mt-2">
                  Need to set up an owner account? <Link to="/owner-setup" className="underline">Go to owner setup</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
