import React, { PropTypes } from 'react';
import { Divider } from 'components';
import {
  Column,
  Label,
} from 'react-foundation';

const ProjectDesignPatterns = ({
  project
}) => (
  <Column className="project-design-patterns-section" small={12} large={8} isColumn centerOnSmall>
    <h1 className="section-header">Design Patterns</h1>
    <h4 className="section-sub-title">Notable design patterns used in development</h4>
    <Divider />
    <div className="callout">
      <p className="paragraph-text text-grey">
        {project.designPatterns.description}
      </p>
      <div className="tag-label-container">
        {project.designPatterns.tags.map((tag) =>
          <Label className="tag-label">
            {tag}
          </Label>
        )}
      </div>
    </div>
  </Column>
);

ProjectDesignPatterns.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectDesignPatterns;
