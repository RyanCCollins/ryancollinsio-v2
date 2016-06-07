import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

const defaultState = compose(
  projects,
);



const enhancers = compose(
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore()
