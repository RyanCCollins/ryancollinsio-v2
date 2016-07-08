import React, { PropTypes } from 'react';
import Slick from 'react-slick';
import {
  FaAngleDoubleRight,
  FaAngleDoubleLeft
} from 'react-icons/lib/fa';

const RightArrow = () => (
  <div className="slick-right-arrow">
    <FaAngleDoubleRight className="icon-medium icon-white" />
  </div>
);

const LeftArrow = () => (
  <div className="slick-left-arrow">
    <FaAngleDoubleLeft className="icon-medium" />
  </div>
);

const settings = {
  dots: true,
  infinite: true,
  speed: 10000,
  autoplay: true,
  autoPlaySpeed: 20000,
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
