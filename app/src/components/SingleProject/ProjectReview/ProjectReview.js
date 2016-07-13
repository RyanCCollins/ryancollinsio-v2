import React, { PropTypes } from 'react';
import {
  Column,
  Button
} from 'react-foundation';
import { Divider } from 'components';
import {
  GoQuote
} from 'react-icons/lib/go';

const ProjectReview = ({
  project
}) => (
  <Column className="review-section" small={12} large={8} isColumn centerOnSmall>
    <h1 className="section-header">Expert Technical Review</h1>
    <h4 className="section-sub-title">Feedback from an expert code reviewer</h4>
    <Divider />
    <div className="project-review callout">
      <blockquote>
        <p className="paragraph-text text-grey">
          "{project.technicalReview.snippet}"
        </p>
        <cite>
          {project.technicalReview.author ?
            project.technicalReview.author
          :
            'Expert Code Reviewer'
          }
          <span className="quote-mark">
            <GoQuote
              className="quotation-icon"
            />
          </span>
        </cite>
      </blockquote>
    </div>
    <div className="review-button-container">
      <Button className="large hollow button__golden button__center">
        <a className="review-link" href={project.technicalReview.url}>Read the review</a>
      </Button>
    </div>
  </Column>
);

ProjectReview.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectReview;
