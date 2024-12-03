import React from 'react';

const WelcomeContainer = () => {
  const capabilitiesSummary = `
    My expertise spans Frontend Development, Full Stack Development, Responsive Design, and Creative Coding. 
    I create stunning, user-focused applications that blend art and technology to deliver visually compelling 
    and functional experiences across platforms.
  `;

  const navigationDescription = `
    Use the navigation bar at the top to explore different sections! Check out Recent Work for projects, 
    OpenProcessing for creative coding, and Contact to connect with me. 
    And don’t miss the Playground—it’s where code parties and logic takes a nap!
  `;

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="welcome-container bg-sky-700 bg-opacity-40 items-center rounded-sm shadow-md overflow-hidden hover:bg-sky-900 hover:bg-opacity-80 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group py-16 px-8 text-center"
      id="welcome"
    >
      {/* Intro Section */}
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-white">Welcome!</h1>
        <p className="text-lg text-stone-50 mb-6">
          Hi, I’m Steven! A passionate developer with a love for building interactive, dynamic, and visually
          compelling applications. Explore my skills and recent projects!
        </p>
        <p className="text-md text-stone-100 italic mb-10">
          {capabilitiesSummary}
        </p>
        <p className="text-sm text-stone-200 italic mb-10">{navigationDescription}</p>
      </div>

      {/* Scroll Arrow */}
      <div className="flex justify-center">
        <button
          onClick={() => scrollToSection('combined-work')} // Navigates to the Work section
          className="animate-slide-right focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default WelcomeContainer;
