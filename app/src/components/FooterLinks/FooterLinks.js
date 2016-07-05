import React, { PropTypes } from 'react';
import FooterLink from './FooterLink/FooterLink';
import './FooterLinks.scss';

const FooterLinks = ({
  footerLinks
}) => (
  <div className="footer-links">
    <ul className="list-inline">
      {footerLinks.map((link) =>
        <FooterLink footerLink={link} />
      )}
    </ul>
  </div>
);

FooterLinks.propTypes = {
  footerLinks: PropTypes.array.isRequired
};

export default FooterLinks;
