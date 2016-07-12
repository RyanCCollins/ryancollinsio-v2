import React, { PropTypes } from 'react';
import { CategoryFilter } from 'components';
import {
  Row,
  Column
} from 'react-foundation';

const CategoryFilterContainer = ({
  categories,
  onSelectCategory,
  selectedCategory
}) => (
  <Row className="category-links">
    <Column large={6} small={12} isColumn centerOnSmall>
      <CategoryFilter
        listName="Posts"
        categories={categories}
        onSelectCategory={onSelectCategory}
        selectedCategory={selectedCategory}
      />
    </Column>
  </Row>
);

CategoryFilterContainer.propTypes = {
  categories: PropTypes.array.isRequired,
  onSelectCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.object.isRequired
};

export default CategoryFilterContainer;
