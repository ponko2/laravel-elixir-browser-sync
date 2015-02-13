'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    _           = require('underscore'),
    elixir      = require('laravel-elixir');

elixir.extend('browserSync', function (src, options) {
  var defaultSrc = [
    'app/**/*',
    'public/**/*',
    'resources/views/**/*'
  ];

  src     = src || defaultSrc;
  options = _.extend({
    notify: false,
    proxy: 'homestead.app'
  }, options);

  gulp.task('browser-sync', function () {
    
    // with the production flag BrowserSync aren't allowed to startup
    if (!config.production && !browserSync.active) { browserSync(options) }
    if (browserSync.active) { browserSync.reload(); } 

  });

  this.registerWatcher('browser-sync', src);

  return this.queueTask('browser-sync');
});
