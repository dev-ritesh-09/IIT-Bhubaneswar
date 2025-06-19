import React from 'react';
import FeatureBox from '../components/FeatureBox';
import { FaRocket, FaShieldAlt, FaMobileAlt, FaMagic } from 'react-icons/fa';

const features = [
  {
    icon: FaRocket,
    title: 'Fast Performance',
    description: 'Lightning-fast load times and smooth interactions for a seamless user experience.',
  },
  {
    icon: FaShieldAlt,
    title: 'Secure',
    description: 'Built with best practices to keep your data and users safe at all times.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Friendly',
    description: 'Fully responsive design that looks great on any device, big or small.',
  },
  {
    icon: FaMagic,
    title: 'Modern Animations',
    description: 'Engaging, delightful animations powered by Framer Motion and CSS.',
  },
];

const Features = () => (
  <section id="features" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Features
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 min-w-0">
        {features.map((feature, i) => (
          <FeatureBox
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={i * 0.15}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Features; 