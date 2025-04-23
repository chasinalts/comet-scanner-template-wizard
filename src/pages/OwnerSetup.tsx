import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import HolographicText from '../components/ui/HolographicText';
import { supabase } from '../supabaseConfig';

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const OwnerSetup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  // Check if an owner already exists
  const checkOwnerExists = async () => {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('id')
        .eq('isOwner', true)
        .limit(1);

      if (error) throw error;

      return data && data.length > 0;
    } catch (error) {
      console.error('Error checking for existing owner:', error);
      return false;
    }
  };

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

    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return;
    }

    try {
      setError('');
      setIsLoading(true);

      // Check if an owner already exists
      const ownerExists = await checkOwnerExists();
      if (ownerExists) {
        setError('An owner account already exists. Please use the regular signup page.');
        setIsLoading(false);
        return;
      }

      // Create owner account
      await signup(email, password, true);
      setSuccess(true);

      // Redirect to admin dashboard after a delay
      setTimeout(() => {
        navigate('/admin');
      }, 3000);
    } catch (error: any) {
      console.error("Owner setup failed:", error);
      let errorMessage = 'Failed to create owner account. Please try again.';

      if (error.message) {
        if (error.message.includes('already registered')) {
          errorMessage = 'This email address is already registered.';
        } else if (error.message.includes('valid email')) {
          errorMessage = 'Please enter a valid email address.';
        } else if (error.message.includes('weak password')) {
          errorMessage = 'Password is too weak. Please choose a stronger password.';
        } else {
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
            text="Initial Owner Setup"
            as="h2"
            variant="title"
            className="text-center font-extrabold"
          />
          <div className="mt-2">
            <HolographicText
              text="Create the owner account for COMET Scanner Wizard"
              as="h3"
              variant="subtitle"
              className="text-center"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10 futuristic-container holo-glow">
          {success ? (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-md bg-green-50 p-4 mb-4"
            >
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg
                    className="h-5 w-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-green-700">
                    Owner account created successfully! Redirecting to the application...
                  </p>
                </div>
              </div>
            </motion.div>
          ) : (
            <>
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
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      autoComplete="new-password"
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
                      autoComplete="new-password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
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
                    {isLoading ? 'Creating owner account...' : 'Create owner account'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default OwnerSetup;
