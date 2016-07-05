import React, { PropTypes } from 'react';
import IconPicker from './IconPicker';
import './FooterLink.scss';
import { Motion, spring } from 'react-motion';

const initialStyle = {
  transformation: {
    transform: `skew(20deg, 20deg)`
  }
};

class FooterLink extends React.Component {
  render() {
    const {
      footerLink
    } = this.props;
    const {
      style
    } = this.state;
    return (
      <li className="footer-link-item__list-item">
        <div className="footer-link-item__wrapper" style={initialStyle.transformation}>
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
