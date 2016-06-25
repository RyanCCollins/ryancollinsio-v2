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
  },
  categories: {
    type: Types.Relationship,
    ref: 'PostCategory',
    many: true
  },
  tags: {
    type: Types.Relationship,
    ref: 'PostTag',
    many: true
  }
});

Post.schema.virtual('snippet').get(() => {
  const content = this.content.md;
  if (content.length >= 200) {
    return content.substr(0, 200);
  }
  return content;
});


Post.defaultSort = '-publishedDate';
Post.defaultColumns = 'title, author|20%, publishedDate|20%';
Post.register();
