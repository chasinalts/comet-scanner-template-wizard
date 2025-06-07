"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface Position {
  x: number;
  y: number;
}

interface Size {
  width: number;
  height: number;
}

export default function InvisibleAdminButton() {
  const router = useRouter();
  const pathname = usePathname();
  const isDashboard = pathname.includes("dashboard");

  const [position, setPosition] = useState<Position>({ x: 0, y: 20 });
  const [size, setSize] = useState<Size>({ width: 100, height: 40 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPosition({ x: window.innerWidth - 120, y: 20 });
    }
  }, []);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });

  const buttonRef = useRef<HTMLDivElement>(null);

  const ADMIN_PASSWORD = "comet2025"; // Should match admin page password

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }

      if (isResizing) {
        const rect = buttonRef.current?.getBoundingClientRect();
        if (rect) {
          setSize({
            width: Math.max(50, e.clientX - rect.left),
            height: Math.max(30, e.clientY - rect.top),
          });
        }
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsResizing(false);
    };

    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, isResizing, dragOffset]);

  const handleMouseDown = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (rect) {
      const isResizeArea =
        e.clientX > rect.right - 10 && e.clientY > rect.bottom - 10;

      if (isResizeArea) {
        setIsResizing(true);
      } else {
        setIsDragging(true);
        setDragOffset({
          x: e.clientX - position.x,
          y: e.clientY - position.y,
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
      setPassword("");
      setError("");
      router.push("/admin");
    } else {
      setError("Invalid password");
      setPassword("");
    }
  };

  const handleCloseModal = () => {
    setShowPasswordModal(false);
    setPassword("");
    setError("");
  };

  return (
    <>
      {/* Invisible Admin Button */}
      <div
        ref={buttonRef}
        className={`fixed z-50 ${isDashboard ? "border-2 border-dashed border-gray-400 bg-gray-900 bg-opacity-20 cursor-move" : "border-2 border-dashed border-cyan-500/30 bg-transparent hover:bg-cyan-500/10"} transition-all duration-200 group`}
        style={{
          left: position.x,
          top: position.y,
          width: size.width,
          height: size.height,
          opacity: isDashboard ? 1 : 0,
        }}
        onMouseDown={handleMouseDown}
        onClick={handleButtonClick}
        title="Admin Access (Drag to move, resize from bottom-right)"
        data-oid="ujwyd6y"
      >
        {/* Resize handle */}
        <div
          className="absolute bottom-0 right-0 w-3 h-3 bg-cyan-500/50 cursor-se-resize opacity-0 group-hover:opacity-100 transition-opacity"
          data-oid="yf1w:lh"
        />

        {/* Optional subtle indicator */}
        <div
          className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-30 transition-opacity"
          data-oid="182g1dx"
        >
          <span className="text-cyan-400 text-xs" data-oid="84tzhzf">
            🔐
          </span>
        </div>
      </div>

      {/* Password Modal */}
      {showPasswordModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          data-oid="hsmu8y8"
        >
          <div
            className="bg-slate-900 border border-cyan-500/50 rounded-lg p-6 w-96 max-w-[90vw]"
            data-oid="hv0dnw5"
          >
            <h2
              className="text-xl font-bold text-cyan-400 mb-4"
              data-oid="6nio.ou"
            >
              Admin Access
            </h2>

            <form
              onSubmit={handlePasswordSubmit}
              className="space-y-4"
              data-oid="6oz1h2n"
            >
              <div data-oid="yzr1a70">
                <label
                  className="block text-sm font-medium text-gray-300 mb-2"
                  data-oid="pp7.xlb"
                >
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-800 border border-gray-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Enter admin password"
                  autoFocus
                  data-oid="2lkqb.t"
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm" data-oid="0-0bpk7">
                  {error}
                </div>
              )}

              <div className="flex space-x-3" data-oid="v_0huhl">
                <button
                  type="submit"
                  className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  data-oid="kgmh_.2"
                >
                  Access Admin
                </button>
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                  data-oid=".mc:h_5"
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
