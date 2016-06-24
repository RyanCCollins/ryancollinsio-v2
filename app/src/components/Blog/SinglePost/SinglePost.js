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
    <ReactMarkdown content={post.content.md} />
  </div>
);

export default SinglePost;
