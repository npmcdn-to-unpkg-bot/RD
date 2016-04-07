'use strict';

var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('workflow:dev', 'Start coding in development mode.', ['serve:raw']);
