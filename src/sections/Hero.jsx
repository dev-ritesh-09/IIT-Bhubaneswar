import React from 'react';
import { motion } from 'framer-motion';

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 px-6 pt-28 md:pt-36 bg-white dark:bg-gray-900 min-w-0">
      <motion.div
        className="flex-1 text-center md:text-left"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
          Welcome to Your Landing Page
        </h1>
        <p className="text-lg md:text-2xl mb-10 text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
          Pixel-perfect, animated, fully responsive. Powered by React, Tailwind, and Framer Motion.
        </p>
        <a href="#features">
          <button className="px-10 py-4 bg-blue-600 text-white rounded-xl font-semibold shadow-xl hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all text-lg md:text-xl">
            Get Started
          </button>
        </a>
      </motion.div>
      <motion.div
        className="flex-1 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
      >
        <div className="w-72 h-72 md:w-[26rem] md:h-[26rem] bg-gray-200 dark:bg-gray-800 rounded-3xl flex items-center justify-center shadow-2xl">
          {/* Placeholder for animation or image */}
          <span className="text-5xl text-gray-400 dark:text-gray-600">[ Animation ]</span>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 