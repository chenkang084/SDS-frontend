'use strict';

var gulp = require('gulp');
var wrench = require('wrench');

/**
 *  This will load all js or coffee files in the gulp directory
 *  in order to load all gulp tasks
 */
wrench.readdirSyncRecursive('./build').filter(function(file) {
  return (/\.gulp.(js|coffee)$/i).test(file);
}).map(function(file) {
  require('./build/' + file);
});



