import React, { PropTypes, Component } from 'react';
import IconPicker from './IconPicker';
import './FooterLink.scss';

const FooterLink = ({
  footerLink
}) => (
  <li className="footer-link-item__list-item">
    <div className="footer-link-item__wrapper">
      <a
        href={footerLink.url}
        className="footer-link__item"
      >
        <IconPicker id={footerLink.id} />
      </a>
    </div>
  </li>
);

FooterLink.propTypes = {
  footerLink: PropTypes.object.isRequired
};

export default FooterLink;
