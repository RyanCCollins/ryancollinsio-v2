import React from 'react';
import Technologies from '../../components/Technologies/Technologies';
import './TechnologySection.scss';

const TechnologySection = ({
  technologies,
  technologyHeader
}) => (
  <div className="section__off-white section-technologies">
    <Technologies
      technologies={technologies}
      technologyHeader={technologyHeader}
    />
  </div>
);

export default TechnologySection;
