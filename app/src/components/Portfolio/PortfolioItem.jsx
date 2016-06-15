import React from 'react';
import { Link } from 'react-router';
import { Row, Column, Thumbnail} from 'react-foundation';

const PortfolioItem = ({
  project,
  i
}) => (
  <figure className="grid-figure">
    <Row className="display">
      <Column small={8} centerOnSmall className="slideAndSpinAndFade">
        <Thumbnail
          src={project.featureImage}
          className="portfolio-image"
        />
      </Column>
    </Row>
   </figure>
);

export default PortfolioItem;
