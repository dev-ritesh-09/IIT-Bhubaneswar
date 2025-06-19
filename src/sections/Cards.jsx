import React, { useRef } from 'react';
import Card from '../components/Card';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, useAnimation } from 'framer-motion';

const cardsData = [
  {
    title: 'Card One',
    text: 'This is the first card. It has a short description and a CTA.',
    image: 'https://via.placeholder.com/120x80?text=One',
    cta: 'Learn More',
  },
  {
    title: 'Card Two',
    text: 'Second card with more info and a call to action.',
    image: 'https://via.placeholder.com/120x80?text=Two',
    cta: 'Get Started',
  },
  {
    title: 'Card Three',
    text: 'Third card, carousel style, with a button.',
    image: 'https://via.placeholder.com/120x80?text=Three',
    cta: 'Sign Up',
  },
  {
    title: 'Card Four',
    text: 'Fourth card for more content and testing.',
    image: 'https://via.placeholder.com/120x80?text=Four',
    cta: 'Try Now',
  },
];

const Cards = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.offsetWidth * 0.8;
    el.scrollBy({ left: dir === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <section id="cards" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Cards Carousel
        </h2>
        <div className="relative">
          <button
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            <FaChevronLeft size={20} />
          </button>
          <motion.div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 md:px-8 min-w-0"
            style={{ scrollBehavior: 'smooth' }}
            drag="x"
            dragConstraints={{ left: -400, right: 0 }}
          >
            {cardsData.map((card, i) => (
              <div key={i} className="snap-center flex-shrink-0">
                <Card {...card} />
              </div>
            ))}
          </motion.div>
          <button
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards; 