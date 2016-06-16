import React from 'react';
import './Intro.scss';
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import IntroImage from './IntroImage';
import * as Constants from '../../constants';

const DownChevron = () => (
  <div className="intro-header__chevron">
    <div href="#about-section">
      <ChevronDown className="intro-header__chevron-down" />
    </div>
  </div>
);

const Intro = props => (
  <div className="intro">
    <div className="intro-header">
      <div className="intro-header__content">
        <IntroImage />
        <h1 className="intro-header__headline">{Constants.IntroHeadline}</h1>
        <h4 className="intro-header__subheadline">{Constants.IntroSubHeadline}</h4>
        <DownChevron />
      </div>
    </div>
  </div>
);

export default Intro;
