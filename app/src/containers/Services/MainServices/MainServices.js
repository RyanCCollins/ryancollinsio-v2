import React, { PropTypes } from 'react';
import {
  Column,
  Row
} from 'react-foundation';
import './MainServices.scss';
import { PanelItem } from 'components';
import {
  GoDatabase,
  GoDeviceMobile,
  GoBrowser,
  GoPlug,
  GoCalendar,
  GoLightBulb
} from 'react-icons/lib/go';

const ServiceIcon = ({
  id
}) => (
  <span className="text-xlarge primary-color centered pb-2">
    {(() => {
      switch (id) {
        case 0:
          return <GoBrowser />;
        case 1:
          return <GoDeviceMobile />;
        case 2:
          return <GoPlug />;
        case 3:
          return <GoDatabase />;
        case 4:
          return <GoCalendar />;
        case 5:
          return <GoLightBulb />;
        default:
          return undefined;
      }
    })()}
  </span>
);

ServiceIcon.propTypes = {
  id: PropTypes.number.isRequired
};

const MainServices = ({
  services
}) => (
  <section className="main-services">
    <div className="main-services-list">
      {services.map((item) =>
        <PanelItem
          icon={<ServiceIcon id={item.id} />}
          key={item.id}
          item={item}
        />
      )}
    </div>
  </section>
);

MainServices.propTypes = {
  services: PropTypes.array.isRequired
};

export default MainServices;
