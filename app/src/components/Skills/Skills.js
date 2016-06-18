import React from 'react';

const Skills = ({
  skills
}) => (
  <Row>
    {skills.map((skill) => (
      <SkillGraphItem
        skill={skill}
      />
    ))}
  </Row>
);

export default Skills;
