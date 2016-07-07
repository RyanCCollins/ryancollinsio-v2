import React from 'react';
import './ServicesSectionOne.scss';
import {
  Column,
  Row,
  Button
} from 'react-foundation';
import {
  Divider
} from 'components';

const ServicesSectionOne = () => (
  <section className="services-section-one">
    <div className="section-title">Mentoring</div>
    <Divider />
    <Row>
      <Column
        large={8}
        medium={10}
        small={12}
        isColumn
        centerOnSmall
        className="services--paragraph-wrapper"
      >
        <p>Getting job ready is tough.  Through the <a href="https://hacksmiths.io">Hacksmiths.io</a> platform, we have proven that working on meaningful projects that are used by real people is one of the fastest ways into a job.</p>
        <p>Whether you are just starting out or are a seasoned developer, we can match you with an appropriate mentor who will work with you to get you in tip top shape.</p>
      </Column>
      <Column
        large={8}
        medium={10}
        small={12}
        isColumn
        centerOnSmall
        className="services__button-wrapper"
      >
        <Button size={'large'}>
          Contact Me
        </Button>
      </Column>
    </Row>
  </section>
);

export default ServicesSectionOne;
