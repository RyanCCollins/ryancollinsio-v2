import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
import initialState from './initialState';

const loggerMiddleware = createLogger();

const enhancers = compose(
  applyMiddleware(
    thunk,
    loggerMiddleware
  ),
  window.devToolsExtension && window.devToolsExtension()
);

const store = createStore(
  rootReducer,
  initialState,
  enhancers,
);

export const history = syncHistoryWithStore(browserHistory, store);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
