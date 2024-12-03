import React from 'react';

const OpenProcessingSection = () => {
  return (
    <section
      id="openprocessing"
      className="work-card bg-stone-700  bg-opacity-40 p-6 rounded-sm shadow-md text-stone-100 py-12 px-6 text-center max-w-2xl mx-auto my-12  hover:bg-stone-900 hover:bg-opacity-80 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group"
    >  
      <h2 className="text-4xl font-bold text-white mb-6">
        OpenProcessing
      </h2>
      <p className="text-lg text-white mb-6">
        Explore my collection of generative art and creative coding experiments on OpenProcessing.
      </p>
      <a
        href="https://openprocessing.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gradient-to-r  bg-stone-500 text-stone-100 py-2 px-4 rounded-sm shadow-md hover:from-stone-500 hover:to-orange-200 hover:text-stone-900 hover:shadow-lg transition-all"
      >
        View My Work on OpenProcessing
      </a>
    </section>
  );
};

export default OpenProcessingSection;
