'use strict';
const fs = require('fs');
const babel = require("babel-core");

module.exports = parse;

function* parse(file) {
  file = file.replace('.js', '.es');
  let exist = fs.existSync(file);
  if (!exist) {
    file = file.replace('.es', '.jsx');
  }
  let data = yield new Promise(function (resolve, reject) {
    fs.readFile(file, 'utf8', function (err, str) {
      if (err) {
        reject(err);
      } else {
        resolve(str);
      }
    });
  });
  return babel.transform(data);
}
