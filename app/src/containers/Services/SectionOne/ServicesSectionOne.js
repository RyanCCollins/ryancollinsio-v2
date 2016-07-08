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
  <div className="services-section-one">
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
        <p>Through the <a href="https://hacksmiths.io">Hacksmiths.io</a> platform, we have proven that working collaboratively on meaningful open sources projects together is an incredible way to improve skills.</p>
        <p>If you are interested in working with us on a meaningful project with a social impact, we can pair you with a mentor who will work with you to get you up to speed with React and the rest of our stack.</p>
        <p>You'll get an oppurtunity to work with a real-life distributed agile team, working towards a common goal of social good.</p>
      </Column>
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
  </div>
);

export default ServicesSectionOne;
