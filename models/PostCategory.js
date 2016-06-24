const keystone = require('keystone');

const PostCategory = new keystone.List('PostCategory', {
  track: true,
  autokey: {
    from: 'name',
    path: 'key',
    unique: true
  }
});

PostCategory.add({
  name: {
    type: String,
    required: true
  }
});

PostCategory.relationship({
  ref: 'Post',
  refPath: 'categories',
  path: 'posts'
});

PostCategory.register();
