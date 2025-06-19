import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../themeContext';
// import logo assets if you have them
// import logoLight from '../assets/logo-light.svg';
// import logoDark from '../assets/logo-dark.svg';

const navLinks = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'Features', href: '#features', id: 'features' },
  { name: 'Cards', href: '#cards', id: 'cards' },
  { name: 'Graph', href: '#graph', id: 'graph' },
  { name: 'Testimonials', href: '#testimonials', id: 'testimonials' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 80; // Offset for navbar height
      let current = 'Home';
      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= scrollPosition) {
          current = link.name;
        }
      }
      setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        <div className="font-bold text-xl text-blue-600 dark:text-blue-400 transition-colors duration-300">
          {/* Logo theme swap example: */}
          {/* <img src={theme === 'dark' ? logoDark : logoLight} alt="Logo" className="h-8" /> */}
          Logo
        </div>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`transition-colors duration-300 font-medium px-2 py-1 rounded hover:text-blue-600 dark:hover:text-blue-400 ${
                active === link.name
                  ? 'text-blue-600 dark:text-blue-400 underline underline-offset-4'
                  : 'text-gray-700 dark:text-gray-200'
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300"
          aria-label="Toggle theme"
        >
          {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar; 