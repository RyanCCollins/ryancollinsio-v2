import {
  DISPLAY_MESSAGE,
  DISMISS_MESSAGE
} from '../actions/actionCreators';
import { combineReducers } from 'redux';

const contact = (state = {
  contact: []
}, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return Object.assign({}, state, {
        contact: [...action.message]
      });
    case DISMISS_MESSAGE:
      return Object.assign({}, state, {
        contact: []
      });
    default:
      return state;
  }
};

const posts = (state = {
  posts: []
}, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return Object.assign({}, state, {
        posts: [...action.message]
      });
    case DISMISS_MESSAGE:
      return Object.assign({}, state, {
        posts: []
      });
    default:
      return state;
  }
};

export default combineReducers({
  posts, contact
});
