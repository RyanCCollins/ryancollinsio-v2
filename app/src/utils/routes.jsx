import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from '../store/store';
import ReduxToastr from 'react-redux-toastr';
import App from '../components/App';

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure');
  }
}

export const routes = () => ({
  component: App,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      require.ensure([], (require) => {
        const LandingPage = require('../containers/LandingPage/LandingPage');
        callback(null, LandingPage);
      });
    }
  },
  childRoutes: [
    {
      path: 'portfolio',
      getComponent(location, callback) {
        require.ensure([], (require) => {
          const Portfolio = require('../containers/Portfolio/Portfolio');
          callback(null, Portfolio);
        });
      }
    },
    {
      path: 'projects/:projectId',
      getComponent(location, callback) {
        require.ensure([], (require) => {
          const SingleProjectContainer = require(
            '../containers/SingleProjectContainer/SingleProjectContainer'
          );
          callback(null, SingleProjectContainer);
        });
      }
    },
    {
      path: 'contact',
      getComponent(location, callback) {
        require.ensure([], (require) => {
          const Contact = require('../containers/Contact/Contact');
          callback(null, Contact);
        });
      }
    },
    {
      path: 'blog',
      getComponent(location, callback) {
        require.ensure([], (require) => {
          const PostListView = require('../containers/Blog/PostListView/PostListView');
          callback(null, PostListView);
        });
      }
    },
    {
      path: 'blog/posts/:postId',
      getComponent(location, callback) {
        require.ensure([], (require) => {
          const SinglePostView = require('../containers/Blog/SinglePostView/SinglePostView');
          callback(null, SinglePostView);
        });
      }
    },
    {
      path: 'resume/view',
      getComponent(location, callback) {
        require.ensure([], (require) => {
          const ResumePDF = require('../containers/ResumePDF/ResumePDF');
          callback(null, ResumePDF);
        });
      }
    },
    {
      path: 'services',
      getComponent(location, callback) {
        require.ensure([], (require) => {
          const ServicesPage = require('../containers/ServicesPage/ServicesPage');
          callback(null, ServicesPage);
        });
      }
    },
    {
      path: 'notfound',
      getComponent(location, callback) {
        require.ensure([], (require) => {
          const NotFound = require('../containers/NotFound/NotFound');
          callback(null, NotFound);
        });
      }
    }
  ]
});

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
