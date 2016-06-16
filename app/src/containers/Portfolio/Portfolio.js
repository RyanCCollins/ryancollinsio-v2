import React from 'react';
import PortfolioGrid from '../../components/Portfolio/PortfolioGrid';

const Portfolio = (props) => (
  <div className="portfolio-container">
    <PortfolioGrid {...props} />
  </div>
);

export default Portfolio;
