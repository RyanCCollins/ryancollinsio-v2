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

  app.all('/api/contact', routes.api.contact.create);

  /* Unless the route happens before this, then send the index.html file */
  app.use(express.static('./public'));
  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
  });
  // var publicPath = path.resolve(__dirname, 'public');
  // app.use(express.static(publicPath));
};
