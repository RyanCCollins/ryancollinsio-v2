import {
  CONTACT_MESSAGES,
  POSTS_MESSAGES,
  CLEAR_CONTACT_MESSAGES,
  CLEAR_POSTS_MESSAGES
} from '../actions/actionCreators';
import { combineReducers } from 'redux';

const contact = (state = [], action) => {
  switch (action.type) {
    case CONTACT_MESSAGES:
      return [
        ...state,
        ...action.messages
      ];
    case CLEAR_CONTACT_MESSAGES:
      return [];
    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case POSTS_MESSAGES:
      return [
        ...state,
        ...action.messages
      ];
    case CLEAR_POSTS_MESSAGES:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  posts, contact
});
