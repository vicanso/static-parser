'use strict';
const fs = require('fs');
const babel = require("babel-core");

module.exports = parse;

function* parse(file) {
  file = file.replace('.js', '.es');
  let data = '';
  try {
    data = yield getData(file);
  } catch (e) {

  }

  file = file.replace('.es', '.jsx');
  data = yield getData(file);

  return babel.transform(data);
}

/**
 * [getData description]
 * @param  {[type]} file [description]
 * @return {[type]}      [description]
 */
function getData(file) {
  return new Promise(function (resolve, reject) {
    fs.readFile(file, 'utf8', function (err, str) {
      if (err) {
        reject(err);
      } else {
        resolve(str);
      }
    });
  });
}
