import {
  SELECT_PROJECT_CATEGORY,
  SET_PORTFOLIO_SEARCH,
  CLEAR_PORTFOLIO_SEARCH
} from '../actions/actionCreators';

function portfolio(state = {
  projects: [],
  isSearching: false,
  searchTerm: null,
  categories: [],
  selectedCategory: { name: 'All', value: 'all', index: -1 }
}, action) {
  switch (action.type) {
    case SELECT_PROJECT_CATEGORY:
      return Object.assign({}, state, {
        selectedCategory: action.category
      });
    case SET_PORTFOLIO_SEARCH:
      return Object.assign({}, state, {
        searchTerm: action.searchTerm
      });
    case CLEAR_PORTFOLIO_SEARCH:
      return Object.assign({}, state, {
        searchTerm: null
      });
    default:
      return state;
  }
}

export default portfolio;
