'use strict';
const fs = require('fs');
const nib = require('nib');
const stylus = require('stylus');

module.exports = parse;

function *parse(file) {
  file = file.replace('.css', '.styl');
  let exists = yield function(done) {
    fs.exists(file, function(exists) {
      done(null, exists);
    });
  };
  if(!exists){
    return '';
  }
  let data = yield function(done) {
    fs.readFile(file, 'utf8', done);
  };

  let css = yield function(done) {
    stylus(data).set('filename', file).use(nib()).render(done);
  };

  return css;
}
