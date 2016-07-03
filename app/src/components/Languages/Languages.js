import React, { PropTypes } from 'react';
import { Column, Row } from 'react-foundation';
import CircleChart from '../CircleChart/CircleChart';

const Languages = ({
  languages
}) => (
  <div className="circle-chart">
    <Row>
      {languages.map((language, i) => (
        <Column key={i} small={4} large={2} isColumn>
          <CircleChart
            item={language}
          />
        </Column>
      ))}
    </Row>
  </div>
);

Languages.propTypes = {
  languages: PropTypes.array.isRequired
};

export default Languages;
