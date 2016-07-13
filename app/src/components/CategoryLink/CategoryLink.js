import React, { PropTypes } from 'react';
import { MenuItem } from 'react-foundation';
import './CategoryLink.scss';

const CategoryLink = ({
  category,
  isActive,
  onClick
}) => (
  <MenuItem isActive={isActive} onClick={onClick}>
    <a>{category.name}</a>
  </MenuItem>
);

CategoryLink.propTypes = {
  category: PropTypes.object.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default CategoryLink;
