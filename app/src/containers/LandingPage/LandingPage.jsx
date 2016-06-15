import React from 'react';
import Intro from '../../components/Intro/Intro';
import AboutSection from '../../components/AboutSection/AboutSection';
import * as Constants from '../../constants';

import './LandingPage.scss';

const LandingPage = props => (
  <div className="landing-page">
    <Intro {...props}/>
    <AboutSection {...props}
      paragraphs={Constants.AboutSectionParagraphs}
    />
  </div>
);


export default LandingPage;
