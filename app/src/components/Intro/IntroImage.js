import React from 'react';
import Me from '../../../images/me.jpg';
import './IntroImage.scss';

const IntroImage = () => (
  <img
    alt="An image of Ryan"
    src={Me}
    className="intro-image"
  />
);

export default IntroImage;
