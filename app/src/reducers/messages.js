import {
  DISPLAY_MESSAGE,
  DISMISS_MESSAGE
} from '../actions/actionCreators';
import { combineReducers } from 'redux';

const contact = (state = {
  alertVisible: false,
  contact: []
}, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return Object.assign({}, state, {
        alertVisible: true,
        contact: [...action.message]
      });
    case DISMISS_MESSAGE:
      return Object.assign({}, state, {
        alertVisible: false,
        contact: []
      });
    default:
      return state;
  }
};

const posts = (state = {
  alertVisible: false,
  posts: []
}, action) => {
  switch (action.type) {
    case DISPLAY_MESSAGE:
      return Object.assign({}, state, {
        alertVisible: true,
        posts: [...action.message]
      });
    case DISMISS_MESSAGE:
      return Object.assign({}, state, {
        alertVisible: false,
        posts: []
      });
    default:
      return state;
  }
};

export default combineReducers({
  posts, contact
});
