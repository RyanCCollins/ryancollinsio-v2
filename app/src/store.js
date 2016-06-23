import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import projects from './data/projects';
import createLogger from 'redux-logger';
import rootReducer from './reducers/index';

const defaultState = {
  projects,
  posts: {
    items: [],
    isFetching: false,
    didInvalidate: false
  },
  messages: {
    alertVisible: false,
    posts: []
  },
  errors: {
    posts: []
  }
};
const loggerMiddleware = createLogger();

const enhancers = compose(
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);


const store = createStore(
  rootReducer,
  defaultState,
  enhancers,
);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
