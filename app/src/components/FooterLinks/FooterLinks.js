import React, { PropTypes } from 'react';
import FooterLink from './FooterLink/FooterLink';

const FooterLinks = ({
  items
}) => (
  <div className="footer-links">
    <ul className="inline-list">
      {items.map((item) =>
        <FooterLink item={item} />
      )}
    </ul>
  </div>
);

FooterLinks.propTypes = {
  items: PropTypes.array.isRequired
};

export default FooterLinks;
