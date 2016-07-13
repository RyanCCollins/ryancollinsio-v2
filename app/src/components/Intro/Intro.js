import React from 'react';
import './Intro.scss';
import { DownChevron } from 'components';
import IntroImage from './IntroImage';
import * as Constants from '../../constants';

const Intro = () => (
  <section className="intro">
    <div className="intro-header">
      <div className="intro-header__content">
        <IntroImage />
        <h1 className="intro-header__headline">{Constants.IntroHeadline}</h1>
        <h4 className="intro-header__subheadline">{Constants.IntroSubHeadline}</h4>
        <DownChevron section="aboutSection" />
      </div>
    </div>
  </section>
);

export default Intro;
