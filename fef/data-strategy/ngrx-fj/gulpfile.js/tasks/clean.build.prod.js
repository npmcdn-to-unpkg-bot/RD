'use strict';

var config = require('../config'),
	gulp = require('gulp'),
	del = require('del');

gulp.task('clean:build:prod', 'Clean production build files.',
	del.bind(
		null, 
		[config.folders.dist]
	)
);