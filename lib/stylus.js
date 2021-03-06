'use strict';
const fs = require('fs');
const nib = require('nib');
const stylus = require('stylus');

module.exports = parse;

function *parse(file) {
  file = file.replace('.css', '.styl');
  let data = yield new Promise(function(resolve, reject) {
    fs.readFile(file, 'utf8', function (err, str) {
      if (err) {
        reject(err);
      } else {
        resolve(str);
      }
    });
  });
  let css = yield function(done) {
    stylus(data).set('filename', file).use(nib()).render(done);
  };

  return css;
}
