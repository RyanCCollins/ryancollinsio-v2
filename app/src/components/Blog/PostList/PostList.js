import React from 'react';
import './PostList.scss';

class PostList extends React.Component {
  render() {
    const {
      posts
    } = this.props;
    return (
      <div className="post-list">
        <h1 className="section-title">Blog</h1>
      </div>
    );
  }
}

export default PostList;
