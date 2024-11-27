import React, { useState, useEffect } from 'react';
import {
  HomeIcon,
  BriefcaseIcon,
  PuzzleIcon,
  CodeIcon,
  PhoneIcon,
} from '@heroicons/react/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu visibility
  const [activeSection, setActiveSection] = useState('welcome'); // Track active section

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

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
    <header className="fixed top-0 left-0 w-full bg-glass bg-opacity-90 z-50">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden p-2 rounded-md bg-stone-200 hover:bg-stone-400 transition-colors duration-300 z-60"
          aria-label="Toggle navigation menu"
        >
          <div className="flex flex-col justify-between h-4">
            <span className="block w-6 h-1 bg-stone-800"></span>
            <span className="block w-6 h-1 bg-stone-800"></span>
            <span className="block w-6 h-1 bg-stone-800"></span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 text-stone-800">
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
            Recent Work
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
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-stone-100 bg-opacity-95 absolute top-full left-0 w-full flex flex-col items-start space-y-4 p-6 transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {[
          { id: 'welcome', label: 'Home', Icon: HomeIcon },
          { id: 'combined-work', label: 'combined-work', Icon: BriefcaseIcon },
          { id: 'playground', label: 'Playground', Icon: PuzzleIcon },
          { id: 'openprocessing', label: 'OpenProcessing', Icon: CodeIcon },
          { id: 'contact', label: 'Contact', Icon: PhoneIcon },
        ].map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => {
              scrollToSection(id);
              closeMenu();
            }}
            className={`text-lg font-semibold text-stone-800 hover:text-stone-500 ${
              activeSection === id ? 'font-bold text-black' : ''
            }`}
          >
            <Icon className="inline-block w-6 h-6 mr-2" /> {label}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
