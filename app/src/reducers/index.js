import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';

import portfolio from './portfolio';
import posts from './posts';
import messages from './messages';
import errors from './errors';
import contact from './contact';
import resumeData from './resumeData';
import references from './references';
import footerLinks from './footerLinks';
import teamMembers from './teamMembers';
import services from './services';

const rootReducer = combineReducers({
  posts,
  services,
  teamMembers,
  portfolio,
  resumeData,
  messages,
  errors,
  references,
  footerLinks,
  contact,
  routing: routerReducer,
  form: formReducer,
  toastr: toastrReducer
});

export default rootReducer;
