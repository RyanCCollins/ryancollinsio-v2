import React, { PropTypes } from 'react';
import {
  Column,
  Row
} from 'react-foundation';
import './MainServices.scss';

const MainServiceItem = ({
  item
}) => (
  <Column
    small={12}
    medium={6}
    large={4}
    className={`item match-height ${item.id > 2 ? 'bottom' : 'top'}`}
  >
    <div className="inner-content">
      <h4>{item.title}</h4>
      <p>{item.description}</p>
    </div>
  </Column>
);

const MainServices = ({
  services
}) => (
  <section className="main-services">
    <Row>
      <Column isColumn small={12} medium={12} large={12}>
        {services.map((item, i) =>
          <MainServiceItem key={i} item={item} />
        )}
      </Column>
    </Row>
  </section>
);

export default MainServices;