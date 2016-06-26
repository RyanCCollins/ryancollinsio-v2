import React, {
  PropTypes
} from 'react';
import ReactMarkdown from 'react-markdown';
import './SinglePost.scss';
import {
  Column,
  Row
} from 'react-foundation';
import TagList from '../Tags/TagList';

const SinglePost = ({
  post
}) => (
  <div className="single-post">
    <Row>
      <Column small={12} large={8} isColumn centerOnSmall>
        <article className="paper post-wrapper">
          <ReactMarkdown source={post.content.md} />
        </article>
        <section className="post__tag-section paper__fit">
          <h4 className="text-medium centered section-header__no-padding">Tags</h4>
          <TagList tags={post.tags} />
        </section>
      </Column>
    </Row>
  </div>
);

SinglePost.propTypes = {
  post: PropTypes.object.isRequired
};

export default SinglePost;
