import React, { PropTypes } from 'react';
import { CategoryFilter } from 'components';
import {
  Row,
  Column
} from 'react-foundation';

const CategoryFilterContainer = ({
  categories,
  onSelectCategory,
  selectedCategory,
  listName
}) => (
  <Row className="category-links">
    <Column large={8} small={12} isColumn>
      <CategoryFilter
        listName={listName}
        categories={categories}
        onSelectCategory={onSelectCategory}
        selectedCategory={selectedCategory}
      />
    </Column>
  </Row>
);

CategoryFilterContainer.propTypes = {
  listName: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.object.isRequired
};

export default CategoryFilterContainer;
