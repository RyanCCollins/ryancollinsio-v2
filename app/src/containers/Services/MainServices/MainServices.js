import React, { PropTypes } from 'react';
import {
  Column,
  Row
} from 'react-foundation';

const MainServiceItem = ({
  item
}) => (
  <Column small={12} medium={6} large={12} className={`item match-height ${item.id > 2 ? 'bottom' : 'top'}`}>
    <div className="inner-content">
      <i></i>
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  </Column>
);

const MainServices = ({
  services
}) => (
  <Row>
    <Column isColumn small={12} medium={12} large={12}>
      {services.map((item) =>
        <MainServiceItem item={item} />
      )}
    </Column>
  </Row>
);

export default MainServices;