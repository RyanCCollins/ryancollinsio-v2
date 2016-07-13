import React from 'react';
import './PostListItem.scss';
import PostSnippet from '../Shared/PostSnippet';
import { Link } from 'react-router';
import TagList from '../Tags/TagList';
import moment from 'moment';

import {
  Button
} from 'react-foundation';
import PostImage from '../Shared/PostImage';

const formattedDate = (dateString) => {
  return moment(dateString).format('MMM Do YY');
};

const PostListItem = ({
  post
}) => (
  <div className="post-list-item">
    <div className="card post-item-card">
      <Link to={`/blog/posts/${post["_id"]}`}>
        <PostImage
          className="card-image"
          url={post.featureImage ? post.featureImage.url : undefined}
        />
      </Link>
      <div className="card-divider post-item-card__divider">
        {post.author.name.first ?
          `${post.author.name.first} ${post.author.name.last}`
        :
          'By Unknown Author'
        }
        <span className="date-posted">
          {` — ${formattedDate(post.createdAt)}`}
        </span>
      </div>
      <div className="card-section post-item-card__section">
        <h4 className="post-item-card__header">{post.title}</h4>
        <PostSnippet content={post.content.md} />
        <div className="read-more-button">
          <Link to={`/blog/posts/${post["_id"]}`}>
            <Button className="button__primary">Read More</Button>
          </Link>
        </div>
        {post.tags.length ?
          <div className="tag-list-wrapper flex-wrap__center">
            <TagList
              tags={post.tags}
            />
          </div>
        :
          <div></div>
        }
      </div>
    </div>
  </div>
);

export default PostListItem;
