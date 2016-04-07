'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    protractor = require("gulp-protractor").protractor;

gulp.task('e2e:prod', 'Run e2e tests using production code.', ['webdriver:update'], function(done){
  gulp.src(['src/app/**/*.e2e.ts'], { read:false })
    .pipe(protractor({
			configFile: config.files.baseProtractor,
			args: ['--baseUrl', 'http://' + 'localhost' + ':' + config.server.production.port]      
    })).on('error', function(e) {
			console.log(e);
			done();
		}).on('end', function() {
			done();
		});
});