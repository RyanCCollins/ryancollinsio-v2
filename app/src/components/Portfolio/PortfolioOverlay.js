import React, { PropTypes } from 'react';
import { Link } from 'react-router';

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

PortfolioOverlay.propTypes = {
  project: PropTypes.object.isRequired
};

export default PortfolioOverlay;
