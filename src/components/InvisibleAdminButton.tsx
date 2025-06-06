'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface Position {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

export default function InvisibleAdminButton() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 20 });
  const [size, setSize] = useState<Size>({ width: 100, height: 40 });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPosition({ x: window.innerWidth - 120, y: 20 });
    }
  }, []);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  
  const buttonRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  const ADMIN_PASSWORD = 'comet2025'; // Should match admin page password

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y
        });
      }
      
      if (isResizing) {
        const rect = buttonRef.current?.getBoundingClientRect();
        if (rect) {
          setSize({
            width: Math.max(50, e.clientX - rect.left),
            height: Math.max(30, e.clientY - rect.top)
          });
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const isResizeArea = e.clientX > rect.right - 10 && e.clientY > rect.bottom - 10;
      
      if (isResizeArea) {
        setIsResizing(true);
      } else {
        setIsDragging(true);
        setDragOffset({
          x: e.clientX - position.x,
          y: e.clientY - position.y
        });
      }
    }
  };

  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isDragging && !isResizing) {
      setShowPasswordModal(true);
    }
  };

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setShowPasswordModal(false);
      setPassword('');
      setError('');
      router.push('/admin');
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  const handleCloseModal = () => {
    setShowPasswordModal(false);
    setPassword('');
    setError('');
  };

  return (
    <>
      {/* Invisible Admin Button */}
      <div
        ref={buttonRef}
        className="fixed z-50 border-2 border-dashed border-cyan-500/30 bg-transparent hover:bg-cyan-500/10 cursor-move transition-all duration-200 group"
        style={{
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height,
        }}
        onMouseDown={handleMouseDown}
        onClick={handleButtonClick}
        title="Admin Access (Drag to move, resize from bottom-right)"
      >
        {/* Resize handle */}
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-cyan-500/50 cursor-se-resize opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Optional subtle indicator */}
        <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-30 transition-opacity">
          <span className="text-cyan-400 text-xs">🔐</span>
        </div>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-slate-900 border border-cyan-500/50 rounded-lg p-6 w-96 max-w-[90vw]">
            <h2 className="text-xl font-bold text-cyan-400 mb-4">Admin Access</h2>
            
            <form onSubmit={handlePasswordSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter admin password"
                  autoFocus
                />
              </div>
              
              {error && (
                <div className="text-red-400 text-sm">{error}</div>
              )}
              
              <div className="flex space-x-3">
                <button
                  type="submit"
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Access Admin
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}