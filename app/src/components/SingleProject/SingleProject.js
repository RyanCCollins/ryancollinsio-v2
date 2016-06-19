import React from 'react';
import './SingleProject.scss';
import {
  Row,
  Column,
  Thumbnail,
  Label,
  Button
} from 'react-foundation';
import Divider from '../Divider/Divider';

const ProjectTechnicalInformation = ({
  technicalInfo
}) => (
  <Column className="project-technical-info-section" small={12} large={8} isColumn centerOnSmall>
    <h1 className="section-header">Technical Information</h1>
    <h4 className="section-sub-title">Trade Secrets</h4>
    <Divider />
    <div className="project-techinical-info callout">
      <p className="paragraph-text text-grey">
        {technicalInfo.description}
      </p>
      <div className="tag-label-container">
        {technicalInfo.tags.map((tag) => <Label className="tag-label">{tag}</Label>)}
      </div>
    </div>
  </Column>
);

const ProjectReview = ({
  review
}) => (
  <Column className="review-section" small={12} large={8} isColumn centerOnSmall>
    <h1 className="section-header">Expert Technical Review</h1>
    <h4 className="section-sub-title">Feedback from an expert code reviewer</h4>
    <Divider />
    <div className="project-review callout">
      <blockquote>
        <p className="paragraph-text text-grey">
          {review.snippet}
        </p>
        <cite>
          {review.author ?
            review.author
          :
            'Expert Code Reviewer'
          }
        </cite>
      </blockquote>
    </div>
    <div className="review-button-container">
      <Button className="large hollow button__golden button__center">
        <a className="review-link" href={review.url}>Read the review</a>
      </Button>
    </div>
  </Column>
);

const ProjectMilestones = ({
  milestones
}) => (
  <Column className="milestones-section" small={12} large={8} isColumn centerOnSmall>
    <h1 className="section-header">Milestones</h1>
    <Divider />
    <div className="project-milestones callout">
      <ul>
        {milestones.map((milestone) =>
          <li>
            <p className="paragraph-text">
              {milestone}
            </p>
          </li>)
        }
      </ul>
    </div>
  </Column>
);

const SingleProject = ({
  project
}) => (
  <div className="single-project">
    <h1 className="section-header">{project.title}</h1>
    <h4 className="section-sub-title">{project.type}</h4>
    <Divider />
    <Row>
      <Column small={12} large={8} isColumn centerOnSmall>
        <Thumbnail
          src={project.featureImage}
        />
      </Column>
      <Column small={12} large={8} isColumn centerOnSmall>
        <div className="project-caption callout">
          <p className="paragraph-text">{project.caption}</p>
        </div>
      </Column>
      <Column small={12} large={8} isColumn centerOnSmall>
        <h1 className="section-header">Project Description</h1>
        <Divider />
        <div className="project-description callout">
          <p className="paragraph-text">{project.description}</p>
        </div>
      </Column>
      {project.milestones ?
        <ProjectMilestones
          milestones={project.milestones}
        />
      :
        <div></div>
      }
      {project.technicalReview ?
        <ProjectReview
          review={project.technicalReview}
        />
      :
        <div></div>
      }
      {project.technicalInformation ?
        <ProjectTechnicalInformation
          technicalInfo={project.technicalInformation}
        />
      :
        <div></div>
      }
    </Row>
  </div>
);

export default SingleProject;
