'use strict';

var config = require('../config'),
  gulp = require('gulp'),
  serve = require('../utils/serve');

gulp.task('serve:prod', 'Serve production version of the code.', function () {
  var serverConfig = config.server.production;
  serve(serverConfig);
});
