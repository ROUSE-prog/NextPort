import React from 'react';

const ArrowButton = ({ direction, sections }) => {
  const handleScroll = () => {
    const currentSection = document.querySelector('.active-section');
    if (!currentSection) return;

    // Find the current section index
    const currentIndex = sections.indexOf(currentSection.id);

    // Determine the next or previous section based on the direction
    const targetIndex =
      direction === 'left' ? currentIndex - 1 : currentIndex + 1;

    // If there is a valid section, scroll to it
    if (targetIndex >= 0 && targetIndex < sections.length) {
      const targetSection = document.getElementById(sections[targetIndex]);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button
      className={`fixed ${
        direction === 'left' ? 'left-2' : 'right-2'
      } top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-white hover:text-black transition-transform duration-300`}
      aria-label={`Scroll ${direction === 'left' ? 'Previous' : 'Next'} Section`}
      onClick={handleScroll}
    >
      {direction === 'left' ? '←' : '→'}
    </button>
  );
};

export default ArrowButton;
