import React from 'react';
import './PostListItem.scss';
import PostSnippet from '../Shared/PostSnippet';

import {
  Column,
  Row,
  Thumbnail
} from 'react-foundation';
import PostImage from '../Shared/PostImage';

const PostListItem = ({
  post
}) => (
  <div className="post-list-item">
    <div className="card post-item-card">
      <PostImage
        className="card-image"
        image={post.featureImage.exists ? post.featureImage.url : undefined}
      />
      <div className="card-divider post-item-card__divider">
        {post.author === "576aad1d0dccb66b575cc73e" ? 'By Ryan Collins' : 'By Unknown Author'}
      </div>
      <div className="card-section post-item-card__section">
        <h4 className="post-item-card__header">{post.title}</h4>
        <PostSnippet content={post.content.md} />
      </div>
    </div>
  </div>
);

export default PostListItem;
