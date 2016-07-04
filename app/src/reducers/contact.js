import {
  SUBMIT_CONTACT,
  CONTACT_SUCCESS,
  CONTACT_FAILURE
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
    case CONTACT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        params: {}
      });
    case CONTACT_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        params: {}
      });
    default:
      return state;
  }
};

export default contact;
