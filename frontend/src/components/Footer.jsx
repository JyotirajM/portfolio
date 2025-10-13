import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';
import { personalInfo } from '../mock/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gray-900 border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
          >
            {personalInfo.name}
          </motion.div>

          {/* Copyright */}
          <p className="text-gray-400 text-center mb-4">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <p className="text-gray-500 text-sm text-center flex items-center gap-2">
            Built with <Heart className="w-4 h-4 text-red-500" /> using React, Three.js, and Framer Motion
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-purple-500/50 transition-all duration-300 z-40"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;