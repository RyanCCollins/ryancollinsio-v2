import React from 'react';
import {
  Row,
  Column,
  Pagination,
  Inline,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext
} from 'react-foundation';
import './PostList.scss';
import PostListItem from '../PostListItem/PostListItem';

class PostList extends React.Component {
  render() {
    const {
      posts
    } = this.props;
    const postItems = posts.map((post) =>
      <Column large={4} medium={6} small={12} isColumn>
        <PostListItem post={post} />
      </Column>
    );
    const pagination = (
      <div className="pagination-wrapper">
        <div className="pagination">
          <Pagination aria-label="Pagination" isCentered>
            <PaginationPrevious isDisabled>Previous <Inline showForSr>page</Inline></PaginationPrevious>
            <PaginationItem isCurrent><Inline showForSr>You're on page</Inline> 1</PaginationItem>
            <PaginationItem><a aria-label="Page 2">2</a></PaginationItem>
            <PaginationItem><a aria-label="Page 3">3</a></PaginationItem>
            <PaginationItem><a aria-label="Page 4">4</a></PaginationItem>
            <PaginationEllipsis/>
            <PaginationItem><a aria-label="Page 12">12</a></PaginationItem>
            <PaginationItem><a aria-label="Page 13">13</a></PaginationItem>
            <PaginationNext><a aria-label="Next page">Next <Inline showForSr>page</Inline></a></PaginationNext>
          </Pagination>
        </div>
      </div>
    );
    return (
      <div className="post-list">
        <Row>
          {postItems}
        </Row>
        <Row>
          {pagination}
        </Row>
      </div>
    );
  }
}

export default PostList;
