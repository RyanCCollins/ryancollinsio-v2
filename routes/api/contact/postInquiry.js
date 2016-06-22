var keystone = require('keystone');
var Inquiry = keystone.list('Inquiry');

exports = module.exports = function(req, res) {
  var newInquiry = new Inquiry.model();
  var updater = newInquiry.getUpdateHandler(req);

  var locals = res.locals;

  // Set locals
  locals.section = 'contact';
  locals.categories = Inquiry.fields.category.options;
  locals.formData = req.body || {};
  locals.validationErrors = {};
  locals.inquirySubmitted = false;

  function submitDataToApi(data, updater) {
    return new Promise((resolve, reject) => {
      updater.process(data, {
        flashErrors: false,
        fields: 'fullName, email, category, text',
        errorMessage: 'There was an error submitting the inqury.'
      }, (error) => {
        reject(error);
      }).then(())

    })
  }

  updater.process(req.body, {
    flashErrors: true,
    fields: 'fullName, email, category, text',
    errorMessage: 'There was an error submitting the inqury.'
  }, function(err) {
    if (err) {
      locals.validationErrors = err.errors;
    } else {
      locals.inquirySubmitted = true;
    }
    next();
  });
};
