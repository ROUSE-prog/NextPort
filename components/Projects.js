import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
  return (
    <div className="projects-container grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
