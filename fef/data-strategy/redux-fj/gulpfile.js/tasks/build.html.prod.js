'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    useref = require('gulp-useref'),
    htmlmin = require('gulp-htmlmin'),
    inject = require('gulp-inject');

gulp.task('build:html:prod', 'Build minified and injected index HTML.', function () {
  return gulp.src(config.files.htmlEntry)
    .pipe(useref())
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest(config.folders.dist));
});