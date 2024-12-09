import React from 'react';

const Header = ({ activeTheme }) => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Map themes to their colors
  const themeColors = {
    'theme-water': 'bg-sky-400 border-sky-500',
    'theme-earth': 'bg-green-600 border-green-500',
    'theme-air': 'bg-slate-300 border-slate-400',
    'theme-fire': 'bg-orange-600 border-orange-500',
    'theme-ether': 'bg-purple-600 border-purple-500',
  };

  // Extract the active theme colors
  const activeColor = themeColors[activeTheme] || 'bg-stone-600 border-stone-500';

  return (
    <header className="fixed top-4 w-full z-50 flex justify-center">
      <div className="flex items-center justify-center mx-auto">
        <nav className="flex space-x-4 lg:space-x-5 text-sm lg:text-base text-stone-800">
          {[
            { label: 'Home', id: 'welcome' },
            { label: 'Work', id: 'combined-work' },
            { label: 'Playground', id: 'playground' },
            { label: 'OpenProcessing', id: 'openprocessing' },
            { label: 'Contact', id: 'contact' },
          ].map((link, index) => (
            <button
              key={index}
              onClick={() => scrollToSection(link.id)}
              className="relative group transition-all duration-300 hover:text-stone-500"
            >
              {link.label}
              {/* Dynamic Underline */}
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] w-0 ${activeColor} transition-all duration-300 group-hover:w-full`}
              ></span>
            </button>
          ))}
        </nav>
      </div>
      {/* Profile Icon with Dynamic Border */}
      <a
        href="https://linktr.ee/Misopear"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-4 top-4 rounded-full h-12 w-12 shadow-lg overflow-hidden"
      >
        <img
          src="https://avatars.githubusercontent.com/u/52251052?v=4" // Replace with your actual image URL
          alt="Profile"
          className={`rounded-full h-full w-full border-4 transition-all duration-300 ${activeColor}`}
        />
      </a>
    </header>
  );
};

export default Header;
