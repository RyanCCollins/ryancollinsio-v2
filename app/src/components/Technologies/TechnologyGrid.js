import React from 'react';
import { Row } from 'react-foundation';
import './TechnologyGrid.scss';
import TechnologGridItem from './TechnologyGridItem';

const TechnologyGrid = ({
  technologies
}) => (
  <div className="technology-grid" data-equalizer-watch data-equalize-by-row="true">
    <Row upOnSmall={2} upOnMedium={3} upOnLarge={4}>
      {technologies.map((tech) => (
        <TechnologGridItem
          key={tech.id}
          technology={tech}
        />
      ))}
    </Row>
  </div>
);

export default TechnologyGrid;
