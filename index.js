var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    _           = require('underscore'),
    elixir      = require('laravel-elixir');

elixir.extend("browserSync", function (src, options) {
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

  gulp.task("browser-sync", function () {
    if (!browserSync.active) {
      browserSync(options);
    } else {
      browserSync.reload();
    }
  });

  this.registerWatcher("browser-sync", src);

  return this.queueTask("browser-sync");
});
