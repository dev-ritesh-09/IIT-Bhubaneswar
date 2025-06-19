import React, { useRef } from 'react';

const RippleButton = ({ children, className = '', ...props }) => {
  const btnRef = useRef(null);

  const createRipple = (event) => {
    const button = btnRef.current;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');
    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }
    button.appendChild(circle);
  };

  return (
    <button
      ref={btnRef}
      className={`relative overflow-hidden focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors px-6 py-3 rounded-lg font-semibold bg-blue-600 text-white dark:bg-blue-500 dark:text-white shadow hover:bg-blue-700 dark:hover:bg-blue-600 ${className}`}
      onClick={createRipple}
      role="button"
      tabIndex={0}
      {...props}
    >
      {children}
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.5s ease-out;
          background: rgba(255,255,255,0.5);
          pointer-events: none;
          z-index: 10;
          opacity: 0.75;
        }
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}</style>
    </button>
  );
};

export default RippleButton; 