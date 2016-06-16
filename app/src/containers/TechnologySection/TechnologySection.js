import React from 'react';
import './TechnologySection.scss';
import { Technologies } from '../../components';

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
