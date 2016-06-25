import React, {
  PropTypes
} from 'react';
import ReactMarkdown from 'react-markdown';
import './SinglePost.scss';
import {
  Column,
  Row
} from 'react-foundation';

const SinglePost = ({
  post
}) => (
  <div className="single-post">
    <Row>
      <Column small={12} large={8} isColumn centerOnSmall>
        <article className="paper post-wrapper">
          <ReactMarkdown source={post.content.md} />
        </article>
      </Column>
    </Row>
  </div>
);

SinglePost.propTypes = {
  post: PropTypes.object.isRequired
};

export default SinglePost;
