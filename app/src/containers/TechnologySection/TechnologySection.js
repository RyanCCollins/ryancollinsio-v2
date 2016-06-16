import React from 'react';
import { Technologies } from '../../components';

const TechnologySection = ({
  technologies
}) => (
  <div className="section-technologies">
    <Technologies
      technologies={technologies}
    />
  </div>
);

export default TechnologySection;
