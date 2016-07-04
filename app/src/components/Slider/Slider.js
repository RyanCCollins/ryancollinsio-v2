import React, { PropTypes } from 'react';
import Slick from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoPlaySpeed: 10000,
  arrows: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true
};


const Slider = ({
  children
}) => (
  <Slick {...settings}>
    {children}
  </Slick>
);

Slider.propTypes = {
  children: PropTypes.children
};

export default Slider;
