'use strict';

const _       = require('lodash');
const Promise = require('bluebird');
const request = Promise.promisify(require('request'));

module.exports = {
  request: function(path, options) {

    const base = 'https://store.steampowered.com/api';
    const url = path ? base + path : base;

    // Set up default options
    _.extend(options, {
      headers: {
        'Content-Type' : 'application/json',
        'Accepts' : 'application/json'
      },
      gzip: true,
      json: true,
      url: url
    });

    return Promise.resolve()
    .then(function() {
      return request(options);
    })
    .spread(function(res, body) {
      return [res, body];
    });
  }
};
