'use strict';
const co = require('co');
const parser = require('./index');
co(function *() {
  let css = yield parser('./files/test.css');
  console.info(css);
  let es6 = yield parser('./files/test.js');
  console.info(es6);
}).catch(function (err) {
  console.error('message:' + err.message + ', stack:' + err.stack);
});
