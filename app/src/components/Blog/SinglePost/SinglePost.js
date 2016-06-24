import React, {
  Component,
  PropTypes
} from 'react';
import ReactMarkdown from 'react-markdown';
import './SinglePost.scss';

const SinglePost = ({
  post
}) => (
  <div className="single-post">
    <ReactMarkdown source={post.content} />
  </div>
);

export default SinglePost;
