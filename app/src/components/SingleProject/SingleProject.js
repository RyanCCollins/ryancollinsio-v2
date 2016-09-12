import React, { PropTypes } from 'react';
import './SingleProject.scss';
import {
  Row,
  Column,
  Thumbnail
} from 'react-foundation';
import PortfolioGallery from './PortfolioGallery/PortfolioGallery';
import ProjectMilestones from './ProjectMilestones/ProjectMilestones';
import ProjectReview from './ProjectReview/ProjectReview';
import ProjectTechnicalInfo from './ProjectTechnicalInfo/ProjectTechnicalInfo';
import ProjectDesignPatterns from './ProjectDesignPatterns/ProjectDesignPatterns';
import ProjectLinks from './ProjectLinks/ProjectLinks';
import Divider from '../Divider/Divider';

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
          project={project}
        />
      :
        <noscript />
      }
      {project.technicalReview ?
        <ProjectReview
          project={project}
        />
      :
        <noscript />
      }
      {project.technicalInformation ?
        <ProjectTechnicalInfo
          project={project}
        />
      :
        <noscript />
      }
      {project.designPatterns ?
        <ProjectDesignPatterns
          project={project}
        />
      :
        <noscript />
      }
    </Row>
    <div className="full-width-container">
      <Row className="full-width">
        <Column small={12} large={8} isColumn centerOnSmall>
          <h1 className="section-header">Project Gallery</h1>
          <Divider />
        </Column>
        <PortfolioGallery images={project.images} />
      </Row>
    </div>
  </div>
);

SingleProject.propTypes = {
  project: PropTypes.object.isRequired
};

export default SingleProject;
