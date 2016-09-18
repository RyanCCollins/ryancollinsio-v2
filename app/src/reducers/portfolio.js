import {
  SELECT_PROJECT_CATEGORY,
  SET_PORTFOLIO_SEARCH,
  CLEAR_PORTFOLIO_SEARCH,
  PORTFOLIO_BEGIN_LOADING,
  PORTFOLIO_END_LOADING
} from '../actions/actionCreators';

function portfolio(state = {
  projects: [],
  isSearching: false,
  searchTerm: '',
  categories: [],
  selectedCategory: { name: 'All', value: 'all', index: -1 },
  isLoading: true
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
    case PORTFOLIO_BEGIN_LOADING:
      return Object.assign({}, state, {
        isLoading: true
      });
    case PORTFOLIO_END_LOADING:
      return Object.assign({}, state, {
        isLoading: false
      });
    default:
      return state;
  }
}

export default portfolio;
