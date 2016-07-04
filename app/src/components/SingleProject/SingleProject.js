import React from 'react';
import './SingleProject.scss';
import {
  Row,
  Column,
  Thumbnail,
  Label,
  Button
} from 'react-foundation';
import PortfolioGallery from './PortfolioGallery';
import AppStoreButton from '../AppStoreButton/AppStoreButton';
import Divider from '../Divider/Divider';
import {
  GoMarkGithub,
  GoLink,
  GoMilestone,
  GoQuote
} from 'react-icons/lib/go';

const ProjectLinks = ({
  project
}) => (
  <Column isColumn centerOnSmall small={12} large={8} className="links-container">
    <div className="links-button-container">
      <div className="site-links">
        {project.projectUrl && project.projectUrl.length ?
          <a href={project.projectUrl} className="button__link">
            <Button className="large button__link">
              <GoLink />
              {' VISIT SITE'}
            </Button>
          </a>
        :
          <div></div>
        }
        {project.repositoryURL && project.repositoryURL.length ?
          <a href={project.repositoryURL}>
            <Button className="large button__github">
              <GoMarkGithub />
              {' VIEW ON GITHUB'}
            </Button>
          </a>
        :
          <div></div>
        }
      </div>
      {project.appStoreUrl && project.appStoreUrl.length > 0 ?
        <AppStoreButton
          url={project.appStoreUrl}
        />
      :
        <div></div>
      }
    </div>
  </Column>
);

const ProjectDesignPatterns = ({
  designPatterns
}) => (
  <Column className="project-design-patterns-section" small={12} large={8} isColumn centerOnSmall>
    <h1 className="section-header">Design Patterns</h1>
    <h4 className="section-sub-title">Notable design patterns used in development</h4>
    <Divider />
    <div className="callout">
      <p className="paragraph-text text-grey">
        {designPatterns.description}
      </p>
      <div className="tag-label-container">
        {designPatterns.tags.map((tag) =>
          <Label className="tag-label">
            {tag}
          </Label>
        )}
      </div>
    </div>
  </Column>
);

const ProjectTechnicalInformation = ({
  technicalInfo
}) => (
  <Column className="project-technical-info-section" small={12} large={8} isColumn centerOnSmall>
    <h1 className="section-header">Technical Information</h1>
    <h4 className="section-sub-title">Secrets of the Trade</h4>
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
          "{review.snippet}"
        </p>
        <cite>
          {review.author ?
            review.author
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
        <a className="review-link" href={review.url}>Read the review</a>
      </Button>
    </div>
  </Column>
);

const ProjectMilestones = ({
  milestones
}) => (
  <Column className="milestones-section" small={12} large={8} isColumn centerOnSmall>
    <h1 className="section-header">
      <GoMilestone />
        {' Milestones '}
      <GoMilestone />
    </h1>
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
      <Column className="image-wrapper" small={12} large={8} isColumn centerOnSmall>
        <Thumbnail
          src={project.featureImage}
        />
      </Column>
      <Column small={12} large={8} isColumn centerOnSmall>
        <div className="project-caption callout">
          <p className="paragraph-text">{project.caption}</p>
        </div>
      </Column>
      <ProjectLinks
        project={project}
      />
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
      {project.designPatterns ?
        <ProjectDesignPatterns
          designPatterns={project.designPatterns}
        />
      :
        <div></div>
      }
    </Row>
    <Row>
      <Column small={12} large={8} isColumn centerOnSmall>
        <h1 className="section-header">Project Gallery</h1>
        <Divider />
      </Column>
      <PortfolioGallery project={project} />
    </Row>
  </div>
);

export default SingleProject;
