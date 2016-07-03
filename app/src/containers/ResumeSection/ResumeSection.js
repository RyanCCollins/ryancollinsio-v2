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
  <section className="resume-section section-content gradient-blue">
    <h1 className="section-header">Qualifications</h1>
    <Divider />
    <div className="container">
      <Row>
        <Column
          isColumn
          large={8}
          medium={10}
          small={12}
          centerOnSmall
        >
          <div className="resume-panel-wrapper">
            {resumeData.education.degrees.map((degree) =>
              <ResumeItem degree={degree} key={degree.id} />
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
