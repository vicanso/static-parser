'use strict';
const path = require('path');
const stylus = require('./lib/stylus');
const es6 = require('./lib/es6');

module.exports = parser;

function *parser(file) {
  let ext = path.extname(file);
  let result = null;
  if (ext === '.css') {
    let css = yield stylus(file);
    result = {
      body : css,
      'Content-Type' : 'text/css; charset=utf-8'
    };
  } else if (ext === '.js') {
    let data = yield es6(file);
    result = {
      body : data.code,
      'Content-Type' : 'application/javascript; charset=utf-8'
    };
  }
  return result;
}
