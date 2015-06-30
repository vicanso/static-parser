'use strict';
const path = require('path');
const stylus = require('./lib/stylus');

module.exports = parser;

function *parser(file) {
  let ext = path.extname(file);
  let result = null;
  if(ext === '.css'){
    let css = yield stylus(file);
    result = {
      body : css,
      'Content-Type' : 'text/css; charset=utf-8'
    };
  }
  return result;
}
