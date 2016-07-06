import React, { PropTypes, Component } from 'react';
import IconPicker from './IconPicker';
import './FooterLink.scss';
import { spring } from 'react-motion';
import { ReactMotionLoop } from 'react-motion-loop';
import ReactTooltip from 'react-tooltip';

const styleFrom = {
  transform: `matrix(${spring(0)}, ${spring(0)}, ${spring(0)}, ${spring(0)}, ${spring(0)}, ${spring(0)}`
};
const styleTo = {
  transform: `matrix(${spring(10)}, ${spring(20)}, ${spring(30)}, ${spring(40)}, ${spring(50)}, ${spring(60)}`
};


const FooterLink = ({
  footerLink
}) => (
  <li className="footer-link-item__list-item">
    <ReactMotionLoop
      styleFrom={styleFrom}
      styleTo={styleTo}
    >
      {interpolatingStyle =>
        <div
          className="footer-link-item__wrapper"
          style={interpolatingStyle}
        >
          <ReactTooltip />
          <a
            href={footerLink.url}
            className="footer-link__item"
            id={`tool-tip-${footerLink.id}`}
            data-tip={footerLink.type}
          >
            <IconPicker id={footerLink.id} />
          </a>
        </div>
      }
    </ReactMotionLoop>
  </li>
);

FooterLink.propTypes = {
  footerLink: PropTypes.object.isRequired
};

export default FooterLink;
