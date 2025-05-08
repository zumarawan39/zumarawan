'use client';

import React, { useEffect, useState } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const addMouseListeners = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', addMouseListeners);
    return () => window.removeEventListener('mousemove', addMouseListeners);
  }, []);

  return (
    <div
      className="fixed z-[9999] pointer-events-none transition-all duration-100 ease-out"
      style={{
        top: position.y,
        left: position.x,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div className="w-6 h-6 rounded-full border border-primary animate-ping bg-primary"></div>
    </div>
  );
};

export default AnimatedCursor;
