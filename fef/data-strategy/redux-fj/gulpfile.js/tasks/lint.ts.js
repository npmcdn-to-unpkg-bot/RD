'use strict';

var config = require('../config'),
  gulp = require('gulp'),
  tslint = require('gulp-tslint'),
  stylish = require('gulp-tslint-stylish'),
  path = require('path');

var source = [
  config.typescript.allSourceFiles,
  '!' + path.join(config.dependencyPaths.node, config.globs.all),
  '!' + path.join(config.dependencyPaths.jspm, config.globs.all),
  '!' + path.join(config.dependencyPaths.typings, config.globs.all)
];

gulp.task('lint:ts', 'Static analysis of TypeScript code for errors.', function () {
  return gulp.src(source)
    .pipe(tslint())
    .pipe(tslint.report(stylish, {
      emitError: true,
      sort: true,
      bell: true,
      fullPath: true
    }));
});