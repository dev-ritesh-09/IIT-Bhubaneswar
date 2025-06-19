import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Alice Johnson',
    quote: 'This landing page is stunning and so easy to use! Highly recommended.',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Bob Smith',
    quote: 'Animations are smooth and the design is pixel-perfect. Great job!',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Carol Lee',
    quote: 'Responsive, modern, and beautiful. My users love it!',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
  {
    name: 'David Kim',
    quote: 'The best landing page template I have used so far.',
    avatar: 'https://randomuser.me/api/portraits/men/76.jpg',
  },
];

const TestimonialSlider = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
  >
    <Swiper
      modules={[Autoplay, Pagination]}
      spaceBetween={32}
      slidesPerView={1}
      loop
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="pb-8"
    >
      {testimonials.map((t, i) => (
        <SwiperSlide key={i}>
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-10 flex flex-col items-center mx-2 h-full gap-4 transition-colors duration-300">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-20 h-20 rounded-full mb-4 object-cover border-4 border-blue-100 dark:border-blue-900 shadow-lg"
            />
            <p className="text-gray-700 dark:text-gray-200 italic mb-2 text-center text-lg md:text-xl leading-relaxed">“{t.quote}”</p>
            <span className="font-semibold text-blue-600 dark:text-blue-400 text-base md:text-lg">{t.name}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </motion.div>
);

export default TestimonialSlider; 