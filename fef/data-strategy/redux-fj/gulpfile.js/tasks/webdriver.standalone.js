'use strict';

var gulp = require('gulp'),
    webdriver_standalone = require("gulp-protractor").webdriver_standalone;
	
// Start the standalone selenium server
// NOTE: This is not needed if you reference the
// seleniumServerJar in your protractor.conf.js
gulp.task('webdriver:standalone', webdriver_standalone);
