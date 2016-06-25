import React from 'react';
import {
  Row,
  Column,
  MediaObject,
  MediaObjectSection
} from 'react-foundation';
import './Author.scss';
import ReactMarkdown from 'react-markdown';

const Author = ({
  author
}) => (
  <div className="author-card">
    <MediaObject stackForSmall>
      <MediaObjectSection>
        <img
          alt="Image of the blog post's author"
          className="avatar-image avatar-image__small"
          src={author.avatar.url}
        />
      </MediaObjectSection>
      <MediaObjectSection>
        <h4>{`${author.name.first} ${author.name.last}`}</h4>
        <ReactMarkdown source={author.bio.md} />
        <a href={author.website}>{author.website}</a>
      </MediaObjectSection>
    </MediaObject>
  </div>
);

export default Author;
