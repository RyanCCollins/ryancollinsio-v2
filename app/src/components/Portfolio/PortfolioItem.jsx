import React, { PropTypes } from 'react';
import { Row, Column, Thumbnail } from 'react-foundation';
import './Portfolio.scss';
import PortfolioOverlay from './PortfolioOverlay';
import elementInViewport from '../../../lib/isVisible';

const alternatingAnimation = () =>
  'fadeSlideInUp';

const Styles = {
  fadedOut: {
    opacity: 0
  },
  fadedIn: {
    opacity: 1
  }
};

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    const { i } = this.props;
    this.state = {
      needsAnimation: true,
      isAnimating: false,
      isScrolledIntoView: i === 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    /* Call the handle scroll right away if it's the first project*/
    const { isScrolledIntoView } = this.state;
    if (isScrolledIntoView) {
      this.handleScroll();
    }
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll() {
    const { i } = this.props;
    const { id } = this.props.project;
    const selector = `portfolio-item-${id}`;
    const element = document.getElementById(selector);
    if (elementInViewport(element)) {
      if (this.state.needsAnimation === true) {
        this.setState({
          needsAnimation: false,
          isScrolledIntoView: true,
          isAnimating: true,
          animationName: alternatingAnimation(i)
        });
      }
    }
  }
  render() {
    const {
      project,
      projectCount,
      onLoad,
      i
    } = this.props;
    return (
      <Row className="display portfolio-item" key={i}>
        <Column
          small={12}
          medium={10}
          large={8}
          centerOnSmall
          id={`portfolio-item-${project.id}`}
        >
          <div
            style={this.state.isScrolledIntoView ? Styles.fadedIn : Styles.fadedOut}
            className={this.state.isAnimating ?
              `image-wrapper overlay-fade-in ${this.state.animationName}`
            :
              'image-wrapper overlay-fade-in'
            }
          >
            <Thumbnail
              src={project.featureImage}
              className="portfolio-image"
              onLoad={project.id === projectCount ? onLoad : undefined}
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
  onLoad: PropTypes.func.isRequired,
  projectCount: PropTypes.number.isRequired,
  i: PropTypes.number.isRequired
};

export default PortfolioItem;
