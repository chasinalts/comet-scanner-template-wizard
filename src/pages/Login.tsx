// Simple login page component
import { useEffect, useState } from '../utils/react-imports';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import HolographicText from '../components/ui/HolographicText';

const containerVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const Login = () => {
  const [email, setEmail] = useState('owner@example.com');
  const [password, setPassword] = useState('password');
  const { login, currentUser, isLoading } = useAuth();
  const navigate = useNavigate();

  // If user is already logged in, redirect to the appropriate page
  useEffect(() => {
    if (currentUser && !isLoading) {
      // Redirect owners and admins to the dashboard, others to home
      const isOwner = currentUser.is_owner === true || currentUser.is_owner === 'true';
      const isAdmin = currentUser.role === 'admin';

      if (isOwner || isAdmin) {
        navigate('/dashboard');
      } else {
        navigate('/home');
      }
    }
  }, [currentUser, isLoading, navigate]);

  // No auto-redirect needed anymore

  const handleLogin = async () => {
    try {
      await login(email, password);
      // Navigate will happen automatically via the useEffect above
    } catch (error) {
      console.error('Login error:', error);
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
            text="COMET Scanner Wizard"
            as="h2"
            variant="title"
            className="text-center font-extrabold"
          />
          <div className="mt-2">
            <HolographicText
              text="Signing you in..."
              as="h3"
              variant="subtitle"
              className="text-center"
            />
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="py-8 px-4 shadow sm:rounded-lg sm:px-10 futuristic-container holo-glow">
          <div className="space-y-6">
            <div className="text-center mb-6">
              <p className="text-sm text-gray-400 mb-4">
                Enter your credentials to sign in
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md shadow-sm text-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleLogin}
                disabled={isLoading}
                className="w-full px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white futuristic-button"
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </button>
              <p className="mt-2 text-xs text-gray-400">
                For demo: use owner@example.com / password
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Login;
