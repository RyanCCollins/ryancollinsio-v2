import {
  CONTACT_ERRORS,
  POSTS_ERRORS,
  CLEAR_POSTS_ERRORS,
  CLEAR_CONTACT_ERRORS
} from '../actions/actionCreators';
import { combineReducers } from 'redux';

const contact = (state = [], action) => {
  switch (action.type) {
    case CONTACT_ERRORS:
      return [
        ...state,
        ...action.errors
      ];
    case CLEAR_CONTACT_ERRORS:
      return [];
    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case POSTS_ERRORS:
      return [...action.errors];
    case CLEAR_POSTS_ERRORS:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  contact
});
