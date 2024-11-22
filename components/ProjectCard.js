import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card flex flex-col md:flex-row items-center md:items-start bg-yellow-50 rounded-lg shadow-md overflow-hidden">
      {/* Image Section */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full md:w-1/3 h-48 object-cover"
      />
      {/* Text Section */}
      <div className="p-6 flex flex-col justify-center">
        <h4 className="uppercase text-sm font-bold text-gray-700 mb-2">{project.type}</h4>
        <h3 className="text-2xl font-extrabold text-gray-900 leading-snug mb-4">{project.title}</h3>
        <p className="text-gray-800 text-base">{project.description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
