import React, { Component } from 'react';
import { Column, Thumbnail } from 'react-foundation';
import './TechnologyGridItem.scss';
import elementInViewport from '../../../lib/isVisible';

class TechnologyGridItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      needsAnimation: true,
      isAnimating: false,
      animationName: 'isFading'
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    const selector = `technology-grid-item-${this.props.technology.id}`;
    const element = document.getElementById(selector);
    if (elementInViewport(element)) {
      if (this.state.needsAnimation === true) {
        this.setState({
          needsAnimation: false,
          isAnimating: true
        });
      }
    }
  }
  render() {
    const {
      technology
    } = this.props;
    return (
      <Column isColumn className="technology-grid-item-wrapper">
        <div
          className={
            this.state.isAnimating ?
              `callout technology-grid-item ${this.state.animationName}`
            :
              'callout technology-grid-item'
          }
          id={`technology-grid-item-${technology.id}`}
        >
          <Thumbnail className="technology-grid-item__image" src={technology.imageUrl} />
          <h4 className="technology-grid-item__caption">{technology.name}</h4>
        </div>
      </Column>
    );
  }
}

export default TechnologyGridItem;
