import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const bgUrl = 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80';

const ParallaxSection = () => {
  // Framer Motion scroll-based parallax
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 180]);

  return (
    <section className="relative h-[70vh] md:h-[90vh] flex items-center justify-center overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full z-0"
        style={{ y }}
      >
        <img
          src={bgUrl}
          alt="Parallax Background"
          className="w-full h-full object-cover object-center brightness-75 dark:brightness-50"
        />
      </motion.div>
      <div className="relative z-10 text-center px-4">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-6 leading-tight"
        >
          Parallax Section
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="text-2xl md:text-3xl text-white/90 drop-shadow mb-8 max-w-2xl mx-auto"
        >
          Enjoy a modern parallax effect with smooth scroll-based animation for extra depth.
        </motion.p>
      </div>
    </section>
  );
};

export default ParallaxSection; 