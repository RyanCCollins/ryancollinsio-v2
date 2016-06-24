const keystone = require('keystone');
const Post = keystone.list('Post');
const PostCategory = keystone.list('PostCategory');

exports = module.exports = function (req, res) {
  const loadCategories = () => {
    return PostCategory.find().exec();
  };

  const returnObject = {
    posts: [],
    categories: [],
    success: false
  };

  Post.model.find().exec()
    .then((posts) => {
      returnObject[posts] = posts;
      return loadCategories();
    }).then((categories) => {
      returnObject.success = true;
      returnObject.categories = categories;
      return res.apiResponse(returnObject);
    }).catch((error) => {
      return res.apiResponse({ success: false, error: error });
    });
};
