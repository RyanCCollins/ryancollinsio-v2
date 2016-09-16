import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../store/store';
import ReduxToastr from 'react-redux-toastr';

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure');
  }
}

export const routes = () => (
  <Route
    path="/"
    name="home"
    getComponent={(location, callback) => {
      require.ensure([], (require) => {
        const App = require('../components/App');
        callback(null, App);
      });
    }}
  >
    <IndexRoute
      getComponent={(location, callback) => {
        require.ensure([], (require) => {
          const LandingPage = require('../containers/LandingPage/LandingPage');
          callback(null, LandingPage);
        });
      }}
    />
    <Route
      path="portfolio"
      name="portfolio"
      getComponent={(location, callback) => {
        require.ensure([], (require) => {
          const Portfolio = require('../containers/Portfolio/Portfolio');
          callback(null, Portfolio);
        });
      }}
    />
    <Route
      path="projects/:projectId"
      name="singleproject"
      getComponent={(location, callback) => {
        require.ensure([], (require) => {
          const SingleProjectContainer = require(
            '../containers/SingleProjectContainer/SingleProjectContainer'
          );
          callback(null, SingleProjectContainer);
        });
      }}
    />
    <Route
      path="contact"
      name="contact"
      getComponent={(location, callback) => {
        require.ensure([], (require) => {
          const Contact = require('../containers/Contact/Contact');
          callback(null, Contact);
        });
      }}
    />
    <Route
      path="blog"
      name="blog"
      getComponent={(location, callback) => {
        require.ensure([], (require) => {
          const PostListView = require('../containers/Blog/PostListView/PostListView');
          callback(null, PostListView);
        });
      }}
    />
    <Route
      path="blog/posts/:postId"
      name="singlepost"
      getComponent={(location, callback) => {
        require.ensure([], (require) => {
          const SinglePostView = require('../containers/Blog/SinglePostView/SinglePostView');
          callback(null, SinglePostView);
        });
      }}
    />
    <Route
      path="resume/view"
      name="resume"
      getComponent={(location, callback) => {
        require.ensure([], (require) => {
          const ResumePDF = require('../containers/ResumePDF/ResumePDF');
          callback(null, ResumePDF);
        });
      }}
    />
    <Route
      path="services"
      name="services"
      getComponent={(location, callback) => {
        require.ensure([], (require) => {
          const ServicesPage = require('../containers/ServicesPage/ServicesPage');
          callback(null, ServicesPage);
        });
      }}
    />
    <Route
      path="*"
      name="notfound"
      getComponent={(location, callback) => {
        require.ensure([], (require) => {
          const NotFound = require('../containers/NotFound/NotFound');
          callback(null, NotFound);
        });
      }}
    />
  </Route>
);

const RouterApp = (props) => (
  <Provider {...props} store={store}>
    <div>
      <ReduxToastr
        timeOut={4000}
        newestOnTop
        position="bottom-right"
      />
      <Router
        onUpdate={() => window.scrollTo(0, 0)} // eslint-disable-line
        history={history}
      >
        {routes()}
      </Router>
    </div>
  </Provider>
);

export default RouterApp;
