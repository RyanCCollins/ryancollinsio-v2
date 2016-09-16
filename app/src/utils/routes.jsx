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

export const routes = {
  component: App,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      require.ensure([], (error) => {
        if (error) {
          return console.error( // eslint-disable-line
            'LandingPage Landing require.ensure error', error
          );
        }
        const LandingPage = require('../containers/LandingPage/LandingPage');
        callback(null, LandingPage);
      });
    }
  },
  childRoutes: [
    {
      path: 'portfolio',
      getComponent(location, callback) {
        require.ensure([], (error) => {
          if (error) {
            return console.error( // eslint-disable-line
              'Portfolio Landing require.ensure error', error
            );
          }
          const Portfolio = require('../containers/Portfolio/Portfolio');
          callback(null, Portfolio);
        });
      }
    },
    {
      path: 'projects/:projectId',
      getComponent(location, callback) {
        require.ensure([], (error) => {
          if (error) {
            return console.error( // eslint-disable-line
              'SingleProjectContainer Landing require.ensure error', error
            );
          }
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
        require.ensure([], (error) => {
          if (error) {
            return console.error( // eslint-disable-line
              'Contact Landing require.ensure error', error
            );
          }
          const Contact = require('../containers/Contact/Contact');
          callback(null, Contact);
        });
      }
    },
    {
      path: 'blog',
      getIndexRoute(partialNextState, cb) {
        cb(null, {
          getComponent(loc, callback) {
            callback(null, App);
          }
        });
      },
      getComponent(location, callback) {
        require.ensure([], (error) => {
          if (error) {
            return console.error( // eslint-disable-line
              'PostListView Landing require.ensure error', error
            );
          }
          const PostListView = require('../containers/Blog/PostListView/PostListView');
          callback(null, PostListView);
        });
      }
    },
    {
      path: 'blog/posts/:postId',
      getComponent(location, callback) {
        require.ensure([], (error) => {
          if (error) {
            return console.error( // eslint-disable-line
              'SinglePostView Landing require.ensure error', error
            );
          }
          const SinglePostView = require('../containers/Blog/SinglePostView/SinglePostView');
          callback(null, SinglePostView);
        });
      }
    },
    {
      path: 'resume/view',
      getComponent(location, callback) {
        require.ensure([], (error) => {
          if (error) {
            return console.error( // eslint-disable-line
              'ResumePDF Landing require.ensure error', error
            );
          }
          const ResumePDF = require('../containers/ResumePDF/ResumePDF');
          callback(null, ResumePDF);
        });
      }
    },
    {
      path: 'services',
      getComponent(location, callback) {
        require.ensure([], (error) => {
          if (error) {
            return console.error( // eslint-disable-line
              'ServicesPage Landing require.ensure error', error
            );
          }
          const ServicesPage = require('../containers/ServicesPage/ServicesPage');
          callback(null, ServicesPage);
        });
      }
    },
    {
      path: 'notfound',
      getComponent(location, callback) {
        require.ensure([], (error) => {
          if (error) {
            return console.error( // eslint-disable-line
              'NotFound Landing require.ensure error', error
            );
          }
          const NotFound = require('../containers/NotFound/NotFound');
          callback(null, NotFound);
        });
      }
    }
  ]
};

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
        {routes}
      </Router>
    </div>
  </Provider>
);

export default RouterApp;
