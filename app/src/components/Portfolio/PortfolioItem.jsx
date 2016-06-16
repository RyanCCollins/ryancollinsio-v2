import React from 'react';
import { Link } from 'react-router';
import { Row, Column, Thumbnail} from 'react-foundation';
import './Portfolio.scss';
import PortfolioOverlay from './PortfolioOverlay';

const PortfolioItem = ({
  project
}) => (
  <Row className="display">
    <Column small={8} centerOnSmall className="slideAndSpinAndFade">
      <div className="image-wrapper overlay-fade-in">
        <Thumbnail
          key={project.key}
          id={project.id}
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
