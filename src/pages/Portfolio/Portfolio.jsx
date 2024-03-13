import React from 'react';
import ProjectCard from './ProjectCard';
import { Outlet } from 'react-router-dom';

const projects = [
  {
    name: 'Atmosphoria',
    image: 'assets/atmosphoria.png',
    githubLink: 'https://github.com/MarkRBishop/atmosphoria',
    websiteLink: 'https://markrbishop.github.io/atmosphoria/',
  },
  {
    name: 'Rate my Manager',
    image: 'assets/rate-my-manager.png',
    githubLink: 'https://github.com/MarkRBishop/rate-my-manager',
    websiteLink: 'https://rate-my-manager-97f9044f8b00.herokuapp.com/',
  },
  {
    name: 'devTalk',
    image: 'assets/devTalk_homepage.png',
    githubLink: 'https://github.com/MarkRBishop/devTalk-blog',
    websiteLink: 'https://devtalk-blog-9a1c063b54af.herokuapp.com/',
  },
  {
    name: 'weatherDash',
    image: 'assets/weatherDash.png',
    githubLink: 'https://github.com/MarkRBishop',
    websiteLink: 'https://markrbishop.github.io/weatherDash/',
  },
  {
    name: 'ezStaffing',
    image: 'assets/ss-of-ez-staffing.png',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://drive.google.com/file/d/1xeW7bP0uqCQbEXF9MbNMJJReiwGt7egj/view',
  },
  {
    name: 'Daily Task Planner',
    image: 'assets/daily-task-planner-screenshot.png',
    githubLink: 'https://github.com/MarkRBishop/daily-task-planner',
    websiteLink: 'https://markrbishop.github.io/daily-task-planner/ ',
  },
  // Repeat the structure for other projects...
];

const Portfolio = () => {
  return (
    <div className="portfolio-container container mt-4">
      <h2 className="text-center">Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Portfolio;