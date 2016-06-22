const keystone = require('keystone');
const Post = keystone.list('Post');

exports = module.exports = function (req, res) {
  Post.model.findById(req.params.id).exec()
    .then((post) => {
      post.remove((error) => {
        if (error) {
          throw error;
        }
        res.apiResponse({ success: true });
      });
    }).catch((error) => {
      return res.apiResponse({ success: false, error: error });
    });
};
