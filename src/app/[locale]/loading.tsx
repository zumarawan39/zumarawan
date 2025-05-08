'use client';
import React from 'react';
import { motion } from 'motion/react';
import LogoInitial from '../../../public/intail-logo.png';
import Image from 'next/image';
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative w-40 h-40 flex items-center justify-center">
        {/* Rotating Circle */}
        <motion.div
          className="absolute w-full h-full border-t-2 border-primary rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
        />

        {/* Logo */}
        <div className="text-primary font-bold text-2xl">
          <Image src={LogoInitial} alt="Logo" width={36} height={36} />
        </div>
      </div>
    </div>
  );
};

export default Loading;
