import {
  DISPLAY_MESSAGE,
  DISMISS_MESSAGE,
  CONTACT_MESSAGES
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
    case DISPLAY_MESSAGE:
      return [...state, action.message];
    case DISMISS_MESSAGE:
      return [];
    default:
      return state;
  }
};

export default combineReducers({
  posts, contact
});
