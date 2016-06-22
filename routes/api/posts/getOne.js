const keystone = require('keystone');
const Post = keystone.list('Post');

exports = module.exports = function (req, res) {
  Post.model.findById(req.params.id).exec()
    .then((post) => {
      return res.apiResponse({ success: true, post: post })
    }).catch((error) => {
      return res.apiResponse({ success: false, error: error })
    });
};
