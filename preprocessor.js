const babelJest = require('babel-jest');

module.exports = {
  process(src, filename) {
    return babelJest.process(
      src.replace(/import(.*)from.*\.((less)|(scss)|(svg)).*;/gi, 'let $1 = {};'
    ), filename);
  }
};
