import React from 'react';
import { Row, Column, Thumbnail } from 'react-foundation';
import './TechnologyGrid.scss';

const TechnologyGrid = ({
  technologies
}) => (
  <div className="technology-grid">
    <Row upOnSmall={1} upOnMedium={2} upOnLarge={3}>
      {technologies.map((tech) => {
        <Column isColumn>
          <Thumbnail src={tech.imageUrl} />
          <h4 className="caption">{tech.name}</h4>
        </Column>
      })}
    </Row>
  </div>
);

export default TechnologyGrid;
