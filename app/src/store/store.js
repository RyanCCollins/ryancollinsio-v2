import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
import initialState from './initialState';

const isClient = typeof document !== 'undefined';
const isDeveloping = process.env.NODE_ENV !== 'production';
const preloadedState = isClient ? window.__INITIAL_STATE__ : initialState;

const loggerMiddleware = createLogger();
const middlewares = [thunkMiddleware];

if (isDeveloping) {
  middlewares.push(loggerMiddleware);
}

const enhancers = [];
if (isClient && isDeveloping) {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  rootReducer,
  preloadedState,
  composedEnhancers,
);

export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined;


if (module.hot) {
  module.hot.accept('../reducers/', () => {
    const nextRootReducer = require('../reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
