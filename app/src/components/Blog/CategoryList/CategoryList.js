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
  handleOnSelectCategory(category) {
    const {
      onSelectCategory
    } = this.props;
    onSelectCategory(category);
  }
  render() {
    const {
      categories,
      selectedCategory
    } = this.props;
    return (
      <div className="category-list menu-vertical">
        <Callout>
          <span className="filter-label">
            <p>Filter Posts by Category: </p>
          </span>
          <Menu>
            <CategoryLink
              category={{ name: 'All' }}
              onClick={this.handleOnSelectCategory.bind(this, { name: 'All' })}
              isActive={selectedCategory === null || selectedCategory == { name: 'All'}}
            >
              All
            </CategoryLink>
            {categories !== undefined && categories.length && categories.map((cat) =>
              <CategoryLink
                category={cat}
                onClick={this.handleOnSelectCategory.bind(this, cat)}
                isActive={selectedCategory !== null && selectedCategory === cat}
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
  selectedCategory: PropTypes.object.isRequired
};

export default CategoryList;
