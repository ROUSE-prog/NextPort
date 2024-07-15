import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card p-4 border rounded shadow-lg bg-white bg-opacity-75">
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <h3 className="text-xl text-gray-600">{project.type}</h3>
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover mt-2" />
      <p className="mt-2">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
