import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-foundation';
import { GoSearch } from 'react-icons/lib/go';

const PortfolioOverlay = ({
  project
}) => (
  <Link
    to={`/projects/${project.id}`}
    className="portfolio-item__button"
  >
    <div className="image-overlay-content">
      <h2>{project.title}</h2>
    </div>
  </Link>
);

export default PortfolioOverlay;
