import React from 'react';
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const FeatureBox = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer gap-3 md:gap-4 transition-colors duration-300"
    variants={fadeInVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ delay }}
  >
    <div className="text-5xl md:text-6xl mb-3 text-blue-600 dark:text-blue-400">
      <Icon />
    </div>
    <h3 className="text-xl md:text-2xl font-semibold mb-1 text-gray-900 dark:text-white leading-snug">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
      {description}
    </p>
  </motion.div>
);

export default FeatureBox; 