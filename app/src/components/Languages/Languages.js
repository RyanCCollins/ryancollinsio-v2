import React from 'react';
import { Column, Row } from 'react-foundation';
import CircleChart from '../CircleChart/CircleChart';

const Languages = ({
  languages
}) => (
  <div className="circle-chart">
    <Row>
      {languages.map((language) => (
        <Column small={4} large={2} isColumn>
          <CircleChart
            item={language}
          />
      </Column>
      ))}
    </Row>
  </div>
);

export default Languages;
