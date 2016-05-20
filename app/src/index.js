import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

const router = (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={FlexGrid}></IndexRoute>
    </Route>
  </Router>
);

render(router, document.getElementById('root'));
