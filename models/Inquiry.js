var keystone = require('keystone');
var Types = keystone.Field.Types;

const Inquiry = new keystone.List('Inquiry', {
  nocreate: true,
  noedit: true
});

Inquiry.add({
  fullName: {
    type: Types.Name,
    required: true
  },
  email: {
    type: Types.Email,
    required: true
  },
  category: {
    type: Types.Select,
    options: [
      {
        value: 'hire',
        label: 'I need your help on a project'
      },
      {
        value: 'jobWellDone',
        label: "I'd like to commend you on a job well done."
      },
      {
        value: 'hire',
        label: "I'd like to hire you."
      },
      {
        value: 'else',
        label: 'Something else.'
      }
    ]
  },
  message: {
    type: Types.Markdown,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

Inquiry.defaultSort = '-createdAt';
Inquiry.defaultColumns = 'name, email, category, createdAt';
Inquiry.register();
