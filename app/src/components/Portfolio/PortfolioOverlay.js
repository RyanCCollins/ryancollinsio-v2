import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-foundation';
import { GoSearch } from 'react-icons/lib/go';

const PortfolioOverlay = ({
  project
}) => (
  <div className="image-overlay-content">
    <h2>{project.title}</h2>
    <p className="project-description">
      {project.caption}
    </p>
    <Link
      to={`/projects/${project.id}`}
      className="portfolio-item__button"
    >
      <Button size={'large'} color={'secondary'}>
        <GoSearch className="icon-medium" />
        {' View Details'}
      </Button>
    </Link>
  </div>
);

export default PortfolioOverlay;
