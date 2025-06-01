import React from 'react';
// import { Navigate } from 'react-router-dom';
// import { useAuth } from '../contexts/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireOwner?: boolean;
}

// SIMPLIFIED PROTECTED ROUTE - ALWAYS ALLOWS ACCESS
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requireOwner = false }) => {
  // const { session, userProfile, isLoading } = useAuth();

  // Always allow access in bypass mode
  return <>{children}</>;
};

export default ProtectedRoute;