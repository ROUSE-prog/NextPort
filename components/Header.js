import React, { useState, useEffect } from 'react';

const Header = () => {
  const [activeSection, setActiveSection] = useState('welcome'); // Track active section

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id); // Update active section
    }
  };

  // Detect active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['welcome', 'combined-work', 'playground', 'openprocessing', 'contact'];
      const offset = window.innerHeight / 3; // Adjust for when a section becomes active
      let currentSection = activeSection;

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <header className="fixed top-0 left-0 w-full bg-glass bg-opacity-90 z-50 flex items-center px-4 py-3 lg:px-6 lg:py-4">
      {/* GitHub Image Link */}
      <a
        href="https://linktr.ee/Misopear"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 lg:right-6"
        aria-label="Link to Linktree"
      >
        <img
          src="https://avatars.githubusercontent.com/u/52251052?v=4" // Replace with your GitHub profile image URL
          alt="GitHub Profile"
          className="h-12 w-12 rounded-full shadow-md hover:scale-105 z-50 transition-transform duration-300"
        />
      </a>

      {/* Centered Navigation */}
      <nav className="flex space-x-4 lg:space-x-6 text-sm lg:text-base text-stone-800 mx-auto">
        <button
          onClick={() => scrollToSection('welcome')}
          className={`hover:text-stone-500 ${
            activeSection === 'welcome' ? 'font-bold text-black' : ''
          }`}
        >
          Home
        </button>
        <button
          onClick={() => scrollToSection('combined-work')}
          className={`hover:text-stone-500 ${
            activeSection === 'combined-work' ? 'font-bold text-black' : ''
          }`}
        >
          Work
        </button>
        <button
          onClick={() => scrollToSection('playground')}
          className={`hover:text-stone-500 ${
            activeSection === 'playground' ? 'font-bold text-black' : ''
          }`}
        >
          Playground
        </button>
        <button
          onClick={() => scrollToSection('openprocessing')}
          className={`hover:text-stone-500 ${
            activeSection === 'openprocessing' ? 'font-bold text-black' : ''
          }`}
        >
          OpenProcessing
        </button>
        <button
          onClick={() => scrollToSection('contact')}
          className={`hover:text-stone-500 ${
            activeSection === 'contact' ? 'font-bold text-black' : ''
          }`}
        >
          Contact
        </button>
      </nav>
    </header>
  );
};

export default Header;
