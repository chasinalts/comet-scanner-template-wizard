import React, { Suspense, lazy, useEffect } from './utils/react-imports';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { ToastProvider } from './components/ui/Toast';
// import ProtectedRoute from './components/ProtectedRoute';
import { supabase } from './supabaseClient';

// Lazy load components for better performance
// const Login = lazy(() => import('./components/Login'));
// const Signup = lazy(() => import('./components/Signup'));
const Home = lazy(() => import('./pages/Home'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

function App() {
  useEffect(() => {
    const initializeStorage = async () => {
      try {
        // Check if the 'images' bucket exists
        const { data: buckets, error: listError } = await supabase.storage.listBuckets();
        
        if (listError) {
          console.error('Error listing buckets:', listError);
          return;
        }
        
        const imagesBucket = buckets?.find(bucket => bucket.name === 'images');
        
        if (!imagesBucket) {
          console.log('Images bucket not found, creating...');
          
          const { data, error } = await supabase.storage.createBucket('images', {
            public: true,
            allowedMimeTypes: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
            fileSizeLimit: 10485760 // 10MB
          });
          
          if (error) {
            console.error('Error creating storage bucket:', error);
          } else {
            console.log('Storage bucket created successfully:', data);
          }
        } else {
          console.log('Images bucket already exists');
        }
      } catch (error) {
        console.error('Error initializing storage:', error);
      }
    };
    
    initializeStorage();
  }, []);

  return (
    <ThemeProvider>
      <ToastProvider>
        <AuthProvider>
          <Router>
            <div className="App">
              <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  {/* COMMENTED OUT AUTH ROUTES */}
                  {/* <Route path="/login" element={<Login />} /> */}
                  {/* <Route path="/signup" element={<Signup />} /> */}
                  
                  {/* SIMPLIFIED ROUTES - NO PROTECTION */}
                  <Route path="/home" element={<Home />} />
                  <Route path="/admin" element={<AdminDashboard />} />
                  <Route path="/" element={<Navigate to="/home" replace />} />
                </Routes>
              </Suspense>
            </div>
          </Router>
        </AuthProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}

export default App;