import React, { PropTypes } from 'react';
import {
  Menu,
  MenuItem,
  Callout
} from 'react-foundation';
import { Link } from 'react-router';
import './CategoryList.scss';

const CategoryLink = ({
  category,
  isActive,
  onClick
}) => (
  <MenuItem isActive={isActive} onClick={onClick}>
      <a>{category.name}</a>
  </MenuItem>
);

class CategoryList extends React.Component {
  render() {
    const {
      categories,
      onSelectCategory,
      selectedCategory
    } = this.props;
    return (
      <div className="category-list menu-vertical">
        <Callout>
          <Menu>
            <CategoryLink
              category={{ name: 'All' }}
              onClick={onSelectCategory}
              isActive={selectedCategory === null}
            >
              All
            </CategoryLink>
            {categories !== undefined && categories.length && categories.map((cat) =>
              <CategoryLink
                category={cat}
                isActive={selectedCategory !== null && selectedCategory === cat.name}
              />
            )}
          </Menu>
        </Callout>
      </div>
    );
  }
}

CategoryList.propTypes = {
  categories: PropTypes.array,
  onSelectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.string
};

export default CategoryList;
