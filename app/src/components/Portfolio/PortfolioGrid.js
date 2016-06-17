import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid = ({
  projects
}) => (
  <div className="portfolio-grid">
    {projects.map((project) =>
      <PortfolioItem
        project={project}
      />
    )}
  </div>
);

export default PortfolioGrid;
