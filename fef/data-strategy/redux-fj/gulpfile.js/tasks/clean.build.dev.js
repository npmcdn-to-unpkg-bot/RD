'use strict';

var config = require('../config'),
	gulp = require('gulp'),
	del = require('del');

gulp.task('clean:build:dev', 'Clean development build files.',
	del.bind(
		null, 
		[config.folders.dev]
	)
);