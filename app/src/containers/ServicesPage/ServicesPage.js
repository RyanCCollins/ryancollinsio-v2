import React, { PropTypes } from 'react';
import { Divider } from 'components';
import {
  ServicesSectionTwo,
  ServicesSectionOne
} from 'containers';
import './ServicesPage.scss';

const ServicesPage = props => (
  <div className="services-page-wrapper">
    <h1 className="section-header">Services</h1>
    <Divider />
    <ServicesSectionOne {...props} />
    <ServicesSectionTwo {...props} />
  </div>
);

export default ServicesPage;
