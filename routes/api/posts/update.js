const keystone = require('keystone');
const Post = keystone.list('Post');

exports = module.exports = function (req, res) {
  Post.model.findById(req.params.id).exec()
    .then((post) => {
      const data = (req.method == 'POST') ? req.body : req.query;
      post.getUpdateHandler(req).process(data, function(error) {
        if (error) {
          throw error;
        }
        res.apiResponse({ success: true, post: post})
      });
    }).catch((error) => {
      return res.apiResponse({ success: false, error: error })
    });
};
