import React from 'react';
import './ServicesSectionTwo.scss';
import {
  Column,
  Row,
  Button
} from 'react-foundation';
import {
  Divider
} from 'components';

import CodeReviewImage from './code-review.jpg';
import DesignReviewImage from './design-review.jpg';

const CodeReview = () => (
  <img
    src={CodeReviewImage}
    alt="Two asian women reviewing code at a computer monitor"
    className="code-review-image img-responsive img-rounded"
  />
);

const DesignReview = () => (
  <img
    className="design-review-image img-responsive img-rounded"
    alt="Paper with design mockups of logos on it."
    src={DesignReviewImage}
  />
);

const ServicesSectionTwo = () => (
  <div className="services-section-one">
    <div className="section-title">Code Reviews</div>
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
        <p>Writing clean and precise code is so incredibly important to success as an engineer.</p>
        <p>At Hacksmiths, we have built a team of experienced code and deisign reviewers.</p>
        <p>If you want to improve the quality of your code, need training on a new subject like React, Redux, Functional Programming, etc., get in touch and we'll see what we can do.</p>
      </Column>
    </Row>
    <Row className="review-wrapper">
      <Column large={4} medium={6} small={12}>
        <CodeReview />
      </Column>
      <Column large={8} medium={6} small={12}>
        <h4 className="centered raleway-header">Code Reviews</h4>
        <p>A one hour code review of 500 lines of code generally results in the elimination of 70-90% of software defects.</p>
        <p>I, or one of the Hacksmiths community mentors, can work with you to help apply industry best practices to your work.</p>
      </Column>
    </Row>
    <Row className="review-wrapper">
      <Column large={8}>
        <h4 className="centered raleway-header">Design Reviews</h4>
        <p>A design review is a milestone within the product development lifecycle whereby the design of your product is evaluated according to its requirements.</p>
        <p>One of our professional designers with work with you to ensure that your end users will love your product.</p>
      </Column>
      <Column large={4}>
        <DesignReview />
      </Column>
    </Row>
    <Row>
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

export default ServicesSectionTwo;
