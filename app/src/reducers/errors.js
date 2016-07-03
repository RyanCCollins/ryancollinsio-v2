import {
  DISPLAY_ERROR,
  CONTACT_SUCCESS,
  CONTACT_FAILURE
} from '../actions/actionCreators';
import { combineReducers } from 'redux';

const contact = (state = {
  contact: []
}, action) => {
  switch (action.type) {
    case DISPLAY_ERROR:
      return Object.assign(state, {
        contact: [...action.error]
      });
    default:
      return state;
  }
};

const posts = (state = {
  posts: []
}, action) => {
  switch (action.type) {
    case DISPLAY_ERROR:
      return Object.assign(state, {
        posts: [...action.error]
      });
    default:
      return state;
  }
};

export default combineReducers({
  posts,
  contact
});
