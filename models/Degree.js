const keystone = require('keystone');
const Types = keystone.Field.Types;

const Degree = new keystone.List('Degree', {
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

Degree.add({
  title: {
    type: String,
    initial: true,
    required: true
  },
  school: {
    type: String,
    initial: true,
    required: true
  },
  dates: {
    from: {
      type: String
    },
    to: {
      type: String
    }
  },
  certificate: {
    url: {
      type: Types.Url,
      note: 'The full url including http://'
    },
    image: {
      type: Types.CloudinaryImage
    }
  },
  description: {
    type: Types.Markdown,
    height: 200
  }
});

Degree.defaultSort = '-dates.to';
Degree.defaultColumns = 'name, school|20%, description|20%';
Degree.register();
