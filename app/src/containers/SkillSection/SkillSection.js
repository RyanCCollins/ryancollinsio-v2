import React from 'react';
import './SkillSection.scss';
import { Divider } from '../../components';

const SkillSection = ({
  skills,
  skillSectionHeader
}) => (
  <div className="skill-section-container">
    <h1 className="section-header text-grey">{skillSectionHeader}</h1>
    <Divider />
    {skills.map((skill) => (
      <div className="skill">{skill.name}</div>
    ))}
  </div>
);

export default SkillSection;
