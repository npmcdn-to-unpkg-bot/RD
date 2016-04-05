'use strict';

var gulp = require('gulp'),
    gulpSequence = require('gulp-sequence');

gulp.task('workflow:prod', 'Start coding in production mode.', 
	gulpSequence('build:prod', 'serve:prod')
);
