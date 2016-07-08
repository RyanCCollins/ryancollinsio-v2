import React, { PropTypes } from 'react';
import { Divider } from 'components';
import {
  ServicesSectionTwo,
  ServicesSectionOne,
  VideoSeries,
  Team
} from 'containers';
import './ServicesPage.scss';

const ServicesPage = props => (
  <div className="services-page-wrapper">
    <h1 className="section-header">Services</h1>
    <Divider />
    <div className="services-intro">
      <p>Included on this page are some of the services that I offer through the Hacksmiths platform.</p>
      <p>Although we offer these services to all of our members free of charge, we do welcome and appreciate donations to keep our platform running.</p>
      <p>Head on over to <a href="http://hacksmiths.io">Hacksmiths.io</a> for more information about the Hacksmiths.</p>
    </div>
    <ServicesSectionOne {...props} />
    <hr />
    <ServicesSectionTwo {...props} />
    <hr />
    <VideoSeries {...props} />
    <hr />
    <Team {...props} />
  </div>
);

export default ServicesPage;
