import React from 'react';
import PortfolioItem from './PortfolioItem';
import { Column } from 'react-foundation';

const PortfolioGrid = ({
  projects
}) => (
  <div className="portfolio-grid">
    <Column isColumn large={12} centerOnSmall>
      {projects.map((project) =>
        <PortfolioItem
          project={project}
          key={project.id}
        />
      )}
    </Column>
  </div>
);

export default PortfolioGrid;
