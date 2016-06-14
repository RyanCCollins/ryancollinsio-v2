import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import HomePage from './components/HomePage';
import * as Containers from './containers/'

// import react router deps
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

import '../styles/styles.scss';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Containers.LandingPage} />
        <Route path="/projects" component={HomePage} />
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById('app'));
