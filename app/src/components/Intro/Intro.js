import React from 'react';
import './Intro.scss'
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import IntroImage from './IntroImage';

const DownChevron = () => (
  <div className="intro-header__chevron">
    <div href="#sectionTwo">
      <ChevronDown className="intro-header__chevron-down"></ChevronDown>
    </div>
  </div>
);

const Intro = props => (
  <div className="intro">
    <div className="intro-header">
      <div className="intro-header__content">
        <IntroImage />
        <h1 className="intro-header__headline">I am Ryan Collins</h1>
        <h4 className="intro-header__subheadline">I make Web and Mobile Apps</h4>
        <DownChevron />
      </div>
    </div>
  </div>
);

export default Intro;
