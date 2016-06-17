import React from 'react';
import { Row, Column, Thumbnail } from 'react-foundation';
import './Portfolio.scss';
import PortfolioOverlay from './PortfolioOverlay';

const PortfolioItem = ({
  project
}) => (
  <Row className="display portfolio-item">
    <Column small={8} centerOnSmall>
      <div className="image-wrapper overlay-fade-in">
        <Thumbnail
          src={project.featureImage}
          className="portfolio-image"
        />
        <PortfolioOverlay
          project={project}
        />
      </div>
    </Column>
  </Row>
);

export default PortfolioItem;
