const keystone = require('keystone');
const Post = keystone.list('Post');

exports = module.exports = function (req, res) {
  var item = new Post.model();
  var data = (req.method == 'POST') ? req.body : req.query;

  item.getUpdateHandler(req).process(data, function(err) {
    if (err) {
      return res.apiResponse({ success: false, error: err });
    }
    res.apiResponse({ success: true, post: item });
  });
};
