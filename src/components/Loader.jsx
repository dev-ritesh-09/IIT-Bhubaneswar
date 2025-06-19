import React from 'react';
import { motion } from 'framer-motion';

const dotVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      y: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 0.8,
        ease: 'easeInOut',
        staggerChildren: 0.2,
      },
    },
  },
};

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } }}
    >
      <div className="flex space-x-4">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="w-4 h-4 rounded-full bg-blue-500 shadow-lg dark:bg-blue-400"
            variants={dotVariants}
            animate="animate"
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Loader; 