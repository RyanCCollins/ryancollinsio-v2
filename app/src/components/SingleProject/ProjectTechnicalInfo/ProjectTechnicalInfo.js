import React, { PropTypes } from 'react';
import {
  Column,
  Label
} from 'react-foundation';
import { Divider } from 'components';

const ProjectTechnicalInfo = ({
  project
}) => (
  <Column
    className="project-technical-info-section"
    small={12}
    large={8}
    isColumn
    centerOnSmall
  >
    <h1 className="section-header">Technical Information</h1>
    <h4 className="section-sub-title">
      Overview of technologies and best practices used
    </h4>
    <Divider />
    <div className="project-techinical-info callout">
      <p className="paragraph-text text-grey">
        {project.technicalInformation.description}
      </p>
      <div className="tag-label-container">
        {project.technicalInformation.tags.map((tag, i) =>
          <Label key={i} className="tag-label">{tag}</Label>
        )}
      </div>
    </div>
  </Column>
);

ProjectTechnicalInfo.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectTechnicalInfo;
