var keystone = require('keystone');

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

keystone.import('models');

keystone.set('locals', {
  _: require('underscore'),
  env: keystone.get('env'),
  utils: keystone.utils,
  editable: keystone.content.editable
});


keystone.set('routes', require('./routes'));

keystone.set('nav', {
  'users': 'users'
});


keystone.start()
