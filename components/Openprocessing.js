import React from 'react';

const OpenProcessingSection = () => {
  return (
    <section
      id="openprocessing"
      className="work-card bg-black bg-opacity-40 rounded-lg shadow-md overflow-hidden flex items-center justify-center py-3 px-4"
    >
      <div className="text-center max-w-3xl">
        <h2 className="text-4xl font-bold text-white mb-6">
          OpenProcessing
        </h2>
        <p className="text-lg text-white mb-6">
          Explore my collection of generative art and creative coding
          experiments on OpenProcessing.
        </p>
        <a
          href="https://openprocessing.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black bg-opacity-50 text-white py-3 px-5 rounded-lg shadow-md hover:bg-black hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg group"
        >
          View My Work on OpenProcessing
        </a>
      </div>
    </section>
  );
};

export default OpenProcessingSection;
