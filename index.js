'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    _           = require('underscore'),
    elixir      = require('laravel-elixir');

elixir.extend('browserSync', function (src, options, onlyTriggerShouldBeWatch) {
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

  var onlyTriggerShouldBeWatch = onlyTriggerShouldBeWatch || true;

  gulp.task('browser-sync', function () {
    
    var triggerTask = false;
    // checks if trigger was 'gulp watch'
    var taskIsWatch = (gulp.tasks.watch.done == true);

    if (onlyTriggerShouldBeWatch && taskIsWatch) { triggerTask = true; }
    if (!onlyTriggerShouldBeWatch) { triggerTask = true; }


    if (triggerTask)
    {
        // checks if trigger was 'gulp watch'
        if (gulp.tasks.watch.done == true) {

            if (!browserSync.active) {
              browserSync(options);
            } else {
              browserSync.reload();
            }
            
        }  
    }
    else
    {
        if (!browserSync.active) {
          browserSync(options);
        } else {
          browserSync.reload();
        }
    }

  });

  this.registerWatcher('browser-sync', src);

  return this.queueTask('browser-sync');
});
