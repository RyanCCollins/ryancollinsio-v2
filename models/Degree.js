const keystone = require('keystone');
const Types = keystone.Field.Types;

const Degree = new keystone.List('Degree', {
  track: true,
  autokey: {
    path: 'slug',
    from: 'title',
    unique: true
  }
});

Degree.add({
  name: {
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



Degree.defaultSort = '-publishedDate';
Degree.defaultColumns = 'title, author|20%, publishedDate|20%';
Degree.register();
