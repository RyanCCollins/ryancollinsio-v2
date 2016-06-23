import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import projects from './projects';
import posts from './posts';
import messages from './messages';
import errors from './errors';

const rootReducer = combineReducers({
  posts,
  projects,
  messages,
  errors,
  routing: routerReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
