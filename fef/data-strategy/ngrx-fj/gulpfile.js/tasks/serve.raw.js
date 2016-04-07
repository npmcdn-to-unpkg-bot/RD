'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    serve = require('../utils/serve');

gulp.task('serve:raw', 'Serve raw version of the code.', function () {
  var serverConfig = config.server.raw;  
  serve(serverConfig);
});
