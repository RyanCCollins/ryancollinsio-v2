import React, { PropTypes } from 'react';
import { Divider } from 'components';
import {
  ServicesSectionTwo,
  ServicesSectionOne,
  VideoSeries
} from 'containers';
import './ServicesPage.scss';

const ServicesPage = props => (
  <div className="services-page-wrapper">
    <h1 className="section-header">Services</h1>
    <Divider />
    <div className="services-intro">
      <p></p>
    </div>
    <ServicesSectionOne {...props} />
    <hr />
    <ServicesSectionTwo {...props} />
    <hr />
    <VideoSeries {...props} />
  </div>
);

export default ServicesPage;
