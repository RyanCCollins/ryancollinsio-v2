const keystone = require('keystone');

const importRoutes = keystone.importer(__dirname);

const routes = {
  api: importRoutes('./api')
};

exports = module.exports = function (app) {
  app.use((req, res) => {
    res.render('index');
  });
  if (process.env.NODE_ENV !== 'production') {
    app.all('*', (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, POST');
      res.header('Access-Control-Allow-Headers', 'Content-Type');
      next();
    });
  }

  app.all('/api*', keystone.middleware.api);
  app.all('/api/contact/categories', routes.api.contact.getCategories);
};
