import React, { PropTypes } from 'react';
import {
  Column,
  Button
} from 'react-foundation';
import AppStoreButton from '../../AppStoreButton/AppStoreButton';
import {
  GoMarkGithub,
  GoLink
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
          <noscript />
        }
        {project.repositoryURL && project.repositoryURL.length ?
          <a href={project.repositoryURL}>
            <Button className="large button__github">
              <GoMarkGithub />
              {' VIEW ON GITHUB'}
            </Button>
          </a>
        :
          <noscript />
        }
      </div>
      {project.appStoreUrl && project.appStoreUrl.length > 0 ?
        <AppStoreButton
          url={project.appStoreUrl}
        />
      :
        <noscript />
      }
    </div>
  </Column>
);

ProjectLinks.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectLinks;
