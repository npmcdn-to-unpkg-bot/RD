'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    jspm = require('jspm'),
    path = require('path');

gulp.task('build:bundle:app:prod', 'Build production ready JavaScript (SFX bundle).', function() {
  return jspm.bundleSFX(
    config.files.bootstrapModule,
    path.join(config.folders.dist, config.files.compiledModule),
    { sourceMaps: false, minify: true, mangle: true }
  );
});