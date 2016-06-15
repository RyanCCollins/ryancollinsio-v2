import React from 'react';
import './Intro.scss'
import ChevronDown from 'react-icons/lib/fa/chevron-down';
import Me from '../../../images/me.jpg';

const MeImage = () => (
  <img
    src={Me}
  />
)

const Intro = props => (
  <div className="intro">
    <div className="intro-header">
      <div className="intro-header__content">
        <MeImage />
        <h1 className="intro-header__headline">I am Ryan Collins</h1>
        <h4 className="intro-header__subheadline">I make Web and Mobile Apps</h4>
        <ChevronDown className="intro-header__chevron-down"></ChevronDown>
      </div>
    </div>
  </div>
);

export default Intro;
