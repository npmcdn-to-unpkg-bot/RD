'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    typescript = require('gulp-typescript'),
    sourcemaps = require('gulp-sourcemaps'),
    path = require('path');

var tsConfig = require('../../src/tsconfig.json');

var source = [
  config.typescript.allSourceFiles,
  '!' + path.join(config.dependencyPaths.node, config.globs.all),
  '!' + path.join(config.dependencyPaths.jspm, config.globs.all),
  '!' + path.join(config.dependencyPaths.typings, config.globs.all)
];

gulp.task('build:js:dev', function () {
  return gulp.src(source)
    .pipe(sourcemaps.init())
    .pipe(typescript(tsConfig.compilerOptions))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.folders.dev));
});