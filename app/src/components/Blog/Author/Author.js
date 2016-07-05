import React from 'react';
import Divider from '../../Divider/Divider';
import {
  Row,
  Column,
  MediaObject,
  MediaObjectSection
} from 'react-foundation';
import {
  FaGithub,
  FaTwitter
} from 'react-icons/lib/fa';
import './Author.scss';
import ReactMarkdown from 'react-markdown';
import noPic from '../../../../images/nopic.png';

const Author = ({
  author
}) => (
  <Row>
    <Column isColumn centerOnSmall small={12} large={8}>
      <div className="author-card paper__fit">
        <h1 className="section-header">About The Author</h1>
        <Divider />
        <MediaObject stackForSmall>
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
            {author.website ?
              <a className="muted-link" href={author.website}>{author.website}</a>
            :
              <div></div>
            }
            <div className="author-social-links">
              {author.github ?
                <a
                  className="author-social-link"
                  href={author.github.url}
                >
                  <FaGithub className="text-medium dark-grey" />
                </a>
              :
                <div></div>
              }
              {author.twitter ?
                <a
                  className="author-social-link"
                  href={author.twitter.url}
                >
                  <FaTwitter className="text-medium dark-grey" />
                </a>
              :
                <div></div>
              }
            </div>
          </MediaObjectSection>
        </MediaObject>
      </div>
    </Column>
  </Row>
);

export default Author;
