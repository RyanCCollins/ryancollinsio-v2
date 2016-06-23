import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  ADD_POST,
  DELETE_POST
} from '../actions/actionCreators';

function posts(state = {
  items: [],
  isFetching: false
}, action) {
  switch (action.type) {
    case ADD_POST:
      console.log("Action:"+action);
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
    case REQUEST_POSTS:
      console.log("Action:"+action);
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_POSTS:
      console.log("Action:"+action);
      return Object.assign({}, state, {
        isFetching: false,
        items: action.posts.items
      });
    case DELETE_POST:
      console.log("Action:"+action);
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
