import React from 'react';
import PortfolioGrid from '../components/Portfolio/PortfolioGrid';

class Portfolio extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="portfolio-container">
        <PortfolioGrid {...props}/>
      </div>
    )
  }
}

export default Porfolio;
