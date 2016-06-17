import React from 'react';
import { Row, Column, Thumbnail } from 'react-foundation';
import './TechnologyGrid.scss';

const TechnologyGrid = ({
  technologies
}) => (
  <div className="technology-grid" data-equalizer-watch data-equalize-by-row="true">
    <Row upOnSmall={1} upOnMedium={2} upOnLarge={3}>
      {technologies.map((tech) => (
        <Column isColumn className="technology-grid-item-wrapper">
          <div className="callout technology-grid-item" data-equalizer-watch>
            <Thumbnail className="technology-grid-item__image" src={tech.imageUrl} />
            <h4 className="technology-grid-item__caption">{tech.name}</h4>
          </div>
        </Column>
      ))}
    </Row>
  </div>
);

export default TechnologyGrid;
