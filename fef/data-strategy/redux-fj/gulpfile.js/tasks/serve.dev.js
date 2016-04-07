'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    serve = require('../utils/serve');

gulp.task('serve:dev', 'Serve development version of the code.', function () {
  var serverConfig = config.server.development;  
  serve(serverConfig);
});
