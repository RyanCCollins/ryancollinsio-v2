import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  ADD_POST,
  DELETE_POST
} from '../actions/actionCreators';

function posts(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case ADD_POST:
      const newItems = [
        ...state.items,
        {
          title: action.title,
          content: action.content,
          author: action.author
        }
      ];
      return Object.assign({}, state, {
        items: newItems
      });
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts
      });
    case DELETE_POST:
      return Object.assign({}, state, {
        posts: [
          ...state.posts.slice(0, action.index),
          ...state.posts.slice(action.index + 1)
        ]
      });
    default:
      return state;
  }
}

export default posts;
