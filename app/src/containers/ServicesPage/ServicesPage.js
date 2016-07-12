import React, { PropTypes } from 'react';
import { Divider } from 'components';
import {
  ServicesSectionTwo,
  ServicesSectionOne,
  VideoSeries,
  Team,
  MainServices,
  Footer
} from 'containers';
import {
  Column,
  Row,
  Button
} from 'react-foundation';
import './ServicesPage.scss';
import { connect } from 'react-redux';

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
        <p>Included on this page are some of the services that I offer as an Independant Consultant.</p>
      </div>
      </Column>
      <MainServices services={props.services} />
      <Column
        large={8}
        medium={10}
        small={12}
        isColumn
        centerOnSmall
        className="services__button-wrapper"
      >
        <Button size={'large'} className="button__contact">
          <a href="mailto:admin@ryancollins.io">Contact Me</a>
        </Button>
      </Column>
    </Row>
    <hr />
    <ServicesSectionOne {...props} />
    <hr />
    <ServicesSectionTwo {...props} />
    <Team {...props} />
    <VideoSeries {...props} />
    <Footer />
  </div>
);

ServicesPage.propTypes = {
  services: PropTypes.array.isRequired
};

const mapStateToProps = (state) => ({
  services: state.services
});

export default connect(mapStateToProps)(ServicesPage);
