import React, { PropTypes } from 'react';
import { Divider } from 'components';
import {
  ServicesSectionTwo,
  ServicesSectionOne,
  VideoSeries,
  Team
} from 'containers';
import {
  Column,
  Row
} from 'react-foundation';
import './ServicesPage.scss';

const ServicesPage = props => (
  <div className="services-page-wrapper">
    <h1 className="section-header">Services</h1>
    <Divider />
    <Row>
      <Column
        large={8}
        medium={10}
        small={12}
        isColumn
        centerOnSmall
        className="services--intro-wrapper"
      >
      <div className="services-intro">
        <p>Included on this page are some of the services that I offer through as an independant consultant.</p>
        <p>In some cases, I will connect you to some of my colleaguew through the Hacksmiths platform if you are seeking a specific set of skills that are better handled by someone else.</p>
        <p>Head on over to <a href="http://hacksmiths.io">Hacksmiths.io</a> for more information about the Hacksmiths Platform and what we do.</p>
      </div>
      </Column>
    </Row>
    <hr />
    <ServicesSectionOne {...props} />
    <hr />
    <ServicesSectionTwo {...props} />
    <Team {...props} />
    <VideoSeries {...props} />
    <div className="big-empty-row"></div>
  </div>
);

export default ServicesPage;
