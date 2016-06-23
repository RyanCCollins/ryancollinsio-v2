import React from 'react';
import {
  Row,
  Thumnail,
  Column,
  Pagination
} from 'react-foundation';
import './PostList.scss';

class PostList extends React.Component {
  render() {
    const {
      posts
    } = this.props;
    return (
      <div className="post-list">
        <h1 className="section-header">Blog</h1>
        <h4 className="section-sub-title">Recent Posts</h4>
        {posts.map((post) => <div>{post}</div>)}
      </div>
    );
  }
}

export default PostList;
