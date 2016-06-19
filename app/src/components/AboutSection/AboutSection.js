import React from 'react';
import {
  Row,
  Column,
  Button,
  MediaObject,
  MediaObjectSection
} from 'react-foundation';
import { Link } from 'react-router';
import './AboutSection.scss';
import Divider from '../Divider/Divider';
import Me from '../../../images/me.jpg';

const MeImage = () => (
  <div className="me-image-wrapper">
    <img
      src={Me}
      alt="Ryan Collins"
      className="me-image"
    />
    <h4 className="title uppercase text-white">Creative Developer</h4>
  </div>
);

const AboutMeParagraphs = ({
  paragraphs
}) => (
  <div className="about-section__paragraph-wrapper dark-grey text-medium">
    {paragraphs.map((para) => <p className="">{para}</p>)}
  </div>
);

const AboutSection = (props) => (
  <section className="about-section" id="aboutSection">
    <h1 className="about-section__header section-header text-grey">About Me</h1>
    <Divider />
    <Row className="display about-section__wrapper">
      <Column small={12} large={4} hideForSmall>
        <MeImage />
      </Column>
      <Column small={12} large={8} centerOnSmall>
        <div className="callout about-section__paragraph">
          <AboutMeParagraphs
            paragraphs={props.paragraphs}
          />
        </div>
      </Column>
    </Row>
    <Row className="resume-button-row">
      <Column small={3} centerOnSmall>
        <Link to="/contact">
          <Button isHollow className="large button__golden">
            Download Resume
          </Button>
        </Link>
      </Column>
    </Row>
  </section>
);

export default AboutSection;
