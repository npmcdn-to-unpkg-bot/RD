'use strict';

var gulp = require('gulp'),
	gulpSequence = require('gulp-sequence');

gulp.task('build:prod', 'Build entire production version of the code.',
	//gulpSequence(['clean:build:prod', 'lint:ts'], ['build:bundle:app:prod', 'build:html:prod'])
	gulpSequence(['clean:build:prod'], ['build:bundle:app:prod', 'build:html:prod'])
);