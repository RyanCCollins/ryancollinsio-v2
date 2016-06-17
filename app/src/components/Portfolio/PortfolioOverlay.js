import React from 'react';
import { Link } from 'react-router';

const PortfolioOverlay = ({
  project
}) => (
  <div className="image-overlay-content">
    <h2>{project.title}</h2>
    <p className="project-description">
      {project.caption}
    </p>
    <a
      href={project.repositoryURL}
      className="button primary small portfolio-item__button"
    >View on Github
    </a>
    <Link
      to={`/projects/${project.id}`}
      className="button primary small portfolio-item__button"
    >
      View Details
    </Link>
  </div>
);

export default PortfolioOverlay;
