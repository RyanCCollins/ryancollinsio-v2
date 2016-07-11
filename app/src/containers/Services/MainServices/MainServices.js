import React, { PropTypes } from 'react';
import {
  Column,
  Row
} from 'react-foundation';
import './MainServices.scss';
import { PanelItem } from 'components';

const MainServices = ({
  services
}) => (
  <section className="main-services">
    <div className="main-services-list">
      {services.map((item, i) =>
        <PanelItem key={i} item={item} />
      )}
    </div>
  </section>
);

MainServices.propTypes = {
  services: PropTypes.array.isRequired
};

export default MainServices;
