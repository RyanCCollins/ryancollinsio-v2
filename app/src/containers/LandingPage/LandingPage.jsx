import React from 'react';
import Intro from '../../components/Intro/Intro';
import AboutSection from '../../components/AboutSection/AboutSection';
import TechnologySection from '../../containers/TechnologySection/TechnologySection';
import SkillSection from '../../containers/SkillSection/SkillSection';
import {
  LanguageSection,
  ResumeSection,
  ReferenceSection
} from '../../containers';

import * as Constants from '../../constants';
import './LandingPage.scss';

const LandingPage = props => (
  <div className="landing-page">
    <Intro
      {...props}
      headline={Constants.IntroHeadline}
      subHeadline={Constants.IntroSubHeadline}
    />
    <AboutSection
      {...props}
      paragraphs={Constants.AboutSectionParagraphs}
    />
    <section className="skills">
      <SkillSection
        {...props}
        skills={Constants.Skills}
        skillSectionHeader={Constants.SkillSectionHeader}
      />
      <LanguageSection
        {...props}
        languages={Constants.Languages}
        languageSectionHeader={Constants.LanguageSectionHeader}
      />
    </section>
    <ResumeSection
      {...props}
    />
    <ReferenceSection
      {...props}
    />
    <TechnologySection
      {...props}
      technologies={Constants.Technologies}
      technologyHeader={Constants.technologyHeader}
    />
  </div>
);


export default LandingPage;
