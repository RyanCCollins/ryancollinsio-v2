import React from 'react';
import ReactDisqusThread from 'react-disqus-thread'
import {
  Row,
  Column
} from 'react-foundation';

const CommentThread = ({
  post,
  onNewComment,
  location
}) => (
  <Row className="comment-thread-container">
    <Column isColumn small={12} large={8} centerOnSmall>
      <ReactDisqusThread
        shortname="ryancollinsio"
        identifier={`ryancollinsio-${post._id}`}
        title={post.title}
        url={`https://ryancollins.io${location.pathname}`}
        onNewComment={onNewComment}
      />
    </Column>
  </Row>
);

CommentThread.propTypes = {
  post: React.PropTypes.object.isRequired,
  onNewComment: React.PropTypes.func.isRequired,
  location: React.PropTypes.object.isRequired
};

export default CommentThread;
