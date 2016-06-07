const keystone = require('keystone');
const secrets = require('./lib/secrets');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 8016 : process.env.PORT;
const compiler = webpack(config);

keystone.init({
  'name': 'RyanCollins.io',
  'brand': 'RyanCollins.io',
  'static': 'public',

  'auto update': true,
  'user model': 'User',
  'session': true,
  'cookie secret': 'd4a8c3b5fe17a9d47181844a7863d1eb53378f988c5310139634211f343a89ecf0a05d2644b66ed5f5dfc463d82c7061d24b3f9e5928fa010cc71e33f6f0554b',
  'auth': true
});

keystone.set('cloudinary config', 'cloudinary://596455341385367:YHmhydy3idqIicv6uTAmDVlHpvk@dc1qjoyvn');

keystone.import('models');

keystone.set('locals', {
  _: require('underscore'),
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable
});

keystone.set('routes', require('./routes'));

keystone.set('nav', {
  'users': 'users',
  'projects': 'projects'
});

if (isDeveloping) {
  keystone.pre('routes', webpackMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))

  keystone.pre('routes', webpackHotMiddleware(compiler))
}

keystone.set('routes', function (app) {
  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))
});

/* Bootstrap the server rendered JSX */
keystone.start();
