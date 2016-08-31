import React, { PropTypes } from 'react';
import Divider from '../../Divider/Divider';
import {
  Row,
  Column,
  MediaObject,
  MediaObjectSection
} from 'react-foundation';
import AuthorSocialLinks from '../AuthorSocialLinks/AuthorSocialLinks';
import ReactMarkdown from 'react-markdown';
import noPic from '../../../../images/nopic.png';
import './Author.scss';

const Author = ({
  author
}) => (
  <Row>
    <Column isColumn centerOnSmall small={12} large={8}>
      <div className="author-card paper__fit">
        <h1 className="section-header">About The Author</h1>
        <Divider />
        <MediaObject className="center-stacked flexed-media-item">
          <MediaObjectSection className="center-on-small">
            <img
              alt="Blog post's author"
              className="avatar-image avatar-image__small"
              src={author.avatar ? author.avatar.url : noPic}
            />
          </MediaObjectSection>
          <MediaObjectSection>
            <h4 className="author-card__name">{`${author.name.first} ${author.name.last}`}</h4>
            <ReactMarkdown
              className="author-bio-text"
              source={author.bio ? author.bio.md : 'This author has no bio.'}
            />
          <AuthorSocialLinks author={author} />
          </MediaObjectSection>
        </MediaObject>
      </div>
    </Column>
  </Row>
);

Author.propTypes = {
  author: PropTypes.object.isRequired
};

export default Author;
