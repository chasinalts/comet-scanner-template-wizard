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
  const isDashboard = pathname.includes("admin");

  const [position, setPosition] = useState<Position>({ x: 0, y: 20 });
  const [size, setSize] = useState<Size>({ width: 100, height: 40 });

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPosition({ x: window.innerWidth - 120, y: 20 });
    }
  }, []);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragOffset, setDragOffset] = useState<Position>({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState<Position>({ x: 0, y: 0 });
  const [initialSize, setInitialSize] = useState<Size>({
    width: 100,
    height: 40,
  });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.target === buttonRef.current) {
      setIsDragging(true);
      const rect = buttonRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleResizeMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({ x: e.clientX, y: e.clientY });
    setInitialSize(size);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    } else if (isResizing) {
      const deltaX = e.clientX - resizeStart.x;
      const deltaY = e.clientY - resizeStart.y;
      setSize({
        width: Math.max(50, initialSize.width + deltaX),
        height: Math.max(20, initialSize.height + deltaY),
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setIsResizing(false);
  };

  useEffect(() => {
    if (isDragging || isResizing) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, isResizing, dragOffset, resizeStart, initialSize]);

  const handleClick = () => {
    if (!isDragging && !isResizing) {
      router.push("/admin");
    }
  };

  if (isDashboard) {
    return null;
  }

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      onMouseDown={handleMouseDown}
      className="fixed z-50 bg-transparent border-2 border-gray-400 border-dashed text-gray-400 text-xs hover:bg-gray-100/10 hover:text-gray-300 hover:border-gray-300 transition-all duration-200 cursor-move select-none opacity-60 hover:opacity-100"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`,
        minWidth: "50px",
        minHeight: "20px",
      }}
      title="Drag to move, resize from bottom-right corner"
      data-oid="k_zmkkf"
    >
      Admin
      <div
        className="absolute bottom-0 right-0 w-3 h-3 bg-gray-400 cursor-se-resize opacity-50 hover:opacity-100"
        onMouseDown={handleResizeMouseDown}
        title="Resize"
        data-oid="xbf7iqh"
      />
    </button>
  );
}
