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

  app.use((req, res) => {
    // Note that req.url here should be the full URL path from
    // the original request, including the query string.
    match({ routes: serverRoutes, location: req.url }, (error, redirectLocation, renderProps) => {
      if (error) {
        res.status(500).send(error.message);
      } else if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        // You can also check renderProps.components or renderProps.routes for
        // your "not found" component or route respectively, and send a 404 as
        // below, if you're using a catch-all route.
        res.status(200).send(renderToString(<RouterContext {...renderProps} />));
      } else {
        res.status(404).send('Not found');
      }
    });
  });


  app.use(express.static('./public'));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  // var publicPath = path.resolve(__dirname, 'public');
  // app.use(express.static(publicPath));
};
