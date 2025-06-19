import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './themeContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Features from './sections/Features';
import Cards from './sections/Cards';
import Graph from './sections/Graph';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import ParallaxSection from './components/ParallaxSection';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>
      {!loading && (
        <div className="min-h-screen min-w-0 bg-white dark:bg-gray-900 scroll-smooth">
          <Navbar />
          <main className="snap-y snap-mandatory h-screen overflow-y-scroll pt-16 min-w-0">
            <section className="snap-start">
              <Hero />
            </section>
            <section className="snap-start">
              <Features />
            </section>
            <section className="snap-start">
              <Cards />
            </section>
            <section className="snap-start">
              <Graph />
            </section>
            <section className="snap-start">
              <Testimonials />
            </section>
            <section className="snap-start">
              <CTA />
            </section>
            <section className="snap-start">
              <ParallaxSection />
            </section>
            {/* More sections will go here */}
          </main>
        </div>
      )}
    </ThemeProvider>
  );
}

export default App;
