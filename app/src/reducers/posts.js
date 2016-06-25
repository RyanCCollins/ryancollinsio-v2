import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  ADD_POST,
  DELETE_POST,
  SELECT_POST_CATEGORY,
  DESELECT_POST_CATEGORY
} from '../actions/actionCreators';

function posts(state = {
  items: [],
  categories: [],
  tags: [],
  selectedCategory: { name: 'All', key: 'all' },
  isFetching: false
}, action) {
  switch (action.type) {
    case SELECT_POST_CATEGORY:
      return Object.assign({}, state, {
        selectedCategory: action.category
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items,
        categories: action.postCategories
      });
    case ADD_POST:
      const newState = [
        ...state.items,
        {
          title: action.title,
          content: action.content,
          author: action.author
        }
      ];
      return Object.assign({}, state, {
        items: newState
      });
    case DELETE_POST:
      return Object.assign({}, state, {
        items: [
          ...state.items.slice(0, action.index),
          ...state.items.slice(action.index + 1)
        ]
      });
    default:
      return state;
  }
}

export default posts;
