import React from 'react';
import './SinglePostView.scss';
import {
  SinglePost,
  Divider
} from '../../../components';

const SinglePostView = ({
  post
}) => (
  <div className="single-post-view__wrapper">
    <h1 className="section-header">{post.title}</h1>
    <Divider />
    <SinglePost
      post={post}
    />
  </div>
);

export default SinglePostView;
