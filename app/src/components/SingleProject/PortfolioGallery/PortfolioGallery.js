import React, { PropTypes } from 'react';
import PhotoGallery from 'react-photo-gallery';
import './PortfolioGallery.scss';

const PortfolioGallery = ({
  images
}) => (
  <div className="photo-gallery-wrapper">
    <PhotoGallery photos={images} />
  </div>
);

PortfolioGallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default PortfolioGallery;
