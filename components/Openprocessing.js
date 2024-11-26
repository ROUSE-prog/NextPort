import React from 'react';

const Openprocessing = () => {
  const projects = [
    {
      title: 'Generative Art 1',
      description: 'An interactive generative art experiment using p5.js.',
      link: 'https://openprocessing.org/sketch/XXXXX',
    },
    {
      title: 'Creative Coding 2',
      description: 'A mesmerizing generative visual design.',
      link: 'https://openprocessing.org/sketch/YYYYY',
    },
  ];

  return (
    <div className="bg-gray-100 py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">OpenProcessing</h2>
      <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-12">
        Explore a collection of my generative art projects and creative coding experiments on OpenProcessing.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Openprocessing;
