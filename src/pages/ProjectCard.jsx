import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa'; 

const ProjectCard = ({ name, image, githubLink, websiteLink }) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div className="project-card" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <div className={`github-icon ${isHovered ? 'visible' : ''}`}>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <FaGithub size={36} color="rgb(62, 160, 62)" />
        </a>
      </div>
      <a href={websiteLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} />
      </a>
      <p>{name}</p>
    </div>
  );
};

export default ProjectCard;