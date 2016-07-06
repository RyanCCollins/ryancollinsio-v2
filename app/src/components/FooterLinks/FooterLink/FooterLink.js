import React, { PropTypes, Component } from 'react';
import IconPicker from './IconPicker';
import './FooterLink.scss';
import { Motion, spring } from 'react-motion';

const initialStyle = {
  transformation: {
    transform: 'skew(10deg, 10deg)'
  },
  notTransformed: {
    transform: ''
  }
};

class FooterLink extends Component {
  constructor() {
    this.state = {
      isHovering: false
    };
    this.handleHover = this.handleHover.bind(this);
  }
  handleHover(isHovering) {
    this.setState({
      isHovering
    });
  }
  render() {
    const {
      footerLink
    } = this.props;
    const {
      isHovering
    } = this.state;
    return (
      <li
        className="footer-link-item__list-item"
        onMouseEnter={this.handleHover.bind(this, true)}
        onMouseLeave={this.handleHover.bind(this, false)}
      >
        <div
          className="footer-link-item__wrapper"
          style={isHovering ? initialStyle.notTransformed : initialStyle.transformation}
        >
          <a href={footerLink.url} className="footer-link__item">
            <IconPicker id={footerLink.id} />
          </a>
        </div>
      </li>
    );
  }
}

FooterLink.propTypes = {
  footerLink: PropTypes.object.isRequired,
  onHover: PropTypes.func.isRequired
};

export default FooterLink;
