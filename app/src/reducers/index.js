import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import projects from './projects';

const rootReducer = combineReducers({
  projects,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
