import {
  CONTACT_MESSAGES,
  POSTS_MESSAGES
} from '../actions/actionCreators';
import { combineReducers } from 'redux';

const contact = (state = [], action) => {
  switch (action.type) {
    case CONTACT_MESSAGES:
      return [...state, action.messages];
    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case POSTS_MESSAGES:
      return [...action.messages];
    default:
      return state;
  }
};

export default combineReducers({
  posts, contact
});
