import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const Card = ({ image, title, text, cta, onCtaClick }) => (
  <motion.div
    className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl flex flex-col items-center min-w-[260px] max-w-xs mx-auto transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer gap-4 transition-colors duration-300"
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
  >
    <img
      src={image || 'https://via.placeholder.com/120x80?text=Card'}
      alt={title}
      className="w-36 h-24 object-cover rounded-xl mb-5 bg-gray-200 dark:bg-gray-700 shadow"
    />
    <h3 className="text-xl md:text-2xl font-bold mb-2 text-gray-900 dark:text-white text-center leading-snug">{title}</h3>
    <p className="text-gray-600 dark:text-gray-300 mb-4 text-center text-base md:text-lg leading-relaxed">{text}</p>
    {cta && (
      <button
        onClick={onCtaClick}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-all text-base md:text-lg transition-colors duration-300"
      >
        {cta}
      </button>
    )}
  </motion.div>
);

export default Card; 