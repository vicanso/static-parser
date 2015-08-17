'use strict';
const fs = require('fs');

function *get() {
  return yield new Promise(function(resolve, reject) {
    fs.readFile('a.txt', function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
