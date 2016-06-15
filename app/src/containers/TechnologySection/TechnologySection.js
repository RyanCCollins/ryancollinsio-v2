import React from 'react';
import Technologies from '../../components/Technologies';

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
