import React from 'react';
import { Button } from 'react-foundation';

const TechnologyCategoryLabel = ({
  category
}) => (
  <Button size='small'>
    {category}
  </Button>
);

export default TechnologyCategoryLabel;
