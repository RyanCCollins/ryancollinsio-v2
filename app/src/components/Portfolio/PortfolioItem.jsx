import React, { PropTypes } from 'react';
import { Row, Column, Thumbnail } from 'react-foundation';
import './Portfolio.scss';
import PortfolioOverlay from './PortfolioOverlay';
import elementInViewport from '../../../lib/isVisible';

const alternatingAnimation = (id) => {
  let animationName = 'fadeSlideInUp';
  if (id == 1) {
    animationName = 'fadeIn';
  }
  return animationName;
};

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needsAnimation: true,
      isAnimating: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    /* Call the handle scroll right away if it's the first project*/
    if (this.props.project.id == 1) {
      this.handleScroll();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    const selector = `portfolio-item-${this.props.project.id}`;
    const element = document.getElementById(selector);
    if (elementInViewport(element)) {
      if (this.state.needsAnimation === true) {
        this.setState({
          needsAnimation: false,
          isAnimating: true,
          animationName: alternatingAnimation(this.props.project.id)
        });
      }
    }
  }
  render() {
    const {
      project,
      onLoad
    } = this.props;
    return (
      <Row className="display portfolio-item">
        <Column small={8} centerOnSmall id={`portfolio-item-${project.id}`}>
          <div
            className={this.state.isAnimating ?
              `image-wrapper overlay-fade-in ${this.state.animationName}`
            :
              'image-wrapper overlay-fade-in'
            }
          >
            <Thumbnail
              src={project.featureImage}
              className="portfolio-image"
              onLoad={project.id === 1 ? onLoad : undefined}
            />
            <PortfolioOverlay
              project={project}
            />
          </div>
        </Column>
      </Row>
    );
  }
}

PortfolioItem.propTypes = {
  project: PropTypes.object.isRequired,
  onLoad: PropTypes.func.isRequired
};

export default PortfolioItem;
