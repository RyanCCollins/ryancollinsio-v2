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

const paragraph1P1 = `Through the `
const paragraph1P2 = ` platform, we have proven that working collaboratively on 
  meaningful open sources projects together is an incredible way to improve skills.`

const paragraph2 = `If you are interested in working with us on a meaningful project with 
  a social impact, we can pair you with a mentor who will work with you 
  to get you up to speed with React and the rest of our stack.`;
  
const paragraph3 = `You'll get an oppurtunity to work with 
  a real-life distributed agile team, working towards a common goal of social good.`;

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
        <p>{paragraph1P1}<a href="https://hacksmiths.io">Hacksmiths.io</a> {paragraph1P2}</p>
        <p>{paragraph2}</p>
        <p>{paragraph3}</p>
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
  </section>
);

export default ServicesSectionOne;
