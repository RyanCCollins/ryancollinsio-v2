import React from 'react';
import './Divider.scss';

const Divider = (props) => (
  <span
    className={props.color ? `divider divider__${props.color}` : 'divider'}
  />
);

export default Divider;
