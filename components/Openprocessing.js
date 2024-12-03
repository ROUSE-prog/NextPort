import React from 'react';

const OpenProcessingSection = () => {
  return (
    <section
      id="openprocessing"
      className="work-card bg-black bg-opacity-40 rounded-lg shadow-md py-10 px-6 max-w-3xl mx-auto my-12 text-center"
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
        className="inline-block bg-gray-800 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
      >
        View My Work on OpenProcessing
      </a>
    </section>
  );
};

export default OpenProcessingSection;
