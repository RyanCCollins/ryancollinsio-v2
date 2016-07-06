import React, { PropTypes, Component } from 'react';
import IconPicker from './IconPicker';
import './FooterLink.scss';
import { Motion, spring } from 'react-motion';

const initialStyle = {
  transformOutwards: {
    transform: 'skew(10deg, 10deg)'
  },
  transformInwards: {
    transform: 'skew(-10deg, -10deg)'
  },
  notTransformed: {
    transform: ''
  }
};

class FooterLink extends Component {
  constructor(props) {
    super(props);
    this.handleHoverEnter = this.handleHoverEnter.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
    this.getTransformationStyle = this.getTransformationStyle.bind(this);
    this.state = {
      isHovering: false
    };
  }
  componentDidMount() {
    this.state = {
      isHovering: false
    };
  }
  handleHoverEnter() {
    this.setState({
      isHovering: true
    });
  }
  handleHoverLeave() {
    this.setState({
      isHovering: false
    });
  }
  getTransformationStyle() {
    const { id } = this.props.footerLink;
    if (id % 2 === 0) {
      return initialStyle.transformInwards;
    } else {
      return initialStyle.transformOutwards;
    }
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
        onMouseEnter={this.handleHoverEnter}
        onMouseLeave={this.handleHoverLeave}
      >
        <div
          className="footer-link-item__wrapper"
          style={isHovering ? initialStyle.notTransformed : this.getTransformationStyle()}
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
  footerLink: PropTypes.object.isRequired
};

export default FooterLink;
