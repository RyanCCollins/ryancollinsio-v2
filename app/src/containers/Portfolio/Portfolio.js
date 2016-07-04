import React, { Component, PropTypes } from 'react';
import PortfolioGrid from '../../components/Portfolio/PortfolioGrid';
import { Divider, LoadingIndicator } from '../../components';

const Styles = {
  hidden: {
    display: 'none'
  },
  notHidden: {
    display: ''
  }
};

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.handleEndLoad = this.handleEndLoad.bind(this);
    this.state = {
      didLoad: false
    };
  }
  componentDidMount() {
    const {
      didLoad
    } = this.state;
    if (!didLoad) {
      this.state = {
        isLoading: true
      };
    }
  }
  handleEndLoad() {
    this.setState({ isLoading: false, didLoad: true });
  }
  render() {
    const {
      isLoading
    } = this.state;
    return (
      <div>
        <LoadingIndicator isLoading={isLoading} />
        <div className="portfolio-container" style={isLoading ? Styles.hidden : Styles.notHidden}>
          <h1 className="section-header text-grey portfolio__section-header">Portfolio</h1>
          <Divider />
          <PortfolioGrid
            {...this.props}
            onLoad={this.handleEndLoad}
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
