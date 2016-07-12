import {
  SELECT_PROJECT_CATEGORY
} from '../actions/actionCreators';

function portfolio(state = {
  projects: [],
  categories: [],
  selectedCategory: { name: 'All', value: 'all', index: -1 }
}, action) {
  switch (action.type) {
    case SELECT_PROJECT_CATEGORY:
      return Object.assign({}, state, {
        selectedCategory: action.category
      });
    default:
      return state;
  }
}

export default portfolio;
