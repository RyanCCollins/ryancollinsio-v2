var keystone = require('keystone');
var Types = keystone.Field.Types;

const Post = new keystone.List('Post', {
  map: {
    name: 'title'
  },
  track: true,
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true
  }
});

Post.add({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Types.Relationship,
    ref: 'User',
    index: true
  },
  publishedDate: {
    type: Types.Date,
    index: true
  },
  featureImage: {
    type: Types.CloudinaryImage
  },
  content: {
    type: Types.Markdown,
    wysiwyg: true,
    height: 400
  }
});

Post.defaultSort = '-publishedDate';
Post.defaultColumns = 'title, author|20%, publishedDate|20%';
Post.register();
