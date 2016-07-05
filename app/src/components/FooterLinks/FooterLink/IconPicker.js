import React, { PropTypes } from 'react';
import {
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaStackOverflow,
  FaAngellist,
  FaPaperPlaneO
} from 'react-icons/lib/fa';

import './udacity-logo-font/css/Glyphter.css';


const UdacityLogo = () => (
  <i className="icon-udacity-logo footer-link-icon" />
);

const IconPicker = ({
  id
}) => (
  <div>
    {(() => {
      switch (id) {
        case 0:
          return (<FaLinkedin className="icon-social" />);
        case 1:
          return (<FaTwitter className="icon-social" />);
        case 2:
          return (<FaGithub className="icon-social" />);
        case 3:
          return (<FaStackOverflow className="icon-social" />);
        case 4:
          return (<FaAngellist className="icon-social" />);
        case 5:
          return (<UdacityLogo className="icon-social" />);
        case 6:
          return (<FaPaperPlaneO className="icon-social" />);
        default:
          return (<noscript />);
      }
    })()}
  </div>
);

IconPicker.propTypes = {
  id: PropTypes.number.isRequired
};

export default IconPicker;
