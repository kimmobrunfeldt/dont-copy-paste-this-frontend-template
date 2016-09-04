const _ = require('lodash');

// Example of build time configuration
// envify is a Browserify transform which replaces all process.env.X references
// with build time environment variables.
// You must e.g. do
//    API_URL=x npm run build
//
// to change this variable.
if (_.isEmpty(process.env.API_URL)) {
  let message = 'API_URL is not defined. You must define API_URL environment'
  message += ' variable when building the frontend.'

  throw new Error(message);
}

module.exports = {
  API_URL: process.env.API_URL
};
