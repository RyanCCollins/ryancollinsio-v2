import React from 'react';
import PortfolioGrid from '../../components/Portfolio/PortfolioGrid';
import { Divider } from '../../components';

const Portfolio = (props) => (
  <div className="portfolio-container">
    <h1 className="section-header text-grey portfolio__section-header">Portfolio</h1>
    <Divider />
    <PortfolioGrid {...props} />
  </div>
);

export default Portfolio;
