import React from 'react';
import './SkillSection.scss';
import { Divider, Skills } from '../../components';

const SkillSection = ({
  skills,
  skillSectionHeader
}) => (
  <div className="skill-section-container">
    <h1 className="section-header text-grey">{skillSectionHeader}</h1>
    <Divider />
    <Skills
      skills={skills}
    />
  </div>
);

export default SkillSection;
