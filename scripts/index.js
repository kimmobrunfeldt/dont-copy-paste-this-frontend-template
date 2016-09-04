// A few external library requires as an example
const BPromise = require('bluebird');
const attachFastClick = require('fastclick');

const config = require('./config');

function main() {
  console.log('Executing main() ..');
  console.log(`This bundle.js points to API_URL=${config.API_URL}`);

  // As an example
  attachFastClick(document.body);
}

window.onload = main;
