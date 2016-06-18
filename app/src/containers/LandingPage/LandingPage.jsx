import React from 'react';
import Intro from '../../components/Intro/Intro';
import AboutSection from '../../components/AboutSection/AboutSection';
import TechnologySection from '../../containers/TechnologySection/TechnologySection';
import SkillSection from '../../containers/SkillSection/SkillSection';
import { LanguageSection } from '../../containers';

import * as Constants from '../../constants';

import './LandingPage.scss';

const LandingPage = props => (
  <div className="landing-page">
    <Intro {...props}
      headline={Constants.IntroHeadline}
      subHeadline={Constants.IntroSubHeadline}
    />
    <AboutSection {...props}
      paragraphs={Constants.AboutSectionParagraphs}
    />
    <SkillSection {...props}
      skills={Constants.Skills}
      skillSectionHeader={Constants.SkillSectionHeader}
    />
    <LanguageSection
      languages={Constants.Languages}
      languageSectionHeader={Constants.LanguageSectionHeader}
    />
    <TechnologySection {...props}
      technologies={Constants.Technologies}
      technologyHeader={Constants.technologyHeader}
    />
  </div>
);


export default LandingPage;
