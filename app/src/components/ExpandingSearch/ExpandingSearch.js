import React, { PropTypes } from 'react';
import './ExpandingSearch.scss';

const ExpandingSearch = ({
  onSearch,
  onClear,
  value
}) => (
  <div>
    <form id="expanding-search">
      <input
        type="search"
        placeholder="Search"
        onChange={onSearch}
        value={value}
        onBlur={onClear}
      />
    </form>
  </div>
);

ExpandingSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default ExpandingSearch;
