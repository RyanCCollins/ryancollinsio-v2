import {
  CONTACT_ERRORS
} from '../actions/actionCreators';
import { combineReducers } from 'redux';

const contact = (state = {
  contact: []
}, action) => {
  switch (action.type) {
    case CONTACT_ERRORS:
      return Object.assign(state, {
        contact: action.errors
      });
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
