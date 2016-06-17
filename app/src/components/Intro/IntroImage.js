import React from 'react';
import Me from '../../../images/crown.png';

const IntroImage = () => (
  <div className="logo-wrap">
    <img
      alt="An image of a crown"
      src={Me}
      className="intro-image"
    />
    <div className="logo-text-wrap">
      <h1 className="logo-text">RC</h1>
    </div>
  </div>
);

export default IntroImage;
