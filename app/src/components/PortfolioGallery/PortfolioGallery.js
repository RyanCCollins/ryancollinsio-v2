import React, { PropTypes, Component } from 'react';
import PhotoGallery from 'react-photo-gallery';
import './PortfolioGallery.scss';

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
