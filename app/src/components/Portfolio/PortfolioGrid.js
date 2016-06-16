import React from 'react';
import PortfolioItem from './PortfolioItem';

const PortfolioGrid = ({
  projects
}) => (
  <div className="portfolio-grid">
    {projects.map((project) =>
      <PortfolioItem
        project={project}
        key={project.key}
      />
    )}
  </div>
);

export default PortfolioGrid;
