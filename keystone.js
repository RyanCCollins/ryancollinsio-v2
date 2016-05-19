var keystone = require('keystone');

keystone.init({
  'name': 'RyanCollins.io',
  'brand': 'RyanCollins.io',
  'static': 'public',
  'favicon': 'public/favicon.ico',
  'auto update': true,
  'user model': 'User',
  'session': true,
  'auth': true,
});

keystone.import('models')

keystone.set('nav', {
  'users': 'users'
})


keystone.start()
