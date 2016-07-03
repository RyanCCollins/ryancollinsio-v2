import {
  SUBMIT_CONTACT
} from '../actions/actionCreators';

const contact = (state = {
  params: {},
  isFetching: false
}, action) => {
  switch (action.type) {
    case SUBMIT_CONTACT:
      return Object.assign({}, state, {
        params: action.params,
        isFetching: true
      });
    default:
      return state;
  }
};

export default contact;
