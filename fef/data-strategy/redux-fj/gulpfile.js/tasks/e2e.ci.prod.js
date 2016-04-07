var gulp = require('gulp'),
  exec = require('child_process').exec,
  concurrent = require('../utils/concurrent-dependent-process');

gulp.task('e2e:ci:prod', function () {
  concurrent('gulp serve:prod', 'gulp e2e:prod');
});