import React from 'react';
import './Intro.scss';
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import IntroImage from './IntroImage';
import * as Constants from '../../constants';
import { Link as ScrollTo } from 'react-scroll';

const DownChevron = () => (
  <div className="intro-header__chevron">
    <ScrollTo
      to="aboutSection"
      spy
      smooth
      offset={50}
      duration={800}
    >
      <ChevronDown className="intro-header__chevron-down" />
    </ScrollTo>
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
