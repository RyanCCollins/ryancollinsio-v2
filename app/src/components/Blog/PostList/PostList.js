import React from 'react';
import {
  Row,
  Column,
  Pagination
} from 'react-foundation';
import './PostList.scss';
import PostListItem from '../PostListItem/PostListItem';

class PostList extends React.Component {
  render() {
    const {
      posts
    } = this.props;
    return (
      <div className="post-list">
        <Row>
          {posts.map((post) =>
            <Column large={4} medium={6} small={12} isColumn>
              <PostListItem post={post} />
            </Column>
          )}
        </Row>
      </div>
    );
  }
}

export default PostList;
