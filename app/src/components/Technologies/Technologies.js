import React from 'react';
import TechnologyGrid from './TechnologyGrid';

const Technologies = ({
  technologies
}) => (
  <div className="technologies-wrapper">
    <TechnologyGrid
      technologies={technologies}
    />
  </div>
);

export default Technologies;
