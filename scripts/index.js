// A few external library requires as an example
const BPromise = require('bluebird');
const attachFastClick = require('fastclick');

const config = require('./config');

function main() {
  attachFastClick(document.body);

  console.log('main() here.');

  fetch(config.API_URL)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      throw err;
    });
}

window.onload = main;
