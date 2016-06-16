import React from 'react';
import { Row, Column, Thumbnail } from 'react-foundation';
import './TechnologyGrid.scss';

const TechnologyGrid = ({
  technologies
}) => (
  <div className="technology-grid">
    <Row upOnSmall={1} upOnMedium={2} upOnLarge={4}>
      {technologies.map((tech) => (
        <Column isColumn className="technology-grid-item-wrapper">
            <Thumbnail
              src={tech.imageUrl}
              className="technology-grid-item"
              key={tech.id}
            />
          <h4 className="technology-grid-item__caption">{tech.name}</h4>
        </Column>
      ))}
    </Row>
  </div>
);

export default TechnologyGrid;
