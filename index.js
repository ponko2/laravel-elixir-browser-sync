'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var _           = require('underscore');
var Elixir      = require('laravel-elixir');
var config      = Elixir.config;
var $           = Elixir.Plugins;

Elixir.extend('browserSync', function (src, options) {
  var defaultSrc = [
    config.appPath + '/**/*',
    config.publicPath + '/**/*',
    '!' + config.publicPath + '/build/**/*',
    'resources/views/**/*'
  ];

  var defaultOptions = {
    notify: false,
    proxy: 'homestead.app'
  };

  gulp.task('serve', function () {
    browserSync.init(_.extend(defaultOptions, options));

    $.util.env._[0] = 'watch';
    gulp.start('watch');
  });

  if (config.production === false) {
    new Elixir.Task('browser-sync', function () {
      if (browserSync.active === true) {
        browserSync.reload();
      }
    })
    .watch(src || defaultSrc);
  }
});
