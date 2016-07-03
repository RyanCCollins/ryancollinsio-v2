const keystone = require('keystone');
const Inquiry = keystone.list('Inquiry');

exports = module.exports = function(req, res) {
  const item = new Inquiry.model();
  const data = (req.method == 'POST') ? req.body : req.query;

  item.getUpdateHandler(req).process(data, function(err) {
    if (err) {
      return res.apiResponse({ success: false, error: err });
    }
    res.apiResponse({ success: true, inquiry: item });
  });
};
