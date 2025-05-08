'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { BiChevronDown } from 'react-icons/bi';

const ScrollIndicator: React.FC = () => {
  const handleDotAnimation = {
    y: [0, 16], // Move to the bottom smoothly
    opacity: [1, 0], // Fade out while moving down
  };

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY < window.innerHeight - 100);
// Hide after scrolling down a little bit
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="items-center absolute bottom-0 z-10 sm:hidden">
      <div className="scroll-indicator flex flex-col items-center">
        <motion.div
          className="mouse rounded-full border-2 border-primary w-5 h-8 flex justify-center items-start relative overflow-hidden"
          animate={{ y: [0, 2, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="dot bg-primary w-1 h-1 rounded-full absolute top-1"
            animate={handleDotAnimation}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
        </motion.div>
        <motion.div
          className="mt-0.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
        >
          <BiChevronDown className="text-primary" fontSize={20} />
        </motion.div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
