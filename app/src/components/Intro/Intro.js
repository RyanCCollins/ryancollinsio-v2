import React from 'react';
import './Intro.scss';
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import IntroImage from './IntroImage';

const DownChevron = () => (
  <div className="intro-header__chevron">
    <div href="#aboutSection">
      <ChevronDown className="intro-header__chevron-down" />
    </div>
  </div>
);

const headLine = 'I am Ryan Collins';
const subHeadline = 'I make Web and Mobile Apps';

const Intro = props => (
  <div className="intro">
    <div className="intro-header">
      <div className="intro-header__content">
        <IntroImage />
        <h1 className="intro-header__headline">{headLine}</h1>
        <h4 className="intro-header__subheadline">{subHeadline}</h4>
        <DownChevron />
      </div>
    </div>
  </div>
);

export default Intro;
