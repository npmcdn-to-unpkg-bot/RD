'use strict';

var gulp = require('gulp'),
    webdriver_update = require("gulp-protractor").webdriver_update ;
	
// Downloads the selenium webdriver
gulp.task('webdriver:update', webdriver_update);
