import React from 'react';
import RippleButton from '../components/RippleButton';
import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const CTA = () => (
  <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
    <div className="max-w-2xl mx-auto px-4 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white leading-tight">
        Ready to get started?
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
        Experience the next generation of landing pages. Click below to contact us or try the demo!
      </p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <RippleButton className="text-lg md:text-xl px-10 py-4 rounded-xl font-bold shadow-xl transition-colors duration-300">
          Contact Us
        </RippleButton>
      </motion.div>
    </div>
  </section>
);

export default CTA; 