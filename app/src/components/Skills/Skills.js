import React, { PropTypes } from 'react';
import { Row, Column } from 'react-foundation';
import './Skills.scss';
import SkillItemBarChart from './SkillItemBarChart';

const Skills = ({
  skills
}) => (
  <Row>
    <Column small={12} isColumn>
      {skills.map((skill) => (
        <SkillItemBarChart
          skill={skill}
        />
      ))}
    </Column>
  </Row>
);

Skills.propTypes = {
  skills: PropTypes.array.isRequired
};

export default Skills;
