import React, { PropTypes } from 'react';
import FooterLink from './FooterLink/FooterLink';
import './FooterLinks.scss';

const FooterLinks = ({
  footerLinks
}) => (
  <div className="footer-links">
    <ul className="list-inline up-on-small">
      {footerLinks.map((link) =>
        <FooterLink key={link.id} footerLink={link} />
      )}
    </ul>
  </div>
);

FooterLinks.propTypes = {
  footerLinks: PropTypes.array.isRequired
};

export default FooterLinks;
