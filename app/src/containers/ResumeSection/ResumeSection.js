import React from 'react';
import { Column, Row } from 'react-foundation';
import {
  Divider
} from '../../components';
import './ResumeSection.scss';

const ResumeSection = ({
  resumeData
}) => (
  <section className="resume-section section-content gradient-blue">
    <h1 className="section-header">Qualifications</h1>
    <Divider />
  </section>
);

export default ResumeSection;
