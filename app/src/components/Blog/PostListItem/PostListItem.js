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
        image={post.featureImage ? post.featureImage.url : undefined}
      />
      <div className="card-divider post-item-card__divider">
        {post.title}
      </div>
      <div className="card-section post-item-card__section">
        <h4 className="post-item-card__header">{post.title}</h4>
        <PostSnippet post={post.content.md.toString()} />
      </div>
    </div>
  </div>
);

export default PostListItem;
