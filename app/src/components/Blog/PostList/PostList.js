import React, { PropTypes } from 'react';
import {
  Row,
  Column
} from 'react-foundation';
import './PostList.scss';
import PostListItem from '../PostListItem/PostListItem';
import Paginator from '../Paginator/Paginator';

class PostList extends React.Component {
  render() {
    const {
      posts,
      onChangePage
    } = this.props;
    const postItems = posts.map((post) =>
      <Column large={4} medium={6} small={12} isColumn>
        <PostListItem post={post} />
      </Column>
    );
    return (
      <div className="post-list">
        <Row>
          {postItems}
        </Row>
        <Row>
          <Paginator
            items={posts}
            perPage={10}
            onChange={onChangePage}
            selectedPage={1}
          />
        </Row>
      </div>
    );
  }
}

PostList.propTypes = {
  onChangePage: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired
};

export default PostList;
