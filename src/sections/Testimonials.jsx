import React from 'react';
import TestimonialSlider from '../components/TestimonialSlider';

const Testimonials = () => (
  <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        What Our Customers Say
      </h2>
      <TestimonialSlider />
    </div>
  </section>
);

export default Testimonials; 