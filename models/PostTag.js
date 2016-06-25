const keystone = require('keystone');

const PostTag = new keystone.List('PostTag', {
  track: true,
  autokey: {
    from: 'name',
    path: 'key',
    unique: true
  }
});

PostTag.add({
  name: {
    type: String,
    required: true
  }
});

PostTag.relationship({
  ref: 'Post',
  refPath: 'tags',
  path: 'posts'
});

PostTag.register();
