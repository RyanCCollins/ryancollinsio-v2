var keystone = require('keystone');
var Types = keystone.Field.types;

var ProjectCategory = new keystone.List('ProjectCategory', {
  track: true,
  autokey: {
    from: 'name',
    path: 'key',
    unique: true
  }
});

ProjectCategory.add({
  name: {
    type: String,
    required: true
  }
});

ProjectCategory.relationship({
  ref: 'Project',
  refPath: 'categories',
  path: 'post'
});

ProjectCategory.register();
