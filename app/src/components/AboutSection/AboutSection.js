import React from 'react';
import { Row, Column } from 'react-foundation';
import './AboutSection.scss';
import Divider from '../Divider/Divider';

const AboutMeParagraphs = ({
  paragraphs
}) => (
  <div className="about-section__paragraph-wrapper dark-grey text-medium">
    {paragraphs.map((para) => <p>{para}</p>)}
  </div>
);

const AboutSection = (props) => (
  <div className="about-section" id="aboutSection">
    <h1 className="about-section__header section-header">About Me</h1>
    <Divider />
    <Row className="display about-section__paragraph">
      <Column small={8} centerOnSmall>
        <AboutMeParagraphs
          paragraphs={props.paragraphs}
        />
      </Column>
    </Row>
  </div>
);

export default AboutSection;
