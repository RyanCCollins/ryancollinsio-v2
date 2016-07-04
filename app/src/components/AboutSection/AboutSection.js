import React from 'react';
import {
  Row,
  Column,
  Button
} from 'react-foundation';
import { Link } from 'react-router';
import './AboutSection.scss';
import Divider from '../Divider/Divider';
import Me from '../../../images/me.jpg';
import {
  AboutP1,
  AboutP2,
  AboutP3,
  AboutP4,
  AboutP5
} from './AboutSectionParagraphs';
import { Element as ScrollDest } from 'react-scroll';

const MeImage = () => (
  <div className="me-image-wrapper">
    <img
      src={Me}
      alt="Ryan Collins"
      className="me-image"
    />
    <h4
      className="title uppercase text-white text__fit-width"
    >
      Creative Developer
    </h4>
  </div>
);

const AboutSection = (props) => (
  <section className="about-section" id="aboutSection">
    <h1 className="about-section__header section-header text-grey">About Me</h1>
    <ScrollDest name="aboutSection" />
    <Divider />
    <div className="container">
      <Row className="display about-section__wrapper">
        <Column small={12} medium={12} large={7}>
          <div className="about-section__paragraph">
            <div className="description-text">
              <AboutP1 />
              <AboutP2 />
            </div>
          </div>
        </Column>
        <Column className="show-for-large-up" medium={0} small={0} large={1}></Column>
        <Column small={6} medium={6} large={4} centerOnSmall className="hide-for-xs-only">
          <MeImage />
        </Column>
      </Row>
      <hr className="section-divider" />
      <Row className="about-section__row-full">
        <Column small={12} medium={12} centerOnSmall>
          <div className="description-text description-text__full-width">
            <AboutP3 />
            <AboutP4 />
            <AboutP5 />
          </div>
        </Column>
      </Row>
      <Row className="resume-button-row">
        <Column small={4} centerOnSmall>
          <Link to="/resume/view" className="button__flex-wrapper">
            <Button isHollow className="large button__golden">
              View Resume
            </Button>
          </Link>
        </Column>
      </Row>
    </div>
  </section>
);


export default AboutSection;
