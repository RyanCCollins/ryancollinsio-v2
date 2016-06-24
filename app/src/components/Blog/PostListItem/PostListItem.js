import React from 'react';
import './PostListItem.scss';
import PostSnippet from '../Shared/PostSnippet';
import { Link } from 'react-router';

import {
  Button
} from 'react-foundation';
import PostImage from '../Shared/PostImage';

const PostListItem = ({
  post
}) => (
  <div className="post-list-item">
    <div className="card post-item-card">
      <Link to={`/blog/posts/${post["_id"]}`}>
        <PostImage
          className="card-image"
          url={post.featureImage ? post.featureImage.url : undefined}
        />
      </Link>
      <div className="card-divider post-item-card__divider">
        {post.author == "573e60a2dece8bd1b59d57c3" ? 'By Ryan Collins' : 'By Unknown Author'}
      </div>
      <div className="card-section post-item-card__section">
        <h4 className="post-item-card__header">{post.title}</h4>
        <PostSnippet content={post.content.md} />
        <div className="read-more-button">
          <Link to={`/blog/posts/${post["_id"]}`}>
            <Button size={'small'}>Read More</Button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default PostListItem;
