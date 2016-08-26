const keystone = require('keystone');
const importRoutes = keystone.importer(__dirname);
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config.js');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8016 : process.env.PORT;
const path = require('path');
const compiler = webpack(config);
const express = require('express');

import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import serverRoutes from '../app/src/utils/routes';
import { configureStore } from '../app/src/store/store';
import { Provider } from 'react-redux';
import { fetchComponentData } from './util/fetchData';

const routes = {
  api: importRoutes('./api')
};

if (isDeveloping) {
  keystone.pre('routes', webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  keystone.pre('routes', webpackHotMiddleware(compiler, {
    log: console.log
  }));
}

exports = module.exports = function (app) {
  app.use(webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000
  }));

  if (isDeveloping) {
    app.all('*', (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    });
  }

  app.all('/api*', keystone.middleware.api);
  app.get('/api/posts/list', routes.api.posts.getAll);
  app.all('/api/posts/create', routes.api.posts.create);
  app.get('/api/posts/:id', routes.api.posts.getOne);
  app.all('/api/posts/:id/update', routes.api.posts.update);
  app.get('/api/posts/:id/remove', routes.api.posts.remove);

  app.all('/api/contact/create', routes.api.contact.create);

  const renderFullPage = (html, initialState) =>
    `
      <!doctype html>
      <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv=X-UA-Compatible content="IE=edge">
          <meta name=viewport content="width=device-width,initial-scale=1">
          <title>RyanCollins.io</title>
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.3.15/slick.css" />
          <link href="https://diegoddox.github.io/react-redux-toastr/3.0.1/react-redux-toastr.min.css" rel="stylesheet" type="text/css">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css" rel="stylesheet">
          <link href='https://fonts.googleapis.com/css?family=Audiowide:100,400' rel='stylesheet' type='text/css'>
          <link href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,700|Raleway:400,300,700|Lato:400,300,700' rel='stylesheet' type='text/css'>
        </head>
      <body>
        <!-- The app will bootstrap into this div -->
        <div id="app">${html}</div>
        <script src="/app/build/bundle.js"></script>
        <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};
        </script>
      </body>
      </html>
    `;

  const renderError = err => {
    const softTab = '&#32;&#32;&#32;&#32;';
    const errTrace = process.env.NODE_ENV !== 'production' ?
      `:<br><br><pre style="color:red">${softTab}
      ${err.stack.replace(/\n/g, `<br>${softTab}`)}</pre>` : '';
    return renderFullPage(`Server Error${errTrace}`, {});
  };

  app.use((req, res, next) => {
    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    match({ routes: serverRoutes, location: req.url },
      (err, redirectLocation, renderProps) => {
        if (err) {
          return res.status(500).end(renderError(err));
        }

        if (redirectLocation) {
          return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
        }

        if (!renderProps) {
          return next();
        }

        const store = configureStore();
        return fetchComponentData(store, renderProps.components, renderProps.params)
          .then(() => {
            const initialView = renderToString(
              <Provider store={store}>
                <RouterContext {...renderProps} />
              </Provider>
            );
            const finalState = store.getState();
            res.set('Content-Type', 'text/html')
              .status(200)
              .end(renderFullPage(initialView, finalState));
          });
      });
  });

  app.use(express.static('./public'));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  // var publicPath = path.resolve(__dirname, 'public');
  // app.use(express.static(publicPath));
};
