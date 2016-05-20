var keystone = require('keystone');
var transform = require('model-transform');
var Types = keystone.Field.Types;

var Project = new keystone.List('Project', {
  track: true,
  autokey: {
    from: 'title',
    path: 'key',
    unique: 'true'
  },
  map: {
    name: 'title'
  }
});

Project.add({
  title: {
    type: String,
    required: true,
    initial: true,
    unique: true,
    note: 'The name of the project.'
  },
  description: {
    type: Types.Markdown
  },
  repositoryURL: {
    type: Types.Url,
    initial: true,
    note: 'Link to the project URL on github.'
  },
  featureImage: {
    type: Types.CloudinaryImage,
    autoCleanup: true,
    select: true,
    publicID: 'slug'
  }
});


Project.defaultColumns = 'title, description, url';
Project.register();
