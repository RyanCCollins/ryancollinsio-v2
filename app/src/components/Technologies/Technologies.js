import React from 'react';
import TechnologyGrid from './TechnologyGrid';
import Divider from '../Divider/Divider';

const Technologies = ({
  technologies
}) => (
  <div className="technologies-wrapper">
    <h1 className="section-header text-grey">Technologies I Love to Use</h1>
    <Divider />
    <TechnologyGrid
      technologies={technologies}
    />
  </div>
);

export default Technologies;
