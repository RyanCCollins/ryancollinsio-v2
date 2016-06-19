import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../store';
import App from '../components/App';
import * as Containers from '../containers/';

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Containers.LandingPage} />
        <Route path="/portfolio" component={Containers.Portfolio} />
        <Route path="/projects/:projectId" componet={Containers.SingleProjectContainer} />
        <Route path="/contact" component={Containers.Contact} />
        <Route path="*" component={Containers.NotFound} />
      </Route>
    </Router>
  </Provider>
);

export default router;
