const keystone = require('keystone');
const Post = keystone.list('Post');
const PostCategory = keystone.list('PostCategory');
const PostTag = keystone.list('PostTag');
const User = keystone.list('User');

exports = module.exports = function (req, res) {

  const loadTags = () => {
    return PostTag.model.find().exec();
  };

  const loadCategories = () => {
    return PostCategory.model.find().exec();
  };

  const loadPosts = () => {
    return Post.model.find().exec();
  };

  const parseItem = (item) => ({
    key: item.key,
    name: item.name,
    id: item.id
  });

  /* Return an item parsed (either category or a tag)*/
  const parseItems = (items) => {
    return items.map((item) => parseItem(item))
  };

  const loadData = () => {
    var loadedPosts = [];
    var loadedCategories = [];
    loadPosts().then((posts) => {
      loadedPosts = posts;
      return loadCategories()
    }).then((categories) => {
      loadedCategories = parseItems(categories);
      return loadTags();
    }).then((tags) => {
      const loadedTags = parseItems(tags);
      return res.apiResponse({
        success: true,
        posts: loadedPosts,
        tags: loadedTags,
        categories: loadedCategories
      });
    }).catch((error) => {
      console.log("Calling error with: ", error);
      return res.state(500).send({ error: `An error occured: ${error.message}` });
    });
  }

  loadData();
};
