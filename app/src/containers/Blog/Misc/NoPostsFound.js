import React from 'react';
import {
  Row,
  Column
} from 'react-foundation';

// categoryText :: Object -> String 
const categoryText = (selectedCategory) =>
  selectedCategory.name !== 'All' ?
    `No Posts in the ${selectedCategory.name} category.`
  :
    'No Posts Found';

const NoPostsFound = ({
  selectedCategory
}) => (
  <Row>
    <Column isColumn small={12} large={6} centerOnSmall>
      <div className="no-posts">
        <h4 className="no-posts-text">
          {categoryText(selectedCategory)}
        </h4>
      </div>
    </Column>
  </Row>
);

NoPostsFound.propTypes = {
  selectedCategory: React.PropTypes.object.isRequired
};

export default NoPostsFound;
