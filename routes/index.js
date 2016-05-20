const keystone = require('keystone');

const importRoutes = keystone.importer(__dirname);

exports = module.exports = function (app) {
  app.use((req, res) => {
    res.render('index');
  });
};
