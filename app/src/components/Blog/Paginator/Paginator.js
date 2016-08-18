import React from 'react';
import './Paginator.scss';
import {
  Pagination,
  Inline,
  PaginationPrevious,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext
} from 'react-foundation';
import paginatorModule from 'paginator';

const getNumberOfPages = (items, perPage) => {
  return items / perPage;
};

const BuildPages = ({
  totalItems,
  currentPage
}) => {
  const pages = [];
  const paginatorInfo = new paginatorModule(6, 8).build(totalItems, currentPage)
};

const PagerItem = ({
  pageNumber,
  isSelected
}) => (
  <PaginationItem
    isCurrent={isSelected}
  >
    <a aria-label={`Page ${pageNumber}`}>
      {pageNumber}
    </a>
  </PaginationItem>
);

class Paginator extends React.Component {
  render() {
    const {
      items,
      perPage,
      onChange,
      selectedPage
    } = this.props;
    return (
      <div className="pagination-wrapper" style={{ display: 'none' }}>
        <div className="pagination">
          {getNumberOfPages}
          <Pagination aria-label="Pagination" isCentered>
            <PaginationPrevious isDisabled={selectedPage !== 1}>Previous <Inline showForSr>page</Inline></PaginationPrevious>
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
  }
}

export default Paginator;
