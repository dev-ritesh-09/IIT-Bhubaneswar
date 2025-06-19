import React from 'react';
import { Line } from 'react-chartjs-2';
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
import { motion } from 'framer-motion';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Growth',
      data: [12, 19, 15, 22, 30, 28],
      borderColor: '#2563eb',
      backgroundColor: 'rgba(37,99,235,0.1)',
      tension: 0.4,
      fill: true,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: '#2563eb',
      },
    },
    title: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: { color: '#64748b' },
      grid: { color: 'rgba(100,116,139,0.1)' },
    },
    y: {
      ticks: { color: '#64748b' },
      grid: { color: 'rgba(100,116,139,0.1)' },
    },
  },
};

const Graph = () => (
  <section id="graph" className="py-20 bg-gray-50 dark:bg-gray-900">
    <div className="max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
        Growth Graph
      </h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6"
      >
        <Line data={data} options={options} />
      </motion.div>
    </div>
  </section>
);

export default Graph; 