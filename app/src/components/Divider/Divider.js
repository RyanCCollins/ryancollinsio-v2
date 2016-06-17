import React from 'react';
import './Divider.scss';

const Divider = (props) => (
  <span className={props.color ? `divider ${props.color}` : 'divider'}></span>
);

export default Divider;
