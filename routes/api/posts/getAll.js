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

  const returnObject = {
    posts: [],
    categories: [],
    success: false
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
    const returnData = {
      posts: [],
      categories: [],
      error: null
    };
    loadPosts().then((posts) => {
      console.log("Calling load posts with: ", posts)
      loadedPosts = posts;
      return loadCategories()
    }).then((categories) => {
      console.log("Calling load categories with: ", categories)
      return res.apiResponse({ success: true, posts: loadedPosts, categories: parseCategories(categories) })
    }).catch((error) => {
      console.log("Calling error with: ", error)
      return res.state(500).send({ error: `An error occured: ${error.message}` });
    });
  }

  loadData();
};
