import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Button } from 'react-foundation';

const PortfolioOverlay = ({
  project
}) => (
  <Link
    to={`/projects/${project.id}`}
    className="portfolio-item__button"
  >
    <div className="image-overlay-content">
      <h2>{project.title}</h2>
      <Button style={{ marginTop: 20 }} size={'LARGE'}>
        More Info
      </Button>
    </div>
  </Link>
);

PortfolioOverlay.propTypes = {
  project: PropTypes.object.isRequired
};

export default PortfolioOverlay;
