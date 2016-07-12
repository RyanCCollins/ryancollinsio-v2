import React, { PropTypes } from 'react';
import { CategoryLink } from 'components';
import './CategoryFilter.scss';
import {
  Menu,
  Callout
} from 'react-foundation';

const Styles = {
  hidden: {
    display: 'none'
  }
};

class CategoryFilter extends React.Component {
  handleOnSelectCategory(category) {
    const {
      onSelectCategory
    } = this.props;
    onSelectCategory(category);
  }
  render() {
    const {
      categories,
      listName,
      selectedCategory
    } = this.props;
    return (
      <div className="category-list" style={categories.length ? {} : Styles.hidden}>
        <Callout>
          <span className="filter-label">
            <p className="filter-label__text">Filter {listName || 'Items'} by Category</p>
          </span>
          <Menu>
            <CategoryLink
              category={{ name: 'All' }}
              onClick={this.handleOnSelectCategory.bind(this, { name: 'All', value: 'all' })}
              isActive={selectedCategory.name == 'All'}
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

CategoryFilter.propTypes = {
  listName: PropTypes.string,
  categories: PropTypes.array,
  onSelectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.object.isRequired
};

export default CategoryFilter;
