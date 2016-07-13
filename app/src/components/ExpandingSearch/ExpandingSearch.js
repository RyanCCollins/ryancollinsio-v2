import React, { PropTypes } from 'react';

const ExpandingSearch = ({
  onSearch
}) => (
  <div>
    <form id="expanding-search">
      <input type="search" placeholder="Search" onChange={onSearch} />
    </form>
  </div>
);

ExpandingSearch.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default ExpandingSearch;
