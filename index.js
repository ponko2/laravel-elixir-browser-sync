'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var _           = require('underscore');
var elixir      = require('laravel-elixir');
var config      = elixir.config;

/**
 * Build the BrowserSync Gulp task.
 *
 * @param {array|null} options
 */
var buildTask = function(options) {
  gulp.task('browser-sync', function() {
    if (browserSync.active === true) {
      browserSync.reload();
    } else if (gulp.tasks.watch.done === true) {
      browserSync.init(options);
    }
  });
};

elixir.extend('browserSync', function(src, options) {
  var defaultSrc = [
    'app/**/*',
    'public/**/*',
    'resources/views/**/*'
  ];

  var defaultOptions = {
    notify: false,
    proxy: 'homestead.app'
  };

  buildTask(_.extend(defaultOptions, options));

  if (config.production === false) {
    this.registerWatcher('browser-sync', src || defaultSrc);
  }

  return this.queueTask('browser-sync');
});
