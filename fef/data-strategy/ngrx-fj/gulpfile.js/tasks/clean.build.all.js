'use strict';

var gulp = require('gulp');

gulp.task('clean:build:all', 'Clean all build files.', ['clean:build:dev','clean:build:prod']);