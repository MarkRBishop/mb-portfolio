import React, { useState } from 'react';

const ProjectCard = ({ name, image, githubLink, websiteLink }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="project-card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img src={image} alt={name} />
      <div className={`buttons ${isHovered ? 'visible' : ''}`}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-icon">
          <img src="assets/github.jpg" alt="GitHub" />
        </a>
        <a href={websiteLink} target="_blank" rel="noopener noreferrer" className="project-icon">
          <img src="/assets/globe.png" alt="Website" />
        </a>
      </div>
      <p>{name}</p>
    </div>
  );
};

export default ProjectCard;