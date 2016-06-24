const keystone = require('keystone');
const Post = keystone.list('Post');
const PostCategory = keystone.list('PostCategory');

exports = module.exports = function (req, res) {
  const loadCategories = () => {
    return PostCategory.model.find().exec();
  };

  const loadPosts = () => {
    return Post.model.find().exec();
  };

  const parseCategory = (category) => ({
    key: category.key,
    name: category.name,
    id: category.id
  });

  const parseCategories = (categories) => {
    return categories.map((cat) => parseCategory(cat))
  };

  const loadData = () => {
    let loadedPosts = [];
    loadPosts().then((posts) => {
      loadedPosts = posts;
      return loadCategories()
    }).then((categories) => {
      return res.apiResponse({
        success: true,
        posts: loadedPosts,
        categories: parseCategories(categories)
      });
    }).catch((error) => {
      console.log("Calling error with: ", error);
      return res.state(500).send({ error: `An error occured: ${error.message}` });
    });
  }

  loadData();
};
