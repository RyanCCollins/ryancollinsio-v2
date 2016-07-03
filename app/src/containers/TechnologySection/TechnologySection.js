import React, { PropTypes } from 'react';
import './TechnologySection.scss';
import { Technologies } from '../../components';

const TechnologySection = ({
  technologies,
  technologyHeader
}) => (
  <section className="section__off-white section-technologies">
    <Technologies
      technologies={technologies}
      technologyHeader={technologyHeader}
    />
  </section>
);

TechnologySection.propTypes = {
  technologies: PropTypes.array.isRequired,
  technologyHeader: PropTypes.string.isRequired
};

export default TechnologySection;
