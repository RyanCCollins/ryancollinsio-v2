import React from 'react';
import Slick from 'react-slick';

const Slider = ({
  settings,
  children
}) => (
  <Slider {...settings}>
    {children}
  </Slider>
);

export default Slider;
