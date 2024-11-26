import React, { useState } from 'react';
import { HomeIcon, BriefcaseIcon, PhoneIcon, CodeIcon } from '@heroicons/react/outline'; // Import additional Heroicons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home'); // Tracks active section

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setIsOpen(false);
  };

  return (
    <div>
      {/* Hamburger Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-5 left-7 z-50 p-3 rounded-full border-gray-900 bg-stone-200 bg-opacity-25 shadow-md hover:bg-stone-400"
        aria-label="Toggle navigation menu"
      >
        {/* Hamburger Icon */}
        <div className="flex flex-col justify-between h-4">
          <span className="block w-7 h-1.5 bg-stone-800 mb-1"></span>
          <span className="block w-7 h-1.5 bg-stone-800 mb-1"></span>
          <span className="block w-7 h-1.5 bg-stone-800"></span>
        </div>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-20 left-0 h-full w-64 bg-glass  transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-40 text-stone-800`}
      >
        <nav className="flex flex-col p-6 space-y-4 text-stone-800">
          {/* Home Link */}
          <a
            href="#home"
            className={`flex items-center text-lg font-semibold p-3 rounded-md hover:bg-stone-100 ${
              activeSection === 'home' ? 'bg-stone-300 text-stone-900' : ''
            }`}
            onClick={() => handleSectionClick('home')}
          >
            <HomeIcon className="w-6 h-6 mr-3" /> Home
          </a>
          <hr className="border-stone-200" />
          {/* Recent Work Link */}
          <a
            href="#recent-work"
            className={`flex items-center text-lg font-semibold p-3 rounded-md hover:bg-stone-200 ${
              activeSection === 'recent-work' ? 'bg-stone-300 text-stone-900' : ''
            }`}
            onClick={() => handleSectionClick('recent-work')}
          >
            <BriefcaseIcon className="w-6 h-6 mr-3" /> Recent Work
          </a>
          <hr className="border-stone-200" />
          {/* OpenProcessing Link */}
          <a
            href="#openprocessing"
            className={`flex items-center text-lg font-semibold p-3 rounded-md hover:bg-stone-100 ${
              activeSection === 'openprocessing' ? 'bg-stone-300 text-stone-900' : ''
            }`}
            onClick={() => handleSectionClick('openprocessing')}
          >
            <CodeIcon className="w-6 h-6 mr-3" /> OpenProcessing
          </a>
          <hr className="border-stone-200" />
          {/* Contact Link */}
          <a
            href="#contact"
            className={`flex items-center text-lg font-semibold p-3 rounded-md hover:bg-stone-300 ${
              activeSection === 'contact' ? 'bg-stone-300 text-stone-900' : ''
            }`}
            onClick={() => handleSectionClick('contact')}
          >
            <PhoneIcon className="w-6 h-6 mr-3" /> Contact
          </a>
          <hr className="border-stone-200" />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
