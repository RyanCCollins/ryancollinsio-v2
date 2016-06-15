import React from 'react';
import Intro from '../../components/Intro/Intro';
import AboutSection from '../../components/AboutSection/AboutSection';
import TechnologySection from '../../containers/TechnologySection/TechnologySection';
import * as Constants from '../../constants';

import './LandingPage.scss';

const LandingPage = props => (
  <div className="landing-page">
    <Intro {...props}/>
    <AboutSection {...props}
      paragraphs={Constants.AboutSectionParagraphs}
    />
  <TechnologySection
    technologies={Constants.Technologies}
  />
  </div>
);


export default LandingPage;
