import React, { PropTypes } from 'react';
import PhotoGallery from 'react-photo-gallery';

const PortfolioGallery = ({
  project
}) => (
  <div className="photo-gallery-wrapper">
    <PhotoGallery photos={project.images} />
  </div>
);

PortfolioGallery.propTypes = {
  project: PropTypes.object.isRequired
};

export default PortfolioGallery;
