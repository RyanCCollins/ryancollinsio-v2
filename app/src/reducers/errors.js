import {
  CONTACT_ERRORS
} from '../actions/actionCreators';
import { combineReducers } from 'redux';

const contact = (state = [], action) => {
  switch (action.type) {
    case CONTACT_ERRORS:
      return [...action.errors];
    default:
      return state;
  }
};

const posts = (state = {
  posts: []
}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  contact
});
