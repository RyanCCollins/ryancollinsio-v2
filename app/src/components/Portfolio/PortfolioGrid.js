import React from 'react';
import { Link } from 'react-router';
import PortfolioItem from './PortfolioItem';
import Transition from 'react-motion-ui-pack'

const PortfolioGrid = ({
  projects
}) => (
    <div className="portfolio-grid">
      {projects.map((project, i) =>
        <PortfolioItem
          project={project}
          key={project.key}
          i={i}
        />
      )}
    </div>
);


export default PortfolioGrid;
