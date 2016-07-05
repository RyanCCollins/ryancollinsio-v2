import React, { PropTypes } from 'react';
import IconPicker from './IconPicker';

const FooterLink = ({
  item
}) => (
  <li>
    <div className="footer-link-item">
      <a href={item.link}>
        <IconPicker id={item.id} />
      </a>
    </div>
  </li>
);

FooterLink.propTypes = {
  item: PropTypes.object.isRequired
};
