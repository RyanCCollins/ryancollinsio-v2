import React, { PropTypes } from 'react';
import './Divider.scss';

const Divider = ({
  color
}) => (
  <span
    className={color ? `divider divider__${color}` : 'divider'}
  />
);

Divider.propTypes = {
  color: PropTypes.string
};

export default Divider;
