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
    <h1 className="section-header">Qualifications</h1>
    <Divider />
    <Row className="resume-section__row-full">
      <Column small={12} medium={12} centerOnSmall>
        <div className="description-text description-text__full-width">
          Hello World
        </div>
      </Column>
    </Row>
    <div className="container">
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
