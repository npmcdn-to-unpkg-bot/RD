'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    useref = require('gulp-useref'),
    htmlmin = require('gulp-htmlmin'),
    inject = require('gulp-inject');

gulp.task('build:html:dev', 'Build minified and injected index HTML.', function () {
  return gulp.src(config.files.htmlEntry)
    .pipe(useref())
    .pipe(htmlmin({ collapseWhitespace: false }))
    .pipe(gulp.dest(config.folders.dev));
});