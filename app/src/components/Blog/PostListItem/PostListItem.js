import React from 'react';
import './PostListItem.scss';
import marked from 'marked';
import {
  Column,
  Row,
  Thumbnail
} from 'react-foundation';

class PostSnippet extends React.Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartyPants: false
    });
  }
  render() {
    return (
      <div></div>
    );
  }
}

const PostListItem = ({
  post
}) => (
  <div className="post-list-item">
    <div className="card post-item-card">
      <img src={post.featureImage.url} />
      <div className="card-divider post-item-card__divider">
        {post.title}
      </div>
      <div className="card-section post-item-card__section">
        <h4 className="post-item-card__header">{post.title}</h4>

      </div>
    </div>
  </div>
);

export default PostListItem;
