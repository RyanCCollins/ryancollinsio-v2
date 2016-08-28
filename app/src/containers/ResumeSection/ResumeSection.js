import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Divider,
  ResumeItem
} from '../../components';
import {
  Row,
  Column
} from 'react-foundation';
import './ResumeSection.scss';

const ResumeSection = ({
  resumeData
}) => (
  <section className="resume-section section-content gradient-blue" id="resume">
    <h1 className="section-header">Education</h1>
    <Divider />
    <Row className="resume-section__row-full">
      <Column small={12} medium={12} centerOnSmall>
        <Column small={12} medium={8} large={8} centerOnSmall>
          <div className="description-text description-text__full-width">
            <div className="description-paragraph-wrapper">
              <h4>
                Road to <strong>Mastery</strong>
              </h4>
              <p>
                {`Through open access and from
                    investing a tremendous amount of time and energy in education,
                    I believe that I am at the `}
                    <strong>forefront of the tech field</strong>.
              </p>
            </div>
            <div className="description-paragraph-wrapper">
              <h4><strong>Life-long Learning</strong></h4>
              <p>
                {`My educational path is to focus on Front End web mastery,
                    while studying academic subjects such as Data Science and
                    Human Computer Interaction.  I intend to receive my Master's
                    and at least one certification per year.`}
              </p>
            </div>
            <div className="description-paragraph-wrapper">
              <h4><strong>Practical & Academic</strong></h4>
              <p>
                {`I am very intrigued by the possibilities in implementing
                    cutting-edge computer science research into the mainstream.
                    Particularly, I am interested in the effect of
                    Functional Programming (Lambda Calculus) in
                    mainstream JavaScript web development.`}
              </p>
            </div>
          </div>
        </Column>
      </Column>
    </Row>
    <div className="container">
      <h1 className="section-header">Certifications</h1>
      <Divider />
      <Row>
        <Column
          isColumn
          large={12}
          medium={12}
          small={12}
          centerOnSmall
        >
          <div className="resume-panel-wrapper panel-group resume">
            {resumeData.education.degrees.map((degree, i) =>
              <ResumeItem
                degree={degree}
                key={degree.id}
                index={i}
              />
            )}
          </div>
        </Column>
      </Row>
    </div>
  </section>
);

ResumeSection.propTypes = {
  resumeData: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  resumeData: state.resumeData
});

export default connect(mapStateToProps)(ResumeSection);
