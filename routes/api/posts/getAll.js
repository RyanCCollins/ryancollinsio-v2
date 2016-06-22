const keystone = require('keystone');
const Post = keystone.list('Post');

exports = module.exports = function (req, res) {
  Post.model.find().exec()
    .then((posts) => {
      return res.apiResponse({ success: true, posts: posts })
    }).catch((error) => {
      return res.apiResponse({ success: false, error: error })
    });
};
